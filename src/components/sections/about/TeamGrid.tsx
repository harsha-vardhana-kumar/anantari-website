// filepath: src/components/sections/about/TeamGrid.tsx
import Image from 'next/image'
import { Linkedin } from 'lucide-react'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import SectionHeading from '@/components/ui/SectionHeading'
import { TEAM } from '@/lib/constants'

export default function TeamGrid() {
  return (
    <section className="bg-ivory py-24">
      {/* Header */}
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          title="The People Behind Anantari"
          subtitle="A team of passionate advocates, operators, and changemakers."
          align="center"
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 max-w-5xl mx-auto px-6">
        {TEAM.map((member, index) => (
          <RevealOnScroll key={member.name} delay={index * 100}>
            <div className="text-center group">
              {/* Image wrapper with decorative arc */}
              <div className="relative w-24 h-24 mx-auto mb-5">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="rounded-full object-cover ring-4 ring-ivory-dark group-hover:ring-gold transition-all duration-300"
                />
                {/* Decorative gold quarter-arc behind photo */}
                <div className="absolute -bottom-1 -right-1 w-8 h-8 pointer-events-none" aria-hidden="true">
                  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path d="M32 0 A32 32 0 0 1 0 32" stroke="#C9913A" strokeWidth="1.5" fill="none" />
                  </svg>
                </div>
              </div>

              {/* Name */}
              <h3 className="font-cormorant font-semibold text-xl text-navy mt-2">{member.name}</h3>

              {/* Role */}
              <p className="font-dm text-sm text-muted mt-1">{member.role}</p>

              {/* LinkedIn link */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} on LinkedIn`}
                className="mt-4 inline-flex items-center justify-center w-8 h-8 rounded-full border border-navy/10 hover:border-gold hover:text-gold transition-all text-navy/40"
              >
                <Linkedin size={14} />
              </a>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  )
}
