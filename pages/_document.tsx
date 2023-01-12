import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='max-w-[1140px] px-2 mx-auto my-0 bg-brand text-slate-50 flex justify-center [&_div]:w-full'>
        <Main/>
        <NextScript />
      </body>
    </Html>
  )
}
