import type { Metadata } from 'next'
import GlossaryPage from '../../screens/GlossaryPage'

export const metadata: Metadata = { title: 'قاموس الفلوس' }

export default function Page() {
  return <GlossaryPage />
}
