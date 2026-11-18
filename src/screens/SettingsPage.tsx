'use client'

import { useState } from 'react'
import { useApp, type Theme } from '../lib/store'
import { t, type Lang } from '../lib/i18n'
import { useAuth } from '../lib/auth'
import AuthModal from '../components/AuthModal'

export default function SettingsPage() {
  const { lang, theme, setLang, setTheme, resetProgress } = useApp()
  const { user } = useAuth()
  const [authOpen, setAuthOpen] = useState(false)
  const [resetDone, setResetDone] = useState(false)

  const langs: { value: Lang; label: string }[] = [
    { value: 'ar', label: 'العربية (مصري)' },
    { value: 'en', label: 'English' },
  ]
  const themes: { value: Theme; label: string }[] = [
    { value: 'light', label: t(lang, 'themeLight') },
    { value: 'dark', label: t(lang, 'themeDark') },
    { value: 'system', label: t(lang, 'themeSystem') },
  ]

  return (
    <div className="mx-auto max-w-xl">
      <h1 className="mb-6 text-3xl font-bold text-palm-900 dark:text-gold-300">{t(lang, 'settingsTitle')}</h1>

      <div className="card mb-4 p-5">
        <h2 className="mb-3 font-bold">{t(lang, 'langLabel')}</h2>
        <div className="flex gap-2">
          {langs.map((l) => (
            <button
              key={l.value}
              type="button"
              onClick={() => setLang(l.value)}
              className={`rounded-xl px-4 py-2 font-medium ${
                lang === l.value ? 'bg-palm-700 text-white' : 'bg-sand-100 hover:bg-sand-200 dark:bg-palm-900 dark:hover:bg-palm-800'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>

      <div className="card mb-4 p-5">
        <h2 className="mb-3 font-bold">{t(lang, 'themeLabel')}</h2>
        <div className="flex gap-2">
          {themes.map((th) => (
            <button
              key={th.value}
              type="button"
              onClick={() => setTheme(th.value)}
              className={`rounded-xl px-4 py-2 font-medium ${
                theme === th.value ? 'bg-palm-700 text-white' : 'bg-sand-100 hover:bg-sand-200 dark:bg-palm-900 dark:hover:bg-palm-800'
              }`}
            >
              {th.label}
            </button>
          ))}
        </div>
      </div>

      <div className="card mb-4 p-5">
        <h2 className="mb-3 font-bold">{t(lang, 'accountSection')}</h2>
        {user ? (
          <p className="text-sm text-stone-600 dark:text-stone-300">
            {t(lang, 'loggedInAs')} <strong>{user.name}</strong>
          </p>
        ) : (
          <button type="button" onClick={() => setAuthOpen(true)} className="rounded-xl bg-palm-700 px-4 py-2 font-bold text-white hover:bg-palm-800">
            {t(lang, 'login')}
          </button>
        )}
      </div>

      <div className="card p-5">
        <button
          type="button"
          onClick={() => {
            resetProgress()
            setResetDone(true)
            setTimeout(() => setResetDone(false), 2000)
          }}
          className="rounded-xl border border-red-300 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30"
        >
          {resetDone ? t(lang, 'resetProgressDone') : t(lang, 'resetProgress')}
        </button>
      </div>

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </div>
  )
}
