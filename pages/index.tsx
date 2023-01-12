import Head from 'next/head'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Δl Arkift | Optimize your life</title>
        <meta name="description" content="Digital products to Optimize your life" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar></Navbar>
        <h1 className='text-5xl leading-[1.2] font-normal tracking-wide my-10'>Optimize your <br /> Life</h1>
        <div className='flex flex-col gap-4'>
          <div className='flex gap-4 items-center'>
            <h2 className='uppercase text-gray-600 font-semibold'>Products</h2>
            <div className='h-px w-full bg-gray-600 '></div>
          </div>
          <div>
            <h3 className='text-sm text-gray-600'>Themes</h3>

          </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}
