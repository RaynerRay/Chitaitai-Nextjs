import React from 'react'
import Image from 'next/image'
import logo from '../public/newLogo.png'

const Footer = () => {
  return (
    <div>
      <section className="relative py-24 overflow-hidden">
  <div className="relative z-10 container mx-auto px-4" >
    <div className="flex flex-wrap -m-6">
      <div className="w-full md:w-1/2 lg:w-5/12 p-6">
        <div className="flex flex-col justify-between h-full">
          <div>
            <Image
              className="mx-auto"
              height={150}
              width={250}
              src={logo}
              alt="logo"
            />
          </div>
          <div>
            <p className="mb-4 font-heading font-medium text-base">Tell A Neighbour To Tell A Neighbour</p>
            <p className="text-gray-600 text-sm">&copy; Copyright 2022. website by Rayner.</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-2/12 p-6">
        <div className="h-full">
          <h3 className="mb-9 font-heading font-semibold text-xs text-red-500 uppercase tracking-px">Quick Links</h3>
          <ul>
            <li className="mb-4"><a className="font-heading font-medium text-base text-gray-900 hover:text-gray-700" href="#about">About</a></li>
            <li className="mb-4"><a className="font-heading font-medium text-base text-gray-900 hover:text-gray-700" href="#products">Products</a></li>
            <li className="mb-4"><a className="font-heading font-medium text-base text-gray-900 hover:text-gray-700" href="#contact">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-2/12 p-6">
        <div className="h-full">
          <h3 className="mb-9 font-heading font-semibold text-xs text-red-500 uppercase tracking-px">Support</h3>
          <ul>
            <li className="mb-4"><p className="font-heading font-medium text-base text-gray-900 hover:text-gray-700" href="#">+263 78577 4848 | 0242371101</p></li>
            <li className="mb-4"><p className="font-heading font-medium text-base text-gray-900 hover:text-gray-700" href="#">sales@chitaitai.com</p></li>
          </ul>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-3/12 p-6">
        <div className="h-full">
          <h3 className="mb-9 font-heading font-semibold text-xs text-red-500 uppercase tracking-px">Our Office</h3>
          <ul>
            <li className="mb-4"><p className="font-heading font-medium text-base text-gray-900 hover:text-gray-700" href="#">Stand No.463 Sandton Industrial Park, Westgate, Harare, Zimbabwe</p></li>
            <li><p className="font-heading font-medium text-base text-red-900 hover:text-red-700" href="#"> Mon-Fri: 8:00 - 17:00 | Saturday: 8:00 - 12:00</p></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Footer