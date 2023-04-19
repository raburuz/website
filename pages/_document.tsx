import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html data-theme="lofi" lang="en">
      <Head />
      <body className='selection:bg-sky-600/10 selection:text-sky-400'>
        <Main/>
        <NextScript />
      </body>
    </Html>
  )
}
