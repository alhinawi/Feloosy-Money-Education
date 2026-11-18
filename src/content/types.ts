export interface LessonSection {
  h: string
  p: string
}

export interface LessonText {
  title: string
  intro: string
  sections: LessonSection[]
  points: string[]
}

export interface Lesson {
  slug: string
  ar: LessonText
  en: LessonText
}

export interface TrackText {
  title: string
  tagline: string
}

export interface Track {
  slug: string
  icon: 'wallet' | 'piggy' | 'chart' | 'laptop' | 'store' | 'brain'
  image: string
  ar: TrackText
  en: TrackText
  lessons: Lesson[]
}

export interface QuizQuestion {
  q: string
  /** 3 options; `answer` is the index of the correct one. */
  options: [string, string, string]
  answer: 0 | 1 | 2
}

export interface LessonQuiz {
  ar: QuizQuestion[]
  en: QuizQuestion[]
}
