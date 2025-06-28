'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMdMenu, IoMdClose } from 'react-icons/io';

const navItems = ['About Us', 'Business Lines', 'Locations', 'People' , 'Contact'];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={180}
            height={90}
            className="cursor-pointer transition-transform duration-300 hover:scale-110"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 text-lg font-semibold">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group transition duration-300"
            >
              <span className="group-hover:text-teal-500 transition duration-300">
                {item}
              </span>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-teal-600 transition-all duration-300">
            Let’s Talk
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            key="mobile-menu"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, type: 'spring', bounce: 0.3 }}
            className="md:hidden bg-white shadow-lg px-6 pt-4 pb-6 space-y-3"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.05 * i }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-medium text-gray-800 hover:text-teal-600 transition-all duration-300"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <button className="w-full mt-4 bg-black text-white py-2 rounded-full hover:bg-teal-600 transition-all duration-300">
                Lets Talk
              </button>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
