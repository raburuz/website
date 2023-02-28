
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
      backgroundImage:{
        'texture-pattern': "url('/texture.png')",
      }
      ,
      fontFamily: {
        roboto: ['var(--font-roboto)', ...fontFamily.sans],
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
