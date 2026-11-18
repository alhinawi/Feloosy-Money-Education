'use client'

// PREVIEW ONLY - not for production. 8 mobile drawer design variants.
// Open /preview/drawers/?v=1..8 on a 390px viewport.

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import {
  X, Home, Layers, Calculator, BookOpenText, Info, Settings as SettingsIcon, UserRound,
  type LucideIcon,
} from 'lucide-react'

const ITEMS: { icon: LucideIcon; label: string; active?: boolean }[] = [
  { icon: Home, label: 'الرئيسية', active: true },
  { icon: Layers, label: 'المسارات' },
  { icon: Calculator, label: 'الحاسبات' },
  { icon: BookOpenText, label: 'قاموس الفلوس' },
  { icon: Info, label: 'عن الموقع' },
  { icon: SettingsIcon, label: 'الإعدادات' },
]

function Lockup({ sub = 'text-gold-300/70', head = 'text-gold-300' }: { sub?: string; head?: string }) {
  return (
    <span className="flex items-center gap-2">
      <img src="/logo-85b02a.png" alt="" width={32} height={32} className="h-8 w-8 rounded-lg drop-shadow-[0_0_18px_rgb(212_175_55/0.45)]" />
      <span className="flex flex-col leading-none">
        <span className={`font-head text-lg font-bold ${head}`}>Feloosy</span>
        <span className={`font-head text-xs ${sub}`}>فلوسي</span>
      </span>
    </span>
  )
}

function CloseBtn({ className = '' }: { className?: string }) {
  return (
    <span className={`rounded-lg p-2 ${className}`}>
      <X className="h-5 w-5" />
    </span>
  )
}

function Variant1() {
  // الأساسية المحسّنة: near-black, hairline dividers, gradient wordmark
  return (
    <aside className="absolute right-0 top-0 h-full w-80 bg-[#0b0a07] p-5 shadow-2xl">
      <div className="mb-6 flex items-center justify-between">
        <Lockup head="bg-[linear-gradient(180deg,#f9e79a,#c9a227)] bg-clip-text text-transparent" />
        <CloseBtn className="text-gold-300 ring-1 ring-gold-500/40" />
      </div>
      <nav className="flex flex-col divide-y divide-gold-500/10">
        {ITEMS.map(({ icon: Icon, label, active }) => (
          <span key={label} className={`flex items-center gap-3 px-2 py-3.5 font-medium ${active ? 'text-gold-300' : 'text-stone-300'}`}>
            <Icon className={`h-5 w-5 ${active ? 'text-gold-400' : 'text-gold-600'}`} />
            {label}
          </span>
        ))}
      </nav>
      <span className="mt-6 flex items-center gap-3 rounded-xl bg-gold-500/10 px-3 py-3 font-medium text-gold-300">
        <UserRound className="h-5 w-5 text-gold-400" />
        حسابي
      </span>
    </aside>
  )
}

function Variant2() {
  // الإطار الذهبي: gold gradient edge bar + framed icons
  return (
    <aside className="absolute right-0 top-0 h-full w-80 bg-[#0d0b06] p-5 shadow-2xl">
      <span className="absolute inset-y-0 left-0 w-[3px] bg-[linear-gradient(180deg,#f6e27a,#d4af37,#96741a)]" />
      <div className="mb-6 flex items-center justify-between">
        <Lockup />
        <CloseBtn className="text-gold-300" />
      </div>
      <nav className="flex flex-col gap-2">
        {ITEMS.map(({ icon: Icon, label, active }) => (
          <span key={label} className={`flex items-center gap-3 rounded-xl border px-3 py-3 font-medium ${active ? 'border-gold-500/60 bg-gold-500/10 text-gold-300' : 'border-gold-500/15 text-stone-300'}`}>
            <span className={`rounded-lg border p-1.5 ${active ? 'border-gold-500/60 text-gold-400' : 'border-gold-500/20 text-gold-600'}`}>
              <Icon className="h-4 w-4" />
            </span>
            {label}
          </span>
        ))}
      </nav>
      <span className="mt-6 flex items-center gap-3 rounded-xl border border-gold-500/15 px-3 py-3 font-medium text-stone-300">
        <span className="rounded-lg border border-gold-500/20 p-1.5 text-gold-600"><UserRound className="h-4 w-4" /></span>
        حسابي
      </span>
    </aside>
  )
}

function Variant3() {
  // البطاقات: every item a raised card with an icon chip
  return (
    <aside className="absolute right-0 top-0 h-full w-80 bg-[#12100a] p-5 shadow-2xl">
      <div className="mb-6 flex items-center justify-between">
        <Lockup />
        <CloseBtn className="bg-white/5 text-gold-300" />
      </div>
      <nav className="flex flex-col gap-3">
        {ITEMS.map(({ icon: Icon, label, active }) => (
          <span key={label} className={`flex items-center gap-3 rounded-2xl border px-4 py-3.5 font-medium shadow-[0_2px_10px_rgb(0_0_0/0.35)] ${active ? 'border-gold-500/50 bg-[#1c1809] text-gold-300' : 'border-white/5 bg-white/[0.04] text-stone-200'}`}>
            <span className={`rounded-full p-2 ${active ? 'bg-gold-500 text-[#231a05]' : 'bg-gold-500/15 text-gold-400'}`}>
              <Icon className="h-4 w-4" />
            </span>
            {label}
          </span>
        ))}
      </nav>
      <span className="mt-6 flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.04] px-4 py-3.5 font-medium text-stone-200">
        <span className="rounded-full bg-gold-500/15 p-2 text-gold-400"><UserRound className="h-4 w-4" /></span>
        حسابي
      </span>
    </aside>
  )
}

function Variant4() {
  // المؤشر المضيء: glowing indicator bar on the active item
  return (
    <aside className="absolute right-0 top-0 h-full w-80 bg-black p-5 shadow-2xl">
      <div className="mb-8 flex items-center justify-between">
        <Lockup />
        <CloseBtn className="text-gold-300" />
      </div>
      <nav className="flex flex-col gap-1">
        {ITEMS.map(({ icon: Icon, label, active }) => (
          <span key={label} className="relative flex items-center gap-3 rounded-lg px-4 py-3 font-medium">
            {active && <span className="absolute inset-y-1.5 right-0 w-1 rounded-full bg-gold-400 shadow-[0_0_12px_2px_rgb(212_175_55/0.6)]" />}
            <Icon className={`h-5 w-5 ${active ? 'text-gold-300 drop-shadow-[0_0_8px_rgb(212_175_55/0.7)]' : 'text-stone-500'}`} />
            <span className={active ? 'font-bold text-gold-300' : 'text-stone-400'}>{label}</span>
          </span>
        ))}
      </nav>
      <span className="relative mt-8 flex items-center gap-3 rounded-lg px-4 py-3 font-medium text-stone-400">
        <UserRound className="h-5 w-5 text-stone-500" />
        حسابي
      </span>
    </aside>
  )
}

function Variant5() {
  // التدرج الليلي: diagonal charcoal gradient + gold glow at the top
  return (
    <aside className="absolute right-0 top-0 h-full w-80 bg-[linear-gradient(160deg,#1c1607_0%,#0b0a07_45%,#000000_100%)] p-5 shadow-2xl">
      <span className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(60%_100%_at_50%_0%,rgb(212_175_55/0.18),transparent)]" />
      <div className="relative mb-8 flex items-center justify-between">
        <Lockup />
        <CloseBtn className="text-gold-300" />
      </div>
      <nav className="relative flex flex-col gap-1.5">
        {ITEMS.map(({ icon: Icon, label, active }) => (
          <span key={label} className={`flex items-center gap-3 rounded-xl px-4 py-3 font-medium tracking-wide ${active ? 'bg-white/[0.06] text-gold-300' : 'text-stone-300'}`}>
            <Icon className={`h-5 w-5 ${active ? 'text-gold-400' : 'text-gold-600/70'}`} />
            {label}
          </span>
        ))}
      </nav>
      <span className="relative mt-8 flex items-center gap-3 rounded-xl px-4 py-3 font-medium tracking-wide text-stone-300">
        <UserRound className="h-5 w-5 text-gold-600/70" />
        حسابي
      </span>
    </aside>
  )
}

function Variant6() {
  // الغلاف المصور: real photo cover on top, solid black below
  return (
    <aside className="absolute right-0 top-0 h-full w-80 overflow-hidden bg-black shadow-2xl">
      <div className="relative h-36">
        <img src="/images/hero.jpg" alt="" className="h-full w-full object-cover" />
        <span className="absolute inset-0 bg-[linear-gradient(180deg,rgb(0_0_0/0.25),rgb(0_0_0/0.92))]" />
        <span className="absolute inset-x-5 top-4 flex items-center justify-between">
          <Lockup />
          <CloseBtn className="text-gold-300" />
        </span>
      </div>
      <nav className="flex flex-col gap-1 p-5 pt-3">
        {ITEMS.map(({ icon: Icon, label, active }) => (
          <span key={label} className={`flex items-center gap-3 rounded-lg px-3 py-2.5 font-medium ${active ? 'text-gold-300' : 'text-stone-300'}`}>
            <Icon className={`h-5 w-5 ${active ? 'text-gold-400' : 'text-gold-600'}`} />
            {label}
            {active && <span className="ms-auto h-1.5 w-1.5 rounded-full bg-gold-400" />}
          </span>
        ))}
        <span className="flex items-center gap-3 rounded-lg px-3 py-2.5 font-medium text-stone-300">
          <UserRound className="h-5 w-5 text-gold-600" />
          حسابي
        </span>
      </nav>
    </aside>
  )
}

function Variant7() {
  // الزجاج الداكن: frosted glass over the dimmed page
  return (
    <aside className="absolute right-0 top-0 h-full w-80 bg-black/55 p-5 shadow-2xl ring-1 ring-white/10 backdrop-blur-2xl">
      <div className="mb-6 flex items-center justify-between">
        <Lockup />
        <CloseBtn className="text-gold-300" />
      </div>
      <nav className="flex flex-col divide-y divide-white/5">
        {ITEMS.map(({ icon: Icon, label, active }) => (
          <span key={label} className={`flex items-center gap-3 px-2 py-3.5 font-medium ${active ? 'text-gold-300' : 'text-stone-200'}`}>
            <Icon className={`h-5 w-5 ${active ? 'text-gold-400' : 'text-stone-400'}`} />
            {label}
          </span>
        ))}
        <span className="flex items-center gap-3 px-2 py-3.5 font-medium text-stone-200">
          <UserRound className="h-5 w-5 text-stone-400" />
          حسابي
        </span>
      </nav>
    </aside>
  )
}

function Variant8() {
  // الفاخرة: centered brand, ornamental divider, gold CTA at the bottom
  return (
    <aside className="absolute right-0 top-0 flex h-full w-80 flex-col bg-[#0b0a07] p-5 shadow-2xl">
      <div className="flex items-center justify-end">
        <CloseBtn className="text-gold-300" />
      </div>
      <div className="mt-2 flex flex-col items-center gap-2">
        <img src="/logo-85b02a.png" alt="" width={56} height={56} className="h-14 w-14 rounded-2xl drop-shadow-[0_0_22px_rgb(212_175_55/0.5)]" />
        <span className="font-head text-2xl font-bold text-gold-300">Feloosy</span>
        <span className="font-head text-sm text-gold-300/70">فلوسي</span>
      </div>
      <span className="my-6 flex items-center gap-3">
        <span className="h-px flex-1 bg-[linear-gradient(90deg,transparent,#d4af37)]" />
        <span className="h-1.5 w-1.5 rotate-45 bg-gold-400" />
        <span className="h-px flex-1 bg-[linear-gradient(90deg,#d4af37,transparent)]" />
      </span>
      <nav className="flex flex-col items-center gap-1">
        {ITEMS.map(({ label, active }) => (
          <span key={label} className={`rounded-lg px-4 py-2.5 font-head text-lg ${active ? 'font-bold text-gold-300' : 'text-stone-300'}`}>
            {label}
          </span>
        ))}
      </nav>
      <span className="mt-auto flex items-center justify-center gap-2 rounded-xl bg-[linear-gradient(120deg,#f6e27a,#d4af37,#a8851c)] px-4 py-3 font-bold text-[#231a05]">
        <UserRound className="h-5 w-5" />
        حسابي
      </span>
    </aside>
  )
}

const VARIANTS = [Variant1, Variant2, Variant3, Variant4, Variant5, Variant6, Variant7, Variant8]

function Inner() {
  const params = useSearchParams()
  const v = Math.min(Math.max(parseInt(params.get('v') || '1', 10) || 1, 1), VARIANTS.length)
  const Variant = VARIANTS[v - 1]
  return (
    <div dir="rtl" className="fixed inset-0 z-50 bg-[#0b0a07]">
      <img src="/images/hero.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/60" />
      <Variant />
    </div>
  )
}

export default function Page() {
  return (
    <Suspense>
      <Inner />
    </Suspense>
  )
}
