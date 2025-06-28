'use client';

import { motion } from 'framer-motion';

const CTA = () => {
    return (
        <section className="bg-white py-24 px-4 w-full">
            <div className="max-w-6xl mx-auto text-center">
                {/* CTA Text */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-3xl font-light text-gray-900"
                >
                    We simplify, streamline, and support — helping you find the right solution every time.
                </motion.h2>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mt-10"
                >
                    <a href="/about-us">
                        <button className="m-auto flex items-center gap-2 border border-[#C9A44C] text-sm px-4 py-2 rounded-full hover:bg-[#C9A44C] hover:text-white transition">
                            Learn More
                        </button>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
