import path from 'path'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// adjust if needed
const input = path.resolve(__dirname, '../public/torn-paper.png')

// how big the caps should be as a % of height (tweak if you want)
const TOP_PCT = 0.3 // ~520 / 2048
const BOTTOM_PCT = 0.3 // ~528 / 2048

async function slice() {
  const img = sharp(input)
  const meta = await img.metadata()

  const W = meta.width
  const H = meta.height

  if (!W || !H) throw new Error('Could not read image dimensions')

  // compute cap heights based on actual image size
  const topH = Math.round(H * TOP_PCT)
  const bottomH = Math.round(H * BOTTOM_PCT)

  // middle takes the rest
  const midY = topH
  const midH = H - topH - bottomH

  // guard rails
  if (topH <= 0 || bottomH <= 0 || midH <= 0) {
    throw new Error(`Bad slice sizes: topH=${topH}, midH=${midH}, bottomH=${bottomH} for H=${H}`)
  }

  // output next to your input (you can change this)
  const outDir = path.dirname(input)

  await sharp(input).extract({ left: 0, top: 0, width: W, height: topH }).toFile(path.join(outDir, 'paper-top.png'))

  await sharp(input).extract({ left: 0, top: midY, width: W, height: midH }).toFile(path.join(outDir, 'paper-mid.png'))

  await sharp(input)
    .extract({ left: 0, top: midY + midH, width: W, height: bottomH })
    .toFile(path.join(outDir, 'paper-bottom.png'))

  console.log('✅ Done')
  console.log({ width: W, height: H, topH, midH, bottomH })
}

slice().catch((e) => {
  console.error('❌', e)
  process.exit(1)
})
