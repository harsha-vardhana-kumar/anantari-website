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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(201,168,76,0.25),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_90%_90%,rgba(49,88,167,0.2),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none" />

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
