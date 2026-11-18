'use client'

// PREVIEW ONLY - not for production. Renders the real home page inside a
// full-viewport overlay with the --color-* design tokens swapped per variant.
// Open /preview/themes/?v=1..8

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Menu } from 'lucide-react'
import HomePage from '../../page'

type Vars = Record<string, string>

interface ThemeDef {
  name: string
  vars: Vars
  headingClass?: string
  btnClass?: string
}

function theme(
  name: string,
  p: {
    bg: string; card: string; border: string; fg: string; mutedFg: string; secondaryFg: string
    accent: string; accentFg: string; primary: string; primaryFg: string
    brand900: string; brand100: string; brand700: string
    g300: string; g400: string; g500: string; g600: string
    headingClass?: string
    btnClass?: string
  },
): ThemeDef {
  return {
    name,
    headingClass: p.headingClass,
    btnClass: p.btnClass,
    vars: {
      '--color-background': p.bg,
      '--color-foreground': p.fg,
      '--color-card': p.card,
      '--color-card-foreground': p.fg,
      '--color-border': p.border,
      '--color-input': p.border,
      '--color-muted': p.card,
      '--color-muted-foreground': p.mutedFg,
      '--color-secondary': p.card,
      '--color-secondary-foreground': p.secondaryFg,
      '--color-accent': p.accent,
      '--color-accent-foreground': p.accentFg,
      '--color-primary': p.primary,
      '--color-primary-foreground': p.primaryFg,
      '--color-ring': p.primary,
      '--color-brand-900': p.brand900,
      '--color-brand-100': p.brand100,
      '--color-brand-700': p.brand700,
      '--color-gold-300': p.g300,
      '--color-gold-400': p.g400,
      '--color-gold-500': p.g500,
      '--color-gold-600': p.g600,
    },
  }
}

// Primary-button metal per theme: overrides the Button's hardcoded gold gradient
// (matched via its bg-left marker utility; trailing "!" beats the component class).
const SILVER_B = '[&_.bg-left]:[background-image:linear-gradient(115deg,#64748b_0%,#94a3b8_30%,#e2e8f0_50%,#94a3b8_70%,#64748b_100%)]!'
const ROSE_B = '[&_.bg-left]:[background-image:linear-gradient(115deg,#a55a4c_0%,#d68a78_30%,#f3c4b5_50%,#d68a78_70%,#a55a4c_100%)]!'
const VIOLET_B = '[&_.bg-left]:[background-image:linear-gradient(115deg,#7d55c7_0%,#a87ef0_30%,#d9c2fc_50%,#a87ef0_70%,#7d55c7_100%)]!'
const COPPER_B = '[&_.bg-left]:[background-image:linear-gradient(115deg,#b26230_0%,#e08b52_30%,#f6c391_50%,#e08b52_70%,#b26230_100%)]!'
const CHAMP_B = '[&_.bg-left]:[background-image:linear-gradient(115deg,#ab9350_0%,#d9c079_30%,#f6ecd2_50%,#d9c079_70%,#ab9350_100%)]!'
const AMBER_B = '[&_.bg-left]:[background-image:linear-gradient(115deg,#b5791f_0%,#e8a33d_30%,#f9d78a_50%,#e8a33d_70%,#b5791f_100%)]!'

const SILVER_H = '[&_h1]:[background-image:linear-gradient(180deg,#ffffff_0%,#dbe3ec_30%,#94a3b8_55%,#64748b_78%,#cbd5e1_100%)] [&_h2]:[background-image:linear-gradient(180deg,#ffffff_0%,#dbe3ec_30%,#94a3b8_55%,#64748b_78%,#cbd5e1_100%)]'
const ROSE_H = '[&_h1]:[background-image:linear-gradient(180deg,#fbe3da_0%,#f0c0b0_30%,#d68a78_55%,#a55a4c_78%,#e8b3a2_100%)] [&_h2]:[background-image:linear-gradient(180deg,#fbe3da_0%,#f0c0b0_30%,#d68a78_55%,#a55a4c_78%,#e8b3a2_100%)]'
const VIOLET_H = '[&_h1]:[background-image:linear-gradient(180deg,#f3ebff_0%,#dcc8fb_30%,#a87ef0_55%,#7d55c7_78%,#c9aef7_100%)] [&_h2]:[background-image:linear-gradient(180deg,#f3ebff_0%,#dcc8fb_30%,#a87ef0_55%,#7d55c7_78%,#c9aef7_100%)]'
const COPPER_H = '[&_h1]:[background-image:linear-gradient(180deg,#fce5cd_0%,#f2c194_30%,#e08b52_55%,#b26230_78%,#ebab72_100%)] [&_h2]:[background-image:linear-gradient(180deg,#fce5cd_0%,#f2c194_30%,#e08b52_55%,#b26230_78%,#ebab72_100%)]'
const CHAMP_H = '[&_h1]:[background-image:linear-gradient(180deg,#faf3d7_0%,#f0e2ac_30%,#d9c079_55%,#ab9350_78%,#ecdc9f_100%)] [&_h2]:[background-image:linear-gradient(180deg,#faf3d7_0%,#f0e2ac_30%,#d9c079_55%,#ab9350_78%,#ecdc9f_100%)]'
const AMBER_H = '[&_h1]:[background-image:linear-gradient(180deg,#fdeec8_0%,#f6d286_30%,#e8a33d_55%,#b5791f_78%,#f0bc62_100%)] [&_h2]:[background-image:linear-gradient(180deg,#fdeec8_0%,#f6d286_30%,#e8a33d_55%,#b5791f_78%,#f0bc62_100%)]'

const THEMES: ThemeDef[] = [
  { name: 'الأسود والذهبي (الحالي)', vars: {} },
  theme('الزمردي والذهبي', {
    bg: '#071009', card: '#0c1a12', border: '#1e3a29', fg: '#f2f5ef', mutedFg: '#9db8a4', secondaryFg: '#cde6d2',
    accent: '#143324', accentFg: '#f1dc8f', primary: '#d4af37', primaryFg: '#1f1603',
    brand900: '#0f2417', brand100: '#d8ecd9', brand700: '#2f6b45',
    g300: '#f1dc8f', g400: '#e6c655', g500: '#d4af37', g600: '#a8851c',
  }),
  theme('الكحلي والبلاتين', {
    bg: '#05070d', card: '#0a0f1c', border: '#1c2740', fg: '#f2f5f9', mutedFg: '#8fa0bd', secondaryFg: '#c8d4ea',
    accent: '#131e33', accentFg: '#e2e8f0', primary: '#cbd5e1', primaryFg: '#0a0f1c',
    brand900: '#101a30', brand100: '#dbe4f2', brand700: '#3b517a',
    g300: '#eef2f7', g400: '#cbd5e1', g500: '#94a3b8', g600: '#64748b',
    headingClass: SILVER_H,
    btnClass: SILVER_B,
  }),
  theme('العنابي والذهبي الوردي', {
    bg: '#120507', card: '#1d0a0e', border: '#3d151d', fg: '#f9f1f0', mutedFg: '#c09aa0', secondaryFg: '#eccdd0',
    accent: '#33111a', accentFg: '#f3d2cb', primary: '#e2a18e', primaryFg: '#26090a',
    brand900: '#2b0d13', brand100: '#f2dde0', brand700: '#8a3a48',
    g300: '#f6d7cc', g400: '#e2a18e', g500: '#cf8271', g600: '#a55a4c',
    headingClass: ROSE_H,
    btnClass: ROSE_B,
  }),
  theme('البنفسجي الملكي', {
    bg: '#0b0614', card: '#130b22', border: '#2a1a4a', fg: '#f5f1fb', mutedFg: '#a793cc', secondaryFg: '#d9c9f5',
    accent: '#21123d', accentFg: '#e5dbfa', primary: '#b79cf5', primaryFg: '#170b2b',
    brand900: '#1c1035', brand100: '#e6dcf8', brand700: '#5b3d99',
    g300: '#e9defc', g400: '#c9aef7', g500: '#a87ef0', g600: '#7d55c7',
    headingClass: VIOLET_H,
    btnClass: VIOLET_B,
  }),
  theme('الفحمي والنحاسي', {
    bg: '#0c0a08', card: '#161009', border: '#38250f', fg: '#f7f2ec', mutedFg: '#b09676', secondaryFg: '#e8cfae',
    accent: '#291a0c', accentFg: '#f5ddba', primary: '#e08b52', primaryFg: '#241103',
    brand900: '#241708', brand100: '#f2e2cd', brand700: '#96602c',
    g300: '#f7d9b8', g400: '#ebab72', g500: '#e08b52', g600: '#b26230',
    headingClass: COPPER_H,
    btnClass: COPPER_B,
  }),
  theme('البترولي والشامبين', {
    bg: '#041014', card: '#082026', border: '#134049', fg: '#eff7f7', mutedFg: '#8fb5ba', secondaryFg: '#cdecee',
    accent: '#0e3238', accentFg: '#f1e4b8', primary: '#e6d39a', primaryFg: '#232002',
    brand900: '#0d2e34', brand100: '#d9efee', brand700: '#2e6b6e',
    g300: '#f6ebc4', g400: '#ecdc9f', g500: '#dcc482', g600: '#b09a56',
    headingClass: CHAMP_H,
    btnClass: CHAMP_B,
  }),
  theme('البني الجلدي والكهرمان', {
    bg: '#0e0803', card: '#1a0f06', border: '#3a240e', fg: '#f8f2e8', mutedFg: '#b39468', secondaryFg: '#edd9b4',
    accent: '#2c1a08', accentFg: '#f5dfae', primary: '#e8a33d', primaryFg: '#281503',
    brand900: '#2a1807', brand100: '#f0e0c4', brand700: '#8a5a1d',
    g300: '#f9dfa6', g400: '#f0bc62', g500: '#e8a33d', g600: '#b5791f',
    headingClass: AMBER_H,
    btnClass: AMBER_B,
  }),
]

function Inner() {
  const params = useSearchParams()
  const v = Math.min(Math.max(parseInt(params.get('v') || '1', 10) || 1, 1), THEMES.length)
  const t = THEMES[v - 1]

  return (
    <div
      dir="rtl"
      style={t.vars as React.CSSProperties}
      className={`fixed inset-0 z-50 overflow-y-auto bg-background text-foreground ${t.headingClass || ''} ${t.btnClass || ''}`}
    >
      <header className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-6xl items-center gap-3 px-4">
          <span className="flex items-center gap-2">
            <img src="/logo-85b02a.png" alt="" width={32} height={32} className="h-8 w-8 rounded-lg drop-shadow-[0_0_18px_rgb(212_175_55/0.45)]" />
            <span className="flex flex-col leading-none">
              <span className="font-head text-xl font-bold text-gold-300">Feloosy</span>
              <span className="font-head text-xs text-gold-300/70">فلوسي</span>
            </span>
          </span>
          <span className="flex-1" />
          <span className="rounded-lg p-2 text-gold-300"><Menu className="h-5 w-5" /></span>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-6">
        <HomePage />
      </main>
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
