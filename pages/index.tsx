import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image';
import * as HoverCard from '@radix-ui/react-hover-card';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Logo } from '../components/Logo'
import { Pointer } from '../components/Pointer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Δrkift.com</title>
        <meta name="description" content="Digital products to Optimize your life" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/arkift.svg" />
      </Head>
      <main className='relative bg-black font-inter !cursor-none'>
        {/* Content */}
        <div className='flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black'>
          {/* Navbar */}
          <nav className='z-50 my-16 animate-fade-in'>
            <ul className='flex items-center justify-center gap-4'>
              <li>
                <Link  
                  href={''} 
                  className="cursor-none text-sm duration-500 text-zinc-500 hover:text-zinc-300">
                   Projects
                </Link>
              </li>
              <li>
                <Link  
                  href={''} 
                  className="cursor-none text-sm duration-500 text-zinc-500 hover:text-zinc-300">
                   Contact
                </Link>
              </li>
            </ul>
          </nav>
          {/* Content */}
          <div className='hidden w-screen h-px md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0'></div>
          {/* Hover Card */}
          <h1 className='z-10 text-4xl tracking-wide font-nunito duration-1000 animate-title  font-display sm:text-6xl md:text-9xl whitespace-nowrap text-transparent bg-gradient-to-t bg-clip-text from-zinc-100/50 to-white '>
            Δrkift
          </h1>
          {/* End Hover Card */}
          <div className='hidden w-screen h-px md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0'></div>
          <div className="z-10 my-16 text-center animate-fade-in">
            <p className="px-2 text-sm text-zinc-500 ">
              Hi, my name is{' '}
                <HoverCard.Root openDelay={2}>
                  <HoverCard.Trigger asChild>
                     <span className='underline duration-500 text-zinc-400 hover:text-zinc-300'>Jean</span>
                  </HoverCard.Trigger>
                  <HoverCard.Portal>
                    <HoverCard.Content
                      className="z-20 data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-[300px] rounded-md bg-white p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all"
                      sideOffset={5}
                    >
                      <div className="flex flex-col gap-[7px]">
                        <div className=' flex items-center gap-4'>
                          <Image
                            className="block h-[60px] w-[60px] rounded-full"
                            src="/jean_pablo_calderon_ramirez.jpg"
                            alt="Jean Pablo Photo"
                            width={100}
                            height={100}
                          />
                          <div>
                            <h2 className="text-sm font-bold leading-[1.5]">Jean Pablo Calderón Ramírez</h2>
                            <span className="text-sm leading-[1.5]">@arkift</span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[15px]">
                          <p className="text-[15px] leading-[1.5]">
                            Jean is a full-stack developer based in Spain with a passion for building digital services/stuff he wants. 
                          </p>
                        </div>
                      </div>

                      <HoverCard.Arrow className="fill-white" />
                    </HoverCard.Content>
                  </HoverCard.Portal>
                </HoverCard.Root>
                {' '}and I&apos;m a software developer working on personal projects. 
              <br />
              If you&apos;re interested in hiring my services, please feel free to contact me.
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
        {/* Logo */}
        <div className='fixed bottom-2 right-2 animate-fade-in'>
          <Logo/>
        </div>
        {/* Pointer */}
        <Pointer/>
        {/* Available */}
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <div className='absolute top-2 right-2 p-4 w-fit h-8 rounded-full bg-white/20 hover:bg-white/30 flex justify-center items-center gap-2 animate-fade-in'>
              <div className='w-2 h-2 rounded-full bg-green-500 animate-pulse'></div>
              <span className='text-white text-[10px]'>Available</span>
            </div>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
          <DropdownMenu.Content
              className="min-w-[120px] bg-white rounded-md p-[5px] mx-2 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
              sideOffset={5}
            >
              <DropdownMenu.Item className="text-[13px] leading-none rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none hover:text-sky-800">
                <a className='w-full' target='_blank' rel='noreferrer noopener nofollow' href="https://www.linkedin.com/in/jean-ram/">Linkdln</a>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="text-[13px] leading-none rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none hover:text-sky-800">
                <a className='w-full' href="mailto: jeanpablocalderonramirez@gmail.com">Email</a>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </main>
    </>
  )
}
