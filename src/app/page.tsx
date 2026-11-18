'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ShieldCheck, TrendingUp, Wallet, Sparkles } from 'lucide-react'
import { useApp, lessonId } from '../lib/store'
import { t } from '../lib/i18n'
import { TRACKS, ALL_LESSONS } from '../lib/content'
import TrackIcon from '../components/TrackIcon'
import ProgressBar from '../components/ProgressBar'

export default function HomePage() {
  const { lang, done } = useApp()
  const doneCount = ALL_LESSONS.filter(({ track, lesson }) => done.includes(lessonId(track.slug, lesson.slug))).length

  const principles = [
    { icon: Wallet, title: t(lang, 'principle1T'), body: t(lang, 'principle1B') },
    { icon: Sparkles, title: t(lang, 'principle2T'), body: t(lang, 'principle2B') },
    { icon: ShieldCheck, title: t(lang, 'principle3T'), body: t(lang, 'principle3B') },
    { icon: TrendingUp, title: t(lang, 'principle4T'), body: t(lang, 'principle4B') },
  ]

  return (
    <div className="flex flex-col gap-12">
      <section className="grid items-center gap-6 md:grid-cols-2">
        <div>
          <h1 className="mb-4 text-3xl font-bold leading-snug text-palm-900 dark:text-gold-300 md:text-4xl">
            {t(lang, 'heroTitle')}
          </h1>
          <p className="mb-6 leading-relaxed text-stone-600 dark:text-stone-300">{t(lang, 'heroSubtitle')}</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/tracks/" className="rounded-xl bg-palm-700 px-6 py-3 font-bold text-white hover:bg-palm-800">
              {t(lang, 'heroCta')}
            </Link>
            <Link
              href="/calculators/"
              className="rounded-xl border-2 border-palm-700 px-6 py-3 font-bold text-palm-700 hover:bg-palm-50 dark:border-gold-400 dark:text-gold-300 dark:hover:bg-palm-900"
            >
              {t(lang, 'heroSecondary')}
            </Link>
          </div>
          {doneCount > 0 && (
            <div className="mt-6 max-w-xs">
              <ProgressBar
                value={(doneCount / ALL_LESSONS.length) * 100}
                label={`${t(lang, 'progressTitle')}: ${doneCount}/${ALL_LESSONS.length}`}
              />
            </div>
          )}
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-sand-200 shadow-lg dark:border-palm-800">
          <Image src="/images/hero.jpg" alt={t(lang, 'imageAlt')} width={1280} height={720} className="h-auto w-full" priority />
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-2xl font-bold text-palm-900 dark:text-gold-300">{t(lang, 'tracksTitle')}</h2>
        <p className="mb-6 text-stone-600 dark:text-stone-300">{t(lang, 'tracksSubtitle')}</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TRACKS.map((track) => {
            const trackDone = track.lessons.filter((l) => done.includes(lessonId(track.slug, l.slug))).length
            return (
              <Link key={track.slug} href={`/tracks/${track.slug}/`} className="card group overflow-hidden transition-shadow hover:shadow-md">
                <div className="relative h-36 w-full overflow-hidden">
                  <Image
                    src={track.image}
                    alt={t(lang, 'imageAlt')}
                    width={1280}
                    height={720}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="rounded-lg bg-palm-100 p-2 text-palm-700 dark:bg-palm-900 dark:text-gold-300">
                      <TrackIcon icon={track.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-bold">{track[lang].title}</h3>
                  </div>
                  <p className="mb-3 text-sm leading-relaxed text-stone-600 dark:text-stone-300">{track[lang].tagline}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-stone-500">
                      <span className="num">{track.lessons.length}</span> {t(lang, 'lessons')}
                    </span>
                    <span className="font-bold text-palm-700 dark:text-gold-300">
                      {trackDone > 0 ? `${t(lang, 'continue')} (${trackDone}/${track.lessons.length})` : t(lang, 'start')}
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-bold text-palm-900 dark:text-gold-300">{t(lang, 'principlesTitle')}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map(({ icon: Icon, title, body }) => (
            <div key={title} className="card p-5">
              <span className="mb-3 inline-block rounded-xl bg-gold-300/30 p-2.5 text-gold-600 dark:text-gold-300">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mb-1 font-bold">{title}</h3>
              <p className="text-sm leading-relaxed text-stone-600 dark:text-stone-300">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="card border-r-4 border-r-gold-500 p-6 dark:border-r-gold-400" aria-label={t(lang, 'honestyTitle')}>
        <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-palm-900 dark:text-gold-300">
          <ShieldCheck className="h-6 w-6" />
          {t(lang, 'honestyTitle')}
        </h2>
        <p className="leading-relaxed text-stone-600 dark:text-stone-300">{t(lang, 'honestyBody')}</p>
      </section>
    </div>
  )
}
