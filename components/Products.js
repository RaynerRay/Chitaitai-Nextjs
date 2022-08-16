import React from 'react'
import floor from '../public/floor-polish-4.jpg'
import pineGel from '../public/pine-gel.jpg'
import shoePolish from '../public/shoe.jpg'
import dish from '../public/dish.jpg'
import five from '../public/5L.jpg'
import one from '../public/1L.jpg'
import logo from '../public/newLogo.png'
import Image from 'next/image'

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
                    <Image src={floor} height={140} width={170} />
                    <h3 className="mb-1 py-2 text-2xl font-bold tracking-tight text-red-500  dark:text-white">
                        <a href="#">Floor Polish</a>
                    </h3>
                    
                </div>
                <div className="text-center text-red-500  dark:text-red-500 ">
                <Image src={pineGel} height={140} width={170} />
                    <h3 className="mb-1 py-2 text-2xl font-bold tracking-tight text-red-500  dark:text-white">
                        <a href="#">Pine Gel</a>
                    </h3>
                    
                    
                </div>
                <div className="text-center text-red-500  dark:text-red-500 ">
                <Image src={shoePolish} height={140} width={170} />
                    <h3 className="mb-1 py-2 text-2xl font-bold tracking-tight text-red-500  dark:text-white">
                        <a href="#">Shoe Polish</a>
                    </h3>
                   
                    
                </div>
                <div className="text-center text-red-500  dark:text-red-500 ">
                <Image src={dish} height={140} width={170} />
                    <h3 className="mb-1 py-2 text-2xl font-bold tracking-tight text-red-500  dark:text-white">
                        <a href="#">Dish Washer</a>
                    </h3>
                    
                    
                </div>
                <div className="text-center text-red-500  dark:text-red-500 ">
                <Image src={logo} height={140} width={170} />
                <h3 className="mb-1 py-2 text-2xl font-bold tracking-tight text-red-500  dark:text-white">
                        <a href="#">Washing Paste</a>
                    </h3>
          
                    
                </div>
                <div className="text-center text-red-500  dark:text-red-500 ">
                <Image src={five} height={140} width={170} />
                    <h3 className="mb-1 py-2 text-2xl font-bold tracking-tight text-red-500  dark:text-white">
                        <a href="#">5 Litres</a>
                    </h3>
                    
                    
                </div>
                <div className="text-center text-red-500  dark:text-red-500 ">
                <Image src={one} height={140} width={170} />
                    <h3 className="mb-1 py-2 text-2xl font-bold tracking-tight text-red-500  dark:text-white">
                        <a href="#">1 Litre</a>
                    </h3>
                   
                    
                </div>
                <div className="text-center text-red-500  dark:text-red-500 ">
                <Image src={dish} height={140} width={170} />
                    <h3 className="mb-1 py-2 text-2xl font-bold tracking-tight text-red-500  dark:text-white">
                        <a href="#">Toilet Cleaner</a>
                    </h3>
            
                    
                </div>
            </div>  
        </div>
        </section>
    </div>
  )
}

export default Featured