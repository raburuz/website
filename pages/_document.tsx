import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className='bg-texture-pattern bg-repeat' data-theme="lofi" lang="en">
      <Head />
      <body className='max-w-6xl px-2 mx-auto my-0'>
        <Main/>
        <NextScript />
      </body>
    </Html>
  )
}
