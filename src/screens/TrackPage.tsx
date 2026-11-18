'use client'

import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { CheckCircle2 } from 'lucide-react'
import { useApp, lessonId } from '../lib/store'
import { t } from '../lib/i18n'
import { getTrack } from '../lib/content'
import TrackIcon from '../components/TrackIcon'
import ProgressBar from '../components/ProgressBar'

export default function TrackPage({ slug }: { slug: string }) {
  const { lang, done } = useApp()
  const track = getTrack(slug)
  if (!track) notFound()
  const doneCount = track.lessons.filter((l) => done.includes(lessonId(track.slug, l.slug))).length

  return (
    <div>
      <Link href="/tracks/" className="mb-4 inline-block text-sm font-medium text-brand-700 hover:underline dark:text-gold-300">
        ← {t(lang, 'back')}
      </Link>
      <div className="rounded-[1.25rem] border border-border bg-card text-card-foreground shadow-sm mb-6 overflow-hidden">
        <div className="relative h-44 w-full">
          <Image src={track.image} alt={t(lang, 'imageAlt')} width={1280} height={720} className="h-full w-full object-cover" priority />
        </div>
        <div className="p-5">
          <div className="mb-2 flex items-center gap-3">
            <span className="rounded-xl bg-brand-100 p-3 text-brand-700 dark:bg-brand-900 dark:text-gold-300">
              <TrackIcon icon={track.icon} />
            </span>
            <div>
              <h1 className="text-2xl font-bold text-brand-900 dark:text-gold-300">{track[lang].title}</h1>
              <p className="text-sm text-stone-600 dark:text-gold-300/80">{track[lang].tagline}</p>
            </div>
          </div>
          <ProgressBar value={(doneCount / track.lessons.length) * 100} label={`${t(lang, 'trackProgress')}: ${doneCount}/${track.lessons.length}`} />
        </div>
      </div>

      <ol className="flex flex-col gap-3">
        {track.lessons.map((lesson, i) => {
          const isDone = done.includes(lessonId(track.slug, lesson.slug))
          return (
            <li key={lesson.slug}>
              <Link
                href={`/tracks/${track.slug}/${lesson.slug}/`}
                className="rounded-[1.25rem] border border-border bg-card text-card-foreground shadow-sm flex items-center gap-4 p-4 transition-shadow hover:shadow-md"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sand-100 font-bold text-brand-700 dark:bg-brand-900 dark:text-gold-300 num">
                  {i + 1}
                </span>
                <div className="flex-1">
                  <h2 className="font-bold">{lesson[lang].title}</h2>
                  <p className="line-clamp-1 text-sm text-stone-500 dark:text-gold-300/70">{lesson[lang].intro}</p>
                </div>
                {isDone && <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-500 dark:text-gold-400" />}
              </Link>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
