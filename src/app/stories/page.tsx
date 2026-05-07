import type { Metadata } from 'next'
import StoriesPageClient from './StoriesPageClient'

export const metadata: Metadata = {
  title: 'Stories & Insights — Anantari',
  description:
    "Real stories, expert insights, and actionable wisdom from women who've built, broken barriers, and blazed trails."
}

export default function StoriesPage() {
  return <StoriesPageClient />
}
