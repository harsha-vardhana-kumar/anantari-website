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
      {/* Decorative SVG - Events Motif (Orbiting connections) */}
      <div
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none z-0"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Main orbit path */}
          <ellipse cx="600" cy="400" rx="500" ry="250" stroke="#C9913A" strokeWidth="1" fill="none" strokeDasharray="8 12" />
          {/* Crossing orbit path */}
          <ellipse cx="600" cy="400" rx="300" ry="400" stroke="#ffffff" strokeWidth="0.5" fill="none" />
          {/* Trajectory path */}
          <path d="M-100 600 Q600 200 1300 700" stroke="#C9913A" strokeWidth="0.5" fill="none" />
          
          {/* Nodes / Event Points */}
          <circle cx="100" cy="400" r="4" fill="#C9913A" />
          <circle cx="1100" cy="400" r="4" fill="#ffffff" />
          <circle cx="600" cy="150" r="3" fill="#C9913A" />
          <circle cx="600" cy="650" r="3" fill="#C9913A" />
          <circle cx="350" cy="280" r="6" stroke="#C9913A" strokeWidth="1.5" fill="none" />
          <circle cx="850" cy="520" r="6" stroke="#ffffff" strokeWidth="1.5" fill="none" />
        </svg>
      </div>

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
