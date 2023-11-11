/* NEXT */
import Image from 'next/image'
import Link from 'next/link'

/* APP */
import { Store } from '@/icons/Store'
import { Post } from '@/icons/Post'

/* COMPONENT */
export const Header = () => {
  return (
    <header className='sticky top-6 w-full py-2.5 px-4 flex flex-row items-center justify-between gap-8 rounded-xl bg-zinc-800/50 backdrop-blur-sm'>
      <Link href={"/"}>
        <div className='rounded-full focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70'>
          <div className='rounded-full bg-gradient-to-tl from-purple-900/60 to-blue-400/60 shadow-lg p-[2px] group transform transition ease-out hover:scale-105 hover:from-purple-700 hover:to-blue-400 hover:shadow-blue-500/25 active:translate-y-px'>
            <Image 
              className='w-9 h-9 p-px rounded-full object-cover transition duration-300 group-hover:scale-105 select-none'
              height={100}
              width={100}
              src={"/jean_pablo_calderon_ramirez.jpg"}
              alt='A photo of Jean Pablo'
            />
          </div>
        </div>
      </Link>
      <nav>
        <ul className='flex items-center justify-center gap-6 [&_a]:font-semibold [&_a]:text-base [&_a]:text-blue-100'>
          <li>
            <Link href={"/"} className='group flex flex-row items-center gap-2'>
              <div className='rounded-lg bg-gradient-to-tl from-purple-500/80 to-blue-400/80 p-1 shadow-lg transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-[10px] group-hover:shadow-purple-500/40 group-active:translate-y-1'>
                <Post/>
              </div>
              <span>Blog</span>
            </Link>
          </li>
          <li>
            <Link href={"#products"} className='group flex flex-row items-center gap-2'>
              <div className='rounded-lg bg-gradient-to-tl from-purple-500/80 to-blue-400/80 p-1 shadow-lg transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-[10px] group-hover:shadow-purple-500/40 group-active:translate-y-1'>
                <Store/>
              </div>
              <span>Products</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
