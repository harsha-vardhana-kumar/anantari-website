import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-cormorant'
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-sans'
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
  style: ['italic'],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: "Anantari | India's Premier Women's Business Network",
  description:
    'Anantari connects, certifies and champions women-owned businesses across India. Join 12,000+ entrepreneurs across 38 industries.',
  keywords: [
    'women entrepreneurs',
    'women business network India',
    'WEConnect India',
    'women owned business certification'
  ],
  openGraph: {
    title: "Anantari | Women's Business Network",
    description: "India's premier platform for women entrepreneurs",
    type: 'website'
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${playfair.variable}`}
    >
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
