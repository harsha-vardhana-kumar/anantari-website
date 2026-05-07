'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const FAQS = [
  {
    q: 'What happens after my free trial ends?',
    a: "After 7 days, you'll be automatically enrolled in your chosen plan. We'll send a reminder 2 days before. You can cancel anytime before day 8 without any charge."
  },
  {
    q: 'Can men join Anantari?',
    a: 'Anantari is exclusively for self-identifying women. However, male allies can support us through our Corporate Partnership program.'
  },
  {
    q: 'Is there a refund policy?',
    a: "Yes — if you're not satisfied within the first 30 days, we offer a full refund, no questions asked."
  },
  {
    q: 'Can I list my business on the directory with any plan?',
    a: 'Yes! All plans include a directory listing. Growth and Elite members get priority placement and enhanced profiles.'
  },
  {
    q: 'Do I need to be a business owner to join?',
    a: 'Not at all. Professionals, freelancers, students, and aspiring entrepreneurs are all welcome.'
  },
  {
    q: 'How is Anantari different from LinkedIn?',
    a: 'Anantari is curated, women-first, and built for depth over breadth. Every member is verified, every event is intentional, and every connection is meaningful.'
  }
]

export default function MembershipFAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section className="py-20 px-6 bg-navy-mid border-t border-white/10">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block border border-gold/30 bg-gold/10 text-gold text-xs font-medium px-4 py-1.5 rounded-full tracking-widest uppercase mb-4"
          >
            FAQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-cormorant text-4xl font-bold text-ivory"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-navy border border-white/10 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-cormorant font-semibold text-ivory text-base pr-4">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={cn(
                    'flex-shrink-0 text-ivory/40 transition-transform duration-300',
                    openIdx === idx ? 'rotate-180' : ''
                  )}
                />
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-ivory/60 text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
