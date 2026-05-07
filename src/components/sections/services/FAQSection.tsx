// filepath: src/components/sections/services/FAQSection.tsx
import SectionHeading from '@/components/ui/SectionHeading'
import Accordion from '@/components/ui/Accordion'
import Button from '@/components/ui/Button'
import { FAQS } from '@/lib/constants'

export default function FAQSection() {
  return (
    <section className="bg-ivory-dark py-24">
      {/* Header */}
      <div className="max-w-3xl mx-auto px-6 text-center">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Everything you need to know before joining."
          align="center"
        />
      </div>

      {/* Accordion */}
      <div className="mt-14 max-w-3xl mx-auto px-6">
        <div className="bg-white rounded-2xl px-8 py-2 shadow-sm border border-navy/5">
          <Accordion items={FAQS} />
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-14">
        <p className="font-dm text-sm text-navy/60">Still have questions?</p>
        <div className="mt-4">
          <Button variant="secondary">Talk to our team</Button>
        </div>
        <p className="font-dm text-xs text-muted mt-3">
          We typically respond within 2 business hours
        </p>
      </div>
    </section>
  )
}
