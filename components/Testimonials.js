import React from 'react'


const Testimonials = () => {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden" id='testimonials'>
  <div className="container mx-auto px-4">
    <h2 className="mb-5 max-w-2xl mx-auto font-heading font-bold text-center text-6xl sm:text-7xl text-gray-900">From Our Managers</h2>
    <p className="mb-16 text-base max-w-md mx-auto text-center text-gray-600">CHITAITAI CHEMICALs (PVT) LTD</p>
    <div className="flex flex-wrap -m-5">
      <div className="w-full md:w-1/3 p-5">
        <div className="h-full p-0.5 bg-gradient-cyan transform hover:-translate-y-3 rounded-10 transition ease-out duration-1000">
          <div className="h-full px-7 py-8 bg-white rounded-lg">
            <p className="mb-2 text-lg text-gray-900">&ldquo;We offer a specialized product range. We are currently into manufacturing household and 
plans are underway to produce industrial chemicals.&rdquo;</p>
            <h3 className="mb-1.5 font-heading font-bold text-lg text-gray-900">T. Kare </h3>
            <p className="text-sm text-gray-600">Operations Director</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-5">
        <div className="h-full p-0.5 bg-gradient-cyan transform hover:-translate-y-3 rounded-10 shadow-5xl transition ease-out duration-1000">
          <div className="h-full px-7 py-8 bg-white rounded-lg">
            <p className="mb-2 text-lg text-gray-900">&ldquo;We believe that the attainment of excellence is only possible through investing in 
highly qualified and professional personnel.&rdquo;</p>
            <h3 className="mb-1.5 font-heading font-bold text-lg text-gray-900">S. Tekeshe</h3>
            <p className="text-sm text-gray-600">Managing Director</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-5">
        <div className="h-full p-0.5 bg-gradient-cyan transform hover:-translate-y-3 rounded-10 transition ease-out duration-1000">
          <div className="h-full px-7 py-8 bg-white rounded-lg">
            <p className="mb-2 text-lg text-gray-900">&ldquo;We put trust in & hold both the team and individual members accountable by means 
of measurable outcomes &rdquo;</p>
            <h3 className="mb-1.5 font-heading font-bold text-lg text-gray-900">Mr B.Mafurirano</h3>
            <p className="text-sm text-gray-600">HR and Risk Director</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Testimonials;