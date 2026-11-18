import type { Metadata } from 'next'
import TracksPage from '../../screens/TracksPage'

export const metadata: Metadata = { title: 'المسارات' }

export default function Page() {
  return <TracksPage />
}
