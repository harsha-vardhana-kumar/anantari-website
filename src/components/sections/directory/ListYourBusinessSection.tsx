'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

export default function ListYourBusinessSection() {
  const [formData, setFormData] = useState({
    businessName: '',
    name: '',
    industry: 'Technology',
    email: '',
    phone: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = () => {
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        businessName: '',
        name: '',
        industry: 'Technology',
        email: '',
        phone: ''
      })
    }, 3000)
  }

  return (
    <section className="py-20 px-6 bg-ivory border-y border-navy/10 relative overflow-hidden">
      <div className="max-w-5xl mx-auto bg-navy border border-white/10 shadow-[0_20px_60px_rgba(13,31,60,0.15)] rounded-3xl p-12 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* LEFT */}
        <div>
          <span className="text-brand text-xs uppercase tracking-widest font-semibold">
            List Your Business
          </span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ivory">
            Get Discovered by<br />
            <span className="italic text-brand text-3xl md:text-4xl">2,400+ Women</span>
          </h2>
          <p className="text-ivory/60 text-sm leading-relaxed mt-4">
            Add your business to Anantari&apos;s verified directory. Reach thousands of potential clients, collaborators, and partners actively looking for women-owned businesses.
          </p>
          
          <div className="mt-6 space-y-3">
            {[
              "Verified badge on your profile",
              "Featured in search results",
              "Direct inquiry messages",
              "Monthly analytics report"
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-brand/20 flex items-center justify-center text-brand shrink-0">
                  <Check size={12} strokeWidth={3} />
                </div>
                <span className="text-ivory/70 text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-[#0f2044] border border-white/10 shadow-xl rounded-2xl p-6">
          <h3 className="text-ivory font-semibold mb-5 text-lg">Create Free Listing</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-ivory/60 text-xs mb-1.5">Business Name</label>
              <input
                type="text"
                placeholder="Your company name"
                value={formData.businessName}
                onChange={(e) => setFormData(f => ({ ...f, businessName: e.target.value }))}
                className="w-full bg-[#1a3560] border border-white/10 rounded-xl px-4 py-3 text-ivory text-sm placeholder:text-ivory/25 focus:outline-none focus:border-brand/50 transition-colors"
              />
            </div>
            
            <div>
              <label className="block text-ivory/60 text-xs mb-1.5">Your Name</label>
              <input
                type="text"
                placeholder="Full name"
                value={formData.name}
                onChange={(e) => setFormData(f => ({ ...f, name: e.target.value }))}
                className="w-full bg-[#1a3560] border border-white/10 rounded-xl px-4 py-3 text-ivory text-sm placeholder:text-ivory/25 focus:outline-none focus:border-brand/50 transition-colors"
              />
            </div>
            
            <div>
              <label className="block text-ivory/60 text-xs mb-1.5">Industry</label>
              <select
                value={formData.industry}
                onChange={(e) => setFormData(f => ({ ...f, industry: e.target.value }))}
                className="w-full bg-[#1a3560] border border-white/10 rounded-xl px-4 py-3 text-ivory/90 text-sm focus:outline-none focus:border-brand/50 appearance-none cursor-pointer transition-colors"
              >
                <option>Technology</option>
                <option>Finance</option>
                <option>Healthcare</option>
                <option>Education</option>
                <option>Consulting</option>
                <option>Retail</option>
              </select>
            </div>
            
            <div>
              <label className="block text-ivory/60 text-xs mb-1.5">Email</label>
              <input
                type="email"
                placeholder="hello@example.com"
                value={formData.email}
                onChange={(e) => setFormData(f => ({ ...f, email: e.target.value }))}
                className="w-full bg-[#1a3560] border border-white/10 rounded-xl px-4 py-3 text-ivory text-sm placeholder:text-ivory/25 focus:outline-none focus:border-brand/50 transition-colors"
              />
            </div>
            
            <div>
              <label className="block text-ivory/60 text-xs mb-1.5">Phone (Optional)</label>
              <div className="flex relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-ivory/40 text-sm">+91</span>
                <input
                  type="tel"
                  placeholder="00000 00000"
                  value={formData.phone}
                  onChange={(e) => setFormData(f => ({ ...f, phone: e.target.value }))}
                  className="w-full bg-[#1a3560] border border-white/10 rounded-xl pl-12 pr-4 py-3 text-ivory text-sm placeholder:text-ivory/25 focus:outline-none focus:border-brand/50 transition-colors"
                />
              </div>
            </div>

            <Button
              variant="primary"
              className={cn("w-full justify-center transition-all", isSubmitted ? "bg-green-600 text-white hover:bg-green-700" : "")}
              onClick={handleSubmit}
            >
              {isSubmitted ? "Submitted Successfully!" : (
                <>Submit Free Listing <ArrowRight size={16} /></>
              )}
            </Button>

            <p className="text-ivory/30 text-xs text-center mt-3">
              Free forever · Verified within 48 hours
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
