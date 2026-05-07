'use client'

import { useEffect, useRef, useState } from 'react'

interface CounterProps {
  value: number
  prefix?: string
  suffix?: string
  duration?: number
}

function easeOutQuad(t: number): number {
  return t * (2 - t)
}

export default function Counter({
  value,
  prefix = '',
  suffix = '',
  duration = 2000
}: CounterProps) {
  const [current, setCurrent] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            const startTime = performance.now()

            const tick = (now: number) => {
              const elapsed = now - startTime
              const progress = Math.min(elapsed / duration, 1)
              const easedProgress = easeOutQuad(progress)
              setCurrent(Math.round(easedProgress * value))
              if (progress < 1) {
                requestAnimationFrame(tick)
              }
            }

            requestAnimationFrame(tick)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value, duration])

  return (
    <span
      ref={ref}
      className="font-cormorant font-bold text-5xl md:text-6xl text-gold"
    >
      {prefix}
      {current}
      {suffix}
    </span>
  )
}
