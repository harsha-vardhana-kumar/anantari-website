// filepath: src/components/sections/about/CoreValues.tsx
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import SectionHeading from '@/components/ui/SectionHeading'
import { CORE_VALUES } from '@/lib/constants'

export default function CoreValues() {
  return (
    <section className="bg-ivory-dark py-24">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="What We Stand For"
          subtitle="Four principles that guide every decision we make."
          align="center"
        />
      </div>

      {/* Values grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-6xl mx-auto px-6">
        {CORE_VALUES.map((item, index) => (
          <RevealOnScroll key={item.number} delay={index * 100}>
            <div className="relative bg-white rounded-2xl p-8 overflow-hidden border border-transparent transition-all duration-300 hover:border-gold/30 hover:shadow-xl hover:-translate-y-1 group h-full">
              {/* Decorative large background number */}
              <span
                className="absolute top-4 right-4 font-cormorant font-bold text-7xl text-gold/10 leading-none select-none transition-colors duration-300 group-hover:text-gold/15"
                aria-hidden="true"
              >
                {item.number}
              </span>

              {/* Gold dot */}
              <div className="w-2 h-2 rounded-full bg-gold mb-6" />

              {/* Value name */}
              <h3 className="font-cormorant font-semibold text-2xl text-navy">{item.value}</h3>

              {/* Thin gold divider — expands on hover */}
              <div className="w-10 h-0.5 bg-gold mt-4 mb-4 transition-all duration-300 group-hover:w-16" />

              {/* Description */}
              <p className="font-dm text-sm text-navy/60 leading-relaxed">{item.description}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  )
}
