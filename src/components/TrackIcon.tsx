'use client'

import { Wallet, PiggyBank, TrendingUp, Laptop, Store, Brain, type LucideIcon } from 'lucide-react'
import type { Track } from '../content/types'

const ICONS: Record<Track['icon'], LucideIcon> = {
  wallet: Wallet,
  piggy: PiggyBank,
  chart: TrendingUp,
  laptop: Laptop,
  store: Store,
  brain: Brain,
}

export default function TrackIcon({ icon, className }: { icon: Track['icon']; className?: string }) {
  const Icon = ICONS[icon]
  return <Icon className={className ?? 'h-6 w-6'} aria-hidden="true" />
}
