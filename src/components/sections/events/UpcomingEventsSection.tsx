'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { LayoutGrid, List, MapPin, Mic2, ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const EVENTS = [
  {
    id: 1, title: "Women in Tech Summit 2025", type: "Summit", format: "In-Person",
    date: "March 15, 2025", time: "9:00 AM – 6:00 PM IST",
    location: "Hyderabad International Convention Centre", city: "Hyderabad",
    speaker: "Kavitha Reddy & Panel of 8 Women Tech Leaders",
    spots: 500, spotsLeft: 87, price: "₹2,999", isFree: false, isFeatured: true,
    color: "#3158A7", tags: ["Technology", "Leadership", "Networking"],
    description: "A full-day summit bringing together 500 women in technology for keynotes, panels, and unparalleled networking."
  },
  {
    id: 2, title: "Financial Freedom Masterclass", type: "Workshop", format: "Online",
    date: "March 22, 2025", time: "3:00 PM – 5:00 PM IST",
    location: "Zoom Webinar", city: "Online",
    speaker: "Sunita Agarwal, CFP",
    spots: 200, spotsLeft: 45, price: "Free", isFree: true, isFeatured: false,
    color: "#EE670D", tags: ["Finance", "Personal Growth"],
    description: "Learn to build wealth, manage investments, and achieve financial independence as a woman entrepreneur."
  },
  {
    id: 3, title: "Legal Essentials for Startups", type: "Webinar", format: "Online",
    date: "March 28, 2025", time: "4:00 PM – 5:30 PM IST",
    location: "Google Meet", city: "Online",
    speaker: "Rashida Bano, Senior Advocate",
    spots: 300, spotsLeft: 120, price: "Free", isFree: true, isFeatured: false,
    color: "#C9A84C", tags: ["Legal", "Startups"],
    description: "Essential legal knowledge every woman founder needs — from incorporation to investor agreements."
  },
  {
    id: 4, title: "Hyderabad Women Entrepreneurs Mixer", type: "Networking", format: "In-Person",
    date: "April 5, 2025", time: "6:00 PM – 9:00 PM IST",
    location: "The Park Hotel, Somajiguda", city: "Hyderabad",
    speaker: "Open Networking Format",
    spots: 80, spotsLeft: 12, price: "₹999", isFree: false, isFeatured: true,
    color: "#EE670D", tags: ["Networking", "Local Chapter"],
    description: "An intimate evening of curated networking for Hyderabad's top women entrepreneurs. Limited seats."
  },
  {
    id: 5, title: "Brand Building for Women Leaders", type: "Workshop", format: "Online",
    date: "April 12, 2025", time: "11:00 AM – 1:00 PM IST",
    location: "Zoom Webinar", city: "Online",
    speaker: "Zara Thompson, CMO BrandLabs",
    spots: 150, spotsLeft: 67, price: "₹499", isFree: false, isFeatured: false,
    color: "#3158A7", tags: ["Marketing", "Branding", "Personal Brand"],
    description: "Hands-on workshop on building a powerful personal and business brand in the digital age."
  },
  {
    id: 6, title: "Annual Leadership Retreat 2025", type: "Retreat", format: "In-Person",
    date: "April 18-20, 2025", time: "3-Day Residential Program",
    location: "Taj Corbett Resort, Uttarakhand", city: "Uttarakhand",
    speaker: "Multiple Facilitators",
    spots: 40, spotsLeft: 6, price: "₹24,999", isFree: false, isFeatured: true,
    color: "#C9A84C", tags: ["Leadership", "Retreat", "Elite"],
    description: "3-day immersive retreat for Elite members. Deep transformation, peer learning, and lifelong bonds."
  },
  {
    id: 7, title: "Healthcare Innovation for Women", type: "Webinar", format: "Online",
    date: "April 25, 2025", time: "2:00 PM – 3:30 PM IST",
    location: "Zoom", city: "Online",
    speaker: "Dr. Meera Joshi", spots: 500, spotsLeft: 230,
    price: "Free", isFree: true, isFeatured: false, color: "#3158A7",
    tags: ["Healthcare", "Innovation"],
    description: "Exploring opportunities for women in healthcare entrepreneurship and medtech."
  },
  {
    id: 8, title: "Mumbai Chapter Monthly Meetup", type: "Networking", format: "In-Person",
    date: "May 3, 2025", time: "6:30 PM – 9:00 PM IST",
    location: "WeWork BKC, Mumbai", city: "Mumbai",
    speaker: "Chapter Lead: Aisha Merchant", spots: 60, spotsLeft: 28,
    price: "₹799", isFree: false, isFeatured: false, color: "#EE670D",
    tags: ["Networking", "Mumbai"],
    description: "Monthly in-person gathering for Mumbai chapter members."
  },
  {
    id: 9, title: "Pitch Perfect: Funding Workshop", type: "Workshop", format: "Hybrid",
    date: "May 10, 2025", time: "10:00 AM – 1:00 PM IST",
    location: "T-Hub, Hyderabad + Online", city: "Hyderabad",
    speaker: "Panel of 3 VCs", spots: 100, spotsLeft: 41,
    price: "₹1,499", isFree: false, isFeatured: true, color: "#C9A84C",
    tags: ["Funding", "Startups", "Workshop"],
    description: "Practice your pitch in front of active investors and get real-time feedback."
  },
  {
    id: 10, title: "Digital Marketing Bootcamp", type: "Workshop", format: "Online",
    date: "May 17, 2025", time: "10:00 AM – 4:00 PM IST",
    location: "Zoom", city: "Online",
    speaker: "Tanvi Shah & Guest Experts", spots: 200, spotsLeft: 88,
    price: "₹1,999", isFree: false, isFeatured: false, color: "#3158A7",
    tags: ["Marketing", "Digital", "Workshop"],
    description: "Full-day bootcamp on SEO, social media, content marketing, and paid ads."
  },
  {
    id: 11, title: "Bengaluru Tech Women Networking", type: "Networking", format: "In-Person",
    date: "May 24, 2025", time: "6:00 PM – 9:00 PM IST",
    location: "Indiranagar Social, Bengaluru", city: "Bengaluru",
    speaker: "Open Format", spots: 75, spotsLeft: 33,
    price: "₹699", isFree: false, isFeatured: false, color: "#EE670D",
    tags: ["Tech", "Networking", "Bengaluru"],
    description: "Curated networking for women in technology across Bengaluru's startup ecosystem."
  },
  {
    id: 12, title: "Global Women Leaders Summit", type: "Summit", format: "Hybrid",
    date: "June 7-8, 2025", time: "2-Day Event",
    location: "ITC Grand Chola, Chennai + Global Stream", city: "Chennai",
    speaker: "12 International Speakers", spots: 800, spotsLeft: 156,
    price: "₹4,999", isFree: false, isFeatured: true, color: "#3158A7",
    tags: ["Leadership", "Global", "Summit"],
    description: "The flagship Anantari annual summit with speakers from 15 countries."
  }
]

export default function UpcomingEventsSection() {
  const [view, setView] = useState<'grid' | 'list'>('grid')

  return (
    <section className="py-16 px-6 bg-ivory-dark">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-navy/40 text-xs uppercase tracking-widest mb-8">
          Upcoming Events
        </h2>

        {/* View Toggle */}
        <div className="mb-8 flex gap-2">
          <button
            onClick={() => setView('grid')}
            className={cn(
              "w-10 h-10 border rounded-xl flex items-center justify-center transition-all",
              view === 'grid' 
                ? "bg-brand/20 text-brand border-brand/40" 
                : "text-navy/40 border-navy/10 hover:border-navy/20"
            )}
          >
            <LayoutGrid size={18} />
          </button>
          <button
            onClick={() => setView('list')}
            className={cn(
              "w-10 h-10 border rounded-xl flex items-center justify-center transition-all",
              view === 'list' 
                ? "bg-brand/20 text-brand border-brand/40" 
                : "text-navy/40 border-navy/10 hover:border-navy/20"
            )}
          >
            <List size={18} />
          </button>
        </div>

        {/* EVENTS */}
        {view === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EVENTS.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1 }}
                className={cn(
                  "bg-white border border-navy/[0.08] rounded-3xl overflow-hidden group hover:shadow-xl hover:border-gold/20 transition-all duration-300 relative",
                  ""
                )}
                style={{ hoverBorderColor: event.color } as any}
              >
                {/* Top Color Band */}
                <div className="h-2 w-full" style={{ backgroundColor: event.color }} />

                {/* Featured Ribbon */}
                {event.isFeatured && (
                  <div className="absolute top-2 left-6 bg-gold text-xs text-navy font-bold px-3 py-1 rounded-b-lg z-10 shadow-md">
                    ✦ Featured Event
                  </div>
                )}

                <div className="p-6 pt-8">
                  <div className="flex justify-between items-start">
                    {/* Date Badge */}
                    <div 
                      className="border rounded-xl px-3 py-2 text-center"
                      style={{ backgroundColor: `${event.color}26`, borderColor: `${event.color}4D` }} // 15% and 30% alpha roughly
                    >
                      <div className="font-display text-2xl font-bold leading-none" style={{ color: event.color }}>
                        {event.date.split(' ')[1]?.replace(',', '') || '15'}
                      </div>
                      <div className="text-xs text-navy/50 uppercase mt-1">
                        {event.date.split(' ')[0]?.substring(0, 3) || 'MAR'}
                      </div>
                    </div>

                    {/* Format & Type Badges */}
                    <div className="flex flex-col items-end gap-1">
                      <span className={cn(
                        "text-xs rounded-full px-3 py-1 border",
                        event.format === 'Online' && "bg-green-900/40 border-green-700/40 text-green-400",
                        event.format === 'In-Person' && "bg-[#3158A7]/20 border-[#3158A7]/30 text-[#3158A7]",
                        event.format === 'Hybrid' && "bg-purple-900/30 border-purple-700/30 text-purple-400"
                      )}>
                        {event.format}
                      </span>
                      <span className="bg-navy/5 border border-navy/10 text-navy/60 text-xs rounded-full px-3 py-1">
                        {event.type}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-display text-lg font-bold text-navy mt-4 leading-tight group-hover:text-brand transition-colors">
                    {event.title}
                  </h3>

                  <div className="flex items-center gap-2 mt-2">
                    <Mic2 size={12} className="text-navy/30 shrink-0" />
                    <span className="text-navy/60 text-xs line-clamp-1">{event.speaker}</span>
                  </div>

                  <div className="flex items-center gap-2 mt-1">
                    <MapPin size={12} className="text-brand/60 shrink-0" />
                    <span className="text-navy/60 text-xs line-clamp-1">{event.location}</span>
                  </div>

                  <p className="text-navy/60 text-sm leading-relaxed mt-3 line-clamp-2">
                    {event.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {event.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="bg-navy/5 border border-navy/10 text-navy/60 text-xs rounded-full px-3 py-1">
                        {tag}
                      </span>
                    ))}
                    {event.tags.length > 2 && (
                      <span className="bg-navy/5 border border-navy/10 text-navy/60 text-xs rounded-full px-3 py-1">
                        +{event.tags.length - 2} more
                      </span>
                    )}
                  </div>

                  <div className="border-t border-navy/10 mt-4 pt-4" />

                  <div className="flex justify-between items-center">
                    <div>
                      {event.isFree ? (
                        <span className="text-green-400 font-semibold text-base">Free</span>
                      ) : (
                        <span className="font-display text-xl font-bold" style={{ color: event.color }}>
                          {event.price}
                        </span>
                      )}
                    </div>
                    <div>
                      {event.spotsLeft <= 20 ? (
                        <span className="text-red-400 text-xs">🔥 {event.spotsLeft} spots left</span>
                      ) : event.spotsLeft <= 50 ? (
                        <span className="text-yellow-400 text-xs">⚡ {event.spotsLeft} spots left</span>
                      ) : (
                        <span className="text-navy/40 text-xs">{event.spotsLeft} spots left</span>
                      )}
                    </div>
                  </div>

                  <Button 
                    variant={event.isFeatured || event.spotsLeft <= 50 ? 'primary' : 'secondary'} 
                    className={cn(
                      "w-full mt-4 justify-center",
                      event.isFeatured && "shadow-[0_0_20px_rgba(238,103,13,0.3)]"
                    )}
                  >
                    Register Now <ArrowRight size={16} />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {EVENTS.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white border border-navy/[0.08] rounded-2xl p-5 flex flex-col md:flex-row gap-6 items-start hover:border-brand/30 transition"
              >
                <div 
                  className="min-w-[64px] border rounded-xl px-3 py-2 text-center"
                  style={{ backgroundColor: `${event.color}26`, borderColor: `${event.color}4D` }}
                >
                  <div className="font-display text-2xl font-bold leading-none" style={{ color: event.color }}>
                    {event.date.split(' ')[1]?.replace(',', '') || '15'}
                  </div>
                  <div className="text-xs text-navy/50 uppercase mt-1">
                    {event.date.split(' ')[0]?.substring(0, 3) || 'MAR'}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex gap-3 items-center flex-wrap">
                    <h3 className="font-display font-bold text-navy text-lg">{event.title}</h3>
                    <div className="flex gap-2">
                       <span className={cn(
                        "text-xs rounded-full px-2 py-0.5 border inline-block",
                        event.format === 'Online' && "bg-green-900/40 border-green-700/40 text-green-400",
                        event.format === 'In-Person' && "bg-[#3158A7]/20 border-[#3158A7]/30 text-[#3158A7]",
                        event.format === 'Hybrid' && "bg-purple-900/30 border-purple-700/30 text-purple-400"
                      )}>
                        {event.format}
                      </span>
                      <span className="bg-navy/5 border border-navy/10 text-navy/60 text-xs rounded-full px-2 py-0.5 inline-block">
                        {event.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-xs text-navy/60 mt-1">
                    {event.speaker} &middot; {event.location}
                  </div>
                  
                  <p className="text-sm text-navy/60 mt-1 line-clamp-1">{event.description}</p>
                  
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {event.tags.map(tag => (
                      <span key={tag} className="bg-navy/5 border border-navy/10 text-navy/60 text-[10px] rounded-full px-2 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex md:flex-col items-center md:items-end justify-between w-full md:w-auto gap-3 shrink-0">
                  <div className="flex md:flex-col items-center md:items-end gap-3 md:gap-1">
                    {event.isFree ? (
                      <span className="text-green-400 font-semibold text-base">Free</span>
                    ) : (
                      <span className="font-display text-xl font-bold" style={{ color: event.color }}>
                        {event.price}
                      </span>
                    )}
                    {event.spotsLeft <= 20 ? (
                      <span className="text-red-400 text-xs">🔥 {event.spotsLeft} spots left</span>
                    ) : event.spotsLeft <= 50 ? (
                      <span className="text-yellow-400 text-xs">⚡ {event.spotsLeft} spots left</span>
                    ) : (
                      <span className="text-navy/40 text-xs">{event.spotsLeft} spots left</span>
                    )}
                  </div>
                  <Button variant="primary" size="sm">
                    Register &rarr;
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
