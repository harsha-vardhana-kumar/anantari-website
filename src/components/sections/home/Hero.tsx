'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Button from '@/components/ui/Button'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 }
}

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-navy overflow-hidden flex flex-col items-center justify-center">
      {/* Decorative SVG background */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-30 pointer-events-none" aria-hidden="true">
        <svg
          viewBox="0 0 700 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Large circle outline */}
          <circle cx="500" cy="200" r="280" stroke="#C9913A" strokeWidth="0.5" fill="none" />
          {/* Medium circle outline */}
          <circle cx="600" cy="500" r="180" stroke="#C9913A" strokeWidth="0.5" fill="none" />
          {/* Small filled circle */}
          <circle cx="420" cy="120" r="8" fill="#C9913A" fillOpacity="0.4" />
          {/* Arc line top-right */}
          <path
            d="M700 0 Q550 100 620 300 Q680 450 600 600"
            stroke="#D4561A"
            strokeWidth="1"
            fill="none"
          />
          {/* Dot cluster */}
          <circle cx="350" cy="80" r="3" fill="#C9913A" fillOpacity="0.6" />
          <circle cx="480" cy="60" r="3" fill="#ffffff" fillOpacity="0.4" />
          <circle cx="560" cy="130" r="3" fill="#C9913A" fillOpacity="0.5" />
          <circle cx="610" cy="75" r="3" fill="#ffffff" fillOpacity="0.3" />
          <circle cx="390" cy="150" r="3" fill="#C9913A" fillOpacity="0.4" />
          <circle cx="450" cy="200" r="3" fill="#ffffff" fillOpacity="0.5" />
        </svg>
      </div>

      {/* Hero content */}
      <div className="relative z-10 w-full px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center pt-32 pb-20 lg:py-0">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0 }}
          >
            <span className="inline-block rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-dm px-4 py-1.5 tracking-widest uppercase mb-6">
              India&apos;s #1 Women Business Network
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-playfair italic text-5xl sm:text-6xl md:text-7xl text-ivory leading-[1.1] max-w-2xl"
          >
            Where Women
            <br />
            Rise Together
          </motion.h1>

          {/* Sub heading */}
          <motion.p
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-dm text-muted text-base md:text-lg max-w-xl mt-6 leading-relaxed"
          >
            India&apos;s premier platform connecting, certifying and championing women-owned
            businesses across every industry and city.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex gap-4 mt-10 flex-wrap justify-center lg:justify-start"
          >
            <Button variant="primary" size="lg">
              Join the Network
            </Button>
            <Button variant="secondary" size="lg">
              Explore Directory
            </Button>
          </motion.div>
        </div>

        {/* Right side: Hero Image with decorations */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative hidden lg:block"
        >
          {/* Decorative frame */}
          <div className="absolute -inset-4 border border-gold/20 rounded-2xl transform rotate-3" aria-hidden="true" />
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-ivory/10 aspect-[4/5] lg:aspect-auto">
            <Image 
              src="/images/hero.png" 
              alt="Confident women entrepreneurs collaborating" 
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              width={600}
              height={800}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
          </div>

          {/* Floating accent elements */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute -bottom-8 -left-8 bg-navy border border-gold/30 p-5 rounded-lg shadow-2xl z-20 backdrop-blur-sm"
          >
            <p className="text-gold font-playfair italic text-xl leading-tight">
              Empowering<br />Generations
            </p>
          </motion.div>

          {/* Animated circle decoration */}
          <div className="absolute -top-10 -right-10 w-32 h-32 border-2 border-gold/10 rounded-full animate-spin-slow pointer-events-none" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        aria-label="Scroll down"
      >
        <span className="font-dm text-[10px] text-muted tracking-widest uppercase">scroll</span>
        <ChevronDown
          size={18}
          className="text-gold animate-bounce-slow"
        />
      </motion.div>
    </section>
  )
}
