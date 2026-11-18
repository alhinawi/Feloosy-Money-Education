import type { Metadata } from 'next'
import SettingsPage from '../../screens/SettingsPage'

export const metadata: Metadata = { title: 'الإعدادات' }

export default function Page() {
  return <SettingsPage />
}
