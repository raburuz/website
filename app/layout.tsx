/* FONT */
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'

/* ENV */
import '@/env/server.mjs'

/* CSS */
import './globals.css'

/* APP */
import { Pattern } from "@/component/Pattern";
import { Footer } from '@/component/Footer';
import { Header } from '@/component/Header';

interface Props {
  children: React.ReactNode
}

export default async function RootLayout({ children }: Props) {
  return (
    <>
      <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <body className='bg-zinc-900 antialiased selection:bg-blue-500/90 text-white'>
          <Pattern/>
          <>
            <Header/>
            {children}
            <Footer/>
          </>
        </body>
      </html>
    </>
  )
}
