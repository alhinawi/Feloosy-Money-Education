'use client'

// ==============================================================================
// Email/password login + register form with optional Google sign-in.
// Signup is optional on Feloosy: everything works for visitors, the account
// only syncs progress across devices.
// ==============================================================================

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { useApp } from '../lib/store'
import { t } from '../lib/i18n'
import { apiGetAuthConfig, apiLogin, apiRegister, googleLoginUrl } from '../lib/api'
import { Button } from './ui/button'
import { completeSignIn, signOut, useAuth } from '../lib/auth'

function GoogleMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path fill="#4285F4" d="M23.5 12.3c0-.9-.1-1.5-.3-2.2H12v4.1h6.4c-.1 1.1-.8 2.7-2.4 3.8l-.02.15 3.5 2.7.24.03c2.2-2.05 3.5-5.07 3.5-8.55z" />
      <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.94-2.9l-3.79-2.93c-1.01.7-2.37 1.2-4.15 1.2-3.17 0-5.86-2.13-6.82-5.06l-.14.01-3.09 2.39-.04.14C3.87 21.3 7.61 24 12 24z" />
      <path fill="#FBBC05" d="M5.18 14.31A7.4 7.4 0 0 1 4.78 12c0-.8.14-1.58.36-2.31l-.01-.16-3.13-2.43-.1.05A12 12 0 0 0 0 12c0 1.94.47 3.77 1.29 5.4l3.9-3.09z" />
      <path fill="#EA4335" d="M12 4.6c2.34 0 3.92 1.01 4.82 1.86l3.52-3.44C18.19 1.08 15.24 0 12 0 7.61 0 3.87 2.7 1.9 6.6l3.83 2.97C6.14 6.73 8.83 4.6 12 4.6z" />
    </svg>
  )
}

export default function AuthModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { lang } = useApp()
  const { user } = useAuth()
  const [mode, setMode] = useState<'login' | 'signup'>('login')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)
  const [google, setGoogle] = useState(false)

  useEffect(() => {
    if (open) void apiGetAuthConfig().then((c) => setGoogle(c.google))
  }, [open])

  if (!open) return null

  const mapError = (code?: string) =>
    code === 'email_taken'
      ? t(lang, 'authTaken')
      : code === 'invalid_credentials'
        ? t(lang, 'authInvalid')
        : code === 'password_short'
          ? t(lang, 'passwordShort')
          : code === 'network'
            ? t(lang, 'authNetwork')
            : t(lang, 'authInvalid')

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setBusy(true)
    setError('')
    try {
      const res =
        mode === 'signup' ? await apiRegister({ name, email, password }) : await apiLogin(email, password)
      if (res.success && res.token) {
        await completeSignIn(res.token)
        onClose()
      } else {
        setError(mapError(res.error))
      }
    } catch {
      setError(t(lang, 'authNetwork'))
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="rounded-[1.25rem] border border-border bg-card text-card-foreground shadow-sm relative w-full max-w-sm p-6">
        <button type="button" aria-label={t(lang, 'close')} onClick={onClose} className="absolute end-3 top-3 rounded-lg p-1.5 hover:bg-sand-100 dark:hover:bg-brand-900">
          <X className="h-5 w-5" />
        </button>

        {user ? (
          <div className="text-center">
            <p className="mb-1 text-sm text-stone-500">{t(lang, 'loggedInAs')}</p>
            <p className="mb-4 font-bold">{user.name}</p>
            <button
              type="button"
              onClick={() => {
                void signOut()
                onClose()
              }}
              className="w-full rounded-xl border border-red-300 px-4 py-2 font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30"
            >
              {t(lang, 'logout')}
            </button>
          </div>
        ) : (
          <>
            <h2 className="mb-1 text-xl font-bold">{mode === 'login' ? t(lang, 'login') : t(lang, 'signup')}</h2>
            <p className="mb-4 text-sm text-stone-500">{t(lang, 'loginWhy')}</p>
            <form onSubmit={submit} className="flex flex-col gap-3">
              {mode === 'signup' && (
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t(lang, 'name')}
                  required
                  minLength={2}
                  className="rounded-xl border border-sand-200 bg-transparent px-3 py-2 dark:border-brand-700"
                />
              )}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t(lang, 'email')}
                required
                className="rounded-xl border border-sand-200 bg-transparent px-3 py-2 dark:border-brand-700"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t(lang, 'password')}
                required
                minLength={8}
                className="rounded-xl border border-sand-200 bg-transparent px-3 py-2 dark:border-brand-700"
              />
              {error && <p className="text-sm text-red-600">{error}</p>}
              <button
                type="submit"
                disabled={busy}
                className="rounded-xl bg-brand-700 px-4 py-2 font-bold text-white hover:bg-brand-800 disabled:opacity-60"
              >
                {mode === 'login' ? t(lang, 'login') : t(lang, 'signup')}
              </button>
            </form>
            {google && (
              <Button asChild variant="outline" className="mt-3 w-full">
                <a href={googleLoginUrl()}>
                  <GoogleMark />
                  {t(lang, 'loginGoogle')}
                </a>
              </Button>
            )}
            <button
              type="button"
              onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
              className="mt-3 w-full text-center text-sm font-medium text-brand-700 hover:underline dark:text-gold-300"
            >
              {mode === 'login' ? t(lang, 'signup') : t(lang, 'login')}
            </button>
          </>
        )}
      </div>
    </div>
  )
}
