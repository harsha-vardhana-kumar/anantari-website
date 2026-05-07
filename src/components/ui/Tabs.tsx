// filepath: src/components/ui/Tabs.tsx
'use client'

import { motion } from 'framer-motion'
import {
  BadgeCheck,
  LayoutGrid,
  GraduationCap,
  Calendar,
  type LucideProps
} from 'lucide-react'
import { cn } from '@/lib/utils'
import type { ComponentType } from 'react'

// ── DynamicIcon helper ────────────────────────────────────────────────────────
const iconMap: Record<string, ComponentType<LucideProps>> = {
  BadgeCheck,
  LayoutGrid,
  GraduationCap,
  Calendar
}

function DynamicIcon({ name, ...props }: LucideProps & { name: string }) {
  const Icon = iconMap[name]
  if (!Icon) return null
  return <Icon {...props} />
}

// ── Tabs component ────────────────────────────────────────────────────────────
interface TabItem {
  id: string
  label: string
  icon?: string
}

interface TabsProps {
  tabs: TabItem[]
  activeTab: string
  onChange: (id: string) => void
  className?: string
}

export default function Tabs({ tabs, activeTab, onChange, className }: TabsProps) {
  return (
    <div
      role="tablist"
      className={cn(
        'relative flex gap-0 border-b border-navy/10 overflow-x-auto',
        className
      )}
    >
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className={cn(
              'relative flex items-center gap-2 px-6 py-4 font-dm text-sm transition-colors duration-200 whitespace-nowrap',
              isActive ? 'text-navy font-medium' : 'text-navy/50 hover:text-navy/80'
            )}
          >
            {tab.icon && (
              <DynamicIcon
                name={tab.icon}
                size={16}
                className={isActive ? 'text-gold' : 'text-navy/40'}
              />
            )}
            {tab.label}
            {isActive && (
              <motion.div
                layoutId="tab-underline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        )
      })}
    </div>
  )
}
