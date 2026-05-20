'use client'

import { Building2, MapPin, Star, UserPlus, Users } from 'lucide-react'
import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const FEATURED_MEMBERS = [
  {
    name: "Kavitha Reddy",
    role: "Founder & CEO",
    company: "TechVentures India",
    location: "Hyderabad, India",
    industry: "Technology",
    initials: "KR",
    color: "#3158A7",
    tags: ["AI/ML", "SaaS", "B2B"],
    verified: true,
    featured: true,
    connections: 340,
    rating: 4.9
  },
  {
    name: "Aisha Merchant",
    role: "Managing Director",
    company: "GreenLeaf Ventures",
    location: "Mumbai, India",
    industry: "Sustainability",
    initials: "AM",
    color: "#EE670D",
    tags: ["ESG", "Impact Investing", "Climate"],
    verified: true,
    featured: true,
    connections: 520,
    rating: 5.0
  },
  {
    name: "Sunita Krishnamurthy",
    role: "Senior Advocate",
    company: "LexFirst Legal",
    location: "Chennai, India",
    industry: "Legal",
    initials: "SK",
    color: "#C9A84C",
    tags: ["Corporate Law", "IP", "Startups"],
    verified: true,
    featured: true,
    connections: 210,
    rating: 4.8
  }
]

export default function FeaturedMembersSpotlight() {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-navy-deep via-navy to-navy-mid border-b border-white/10 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto mb-10 flex justify-between items-center flex-wrap gap-4 relative z-10">
        <div>
          <span className="text-brand text-xs uppercase tracking-[0.2em] font-semibold block mb-2">
            Spotlight
          </span>
          <h2 className="font-display text-2xl font-bold text-ivory">
            Featured Members
          </h2>
        </div>
        <Button variant="ghost" size="sm" className="shrink-0 text-ivory hover:bg-white/5">
          View All &rarr;
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {FEATURED_MEMBERS.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-gradient-to-br from-[#162a50] to-[#0f2044] border border-white/10 rounded-3xl p-6 relative overflow-hidden group hover:border-gold/40 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(201,168,76,0.15)] transition-all duration-300 z-10"
          >
            {member.featured && (
              <div className="absolute top-4 right-4 bg-yellow-900/40 border border-yellow-600/40 text-yellow-400 text-xs rounded-full px-3 py-1 flex items-center gap-1 z-10">
                ✦ Featured
              </div>
            )}

            <div className="flex gap-4 items-start">
              <div
                className="w-[72px] h-[72px] rounded-full border-2 flex items-center justify-center shrink-0 font-display text-2xl font-bold"
                style={{
                  backgroundColor: `${member.color}33`,
                  borderColor: `${member.color}80`,
                  color: member.color
                }}
              >
                {member.initials}
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-ivory">
                  {member.name}
                </h3>
                <p className="text-sm text-ivory/60 mt-0.5">{member.role}</p>
                <div className="flex items-center gap-1 text-xs text-brand mt-1">
                  <Building2 size={12} />
                  <span>{member.company}</span>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 my-4" />

            <div className="flex justify-between items-center flex-wrap gap-2">
              <div className="flex items-center gap-1 text-ivory/40 text-xs shrink-0">
                <MapPin size={12} />
                <span>{member.location}</span>
              </div>
              <div className="bg-[#3158A7]/20 border border-[#3158A7]/30 text-[#3158A7] text-xs rounded-full px-3 py-1 shrink-0">
                {member.industry}
              </div>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {member.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-white/5 border border-white/10 text-ivory/50 text-xs rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-4 flex gap-4">
              <div className="flex items-center gap-1">
                <Users size={12} className="text-ivory/40" />
                <span className="text-ivory/60 text-xs">{member.connections} connections</span>
              </div>
              <div className="flex items-center gap-1">
                <Star size={12} className="text-yellow-400 fill-current" />
                <span className="text-ivory/60 text-xs">{member.rating} rating</span>
              </div>
            </div>

            <div className="mt-5 flex gap-3">
              <Button variant="primary" size="sm" className="flex-1 justify-center">
                View Profile
              </Button>
              <Button variant="secondary" size="sm" className="flex-1 justify-center gap-2">
                <UserPlus size={14} />
                Connect
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
