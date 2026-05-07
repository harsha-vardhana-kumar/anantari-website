'use client'

import { MapPin, Users } from 'lucide-react'
import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'

const PAST_EVENTS = [
  { title: "Women's Day Gala 2024", date: "March 8, 2024", attendees: 600, city: "Hyderabad", type: "Gala", highlight: "600 women. One unforgettable evening.", color: "#EE670D" },
  { title: "Annual Summit 2024", date: "June 14, 2024", attendees: 1200, city: "Mumbai", type: "Summit", highlight: "Largest Anantari event in history.", color: "#3158A7" },
  { title: "Leadership Retreat 2024", date: "September 2024", attendees: 40, city: "Coorg", type: "Retreat", highlight: "3 days. 40 women. Life-changing.", color: "#C9A84C" },
  { title: "Funding Bootcamp 2024", date: "October 2024", attendees: 280, city: "Bengaluru", type: "Workshop", highlight: "₹8Cr in funding connections made.", color: "#EE670D" },
  { title: "MENA Chapter Launch", date: "November 2024", attendees: 150, city: "Dubai", type: "Networking", highlight: "Anantari goes Middle East.", color: "#3158A7" },
  { title: "Year End Celebration 2024", date: "December 2024", attendees: 400, city: "Delhi", type: "Gala", highlight: "Celebrating 5 years of sisterhood.", color: "#C9A84C" }
]

export default function PastEventsSection() {
  return (
    <section className="py-16 px-6 bg-navy-light border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex justify-between items-center mb-10 gap-4 flex-wrap">
          <div>
            <span className="text-ivory/40 text-xs uppercase tracking-widest block mb-2">
              Past Events
            </span>
            <h2 className="font-display text-2xl font-bold text-ivory">
              Moments We&apos;ve Shared
            </h2>
          </div>
          <Button variant="ghost" size="sm" className="shrink-0">
            View Gallery &rarr;
          </Button>
        </div>

        <div className="flex gap-5 pb-4 overflow-x-auto scrollbar-hide -mx-6 px-6">
          {PAST_EVENTS.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-navy border border-white/10 rounded-2xl p-6 min-w-[300px] flex-shrink-0 relative overflow-hidden hover:border-white/25 transition cursor-pointer group"
            >
              {/* Color accent bar */}
              <div 
                className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                style={{ backgroundColor: event.color }}
              />
              
              <div className="pl-2">
                <span className="bg-white/5 text-ivory/40 text-xs rounded-full px-3 py-1 inline-block">
                  {event.type}
                </span>

                <h3 className="font-display text-lg font-bold text-ivory mt-3 group-hover:text-brand transition-colors">
                  {event.title}
                </h3>
                
                <p className="text-ivory/50 text-sm italic mt-2">
                  &quot;{event.highlight}&quot;
                </p>

                <div className="mt-4 flex justify-between items-center">
                  <div className="flex items-center gap-1.5">
                    <MapPin size={12} className="text-brand/50" />
                    <span className="text-xs text-ivory/40">{event.city}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users size={12} className="text-ivory/30" />
                    <span className="text-xs text-ivory/40">{event.attendees}+ attended</span>
                  </div>
                </div>

                <div className="text-[10px] text-ivory/30 mt-3">
                  {event.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
