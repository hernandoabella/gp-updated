'use client';

import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import gsap from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    title: 'Shipbroker',
    bg: '/images/shipbroker.jpg',
    description: 'We connect clients with ships and cargoes, offering brokerage excellence across global markets.'
  },
  {
    title: 'Logistics Solutions',
    bg: '/images/logistics.jpg',
    description: 'Our logistics services streamline the supply chain, ensuring timely and cost-effective delivery.'
  },
  {
    title: 'Naval Repairs',
    bg: '/images/naval.jpg',
    description: 'Expert repairs and maintenance solutions for commercial vessels, ensuring safety and performance.'
  },
  {
    title: 'Maritime Representations',
    bg: '/images/maritime.jpg',
    description: 'We represent key maritime interests, fostering reliable connections in the shipping industry.'
  },
  {
    title: 'Shipper Owned Container',
    bg: '/images/soc.jpg',
    description: 'Affordable SOC services that give shippers control, flexibility, and cost savings.'
  },
  {
    title: 'Container Rental and Sales',
    bg: '/images/container.jpg',
    description: 'We offer container leasing and sales solutions tailored to your cargo transport needs.'
  },
];

export default function HorizontalAccordionSlider() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );
    }
  }, []);

  return (
    <section ref={containerRef} className="w-full py-16">
      <h2 className="text-center text-[#be8f33] text-3xl md:text-5xl font-bold mb-10">
        Our Services
      </h2>
      <Swiper
        spaceBetween={10}
        slidesPerView={1.2}
        breakpoints={{
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3.5 },
        }}
        className="px-6 md:px-12"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              onClick={() =>
                setActiveIndex(index === activeIndex ? null : index)
              }
              className="cursor-pointer overflow-hidden relative h-[300px] md:h-[400px] group shadow-lg"
              style={{ backgroundImage: `url(${slide.bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
                <h3 className="text-white text-xl md:text-2xl font-bold text-center group-hover:text-[#be8f33] transition-all">
                  {slide.title}
                </h3>
              </div>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center text-center text-white px-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="mb-4 text-md md:text-lg">{slide.description}</p>
                    <a
                      href="/business-lines"
                      className="inline-block border border-white px-5 py-2 rounded-full hover:bg-[#be8f33] hover:border-[#be8f33] transition-all"
                    >
                      Learn More
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}