// filepath: src/components/sections/directory/ListBusinessCTA.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { CheckCircle, ArrowRight } from 'lucide-react'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import Button from '@/components/ui/Button'
import { MEMBERS, QUICK_FILTERS } from '@/lib/constants'
import { cn } from '@/lib/utils'

const BENEFITS = [
  'Free to list — no credit card required',
  'Verified badge after certification',
  'Direct inquiry inbox included',
  'Show up in buyer procurement searches'
]

// First 3 members for the avatar trust strip
const AVATAR_MEMBERS = MEMBERS.slice(0, 3)

interface FormState {
  name: string
  business: string
  email: string
  category: string
}

export default function ListBusinessCTA() {
  const [form, setForm] = useState<FormState>({
    name: '',
    business: '',
    email: '',
    category: ''
  })
  const [showSuccess, setShowSuccess] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  function validate(): boolean {
    const newErrors: Record<string, string> = {}
    if (!form.name.trim()) newErrors.name = 'This field is required'
    if (!form.business.trim()) newErrors.business = 'This field is required'
    if (!form.email.trim()) {
      newErrors.email = 'This field is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!form.category) newErrors.category = 'This field is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (validate()) {
      setShowSuccess(true)
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const inputBase =
    'w-full bg-white/5 border rounded-xl px-4 py-3 font-dm text-sm text-ivory placeholder:text-white/20 outline-none focus:bg-white/[0.08] transition-all duration-200'

  return (
    <section className="relative bg-navy py-24 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=1400&q=80"
          alt=""
          fill
          className="object-cover opacity-[0.06]"
        />
      </div>

      {/* Decorative SVG arcs */}
      <div
        className="absolute left-0 bottom-0 w-96 h-96 opacity-10 pointer-events-none z-0"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M 0 400 A 150 150 0 0 1 150 250"
            stroke="#C9913A"
            strokeWidth="0.8"
            fill="none"
            strokeDasharray="4 8"
          />
          <path
            d="M 0 400 A 250 250 0 0 1 250 150"
            stroke="#C9913A"
            strokeWidth="0.8"
            fill="none"
          />
          <path
            d="M 0 400 A 350 350 0 0 1 350 50"
            stroke="#C9913A"
            strokeWidth="0.8"
            fill="none"
          />
        </svg>
      </div>

      {/* Main content grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto px-6">
        {/* LEFT — pitch text */}
        <RevealOnScroll>
          <div>
            {/* Label */}
            <p className="font-dm text-xs text-gold tracking-[0.2em] uppercase mb-4">
              List Your Business
            </p>

            {/* Heading */}
            <h2 className="font-cormorant font-bold text-4xl md:text-5xl text-ivory leading-tight">
              Get Discovered by
              <br />
              12,000+ Buyers &amp; Partners
            </h2>

            {/* Body */}
            <p className="font-dm text-muted text-base leading-relaxed mt-6">
              Add your business to India&apos;s most trusted women-owned business directory. Get
              found by procurement teams, investors, and collaborators actively searching for women
              entrepreneurs like you.
            </p>

            {/* Benefits */}
            <ul className="mt-8 space-y-4">
              {BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-gold flex-shrink-0 mt-0.5" />
                  <span className="font-dm text-sm text-ivory/80">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Trust avatars */}
            <div className="mt-8 flex items-center gap-3 pt-6 border-t border-white/10">
              <div className="flex">
                {AVATAR_MEMBERS.map((member, i) => (
                  <div
                    key={member.name}
                    className={cn(
                      'w-8 h-8 rounded-full ring-2 ring-navy overflow-hidden flex-shrink-0',
                      i > 0 && '-ml-2'
                    )}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={32}
                      height={32}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
              <p className="font-dm text-xs text-muted">Join 12,000+ women already listed</p>
            </div>
          </div>
        </RevealOnScroll>

        {/* RIGHT — mini form */}
        <RevealOnScroll delay={200}>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm">
            {showSuccess ? (
              /* Success state */
              <div className="text-center py-8">
                <CheckCircle size={48} className="text-gold mx-auto mb-4" />
                <h3 className="font-cormorant font-bold text-2xl text-ivory">
                  You&apos;re on the list!
                </h3>
                <p className="font-dm text-sm text-muted mt-2">
                  We&apos;ll be in touch within 24 hours to get your profile live.
                </p>
                <button
                  onClick={() => {
                    setShowSuccess(false)
                    setForm({ name: '', business: '', email: '', category: '' })
                  }}
                  className="mt-6 font-dm text-xs text-gold underline"
                >
                  Submit another business
                </button>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} noValidate>
                <h3 className="font-cormorant font-semibold text-xl text-ivory mb-2">
                  List Your Business
                </h3>
                <p className="font-dm text-xs text-muted mb-8">
                  Takes less than 2 minutes. Free forever.
                </p>

                <div className="space-y-5">
                  {/* Full Name */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="list-name"
                      className="font-dm text-[11px] text-ivory/50 tracking-[0.1em] uppercase"
                    >
                      Full Name
                    </label>
                    <input
                      id="list-name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      className={cn(
                        inputBase,
                        errors.name
                          ? 'border-red-400/50 focus:border-red-400/70'
                          : 'border-white/10 focus:border-gold/50'
                      )}
                    />
                    {errors.name && (
                      <span className="font-dm text-[11px] text-red-400">{errors.name}</span>
                    )}
                  </div>

                  {/* Business Name */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="list-business"
                      className="font-dm text-[11px] text-ivory/50 tracking-[0.1em] uppercase"
                    >
                      Business Name
                    </label>
                    <input
                      id="list-business"
                      name="business"
                      type="text"
                      placeholder="Business name"
                      value={form.business}
                      onChange={handleChange}
                      className={cn(
                        inputBase,
                        errors.business
                          ? 'border-red-400/50 focus:border-red-400/70'
                          : 'border-white/10 focus:border-gold/50'
                      )}
                    />
                    {errors.business && (
                      <span className="font-dm text-[11px] text-red-400">{errors.business}</span>
                    )}
                  </div>

                  {/* Email Address */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="list-email"
                      className="font-dm text-[11px] text-ivory/50 tracking-[0.1em] uppercase"
                    >
                      Email Address
                    </label>
                    <input
                      id="list-email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      className={cn(
                        inputBase,
                        errors.email
                          ? 'border-red-400/50 focus:border-red-400/70'
                          : 'border-white/10 focus:border-gold/50'
                      )}
                    />
                    {errors.email && (
                      <span className="font-dm text-[11px] text-red-400">{errors.email}</span>
                    )}
                  </div>

                  {/* Industry Category */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="list-category"
                      className="font-dm text-[11px] text-ivory/50 tracking-[0.1em] uppercase"
                    >
                      Industry Category
                    </label>
                    <select
                      id="list-category"
                      name="category"
                      value={form.category}
                      onChange={handleChange}
                      aria-label="Select industry category"
                      className={cn(
                        inputBase,
                        'cursor-pointer',
                        errors.category
                          ? 'border-red-400/50 focus:border-red-400/70'
                          : 'border-white/10 focus:border-gold/50'
                      )}
                    >
                      <option value="" className="bg-navy">
                        Select category...
                      </option>
                      {QUICK_FILTERS.map((f) => (
                        <option key={f} value={f} className="bg-navy">
                          {f}
                        </option>
                      ))}
                    </select>
                    {errors.category && (
                      <span className="font-dm text-[11px] text-red-400">{errors.category}</span>
                    )}
                  </div>
                </div>

                {/* Submit */}
                <div className="mt-6">
                  <Button variant="primary" size="lg" className="w-full justify-center">
                    List My Business
                    <ArrowRight size={16} />
                  </Button>
                </div>

                {/* Fine print */}
                <p className="font-dm text-[11px] text-white/20 text-center mt-4">
                  By submitting you agree to our Terms of Service and Privacy Policy
                </p>
              </form>
            )}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
