'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface CarouselProps {
  items: ReactNode[]
  autoPlayInterval?: number
  className?: string
}

export default function Carousel({
  items,
  autoPlayInterval = 4000,
  className
}: CarouselProps) {
  const [current, setCurrent] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % items.length)
  }, [items.length])

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + items.length) % items.length)
  }, [items.length])

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(goNext, autoPlayInterval)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isPlaying, goNext, autoPlayInterval])

  return (
    <div
      className={cn('relative overflow-hidden', className)}
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Inner sliding strip */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {items.map((item, idx) => (
          <div key={idx} className="min-w-full">
            {item}
          </div>
        ))}
      </div>

      {/* Prev button */}
      <button
        aria-label="Previous slide"
        onClick={goPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-navy/20 bg-white/80 hover:bg-white text-navy flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Next button */}
      <button
        aria-label="Next slide"
        onClick={goNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-navy/20 bg-white/80 hover:bg-white text-navy flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {items.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setCurrent(idx)}
            className={cn(
              'h-2 rounded-full transition-all duration-300',
              idx === current ? 'bg-gold w-6' : 'bg-navy/20 w-2'
            )}
          />
        ))}
      </div>
    </div>
  )
}
