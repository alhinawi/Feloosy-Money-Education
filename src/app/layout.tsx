import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import '@fontsource-variable/readex-pro/wght.css'
import '@fontsource/el-messiri/arabic-600.css'
import '@fontsource/el-messiri/arabic-700.css'
import '@fontsource/el-messiri/latin-600.css'
import '@fontsource/el-messiri/latin-700.css'
import '@fontsource-variable/playfair-display'
import '@fontsource/amiri/arabic-400.css'
import '@fontsource/amiri/arabic-700.css'
import './globals.css'
import AppShell from '../components/AppShell'

const SITE_URL = 'https://feloosy.pages.dev'

/** Applies the saved theme before first paint, so dark mode does not flash. */
const THEME_BOOT_SCRIPT = `try{var s=(JSON.parse(localStorage.getItem('feloosy:v1')||'{}').state)||{};var t=s.theme||'system';if(t==='dark'||(t==='system'&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'فلوسي - اتعلم الفلوس صح', template: '%s | فلوسي' },
  description:
    'فلوسي بيعلمك أساسيات الفلوس بالعامية المصرية: ميزانية، ادخار، استثمار، دخل جانبي ومشروعك الخاص. محتوى تعليمي صادق من غير وعود ثراء سريع.',
  applicationName: 'فلوسي',
  icons: { icon: '/favicon.svg' },
  manifest: '/manifest.webmanifest',
  openGraph: {
    siteName: 'فلوسي',
    images: [{ url: '/images/hero.jpg', width: 1280, height: 720 }],
  },
}

export const viewport: Viewport = {
  themeColor: '#231a05',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOT_SCRIPT }} />
      </head>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  )
}
