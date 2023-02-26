import '../styles/globals.css'
import type { AppProps } from 'next/app'
// pages/_app.js
import { Days_One } from '@next/font/google'

// If loading a variable font, you don't need to specify the font weights

const title = Days_One({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
            :root {
              --font-title: ${title.style.fontFamily};
            }
        `}
      </style>
      <Component {...pageProps} />
    </>
  )
}
