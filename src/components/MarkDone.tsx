'use client'

import { CheckCircle2, Circle } from 'lucide-react'
import { useApp } from '../lib/store'
import { t } from '../lib/i18n'
import { Button } from './ui/button'

/** Marks the current lesson finished/unfinished; synced to the account when signed in. */
export default function MarkDone({ id }: { id: string }) {
  const { lang, done, toggleDone } = useApp()
  const isDone = done.includes(id)
  return (
    <Button
      type="button"
      variant={isDone ? 'secondary' : 'default'}
      onClick={() => toggleDone(id)}
      aria-pressed={isDone}
    >
      {isDone ? <CheckCircle2 /> : <Circle />}
      {isDone ? t(lang, 'done') : t(lang, 'markDone')}
    </Button>
  )
}
