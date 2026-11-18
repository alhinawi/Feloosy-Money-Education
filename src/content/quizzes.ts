import type { LessonQuiz } from './types'
import { QUIZZES_A } from './quizzes-a'
import { QUIZZES_B } from './quizzes-b'
import { QUIZZES_BASICS2 } from './quizzes-basics2'
import { QUIZZES_SAVING2 } from './quizzes-saving2'

/** Every lesson's quiz, keyed "<track>/<lesson>". Coverage enforced by content.test.ts. */
export const QUIZZES: Record<string, LessonQuiz> = { ...QUIZZES_A, ...QUIZZES_B, ...QUIZZES_BASICS2, ...QUIZZES_SAVING2 }

export function getQuiz(trackSlug: string, lessonSlug: string): LessonQuiz | undefined {
  return QUIZZES[`${trackSlug}/${lessonSlug}`]
}
