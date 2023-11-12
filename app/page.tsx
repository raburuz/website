/* NEXT */
import Image from "next/image";

/* APP */
import { seo} from "@/lib/seo";
import { Rocket } from "@/icons/Rocket";

export const metadata = seo()

export default function Page() {
  return (
    <main className='px-2 max-w-2xl mx-auto'>
      {/* Presentation */}
      <div className="my-32 transition duration-300 opacity-100">
        <div className="flex items-center space-x-6">
          <div className="rounded-full bg-gradient-to-tl from-purple-900/60 to-blue-400/60 shadow-lg p-[3px] ring-[5px] ring-purple-500/10">
            <div className="rounded-full p-px h-[64px] w-[64px]">
              <Image
                className='p-px rounded-full object-cover transition duration-300 select-none pointer-events-none'
                height={100}
                width={100}
                src={"/jean_pablo_calderon_ramirez.jpg"}
                alt='A photo of Jean Pablo'
              />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-medium text-blue-100/80 sm:text-4xl">Jean Ramírez</h1>
            <p className="align-middle text-lg leading-6 text-blue-100/50">
              Life enthusiast seeking to achieve freedom 🌴🌍...
            </p>
          </div>
        </div>    
        <p className="mt-7 text-lg text-blue-100/90 sm:mt-9">
          Welcome to my digital oasis 🏝️ where I invite you to explore my digital products, projects, experiments 🧑‍💻 and perhaps read some nice blog posts written in my own handwriting 😎.
        </p>
        <div className="mt-5 flex flex-row gap-4 text-blue-100/50">
          <span>#costarica🏖️</span>
          <span>#spain💃</span>
          <span>#world🌎</span>
        </div>      
      </div>

      {/* Products */}
      <div className="my-32 transition duration-300 opacity-100">
        <h2 id="products" className="text-2xl font-medium text-blue-100/80 sm:text-3xl">Products</h2>
        <div className="w-full mt-6 flex flex-row flex-wrap gap-2 sm:gap-8 ">
            {/* BOILERPLATE */}
            <>
              <div className='w-full sm:w-[300px] rounded-lg bg-gradient-to-tl from-purple-900/60 to-blue-400/60 shadow-lg p-[2px] group transform transition ease-out sm:hover:scale-105 hover:from-purple-700 hover:to-blue-400 hover:shadow-blue-500/25 active:translate-y-px'>
                <div className="p-4 bg-zinc-800 rounded-lg">
                  <div className="inline-block rounded-lg bg-gradient-to-tl from-purple-500/80 to-blue-400/80 p-1 shadow-lg transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-[10px] group-hover:shadow-purple-500/40 group-active:translate-y-1">
                    <Rocket/>
                  </div>
                  <div className="mt-2">
                    <h3 className="text-lg leading-6 text-blue-100/90">Founder Boilerplate</h3>
                    <p className="mt-2 text-sm text-blue-100/50">Ship your project in days not months</p>
                    <div className="mt-2 text-blue-100/90">
                      <span>$ 39.99{" "}</span>
                      <span className="text-xs">/one-time</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
        </div>
      </div>
    </main>
  )
}
