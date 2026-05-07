// filepath: src/components/sections/services/ProcessSteps.tsx
import Image from 'next/image'
import {
  ClipboardList,
  Search,
  PhoneCall,
  BadgeCheck,
  type LucideProps
} from 'lucide-react'
import type { ComponentType } from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import { PROCESS_STEPS } from '@/lib/constants'

// ── DynamicIcon ───────────────────────────────────────────────────────────────
const iconMap: Record<string, ComponentType<LucideProps>> = {
  ClipboardList,
  Search,
  PhoneCall,
  BadgeCheck
}

function DynamicIcon({ name, ...props }: LucideProps & { name: string }) {
  const Icon = iconMap[name]
  if (!Icon) return null
  return <Icon {...props} />
}

export default function ProcessSteps() {
  return (
    <section className="bg-navy py-24 relative overflow-hidden">
      {/* Background texture — horizontal lines SVG */}
      <div className="absolute inset-0 pointer-events-none opacity-5" aria-hidden="true">
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          {Array.from({ length: 40 }).map((_, i) => (
            <line
              key={i}
              x1="0"
              y1={i * 30}
              x2="100%"
              y2={i * 30}
              stroke="white"
              strokeWidth="0.5"
            />
          ))}
        </svg>
      </div>

      {/* Background image strip */}
      <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1400&q=80"
          alt=""
          fill
          className="object-cover opacity-[0.03]"
        />
      </div>

      {/* Header */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <SectionHeading
          title="How Certification Works"
          subtitle="Four simple steps to becoming an officially certified women-owned business."
          align="center"
          light
        />
      </div>

      {/* Steps */}
      <div className="relative z-10 mt-20 max-w-5xl mx-auto px-6">
        {/* ── Desktop layout ── */}
        <div className="hidden md:block relative">
          {/* Dashed connecting line */}
          <div
            className="absolute top-7 left-[12.5%] right-[12.5%] h-px border-t border-dashed border-gold/25"
            aria-hidden="true"
          />
          <div className="grid grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <RevealOnScroll key={step.step} delay={index * 150}>
                <div className="text-center">
                  {/* Icon circle */}
                  <div className="w-14 h-14 rounded-full border-2 border-gold/40 bg-navy-mid flex items-center justify-center mx-auto relative z-10">
                    <DynamicIcon name={step.icon} size={22} className="text-gold" />
                  </div>

                  {/* Step number */}
                  <p className="font-dm text-[10px] text-gold/50 tracking-[0.2em] uppercase mt-4">
                    Step {step.step}
                  </p>

                  {/* Title */}
                  <h3 className="font-cormorant font-semibold text-xl text-ivory mt-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="font-dm text-sm text-muted mt-3 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* ── Mobile vertical timeline ── */}
        <div className="md:hidden space-y-0">
          {PROCESS_STEPS.map((step, index) => (
            <RevealOnScroll key={step.step} delay={index * 100}>
              <div className="flex gap-5 items-start">
                {/* Left: icon + connecting line */}
                <div className="flex flex-col items-center">
                  <div className="w-11 h-11 rounded-full border-2 border-gold/40 bg-navy-mid flex items-center justify-center flex-shrink-0">
                    <DynamicIcon name={step.icon} size={18} className="text-gold" />
                  </div>
                  {index < PROCESS_STEPS.length - 1 && (
                    <div className="w-px bg-gold/20 flex-1 mt-2 min-h-[3rem]" />
                  )}
                </div>

                {/* Right: content */}
                <div className="pb-10">
                  <p className="font-dm text-[10px] text-gold/50 tracking-[0.2em] uppercase">
                    Step {step.step}
                  </p>
                  <h3 className="font-cormorant font-semibold text-xl text-ivory mt-1">
                    {step.title}
                  </h3>
                  <p className="font-dm text-sm text-muted mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
