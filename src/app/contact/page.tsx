'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import { motion } from 'framer-motion'
import {
  MapPin, Mail, Phone, MessageCircle, Send,
  Instagram, Linkedin, Facebook, Twitter, Youtube
} from 'lucide-react'
import Button from '@/components/ui/Button'

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: 'Our Office',
    value: 'T-Hub, IIIT Hyderabad Campus, Gachibowli, Hyderabad — 500032',
    color: 'orange'
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'hello@anantari.in',
    color: 'blue'
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '+91 98765 43210\nMon–Fri, 9AM–6PM IST',
    color: 'gold'
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat with us instantly on WhatsApp',
    color: 'orange',
    action: 'Open WhatsApp →'
  }
]

const SOCIAL_ICONS = [
  { Icon: Twitter, label: 'Twitter' },
  { Icon: Linkedin, label: 'LinkedIn' },
  { Icon: Instagram, label: 'Instagram' },
  { Icon: Facebook, label: 'Facebook' },
  { Icon: Youtube, label: 'YouTube' }
]

const SUBJECTS = [
  'General Inquiry', 'Partnership', 'Media/Press',
  'Membership Help', 'Speaker/Event Request', 'Feedback', 'Other'
]

const colorIconMap = {
  orange: { bg: 'bg-brand/10', text: 'text-brand', border: 'border-brand/20' },
  blue: { bg: 'bg-[#3158A7]/10', text: 'text-[#3158A7]', border: 'border-[#3158A7]/20' },
  gold: { bg: 'bg-gold/10', text: 'text-gold', border: 'border-gold/20' }
}

const inputClass =
  'w-full bg-ivory-dark border border-navy/20 rounded-xl px-4 py-3.5 text-navy text-sm placeholder:text-navy/30 focus:outline-none focus:border-brand/60 focus:ring-1 focus:ring-brand/20 transition'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main className="min-h-screen bg-ivory">
      {/* Hero — dark navy */}
      <section className="bg-navy py-24 px-6 text-center relative overflow-hidden pt-40">
        
        {/* Decorative SVG - Contact Motif (Communication Signals / Waves) */}
        <div
          className="absolute inset-0 w-full h-full opacity-15 pointer-events-none z-0"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 1200 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Origin Point */}
            <circle cx="100" cy="500" r="10" stroke="#C9913A" strokeWidth="2" fill="none" />
            <circle cx="100" cy="500" r="4" fill="#ffffff" />
            
            {/* Radiating communication waves */}
            <path d="M250 500 A 150 150 0 0 0 100 350" stroke="#C9913A" strokeWidth="1" fill="none" />
            <path d="M450 500 A 350 350 0 0 0 100 150" stroke="#ffffff" strokeWidth="0.5" fill="none" strokeDasharray="6 12" />
            <path d="M700 500 A 600 600 0 0 0 100 -100" stroke="#C9913A" strokeWidth="0.5" fill="none" />
            
            {/* Incoming signals */}
            <path d="M1200 100 Q800 300 400 600" stroke="#ffffff" strokeWidth="0.5" fill="none" opacity="0.3" />
            <path d="M1300 200 Q900 400 500 700" stroke="#C9913A" strokeWidth="0.5" fill="none" strokeDasharray="2 10" />
          </svg>
        </div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-dm px-4 py-1.5 tracking-widest uppercase mb-6"
          >
            Get In Touch
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-cormorant text-5xl md:text-6xl font-bold text-ivory leading-tight"
          >
            We&apos;d Love to{' '}
            <span className="italic text-brand block">Hear From You</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-muted text-xl mt-5 max-w-xl mx-auto"
          >
            Whether you have a question, a partnership idea, or just want to say hello — we&apos;re here.
          </motion.p>
        </div>
      </section>

      {/* Content — light ivory */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* LEFT — contact info */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {CONTACT_INFO.map((item, idx) => {
                const colors = colorIconMap[item.color as keyof typeof colorIconMap]
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="bg-white border border-navy/[0.08] rounded-2xl p-5 flex gap-4 items-start shadow-sm hover:shadow-md hover:border-gold/20 transition-all duration-300"
                  >
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 border ${colors.bg} ${colors.border}`}>
                      <Icon size={18} className={colors.text} />
                    </div>
                    <div>
                      <p className="text-navy/40 text-xs uppercase tracking-widest">{item.label}</p>
                      <p className="text-navy text-sm mt-0.5 leading-relaxed whitespace-pre-line">{item.value}</p>
                      {item.action && (
                        <button className="text-brand text-sm mt-1 hover:underline">{item.action}</button>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-6"
            >
              <p className="text-navy/40 text-xs uppercase tracking-widest mb-3">Follow our journey</p>
              <div className="flex items-center gap-3 flex-wrap">
                {SOCIAL_ICONS.map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-10 h-10 rounded-full border border-navy/15 text-navy/60 flex items-center justify-center hover:bg-navy/5 hover:border-gold/40 hover:text-navy transition-all duration-200"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT — contact form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white border border-navy/[0.08] rounded-3xl p-8 shadow-sm">
              <h2 className="font-cormorant text-2xl font-bold text-navy mb-6">Send Us a Message</h2>

              {sent ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-center">
                  <p className="text-green-700 text-base font-medium">Message Sent! We&apos;ll reply within 24 hours ✓</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="text-navy/60 text-xs font-medium mb-1.5 block">Your Name</label>
                    <input
                      className={inputClass}
                      placeholder="Priya Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-navy/60 text-xs font-medium mb-1.5 block">Email Address</label>
                    <input
                      type="email"
                      className={inputClass}
                      placeholder="priya@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-navy/60 text-xs font-medium mb-1.5 block">Subject</label>
                    <select
                      className={inputClass}
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                    >
                      <option value="">Select a subject</option>
                      {SUBJECTS.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-navy/60 text-xs font-medium mb-1.5 block">Message</label>
                    <textarea
                      className={`${inputClass} resize-none`}
                      rows={6}
                      placeholder="Tell us how we can help..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    type="button"
                    className="text-navy/40 text-xs hover:text-navy/70 cursor-pointer transition-colors"
                  >
                    📎 Add attachment
                  </button>
                  <Button type="submit" variant="primary" className="w-full justify-center gap-2">
                    Send Message
                    <Send size={16} />
                  </Button>
                </form>
              )}

              <p className="text-navy/30 text-xs text-center mt-4">
                We respond to all messages within 24 business hours.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

