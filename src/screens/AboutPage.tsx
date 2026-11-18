'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ShieldCheck } from 'lucide-react'
import { useApp } from '../lib/store'
import { t } from '../lib/i18n'

export default function AboutPage() {
  const { lang } = useApp()
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-4 text-3xl font-bold text-brand-900 dark:text-gold-300">{t(lang, 'aboutTitle')}</h1>
      <div className="relative mb-6 overflow-hidden rounded-2xl">
        <Image src="/images/track-mindset.jpg" alt={t(lang, 'imageAlt')} width={1280} height={720} className="h-52 w-full object-cover" />
      </div>
      {lang === 'ar' ? (
        <div className="flex flex-col gap-4 leading-loose text-stone-700 dark:text-stone-300">
          <p>
            فلوسي موقع تعليمي هدفه بسيط: يعلّمك اللغة المالية اللي محدش علّمها لنا في المدرسة. إزاي تعمل ميزانية، إزاي تدخر،
            إيه الفرق بين الادخار والاستثمار، إزاي تبدأ دخل جانبي أو مشروع صغير، وإزاي تحمي نفسك من النصب.
          </p>
          <p>
            المحتوى مكتوب بالعامية المصرية وبأمثلة من واقعنا: الشهادات البنكية، الدهب، البورصة المصرية، والفريلانس.
            من غير مصطلحات معقدة ومن غير ما نفترض إن عندك خلفية مالية.
          </p>
          <div className="rounded-[1.25rem] border border-border bg-card text-card-foreground shadow-sm border-r-4 border-r-gold-500 p-5 dark:border-r-gold-400">
            <h2 className="mb-2 flex items-center gap-2 font-bold text-brand-900 dark:text-gold-300">
              <ShieldCheck className="h-5 w-5" />
              {t(lang, 'honestyTitle')}
            </h2>
            <p>{t(lang, 'honestyBody')}</p>
          </div>
          <p>
            <Link href="/tracks/" className="font-bold text-brand-700 hover:underline dark:text-gold-300">
              {t(lang, 'heroCta')} ←
            </Link>
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-4 leading-loose text-stone-700 dark:text-stone-300">
          <p>
            Feloosy is an educational site with one simple goal: teaching the money language school never taught us. How to
            budget, how to save, the difference between saving and investing, how to start a side income or a small business,
            and how to protect yourself from scams.
          </p>
          <p>
            The content uses Egyptian reality for examples: bank certificates, gold, the Egyptian Exchange, and freelancing -
            with no complex jargon and no assumption of a finance background.
          </p>
          <div className="rounded-[1.25rem] border border-border bg-card text-card-foreground shadow-sm border-l-4 border-l-gold-500 p-5 dark:border-l-gold-400">
            <h2 className="mb-2 flex items-center gap-2 font-bold text-brand-900 dark:text-gold-300">
              <ShieldCheck className="h-5 w-5" />
              {t(lang, 'honestyTitle')}
            </h2>
            <p>{t(lang, 'honestyBody')}</p>
          </div>
          <p>
            <Link href="/tracks/" className="font-bold text-brand-700 hover:underline dark:text-gold-300">
              {t(lang, 'heroCta')} →
            </Link>
          </p>
        </div>
      )}
    </div>
  )
}
