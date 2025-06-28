import React from 'react'
import Image from 'next/image'

const OurExpertise = () => {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-center">
        
        {/* Image Section */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-[#be8f33] shadow-lg">
            <Image
              src="/images/ourexpertise.jpg"
              alt="Our Expertise"
              width={288}
              height={288}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="lg:col-span-6">
          <h3 className="text-3xl md:text-4xl font-bold text-[#0b2f61] mb-4">Our Expertise</h3>
          <p className="text-lg md:text-xl mb-4">
            We take a pro-active approach to long-term strategic planning for our clients.
          </p>
          <p className="text-base md:text-lg mb-6">
            Our broking, operations and research teams are ready for all our clients' day to day requirements rooted in a shared long-term vision.
            <br /><br />
            Working in this way over many decades, we have built a market coverage that is among the most comprehensive. Our close relations with a great number of the leading shipowners, industrial producers, traders and shippers, greatly attest to this.
          </p>
          <a
            href="/business-lines"
            className="inline-block px-6 py-3 border border-[#be8f33] rounded-full hover:bg-[#be8f33]  hover:text-white transition-all duration-300"
          >
            See more
          </a>
        </div>
      </div>
    </section>
  )
}

export default OurExpertise