import Hero from '@/components/sections/home/Hero'
import StatsBar from '@/components/sections/home/StatsBar'
import AboutPreview from '@/components/sections/home/AboutPreview'
import ServicesGrid from '@/components/sections/home/ServicesGrid'
import Testimonials from '@/components/sections/home/Testimonials'
import CTABanner from '@/components/sections/home/CTABanner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <AboutPreview />
      <ServicesGrid />
      <Testimonials />
      <CTABanner />
    </>
  )
}
