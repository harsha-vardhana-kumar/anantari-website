'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, ArrowRight, Users } from 'lucide-react'
import Button from '@/components/ui/Button'

const VALUE_PILLS = ['✓ 1 Featured Story', '✓ 3 Opportunities', '✓ 1 Event Pick']

export default function NewsletterInlineSection() {
  const [email, setEmail] = useState('')

  return (
    <section className="py-20 px-6 bg-navy-deep border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="bg-navy-mid border border-white/10 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">

          {/* Content */}
          <div className="relative z-10">
            {/* Eyebrow pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 border border-gold/40 bg-yellow-900/20 text-yellow-400 rounded-full px-5 py-2 text-sm mb-4"
            >
              <Mail size={14} />
              Weekly Newsletter
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-cormorant text-4xl font-bold text-ivory mt-4"
            >
              The Anantari Brief
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-ivory/60 mt-4 text-lg max-w-lg mx-auto"
            >
              Every Sunday. 5 minutes. Stories, opportunities, and insights curated for ambitious women.
            </motion.p>

            {/* Value pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 flex justify-center gap-4 flex-wrap"
            >
              {VALUE_PILLS.map((pill) => (
                <span
                  key={pill}
                  className="bg-white/5 border border-white/10 rounded-full px-4 py-2 text-ivory/60 text-xs flex items-center gap-2"
                >
                  {pill}
                </span>
              ))}
            </motion.div>

            {/* Email form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="mt-8 flex gap-3 justify-center flex-wrap"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="bg-navy border border-white/15 rounded-xl px-4 py-3.5 text-ivory text-sm placeholder:text-ivory/25 focus:outline-none focus:border-brand/60 focus:ring-1 focus:ring-brand/20 transition w-72 max-w-full"
              />
              <Button variant="primary" className="gap-2">
                Get The Brief
                <ArrowRight size={16} />
              </Button>
            </motion.div>

            {/* Social proof */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-ivory/30 text-xs mt-4 flex items-center justify-center gap-1"
            >
              <Users size={12} />
              12,000 women already subscribed
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
