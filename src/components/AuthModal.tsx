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
import { completeSignIn, signOut, useAuth } from '../lib/auth'

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
      <div className="card relative w-full max-w-sm p-6">
        <button type="button" aria-label={t(lang, 'close')} onClick={onClose} className="absolute end-3 top-3 rounded-lg p-1.5 hover:bg-sand-100 dark:hover:bg-palm-900">
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
                  className="rounded-xl border border-sand-200 bg-transparent px-3 py-2 dark:border-palm-700"
                />
              )}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t(lang, 'email')}
                required
                className="rounded-xl border border-sand-200 bg-transparent px-3 py-2 dark:border-palm-700"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t(lang, 'password')}
                required
                minLength={8}
                className="rounded-xl border border-sand-200 bg-transparent px-3 py-2 dark:border-palm-700"
              />
              {error && <p className="text-sm text-red-600">{error}</p>}
              <button
                type="submit"
                disabled={busy}
                className="rounded-xl bg-palm-700 px-4 py-2 font-bold text-white hover:bg-palm-800 disabled:opacity-60"
              >
                {mode === 'login' ? t(lang, 'login') : t(lang, 'signup')}
              </button>
            </form>
            {google && (
              <a
                href={googleLoginUrl()}
                className="mt-3 block rounded-xl border border-sand-200 px-4 py-2 text-center font-medium hover:bg-sand-100 dark:border-palm-700 dark:hover:bg-palm-900"
              >
                {t(lang, 'loginGoogle')}
              </a>
            )}
            <button
              type="button"
              onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
              className="mt-3 w-full text-center text-sm font-medium text-palm-700 hover:underline dark:text-gold-300"
            >
              {mode === 'login' ? t(lang, 'signup') : t(lang, 'login')}
            </button>
          </>
        )}
      </div>
    </div>
  )
}
