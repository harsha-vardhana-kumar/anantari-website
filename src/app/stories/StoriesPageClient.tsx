'use client'

import { useState } from 'react'
import StoriesHeroSection from '@/components/sections/stories/StoriesHeroSection'
import FeaturedArticleSection from '@/components/sections/stories/FeaturedArticleSection'
import StoriesGridSection from '@/components/sections/stories/StoriesGridSection'
import NewsletterInlineSection from '@/components/sections/stories/NewsletterInlineSection'

export default function StoriesPageClient() {
  const [activeCategory, setActiveCategory] = useState('All')

  return (
    <>
      <StoriesHeroSection
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <FeaturedArticleSection />
      <StoriesGridSection activeCategory={activeCategory} />
      <NewsletterInlineSection />
    </>
  )
}
