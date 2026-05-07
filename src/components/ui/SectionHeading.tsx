import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: 'center' | 'left'
  light?: boolean
}

export default function SectionHeading({
  title,
  subtitle,
  align = 'center',
  light = false
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col',
        align === 'center' ? 'items-center text-center' : 'items-start'
      )}
    >
      <div className="w-10 h-0.5 bg-gold mb-4" />
      <h2
        className={cn(
          'font-cormorant font-semibold text-3xl md:text-4xl leading-tight',
          light ? 'text-ivory' : 'text-navy'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'font-dm text-base mt-3 max-w-xl leading-relaxed',
            light ? 'text-muted' : 'text-navy/60'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
