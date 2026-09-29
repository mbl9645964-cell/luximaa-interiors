/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F6F2EC',
        canvas: '#FBFAF6',
        sand: '#EDE6DA',
        beige: '#DAD0C0',
        clay: '#B9A990',
        umber: '#7C6C57',
        cocoa: '#4A4038',
        charcoal: '#211E1A',
        ink: '#141210',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.28em',
        label: '0.34em',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      maxWidth: {
        editorial: '1440px',
      },
    },
  },
  plugins: [],
}
