'use client'

import { motion } from 'framer-motion'
import { Sparkles, ChevronDown } from 'lucide-react'
import Button from '@/components/ui/Button'
import Link from 'next/link'

const AVATAR_COLORS = ['#3158A7', '#EE670D', '#C9A84C', '#3158A7', '#EE670D']
const AVATAR_INITIALS = ['PR', 'SK', 'AM', 'NR', 'DM']

export default function MembershipHeroSection() {
  return (
    <section className="min-h-[65vh] flex items-end pb-20 relative overflow-hidden bg-navy pt-32">
      {/* Background */}

      {/* Decorative SVG - Membership Motif (Network and Belonging) */}
      <div
        className="absolute inset-0 w-full h-full opacity-15 pointer-events-none z-0"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Network Nodes & Links */}
          <g stroke="#ffffff" strokeWidth="0.5" opacity="0.6">
            <line x1="200" y1="200" x2="350" y2="350" />
            <line x1="350" y1="350" x2="600" y2="300" />
            <line x1="600" y1="300" x2="850" y2="450" />
            <line x1="850" y1="450" x2="1000" y2="300" />
            <line x1="600" y1="300" x2="700" y2="150" />
            <line x1="350" y1="350" x2="400" y2="550" />
          </g>
          
          <circle cx="200" cy="200" r="15" stroke="#C9913A" strokeWidth="1" fill="none" />
          <circle cx="350" cy="350" r="8" fill="#C9913A" />
          <circle cx="600" cy="300" r="12" stroke="#ffffff" strokeWidth="1" fill="none" />
          <circle cx="850" cy="450" r="8" fill="#C9913A" />
          <circle cx="1000" cy="300" r="15" stroke="#C9913A" strokeWidth="1" fill="none" />
          <circle cx="700" cy="150" r="6" fill="#ffffff" />
          <circle cx="400" cy="550" r="6" fill="#ffffff" />
          
          {/* Large Concentric Belonging Ring */}
          <circle cx="600" cy="300" r="450" stroke="#C9913A" strokeWidth="0.5" fill="none" strokeDasharray="4 12" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mx-auto max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-brand bg-brand/10 text-brand rounded-full px-5 py-2 text-sm mb-6"
          >
            <Sparkles size={14} />
            Join Anantari
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-cormorant text-6xl md:text-7xl font-bold text-ivory leading-tight"
          >
            Your Seat at the Table{' '}
            <span className="italic text-brand block">Is Waiting.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-xl text-ivory/60 mt-6 leading-relaxed"
          >
            Join 2,400+ women who chose community over isolation, growth over
            stagnation, and connection over competition.
          </motion.p>

          {/* Member counter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex justify-center"
          >
            <div className="bg-navy-mid/60 backdrop-blur border border-white/10 rounded-2xl px-6 md:px-8 py-5 inline-flex items-center gap-4 md:gap-6 flex-wrap justify-center">
              {/* Overlapping avatars */}
              <div className="flex items-center">
                {AVATAR_INITIALS.map((initials, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-2 border-navy flex items-center justify-center text-xs font-bold font-cormorant -ml-2 first:ml-0 flex-shrink-0"
                    style={{ backgroundColor: `${AVATAR_COLORS[i]}30`, color: AVATAR_COLORS[i] }}
                  >
                    {initials}
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-2 border-navy bg-brand/20 text-brand flex items-center justify-center text-xs font-bold -ml-2">
                  +2.4K
                </div>
              </div>

              <div className="hidden md:block w-px h-8 bg-white/10" />

              <p className="text-ivory/60 text-sm">Women joined this year</p>

              <div className="hidden md:block w-px h-8 bg-white/10" />

              <div className="flex items-center gap-1">
                <span className="text-gold font-bold text-lg">4.9★</span>
                <span className="text-ivory/40 text-xs">avg rating</span>
              </div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-8 flex justify-center gap-4 flex-wrap"
          >
            <Button variant="primary" size="lg">
              Start Free Trial
            </Button>
            <Button variant="ghost" size="lg">
              See All Plans ↓
            </Button>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex justify-center"
          >
            <ChevronDown size={20} className="text-ivory/30 animate-bounce-slow" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
