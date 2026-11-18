'use client'

import Link from 'next/link'
import { useApp } from '../lib/store'
import { t } from '../lib/i18n'

export default function NotFoundPage() {
  const { lang } = useApp()
  return (
    <div className="mx-auto max-w-md py-16 text-center">
      <p className="num mb-2 text-6xl font-bold text-gold-500">404</p>
      <h1 className="mb-2 text-2xl font-bold">{t(lang, 'notFoundTitle')}</h1>
      <p className="mb-6 text-stone-600 dark:text-stone-300">{t(lang, 'notFoundBody')}</p>
      <Link href="/" className="rounded-xl bg-brand-700 px-6 py-3 font-bold text-white hover:bg-brand-800">
        {t(lang, 'navHome')}
      </Link>
    </div>
  )
}
