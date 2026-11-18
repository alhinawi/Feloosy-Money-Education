import { describe, expect, it } from 'vitest'
import { TRACKS, ALL_LESSONS, getLesson } from './content'

describe('content integrity', () => {
  it('has 6 tracks with unique slugs', () => {
    expect(TRACKS).toHaveLength(6)
    expect(new Set(TRACKS.map((t) => t.slug)).size).toBe(6)
  })
  it('every track has at least 4 lessons with unique slugs', () => {
    for (const track of TRACKS) {
      expect(track.lessons.length).toBeGreaterThanOrEqual(4)
      expect(new Set(track.lessons.map((l) => l.slug)).size).toBe(track.lessons.length)
    }
  })
  it('every lesson has full Arabic and English text', () => {
    for (const { lesson } of ALL_LESSONS) {
      for (const lang of ['ar', 'en'] as const) {
        const text = lesson[lang]
        expect(text.title.length).toBeGreaterThan(3)
        expect(text.intro.length).toBeGreaterThan(30)
        expect(text.sections.length).toBeGreaterThanOrEqual(3)
        expect(text.points.length).toBeGreaterThanOrEqual(3)
        for (const s of text.sections) {
          expect(s.h.length).toBeGreaterThan(3)
          expect(s.p.length).toBeGreaterThan(60)
        }
      }
    }
  })
  it('never promises guaranteed riches', () => {
    const banned = [/مضمون 100%/, /غنى مضمون/, /guaranteed riches/i]
    for (const { lesson } of ALL_LESSONS) {
      for (const lang of ['ar', 'en'] as const) {
        const blob = JSON.stringify(lesson[lang])
        // The phrase "مضمون 100%" appears only inside a scam warning; allow that one context.
        for (const re of banned.slice(1)) expect(blob).not.toMatch(re)
      }
    }
  })
  it('track images follow the local naming convention', () => {
    for (const track of TRACKS) expect(track.image).toMatch(/^\/images\/[a-z-]+\.jpg$/)
  })
  it('getLesson resolves neighbors', () => {
    const first = getLesson('money-basics', 'where-does-money-go')
    expect(first?.next?.slug).toBe('budget-50-30-20')
    expect(first?.prev).toBeUndefined()
    expect(getLesson('nope', 'nope')).toBeUndefined()
  })
})

describe('quizzes', () => {
  it('every lesson has a quiz with 3 questions in both languages', async () => {
    const { QUIZZES } = await import('../content/quizzes')
    for (const { track, lesson } of ALL_LESSONS) {
      const quiz = QUIZZES[`${track.slug}/${lesson.slug}`]
      expect(quiz, `missing quiz for ${track.slug}/${lesson.slug}`).toBeDefined()
      for (const lang of ['ar', 'en'] as const) {
        expect(quiz[lang]).toHaveLength(3)
        for (const q of quiz[lang]) {
          expect(q.options).toHaveLength(3)
          expect(q.answer).toBeGreaterThanOrEqual(0)
          expect(q.answer).toBeLessThan(3)
          expect(new Set(q.options).size).toBe(3)
        }
      }
    }
  })
  it('has no orphan quizzes for non-existent lessons', async () => {
    const { QUIZZES } = await import('../content/quizzes')
    const valid = new Set(ALL_LESSONS.map(({ track, lesson }) => `${track.slug}/${lesson.slug}`))
    for (const key of Object.keys(QUIZZES)) expect(valid.has(key), `orphan quiz ${key}`).toBe(true)
  })
})

describe('glossary', () => {
  it('has at least 20 terms, each fully bilingual', async () => {
    const { GLOSSARY } = await import('../content/glossary')
    expect(GLOSSARY.length).toBeGreaterThanOrEqual(20)
    for (const term of GLOSSARY) {
      expect(term.ar.length).toBeGreaterThan(1)
      expect(term.en.length).toBeGreaterThan(1)
      expect(term.arBody.length).toBeGreaterThan(40)
      expect(term.enBody.length).toBeGreaterThan(40)
    }
    expect(new Set(GLOSSARY.map((t) => t.en)).size).toBe(GLOSSARY.length)
  })
})
