'use client'

import { Plus, Search, ChevronDown } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function EventsFilterSection() {
  return (
    <section className="sticky top-[72px] z-40 bg-navy/95 backdrop-blur-lg border-b border-white/10 py-4 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-4 items-center justify-between">
        
        {/* Left */}
        <div className="flex flex-wrap items-center gap-4 flex-1">
          <div className="relative min-w-[200px] flex-1 max-w-[300px]">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-ivory/30" />
            <input
              type="text"
              placeholder="Search events..."
              className="w-full bg-transparent border border-white/15 rounded-xl pl-11 pr-4 py-2.5 text-ivory placeholder:text-ivory/30 text-sm focus:outline-none focus:border-brand/50"
            />
          </div>

          <div className="relative">
            <select className="bg-navy border border-white/15 rounded-xl px-4 py-2.5 pr-10 text-ivory/70 text-sm focus:outline-none focus:border-brand/50 appearance-none cursor-pointer">
              <option>All Months</option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
            <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-ivory/40 pointer-events-none" />
          </div>

          <div className="relative">
            <select className="bg-navy border border-white/15 rounded-xl px-4 py-2.5 pr-10 text-ivory/70 text-sm focus:outline-none focus:border-brand/50 appearance-none cursor-pointer">
              <option>All Formats</option>
              <option>Online</option>
              <option>In-Person</option>
              <option>Hybrid</option>
            </select>
            <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-ivory/40 pointer-events-none" />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4 shrink-0 mt-2 sm:mt-0">
          <span className="text-ivory/50 text-sm hidden sm:inline-block">24 upcoming events</span>
          <Button variant="ghost" size="sm" className="gap-2 shrink-0">
            <Plus size={16} />
            Submit an Event
          </Button>
        </div>

      </div>
    </section>
  )
}
