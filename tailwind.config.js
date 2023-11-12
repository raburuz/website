/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx,jsx,js}',
    './components/**/*.{ts,tsx,jsx,js}',
    './icons/**/*.{ts,tsx,jsx,js}',
	],
  theme: {
    extend:{
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}