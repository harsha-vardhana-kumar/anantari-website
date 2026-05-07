'use client'

import { TESTIMONIALS } from '@/lib/constants'
import SectionHeading from '@/components/ui/SectionHeading'
import Carousel from '@/components/ui/Carousel'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

function TestimonialSlide({
  quote,
  name,
  business,
  city
}: {
  quote: string
  name: string
  business: string
  city: string
}) {
  return (
    <div className="px-8 md:px-16 text-center pb-4">
      {/* Large quote mark */}
      <div
        className="font-cormorant text-[120px] text-gold/20 leading-none select-none h-16 flex items-end justify-center mb-4"
        aria-hidden="true"
      >
        &ldquo;
      </div>

      {/* Quote text */}
      <p className="font-cormorant italic text-xl md:text-2xl text-navy leading-relaxed">
        {quote}
      </p>

      {/* Divider */}
      <div className="w-12 h-0.5 bg-gold mx-auto mt-8" />

      {/* Name */}
      <p className="font-cormorant font-semibold text-navy mt-4">{name}</p>

      {/* Business + city */}
      <p className="font-dm text-sm text-muted mt-1">
        {business} · {city}
      </p>
    </div>
  )
}

export default function Testimonials() {
  const slides = TESTIMONIALS.map((t) => (
    <TestimonialSlide
      key={t.name}
      quote={t.quote}
      name={t.name}
      business={t.business}
      city={t.city}
    />
  ))

  return (
    <section className="bg-ivory py-24">
      <div className="max-w-6xl mx-auto px-6">
        <RevealOnScroll>
          <div className="flex justify-center">
            <SectionHeading
              title="Voices from Our Community"
              subtitle="Real stories from women who've grown with Anantari."
              align="center"
            />
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={100} className="mt-16 max-w-3xl mx-auto">
          <Carousel items={slides} autoPlayInterval={5000} />
        </RevealOnScroll>
      </div>
    </section>
  )
}
