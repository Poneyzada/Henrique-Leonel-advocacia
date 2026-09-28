/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          950: '#060A12',
          900: '#0A101D',
          850: '#0F172A',
          800: '#162036',
          700: '#1E2B4A',
        },
        gold: {
          100: '#FBF5E6',
          200: '#F5E6BF',
          300: '#EED395',
          400: '#DFBA55',
          500: '#C9A84C',
          600: '#B59037',
          700: '#8E6E22',
        },
        ivory: {
          50: '#FAFAF8',
          100: '#F5F5F0',
          200: '#EBEBE3',
          300: '#DDDCD2',
          900: '#18191B',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        '2rem': '2rem',
        '2.5rem': '2.5rem',
        '3rem': '3rem',
        '4rem': '4rem',
      },
      boxShadow: {
        'gold-glow': '0 0 35px -5px rgba(201, 168, 76, 0.35)',
        'card-dark': '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
        'card-light': '0 20px 40px -15px rgba(15, 23, 42, 0.08)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
