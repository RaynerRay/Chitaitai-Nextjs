import React from "react";
import Flag from '../public/flag.png'
import herobg from '../public/hero.png'
import Image from 'next/image'

const Hero = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full p-4 mt-4 pt-10"
      id="home"
    >
        
      <div className="py-2 flex-1 flex flex-col  justify-center gap-6">
        <div className="flex flex-1 flex-col items-center">
        <div className="md:mb-16 md:mt-16 flex items-center gap-2 justify-center bg-red-500 px-4 py-1 rounded-full">
          <p className="text-base text-white font-normal">
            Zimbabwe
          </p>
          <div className="w-8 h-5 rounded-full overflow-hidden drop-shadow-xl ">
          <Image
              src={Flag}
              
              alt="flag"
            />
          </div>
        </div>
        </div>

        <div className="py-2 flex-1 flex flex-col items-end justify-center gap-6">
           

            <p className="text-base md:w-[80%]">
            <div>
            <p className="p-4 md:mb-4 py-2 text-[1.0rem] lg:text-[3.0rem] text-[#1d324e] font-bold ">
                Find The Best Rated Local&nbsp;
            <span className="md:mt-6 md:mb-10 inline-block align-baseline ...">Service Providers</span>  
            
            </p> 
            </div>
                
                
            <form>   
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                <div class="relative">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="default-search" className="block p-4 mr-16 pl-10 w-full text-sm
                    text-gray-900 bg-gray-50 rounded-lg border border-gray-600 focus:ring-gray-500
                    focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                    dark:text-white dark:focus:ring-[#] dark:focus:border-red-500"
                        placeholder="Search Builders, Wedding Venues, Photographers..." required="" />

                    <button type="submit" className="hidden md:block text-white absolute right-2.5 bottom-2.5
                    bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none
                    focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2
                    dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Search 
                    </button>
                </div>
            </form>

            </p>

            {<button
            type="button"
            className="md:hidden text-white bg-gradient-to-br from-red-500 to-red-500  w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
            >
                Search 
            </button>}
        </div>
    </div>
      
      <div className="py-2 flex-1 flex items-center relative">
        

        <div className="w-full h-full absolute flex items-center justify-center lg:px-32  py-4 gap-4 flex-wrap ">
         <div className="hidden md:block">
            <Image
             src={herobg}
             alt="hero bg"
            />
         </div>
        </div>
      </div>

      
    </section>
  );
};

export default Hero;
