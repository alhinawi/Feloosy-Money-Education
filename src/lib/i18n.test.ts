import { describe, expect, it } from 'vitest'
import { dirOf, fmtNum, t } from './i18n'

describe('i18n', () => {
  it('Arabic is RTL, English is LTR', () => {
    expect(dirOf('ar')).toBe('rtl')
    expect(dirOf('en')).toBe('ltr')
  })
  it('both languages translate the same keys', () => {
    expect(t('ar', 'heroTitle')).not.toBe(t('en', 'heroTitle'))
    expect(t('en', 'siteName')).toBe('Feloosy')
  })
  it('numbers always use English digits', () => {
    expect(fmtNum(1234567)).toBe('1,234,567')
    expect(fmtNum(NaN)).toBe('0')
  })
})
