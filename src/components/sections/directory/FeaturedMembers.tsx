// filepath: src/components/sections/directory/FeaturedMembers.tsx
import Image from 'next/image'
import { BadgeCheck, MapPin, ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import Button from '@/components/ui/Button'
import { MEMBERS } from '@/lib/constants'

export default function FeaturedMembers() {
  return (
    <section className="relative bg-ivory py-24 overflow-hidden">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionHeading
            title="Featured Members"
            subtitle="Verified women-owned businesses you can trust."
            align="left"
          />
          <Button variant="secondary" size="sm">
            View All Members
          </Button>
        </div>
      </div>

      {/* Members grid */}
      <div className="mt-14 max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {MEMBERS.map((member, index) => (
          <RevealOnScroll key={member.name} delay={index * 80}>
            <div className="relative bg-white rounded-2xl p-6 border border-transparent transition-all duration-300 hover:border-gold/30 hover:shadow-xl hover:-translate-y-1 group overflow-hidden cursor-pointer h-full flex flex-col">
              {/* Hover shimmer */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Verified badge */}
              {member.verified && (
                <div className="absolute top-4 right-4 rounded-full bg-gold/10 border border-gold/30 px-2.5 py-1 flex items-center gap-1">
                  <BadgeCheck size={12} className="text-gold" />
                  <span className="font-dm text-[10px] text-gold font-medium">Verified</span>
                </div>
              )}

              {/* Avatar */}
              <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-ivory-dark group-hover:ring-gold transition-all duration-300 flex-shrink-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Name */}
              <h3 className="font-cormorant font-semibold text-lg text-navy mt-4 leading-tight">
                {member.name}
              </h3>

              {/* Business */}
              <p className="font-dm text-sm text-navy/60 mt-0.5">{member.business}</p>

              {/* Tagline */}
              <p className="font-dm text-xs text-navy/40 mt-2 leading-relaxed line-clamp-2 flex-1">
                {member.tagline}
              </p>

              {/* Divider */}
              <div className="h-px bg-navy/5 my-4" />

              {/* Bottom row */}
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-ivory-dark px-3 py-1 font-dm text-[10px] text-navy/50">
                  {member.category}
                </span>
                <div className="flex items-center gap-1">
                  <MapPin size={10} className="text-navy/30" />
                  <span className="font-dm text-[10px] text-navy/40">{member.city}</span>
                </div>
              </div>

              {/* View Profile link */}
              <div className="mt-4 flex items-center gap-1 font-dm text-xs text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span>View Profile</span>
                <ArrowRight size={12} />
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  )
}
