// filepath: src/components/sections/about/MissionHero.tsx
'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 }
}

export default function MissionHero() {
  return (
    <section className="relative min-h-[60vh] bg-navy flex items-center overflow-hidden">
      {/* Decorative background SVG */}
      <div
        className="absolute left-0 bottom-0 w-full h-full opacity-10 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Large arc sweep bottom-left to center */}
          <path
            d="M0 600 Q200 300 500 200"
            stroke="#C9913A"
            strokeWidth="1"
            fill="none"
          />
          {/* Three concentric partial rings bottom-left */}
          <path
            d="M0 500 Q100 400 200 500"
            stroke="#C9913A"
            strokeWidth="0.5"
            fill="none"
          />
          <path
            d="M-40 560 Q80 400 260 560"
            stroke="#ffffff"
            strokeWidth="0.5"
            fill="none"
          />
          <path
            d="M-80 620 Q60 400 310 620"
            stroke="#C9913A"
            strokeWidth="0.5"
            fill="none"
          />
          {/* Scattered dots top area */}
          <circle cx="120" cy="60" r="3" fill="#C9913A" fillOpacity="0.6" />
          <circle cx="220" cy="40" r="2" fill="#C9913A" fillOpacity="0.4" />
          <circle cx="340" cy="80" r="4" fill="#C9913A" fillOpacity="0.3" />
          <circle cx="450" cy="30" r="2" fill="#C9913A" fillOpacity="0.5" />
          <circle cx="560" cy="70" r="3" fill="#ffffff" fillOpacity="0.3" />
          <circle cx="640" cy="50" r="2" fill="#C9913A" fillOpacity="0.4" />
          <circle cx="720" cy="90" r="3" fill="#C9913A" fillOpacity="0.3" />
          <circle cx="780" cy="40" r="2" fill="#ffffff" fillOpacity="0.2" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
        {/* Breadcrumb pill */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0 }}
        >
          <span className="inline-block rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-dm px-4 py-1.5 tracking-widest uppercase mb-8">
            Our Story
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-cormorant font-bold text-5xl md:text-6xl lg:text-7xl text-ivory leading-[1.1] text-balance"
        >
          Empowering{' '}
          <span className="relative inline-block">
            Every
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gold" />
          </span>
          <br />
          Woman Entrepreneur
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-dm text-muted text-base md:text-lg mt-8 max-w-2xl mx-auto leading-relaxed"
        >
          We believe the future of Indian business is feminine — bold, collaborative, and
          unstoppable. Anantari exists to make that future a reality today.
        </motion.p>

        {/* Stat pills */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex gap-6 justify-center mt-10 flex-wrap"
        >
          <div className="rounded-full bg-white/5 border border-white/10 px-6 py-3 text-center">
            <p className="font-cormorant font-semibold text-xl text-ivory">Founded 2019</p>
            <p className="font-dm text-xs text-muted mt-0.5">Our journey began</p>
          </div>
          <div className="rounded-full bg-white/5 border border-white/10 px-6 py-3 text-center">
            <p className="font-cormorant font-semibold text-xl text-ivory">Pan-India Network</p>
            <p className="font-dm text-xs text-muted mt-0.5">480+ cities covered</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
