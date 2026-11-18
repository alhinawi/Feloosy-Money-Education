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
      <header className="sticky top-0 z-30 border-b border-sand-200 bg-sand-50/90 backdrop-blur dark:border-palm-800 dark:bg-[#0a1f16]/90">
        <div className="mx-auto flex h-14 max-w-6xl items-center gap-3 px-4">
          <button
            type="button"
            aria-label={t(lang, 'openMenu')}
            onClick={() => setOpen(true)}
            className="rounded-lg p-2 hover:bg-sand-100 dark:hover:bg-palm-900 md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
          <Link href="/" className="flex items-center gap-2">
            <Logo />
            <span className="font-head text-xl font-bold text-palm-800 dark:text-gold-300">{t(lang, 'siteName')}</span>
          </Link>
          <nav className="mx-4 hidden flex-1 items-center gap-1 md:flex">
            {links.map(({ href, key }) => (
              <Link
                key={href}
                href={href}
                className={`rounded-lg px-3 py-1.5 text-sm font-medium hover:bg-sand-100 dark:hover:bg-palm-900 ${
                  pathname === href ? 'text-palm-700 dark:text-gold-300' : 'text-stone-600 dark:text-stone-300'
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
            className={`absolute top-0 h-full w-72 bg-white p-4 shadow-xl dark:bg-palm-950 ${
              lang === 'ar' ? 'right-0' : 'left-0'
            }`}
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Logo />
                <span className="font-head text-lg font-bold text-palm-800 dark:text-gold-300">{t(lang, 'siteName')}</span>
              </div>
              <button type="button" aria-label={t(lang, 'closeMenu')} onClick={() => setOpen(false)} className="rounded-lg p-2 hover:bg-sand-100 dark:hover:bg-palm-900">
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-1">
              {links.map(({ href, key, icon: Icon }) => (
                <Link key={href} href={href} className="flex items-center gap-3 rounded-lg px-3 py-2.5 font-medium hover:bg-sand-100 dark:hover:bg-palm-900">
                  <Icon className="h-5 w-5 text-palm-600 dark:text-gold-400" />
                  {t(lang, key)}
                </Link>
              ))}
              <button
                type="button"
                onClick={() => {
                  setOpen(false)
                  setAuthOpen(true)
                }}
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-start font-medium hover:bg-sand-100 dark:hover:bg-palm-900"
              >
                <UserRound className="h-5 w-5 text-palm-600 dark:text-gold-400" />
                {t(lang, 'navProfile')}
              </button>
            </nav>
          </aside>
        </div>
      )}

      <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>

      <footer className="mt-12 border-t border-sand-200 py-6 text-center text-sm text-stone-500 dark:border-palm-800 dark:text-stone-400">
        {t(lang, 'footerNote')}
      </footer>

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </div>
  )
}

function Logo() {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" className="gold-glow" aria-hidden="true">
      <circle cx="16" cy="16" r="14" fill="#0e3d2c" />
      <circle cx="16" cy="16" r="13" fill="none" stroke="#c9a227" strokeWidth="1.5" />
      <path d="M16 8l2.2 4.6 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5L8.8 13.3l5-.7z" fill="#dfb945" />
    </svg>
  )
}
