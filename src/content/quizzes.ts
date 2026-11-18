import type { LessonQuiz } from './types'
import { QUIZZES_A } from './quizzes-a'
import { QUIZZES_B } from './quizzes-b'

/** Every lesson's quiz, keyed "<track>/<lesson>". Coverage enforced by content.test.ts. */
export const QUIZZES: Record<string, LessonQuiz> = { ...QUIZZES_A, ...QUIZZES_B }

export function getQuiz(trackSlug: string, lessonSlug: string): LessonQuiz | undefined {
  return QUIZZES[`${trackSlug}/${lessonSlug}`]
}
