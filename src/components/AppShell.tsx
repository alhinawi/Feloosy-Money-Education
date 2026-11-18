'use client'

// ==============================================================================
// App shell: desktop nav bar, mobile burger + sidebar (right side in Arabic,
// left otherwise), theme and language boot, and auth session restore.
// ==============================================================================

import { useEffect, useState, type ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Home, Layers, Calculator, BookOpenText, Info, Settings as SettingsIcon, UserRound } from 'lucide-react'
import { useApp } from '../lib/store'
import { t, dirOf } from '../lib/i18n'
import { initAuth } from '../lib/auth'
import { consumeGoogleAuthCallback } from '../lib/api'
import { completeSignIn } from '../lib/auth'
import AuthModal from './AuthModal'

export default function AppShell({ children }: { children: ReactNode }) {
  const { lang, theme } = useApp()
  const [open, setOpen] = useState(false)
  const [authOpen, setAuthOpen] = useState(false)
  const pathname = usePathname()

  // Apply language direction and theme as early as the client can.
  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = dirOf(lang)
  }, [lang])
  useEffect(() => {
    const dark = theme === 'dark' || (theme === 'system' && matchMedia('(prefers-color-scheme: dark)').matches)
    document.documentElement.classList.toggle('dark', dark)
  }, [theme])

  // Restore session and consume a Google sign-in callback once on load.
  useEffect(() => {
    const result = consumeGoogleAuthCallback()
    if (result && !result.startsWith('error:')) void completeSignIn(result)
    else void initAuth()
  }, [])

  // Close the sidebar on navigation.
  useEffect(() => setOpen(false), [pathname])

  const links = [
    { href: '/', key: 'navHome', icon: Home },
    { href: '/tracks/', key: 'navTracks', icon: Layers },
    { href: '/calculators/', key: 'navCalculators', icon: Calculator },
    { href: '/glossary/', key: 'navGlossary', icon: BookOpenText },
    { href: '/about/', key: 'navAbout', icon: Info },
    { href: '/settings/', key: 'navSettings', icon: SettingsIcon },
  ] as const

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-30 border-b border-sand-200 bg-sand-50/90 backdrop-blur dark:border-brand-800 dark:bg-[#0c0a06]/90">
        <div className="mx-auto flex h-14 max-w-6xl items-center gap-3 px-4">
          <button
            type="button"
            aria-label={t(lang, 'openMenu')}
            onClick={() => setOpen(true)}
            className="rounded-lg p-2 text-brand-800 hover:bg-sand-100 dark:text-gold-300 dark:hover:bg-brand-900 md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
          <Link href="/" className="flex items-center gap-2">
            <Logo />
            <span className="flex flex-col leading-none">
              <span className="font-head text-xl font-bold text-brand-800 dark:text-gold-300">Feloosy</span>
              <span className="font-head text-xs text-brand-600 dark:text-gold-300/70">فلوسي</span>
            </span>
          </Link>
          <nav className="mx-4 hidden flex-1 items-center gap-1 md:flex">
            {links.map(({ href, key }) => (
              <Link
                key={href}
                href={href}
                className={`rounded-lg px-3 py-1.5 text-sm font-medium hover:bg-sand-100 dark:hover:bg-brand-900 ${
                  pathname === href ? 'text-brand-700 dark:text-gold-300' : 'text-stone-600 dark:text-stone-300'
                }`}
              >
                {t(lang, key)}
              </Link>
            ))}
          </nav>
          <span className="flex-1 md:hidden" />
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 md:hidden" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <aside
            className={`absolute top-0 h-full w-72 bg-white p-4 shadow-xl dark:bg-brand-950 ${
              lang === 'ar' ? 'right-0' : 'left-0'
            }`}
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Logo />
                <span className="flex flex-col leading-none">
              <span className="font-head text-lg font-bold text-brand-800 dark:text-gold-300">Feloosy</span>
              <span className="font-head text-xs text-brand-600 dark:text-gold-300/70">فلوسي</span>
            </span>
              </div>
              <button type="button" aria-label={t(lang, 'closeMenu')} onClick={() => setOpen(false)} className="rounded-lg p-2 hover:bg-sand-100 dark:hover:bg-brand-900">
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-1">
              {links.map(({ href, key, icon: Icon }) => (
                <Link key={href} href={href} className="flex items-center gap-3 rounded-lg px-3 py-2.5 font-medium hover:bg-sand-100 dark:hover:bg-brand-900">
                  <Icon className="h-5 w-5 text-brand-600 dark:text-gold-400" />
                  {t(lang, key)}
                </Link>
              ))}
              <button
                type="button"
                onClick={() => {
                  setOpen(false)
                  setAuthOpen(true)
                }}
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-start font-medium hover:bg-sand-100 dark:hover:bg-brand-900"
              >
                <UserRound className="h-5 w-5 text-brand-600 dark:text-gold-400" />
                {t(lang, 'navProfile')}
              </button>
            </nav>
          </aside>
        </div>
      )}

      <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>

      <footer className="mt-12 border-t border-sand-200 py-6 text-center text-sm text-stone-500 dark:border-brand-800 dark:text-stone-400">
        {t(lang, 'footerNote')}
      </footer>

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </div>
  )
}

function Logo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" className="drop-shadow-[0_0_18px_rgb(212_175_55/0.45)]" aria-hidden="true">
    <circle cx="16" cy="16" r="14.5" fill="#171309" />
    <circle cx="16" cy="16" r="13.5" fill="none" stroke="#d4af37" strokeWidth="1.2" />
    <path d="M14.5 13.5c-3-3.2-7.2-4.3-10.3-3.3 2 .6 3.5 1.6 4.5 3.1-1.9-.5-3.4-.4-4.4.2 2.6 1.6 5.2 2.7 8.2 3.2z" fill="#e6c655" />
    <path d="M17.5 13.5c3-3.2 7.2-4.3 10.3-3.3-2 .6-3.5 1.6-4.5 3.1 1.9-.5 3.4-.4 4.4.2-2.6 1.6-5.2 2.7-8.2 3.2z" fill="#e6c655" />
    <g transform="rotate(-8 16 17.5)">
      <rect x="9" y="13.2" width="14" height="8.6" rx="1.6" fill="url(#noteGold)" stroke="#96741a" strokeWidth="0.7" />
      <circle cx="16" cy="17.5" r="2.4" fill="#c9a227" stroke="#96741a" strokeWidth="0.5" />
      <path d="M11.4 14.8v5.4M20.6 14.8v5.4" stroke="#96741a" strokeWidth="0.7" />
    </g>
    <defs>
      <linearGradient id="noteGold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#f6e27a" />
        <stop offset="0.5" stopColor="#e2b93a" />
        <stop offset="1" stopColor="#b8941f" />
      </linearGradient>
    </defs>
    </svg>
  )
}
