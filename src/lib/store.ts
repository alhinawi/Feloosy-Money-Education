'use client'

// ==============================================================================
// Trillionaire app state: language, theme and finished lessons.
// Persisted locally; mirrored to the account backend while signed in (auth.ts).
// ==============================================================================

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Lang } from './i18n'

export type Theme = 'light' | 'dark' | 'system'

interface AppState {
  lang: Lang
  theme: Theme
  /** Slugs of finished lessons, as "track/lesson". */
  done: string[]
  /** Best quiz score per lesson id, 0..100. */
  scores: Record<string, number>
  setLang: (lang: Lang) => void
  setTheme: (theme: Theme) => void
  toggleDone: (id: string) => void
  recordScore: (id: string, pct: number) => void
  resetProgress: () => void
}

export const useApp = create<AppState>()(
  persist(
    (set) => ({
      lang: 'ar',
      theme: 'dark',
      done: [],
      scores: {},
      setLang: (lang) => set({ lang }),
      setTheme: (theme) => set({ theme }),
      toggleDone: (id) =>
        set((s) => ({ done: s.done.includes(id) ? s.done.filter((x) => x !== id) : [...s.done, id] })),
      recordScore: (id, pct) =>
        set((s) => ({ scores: { ...s.scores, [id]: Math.max(s.scores[id] ?? 0, Math.round(pct)) } })),
      resetProgress: () => set({ done: [], scores: {} }),
    }),
    { name: 'feloosy:v1' },
  ),
)

/** Stable id for a lesson: "<track>/<lesson>". */
export const lessonId = (track: string, lesson: string) => `${track}/${lesson}`
