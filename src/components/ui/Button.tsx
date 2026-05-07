'use client'

import { cn } from '@/lib/utils'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'icon'
type Size = 'default' | 'sm' | 'lg' | 'icon'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-navy text-ivory rounded-full font-dm font-medium tracking-wide transition-all duration-300 hover:bg-navy-mid hover:scale-[1.03] hover:shadow-lg hover:shadow-navy/30 active:scale-[0.98]',
  secondary:
    'border-2 border-gold text-gold bg-transparent rounded-full font-dm font-medium tracking-wide transition-all duration-300 hover:bg-gold hover:text-white hover:shadow-lg hover:shadow-gold/30 active:scale-[0.98]',
  ghost:
    'text-ivory/70 font-dm underline-offset-4 hover:text-ivory hover:underline transition-colors duration-200',
  icon: 'rounded-full border border-white/20 text-ivory flex items-center justify-center hover:bg-white/10 transition-colors duration-200'
}

const sizeClasses: Record<Size, string> = {
  default: 'px-8 py-3.5 text-sm',
  sm: 'px-5 py-2.5 text-xs',
  lg: 'px-10 py-4 text-base',
  icon: 'w-11 h-11'
}

export default function Button({
  variant = 'primary',
  size = 'default',
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        variantClasses[variant],
        sizeClasses[size],
        'inline-flex items-center justify-center gap-2 cursor-pointer select-none',
        disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
