'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Building2, CheckCircle2, LayoutGrid, List, MapPin, Search, Star, ChevronDown } from 'lucide-react'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const INDUSTRIES = [
  "All Industries", "Technology", "Finance", "Healthcare",
  "Education", "Fashion", "Food & Agriculture", "Legal", "Consulting",
  "Marketing", "Real Estate", "Manufacturing"
]

const LOCATIONS = [
  "All Locations", "Hyderabad", "Mumbai", "Delhi", "Bengaluru",
  "Chennai", "Pune", "Kolkata", "Dubai", "Singapore", "London", "USA"
]

const COLORS = ["#3158A7", "#EE670D", "#C9A84C"]

// Generate 24 varied mock members
const MOCK_MEMBERS = Array.from({ length: 24 }).map((_, i) => {
  const industries = INDUSTRIES.slice(1);
  const locations = LOCATIONS.slice(1);
  return {
    id: i + 1,
    name: `Member ${i + 1}`,
    role: i % 3 === 0 ? "Founder & CEO" : i % 2 === 0 ? "Director" : "Managing Partner",
    company: `Company ${i + 1}`,
    location: locations[i % locations.length],
    industry: industries[i % industries.length],
    initials: `M${i + 1}`,
    color: COLORS[i % COLORS.length],
    tags: ["Leadership", i % 2 === 0 ? "B2B" : "B2C", "Growth"],
    verified: i % 3 !== 0,
    connections: 100 + (i * 15),
    rating: (4 + (i % 10) / 10).toFixed(1),
    bio: "Building innovative solutions and empowering women in business.",
    joinedYear: 2020 + (i % 4)
  }
})

export default function DirectoryGridSection() {
  const [search, setSearch] = useState('')
  const [industry, setIndustry] = useState('All Industries')
  const [location, setLocation] = useState('All Locations')
  const [sort, setSort] = useState('Most Recent')
  const [view, setView] = useState<'grid' | 'list'>('grid')
  const [currentPage, setCurrentPage] = useState(1)
  
  const ITEMS_PER_PAGE = 12

  const filteredMembers = useMemo(() => {
    let result = MOCK_MEMBERS

    if (search) {
      const q = search.toLowerCase()
      result = result.filter(m => 
        m.name.toLowerCase().includes(q) || 
        m.company.toLowerCase().includes(q) ||
        m.bio.toLowerCase().includes(q)
      )
    }

    if (industry && industry !== 'All Industries') {
      result = result.filter(m => m.industry === industry)
    }

    if (location && location !== 'All Locations') {
      result = result.filter(m => m.location === location)
    }

    // Sorting logic placeholder
    if (sort === 'Alphabetical A-Z') {
      result = result.sort((a, b) => a.name.localeCompare(b.name))
    }

    return result
  }, [search, industry, location, sort])

  const totalPages = Math.ceil(filteredMembers.length / ITEMS_PER_PAGE)
  const currentMembers = filteredMembers.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

  return (
    <section className="py-16 px-6 bg-navy">
      <div className="max-w-7xl mx-auto">
        
        {/* FILTER BAR */}
        <div className="bg-navy-light border border-white/10 rounded-2xl p-4 flex flex-wrap gap-4 items-center mb-10">
          <div className="flex-1 min-w-[200px] relative">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-ivory/30" />
            <input
              type="text"
              placeholder="Search by name, company, skill..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
              className="w-full bg-transparent border border-white/15 rounded-xl pl-11 pr-4 py-3 text-ivory placeholder:text-ivory/30 text-sm focus:outline-none focus:border-brand/50"
            />
          </div>

          <div className="relative">
            <select
              value={industry}
              onChange={(e) => { setIndustry(e.target.value); setCurrentPage(1); }}
              className="bg-navy border border-white/15 rounded-xl px-4 py-3 pr-10 text-ivory/70 text-sm focus:outline-none focus:border-brand/50 appearance-none cursor-pointer"
            >
              {INDUSTRIES.map(i => <option key={i} value={i}>{i}</option>)}
            </select>
            <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-ivory/40 pointer-events-none" />
          </div>

          <div className="relative">
            <select
              value={location}
              onChange={(e) => { setLocation(e.target.value); setCurrentPage(1); }}
              className="bg-navy border border-white/15 rounded-xl px-4 py-3 pr-10 text-ivory/70 text-sm focus:outline-none focus:border-brand/50 appearance-none cursor-pointer"
            >
              {LOCATIONS.map(l => <option key={l} value={l}>{l}</option>)}
            </select>
            <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-ivory/40 pointer-events-none" />
          </div>

          <div className="relative">
            <select
              value={sort}
              onChange={(e) => { setSort(e.target.value); setCurrentPage(1); }}
              className="bg-navy border border-white/15 rounded-xl px-4 py-3 pr-10 text-ivory/70 text-sm focus:outline-none focus:border-brand/50 appearance-none cursor-pointer"
            >
              <option value="Most Recent">Most Recent</option>
              <option value="Most Connected">Most Connected</option>
              <option value="Top Rated">Top Rated</option>
              <option value="Alphabetical A-Z">Alphabetical A-Z</option>
            </select>
            <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-ivory/40 pointer-events-none" />
          </div>

          <div className="flex gap-2 shrink-0">
            <button
              onClick={() => setView('grid')}
              className={cn(
                "w-10 h-10 border rounded-xl flex items-center justify-center transition-all",
                view === 'grid' 
                  ? "bg-brand/20 text-brand border-brand/40" 
                  : "text-ivory/40 border-white/10 hover:border-white/20"
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
                  : "text-ivory/40 border-white/10 hover:border-white/20"
              )}
            >
              <List size={18} />
            </button>
          </div>
        </div>

        <div className="text-ivory/40 text-sm mb-6">
          Showing {filteredMembers.length} of 2,400+ members
        </div>

        {/* RESULTS */}
        {view === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {currentMembers.map((member) => (
              <div 
                key={member.id} 
                className="bg-navy-light border border-white/10 rounded-2xl p-5 hover:border-brand/30 hover:shadow-[0_0_30px_rgba(238,103,13,0.08)] transition-all duration-300 group cursor-pointer"
              >
                <div className="flex justify-between items-start">
                  <div
                    className="w-14 h-14 rounded-full border flex items-center justify-center font-display font-bold text-lg"
                    style={{
                      backgroundColor: `${member.color}33`,
                      borderColor: `${member.color}66`,
                      color: member.color
                    }}
                  >
                    {member.initials}
                  </div>
                  {member.verified && (
                    <div title="Verified Member">
                      <CheckCircle2 size={16} className="text-green-400" />
                    </div>
                  )}
                </div>
                
                <h3 className="font-display text-base font-bold text-ivory mt-3">
                  {member.name}
                </h3>
                <p className="text-xs text-ivory/55 mt-0.5">
                  {member.role} • {member.company}
                </p>
                <div className="flex items-center gap-1 mt-2 text-xs text-ivory/40">
                  <MapPin size={12} className="text-brand/60" />
                  {member.location}
                </div>
                
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {member.tags.slice(0, 2).map((tag, i) => (
                    <span
                      key={i}
                      className="bg-white/5 text-ivory/40 text-[10px] rounded-full px-2.5 py-1 block"
                    >
                      {tag}
                    </span>
                  ))}
                  {member.tags.length > 2 && (
                    <span className="bg-white/5 text-ivory/40 text-[10px] rounded-full px-2.5 py-1 block">
                      +{member.tags.length - 2} more
                    </span>
                  )}
                </div>
                
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-1">
                    <Star size={12} className="text-yellow-400 fill-current" />
                    <span className="text-xs text-ivory/50">{member.rating}</span>
                  </div>
                  <div className="text-xs text-brand font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    View &rarr;
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {currentMembers.map((member) => (
              <div 
                key={member.id} 
                className="bg-navy-light border border-white/10 rounded-xl p-4 flex items-center gap-5 hover:border-brand/30 transition-colors"
              >
                <div
                  className="w-12 h-12 rounded-full border flex items-center justify-center font-display font-bold text-base shrink-0"
                  style={{
                    backgroundColor: `${member.color}33`,
                    borderColor: `${member.color}66`,
                    color: member.color
                  }}
                >
                  {member.initials}
                </div>
                
                <div className="flex-1 flex gap-6 items-center flex-wrap">
                  <div>
                    <h3 className="font-bold text-ivory text-sm">{member.name}</h3>
                    <p className="text-ivory/50 text-xs mt-0.5">{member.role} at {member.company}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 text-xs text-ivory/40">
                      <MapPin size={12} className="text-brand/60" />
                      {member.location}
                    </div>
                    <div className="text-xs text-[#3158A7] bg-[#3158A7]/20 px-2 py-0.5 rounded-full border border-[#3158A7]/30">
                      {member.industry}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-5 shrink-0">
                  <div className="flex items-center gap-1 hidden sm:flex">
                    <Star size={12} className="text-yellow-400 fill-current" />
                    <span className="text-xs text-ivory/50">{member.rating}</span>
                  </div>
                  <Button variant="primary" size="sm">
                    View Profile
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="mt-10 flex justify-center gap-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              Prev
            </Button>
            
            <div className="flex gap-2 overflow-x-auto scrollbar-hide max-w-[60vw]">
              {Array.from({ length: totalPages }).map((_, i) => {
                const page = i + 1;
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={cn(
                      "w-10 h-10 square rounded-xl flex items-center justify-center font-medium transition-colors shrink-0",
                      currentPage === page
                        ? "bg-brand text-white"
                        : "border border-white/15 text-ivory/50 hover:border-brand/40 hover:text-brand"
                    )}
                  >
                    {page}
                  </button>
                )
              })}
            </div>

            <Button
              variant="secondary"
              size="sm"
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        )}

      </div>
    </section>
  )
}
