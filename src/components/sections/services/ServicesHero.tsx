// filepath: src/components/sections/services/ServicesHero.tsx
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ShieldCheck, Users, Star, ChevronDown } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 }
}

// 8×8 decorative dots SVG
function DotsGrid() {
  const dots: { cx: number; cy: number }[] = []
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      dots.push({ cx: col * 30 + 15, cy: row * 30 + 15 })
    }
  }
  return (
    <svg
      viewBox="0 0 255 255"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {dots.map((d, i) => (
        <circle key={i} cx={d.cx} cy={d.cy} r={2} fill="#1A2645" />
      ))}
    </svg>
  )
}

const badges = [
  { icon: ShieldCheck, text: 'Government Recognised' },
  { icon: Users, text: '12,000+ Members' },
  { icon: Star, text: 'Rated 4.9 / 5' }
]

export default function ServicesHero() {
  return (
    <section className="relative bg-ivory pt-32 pb-20 lg:py-32 overflow-hidden flex items-center min-h-[90vh]">
      {/* Background image — very subtle */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&q=80"
          alt=""
          fill
          className="object-cover opacity-[0.03]"
          priority
        />
      </div>

      {/* Content Grid */}
      <div className="relative z-10 w-full px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Side: Content */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          {/* Breadcrumb pill */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0 }}
          >
            <span className="inline-block rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-dm px-4 py-1.5 tracking-widest uppercase mb-6">
              Our Services
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-cormorant font-bold text-5xl md:text-6xl text-navy leading-[1.1] mt-2 max-w-2xl"
          >
            Everything Your Business
            <br />
            Needs to Thrive
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-dm text-navy/60 text-base md:text-lg mt-6 max-w-xl leading-relaxed"
          >
            From certification and community to mentorship and funding — Anantari provides the
            complete ecosystem for women entrepreneurs to grow with confidence.
          </motion.p>

          {/* Trust badges */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4 mt-10"
          >
            {badges.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 rounded-full bg-white border border-navy/10 shadow-sm px-5 py-2.5"
              >
                <Icon size={16} className="text-gold" />
                <span className="font-dm text-sm text-navy/70">{text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Side: Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative hidden lg:block"
        >
          {/* Decorative dots behind image */}
          <div
            className="absolute -right-8 -top-8 w-64 h-64 opacity-10 pointer-events-none z-0"
            aria-hidden="true"
          >
            <DotsGrid />
          </div>

          {/* Decorative frame */}
          <div className="absolute -inset-4 border border-gold/30 rounded-2xl transform -rotate-2" aria-hidden="true" />
          
          <div className="relative z-10 p-2 bg-white rounded-2xl shadow-xl">
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] border border-navy/5">
              <Image 
                src="/images/services_hero.png" 
                alt="Women entrepreneurs collaborating and presenting" 
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
          </div>

          {/* Floating accent elements */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute -bottom-6 -left-6 bg-navy border border-gold/20 px-6 py-4 rounded-xl shadow-2xl z-20 backdrop-blur flex items-center gap-4"
          >
             <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
               <Star size={20} className="text-gold fill-gold" />
             </div>
             <div>
               <p className="font-cormorant font-bold text-ivory text-xl">Premium</p>
               <p className="font-dm text-[10px] text-muted uppercase tracking-widest mt-0.5">Ecosystem</p>
             </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-20">
        <ChevronDown size={22} className="text-gold animate-bounce" />
      </div>
    </section>
  )
}
