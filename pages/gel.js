import React from 'react'
import pineGel from '../public/pine-gel.jpg'
import pineGel1 from '../public/pine1.jpg'
import Image from 'next/image'
import Link from 'next/link'

const gel = () => {
  return (
    <div>
         <button
            className="bg-gradient-to-r from-[#ee7724] via-[#d8363a] to-[#b44593] inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
            
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            >
            <Link href="/">Back To Home Page</Link>
        </button>
        <section className="bg-[#f2f2f2] dark:bg-red-500  " id='products'>
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-8 lg:px-6">
            <div className="mx-auto mb-8 max-w-screen-sm lg:mb-8">
                <h2 className="md:mb-16 my-8 text-4xl tracking-tight font-extrabold text-red-500 dark:text-white">Multi Purpose Cleaner</h2>
                </div> 
            <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                
                <div className="text-center text-red-500  dark:text-red-500 ">
                <Image src={pineGel} height={140} width={170} alt="pine gel"/>
                    <h3 className="mb-1 py-2 text-2xl font-bold tracking-tight text-red-500  dark:text-white">
                        Pine Gel 400 ml
                    </h3>
                    
                    
                </div>
                <div className="text-center text-red-500  dark:text-red-500 ">
                <Image src={pineGel1} height={140} width={170} alt="pine gel"/>
                    <h3 className="mb-1 py-2 text-2xl font-bold tracking-tight text-red-500  dark:text-white">
                        Pine Gel 200 ml
                    </h3>
                    
                    
                </div>
                
            </div>  
        </div>
        </section>
    </div>
  )
}

export default gel