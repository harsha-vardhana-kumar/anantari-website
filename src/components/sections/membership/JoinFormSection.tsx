'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Check, CheckCircle2, MessageCircle } from 'lucide-react'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const PLANS = [
  {
    name: 'Community',
    price: '₹499',
    color: '#3158A7',
    features: ['Directory listing', 'Community forums', '2 free events/year']
  },
  {
    name: 'Growth',
    price: '₹1,499',
    color: '#EE670D',
    features: ['Mentorship matching', 'Unlimited events', 'Funding introductions'],
    popular: true
  },
  {
    name: 'Elite',
    price: '₹3,499',
    color: '#C9A84C',
    features: ['Dedicated manager', 'Speaking opportunities', 'Leadership retreat']
  }
]

const COUNTRIES = ['India', 'UAE', 'USA', 'UK', 'Singapore', 'Other']
const INDUSTRIES = [
  'Technology', 'Healthcare', 'Fashion & Lifestyle', 'Education',
  'Food & Agriculture', 'Finance', 'Construction', 'Media & Marketing',
  'Logistics', 'Sustainability', 'Beauty & Wellness', 'Real Estate'
]
const EXPERIENCE_OPTIONS = ['0-2 years', '3-5 years', '6-10 years', '10-15 years', '15+']
const HEAR_OPTIONS = ['Social Media', 'Word of Mouth', 'Google', 'Event', 'Existing Member', 'Other']

type FormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  city: string
  country: string
  profession: string
  organization: string
  industry: string
  experience: string
  bio: string
  heardAbout: string
}

const STEP_LABELS = ['Personal', 'Business', 'Plan']

const inputClass =
  'w-full bg-navy border border-white/15 rounded-xl px-4 py-3.5 text-ivory text-sm placeholder:text-ivory/25 focus:outline-none focus:border-brand/60 focus:ring-1 focus:ring-brand/20 transition'

export default function JoinFormSection() {
  const [step, setStep] = useState(1)
  const [success, setSuccess] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState('Growth')
  const [agreed, setAgreed] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    firstName: '', lastName: '', email: '', phone: '',
    city: '', country: 'India', profession: '', organization: '',
    industry: '', experience: '', bio: '', heardAbout: ''
  })

  const update = (key: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFormData((prev) => ({ ...prev, [key]: e.target.value }))

  const handleFinalSubmit = () => {
    setSuccess(true)
  }

  if (success) {
    return (
      <section className="py-24 px-6 bg-navy">
        <div className="max-w-lg mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="w-20 h-20 rounded-full bg-green-900/40 border-2 border-green-500 flex items-center justify-center mx-auto"
          >
            <CheckCircle2 size={40} className="text-green-400" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-cormorant text-3xl font-bold text-ivory mt-6"
          >
            Welcome to Anantari! 🎉
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-ivory/60 text-base mt-3"
          >
            Check your email at <span className="text-brand">{formData.email || 'your inbox'}</span> for your
            login details and onboarding guide.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6"
          >
            <Button variant="secondary" className="gap-2">
              <MessageCircle size={16} />
              Join our WhatsApp Community
            </Button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 px-6 bg-navy">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block border border-gold/30 bg-gold/10 text-gold text-xs font-medium px-4 py-1.5 rounded-full tracking-widest uppercase mb-4"
          >
            Get Started
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-cormorant text-4xl font-bold text-ivory"
          >
            Join Anantari Today
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex flex-wrap items-center justify-center gap-2 mt-3 text-ivory/50 text-sm"
          >
            <CheckCircle2 size={14} className="text-green-400 flex-shrink-0" />
            7-day free trial
            <CheckCircle2 size={14} className="text-green-400 flex-shrink-0" />
            No credit card required
            <CheckCircle2 size={14} className="text-green-400 flex-shrink-0" />
            Cancel anytime
          </motion.div>
        </div>

        {/* Progress bar */}
        <div className="mb-10 max-w-sm mx-auto flex items-center gap-0">
          {STEP_LABELS.map((label, i) => {
            const s = i + 1
            const isActive = step === s
            const isCompleted = step > s
            return (
              <div key={label} className="flex items-center flex-1 last:flex-none">
                <div className="flex flex-col items-center">
                  <div
                    className={cn(
                      'w-9 h-9 rounded-full flex items-center justify-center text-sm transition-all',
                      isCompleted
                        ? 'bg-brand/20 text-brand border border-brand'
                        : isActive
                        ? 'bg-brand text-white'
                        : 'bg-navy-mid border border-white/15 text-ivory/30'
                    )}
                  >
                    {isCompleted ? <Check size={14} /> : s}
                  </div>
                  <span className="text-xs text-ivory/40 mt-1">{label}</span>
                </div>
                {i < STEP_LABELS.length - 1 && (
                  <div className={cn('flex-1 h-px mx-2 mb-5 transition-colors', step > s ? 'bg-brand/40' : 'bg-white/10')} />
                )}
              </div>
            )
          })}
        </div>

        {/* STEP 1 */}
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-navy-mid border border-white/10 rounded-3xl p-8"
            >
              <h3 className="font-cormorant text-xl font-bold text-ivory mb-6">Tell us about yourself</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-ivory/60 text-xs font-medium mb-1.5 block">First Name *</label>
                  <input className={inputClass} placeholder="Priya" value={formData.firstName} onChange={update('firstName')} />
                </div>
                <div>
                  <label className="text-ivory/60 text-xs font-medium mb-1.5 block">Last Name *</label>
                  <input className={inputClass} placeholder="Sharma" value={formData.lastName} onChange={update('lastName')} />
                </div>
                <div className="md:col-span-2">
                  <label className="text-ivory/60 text-xs font-medium mb-1.5 block">Email Address *</label>
                  <input type="email" className={inputClass} placeholder="priya@example.com" value={formData.email} onChange={update('email')} />
                </div>
                <div>
                  <label className="text-ivory/60 text-xs font-medium mb-1.5 block">Phone Number</label>
                  <div className="flex gap-2">
                    <span className="bg-navy border border-white/15 rounded-xl px-3 py-3.5 text-ivory/60 text-sm flex-shrink-0">+91</span>
                    <input className={inputClass} placeholder="98765 43210" value={formData.phone} onChange={update('phone')} />
                  </div>
                </div>
                <div>
                  <label className="text-ivory/60 text-xs font-medium mb-1.5 block">City</label>
                  <input className={inputClass} placeholder="Hyderabad" value={formData.city} onChange={update('city')} />
                </div>
                <div className="md:col-span-2">
                  <label className="text-ivory/60 text-xs font-medium mb-1.5 block">Country</label>
                  <select className={inputClass} value={formData.country} onChange={update('country')}>
                    {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </div>
              <Button variant="primary" className="w-full justify-center mt-6 gap-2" onClick={() => setStep(2)}>
                Continue <ArrowRight size={16} />
              </Button>
            </motion.div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-navy-mid border border-white/10 rounded-3xl p-8"
            >
              <h3 className="font-cormorant text-xl font-bold text-ivory mb-6">Your Business / Career</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-ivory/60 text-xs font-medium mb-1.5 block">Profession / Role</label>
                  <input className={inputClass} placeholder="Founder & CEO" value={formData.profession} onChange={update('profession')} />
                </div>
                <div>
                  <label className="text-ivory/60 text-xs font-medium mb-1.5 block">Organisation / Company</label>
                  <input className={inputClass} placeholder="Your Company" value={formData.organization} onChange={update('organization')} />
                </div>
                <div>
                  <label className="text-ivory/60 text-xs font-medium mb-1.5 block">Industry</label>
                  <select className={inputClass} value={formData.industry} onChange={update('industry')}>
                    <option value="">Select industry</option>
                    {INDUSTRIES.map((i) => <option key={i} value={i}>{i}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-ivory/60 text-xs font-medium mb-1.5 block">Years of Experience</label>
                  <select className={inputClass} value={formData.experience} onChange={update('experience')}>
                    <option value="">Select</option>
                    {EXPERIENCE_OPTIONS.map((e) => <option key={e} value={e}>{e}</option>)}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="text-ivory/60 text-xs font-medium mb-1.5 block">Brief Bio</label>
                  <textarea
                    className={`${inputClass} resize-none`}
                    rows={4}
                    placeholder="Tell us a little about yourself..."
                    maxLength={200}
                    value={formData.bio}
                    onChange={update('bio')}
                  />
                  <p className="text-ivory/30 text-xs text-right mt-1">{formData.bio.length}/200</p>
                </div>
                <div className="md:col-span-2">
                  <label className="text-ivory/60 text-xs font-medium mb-1.5 block">How did you hear about us?</label>
                  <select className={inputClass} value={formData.heardAbout} onChange={update('heardAbout')}>
                    <option value="">Select</option>
                    {HEAR_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                <Button variant="ghost" onClick={() => setStep(1)}>← Back</Button>
                <Button variant="primary" className="flex-1 justify-center gap-2" onClick={() => setStep(3)}>
                  Continue <ArrowRight size={16} />
                </Button>
              </div>
            </motion.div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-navy-mid border border-white/10 rounded-3xl p-8"
            >
              <h3 className="font-cormorant text-xl font-bold text-ivory mb-6">Choose Your Membership</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {PLANS.map((plan) => (
                  <div
                    key={plan.name}
                    onClick={() => setSelectedPlan(plan.name)}
                    className={cn(
                      'cursor-pointer border rounded-2xl p-5 transition-all duration-200 relative',
                      selectedPlan === plan.name
                        ? 'border-brand bg-brand/5 shadow-[0_0_20px_rgba(238,103,13,0.15)]'
                        : 'bg-navy border-white/10 hover:border-white/25'
                    )}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-white text-xs rounded-full px-3 py-0.5 whitespace-nowrap">
                        Most Popular
                      </div>
                    )}
                    <div className="flex items-center justify-between">
                      <p className="font-cormorant font-bold text-ivory">{plan.name}</p>
                      <div
                        className={cn(
                          'w-5 h-5 rounded-full border flex items-center justify-center transition-all',
                          selectedPlan === plan.name ? 'bg-brand border-brand' : 'border-white/20'
                        )}
                      >
                        {selectedPlan === plan.name && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                    </div>
                    <p className="font-cormorant text-3xl font-bold mt-3" style={{ color: plan.color }}>
                      {plan.price}
                      <span className="text-ivory/40 text-xs font-sans">/month</span>
                    </p>
                    <ul className="space-y-1.5 mt-4">
                      {plan.features.map((f) => (
                        <li key={f} className="text-xs text-ivory/50 flex items-center gap-1.5">
                          <span style={{ color: plan.color }}>✓</span> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Free trial note */}
              <div className="bg-green-900/20 border border-green-700/30 rounded-xl p-4 mt-6 flex items-start gap-3">
                <CheckCircle2 size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-green-300/70 text-sm leading-relaxed">
                  Start with a 7-day free trial. Your card won&apos;t be charged until day 8. Cancel anytime before then.
                </p>
              </div>

              {/* Terms checkbox */}
              <div className="flex items-start gap-3 mt-5">
                <div
                  onClick={() => setAgreed((v) => !v)}
                  className={cn(
                    'w-5 h-5 border rounded cursor-pointer flex items-center justify-center flex-shrink-0 mt-0.5 transition-all',
                    agreed ? 'bg-brand border-brand' : 'border-white/30'
                  )}
                >
                  {agreed && <Check size={12} className="text-white" />}
                </div>
                <p className="text-ivory/50 text-sm">
                  I agree to Anantari&apos;s Terms of Service and Privacy Policy. I am 18+ years old.
                </p>
              </div>

              <div className="flex gap-4 mt-6">
                <Button variant="ghost" onClick={() => setStep(2)}>← Back</Button>
                <Button
                  variant="primary"
                  className="flex-1 justify-center gap-2"
                  onClick={handleFinalSubmit}
                  disabled={!agreed}
                >
                  Start Free Trial <ArrowRight size={16} />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
