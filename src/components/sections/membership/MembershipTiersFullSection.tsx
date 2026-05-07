'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const TIERS = [
  {
    name: 'Community',
    price: { monthly: '₹499', annual: '₹399' },
    monthlyNum: 499,
    description: 'Perfect for women starting their journey.',
    features: [
      'Member directory listing',
      'Access to community forums',
      'Monthly newsletter',
      'Attend 2 free events/year',
      'Basic business profile',
      'Peer learning circles'
    ],
    notIncluded: [
      'Mentorship matching',
      'Funding introductions',
      'Priority event access'
    ],
    highlighted: false,
    color: '#3158A7',
    cta: 'Join Community',
    socialProof: 'Join 1,200+ community members'
  },
  {
    name: 'Growth',
    price: { monthly: '₹1,499', annual: '₹1,199' },
    monthlyNum: 1499,
    description: 'For women ready to accelerate their growth.',
    features: [
      'Everything in Community',
      'Mentorship programme matching',
      'Unlimited event access',
      'Priority directory placement',
      'Funding partner introductions',
      'Verified profile badge',
      'Quarterly 1:1 advisory call'
    ],
    notIncluded: ['Dedicated account manager'],
    highlighted: true,
    color: '#EE670D',
    cta: 'Join Growth',
    socialProof: 'Join 800+ growth members · Most chosen'
  },
  {
    name: 'Elite',
    price: { monthly: '₹3,499', annual: '₹2,799' },
    monthlyNum: 3499,
    description: 'For leaders seeking premium access and support.',
    features: [
      'Everything in Growth',
      'Dedicated account manager',
      'Speaking opportunities at events',
      'Featured directory placement',
      'Policy working group access',
      'Co-branding opportunities',
      'Leadership retreat access',
      'Priority certification fast-track'
    ],
    notIncluded: [],
    highlighted: false,
    color: '#C9A84C',
    cta: 'Join Elite',
    socialProof: 'Join 400+ elite leaders'
  }
]

export default function MembershipTiersFullSection() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('annual')

  return (
    <section className="py-24 px-6 bg-navy" id="pricing">
      {/* Header */}
      <div className="text-center mb-4">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block border border-gold/30 bg-gold/10 text-gold text-xs font-medium px-4 py-1.5 rounded-full tracking-widest uppercase mb-4"
        >
          Pricing
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-cormorant text-4xl md:text-5xl font-bold text-ivory"
        >
          Simple, Transparent Pricing
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-ivory/50 mt-3 text-base"
        >
          No hidden fees. Cancel anytime. Start free.
        </motion.p>
      </div>

      {/* Toggle */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <span className={cn('text-sm transition-colors', billing === 'monthly' ? 'text-ivory' : 'text-ivory/40')}>
          Monthly
        </span>
        <button
          onClick={() => setBilling((b) => b === 'monthly' ? 'annual' : 'monthly')}
          aria-label="Toggle billing"
          className="relative w-12 h-6 rounded-full bg-navy-mid transition-colors duration-300"
        >
          <span
            className={cn(
              'absolute top-0.5 w-5 h-5 bg-brand rounded-full transition-all duration-300',
              billing === 'annual' ? 'left-6' : 'left-0.5'
            )}
          />
        </button>
        <span className={cn('flex items-center gap-2 text-sm transition-colors', billing === 'annual' ? 'text-ivory' : 'text-ivory/40')}>
          Yearly
          <span className="bg-gold/10 text-gold text-xs rounded-full px-2 py-0.5">Save 20%</span>
        </span>
      </div>

      {/* Annual savings banner */}
      {billing === 'annual' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-5 max-w-sm mx-auto text-center bg-green-900/30 border border-green-700/30 rounded-xl px-6 py-3 text-green-400 text-sm"
        >
          🎉 Annual members save up to ₹2,400/year
        </motion.div>
      )}

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto items-start">
        {TIERS.map((tier, idx) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={cn(
              'relative rounded-3xl',
              tier.highlighted ? 'md:scale-[1.03]' : ''
            )}
          >
            {/* Animated ring for Growth card */}
            {tier.highlighted && (
              <div className="absolute inset-[-1px] rounded-[25px] bg-gradient-to-r from-brand via-gold to-brand opacity-60 -z-10 animate-spin-slow" />
            )}

            <div
              className={cn(
                'relative rounded-3xl p-8 border transition-all duration-300',
                tier.highlighted
                  ? 'bg-navy-mid border-brand/40 shadow-[0_0_60px_rgba(238,103,13,0.15)]'
                  : 'bg-navy-mid border-white/10 hover:border-white/20'
              )}
            >
              {/* Popular badge */}
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand text-white text-xs rounded-full px-5 py-1.5 whitespace-nowrap">
                  Most Popular
                </div>
              )}

              {/* Plan name */}
              <p className="font-cormorant font-bold text-2xl" style={{ color: tier.color }}>
                {tier.name}
              </p>
              <p className="text-xs text-ivory/40 mt-1">{tier.description}</p>

              {/* Price */}
              <div className="mt-6">
                <span className="font-cormorant font-bold text-5xl text-ivory">
                  {billing === 'annual' ? tier.price.annual : tier.price.monthly}
                </span>
                <span className="text-ivory/40 text-sm ml-1">/month</span>
              </div>

              {/* Divider */}
              <div className="border-t border-white/10 my-6" />

              {/* What's included label */}
              <p className="text-ivory/30 text-xs uppercase tracking-widest mb-3">What&apos;s included</p>

              {/* Features */}
              <ul className="space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check size={14} className="flex-shrink-0 mt-0.5" style={{ color: tier.color }} />
                    <span className="text-sm text-ivory/80">{f}</span>
                  </li>
                ))}
              </ul>

              {/* Not included */}
              {tier.notIncluded.length > 0 && (
                <ul className="space-y-3 mt-3">
                  {tier.notIncluded.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="text-white/20 flex-shrink-0 mt-0.5 text-sm">✕</span>
                      <span className="text-sm text-ivory/30">{f}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* CTA */}
              <div className="mt-8">
                <Button
                  variant={tier.highlighted ? 'primary' : 'secondary'}
                  className="w-full justify-center"
                >
                  {tier.cta}
                </Button>
              </div>

              {/* Social proof */}
              <p className="text-ivory/30 text-xs text-center mt-3">{tier.socialProof}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Compare link */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-8 text-center"
      >
        <span className="text-ivory/40 text-sm">Need help choosing?</span>
        <button className="text-brand text-sm font-medium ml-1 hover:underline inline-flex items-center gap-1">
          Schedule a free 15-min call →
        </button>
      </motion.div>
    </section>
  )
}
