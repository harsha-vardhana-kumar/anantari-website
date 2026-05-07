// filepath: src/components/sections/about/PartnersMarquee.tsx
'use client'

import { PARTNERS } from '@/lib/constants'

const allPartners = [...PARTNERS, ...PARTNERS]

export default function PartnersMarquee() {
  return (
    <section className="bg-navy-mid py-14 overflow-hidden">
      {/* Header */}
      <p className="text-center font-dm text-xs text-muted tracking-[0.2em] uppercase mb-10">
        Backed by leading organisations
      </p>

      {/* Marquee container with fade edges */}
      <div className="relative before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-24 before:bg-gradient-to-r before:from-navy-mid before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-24 after:bg-gradient-to-l after:from-navy-mid after:to-transparent after:content-['']">
        {/* Inner scrolling strip */}
        <div className="flex animate-marquee w-fit hover:[animation-play-state:paused]">
          {allPartners.map((partner, index) => (
            <div
              key={`${partner}-${index}`}
              className="flex-shrink-0 px-10 flex items-center"
            >
              <span className="font-cormorant font-semibold text-lg text-ivory/40 hover:text-ivory/70 transition-colors duration-300 whitespace-nowrap cursor-default">
                {partner}
              </span>
              {/* Separator dot — not after the last element in the full doubled list */}
              {index < allPartners.length - 1 && (
                <span className="w-1 h-1 rounded-full bg-gold/30 ml-10 flex-shrink-0" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
