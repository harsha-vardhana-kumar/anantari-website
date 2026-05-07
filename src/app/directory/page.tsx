// filepath: src/app/directory/page.tsx
import type { Metadata } from 'next'
import SearchHero from '@/components/sections/directory/SearchHero'
import FeaturedMembersSpotlight from '@/components/sections/directory/FeaturedMembersSpotlight'
import DirectoryGridSection from '@/components/sections/directory/DirectoryGridSection'
import ListYourBusinessSection from '@/components/sections/directory/ListYourBusinessSection'

export const metadata: Metadata = {
  title: 'Member Directory — Find Women-Owned Businesses',
  description:
    "Browse India's most trusted directory of verified women-owned businesses across 38 industries and 480+ cities."
}

export default function DirectoryPage() {
  return (
    <main>
      <SearchHero />
      <FeaturedMembersSpotlight />
      <DirectoryGridSection />
      <ListYourBusinessSection />
    </main>
  )
}
