// filepath: src/components/sections/services/CategoryTabs.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle, type LucideProps } from 'lucide-react'
import type { ComponentType } from 'react'
import {
  BadgeCheck,
  LayoutGrid,
  GraduationCap,
  Calendar
} from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Tabs from '@/components/ui/Tabs'
import Button from '@/components/ui/Button'
import { SERVICE_CATEGORIES } from '@/lib/constants'

// ── DynamicIcon ───────────────────────────────────────────────────────────────
const iconMap: Record<string, ComponentType<LucideProps>> = {
  BadgeCheck,
  LayoutGrid,
  GraduationCap,
  Calendar
}

function DynamicIcon({ name, ...props }: LucideProps & { name: string }) {
  const Icon = iconMap[name]
  if (!Icon) return null
  return <Icon {...props} />
}

export default function CategoryTabs() {
  const [activeTab, setActiveTab] = useState('certification')
  const activeCategory = SERVICE_CATEGORIES.find((c) => c.id === activeTab)!

  const tabItems = SERVICE_CATEGORIES.map((c) => ({
    id: c.id,
    label: c.label,
    icon: c.icon
  }))

  return (
    <section className="bg-ivory-dark py-24">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <SectionHeading
          title="What We Offer"
          subtitle="Choose an area to explore in depth."
          align="center"
        />
      </div>

      {/* Tab bar */}
      <div className="max-w-6xl mx-auto px-6">
        <Tabs tabs={tabItems} activeTab={activeTab} onChange={setActiveTab} />
      </div>

      {/* Animated content panel */}
      <div className="mt-12 max-w-6xl mx-auto px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* LEFT — text */}
              <div>
                {/* Category label */}
                <div className="flex items-center gap-2">
                  <DynamicIcon name={activeCategory.icon} size={16} className="text-gold" />
                  <span className="uppercase tracking-widest text-xs font-dm text-gold">
                    {activeCategory.label}
                  </span>
                </div>

                {/* Heading */}
                <h2 className="font-cormorant font-bold text-3xl md:text-4xl text-navy mt-3 leading-tight">
                  {activeCategory.heading}
                </h2>

                {/* Subheading */}
                <p className="font-dm text-navy/60 text-base mt-4 leading-relaxed">
                  {activeCategory.subheading}
                </p>

                {/* Feature points */}
                <ul className="space-y-3 mt-8">
                  {activeCategory.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-gold mt-0.5 flex-shrink-0" />
                      <span className="font-dm text-sm text-navy/70 leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button variant="primary" size="lg">
                    Get Started
                  </Button>
                </div>
              </div>

              {/* RIGHT — image card */}
              <div className="relative bg-navy rounded-3xl overflow-hidden h-80 md:h-96">
                <Image
                  src={activeCategory.image}
                  alt={activeCategory.heading}
                  fill
                  className="object-cover opacity-60"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
                {/* Bottom text overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-cormorant font-bold text-2xl text-ivory">
                    {activeCategory.heading}
                  </p>
                  <p className="font-dm text-xs text-muted mt-1 truncate">
                    {activeCategory.subheading}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
