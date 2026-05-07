// filepath: src/components/sections/services/PricingCards.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Check, X } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import Button from '@/components/ui/Button'
import { PRICING_TIERS } from '@/lib/constants'
import { cn } from '@/lib/utils'

export default function PricingCards() {
  const [isYearly, setIsYearly] = useState(true)

  function getPrice(tier: (typeof PRICING_TIERS)[number]) {
    if (tier.name === 'Professional') {
      return isYearly ? '₹2,999/yr' : '₹299/mo'
    }
    return tier.price
  }

  return (
    <section className="bg-ivory py-24 relative overflow-hidden">
      {/* Ghost background image */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=1400&q=80"
          alt=""
          fill
          className="object-cover opacity-[0.03]"
        />
      </div>

      {/* Header */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <SectionHeading
          title="Simple, Transparent Pricing"
          subtitle="Choose the plan that fits where you are in your journey."
          align="center"
        />

        {/* Billing toggle */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <span className="font-dm text-sm text-navy/60">Monthly</span>

          <button
            onClick={() => setIsYearly((v) => !v)}
            aria-label="Toggle billing period"
            className="relative w-12 h-6 rounded-full bg-navy-mid transition-colors duration-300"
          >
            <span
              className={cn(
                'absolute top-0.5 w-5 h-5 bg-white rounded-full transition-all duration-300',
                isYearly ? 'left-6' : 'left-0.5'
              )}
            />
          </button>

          <span className="flex items-center gap-2 font-dm text-sm text-navy/60">
            Yearly
            <span className="bg-gold/10 text-gold text-xs rounded-full px-2 py-0.5 font-dm">
              Save 20%
            </span>
          </span>
        </div>
      </div>

      {/* Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 max-w-5xl mx-auto px-6 items-start">
        {PRICING_TIERS.map((tier, index) => (
          <RevealOnScroll key={tier.name} delay={index * 100}>
            {tier.highlighted ? (
              // ── Highlighted card ──────────────────────────────────────────
              <div className="relative bg-navy rounded-2xl p-8 scale-[1.03] shadow-2xl ring-2 ring-gold/30">
                {/* "Most Popular" badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gold px-5 py-1.5">
                  <span className="font-dm text-xs text-white whitespace-nowrap">
                    Most Popular
                  </span>
                </div>

                {/* Plan name */}
                <p className="font-cormorant font-semibold text-xl text-ivory">{tier.name}</p>
                <p className="font-dm text-xs text-muted mt-1">{tier.description}</p>

                {/* Price */}
                <div className="mt-6">
                  <span className="font-cormorant font-bold text-5xl text-ivory">
                    {getPrice(tier)}
                  </span>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/10 mt-6 mb-6" />

                {/* Included */}
                <ul className="space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check size={16} className="text-gold flex-shrink-0 mt-0.5" />
                      <span className="font-dm text-sm text-ivory/80">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Excluded */}
                {tier.notIncluded.length > 0 && (
                  <ul className="space-y-3 mt-3">
                    {tier.notIncluded.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <X size={16} className="text-white/20 flex-shrink-0 mt-0.5" />
                        <span className="font-dm text-sm text-ivory/30">{f}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* CTA */}
                <div className="mt-8">
                  <Button variant="secondary" size="default" className="w-full justify-center">
                    {tier.cta}
                  </Button>
                </div>
              </div>
            ) : (
              // ── Standard card ─────────────────────────────────────────────
              <div className="bg-white rounded-2xl p-8 border border-navy/[0.08] hover:shadow-xl hover:border-gold/20 transition-all duration-300">
                {/* Plan name */}
                <p className="font-cormorant font-semibold text-xl text-navy">{tier.name}</p>
                <p className="font-dm text-xs text-navy/50 mt-1">{tier.description}</p>

                {/* Price */}
                <div className="mt-6">
                  <span className="font-cormorant font-bold text-5xl text-navy">
                    {getPrice(tier)}
                  </span>
                </div>

                {/* Divider */}
                <div className="h-px bg-navy/[0.08] mt-6 mb-6" />

                {/* Included */}
                <ul className="space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check size={16} className="text-gold flex-shrink-0 mt-0.5" />
                      <span className="font-dm text-sm text-navy/70">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Excluded */}
                {tier.notIncluded.length > 0 && (
                  <ul className="space-y-3 mt-3">
                    {tier.notIncluded.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <X size={16} className="text-navy/20 flex-shrink-0 mt-0.5" />
                        <span className="font-dm text-sm text-navy/30">{f}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* CTA */}
                <div className="mt-8">
                  <Button variant="primary" size="default" className="w-full justify-center">
                    {tier.cta}
                  </Button>
                </div>
              </div>
            )}
          </RevealOnScroll>
        ))}
      </div>
    </section>
  )
}
