import Head from 'next/head'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Δrkift | Web design</title>
        <meta name="description" content="Digital products to Optimize your life" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar></Navbar>
        <div className='flex flex-col gap-32'>

          <div className='h-[500px] flex items-center '>
            <div className='flex flex-col gap-1'>
              <p>
                <span className='font-black'>Δrkift.{' '}</span>
                <span className='font-light'>Donde los datos se convierten en inspiración</span>   
              </p>
              <h1 className='text-5xl font-black tracking-wide leading-snug'>
                Grandes Cosas Suceden<br /> Cuando Trabajamos <br /> <span className='text-sky-900'>Juntos</span>
              </h1>
              <span className='text-lg font-light'>Lleva tu marca a nuevas alturas en el espacio digital </span>
              <div className='mt-6'>
                <button className='btn btn-primary rounded-md'>Contactanos</button>
              </div>
            </div>
          </div>

          <div className='flex gap-4 items-start bg-primary rounded-xl min-h-[500px] p-12 text-white'>
            <div className='flex flex-col gap-4 w-1/3'>
              <div className='flex items-center gap-2'>
                <div className='w-14 h-3 border border-solid opacity-50 rounded-md'></div>
                <span className='font-normal  opacity-70'>¿Quienes somos?</span>
              </div>
              <div className='flex flex-col gap-2'>
                <h2 className='font-normal text-4xl  leading-tight'>
                  <span className='opacity-50'>Somos </span>
                  <br />
                  <span>Creativos</span>
                </h2>
                <span>
                  Somos una agencia de diseño web enfocada en el desarrollo de productos digitales que ayudan a las empresas a alcanzar sus objetivos.
                </span>
              </div>
              <div className='flex items-center gap-2 mt-4'>
                <div className='h-16 w-8 border border-solid border-white rounded-3xl flex flex-col items-center justify-center'>
                  <svg xmlns="http  ://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>  
                  <svg xmlns="http  ://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 opacity-70">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>  
                  <svg xmlns="http  ://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 opacity-50">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>  
                </div>
                <div>
                  <span className='text-sm opacity-70'>Scroll para explorar</span>
                </div>
              </div>
            </div>
            
            <div className='flex flex-col gap-2 w-1/3'>
              <div className='flex gap-2'>
                <span>.</span>
                <span>.</span>
                <span>.</span>
              </div>
            </div>
            <div>

            </div>
            <div className='flex flex-col gap-2 w-1/3'>.</div>
          </div>

          <div className='flex gap-60 min-h-[500px]'>
            <div className='flex gap-4 items-center w-1/3'>
              <h2 className='font-semibold text-4xl leading-tight'>
                <span className='whitespace-nowrap'>Servicios que</span>
                <br />
                <span>ofrecemos</span>
              </h2>
            </div>
            {/* Grid */}
            <div className='flex gap-2 text-white'>
              <div className='flex flex-col gap-2 mt-10'>
                <div className='@card'>
                  <h3>Webs a Medida</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio consequatur maxime velit aspernatur ullam? Explicabo voluptatibus tenetur magni nisi, ullam possimus reprehenderit, necessitatibus itaque veniam odit doloremque soluta vitae. Ex!
                  </p>
                </div>
                <div className='@card '>
                  <h3>Wordpress</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio consequatur maxime velit aspernatur ullam? Explicabo voluptatibus tenetur magni nisi, ullam possimus reprehenderit, necessitatibus itaque veniam odit doloremque soluta vitae. Ex!
                  </p>
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <div className='@card '>
                  <h3>Diseño Web</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio consequatur maxime velit aspernatur ullam? Explicabo voluptatibus tenetur magni nisi, ullam possimus reprehenderit, necessitatibus itaque veniam odit doloremque soluta vitae. Ex!
                  </p>
                </div>
                <div className='@card '>
                  <h3>Software a medida</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio consequatur maxime velit aspernatur ullam? Explicabo voluptatibus tenetur magni nisi, ullam possimus reprehenderit, necessitatibus itaque veniam odit doloremque soluta vitae. Ex!
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
        <Footer/>
      </main>
    </>
  )
}
