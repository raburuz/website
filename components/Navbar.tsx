import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <div className='w-full flex justify-between py-8 border-b border-solid border-slate-700 mb-2'>
      <span>Logo</span>
      <nav className='w-64 flex justify-around gap-2 uppercase font-thin'>
        <Link href={'/'}>Products</Link>
        <Link href={'/me'}>Who I&apos;m</Link>
      </nav>
    </div>
  )
}
