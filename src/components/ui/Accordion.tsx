// filepath: src/components/ui/Accordion.tsx
'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AccordionProps {
  items: { question: string; answer: string }[]
  className?: string
}

export default function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className={cn('w-full', className)}>
      {items.map((item, i) => (
        <div key={i} className="border-b border-navy/10 last:border-b-0">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between py-5 text-left group"
            aria-expanded={openIndex === i}
          >
            <span className="font-cormorant font-semibold text-lg text-navy pr-8 group-hover:text-gold transition-colors duration-200">
              {item.question}
            </span>
            <ChevronDown
              className={cn(
                'flex-shrink-0 text-gold transition-transform duration-300',
                openIndex === i ? 'rotate-180' : 'rotate-0'
              )}
              size={20}
            />
          </button>
          <div
            className={cn(
              'overflow-hidden transition-all duration-[400ms] ease-in-out',
              openIndex === i ? 'max-h-96 pb-5' : 'max-h-0'
            )}
          >
            <p className="font-dm text-sm text-navy/60 leading-relaxed">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
