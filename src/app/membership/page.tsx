import type { Metadata } from 'next'
import MembershipHeroSection from '@/components/sections/membership/MembershipHeroSection'
import MembershipBenefitsSection from '@/components/sections/membership/MembershipBenefitsSection'
import MembershipTiersFullSection from '@/components/sections/membership/MembershipTiersFullSection'
import MembershipTestimonialsSection from '@/components/sections/membership/MembershipTestimonialsSection'
import JoinFormSection from '@/components/sections/membership/JoinFormSection'
import MembershipFAQSection from '@/components/sections/membership/MembershipFAQSection'

export const metadata: Metadata = {
  title: 'Join Anantari — Membership Plans & Pricing',
  description:
    'Join 2,400+ women entrepreneurs on Anantari. Start with a 7-day free trial. No credit card required.'
}

export default function MembershipPage() {
  return (
    <>
      <MembershipHeroSection />
      <MembershipBenefitsSection />
      <MembershipTiersFullSection />
      <MembershipTestimonialsSection />
      <JoinFormSection />
      <MembershipFAQSection />
    </>
  )
}
