import { useTranslation } from 'react-i18next'
import PaperNote from 'src/components/paper-note'
export default function Home() {
  const { t } = useTranslation('translation')

  const principalSponsors = {
    ladies: [
      'Rochelle Francisco',
      'Suzette Refugia',
      'Dijiana Lim',
      'Katrina Fernandez',
      'Ericka Gonzalvo',
      'Mariestella Cruz',
      'Analee Casamina',
      'Ria Ramos',
    ],
    gentlemen: [
      'Edison Taperla',
      'Aaron Refugia',
      'Alex Cautivo',
      'Miguel Buising',
      'John Mark Fernandez',
      'Jake Gonzalvo',
      'Geraldo Casamina',
      'Jaime Aguirre Viray',
      'Marco Jodan Catangay',
      'Ludwigie Villaran',
    ],
  }

  const assistNeeds = {
    bestMan: 'Maximo Jesuitas II',
    maidOfHonor: 'Daniela Jade Iraham',
  }

  const littleOnes = {
    flowerGirls: ['Elixia Kattyrene Ramos', 'Amira Bless Bernados'],
    ringBearers: ['Keiko Fernandez', 'Luiz Alexandre Villaester', 'Juleus Jesuitas', 'Lanz Alexandre Villaester'],
  }

  const colorSwatches = [
    { name: 'Blush Pink', hex: '#F4B9CD' },
    { name: 'Lavender', hex: '#C59AC7' },
    { name: 'Butter Yellow', hex: '#FBE47E' },
    { name: 'Warm Orange', hex: '#F49F4E' },
    { name: 'Powder Blue', hex: '#B3C5D2' },
    { name: 'Sage Green', hex: '#A8BF9D' },
    { name: 'Rose', hex: '#E2A2A3' },
  ]

  const CardBanner = ({ className = '' }) => (
    <div className={`relative w-full ${className}`}>
      <img
        src="/flowers-banner.png"
        alt="Floral banner"
        className="w-full opacity-95"
        style={{ filter: 'drop-shadow(0 10px 18px rgba(0,0,0,0.08))' }}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-b from-transparent to-white/10" />
    </div>
  )

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        {/* HERO */}
        <section className="min-h-screen snap-start flex flex-col items-center justify-center text-center gap-6 py-20">
          <h1 className="font-heading text-4xl sm:text-5xl tracking-[0.25em] uppercase">
            {t('wedding.title', 'The Wedding of')}
          </h1>

          <div className="text-3xl sm:text-4xl">
            <span className="font-romantic uppercase tracking-[0.25em]">{t('wedding.names', 'NASH & SOPHIA')}</span>
          </div>

          <img src="/hero.png" alt="Nash and Sophia" className="w-3/4 sm:w-2/3 max-w-2xl pt-6" />
        </section>

        {/* INVITATION */}
        <section className="min-h-screen snap-start flex items-center justify-center py-20">
          <div className="w-full max-w-3xl rounded-3xl overflow-hidden glass text-center">
            <CardBanner />
            <div className="p-10">
              <h2 className="font-heading text-3xl sm:text-4xl uppercase tracking-[0.22em]">
                {t('invite.heading', 'INVITATION')}
              </h2>

              <p className="mt-8 font-romantic-soft text-xl sm:text-2xl leading-relaxed text-balance">
                {t(
                  'invite.message',
                  'With joyful hearts and grateful love, we invite you to celebrate the union of Nash and Sophia as they begin their new life together.',
                )}
              </p>

              {/* COLUMN layout (not row) */}
              <div className="mt-10 grid grid-cols-1 gap-6 text-lg text-center">
                {[
                  ['Date', 'March 31, 2026'],
                  ['Time', '4:00 PM'],
                  ['Place', 'Simple Restaurant, Tanay, Rizal'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl p-6 glass-soft">
                    <div className="font-heading uppercase tracking-[0.18em] opacity-70">
                      {t(`details.${label.toLowerCase()}Label`, label)}
                    </div>
                    <div className="mt-3 text-xl">{value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <a
                  href="https://www.jotform.com/app/260390345962460"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading inline-flex items-center justify-center rounded-full
                    px-12 py-4 text-xl uppercase tracking-[0.25em]
                    bg-white/45 backdrop-blur-md text-black hover:bg-black hover:text-white transition-all
                    outline outline-1 outline-black/10"
                >
                  RSVP
                </a>
                <p className="mt-4 font-romantic-soft text-base">We would love to celebrate with you</p>
              </div>
            </div>
          </div>
        </section>

        {/* INVITATION DETAILS */}
        <section className="min-h-screen snap-start flex items-center justify-center py-20">
          <div className="w-full max-w-3xl">
            <CardBanner />
            <div className="p-10">
              <h2 className="font-heading text-3xl sm:text-4xl uppercase tracking-[0.22em] text-center">
                {t('entourage.heading', 'INVITATION DETAILS')}
              </h2>

              {/* ONE BIG PAPER NOTE — COLUMN LAYOUT */}
              <div className="mt-10">
                <PaperNote tilt={0}>
                  {/* THE ENTOURAGE */}
                  <section className="text-center">
                    <h3 className="font-heading text-xl sm:text-2xl uppercase tracking-[0.2em]">THE ENTOURAGE</h3>
                    <p className="mt-2 text-lg opacity-90">Principal Sponsors</p>

                    <div className="mt-8 space-y-10">
                      {/* LADIES */}
                      <div>
                        <div className="font-heading text-sm uppercase tracking-[0.22em] opacity-70">LADIES</div>
                        <ul className="mt-4 space-y-2 text-[17px] leading-relaxed">
                          {principalSponsors.ladies.map((name) => (
                            <li key={name} className="text-black/80">
                              {name}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* GENTLEMEN */}
                      <div>
                        <div className="font-heading text-sm uppercase tracking-[0.22em] opacity-70">GENTLEMEN</div>
                        <ul className="mt-4 space-y-2 text-[17px] leading-relaxed">
                          {principalSponsors.gentlemen.map((name) => (
                            <li key={name} className="text-black/80">
                              {name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* ASSIST NEEDS */}
                  <section className="text-center">
                    <p className="font-heading text-sm uppercase tracking-[0.22em] opacity-70">
                      TO ASSIST US IN OUR NEEDS
                    </p>

                    <div className="mt-8 space-y-6">
                      <div>
                        <div className="font-heading text-sm uppercase tracking-[0.22em] opacity-70">BEST MAN</div>
                        <div className="mt-2 text-lg text-black/80">{assistNeeds.bestMan}</div>
                      </div>

                      <div>
                        <div className="font-heading text-sm uppercase tracking-[0.22em] opacity-70">MAID OF HONOR</div>
                        <div className="mt-2 text-lg text-black/80">{assistNeeds.maidOfHonor}</div>
                      </div>
                    </div>
                  </section>

                  {/* LITTLE ONES */}
                  <section className="text-center">
                    <p className="font-heading text-sm uppercase tracking-[0.22em] opacity-70">LITTLE ONES</p>

                    <div className="mt-8 space-y-10">
                      <div>
                        <div className="font-heading text-sm uppercase tracking-[0.22em] opacity-70">FLOWER GIRLS</div>
                        <ul className="mt-4 space-y-2 text-[17px] leading-relaxed">
                          {littleOnes.flowerGirls.map((n) => (
                            <li key={n} className="text-black/80">
                              {n}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <div className="font-heading text-sm uppercase tracking-[0.22em] opacity-70">RING BEARERS</div>
                        <ul className="mt-4 space-y-2 text-[17px] leading-relaxed">
                          {littleOnes.ringBearers.map((n) => (
                            <li key={n} className="text-black/80">
                              {n}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </section>
                </PaperNote>
              </div>
            </div>
          </div>
        </section>

        {/* ATTIRE + COLOR PALETTE */}
        <section className="min-h-screen snap-start flex items-center justify-center py-20">
          <div className="w-full max-w-3xl rounded-3xl overflow-hidden glass">
            <CardBanner />
            <div className="p-10">
              <h2 className="font-heading text-3xl sm:text-4xl uppercase tracking-[0.22em] text-center">
                {t('style.heading', 'ATTIRE & COLORS')}
              </h2>

              <div className="mt-10 rounded-3xl glass-soft p-8">
                <h3 className="font-heading text-2xl uppercase tracking-[0.2em] text-center">
                  {t('attire.heading', 'Attire Guide')}
                </h3>

                <div className="mt-6 grid sm:grid-cols-2 gap-6 text-left">
                  <div className="rounded-2xl glass-soft p-6">
                    <div className="font-heading text-sm uppercase tracking-[0.22em] opacity-70">
                      {t('attire.gentlemenLabel', 'Gentlemen')}
                    </div>
                    <div className="mt-2 text-xl">{t('attire.gentlemen', 'Barong')}</div>
                  </div>

                  <div className="rounded-2xl glass-soft p-6">
                    <div className="font-heading text-sm uppercase tracking-[0.22em] opacity-70">
                      {t('attire.ladiesLabel', 'Ladies')}
                    </div>
                    <div className="mt-2 text-xl">{t('attire.ladies', 'Formal dresses in soft pastel shades')}</div>
                  </div>
                </div>

                <p className="mt-6 font-romantic-soft text-center text-lg opacity-90">
                  {t('palette.note', 'Color palette inspiration below')}
                </p>
              </div>

              <div className="mt-10 rounded-3xl glass-soft p-8">
                <h3 className="font-heading text-2xl uppercase tracking-[0.2em] text-center">
                  {t('palette.heading', 'Palette')}
                </h3>

                <div className="mt-10 flex flex-wrap justify-center gap-6 sm:gap-8">
                  {colorSwatches.map((swatch) => (
                    <div key={swatch.hex} className="flex flex-col items-center">
                      <div
                        className="h-20 w-20 sm:h-24 sm:w-24 rounded-full shadow-sm ring-1 ring-black/5"
                        style={{ backgroundColor: swatch.hex }}
                        aria-label={swatch.name}
                        title={`${swatch.name} ${swatch.hex}`}
                      />
                      <div className="mt-2 text-sm opacity-80">{swatch.name}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center text-sm opacity-80">
                  {t('palette.soft', 'Soft pastel tones inspired by our florals')}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* THANK YOU */}
      <section
        className="min-h-screen snap-start flex items-center justify-center bg-cover bg-center px-6 py-20"
        style={{ backgroundImage: "url('/background_bottom_footer.png')" }}
      >
        <div className="w-full max-w-3xl text-center">
          <CardBanner />
          <div className="p-12">
            <h2 className="font-heading text-4xl uppercase tracking-[0.25em]">THANK YOU</h2>

            <p className="mt-8 font-romantic-soft text-xl sm:text-2xl leading-relaxed">
              Thank you for being part of our journey. Your presence, love, and blessings mean more to us than words can
              say.
            </p>

            <p className="mt-8 text-3xl">
              With love, <br /> Nash & Sophia
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
