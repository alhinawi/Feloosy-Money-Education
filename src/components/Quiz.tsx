'use client'

// ==============================================================================
// Per-lesson self-check quiz: 3 MCQ questions, instant feedback, best score
// kept in the app store (synced to the account when signed in).
// ==============================================================================

import { useState } from 'react'
import { CheckCircle2, XCircle, RotateCcw, HelpCircle } from 'lucide-react'
import { useApp } from '../lib/store'
import { t, fmtNum } from '../lib/i18n'
import type { LessonQuiz } from '../content/types'

export default function Quiz({ id, quiz }: { id: string; quiz: LessonQuiz }) {
  const { lang, scores, recordScore } = useApp()
  const questions = quiz[lang]
  const [picked, setPicked] = useState<(number | null)[]>(questions.map(() => null))
  const answeredAll = picked.every((p) => p !== null)
  const correct = questions.filter((q, i) => picked[i] === q.answer).length
  const pct = (correct / questions.length) * 100
  const best = scores[id]

  function pick(qi: number, oi: number) {
    if (picked[qi] !== null) return
    const next = [...picked]
    next[qi] = oi
    setPicked(next)
    if (next.every((p) => p !== null)) {
      const score = (questions.filter((q, i) => next[i] === q.answer).length / questions.length) * 100
      recordScore(id, score)
    }
  }

  return (
    <section className="rounded-[1.25rem] border border-border bg-card text-card-foreground shadow-sm mb-8 p-5" aria-label={t(lang, 'quizTitle')}>
      <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-brand-900 dark:text-gold-300">
        <HelpCircle className="h-6 w-6" />
        {t(lang, 'quizTitle')}
      </h2>
      <div className="flex flex-col gap-5">
        {questions.map((q, qi) => (
          <div key={q.q}>
            <p className="mb-2 font-bold">
              <span className="num">{qi + 1}.</span> {q.q}
            </p>
            <div className="flex flex-col gap-2">
              {q.options.map((opt, oi) => {
                const wasPicked = picked[qi] === oi
                const revealed = picked[qi] !== null
                const isAnswer = oi === q.answer
                let cls = 'border-sand-200 hover:border-brand-400 dark:border-brand-700'
                if (revealed && isAnswer) cls = 'border-brand-500 bg-brand-50 dark:bg-brand-900'
                else if (revealed && wasPicked) cls = 'border-red-400 bg-red-50 dark:bg-red-950/30'
                return (
                  <button
                    key={opt}
                    type="button"
                    disabled={revealed}
                    onClick={() => pick(qi, oi)}
                    className={`flex items-center justify-between gap-2 rounded-xl border px-4 py-2.5 text-start font-medium transition-colors ${cls}`}
                  >
                    <span>{opt}</span>
                    {revealed && isAnswer && <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-600 dark:text-gold-400" />}
                    {revealed && wasPicked && !isAnswer && <XCircle className="h-5 w-5 shrink-0 text-red-500" />}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>
      {answeredAll && (
        <div className="mt-4 flex items-center justify-between rounded-xl bg-sand-100 px-4 py-3 dark:bg-brand-900">
          <p className="font-bold">
            {t(lang, 'quizScore')}: <span className="num">{fmtNum(pct)}%</span>
            {best !== undefined && (
              <span className="ms-3 text-sm font-medium text-stone-500">
                {t(lang, 'quizBest')}: <span className="num">{fmtNum(best)}%</span>
              </span>
            )}
          </p>
          <button
            type="button"
            onClick={() => setPicked(questions.map(() => null))}
            className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-bold text-brand-700 hover:bg-sand-200 dark:text-gold-300 dark:hover:bg-brand-800"
          >
            <RotateCcw className="h-4 w-4" />
            {t(lang, 'quizRetry')}
          </button>
        </div>
      )}
    </section>
  )
}
