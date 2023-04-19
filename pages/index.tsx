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
      <main className='relative bg-black font-inter'>
        {/* Content */}
        <div className='flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black'>
          {/* Navbar */}
          <nav className='z-50 my-16 animate-fade-in'>
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
          {/* Content */}
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
        {/* Design */}
        <div className="fixed left-1/2 top-0 ml-[-15rem] h-[30rem] w-[80rem] opacity-70 dark:[mask-image:linear-gradient(white,transparent)]">
          <div className="to-highlight-200 dark:to-highlight-200/20 absolute inset-0 bg-gradient-to-r from-primary-500 opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-primary-500/50 dark:opacity-100">
            <svg aria-hidden="true" className="dark:fill-white/2.5 absolute inset-x-0 inset-y-[-20%] h-[200%] w-full skew-y-[15deg] fill-black/40 stroke-black/50 mix-blend-overlay dark:stroke-white/5">
              <defs>
                <pattern id=":rc:" width="40" height="30" patternUnits="userSpaceOnUse" x="-12" y="4">
                  <path d="M.5 56V.5H72" fill="none"></path>
                </pattern>
              </defs>
              <rect width="100%" height="100%" strokeWidth="0" fill="url(#:rc:)"></rect>
            </svg>
          </div>
          <svg viewBox="0 0 1113 440" aria-hidden="true" className="absolute top-20 left-1/2 ml-[-22rem] w-[50rem] fill-white opacity-70 blur-[30px] dark:hidden">
            <path d="M.016 439.5s-9.5-300 434-300S882.516 20 882.516 20V0h230.004v439.5H.016Z"></path>
          </svg>
        </div>
      </main>
    </>
  )
}
