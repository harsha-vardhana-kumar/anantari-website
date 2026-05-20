'use client'

import { motion } from 'framer-motion'
import { BookOpen, Users, RefreshCw } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const CATEGORIES = [
  'All', 'Leadership', 'Finance', 'Legal', 'Technology',
  'Health & Wellness', 'Startup Stories', 'Mentorship'
]

interface StoriesHeroSectionProps {
  activeCategory: string
  setActiveCategory: (cat: string) => void
}

export default function StoriesHeroSection({
  activeCategory,
  setActiveCategory
}: StoriesHeroSectionProps) {
  return (
    <section className="min-h-[55vh] flex items-end pb-20 relative overflow-hidden bg-navy pt-32">
      {/* Background layers */}
      {/* Decorative SVG - Stories Motif (Narrative flow / Pages) */}
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
          {/* Cascading editorial curves (like turning pages or story arcs) */}
          <path d="M-100 800 Q300 400 1300 100" stroke="#C9913A" strokeWidth="0.5" fill="none" />
          <path d="M-100 850 Q400 450 1300 150" stroke="#ffffff" strokeWidth="1" fill="none" />
          <path d="M-100 900 Q500 500 1300 200" stroke="#C9913A" strokeWidth="0.5" fill="none" strokeDasharray="4 8" />
          <path d="M-100 950 Q600 550 1300 250" stroke="#ffffff" strokeWidth="0.5" fill="none" opacity="0.5" />
          
          {/* Subtle structure lines (like editorial grids) */}
          <line x1="300" y1="0" x2="300" y2="800" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="2 10" opacity="0.5" />
          <line x1="900" y1="0" x2="900" y2="800" stroke="#C9913A" strokeWidth="0.5" strokeDasharray="2 10" opacity="0.5" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-ivory/50 text-sm mb-6"
          >
            <Link href="/" className="hover:text-ivory transition-colors">Home</Link>
            {' '}/{' '}
            <span>Stories</span>
          </motion.div>

          {/* Eyebrow pill */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="inline-flex items-center gap-2 border border-gold/40 bg-yellow-900/20 text-yellow-400 rounded-full px-5 py-2 text-sm mb-6"
          >
            <BookOpen size={14} />
            Insights &amp; Inspiration
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-cormorant text-6xl md:text-7xl font-bold text-ivory leading-tight"
          >
            Stories That{' '}
            <span className="italic text-brand block md:inline">Move You Forward</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-xl text-ivory/60 max-w-2xl mt-6 leading-relaxed"
          >
            Real stories, expert insights, and actionable wisdom from women who&apos;ve
            built, broken barriers, and blazed trails.
          </motion.p>

          {/* Category filter pills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'rounded-full px-5 py-2.5 text-sm font-medium cursor-pointer transition-all duration-200 border',
                  activeCategory === cat
                    ? 'bg-brand text-white border-brand'
                    : 'border-white/20 text-ivory/60 hover:border-brand/40 hover:text-ivory'
                )}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-8 flex gap-8 flex-wrap"
          >
            {[
              { icon: BookOpen, label: '120+ Articles' },
              { icon: Users, label: '48 Contributors' },
              { icon: RefreshCw, label: 'Weekly New Stories' }
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon size={16} className="text-gold" />
                <span className="text-ivory/60 text-sm">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
