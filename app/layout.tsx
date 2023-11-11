/* FONT */
import { GeistSans, GeistMono } from 'geist/font'

/* CSS */
import './globals.css'

interface Props {
  children: React.ReactNode
}

export default async function RootLayout({ children }: Props) {
  return (
    <>
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <body className='bg-zinc-900 antialiased selection:bg-blue-500/90 text-white'>
        {children}
      </body>
    </html>
    </>
  )
}
