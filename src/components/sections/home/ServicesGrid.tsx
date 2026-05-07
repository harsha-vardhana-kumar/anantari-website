import * as LucideIcons from 'lucide-react'
import type { LucideProps } from 'lucide-react'
import { SERVICES } from '@/lib/constants'
import SectionHeading from '@/components/ui/SectionHeading'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

function DynamicIcon({ name, ...props }: { name: string } & LucideProps) {
  const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<LucideProps>>)[name]
  if (!Icon) return null
  return <Icon {...props} />
}

import type React from 'react'

export default function ServicesGrid() {
  return (
    <section className="bg-ivory-dark py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center">
          <SectionHeading
            title="What We Offer"
            subtitle="Comprehensive support designed to help your business grow at every stage."
            align="center"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {SERVICES.map((service, index) => (
            <RevealOnScroll key={service.title} delay={index * 100}>
              <div className="group bg-white rounded-2xl p-8 border border-transparent transition-all duration-300 hover:border-gold hover:shadow-xl hover:-translate-y-1 cursor-pointer h-full flex flex-col">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6 flex-shrink-0">
                  <DynamicIcon
                    name={service.iconName}
                    className="text-gold"
                    size={24}
                  />
                </div>

                {/* Title */}
                <h3 className="font-cormorant font-semibold text-xl text-navy">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-dm text-sm text-navy/60 mt-3 leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* Learn more link */}
                <p className="text-gold text-sm font-dm mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Learn more →
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
