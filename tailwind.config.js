/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#357ee3',
          'blue-light': '#5b97e8',
          'blue-dark': '#2563b8',
          purple: '#c379d8',
          'purple-light': '#d4a0e4',
          gray: '#626262',
          dark: '#0d1117',
          darker: '#060a0f',
          surface: '#f4f7fc',
        },
      },
      fontFamily: {
        display: ['var(--font-be-vietnam)', 'sans-serif'],
        body: ['var(--font-be-vietnam)', 'sans-serif'],
      },
      backgroundImage: {
        'grid-dot': "radial-gradient(circle, #357ee3 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-dot': '36px 36px',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
