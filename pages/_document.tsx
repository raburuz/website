import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className='bg-texture-pattern bg-repeat' data-theme="lofi" lang="en">
      <Head />
      <body className='max-w-[1140px] px-2 mx-auto my-0  flex justify-center [&_div]:w-full'>
        <Main/>
        <NextScript />
      </body>
    </Html>
  )
}
