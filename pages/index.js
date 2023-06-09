import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@dev,build,start,lint/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Acanthis</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <body className='bg-grey-500 text-black '>

        <div className="container mx-auto px-5 py-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

            <div className="grid shadow-md px-4 py-4">

              <h2 class="text-lg font-bold text-gray-800">Feature 1</h2>
              <p class="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in purus magna. Nullam vel faucibus lectus. </p>
            </div>

            <div className="grid shadow-md px-4 py-4">
              <h2 class="text-lg font-bold text-gray-800">Feature 2</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in purus magna. Nullam vel faucibus lectus.</p>
            </div>

            <div className="grid shadow-md px-4 py-4">
              <h2 class="text-lg font-bold text-gray-800">Feature 3</h2>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in purus magna. Nullam vel faucibus lectus.</p>
            </div>
          </div>

        </div>

        <footer className='bg-white gap-4 shadow-md'>
          <div className="container mx-auto px-3 py-3">
            <p className='text-gray-500 text-center'>
              &copy; 2023 my Website All rights reserved!
            </p>
          </div>

        </footer>


       

      </body>














    </>


  )
}

// <header class="bg-white shadow-sm py-4">
//   <div class="container mx-auto px-4">
//     <h1 class="text-2xl font-bold text-gray-800">My Website</h1>
//   </div>
// </header>












{/* <main className= 'bg-[#f5fbff] flex items-center justify-between w-full'>
       
       <div className="left  px-12 py-6 sm:px-16 sm:py-6  md:px-20 md:py-10 lg:px-24 lg:py-16 xl:px-28 xl:py-20">
            <h1 className='font-medium text-base w-40  sm:font-medium sm:text-2xl sm:w-60 md:font-bold md:text-3xl md:w-80 lg:font-extrabold lg:text-4xl lg:w-96 xl:font-extrabold xl:text-5xl xl:w-1/2'>
              Get the visibility and guidance you need for your business
            </h1>

            <div className="py-6 font-thin text-xs w-40  sm:w-60 md:text-sm md:w-80 lg:text-base lg:w-96 xl:text-lg xl:w-96 text-[#4d4958] leading-5">
              Acanthis is a smart platform for SMEs that helps them make better decisions so they can stay ahead of the game.
            </div>

            <button className="text-xs py-1 px-2 sm:text-xs sm:py-1 sm:px-2 md:text-sm md:py-2 md:px-3 w lg:text-lg lg:py-3 lg:px-4 xl:text-xl xl:py-4 xl:px-5 bg-[#FD4C00] hover:bg-[#ac2020e0] text-white font-thin border border-[#FD4C00] hover:border-transparent rounded">
              Learn More
            </button>
          
        </div> 
       
          <div className="right border rounded-lg md:items-start md:mt-6   flex items-center justify-end mt-40">
              <div className="pictureIcon w-10  mt-3">
                <img className='rounded-full' src="/images/umair.jpeg" alt="image"/>
              </div>
            <div className="mainbox  py-3 font-thin text-xs pl-3 md:font-medium md:text-base lg:font-lg lg:text-xl xl:font-serif xl:text-2xl">
            Hey Umair 👋, your sales have increased  

           

              </div>

          </div>  

   
      </main> 


    <div className="second">
      
    </div>

      
    </>
  )
} */}








