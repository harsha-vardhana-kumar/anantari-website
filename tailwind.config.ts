import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1A2645',
          mid: '#2B4275',
          light: '#3D5A8A',
          deep: '#0F1A35'
        },
        gold: {
          DEFAULT: '#C9913A',
          light: '#E8B96A',
          dark: '#A0722A'
        },
        brand: '#D4561A',
        ivory: {
          DEFAULT: '#F7F3EE',
          dark: '#EDE8E0'
        },
        muted: '#8B9BB4'
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'serif'],
        dm: ['var(--font-dm-sans)', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'serif']
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' }
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' }
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'marquee': 'marquee 30s linear infinite',
        'bounce-slow': 'bounce 1.5s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite'
      }
    }
  },
  plugins: [
    require('tailwindcss/plugin')(function({ addUtilities }: any) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': { display: 'none' }
        }
      })
    })
  ]
}
export default config
