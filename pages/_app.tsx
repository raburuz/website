import '../styles/globals.css'
import type { AppProps } from 'next/app'
// pages/_app.js
import { Inter, Nunito_Sans } from '@next/font/google'


// If loading a variable font, you don't need to specify the font weights

const paragraph = Inter({
  weight: '400',
  subsets: ['latin'],
})
const title = Nunito_Sans({
  weight: '800',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
            :root {
              --font-nunito: ${title.style.fontFamily};
              --font-inter: ${paragraph.style.fontFamily};
            }
        `}
      </style>
      <Component {...pageProps} />
    </>
  )
}
