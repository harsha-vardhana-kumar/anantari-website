'use client'

import { motion } from 'framer-motion'
import { Users, BookOpen, CalendarDays, Briefcase, TrendingUp, Award } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Benefit {
  icon: LucideIcon
  title: string
  description: string
  color: 'orange' | 'blue' | 'gold'
}

const BENEFITS: Benefit[] = [
  {
    icon: Users,
    title: '2,400+ Member Network',
    description: "Instant access to India's most curated network of women entrepreneurs and leaders.",
    color: 'orange'
  },
  {
    icon: BookOpen,
    title: 'Mentorship Matching',
    description: 'Get paired with a mentor who has been where you want to go.',
    color: 'blue'
  },
  {
    icon: CalendarDays,
    title: 'Exclusive Events',
    description: '20+ events monthly — webinars, in-person meetups, workshops, and retreats.',
    color: 'gold'
  },
  {
    icon: Briefcase,
    title: 'Verified Consultant Directory',
    description: 'Book sessions with 50+ vetted experts across law, finance, and business strategy.',
    color: 'orange'
  },
  {
    icon: TrendingUp,
    title: 'Funding & Growth Access',
    description: 'Warm introductions to angels, VCs, and grant programs that fund women-led ventures.',
    color: 'blue'
  },
  {
    icon: Award,
    title: 'Recognition & Visibility',
    description: 'Get featured, speak at events, and build the reputation your work deserves.',
    color: 'gold'
  }
]

const colorMap = {
  orange: { bg: 'bg-brand/15', text: 'text-brand', border: 'border-brand/30' },
  blue: { bg: 'bg-[#3158A7]/15', text: 'text-[#3158A7]', border: 'border-[#3158A7]/30' },
  gold: { bg: 'bg-gold/15', text: 'text-gold', border: 'border-gold/30' }
}

export default function MembershipBenefitsSection() {
  return (
    <section className="py-24 px-6 bg-navy-mid border-y border-white/10">
      {/* Section header */}
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block border border-gold/30 bg-gold/10 text-gold text-xs font-medium px-4 py-1.5 rounded-full tracking-widest uppercase mb-4"
        >
          Why Anantari?
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-cormorant text-4xl md:text-5xl font-bold text-ivory"
        >
          Benefits That Actually{' '}
          <span className="italic text-brand block">Move the Needle</span>
        </motion.h2>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-start">
        {/* LEFT — stat card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-navy border border-white/10 rounded-3xl p-10 relative overflow-hidden"
        >
          {/* Background accent */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-brand/5 to-transparent pointer-events-none" />

          {/* Big stat */}
          <p className="font-cormorant text-7xl font-bold text-brand mb-2 relative z-10">83%</p>
          <p className="text-ivory font-semibold text-xl relative z-10">report new business opportunities</p>
          <p className="text-ivory/55 text-sm mt-2 leading-relaxed relative z-10">
            within the first 6 months of joining Anantari — through mentorship connections,
            directory visibility, and events.
          </p>

          {/* Divider */}
          <div className="border-t border-white/10 my-8" />

          {/* Two mini stats */}
          <div className="flex gap-8 relative z-10">
            <div>
              <p className="font-cormorant text-4xl font-bold text-[#3158A7]">91%</p>
              <p className="text-ivory/60 text-sm mt-1">improved confidence</p>
            </div>
            <div>
              <p className="font-cormorant text-4xl font-bold text-gold">₹50Cr+</p>
              <p className="text-ivory/60 text-sm mt-1">business facilitated</p>
            </div>
          </div>

          {/* Member quote */}
          <div className="bg-navy-mid/50 rounded-2xl p-5 mt-8 relative z-10">
            <p className="text-brand font-cormorant text-4xl leading-none mb-1">&ldquo;</p>
            <p className="text-ivory/80 text-sm italic leading-relaxed -mt-2">
              The ROI on my Anantari membership was 10x in year one.
            </p>
            <p className="text-ivory/50 text-xs mt-2">— Rekha Menon, Founder</p>
          </div>
        </motion.div>

        {/* RIGHT — benefit list */}
        <div className="space-y-5">
          {BENEFITS.map((benefit, idx) => {
            const colors = colorMap[benefit.color]
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex gap-4 items-start"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 border ${colors.bg} ${colors.border}`}>
                  <Icon size={20} className={colors.text} />
                </div>
                <div>
                  <p className="text-base font-semibold text-ivory">{benefit.title}</p>
                  <p className="text-ivory/55 text-sm leading-relaxed mt-1">{benefit.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
