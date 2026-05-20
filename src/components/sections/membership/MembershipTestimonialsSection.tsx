'use client'

import { motion } from 'framer-motion'

const TESTIMONIALS = [
  {
    quote: 'Anantari gave me my first 3 clients. The directory listing alone paid for 2 years of membership in month one.',
    name: 'Priya Sharma',
    role: 'UX Consultant, Hyderabad',
    initials: 'PS',
    color: '#3158A7',
    plan: 'Growth',
    stars: 5
  },
  {
    quote: "I was skeptical about 'women's networks' but Anantari is different. These are serious business women who actually help each other.",
    name: 'Aisha Merchant',
    role: 'Founder, GreenLeaf',
    initials: 'AM',
    color: '#EE670D',
    plan: 'Elite',
    stars: 5
  },
  {
    quote: 'My mentor through Anantari helped me avoid a legal disaster that could have cost me my company. Worth every rupee.',
    name: 'Nandita Rao',
    role: 'CEO, HealthFirst',
    initials: 'NR',
    color: '#C9A84C',
    plan: 'Growth',
    stars: 5
  },
  {
    quote: 'The Leadership Retreat was genuinely life-changing. I came back with 3 new partnerships and a completely different mindset.',
    name: 'Meghna Iyer',
    role: 'VP Operations, TechCo',
    initials: 'MI',
    color: '#3158A7',
    plan: 'Elite',
    stars: 5
  },
  {
    quote: "As someone new to entrepreneurship, the Community plan gave me exactly what I needed — a tribe. I've since upgraded to Growth.",
    name: 'Sakshi Verma',
    role: 'Founder, BakeHouse',
    initials: 'SV',
    color: '#EE670D',
    plan: 'Community',
    stars: 5
  }
]

const planBadgeMap: Record<string, string> = {
  Community: 'bg-[#3158A7]/20 text-[#3158A7] border-[#3158A7]/30',
  Growth: 'bg-brand/15 text-brand border-brand/30',
  Elite: 'bg-yellow-900/30 text-yellow-400 border-yellow-700/30'
}

export default function MembershipTestimonialsSection() {
  return (
    <section className="py-20 px-6 bg-ivory-dark border-y border-navy/10">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block border border-gold/30 bg-gold/10 text-gold text-xs font-medium px-4 py-1.5 rounded-full tracking-widest uppercase mb-4"
        >
          Member Love
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-cormorant text-4xl font-bold text-navy-deep"
        >
          Don&apos;t Take Our Word For It
        </motion.h2>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, idx) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white border border-navy/[0.08] rounded-3xl p-7 relative hover:shadow-xl hover:border-gold/20 transition-all duration-300 group"
          >
            {/* Plan badge */}
            <span className={`absolute top-6 right-6 text-xs rounded-full px-3 py-1 border ${planBadgeMap[t.plan]}`}>
              {t.plan}
            </span>

            {/* Stars */}
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: t.stars }).map((_, i) => (
                <span key={i} className="text-yellow-400 text-sm">★</span>
              ))}
            </div>

            {/* Quote */}
            <div className="relative">
              <span className="text-brand text-5xl font-bold leading-none block -mb-6 font-cormorant">&ldquo;</span>
              <p className="font-cormorant text-base text-navy/80 italic leading-relaxed pt-6">
                {t.quote}
              </p>
            </div>

            {/* Author */}
            <div className="mt-5 pt-5 border-t border-navy/10 flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold font-cormorant flex-shrink-0"
                style={{ backgroundColor: `${t.color}20`, color: t.color }}
              >
                {t.initials}
              </div>
              <div>
                <p className="font-semibold text-navy text-sm">{t.name}</p>
                <p className="text-xs text-navy/50">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
