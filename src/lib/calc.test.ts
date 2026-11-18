import { describe, expect, it } from 'vitest'
import { budgetSplit, compound, goalMonthly, sane } from './calc'

describe('sane', () => {
  it('clamps NaN, negatives and huge values', () => {
    expect(sane(NaN)).toBe(0)
    expect(sane(-5)).toBe(0)
    expect(sane(1e15)).toBe(1e12)
  })
})

describe('compound', () => {
  it('zero rate means plain accumulation', () => {
    const r = compound(10000, 1000, 0, 1)
    expect(r.total).toBe(22000)
    expect(r.growth).toBe(0)
  })
  it('grows faster than simple accumulation with a positive rate', () => {
    const r = compound(10000, 1000, 12, 10)
    expect(r.total).toBeGreaterThan(130000)
    expect(r.deposited).toBe(130000)
    expect(r.growth).toBeGreaterThan(0)
  })
  it('handles junk input without NaN', () => {
    const r = compound(NaN, -10, 1e9, -3)
    expect(Number.isFinite(r.total)).toBe(true)
    expect(r.total).toBeGreaterThanOrEqual(0)
  })
})

describe('goalMonthly', () => {
  it('splits evenly at zero rate', () => {
    expect(goalMonthly(12000, 12)).toBe(1000)
  })
  it('needs less than the even split when money grows', () => {
    expect(goalMonthly(12000, 12, 12)).toBeLessThan(1000)
  })
})

describe('budgetSplit', () => {
  it('splits 50/30/20', () => {
    const b = budgetSplit(10000)
    expect(b.needs).toBe(5000)
    expect(b.wants).toBe(3000)
    expect(b.saves).toBe(2000)
  })
})
