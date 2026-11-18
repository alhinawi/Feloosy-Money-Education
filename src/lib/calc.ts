// ==============================================================================
// Calculator math for the Trillionaire money tools. Pure functions, unit-tested.
// ==============================================================================

/** Clamp a user-entered number into a sane range; NaN and negatives become 0. */
export function sane(value: number, max = 1e12): number {
  if (!Number.isFinite(value) || value < 0) return 0
  return Math.min(value, max)
}

export interface CompoundResult {
  total: number
  deposited: number
  growth: number
}

/**
 * Monthly-compounded growth of a starting amount plus a fixed monthly deposit.
 * ratePct is the yearly nominal return in percent (e.g. 18 means 18%).
 */
export function compound(start: number, monthly: number, ratePct: number, years: number): CompoundResult {
  const p = sane(start)
  const m = sane(monthly, 1e9)
  const r = sane(ratePct, 100) / 100 / 12
  const n = Math.min(Math.max(Math.round(sane(years, 100)), 0), 100) * 12
  let balance = p
  for (let i = 0; i < n; i++) balance = balance * (1 + r) + m
  const deposited = p + m * n
  return { total: balance, deposited, growth: Math.max(balance - deposited, 0) }
}

/** Monthly saving needed to reach a goal, assuming a yearly return (0 allowed). */
export function goalMonthly(goal: number, months: number, ratePct = 0): number {
  const g = sane(goal)
  const n = Math.max(Math.round(sane(months, 1200)), 1)
  const r = sane(ratePct, 100) / 100 / 12
  if (r === 0) return g / n
  const factor = (Math.pow(1 + r, n) - 1) / r
  return g / factor
}

export interface BudgetSplit {
  needs: number
  wants: number
  saves: number
}

/** Classic 50/30/20 split of a monthly income. */
export function budgetSplit(income: number): BudgetSplit {
  const i = sane(income)
  return { needs: i * 0.5, wants: i * 0.3, saves: i * 0.2 }
}
