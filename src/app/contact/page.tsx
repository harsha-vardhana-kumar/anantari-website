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
  orange: { bg: 'bg-brand/15', text: 'text-brand', border: 'border-brand/30' },
  blue: { bg: 'bg-[#3158A7]/15', text: 'text-[#3158A7]', border: 'border-[#3158A7]/30' },
  gold: { bg: 'bg-gold/15', text: 'text-gold', border: 'border-gold/30' }
}

const inputClass =
  'w-full bg-navy border border-white/15 rounded-xl px-4 py-3.5 text-ivory text-sm placeholder:text-ivory/25 focus:outline-none focus:border-brand/60 focus:ring-1 focus:ring-brand/20 transition'

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
    <main className="min-h-screen bg-navy">
      {/* Hero */}
      <section className="py-24 px-6 text-center relative overflow-hidden pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(49,88,167,0.2),transparent)] pointer-events-none" />
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 border border-brand bg-brand/10 text-brand rounded-full px-5 py-2 text-sm mb-6"
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
            className="text-ivory/60 text-xl mt-5 max-w-xl mx-auto"
          >
            Whether you have a question, a partnership idea, or just want to say hello — we&apos;re here.
          </motion.p>
        </div>
      </section>

      {/* Content */}
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
                    className="bg-navy-mid border border-white/10 rounded-2xl p-5 flex gap-4 items-start"
                  >
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 border ${colors.bg} ${colors.border}`}>
                      <Icon size={18} className={colors.text} />
                    </div>
                    <div>
                      <p className="text-ivory/40 text-xs uppercase tracking-widest">{item.label}</p>
                      <p className="text-ivory text-sm mt-0.5 leading-relaxed whitespace-pre-line">{item.value}</p>
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
              <p className="text-ivory/30 text-xs uppercase tracking-widest mb-3">Follow our journey</p>
              <div className="flex items-center gap-3 flex-wrap">
                {SOCIAL_ICONS.map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-10 h-10 rounded-full border border-white/20 text-ivory flex items-center justify-center hover:bg-white/10 hover:border-brand/40 transition-all duration-200"
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
            <div className="bg-navy-mid border border-white/10 rounded-3xl p-8">
              <h2 className="font-cormorant text-2xl font-bold text-ivory mb-6">Send Us a Message</h2>

              {sent ? (
                <div className="bg-green-900/20 border border-green-700/30 rounded-xl p-5 text-center">
                  <p className="text-green-300 text-base font-medium">Message Sent! We&apos;ll reply within 24 hours ✓</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="text-ivory/60 text-xs font-medium mb-1.5 block">Your Name</label>
                    <input
                      className={inputClass}
                      placeholder="Priya Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-ivory/60 text-xs font-medium mb-1.5 block">Email Address</label>
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
                    <label className="text-ivory/60 text-xs font-medium mb-1.5 block">Subject</label>
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
                    <label className="text-ivory/60 text-xs font-medium mb-1.5 block">Message</label>
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
                    className="text-ivory/40 text-xs hover:text-ivory/70 cursor-pointer transition-colors"
                  >
                    📎 Add attachment
                  </button>
                  <Button type="submit" variant="primary" className="w-full justify-center gap-2">
                    Send Message
                    <Send size={16} />
                  </Button>
                </form>
              )}

              <p className="text-ivory/30 text-xs text-center mt-4">
                We respond to all messages within 24 business hours.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
