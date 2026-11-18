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
  setLang: (lang: Lang) => void
  setTheme: (theme: Theme) => void
  toggleDone: (id: string) => void
  resetProgress: () => void
}

export const useApp = create<AppState>()(
  persist(
    (set) => ({
      lang: 'ar',
      theme: 'system',
      done: [],
      setLang: (lang) => set({ lang }),
      setTheme: (theme) => set({ theme }),
      toggleDone: (id) =>
        set((s) => ({ done: s.done.includes(id) ? s.done.filter((x) => x !== id) : [...s.done, id] })),
      resetProgress: () => set({ done: [] }),
    }),
    { name: 'feloosy:v1' },
  ),
)

/** Stable id for a lesson: "<track>/<lesson>". */
export const lessonId = (track: string, lesson: string) => `${track}/${lesson}`
