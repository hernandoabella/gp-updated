'use client'; // if you're using Next.js App Router

import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat text-white py-20 px-6 bg-[url(/images/whyus.jpg)]">
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#be8f33] mb-6">Why Choose Us?</h2>

        <p className="text-lg md:text-xl mb-6">
          With a comprehensive presence across the maritime industry, we go beyond meeting our clients’ needs — we deliver exceptional service that redefines expectations.
        </p>

        <p className="text-lg md:text-xl mb-6">
          Our global team is equipped to uncover every opportunity available, helping clients stay ahead by leveraging emerging market trends. Backed by years of experience and deep-rooted connections in the shipping world, we open doors, provide peace of mind, and make business happen — wherever you are in the world.
        </p>

        <p className="text-lg md:text-xl mb-8">
          We are more than a service provider — we are your strategic partner. Through personalized support, transparent communication, and a proactive approach, we ensure your business thrives in a dynamic maritime environment. When you work with us, you gain a dedicated ally who is as invested in your success as you are.
        </p>

        <a
          href="#contact"
          className="inline-block border border-white rounded-full px-6 py-3 hover:border-[#be8f33] hover:bg-[#be8f33] hover:text-white transition-all duration-300"
        >
          Contact Us
        </a>
      </motion.div>
    </section>
  );
}