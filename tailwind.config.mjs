/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bone: '#F4F1EA',
        pure: '#000000',
        electric: '#0055FF',
        stone: '#1A1A1A',
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'], 
        mono: ['"JetBrains Mono"', 'monospace'], 
      },
      gridTemplateColumns: {
        'asymmetric': 'minmax(200px, 1fr) 2fr 1fr',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' }
        }
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        'marquee-fast': 'marquee 15s linear infinite',
        'marquee-reverse': 'marquee-reverse 20s linear infinite',
      }
    },
  },
  plugins: [],
}
