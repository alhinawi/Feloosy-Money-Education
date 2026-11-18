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
