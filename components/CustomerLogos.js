import React from 'react'
import Image from 'next/image'
import choppies from '../public/choppies.jpg'
import pnp from '../public/picknpay.png'
import spar from '../public/spar.png'
import mm from '../public/mm.jpg'
import ok from '../public/ok.png'
import nr from '../public/nr.png'


const CustomerLogos = () => {
  return (
    <div>
        <section className="bg-white dark:bg-grey-900 md:mb-16 mt-8">
            <div className="py-8 lg:py-8 mx-auto max-w-screen-xl px-4">
                <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-grey-900 dark:text-white text-[#1d324e] md:text-4xl"> Some of our clients</h2>
                <div className="grid grid-cols-2 gap-8 text-grey-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-grey-400 md:mt-8">
                    <div  className="flex justify-center items-center">
                    <Image src={choppies} height={140} width={170} alt="choppies-logo" />                       
                    </div>
                    <div  className="flex justify-center items-center">
                    <Image src={pnp} height={140} width={170} alt="pnp-logo"/>                                             
                    </div>
                    <div  className="flex justify-center items-center">
                    <Image src={spar} height={140} width={170} alt="spar-logo"/>                                                                 
                    </div>

                    <div  className="flex justify-center items-center">
                    <Image src={mm} height={140} width={170} alt="musa-logo"/>                                                                                    
                    </div>
                    <div  className="flex justify-center items-center">
                    <Image src={ok} height={140} width={170} alt="ok-logo"/>                                                                                    
                    </div>
                    <div  className="flex justify-center items-center">
                    <Image src={nr} height={140} width={170} alt="richards-logo"/>                                                                                    
                    </div>
                    
                </div>
            </div>
        </section>
    </div>
  )
}

export default CustomerLogos