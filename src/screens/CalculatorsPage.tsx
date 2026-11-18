'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useApp } from '../lib/store'
import { t, fmtNum } from '../lib/i18n'
import { compound, goalMonthly, budgetSplit } from '../lib/calc'

function Field({ label, value, onChange, min = 0, max }: { label: string; value: number; onChange: (n: number) => void; min?: number; max?: number }) {
  return (
    <label className="flex flex-col gap-1 text-sm font-medium">
      {label}
      <input
        type="number"
        inputMode="decimal"
        dir="ltr"
        min={min}
        max={max}
        value={Number.isFinite(value) ? value : ''}
        onChange={(e) => onChange(e.target.value === '' ? 0 : Number(e.target.value))}
        className="num rounded-xl border border-sand-200 bg-transparent px-3 py-2 text-start dark:border-brand-700"
      />
    </label>
  )
}

function ResultRow({ label, value, strong }: { label: string; value: number; strong?: boolean }) {
  return (
    <div className={`flex items-center justify-between rounded-xl px-4 py-2 ${strong ? 'bg-brand-100 font-bold text-brand-900 dark:bg-brand-900 dark:text-gold-300' : 'bg-sand-100 dark:bg-brand-950'}`}>
      <span>{label}</span>
      <span className="num">{fmtNum(Math.round(value))} EGP</span>
    </div>
  )
}

export default function CalculatorsPage() {
  const { lang } = useApp()
  const [cStart, setCStart] = useState(10000)
  const [cMonthly, setCMonthly] = useState(1000)
  const [cRate, setCRate] = useState(15)
  const [cYears, setCYears] = useState(10)
  const [gGoal, setGGoal] = useState(50000)
  const [gMonths, setGMonths] = useState(12)
  const [bIncome, setBIncome] = useState(10000)

  const comp = compound(cStart, cMonthly, cRate, cYears)
  const need = goalMonthly(gGoal, gMonths)
  const budget = budgetSplit(bIncome)

  return (
    <div>
      <h1 className="mb-2 text-3xl font-bold text-brand-900 dark:text-gold-300">{t(lang, 'calculatorsTitle')}</h1>
      <p className="mb-8 text-stone-600 dark:text-stone-300">{t(lang, 'calculatorsSubtitle')}</p>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-[1.25rem] border border-border bg-card text-card-foreground shadow-sm p-5" aria-label={t(lang, 'calcCompound')}>
          <h2 className="mb-4 text-xl font-bold">{t(lang, 'calcCompound')}</h2>
          <div className="mb-4 grid grid-cols-2 gap-3">
            <Field label={t(lang, 'calcStart')} value={cStart} onChange={setCStart} />
            <Field label={t(lang, 'calcMonthly')} value={cMonthly} onChange={setCMonthly} />
            <Field label={t(lang, 'calcRate')} value={cRate} onChange={setCRate} max={100} />
            <Field label={t(lang, 'calcYears')} value={cYears} onChange={setCYears} max={100} />
          </div>
          <div className="flex flex-col gap-2">
            <ResultRow label={t(lang, 'calcTotal')} value={comp.total} strong />
            <ResultRow label={t(lang, 'calcDeposited')} value={comp.deposited} />
            <ResultRow label={t(lang, 'calcGrowth')} value={comp.growth} />
          </div>
        </section>

        <section className="rounded-[1.25rem] border border-border bg-card text-card-foreground shadow-sm p-5" aria-label={t(lang, 'calcGoal')}>
          <h2 className="mb-4 text-xl font-bold">{t(lang, 'calcGoal')}</h2>
          <div className="mb-4 grid grid-cols-2 gap-3">
            <Field label={t(lang, 'calcGoalAmount')} value={gGoal} onChange={setGGoal} />
            <Field label={t(lang, 'calcGoalMonths')} value={gMonths} onChange={setGMonths} min={1} />
          </div>
          <ResultRow label={t(lang, 'calcNeedMonthly')} value={need} strong />
          <div className="relative mt-4 overflow-hidden rounded-xl">
            <Image src="/images/calculators.jpg" alt={t(lang, 'imageAlt')} width={1280} height={720} className="h-32 w-full object-cover" />
          </div>
        </section>

        <section className="rounded-[1.25rem] border border-border bg-card text-card-foreground shadow-sm p-5 lg:col-span-2" aria-label={t(lang, 'calcBudget')}>
          <h2 className="mb-4 text-xl font-bold">{t(lang, 'calcBudget')}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label={t(lang, 'calcIncome')} value={bIncome} onChange={setBIncome} />
            <div className="flex flex-col gap-2">
              <ResultRow label={t(lang, 'calcNeeds')} value={budget.needs} />
              <ResultRow label={t(lang, 'calcWants')} value={budget.wants} />
              <ResultRow label={t(lang, 'calcSaves')} value={budget.saves} strong />
            </div>
          </div>
        </section>
      </div>

      <p className="mt-6 text-sm text-stone-500 dark:text-stone-400">{t(lang, 'calcNote')}</p>
    </div>
  )
}
