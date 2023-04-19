
// tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter: ['var(--font-inter)', ...fontFamily.sans],
        nunito: ['var(--font-nunito)', ...fontFamily.serif],
      },
      animation:{
        title:'title 3s ease-out forwards',
        'fade-left':'fade-left 3s ease-in-out forwards',
        'fade-right':'fade-right 3s ease-in-out forwards',
        'fade-in':'fade-in 3s ease-in-out forwards',
      },
      keyframes:{
        title:{
          '0%':{
            lineHeight: '0%',
            letterSpacing: '.25em',
            opacity: 0,
          },
          '25%':{
              lineHeight: '0%',
              opacity: 0,
          },
          '80%':{
              opacity: '100%',
          },
          '100%':{
              lineHeight: '100%',
              opacity: '100%',
          }
        },
        'fade-left':{
          '0%': {
            transform: 'translateX(100%)',
            opacity: 0,
          },
          '30%': {
              transform: 'translateX(0)',
              opacity: '100%',
          },
          '100%': {
              opacity: 0,
          }
        },
        'fade-right':{
          '0%': {
            transform: 'translateX(-100%)',
            opacity: 0,
          },
          '30%': {
              transform: 'translateX(0)',
              opacity: '100%',
          },
          '100%': {
              opacity: 0,
          }
        },
        'fade-in':{
          '0%': {
            opacity: 0,
          },
          '75%': {
              opacity: 0,
          },
          '100%': {
              opacity: '100%',
          }
        }
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
  themes: ["lofi"]
}
