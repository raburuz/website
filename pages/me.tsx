import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'

export default function Me() {
  return (
    <>
     <Head>
        <title>Δl Arkift | Jean Ramirez</title>
        <meta name="description" content="Jean Ramirez Digital Craftsman based in Spain" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar></Navbar>
       <div className='flex justify-center'>
        <div className='max-w-xl flex flex-col gap-10'>
            <span className='w-full text-center bg-gray-800 p-2 rounded-md my-5'>Hello, I&apos;m an indie app developer based in Spain</span>
            <div className='flex justify-between gap-2' >
              <div>
                <h1 className='text-5xl tracking-wide font-bold m-0'>Jean Ramirez</h1>
                <span>Digital Craftsman ( Developer / Entrepreneur ) </span> 
              </div>
              <div className=' hidden  !w-2/5 md:flex justify-end'>
                <Image
                  className='rounded-full w-32 h-32 border-2 border-solid border-gray-400 hover:border-sky-800 hover:scale-105'
                  alt='picture of Jean Ramirez'
                  src="/profile_image_p.jpeg"
                  width={300}
                  height={300}
                />
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <h2 className='font-semibold text-xl underline underline-offset-4 decoration-solid decoration-2 decoration-gray-500 '>Work</h2>
              <p>
                Jean is a full-stack developer based in Spain with a passion for building digital services/stuff he wants.
                He has a knack to solving 
                real-life problems with code. 
                When not online, he loves hanging out with his family and friends.
              </p>
            </div>
            <div className='flex flex-col gap-4'>
              <h2 className='font-semibold text-xl underline underline-offset-4 decoration-solid decoration-2 decoration-gray-500 '>Bio</h2>
              <ul className='flex flex-col gap-2'>
                <li>
                  <div className='flex gap-3'>
                    <span className='font-semibold'>1998</span>
                    <span>Born in Cartago, Costa Rica</span>
                  </div>
                </li>
                <li>
                  <div className='flex gap-3'>
                    <span className='font-semibold'>2022</span>
                    <span>Complete the Web Development School on Institute IES Zaidin Vergeles, Spain</span>
                  </div>
                </li>
                <li>
                  <div className='flex gap-3'>
                    <span className='font-semibold'>2022 to present</span>
                    <span>Working in Spanish local business specialized in online learning</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className='flex flex-col gap-4'>
              <h2 className='font-semibold text-xl underline underline-offset-4 decoration-solid decoration-2 decoration-gray-500 '>Stack</h2>

              <ul className='flex flex-col gap-2'>
                <li>
                  <div className='flex gap-3'>
                    <span className='font-semibold'>Languages</span>
                    <span>Javascript, Typescript</span>
                  </div>
                </li>
                <li>
                  <div className='flex gap-3'>
                    <span className='font-semibold'>Frontend</span>
                    <span>React, Angular, Next, Tailwind, CSS</span>
                  </div>
                </li>
                <li>
                  <div className='flex gap-3'>
                    <span className='font-semibold'>Backend</span>
                    <span>NodeJs, NestJs, MongoDB</span>
                  </div>
                </li>
                <li>
                  <div className='flex gap-3'>
                    <span className='font-semibold'>Others</span>
                    <span>Git, Docker</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className='flex flex-col gap-4'>
              <h2 className='font-semibold text-xl underline underline-offset-4 decoration-solid decoration-2 decoration-gray-500 '>I ♥</h2>
              <p>
                Art, Music, Photography, Travel, Design, Technology, Entrepreneurship, and more.
              </p>
            </div>
            <div className='flex flex-col gap-4'>
              <h2 className='font-semibold text-xl underline underline-offset-4 decoration-solid decoration-2 decoration-gray-500 '>On the web</h2>
              <ul className='flex flex-col gap-2'>
                <li>
                  <div className='flex gap-3'>
                    <span className='font-semibold'>Twitter</span>
                    <a href='https://twitter.com/_jeanram'>@_jeanram</a>
                  </div>
                </li>
                <li>
                  <div className='flex gap-3'>
                    <span className='font-semibold'>Github</span>
                    <a href="https://github.com/raburuz/">@raburuz</a>
                  </div>
                </li>
                <li>
                  <div className='flex gap-3'>
                    <span className='font-semibold'>Linkedin</span>
                    <a href="https://www.linkedin.com/in/jean-pablo/">@jean-pablo</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
       </div>
      </main>
      <Footer/>
    
    </>
  )
}
