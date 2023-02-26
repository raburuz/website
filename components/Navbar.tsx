import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <div className='w-full flex justify-between py-6 '>
      <span className='font-black select-none'>Δrkift</span>
      <nav className='w-64 flex justify-end gap-4 text-sm font-bold'>
        <Link href={'/'}>Products</Link>
        <Link href={'/me'}>Who I&apos;m</Link>
      </nav>
    </div>
  )
}
