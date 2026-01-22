import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation('translation')

  return (
    <div className="py-8 px-4">
      <div className="mx-auto max-w-3xl flex flex-col items-center text-center gap-3">
        {/* Header */}
        <h1 className="text-3xl tracking-wide uppercase">{t('wedding.title', 'WEDDING')}</h1>
        <div className="text-lg">
          <span className="tracking-wide uppercase">{t('wedding.names', 'NASH & SOPHIA')}</span>
        </div>

        {/* Hero Illustration */}
        <div className="flex justify-center w-full">
          <img src="/hero.png" className="w-2/4 max-w-md" alt="Nash and Sophia" />
        </div>

        {/* Invitation copy */}
        <div className="mt-6 w-full max-w-xl rounded-2xl p-6 bg-white/60 backdrop-blur-sm">
          <h2 className="text-2xl tracking-wide uppercase">{t('invite.heading', 'INVITATION')}</h2>

          <p className="mt-4 leading-relaxed">
            {t(
              'invite.message',
              'With joyful hearts and grateful love, we invite you to celebrate the union of Nash and Sophia as they begin their new life together.',
            )}
          </p>

          {/* Details */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div className="rounded-xl p-3 bg-white/70">
              <div className="uppercase tracking-wide opacity-70">{t('details.dateLabel', 'Date')}</div>
              <div className="mt-1 font-medium">{t('details.date', 'December 9, 2026')}</div>
            </div>

            <div className="rounded-xl p-3 bg-white/70">
              <div className="uppercase tracking-wide opacity-70">{t('details.timeLabel', 'Time')}</div>
              <div className="mt-1 font-medium">{t('details.time', '4:30 PM')}</div>
            </div>

            <div className="rounded-xl p-3 bg-white/70">
              <div className="uppercase tracking-wide opacity-70">{t('details.placeLabel', 'Place')}</div>
              <div className="mt-1 font-medium">{t('details.place', '[Venue Name], [City]')}</div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-8 w-full max-w-xl rounded-2xl p-6 bg-white/60 backdrop-blur-sm">
          <h2 className="text-2xl tracking-wide uppercase">{t('timeline.heading', 'TIMELINE')}</h2>

          <div className="mt-4 space-y-3 text-left">
            <div className="flex justify-between gap-4">
              <span className="font-medium">{t('timeline.photo.time', '15:00')}</span>
              <span className="opacity-80">{t('timeline.photo.label', 'Photo Session')}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="font-medium">{t('timeline.ceremony.time', '16:30')}</span>
              <span className="opacity-80">{t('timeline.ceremony.label', 'Ceremony')}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="font-medium">{t('timeline.dinner.time', '17:30')}</span>
              <span className="opacity-80">{t('timeline.dinner.label', 'Dinner')}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="font-medium">{t('timeline.afterparty.time', '18:30')}</span>
              <span className="opacity-80">{t('timeline.afterparty.label', 'After Party')}</span>
            </div>
          </div>
        </div>

        <div
          className="text-center
        relative
        overflow-hidden  bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/footer-illustration.png')",
          }}
        >
          <div
            className="
        mt-8 w-full max-w-xl
        rounded-2xl
        bg-cover bg-center bg-no-repeat
        p-8
        text-center
        relative
        overflow-hidden
      "
          >
            {/* Optional soft overlay for readability */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-2xl tracking-wide uppercase">{t('thankyou.heading', 'THANK YOU')}</h2>

              <p className="mt-4 leading-relaxed">
                {t(
                  'thankyou.message',
                  'Thank you for being part of our journey. Your presence, love, and blessings mean more to us than words can say. We can’t wait to celebrate with you.',
                )}
              </p>

              <p className="mt-4 font-medium">{t('thankyou.signature', 'With love, Nash & Sophia')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
