import { CalendarPlus, Megaphone } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function EventsCTASection() {
  return (
    <section className="py-20 px-6 bg-navy">
      <div className="max-w-4xl mx-auto text-center">
        
        <span className="inline-block border border-white/10 bg-white/5 text-ivory/60 text-xs uppercase tracking-widest rounded-full px-4 py-1.5 mb-6">
          Host with Us
        </span>
        
        <h2 className="font-display text-4xl font-bold text-ivory">
          Have an Event Idea?<br />
          <span className="italic text-brand mt-2 inline-block">Let&apos;s Make It Happen</span>
        </h2>
        
        <p className="text-ivory/60 mt-4 max-w-xl mx-auto leading-relaxed">
          Anantari supports community-led events. If you want to host a workshop, panel, or meetup for our members, we&apos;ll help you plan, promote, and execute it.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-2xl mx-auto text-left">
          
          <div className="bg-navy-light border border-brand/30 rounded-2xl p-8 hover:border-brand/60 transition-colors">
            <CalendarPlus size={32} className="text-brand mb-4" />
            <h3 className="font-semibold text-ivory text-lg mb-2">Submit an Event</h3>
            <p className="text-ivory/55 text-sm mb-6 leading-relaxed">
              Propose your event to the Anantari team for review and promotion to 2,400+ members.
            </p>
            <Button variant="primary" className="w-full justify-center">
              Submit Event &rarr;
            </Button>
          </div>

          <div className="bg-navy-light border border-[#3158A7]/30 rounded-2xl p-8 hover:border-[#3158A7]/60 transition-colors">
            <Megaphone size={32} className="text-[#3158A7] mb-4" />
            <h3 className="font-semibold text-ivory text-lg mb-2">Sponsor an Event</h3>
            <p className="text-ivory/55 text-sm mb-6 leading-relaxed">
              Partner with Anantari to reach thousands of women decision-makers at our flagship events.
            </p>
            <Button variant="secondary" className="w-full justify-center">
              Get Sponsorship Kit &rarr;
            </Button>
          </div>

        </div>

      </div>
    </section>
  )
}
