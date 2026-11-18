import type { Metadata } from 'next'
import AboutPage from '../../screens/AboutPage'

export const metadata: Metadata = { title: 'عن فلوسي' }

export default function Page() {
  return <AboutPage />
}
