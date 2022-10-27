import React from 'react'
import floor from '../public/floor-polish-4.jpg'
import pineGel from '../public/pine-gel.jpg'
import shoePolish from '../public/shoe.jpg'
import dish from '../public/dish.jpg'
import five from '../public/5L.jpg'
import one from '../public/1L.jpg'
import soon from '../public/cs.jpg'
import Image from 'next/image'
import Link from 'next/link'

const Featured = () => {
  return (
    <div>
        <section className="bg-[#f2f2f2] dark:bg-red-500  " id='products'>
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-8 lg:px-6">
            <div className="mx-auto mb-8 max-w-screen-sm lg:mb-8">
                <h2 className="md:mb-16 my-8 text-4xl tracking-tight font-extrabold text-red-500 dark:text-white">Our Products</h2>
                </div> 
            <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className="text-center text-red-500  dark:text-red-500  ">
                    <Image src={floor} height={140} width={170} alt="floor polish" />
                    <h3 className="mb-1 py-2 text-2xl font-bold tracking-tight text-red-500  dark:text-white">
                    <Link href="/floor">Floor Polish</Link>
                    </h3>
                    
                </div>
                <div className="text-center text-red-500  dark:text-red-500 ">
                <Image src={pineGel} height={140} width={170} alt="pine gel"/>
                    <h3 className="mb-1 py-2 text-2xl font-bold tracking-tight text-red-500  dark:text-white">
                        <Link href="/gel">Pine Gel</Link>
                    </h3>
                    
                    
                </div>
                <div className="text-center text-red-500  dark:text-red-500 ">
                <Image src={shoePolish} height={140} width={170} alt="shoe polish"/>
                    <h3 className="mb-1 py-2 text-2xl font-bold tracking-tight text-red-500  dark:text-white">
                    <Link href="/shoe">Shoe Polish</Link>
                    </h3>
                   
                    
                </div>
                <div className="text-center text-red-500  dark:text-red-500 ">
                <Image src={dish} height={140} width={170} alt="dish washer"/>
                    <h3 className="mb-1 py-2 text-2xl font-bold tracking-tight text-red-500  dark:text-white">
                    <Link href="/dish">Dish Washer</Link>
                    </h3>
                    
                    
                </div>
                <div className="text-center text-red-500  dark:text-red-500 ">
                <Image src={soon} height={140} width={170} alt="washing paste"/>
                <h3 className="mb-1 py-2 text-2xl font-bold tracking-tight text-red-500  dark:text-white">
                Washing Paste
                    </h3>
          
                    
                </div>
              
               
                <div className="text-center text-red-500  dark:text-red-500 ">
                <Image src={soon} height={140} width={170} alt="toilet cleaner"/>
                    <h3 className="mb-1 py-2 text-2xl font-bold tracking-tight text-red-500  dark:text-white">
                    Toilet Cleaner
                    </h3>
            
                    
                </div>
            </div>  
        </div>
        </section>
    </div>
  )
}

export default Featured