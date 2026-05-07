'use client'

import { motion } from 'framer-motion'
import { Clock, ArrowRight } from 'lucide-react'

const featuredArticle = {
  category: 'Startup Stories',
  readTime: '8 min read',
  date: 'February 28, 2025',
  title: 'How I Built a ₹10 Crore Business from My Kitchen Table — Without a Single Investor',
  subtitle:
    'Kavitha Reddy shares the unfiltered journey of bootstrapping TechVentures India from zero to ₹10Cr ARR while raising two kids and navigating a male-dominated industry.',
  author: { name: 'Kavitha Reddy', role: 'Founder & CEO, TechVentures India', initials: 'KR', color: '#3158A7' },
  tags: ['Bootstrapping', 'Startup', 'Women in Tech', 'Entrepreneurship'],
  stats: [
    { label: 'Revenue', value: '₹10Cr ARR' },
    { label: 'Team Size', value: '47 People' },
    { label: 'Years', value: '6 Years' }
  ]
}

const secondaryArticles = [
  {
    category: 'Leadership',
    readTime: '5 min read',
    date: 'February 24, 2025',
    title: 'The Leadership Lessons Nobody Taught Me in Business School',
    author: { name: 'Sunita Agarwal', initials: 'SA', color: '#EE670D' },
    tags: ['Leadership', 'MBA', 'Women Leaders']
  },
  {
    category: 'Finance',
    readTime: '6 min read',
    date: 'February 20, 2025',
    title: 'Negotiating Your First Angel Round: What Every Woman Founder Must Know',
    author: { name: 'Lakshmi Rao', initials: 'LR', color: '#C9A84C' },
    tags: ['Angel Funding', 'Negotiation', 'Startups']
  }
]

const statColors = ['text-brand', 'text-[#3158A7]', 'text-gold']

export default function FeaturedArticleSection() {
  return (
    <section className="py-16 px-6 bg-navy">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">

        {/* LEFT — featured card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 bg-navy-mid border border-white/10 rounded-3xl overflow-hidden group hover:border-brand/30 hover:shadow-[0_0_60px_rgba(238,103,13,0.08)] transition-all duration-300"
        >
          {/* Top visual area */}
          <div className="h-64 relative overflow-hidden bg-gradient-to-br from-[#3158A7]/30 via-navy-mid to-brand/20">
            {/* Decorative quote */}
            <div className="absolute inset-0 flex items-center justify-center font-cormorant text-[160px] font-bold text-white/[0.03] select-none leading-none">
              &ldquo;
            </div>
            {/* Floating stat cards */}
            {featuredArticle.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.8 }}
                className={`absolute bottom-6 bg-navy/80 backdrop-blur border border-white/10 rounded-xl px-4 py-3 text-center ${
                  i === 0 ? 'left-6' : i === 1 ? 'left-1/2 -translate-x-1/2' : 'right-6'
                }`}
              >
                <p className={`font-cormorant text-xl font-bold ${statColors[i]}`}>{stat.value}</p>
                <p className="text-xs text-ivory/50">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Card body */}
          <div className="p-8">
            {/* Top row */}
            <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="bg-brand/15 text-brand border border-brand/30 text-xs rounded-full px-3 py-1">
                  {featuredArticle.category}
                </span>
                <span className="bg-gold/15 text-gold border border-gold/30 text-xs rounded-full px-3 py-1 ml-1">
                  ✦ Featured Story
                </span>
              </div>
              <div className="flex items-center gap-1 text-ivory/40">
                <Clock size={12} />
                <span className="text-xs">{featuredArticle.readTime}</span>
              </div>
            </div>

            {/* Title */}
            <h2 className="font-cormorant text-2xl md:text-3xl font-bold text-ivory leading-tight hover:text-brand transition-colors cursor-pointer">
              {featuredArticle.title}
            </h2>

            {/* Subtitle */}
            <p className="text-ivory/60 text-sm leading-relaxed mt-4 line-clamp-3">
              {featuredArticle.subtitle}
            </p>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {featuredArticle.tags.map((tag) => (
                <span key={tag} className="bg-white/5 border border-white/10 text-ivory/50 text-xs rounded-full px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>

            {/* Author + date row */}
            <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center font-cormorant font-bold text-sm"
                  style={{ backgroundColor: `${featuredArticle.author.color}20`, color: featuredArticle.author.color }}
                >
                  {featuredArticle.author.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ivory">{featuredArticle.author.name}</p>
                  <p className="text-xs text-ivory/50">{featuredArticle.author.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-ivory/30">{featuredArticle.date}</span>
                <button className="text-brand text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Read Story <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — secondary cards */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          {secondaryArticles.map((article, idx) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-navy-mid border border-white/10 rounded-3xl p-6 flex-1 flex flex-col group hover:border-brand/30 hover:shadow-[0_0_30px_rgba(238,103,13,0.06)] transition-all"
            >
              {/* Top row */}
              <div className="flex justify-between items-center">
                <span className="bg-white/5 border border-white/10 text-ivory/50 text-xs rounded-full px-3 py-1">
                  {article.category}
                </span>
                <span className="text-ivory/30 text-xs">{article.readTime}</span>
              </div>

              {/* Title */}
              <h3 className="font-cormorant text-lg font-bold text-ivory mt-3 leading-tight group-hover:text-brand transition-colors flex-1">
                {article.title}
              </h3>

              {/* Tags */}
              <div className="flex gap-2 flex-wrap mt-3">
                {article.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="bg-white/5 border border-white/10 text-ivory/40 text-xs rounded-full px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Author row */}
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold font-cormorant flex-shrink-0"
                  style={{ backgroundColor: `${article.author.color}20`, color: article.author.color }}
                >
                  {article.author.initials}
                </div>
                <span className="text-sm text-ivory/70">{article.author.name}</span>
                <span className="text-xs text-ivory/30 ml-auto">{article.date}</span>
              </div>

              <button className="text-brand text-sm font-medium mt-3 inline-flex items-center gap-1 self-start">
                Read <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
