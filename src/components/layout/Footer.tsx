import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Linkedin, Facebook, Twitter } from 'lucide-react'
import { FOOTER_LINKS } from '@/lib/constants'

function Logo() {
  return (
    <div className="relative w-32 md:w-40 h-10">
      <Image
        src="/anantari_logo.png"
        alt="Anantari Logo"
        fill
        className="object-contain"
      />
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-navy-deep">
      {/* Gold top border */}
      <div className="h-px bg-gold" />

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" aria-label="Anantari home">
              <Logo />
            </Link>
            <p className="font-dm text-sm text-ivory/50 mt-4 leading-relaxed max-w-xs">
              India&apos;s premier platform connecting, certifying, and championing
              women-owned businesses across every industry and city.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="w-10 h-10 rounded-full border border-white/20 text-ivory flex items-center justify-center hover:bg-white/10 transition-colors duration-200"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on LinkedIn"
                className="w-10 h-10 rounded-full border border-white/20 text-ivory flex items-center justify-center hover:bg-white/10 transition-colors duration-200"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="w-10 h-10 rounded-full border border-white/20 text-ivory flex items-center justify-center hover:bg-white/10 transition-colors duration-200"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Twitter"
                className="w-10 h-10 rounded-full border border-white/20 text-ivory flex items-center justify-center hover:bg-white/10 transition-colors duration-200"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading} className="lg:col-span-1">
              <h3 className="font-cormorant text-ivory font-semibold mb-4 text-lg">
                {heading}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-dm text-sm text-ivory/50 hover:text-gold transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-dm text-sm text-ivory/40">
            © 2024 Anantari. All rights reserved.
          </p>
          <p className="font-dm text-sm text-ivory/40">
            Made with ♥ for women entrepreneurs
          </p>
        </div>
      </div>
    </footer>
  )
}
