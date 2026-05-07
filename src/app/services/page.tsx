// filepath: src/app/services/page.tsx
import type { Metadata } from 'next'
import ServicesHero from '@/components/sections/services/ServicesHero'
import CategoryTabs from '@/components/sections/services/CategoryTabs'
import ProcessSteps from '@/components/sections/services/ProcessSteps'
import PricingCards from '@/components/sections/services/PricingCards'
import FAQSection from '@/components/sections/services/FAQSection'
import CTABanner from '@/components/sections/home/CTABanner'

export const metadata: Metadata = {
  title: 'Services — Anantari Women\'s Platform',
  description:
    "Explore Anantari's full suite — certification, directory, mentorship, and events built exclusively for women entrepreneurs."
}

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <CategoryTabs />
      <ProcessSteps />
      <PricingCards />
      <FAQSection />
      <CTABanner />
    </main>
  )
}
