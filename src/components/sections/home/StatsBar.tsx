import { STATS } from '@/lib/constants'
import Counter from '@/components/ui/Counter'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export default function StatsBar() {
  return (
    <section className="bg-navy-mid py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 max-w-5xl mx-auto px-6">
        {STATS.map((stat, index) => (
          <RevealOnScroll key={stat.label} delay={index * 100}>
            <div className="relative text-center px-4 py-6">
              <Counter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
              />
              <p className="font-dm text-sm text-muted mt-2 tracking-wide">
                {stat.label}
              </p>

              {/* Vertical divider (not on last item) */}
              {index < STATS.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-white/10" />
              )}
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  )
}
