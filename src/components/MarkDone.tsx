'use client'

import { CheckCircle2, Circle } from 'lucide-react'
import { useApp } from '../lib/store'
import { t } from '../lib/i18n'

/** Marks the current lesson finished/unfinished; synced to the account when signed in. */
export default function MarkDone({ id }: { id: string }) {
  const { lang, done, toggleDone } = useApp()
  const isDone = done.includes(id)
  return (
    <button
      type="button"
      onClick={() => toggleDone(id)}
      className={`flex items-center gap-2 rounded-xl px-4 py-2 font-bold transition-colors ${
        isDone
          ? 'bg-palm-100 text-palm-800 dark:bg-palm-900 dark:text-gold-300'
          : 'bg-palm-700 text-white hover:bg-palm-800'
      }`}
      aria-pressed={isDone}
    >
      {isDone ? <CheckCircle2 className="h-5 w-5" /> : <Circle className="h-5 w-5" />}
      {isDone ? t(lang, 'done') : t(lang, 'markDone')}
    </button>
  )
}
