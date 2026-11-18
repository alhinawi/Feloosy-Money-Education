import LessonPage from '../../../../screens/LessonPage'
import { ALL_LESSONS } from '../../../../lib/content'

export function generateStaticParams() {
  return ALL_LESSONS.map(({ track, lesson }) => ({ slug: track.slug, lesson: lesson.slug }))
}

export default async function Page({ params }: { params: Promise<{ slug: string; lesson: string }> }) {
  const { slug, lesson } = await params
  return <LessonPage trackSlug={slug} lessonSlug={lesson} />
}
