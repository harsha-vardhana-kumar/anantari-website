// filepath: src/app/about/page.tsx
import type { Metadata } from 'next'
import MissionHero from '@/components/sections/about/MissionHero'
import OurStory from '@/components/sections/about/OurStory'
import CoreValues from '@/components/sections/about/CoreValues'
import TeamGrid from '@/components/sections/about/TeamGrid'
import PartnersMarquee from '@/components/sections/about/PartnersMarquee'
import CTABanner from '@/components/sections/home/CTABanner'

export const metadata: Metadata = {
  title: 'About Anantari — Our Story, Mission & Team',
  description:
    "Learn about Anantari's mission to empower women entrepreneurs across India through certification, community, and opportunity."
}

export default function AboutPage() {
  return (
    <main>
      <MissionHero />
      <OurStory />
      <CoreValues />
      <TeamGrid />
      <PartnersMarquee />
      <CTABanner />
    </main>
  )
}
