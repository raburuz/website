
// tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage:{
      'texture-pattern': "url('/texture.png')",
    },
    extend: {
      fontFamily: {
        anton: ['var(--font-title)', ...fontFamily.sans],
      },
      colors:{
        brand : '#0b0b0f'
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
  themes: ["lofi"]
}
