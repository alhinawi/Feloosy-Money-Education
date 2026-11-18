'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useApp } from '../lib/store'
import { t, type Lang } from '../lib/i18n'
import { TRACKS } from '../lib/content'
import TrackIcon from '../components/TrackIcon'

export default function TracksPage() {
  const { lang } = useApp()
  const Chevron = lang === 'ar' ? ChevronLeft : ChevronRight
  return (
    <div>
      <h1 className="mb-2 text-3xl font-bold text-palm-900 dark:text-gold-300">{t(lang, 'tracksTitle')}</h1>
      <p className="mb-8 text-stone-600 dark:text-stone-300">{t(lang, 'tracksSubtitle')}</p>
      <div className="flex flex-col gap-4">
        {TRACKS.map((track, i) => (
          <Link key={track.slug} href={`/tracks/${track.slug}/`} className="card group flex flex-col overflow-hidden transition-shadow hover:shadow-md sm:flex-row">
            <div className="relative h-40 w-full sm:h-auto sm:w-56">
              <Image src={track.image} alt={t(lang, 'imageAlt')} width={1280} height={720} className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-1 items-center gap-4 p-4">
              <span className="rounded-xl bg-palm-100 p-3 text-palm-700 dark:bg-palm-900 dark:text-gold-300">
                <TrackIcon icon={track.icon} />
              </span>
              <div className="flex-1">
                <p className="text-xs font-bold text-gold-600 dark:text-gold-400">
                  <span className="num">{i + 1}</span>
                </p>
                <h2 className="text-lg font-bold">{track[lang as Lang].title}</h2>
                <p className="text-sm text-stone-600 dark:text-stone-300">{track[lang as Lang].tagline}</p>
                <p className="mt-1 text-xs text-stone-500">
                  <span className="num">{track.lessons.length}</span> {t(lang, 'lessons')}
                </p>
              </div>
              <Chevron className="h-5 w-5 text-stone-400 transition-transform group-hover:-translate-x-1 rtl:group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
