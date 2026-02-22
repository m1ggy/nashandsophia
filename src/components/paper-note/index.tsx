import { ReactNode, useLayoutEffect, useRef, useState } from 'react'

const PaperNote = ({
  className = '',
  children,
  tilt = 0,

  topSrc = '/paper-top.png',
  midSrc = '/paper-mid.png',
  bottomSrc = '/paper-bottom.png',

  paddingX = '12%',
  paddingTop = '10%',
  paddingBottom = '12%',

  // base (design-time) pixel values
  baseMidTileHeight = 614,
  baseSeamOverlap = 2,
  baseBottomOverlap = 250,
  baseBottomSafe = 220,
  baseExtraMidPixels = 24,

  // seam tuning
  topOverlap = 0,

  // top tightening
  topSafe = 0,
  tightenTop = 90,
}: {
  children: ReactNode
  className?: string
  tilt?: number
  topSrc?: string
  midSrc?: string
  bottomSrc?: string
  paddingX?: string
  paddingTop?: string
  paddingBottom?: string
  baseMidTileHeight?: number
  baseSeamOverlap?: number
  baseBottomOverlap?: number
  baseBottomSafe?: number
  baseExtraMidPixels?: number
  topOverlap?: number
  topSafe?: number
  tightenTop?: number
}) => {
  const measureRef = useRef<HTMLDivElement | null>(null)
  const rafRef = useRef<number | null>(null)

  const topImgRef = useRef<HTMLImageElement | null>(null)
  const midImgRef = useRef<HTMLImageElement | null>(null)
  const bottomImgRef = useRef<HTMLImageElement | null>(null)

  const [midCount, setMidCount] = useState(1)
  const [midHeight, setMidHeight] = useState(baseMidTileHeight)
  const [isSmall, setIsSmall] = useState(false)

  // tighten text under flowers
  const computedPaddingTopPx = Math.max(0, topSafe - tightenTop)

  /* ---------------- MOBILE WIDTH EXPANSION ---------------- */
  useLayoutEffect(() => {
    const mq = window.matchMedia('(max-width: 480px)')
    const apply = () => setIsSmall(mq.matches)
    apply()
    mq.addEventListener?.('change', apply)
    return () => mq.removeEventListener?.('change', apply)
  }, [])

  /* ---------------- HEIGHT / TILE MEASUREMENT ---------------- */
  useLayoutEffect(() => {
    const contentEl = measureRef.current
    if (!contentEl) return
    const topImg = topImgRef.current
    const midImg = midImgRef.current
    const botImg = bottomImgRef.current

    const measure = () => {
      const renderedMidH = Math.ceil(midImgRef.current?.getBoundingClientRect().height || 0)
      if (!renderedMidH) return

      const scale = renderedMidH / baseMidTileHeight

      const seamOverlap = Math.max(1, Math.round(baseSeamOverlap * scale))
      const bottomOverlap = Math.round(baseBottomOverlap * scale)
      const bottomSafe = Math.round(baseBottomSafe * scale)
      const extraMidPixels = Math.round(baseExtraMidPixels * scale)

      const contentH = Math.ceil(contentEl.getBoundingClientRect().height)

      const neededH = contentH + bottomSafe + extraMidPixels
      const neededWithTop = neededH + topOverlap

      const effectiveTile = renderedMidH - seamOverlap
      const tiles = Math.max(1, Math.ceil(neededWithTop / effectiveTile))

      setMidCount((p) => (p !== tiles ? tiles : p))

      const visibleMid = Math.max(0, neededWithTop - bottomOverlap)
      setMidHeight((p) => (Math.abs(p - visibleMid) > 1 ? visibleMid : p))
    }

    const schedule = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(measure)
    }

    const onImgLoad = () => schedule()

    topImgRef.current?.addEventListener('load', onImgLoad)
    midImgRef.current?.addEventListener('load', onImgLoad)
    bottomImgRef.current?.addEventListener('load', onImgLoad)

    schedule()

    const ro = new ResizeObserver(schedule)
    ro.observe(contentEl)
    if (topImgRef.current) ro.observe(topImgRef.current)
    if (midImgRef.current) ro.observe(midImgRef.current)
    if (bottomImgRef.current) ro.observe(bottomImgRef.current)

    window.addEventListener('resize', schedule)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      ro.disconnect()
      window.removeEventListener('resize', schedule)

      if (topImg) topImg?.removeEventListener('load', onImgLoad)
      if (midImg) midImg?.removeEventListener('load', onImgLoad)
      if (botImg) botImg?.removeEventListener('load', onImgLoad)
    }
  }, [
    children,
    baseMidTileHeight,
    baseSeamOverlap,
    baseBottomOverlap,
    baseBottomSafe,
    baseExtraMidPixels,
    topOverlap,
    topSafe,
    tightenTop,
  ])

  /* ---------------- RENDER ---------------- */
  return (
    <div
      className={className}
      style={{
        transform: `rotate(${tilt}deg)`,
        width: isSmall ? '112%' : '100%',
        marginLeft: isSmall ? '-6%' : 0,
      }}
    >
      {/* TOP */}
      <img
        ref={topImgRef}
        src={topSrc}
        alt=""
        aria-hidden
        style={{ display: 'block', width: '100%', pointerEvents: 'none' }}
      />

      {/* MID */}
      <div style={{ marginTop: -topOverlap }}>
        <div style={{ position: 'relative', height: midHeight, overflow: 'hidden' }}>
          {Array.from({ length: midCount }).map((_, i) => (
            <img
              key={i}
              ref={i === 0 ? midImgRef : undefined}
              src={midSrc}
              alt=""
              aria-hidden
              style={{
                display: 'block',
                width: '100%',
                pointerEvents: 'none',
                marginTop: i === 0 ? 0 : -1,
              }}
            />
          ))}

          {/* visible content */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              paddingLeft: paddingX,
              paddingRight: paddingX,
              paddingTop: `calc(${paddingTop} + ${computedPaddingTopPx}px)`,
              paddingBottom,
            }}
          >
            {children}
          </div>

          {/* hidden measurer */}
          <div
            ref={measureRef}
            aria-hidden
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              visibility: 'hidden',
              pointerEvents: 'none',
              paddingLeft: paddingX,
              paddingRight: paddingX,
              paddingTop: `calc(${paddingTop} + ${computedPaddingTopPx}px)`,
              paddingBottom,
            }}
          >
            {children}
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <img
        ref={bottomImgRef}
        src={bottomSrc}
        alt=""
        aria-hidden
        style={{ display: 'block', width: '100%', pointerEvents: 'none' }}
      />
    </div>
  )
}

export default PaperNote
