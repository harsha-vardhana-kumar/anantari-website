import Button from '@/components/ui/Button'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export default function CTABanner() {
  return (
    <section className="relative bg-navy py-24 text-center overflow-hidden">
      {/* Decorative dot pattern background */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle, #C9913A 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <RevealOnScroll>
          {/* Decorative line + diamond */}
          <div className="flex items-center gap-4 justify-center mb-8" aria-hidden="true">
            <div className="h-px w-24 bg-gold/40" />
            <div className="w-2 h-2 rotate-45 bg-gold/60" />
            <div className="h-px w-24 bg-gold/40" />
          </div>

          {/* Heading */}
          <h2 className="font-cormorant font-bold text-4xl md:text-5xl text-ivory">
            Ready to grow your business?
          </h2>

          {/* Subtext */}
          <p className="font-dm text-muted mt-4 text-base">
            Join 12,000+ women entrepreneurs already in our network
          </p>

          {/* Buttons */}
          <div className="mt-10 flex gap-4 justify-center flex-wrap">
            <Button variant="primary" size="lg">
              Get Certified Today
            </Button>
            <Button variant="secondary" size="lg">
              Explore Membership
            </Button>
          </div>

          {/* Fine print */}
          <p className="font-dm text-xs text-muted/50 mt-8 tracking-wide">
            No credit card required · Free to join · Cancel anytime
          </p>
        </RevealOnScroll>
      </div>
    </section>
  )
}
