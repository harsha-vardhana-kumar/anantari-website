// filepath: src/lib/constants.ts
import type {
  NavLink,
  Stat,
  Service,
  Testimonial,
  CoreValue,
  TeamMember,
  PricingTier,
  ProcessStep,
  FAQ,
  ServiceCategory,
  Member,
  Industry,
  DirectoryStat
} from './types'

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Directory', href: '/directory' },
  { label: 'Events', href: '/events' },
  { label: 'Stories', href: '/stories' },
  { label: 'Membership', href: '/membership' },
  { label: 'Contact', href: '/contact' }
]

export const STATS: Stat[] = [
  { value: 12000, suffix: '+', label: 'Women Entrepreneurs' },
  { value: 480, suffix: '+', label: 'Cities Covered' },
  { value: 38, label: 'Industries Represented' },
  { value: 240, prefix: '₹', suffix: 'Cr+', label: 'Deals Facilitated' }
]

export const SERVICES: Service[] = [
  {
    iconName: 'Building2',
    title: 'Business Certification',
    description:
      'Get your women-owned business officially certified and gain access to exclusive procurement opportunities.'
  },
  {
    iconName: 'Users',
    title: 'Member Directory',
    description:
      'Join a curated network of verified women entrepreneurs across 38 industries and 480+ cities.'
  },
  {
    iconName: 'GraduationCap',
    title: 'Mentorship Programs',
    description:
      'Connect with seasoned business leaders for one-on-one guidance tailored to your growth goals.'
  },
  {
    iconName: 'Calendar',
    title: 'Events & Workshops',
    description:
      'Attend high-value summits, masterclasses, and networking events designed for women in business.'
  },
  {
    iconName: 'TrendingUp',
    title: 'Funding Connect',
    description:
      'Get matched with investors, grants, and financial institutions actively seeking women-led ventures.'
  },
  {
    iconName: 'Megaphone',
    title: 'Policy Advocacy',
    description:
      'Benefit from our active engagement with government and industry bodies to shape policies for women entrepreneurs.'
  }
]

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Anantari completely transformed how I approach business growth. Within six months of joining, I secured two major government contracts I would never have found on my own.',
    name: 'Priya Reddy',
    business: 'Reddy Organics Pvt. Ltd.',
    city: 'Hyderabad'
  },
  {
    quote:
      'The mentorship programme connected me with a CFO who helped me restructure my entire financial model. The ROI on my membership has been extraordinary.',
    name: 'Meera Nambiar',
    business: 'Nambiar Tech Solutions',
    city: 'Bengaluru'
  },
  {
    quote:
      'Being part of this network gave my brand the credibility it needed. The certification opened doors that I had been knocking on for years.',
    name: 'Sonal Agarwal',
    business: 'House of Sonal',
    city: 'Mumbai'
  }
]

export const FOOTER_LINKS: Record<string, { label: string; href: string }[]> = {
  Platform: [
    { label: 'Member Directory', href: '/directory' },
    { label: 'Events', href: '/events' },
    { label: 'Stories', href: '/stories' },
    { label: 'Membership', href: '/membership' }
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Join Anantari', href: '/membership' }
  ],
  Community: [
    { label: 'Mentorship', href: '/services' },
    { label: 'Forums', href: '#' },
    { label: 'Regional Chapters', href: '#' },
    { label: 'Ambassador Program', href: '#' }
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Sitemap', href: '#' }
  ]
}

export const CORE_VALUES: CoreValue[] = [
  {
    number: '01',
    value: 'Integrity',
    description:
      'We hold ourselves to the highest standards of transparency and ethical conduct in everything we do for our community.'
  },
  {
    number: '02',
    value: 'Inclusivity',
    description:
      'Every woman entrepreneur deserves a seat at the table, regardless of industry, city, background, or stage of business.'
  },
  {
    number: '03',
    value: 'Innovation',
    description:
      'We constantly evolve our platform, programmes, and partnerships to stay ahead of what women in business truly need.'
  },
  {
    number: '04',
    value: 'Impact',
    description:
      "Every feature, event, and connection we facilitate is measured by the real-world difference it makes to a woman's business."
  }
]

export const TEAM: TeamMember[] = [
  {
    name: 'Ananya Sharma',
    role: 'Founder & CEO',
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name: 'Kavitha Menon',
    role: 'Chief Operating Officer',
    image: 'https://randomuser.me/api/portraits/women/68.jpg'
  },
  {
    name: 'Divya Krishnan',
    role: 'Head of Partnerships',
    image: 'https://randomuser.me/api/portraits/women/65.jpg'
  },
  {
    name: 'Ritu Agarwal',
    role: 'Director of Programmes',
    image: 'https://randomuser.me/api/portraits/women/90.jpg'
  }
]

export const PARTNERS: string[] = [
  'NASSCOM',
  'CII — Women Network',
  'FICCI FLO',
  'SIDBI',
  'Ministry of MSME',
  'Startup India',
  'NITI Aayog WEP',
  'GIZ India',
  'UN Women India',
  'Tata Trusts'
]

export const PRICING_TIERS: PricingTier[] = [
  {
    name: 'Basic',
    price: 'Free',
    description: 'Perfect for women just starting their entrepreneurial journey.',
    features: [
      'Member directory listing',
      'Access to community forums',
      'Monthly newsletter',
      'Attend 2 free events/year',
      'Basic business profile'
    ],
    notIncluded: [
      'Business certification',
      'Mentorship matching',
      'Funding introductions',
      'Priority event access'
    ],
    highlighted: false,
    cta: 'Get Started Free'
  },
  {
    name: 'Professional',
    price: '₹2,999',
    description: 'For established women entrepreneurs ready to accelerate growth.',
    features: [
      'Everything in Basic',
      'Women-owned business certification',
      'Priority directory placement',
      'Unlimited event access',
      'Mentorship programme matching',
      'Funding partner introductions',
      'Verified profile badge',
      'Quarterly 1:1 advisory call'
    ],
    notIncluded: ['Custom procurement matching', 'Dedicated account manager'],
    highlighted: true,
    cta: 'Join Professional'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For scaling businesses seeking premium access and tailored support.',
    features: [
      'Everything in Professional',
      'Dedicated account manager',
      'Custom procurement matching',
      'Speaking opportunities at events',
      'Featured directory placement',
      'Policy working group access',
      'Co-branding opportunities',
      'Priority certification fast-track'
    ],
    notIncluded: [],
    highlighted: false,
    cta: 'Contact Us'
  }
]

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Apply Online',
    description:
      'Complete our simple online application with your business details, registration documents, and ownership proof. Takes under 15 minutes.',
    icon: 'ClipboardList'
  },
  {
    step: '02',
    title: 'Document Review',
    description:
      'Our verification team reviews your submission within 5 business days. We may request additional documents for clarity.',
    icon: 'Search'
  },
  {
    step: '03',
    title: 'Verification Call',
    description:
      'A brief 20-minute call with our team to confirm details and answer any questions about your business and goals.',
    icon: 'PhoneCall'
  },
  {
    step: '04',
    title: 'Get Certified',
    description:
      'Receive your official Anantari Women-Owned Business Certificate, digital badge, and immediate access to all member benefits.',
    icon: 'BadgeCheck'
  }
]

export const FAQS: FAQ[] = [
  {
    question: 'Who is eligible to join Anantari?',
    answer:
      'Any woman who owns at least 51% of a registered business in India is eligible to join Anantari. We welcome businesses across all industries, from sole proprietorships to private limited companies, at any stage of growth.'
  },
  {
    question: 'How long does the certification process take?',
    answer:
      'The certification process typically takes 7–10 business days from submission to approval. If all documents are in order, many applications are approved faster. You will receive real-time status updates via email throughout the process.'
  },
  {
    question: 'Is the Basic membership really free? Are there hidden charges?',
    answer:
      'Yes, our Basic membership is completely free with no hidden charges. You get access to the member directory, community forums, and 2 free events per year at absolutely no cost. Upgrades to Professional are entirely optional.'
  },
  {
    question: 'What documents are required for certification?',
    answer:
      'You will need your business registration certificate, a government-issued photo ID, proof of majority ownership, and a recent utility bill or bank statement in the business name.'
  },
  {
    question: 'Can I upgrade or downgrade my membership plan?',
    answer:
      'Absolutely. You can upgrade your plan at any time and the new benefits take effect immediately on a pro-rated basis. Downgrades take effect at the end of your current billing cycle.'
  },
  {
    question: 'Do you offer refunds on Professional membership?',
    answer:
      'We offer a full refund within 14 days of purchase if you are not satisfied, no questions asked. After 14 days, refunds are evaluated on a case-by-case basis.'
  }
]

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'certification',
    label: 'Certification',
    icon: 'BadgeCheck',
    heading: 'Women-Owned Business Certification',
    subheading: 'Get officially recognised and unlock procurement opportunities worth crores.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80',
    points: [
      'Internationally recognised women-owned business certification',
      'Access to government and corporate procurement portals',
      'Digital certificate and verified profile badge',
      'Listed in the national WOB procurement database',
      'Annual recertification with updated benefits',
      'Eligibility for exclusive certified-member tenders'
    ]
  },
  {
    id: 'directory',
    label: 'Directory',
    icon: 'LayoutGrid',
    heading: 'Member Business Directory',
    subheading:
      'Get discovered by buyers, partners, and investors actively seeking women-owned businesses.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80',
    points: [
      'Detailed, searchable business profile',
      'Category and location-based discovery',
      'Verified badge for certified members',
      'Priority placement for Professional members',
      'Direct inquiry inbox from potential buyers',
      'Analytics dashboard showing profile views'
    ]
  },
  {
    id: 'mentorship',
    label: 'Mentorship',
    icon: 'GraduationCap',
    heading: 'Mentorship & Advisory Programme',
    subheading: 'Learn from women who have built, scaled, and exited successful businesses.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
    points: [
      'One-on-one mentor matching based on industry and goals',
      'Access to a network of 200+ vetted mentors',
      'Structured 3-month mentorship engagements',
      'Group masterclasses and peer learning circles',
      'Dedicated mentor-mentee tracking portal',
      'Option to become a mentor and give back'
    ]
  },
  {
    id: 'events',
    label: 'Events',
    icon: 'Calendar',
    heading: 'Events, Workshops & Summits',
    subheading:
      "Learn, network, and grow at India's most impactful gatherings for women in business.",
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
    points: [
      'Annual Anantari National Summit (2,000+ attendees)',
      'Monthly city-level networking evenings',
      'Industry-specific masterclasses and workshops',
      'Virtual webinars with global business leaders',
      'Pitch competitions with investor panels',
      'Priority registration and reserved seating for members'
    ]
  }
]

export const MEMBERS: Member[] = [
  {
    name: 'Priya Reddy',
    business: 'Reddy Organics Pvt. Ltd.',
    category: 'Food & Agriculture',
    city: 'Hyderabad',
    verified: true,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    tagline: 'Organic farm-to-table ingredients supplied across South India'
  },
  {
    name: 'Meera Nambiar',
    business: 'Nambiar Tech Solutions',
    category: 'Technology',
    city: 'Bengaluru',
    verified: true,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80',
    tagline: 'Custom software development for mid-market enterprises'
  },
  {
    name: 'Sonal Agarwal',
    business: 'House of Sonal',
    category: 'Fashion & Lifestyle',
    city: 'Mumbai',
    verified: true,
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80',
    tagline: 'Contemporary Indian fashion with a sustainable lens'
  },
  {
    name: 'Divya Krishnan',
    business: 'DK Financial Advisors',
    category: 'Finance',
    city: 'Chennai',
    verified: false,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80',
    tagline: 'Wealth management and tax planning for women founders'
  },
  {
    name: 'Anita Joshi',
    business: 'Joshi Healthcare Pvt. Ltd.',
    category: 'Healthcare',
    city: 'Pune',
    verified: true,
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=200&q=80',
    tagline: 'Affordable diagnostics and preventive care clinics'
  },
  {
    name: 'Ritu Sharma',
    business: 'EduSpark Learning',
    category: 'Education',
    city: 'Delhi',
    verified: false,
    image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=200&q=80',
    tagline: 'Skill-based learning programmes for young women'
  },
  {
    name: 'Lakshmi Iyer',
    business: 'GreenBuild Architects',
    category: 'Construction',
    city: 'Coimbatore',
    verified: true,
    image: 'https://images.unsplash.com/photo-1614644147724-2d4785d69962?w=200&q=80',
    tagline: 'Sustainable architecture and green-certified building design'
  },
  {
    name: 'Kavya Pillai',
    business: 'Pillai Media Group',
    category: 'Media & Marketing',
    city: 'Kochi',
    verified: true,
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=200&q=80',
    tagline: 'Integrated marketing campaigns for regional brands'
  }
]

export const INDUSTRIES: Industry[] = [
  { iconName: 'Laptop', name: 'Technology', count: 2140 },
  { iconName: 'HeartPulse', name: 'Healthcare', count: 1380 },
  { iconName: 'ShoppingBag', name: 'Fashion & Lifestyle', count: 1820 },
  { iconName: 'GraduationCap', name: 'Education', count: 960 },
  { iconName: 'Utensils', name: 'Food & Agriculture', count: 1650 },
  { iconName: 'TrendingUp', name: 'Finance', count: 870 },
  { iconName: 'HardHat', name: 'Construction', count: 540 },
  { iconName: 'Megaphone', name: 'Media & Marketing', count: 1120 },
  { iconName: 'Truck', name: 'Logistics', count: 430 },
  { iconName: 'Leaf', name: 'Sustainability', count: 680 },
  { iconName: 'Scissors', name: 'Beauty & Wellness', count: 1290 },
  { iconName: 'Building2', name: 'Real Estate', count: 390 }
]

export const QUICK_FILTERS: string[] = [
  'Technology',
  'Finance',
  'Healthcare',
  'Education',
  'Fashion',
  'Food & Agriculture',
  'Construction',
  'Media & Marketing'
]

export const DIRECTORY_STATS: DirectoryStat[] = [
  { value: 12000, suffix: '+', label: 'Members' },
  { value: 480, suffix: '+', label: 'Cities' },
  { value: 38, label: 'Industries' }
]
