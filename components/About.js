import React from 'react'
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'ABOUT',
    description:
      'Chitaitai Chemicals (Pvt) Ltd is a privately owned business that was registered under the laws of Zimbabwe on the 6th of December 2010. The Company started by trading informally floor polish to residential areas around Zimbabwe. Chitaitai Chemicals is Zimbabwean owned organization and its name originated from the remarks of customers after using the product. Then we rebranded our products in June 2010 and that was the birth of the name Chitaitai Floor Polish. Gradually using organic growth strategies we are now supplying formal market countrywide.',
    icon: GlobeAltIcon,
  },
  {
    name: 'OBJECTIVES AND VALUES',
    description:
      'In our endeavor to provide an efficient and reliable customer service to all industry, our operations are guided by the following principles and values; Abbreviated as STIR meaning: Sharing: We allocate the workload fairly and to the most able and we share rewards equitably. Teamwork: We promote an open and collaborative approach to planning and execution of all tasks. Innovation: We are always looking for and ready to try better and simpler ways of doing things. Results: We put trust in & hold both the team and individual members accountable by means of measurable outcomes.',
    icon: LightningBoltIcon,
  },
  {
    name: 'MISSION STATEMENT',
    description:
      'To provide efficient, unmatched professional services countrywide whilst maintaining strong relationships with clients based on transparency, diligence, integrity and thorough knowledge of customerneeds.',
    icon: ScaleIcon,
  },
  
  {
    name: 'VISION',
    description:
      'Leaders in manufacturing and distribution of quality household chemicals in Zimbabwe.',
    icon: AnnotationIcon,
  },
]


const HowItWorks = () => {
  return (
    <div id='about'>
        <div className="py-12 bg-[#f2f2f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-red-500 font-semibold tracking-wide uppercase">Chitaitai </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            About Us
          </p>
          
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#1b1b21] text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    </div>
  )
}

export default HowItWorks