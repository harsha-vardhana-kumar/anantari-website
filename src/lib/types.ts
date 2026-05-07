// filepath: src/lib/types.ts
export interface NavLink {
  label: string
  href: string
}

export interface Stat {
  value: number
  prefix?: string
  suffix?: string
  label: string
}

export interface Service {
  iconName: string
  title: string
  description: string
}

export interface Testimonial {
  quote: string
  name: string
  business: string
  city: string
}

export interface TeamMember {
  name: string
  role: string
  image: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface CoreValue {
  number: string
  value: string
  description: string
}

export interface PricingTier {
  name: string
  price: string
  description: string
  features: string[]
  notIncluded: string[]
  highlighted: boolean
  cta: string
}

export interface ProcessStep {
  step: string
  title: string
  description: string
  icon: string
}

export interface ServiceCategory {
  id: string
  label: string
  icon: string
  heading: string
  subheading: string
  points: string[]
  image: string
}

export interface Member {
  name: string
  business: string
  category: string
  city: string
  verified: boolean
  image: string
  tagline: string
}

export interface Industry {
  iconName: string
  name: string
  count: number
}

export interface DirectoryStat {
  value: number
  suffix?: string
  label: string
}
