// filepath: src/components/sections/directory/BrowseByIndustry.tsx
import React from 'react'
import Image from 'next/image'
import * as LucideIcons from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import { INDUSTRIES } from '@/lib/constants'

// ── DynamicIcon helper ────────────────────────────────────────────────────────
type LucideComponent = React.ComponentType<React.SVGProps<SVGSVGElement> & { size?: number; className?: string }>

function DynamicIcon({ name, size, className }: { name: string; size?: number; className?: string }) {
  const iconSet = LucideIcons as unknown as Record<string, LucideComponent>
  const Icon = iconSet[name]
  if (!Icon) return null
  return <Icon width={size} height={size} className={className} />
}

export default function BrowseByIndustry() {
  return (
    <section className="relative bg-ivory-dark py-24 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1400&q=80"
          alt=""
          fill
          className="object-cover opacity-[0.03]"
        />
      </div>

      {/* Header */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <SectionHeading
          title="Browse by Industry"
          subtitle="Discover women entrepreneurs across every sector of the Indian economy."
          align="center"
        />
      </div>

      {/* Industry grid */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-16 max-w-6xl mx-auto px-6">
        {INDUSTRIES.map((industry, index) => (
          <RevealOnScroll key={industry.name} delay={index * 60}>
            <div className="group cursor-pointer bg-white rounded-2xl p-5 text-center border border-transparent transition-all duration-300 hover:border-gold/30 hover:shadow-xl hover:-translate-y-1 hover:bg-navy">
              {/* Icon wrapper */}
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mx-auto transition-all duration-300 group-hover:bg-gold/20">
                <DynamicIcon name={industry.iconName} size={22} className="text-gold" />
              </div>

              {/* Industry name */}
              <p className="font-cormorant font-semibold text-sm md:text-base text-navy mt-3 transition-colors duration-300 group-hover:text-ivory leading-tight">
                {industry.name}
              </p>

              {/* Count badge */}
              <span className="mt-2 inline-block rounded-full bg-ivory-dark px-3 py-1 font-dm text-[10px] text-navy/50 transition-colors duration-300 group-hover:bg-white/10 group-hover:text-ivory/60">
                {industry.count.toLocaleString()}+ businesses
              </span>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  )
}
