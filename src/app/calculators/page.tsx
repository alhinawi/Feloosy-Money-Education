import type { Metadata } from 'next'
import CalculatorsPage from '../../screens/CalculatorsPage'

export const metadata: Metadata = { title: 'حاسبات الفلوس' }

export default function Page() {
  return <CalculatorsPage />
}
