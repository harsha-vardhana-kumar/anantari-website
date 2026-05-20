'use client'

import { motion } from 'framer-motion'
import { Clock, ArrowRight, RefreshCw } from 'lucide-react'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const ARTICLES = [
  {
    id: 1,
    category: 'Startup Stories',
    readTime: '8 min',
    date: 'Feb 28, 2025',
    title: 'How I Built a ₹10Cr Business from My Kitchen Table',
    excerpt: 'The unfiltered journey of bootstrapping from zero to ₹10Cr ARR while raising two kids.',
    author: { name: 'Kavitha Reddy', initials: 'KR', color: '#3158A7' },
    tags: ['Bootstrapping', 'Startup'],
    isFeatured: true,
    color: '#3158A7'
  },
  {
    id: 2,
    category: 'Leadership',
    readTime: '5 min',
    date: 'Feb 24, 2025',
    title: 'The Leadership Lessons Nobody Taught Me in Business School',
    excerpt: 'Hard-won wisdom from 15 years leading teams across three continents.',
    author: { name: 'Sunita Agarwal', initials: 'SA', color: '#EE670D' },
    tags: ['Leadership', 'Career'],
    isFeatured: false,
    color: '#EE670D'
  },
  {
    id: 3,
    category: 'Finance',
    readTime: '6 min',
    date: 'Feb 20, 2025',
    title: 'Negotiating Your First Angel Round: What Every Woman Founder Must Know',
    excerpt: 'Practical negotiation tactics that helped me close a ₹2Cr seed round on my terms.',
    author: { name: 'Lakshmi Rao', initials: 'LR', color: '#C9A84C' },
    tags: ['Funding', 'Finance'],
    isFeatured: false,
    color: '#C9A84C'
  },
  {
    id: 4,
    category: 'Legal',
    readTime: '4 min',
    date: 'Feb 15, 2025',
    title: '5 Legal Mistakes Women Entrepreneurs Make (And How to Avoid Them)',
    excerpt: 'Common legal pitfalls that cost founders lakhs — and the simple steps to stay protected.',
    author: { name: 'Rashida Bano', initials: 'RB', color: '#3158A7' },
    tags: ['Legal', 'Startups'],
    isFeatured: false,
    color: '#3158A7'
  },
  {
    id: 5,
    category: 'Technology',
    readTime: '7 min',
    date: 'Feb 12, 2025',
    title: 'AI Tools That Actually Save Me 3 Hours Every Day as a Founder',
    excerpt: 'My curated stack of AI tools that transformed how I run my business.',
    author: { name: 'Tanvi Shah', initials: 'TS', color: '#EE670D' },
    tags: ['AI', 'Productivity'],
    isFeatured: false,
    color: '#EE670D'
  },
  {
    id: 6,
    category: 'Health & Wellness',
    readTime: '5 min',
    date: 'Feb 8, 2025',
    title: 'Burnout Almost Ended My Career. Here\'s What Saved It.',
    excerpt: 'The warning signs I ignored for two years and the practices that brought me back.',
    author: { name: 'Meera Joshi', initials: 'MJ', color: '#C9A84C' },
    tags: ['Wellness', 'Burnout'],
    isFeatured: false,
    color: '#C9A84C'
  },
  {
    id: 7,
    category: 'Mentorship',
    readTime: '6 min',
    date: 'Feb 5, 2025',
    title: 'How to Find a Mentor Who Actually Shows Up For You',
    excerpt: 'The framework I use to identify, approach, and build mentorship relationships that last.',
    author: { name: 'Preethi Nambiar', initials: 'PN', color: '#3158A7' },
    tags: ['Mentorship', 'Career'],
    isFeatured: false,
    color: '#3158A7'
  },
  {
    id: 8,
    category: 'Startup Stories',
    readTime: '9 min',
    date: 'Jan 30, 2025',
    title: 'From Sari Shop to D2C Brand: My 8-Year Journey to ₹50Cr Revenue',
    excerpt: 'How a traditional family business became one of India\'s fastest-growing fashion brands.',
    author: { name: 'Ananya Krishnan', initials: 'AK', color: '#EE670D' },
    tags: ['D2C', 'Fashion', 'Scaling'],
    isFeatured: true,
    color: '#EE670D'
  },
  {
    id: 9,
    category: 'Leadership',
    readTime: '4 min',
    date: 'Jan 25, 2025',
    title: 'Why I Stopped Trying to Lead Like a Man',
    excerpt: 'Embracing a distinctly feminine leadership style was the best decision of my career.',
    author: { name: 'Zara Thompson', initials: 'ZT', color: '#C9A84C' },
    tags: ['Leadership', 'Identity'],
    isFeatured: false,
    color: '#C9A84C'
  },
  {
    id: 10,
    category: 'Finance',
    readTime: '5 min',
    date: 'Jan 20, 2025',
    title: 'The SIP Strategy That Helped Me Build ₹1Cr in 7 Years on a Founder Salary',
    excerpt: 'Practical personal finance for women who pay themselves last.',
    author: { name: 'Divya Menon', initials: 'DM', color: '#3158A7' },
    tags: ['Investing', 'Personal Finance'],
    isFeatured: false,
    color: '#3158A7'
  },
  {
    id: 11,
    category: 'Technology',
    readTime: '6 min',
    date: 'Jan 16, 2025',
    title: 'I Shipped My First App at 52. Here\'s Everything I Learned.',
    excerpt: 'It\'s never too late to become a founder. My story of learning to code at 50.',
    author: { name: 'Fatima Malik', initials: 'FM', color: '#EE670D' },
    tags: ['Tech', 'Courage'],
    isFeatured: false,
    color: '#EE670D'
  },
  {
    id: 12,
    category: 'Mentorship',
    readTime: '5 min',
    date: 'Jan 12, 2025',
    title: 'What 3 Years of Mentoring 200 Women Taught Me About Growth',
    excerpt: 'Patterns I noticed after mentoring women across industries — and what they all needed most.',
    author: { name: 'Preethi Nambiar', initials: 'PN', color: '#C9A84C' },
    tags: ['Mentorship', 'Growth'],
    isFeatured: false,
    color: '#C9A84C'
  }
]

interface StoriesGridSectionProps {
  activeCategory: string
}

export default function StoriesGridSection({ activeCategory }: StoriesGridSectionProps) {
  const filtered = activeCategory === 'All'
    ? ARTICLES
    : ARTICLES.filter((a) => a.category === activeCategory)

  return (
    <section className="py-16 px-6 bg-ivory border-t border-navy/10">
      <div className="max-w-7xl mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white border border-navy/[0.08] rounded-3xl overflow-hidden group cursor-pointer transition-all duration-300"
              style={{
                borderColor: undefined
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${article.color}66`
                e.currentTarget.style.boxShadow = '0 0 40px rgba(0,0,0,0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Top color strip */}
              <div className="h-1 w-full" style={{ backgroundColor: article.color }} />

              {/* Card body */}
              <div className="p-6">
                {/* Top row */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs rounded-full px-3 py-1 border"
                    style={{
                      backgroundColor: `${article.color}26`,
                      color: article.color,
                      borderColor: `${article.color}4D`
                    }}
                  >
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 ml-auto">
                    <Clock size={12} className="text-navy/30" />
                    <span className="text-xs text-navy/30 ml-1">{article.readTime}</span>
                  </div>
                </div>

                {/* Editor's Pick badge */}
                {article.isFeatured && (
                  <div className="mt-2">
                    <span className="bg-gold/15 border border-gold/30 text-gold text-xs rounded-full px-3 py-1">
                      ✦ Editor&apos;s Pick
                    </span>
                  </div>
                )}

                {/* Title */}
                <h3 className="font-cormorant text-lg font-bold text-navy mt-3 leading-tight group-hover:text-brand transition-colors line-clamp-2">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-navy/60 text-sm leading-relaxed mt-3 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Tags */}
                <div className="flex gap-2 flex-wrap mt-3">
                  {article.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="bg-navy/5 border border-navy/10 text-navy/50 text-xs rounded-full px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Author + CTA row */}
                <div className="mt-5 pt-5 border-t border-navy/10 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-cormorant flex-shrink-0"
                      style={{ backgroundColor: `${article.author.color}20`, color: article.author.color }}
                    >
                      {article.author.initials}
                    </div>
                    <span className="text-xs font-medium text-navy/70 truncate">{article.author.name}</span>
                    <span className="text-navy/20 hidden sm:inline">·</span>
                    <span className="text-xs text-navy/30 hidden sm:inline flex-shrink-0">{article.date}</span>
                  </div>
                  <button className="text-brand text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all flex-shrink-0">
                    Read <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20 text-navy/40">
            No articles found in this category.
          </div>
        )}

        {/* Load more */}
        <div className="mt-12 text-center">
          <p className="text-navy/40 text-sm mb-6">
            Showing {filtered.length} of 120+ stories
          </p>
          <Button variant="secondary" className="gap-2">
            <RefreshCw size={16} />
            Load More Stories
          </Button>
        </div>
      </div>
    </section>
  )
}
