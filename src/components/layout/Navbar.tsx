'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { NAV_LINKS } from '@/lib/constants'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

function Logo() {
  return (
    <div className="relative w-32 md:w-40 h-10">
      <Image
        src="/anantari_logo.png"
        alt="Anantari Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const isLightPage = pathname === '/services'

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 w-full z-50 transition-all duration-300',
          scrolled ? 'py-3' : 'py-5',
          scrolled || isLightPage
            ? 'bg-navy/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="Anantari home">
            <Logo />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'font-dm text-sm transition-colors relative pb-0.5',
                    isActive
                      ? 'text-ivory after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gold'
                      : 'text-ivory/80 hover:text-ivory'
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => console.log('Login clicked')}>
              Login
            </Button>
            <Link href="/membership">
              <Button variant="primary" size="sm">
                Join Us
              </Button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="lg:hidden text-ivory p-2"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-navy z-40 flex flex-col px-6 pt-24 pb-10"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col gap-2 flex-1">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'block font-cormorant text-3xl py-3 border-b border-white/10 transition-colors',
                      pathname === link.href
                        ? 'text-gold'
                        : 'text-ivory/80 hover:text-ivory'
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-3">
              <Button
                variant="ghost"
                size="lg"
                className="w-full justify-center"
                onClick={() => { setMobileOpen(false); console.log('Login clicked') }}
              >
                Login
              </Button>
              <Link href="/membership" onClick={() => setMobileOpen(false)}>
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full justify-center"
                >
                  Join Us
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
