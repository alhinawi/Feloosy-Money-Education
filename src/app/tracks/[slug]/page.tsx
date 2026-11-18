import TrackPage from '../../../screens/TrackPage'
import { TRACKS } from '../../../lib/content'

export function generateStaticParams() {
  return TRACKS.map((tr) => ({ slug: tr.slug }))
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <TrackPage slug={slug} />
}
