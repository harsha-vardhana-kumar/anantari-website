'use client'

import { useState } from 'react'
import { CalendarDays } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import Link from 'next/link'

const TYPES = ["All Events", "Webinar", "Workshop", "Networking", "Summit", "Retreat"]

export default function EventsHeroSection() {
  const [activeType, setActiveType] = useState('All Events')

  return (
    <section className="min-h-[60vh] flex items-end pb-20 relative overflow-hidden bg-navy pt-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_30%_0%,rgba(238,103,13,0.25),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_80%,rgba(49,88,167,0.2),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col justify-end h-full">
        <div className="max-w-3xl">
          <div className="text-ivory/50 text-sm mb-6">
            <Link href="/" className="hover:text-ivory transition-colors">Home</Link> / <span>Events</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 border border-brand-blue bg-[#3158A7]/10 text-[#3158A7] rounded-full px-4 py-1.5 text-sm font-medium mb-6"
          >
            <CalendarDays size={16} />
            Upcoming & Past Events
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-6xl md:text-7xl font-bold text-ivory leading-[1.1]"
          >
            Where Women <br />
            <span className="italic text-brand block">Come Together</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-ivory/60 max-w-2xl mt-6"
          >
            From intimate masterclasses to global summits — every Anantari event is designed to spark connection, learning, and opportunity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {TYPES.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={cn(
                  "rounded-full px-5 py-2.5 text-sm font-medium cursor-pointer transition-all duration-200 border",
                  activeType === type
                    ? "bg-brand text-white border-brand"
                    : "border-white/20 text-ivory/60 hover:border-brand/40 hover:text-ivory"
                )}
              >
                {type}
              </button>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex gap-8 flex-wrap"
          >
            {["320+ Events Hosted", "15K+ Attendees", "48 Cities"].map((stat, i) => (
              <div key={i} className="flex items-center gap-2">
                <CalendarDays size={16} className="text-brand" />
                <span className="text-ivory/60 text-sm">{stat}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
