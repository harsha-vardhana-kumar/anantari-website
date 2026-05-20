// filepath: src/components/sections/directory/SearchHero.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronDown, MapPin, Search } from 'lucide-react'
import { QUICK_FILTERS, DIRECTORY_STATS } from '@/lib/constants'
import { cn } from '@/lib/utils'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 }
}

export default function SearchHero() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  return (
    <section className="relative bg-navy min-h-[75vh] pt-36 pb-20 overflow-hidden flex items-center">
      {/* Background image */}

      {/* Decorative SVG */}
      <div
        className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none z-0"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 700 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Large dashed circle */}
          <circle
            cx="500"
            cy="200"
            r="300"
            stroke="#C9913A"
            strokeWidth="0.8"
            fill="none"
            strokeDasharray="6 10"
          />
          {/* Medium solid circle */}
          <circle cx="600" cy="450" r="180" stroke="white" strokeWidth="0.4" fill="none" />
          {/* Dot cluster */}
          <circle cx="420" cy="80" r="4" fill="#C9913A" fillOpacity="0.7" />
          <circle cx="520" cy="55" r="3" fill="#C9913A" fillOpacity="0.5" />
          <circle cx="600" cy="110" r="5" fill="#C9913A" fillOpacity="0.4" />
          <circle cx="480" cy="130" r="3" fill="#C9913A" fillOpacity="0.6" />
          <circle cx="560" cy="90" r="3" fill="#C9913A" fillOpacity="0.3" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        {/* Breadcrumb pill */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0 }}
        >
          <span className="inline-block rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-dm px-4 py-1.5 tracking-widest uppercase mb-8">
            Member Directory
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-cormorant font-bold text-5xl md:text-6xl lg:text-7xl text-ivory leading-[1.1] text-balance"
        >
          Find Verified Women-Owned
          <br />
          Businesses Across India
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-dm text-muted text-base md:text-lg mt-6 max-w-2xl leading-relaxed"
        >
          Search our curated directory of 12,000+ women entrepreneurs across 38 industries and
          480+ cities. Every profile is verified.
        </motion.p>

        {/* Search bar */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 max-w-3xl"
        >
          <div className="bg-white rounded-2xl shadow-2xl shadow-navy/50 overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Category select */}
              <div className="flex-1 border-b md:border-b-0 md:border-r border-navy/10">
                <div className="relative flex items-center px-5 py-4">
                  <select
                    aria-label="Filter by category"
                    className="w-full bg-transparent font-dm text-sm text-navy/80 outline-none appearance-none cursor-pointer pr-6"
                  >
                    <option value="">All Categories</option>
                    {QUICK_FILTERS.map((f) => (
                      <option key={f} value={f}>
                        {f}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={16}
                    className="absolute right-4 text-navy/30 pointer-events-none"
                  />
                </div>
              </div>

              {/* Location input */}
              <div className="flex-1 border-b md:border-b-0 md:border-r border-navy/10">
                <div className="flex items-center gap-3 px-5 py-4">
                  <MapPin size={16} className="text-navy/30 flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="City or state..."
                    aria-label="Filter by city or state"
                    className="w-full bg-transparent font-dm text-sm text-navy/80 outline-none placeholder:text-navy/30"
                  />
                </div>
              </div>

              {/* Search button */}
              <div className="flex-shrink-0 px-4 py-3 flex items-center">
                <button
                  aria-label="Search the directory"
                  className="bg-navy text-ivory rounded-xl px-6 py-3 font-dm text-sm font-medium flex items-center gap-2 hover:bg-navy-mid transition-colors duration-200 w-full md:w-auto justify-center"
                >
                  <Search size={16} />
                  Search
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick filters */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap gap-2 mt-6 items-center"
        >
          <span className="font-dm text-xs text-muted mr-1">Browse:</span>
          {QUICK_FILTERS.map((filter) => (
            <button
              key={filter}
              aria-label={`Filter by ${filter}`}
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(activeFilter === filter ? null : filter)}
              className={cn(
                'rounded-full border px-4 py-1.5 font-dm text-xs transition-all duration-200',
                activeFilter === filter
                  ? 'border-gold bg-gold/10 text-gold'
                  : 'border-white/15 text-ivory/60 hover:border-gold/50 hover:text-gold/80'
              )}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex flex-wrap gap-8 md:gap-12 mt-10 pt-8 border-t border-white/10"
        >
          {DIRECTORY_STATS.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="font-cormorant font-bold text-3xl text-gold">
                {stat.value.toLocaleString()}
                {stat.suffix}
              </div>
              <div className="font-dm text-xs text-muted mt-0.5 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
