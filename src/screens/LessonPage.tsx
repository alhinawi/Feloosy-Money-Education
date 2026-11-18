'use client'

import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react'
import { useApp, lessonId } from '../lib/store'
import { t } from '../lib/i18n'
import { getLesson } from '../lib/content'
import { getQuiz } from '../content/quizzes'
import Quiz from '../components/Quiz'
import MarkDone from '../components/MarkDone'

export default function LessonPage({ trackSlug, lessonSlug }: { trackSlug: string; lessonSlug: string }) {
  const { lang } = useApp()
  const found = getLesson(trackSlug, lessonSlug)
  if (!found) notFound()
  const { track, lesson, prev, next } = found
  const text = lesson[lang]
  const PrevIcon = lang === 'ar' ? ChevronRight : ChevronLeft
  const NextIcon = lang === 'ar' ? ChevronLeft : ChevronRight

  return (
    <article className="mx-auto max-w-3xl">
      <Link href={`/tracks/${track.slug}/`} className="mb-4 inline-block text-sm font-medium text-brand-700 hover:underline dark:text-gold-300">
        ← {track[lang].title}
      </Link>
      <h1 className="mb-3 text-3xl font-bold leading-[1.5] text-brand-900 dark:text-gold-300">{text.title}</h1>
      <p className="mb-8 text-lg leading-relaxed text-stone-600 dark:text-stone-300">{text.intro}</p>

      <div className="mb-8 flex flex-col gap-6">
        {text.sections.map((s) => (
          <section key={s.h}>
            <h2 className="mb-2 text-xl font-bold">{s.h}</h2>
            <p className="leading-loose text-stone-700 dark:text-stone-300">{s.p}</p>
          </section>
        ))}
      </div>

      <div className="rounded-[1.25rem] border border-border bg-card text-card-foreground shadow-sm mb-8 border-r-4 border-r-gold-500 p-5 dark:border-r-gold-400">
        <h2 className="mb-3 flex items-center gap-2 font-bold text-brand-900 dark:text-gold-300">
          <CheckCircle2 className="h-5 w-5" />
          {t(lang, 'keyPoints')}
        </h2>
        <ul className="flex flex-col gap-2">
          {text.points.map((p) => (
            <li key={p} className="flex items-start gap-2 leading-relaxed text-stone-700 dark:text-stone-300">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
              {p}
            </li>
          ))}
        </ul>
      </div>

      {getQuiz(track.slug, lesson.slug) && (
        <Quiz id={lessonId(track.slug, lesson.slug)} quiz={getQuiz(track.slug, lesson.slug)!} />
      )}

      <div className="mb-8">
        <MarkDone id={lessonId(track.slug, lesson.slug)} />
      </div>

      <nav className="flex items-center justify-between gap-3 border-t border-sand-200 pt-4 dark:border-brand-800">
        {prev ? (
          <Link href={`/tracks/${track.slug}/${prev.slug}/`} className="flex items-center gap-1 text-sm font-medium text-brand-700 hover:underline dark:text-gold-300">
            <PrevIcon className="h-4 w-4" />
            {prev[lang].title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/tracks/${track.slug}/${next.slug}/`} className="flex items-center gap-1 text-sm font-medium text-brand-700 hover:underline dark:text-gold-300">
            {next[lang].title}
            <NextIcon className="h-4 w-4" />
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  )
}
