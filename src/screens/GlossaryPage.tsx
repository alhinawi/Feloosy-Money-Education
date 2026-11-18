'use client'

import { useState } from 'react'
import { Search, BookOpenText } from 'lucide-react'
import { useApp } from '../lib/store'
import { t } from '../lib/i18n'
import { GLOSSARY } from '../content/glossary'

export default function GlossaryPage() {
  const { lang } = useApp()
  const [query, setQuery] = useState('')
  const q = query.trim().toLowerCase()
  const terms = GLOSSARY.filter(
    (term) =>
      !q ||
      term.ar.includes(query.trim()) ||
      term.en.toLowerCase().includes(q) ||
      term.arBody.includes(query.trim()) ||
      term.enBody.toLowerCase().includes(q),
  )

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-2 flex items-center gap-2 text-3xl font-bold text-brand-900 dark:text-gold-300">
        <BookOpenText className="h-8 w-8" />
        {t(lang, 'glossaryTitle')}
      </h1>
      <p className="mb-6 text-stone-600 dark:text-stone-300">{t(lang, 'glossarySubtitle')}</p>

      <div className="relative mb-6">
        <Search className="absolute start-3 top-1/2 h-5 w-5 -translate-y-1/2 text-stone-400" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t(lang, 'search')}
          aria-label={t(lang, 'search')}
          className="w-full rounded-xl border border-sand-200 bg-transparent py-3 pe-4 ps-10 focus:outline-none focus:ring-0 dark:border-brand-700"
        />
      </div>

      <div className="flex flex-col gap-3">
        {terms.map((term) => (
          <details key={term.en} className="rounded-[1.25rem] border border-border bg-card text-card-foreground shadow-sm group p-4 open:shadow-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-2 font-bold [&::-webkit-details-marker]:hidden">
              <span>{lang === 'ar' ? term.ar : term.en}</span>
              <span className="text-sm font-medium text-stone-400 transition-transform group-open:rotate-90">
                {lang === 'ar' ? term.en : term.ar}
              </span>
            </summary>
            <p className="mt-3 leading-loose text-stone-700 dark:text-stone-300">
              {lang === 'ar' ? term.arBody : term.enBody}
            </p>
          </details>
        ))}
      </div>
      <p className="mt-4 text-sm text-stone-500">
        <span className="num">{terms.length}</span> / <span className="num">{GLOSSARY.length}</span>
      </p>
    </div>
  )
}
