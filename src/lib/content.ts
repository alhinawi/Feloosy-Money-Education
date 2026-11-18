import type { Track } from '../content/types'
import { basicsLessons } from '../content/basics'
import { basicsLessons2 } from '../content/basics2'
import { savingLessons } from '../content/saving'
import { investingLessons } from '../content/investing'
import { sideIncomeLessons } from '../content/sideincome'
import { businessLessons } from '../content/business'
import { mindsetLessons } from '../content/mindset'

// ==============================================================================
// Feloosy learning tracks. Every track has real lessons in both languages;
// the content tests (content.test.ts) keep counts and translations honest.
// ==============================================================================

export const TRACKS: Track[] = [
  {
    slug: 'money-basics',
    icon: 'wallet',
    image: '/images/track-basics.jpg',
    ar: { title: 'أساسيات الفلوس', tagline: 'ميزانية، طوارئ، وديون - الأساس اللي كل حاجة بتتبني عليه' },
    en: { title: 'Money Basics', tagline: 'Budgeting, emergencies and debt - the base everything builds on' },
    lessons: [...basicsLessons, ...basicsLessons2],
  },
  {
    slug: 'saving',
    icon: 'piggy',
    image: '/images/track-saving.jpg',
    ar: { title: 'الادخار', tagline: 'إزاي تحوّش صح: عادات، شهادات، دهب، وأهداف واضحة' },
    en: { title: 'Saving', tagline: 'How to save right: habits, certificates, gold, and clear goals' },
    lessons: savingLessons,
  },
  {
    slug: 'investing',
    icon: 'chart',
    image: '/images/track-investing.jpg',
    ar: { title: 'الاستثمار', tagline: 'افهم المخاطرة والعائد، الفايدة المركبة، البورصة والصناديق' },
    en: { title: 'Investing', tagline: 'Understand risk and return, compounding, stocks and funds' },
    lessons: investingLessons,
  },
  {
    slug: 'side-income',
    icon: 'laptop',
    image: '/images/track-sideincome.jpg',
    ar: { title: 'الدخل الجانبي', tagline: 'مهارة تتعلمها وتبيعها: فريلانس وبيع أونلاين' },
    en: { title: 'Side Income', tagline: 'A skill you learn and sell: freelancing and selling online' },
    lessons: sideIncomeLessons,
  },
  {
    slug: 'business',
    icon: 'store',
    image: '/images/track-business.jpg',
    ar: { title: 'مشروعك الخاص', tagline: 'من الفكرة للتسعير والتسويق - ابدأ صغير واكبر صح' },
    en: { title: 'Your Own Business', tagline: 'From idea to pricing and marketing - start small, grow right' },
    lessons: businessLessons,
  },
  {
    slug: 'mindset',
    icon: 'brain',
    image: '/images/track-mindset.jpg',
    ar: { title: 'عقلية الفلوس', tagline: 'العادات، الصبر، وكشف النصب - نص الغنى نفسية' },
    en: { title: 'Money Mindset', tagline: 'Habits, patience and scam-spotting - half of wealth is mental' },
    lessons: mindsetLessons,
  },
]

export const ALL_LESSONS = TRACKS.flatMap((tr) => tr.lessons.map((l) => ({ track: tr, lesson: l })))

export function getTrack(slug: string): Track | undefined {
  return TRACKS.find((tr) => tr.slug === slug)
}

export function getLesson(trackSlug: string, lessonSlug: string) {
  const track = getTrack(trackSlug)
  const idx = track?.lessons.findIndex((l) => l.slug === lessonSlug) ?? -1
  if (!track || idx < 0) return undefined
  return {
    track,
    lesson: track.lessons[idx],
    prev: track.lessons[idx - 1],
    next: track.lessons[idx + 1],
  }
}
