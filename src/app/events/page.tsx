import type { Metadata } from 'next'
import EventsHeroSection from '@/components/sections/events/EventsHeroSection'
import EventsFilterSection from '@/components/sections/events/EventsFilterSection'
import UpcomingEventsSection from '@/components/sections/events/UpcomingEventsSection'
import PastEventsSection from '@/components/sections/events/PastEventsSection'
import EventsCTASection from '@/components/sections/events/EventsCTASection'

export const metadata: Metadata = {
  title: 'Events — Anantari Women\'s Network',
  description:
    "Attend curated events and connect with thousands of women leaders in India."
}

export default function EventsPage() {
  return (
    <main>
      <EventsHeroSection />
      <EventsFilterSection />
      <UpcomingEventsSection />
      <PastEventsSection />
      <EventsCTASection />
    </main>
  )
}
