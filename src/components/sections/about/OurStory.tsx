// filepath: src/components/sections/about/OurStory.tsx
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

export default function OurStory() {
  return (
    <section className="bg-ivory py-24 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto px-6 items-start">
        {/* Left column — story text */}
        <RevealOnScroll>
          <SectionHeading title="The Story Behind Anantari" align="left" />

          <p className="font-dm text-navy/70 leading-relaxed mt-8 text-base">
            Anantari was born from a conversation between five women business owners in Hyderabad
            who kept running into the same walls — invisible barriers that had nothing to do with
            capability and everything to do with access. Access to networks. Access to buyers.
            Access to capital. Access to each other.
          </p>

          <p className="font-dm text-navy/70 leading-relaxed mt-5 text-base">
            In 2019, we launched with 200 members and a simple promise: every woman in business
            deserves the same doors that open effortlessly for others. Today, we&apos;re a
            community of 12,000+ entrepreneurs, backed by partnerships with government bodies,
            corporates, and international development organisations.
          </p>

          <p className="font-dm text-navy/70 leading-relaxed mt-5 text-base">
            Our certification programme has helped hundreds of women win government and corporate
            procurement contracts. Our mentorship network has guided first-generation entrepreneurs
            to their first crore. Our events have sparked partnerships that changed the trajectory
            of businesses overnight.
          </p>

          <div className="mt-10">
            <Button variant="primary" size="lg">
              Join Our Community
            </Button>
          </div>
        </RevealOnScroll>

        {/* Right column — pull quote + achievement cards */}
        <RevealOnScroll delay={200}>
          <div className="relative sticky top-24">
            {/* Large decorative quote block */}
            <div className="bg-navy rounded-3xl p-10 md:p-12 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute right-0 bottom-0 w-48 h-48 bg-gold/5 rounded-full -mr-12 -mb-12" aria-hidden="true" />

              {/* Small gold line */}
              <div className="w-8 h-0.5 bg-gold mb-6" />

              {/* Quote */}
              <blockquote className="font-cormorant italic text-2xl md:text-3xl text-ivory leading-relaxed">
                &quot;When one woman rises, she reaches back and pulls others up with her. That is
                the Anantari way.&quot;
              </blockquote>

              {/* Attribution */}
              <div className="mt-8 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex-shrink-0" aria-hidden="true" />
                <p className="font-dm text-sm text-muted">— Ananya Sharma, Founder</p>
              </div>
            </div>

            {/* Achievement cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-ivory-dark rounded-xl p-5">
                <p className="font-cormorant font-bold text-3xl text-gold">₹240Cr+</p>
                <p className="font-dm text-xs text-navy/60 mt-1">Deals Closed</p>
              </div>
              <div className="bg-ivory-dark rounded-xl p-5">
                <p className="font-cormorant font-bold text-3xl text-gold">920+</p>
                <p className="font-dm text-xs text-navy/60 mt-1">Certifications Issued</p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
