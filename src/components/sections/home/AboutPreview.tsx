import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export default function AboutPreview() {
  return (
    <section className="bg-ivory py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto px-6">
        {/* Left — image side */}
        <RevealOnScroll delay={0}>
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
                alt="Women entrepreneurs collaborating at Anantari"
                width={600}
                height={700}
                className="rounded-2xl object-cover w-full shadow-2xl"
              />
            </div>
            {/* Decorative gold border offset */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold rounded-2xl -z-0" />
          </div>
        </RevealOnScroll>

        {/* Right — text side */}
        <RevealOnScroll delay={150}>
          <SectionHeading
            title="Built by women. Powered by community."
            align="left"
          />

          <p className="font-dm text-navy/70 leading-relaxed mt-6">
            Anantari was founded on a simple belief — that when women in business come
            together, extraordinary things happen. We&apos;ve built a platform that goes
            beyond networking, offering certification, mentorship, funding access, and
            policy advocacy to help every woman entrepreneur thrive.
          </p>

          <p className="font-dm text-navy/70 leading-relaxed mt-4">
            From solopreneurs to scaling enterprises, our community spans 38 industries
            and 480+ cities across India.
          </p>

          <a
            href="/about"
            className="inline-flex items-center gap-2 text-gold font-dm font-medium mt-8 group"
            aria-label="Learn our story"
          >
            Learn Our Story
            <ArrowRight
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
        </RevealOnScroll>
      </div>
    </section>
  )
}
