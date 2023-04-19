import Head from 'next/head'
import Link from 'next/link'
export default function Home() {
  return (
    <>
      <Head>
        <title>Δrkift.com</title>
        <meta name="description" content="Digital products to Optimize your life" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-black font-inter'>
        <div className='flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black'>
          <nav className='my-16 animate-fade-in'>
            <ul className='flex items-center justify-center gap-4'>
              <li>
                <Link  
                  href={''} 
                  className="text-sm duration-500 text-zinc-500 hover:text-zinc-300">
                   Projects
                </Link>
              </li>
              <li>
                <Link  
                  href={''} 
                  className="text-sm duration-500 text-zinc-500 hover:text-zinc-300">
                   Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className='hidden w-screen h-px md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0'></div>
          <h1 className='z-10 text-4xl tracking-wide font-nunito duration-1000 cursor-default animate-title  font-display sm:text-6xl md:text-9xl whitespace-nowrap text-transparent bg-gradient-to-t bg-clip-text from-zinc-100/50 to-white '>
            Δrkift
          </h1>
          <div className='hidden w-screen h-px md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0'></div>
          <div className="my-16 text-center animate-fade-in">
            <p className="text-sm text-zinc-500 ">
              Hi, my name is Jean, I&apos;m software developer and work on my personal projects
              <br />
              To hire my service contact me. 
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
