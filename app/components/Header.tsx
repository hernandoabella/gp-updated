// components/layout/Header.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaXmark } from "react-icons/fa6";

const navigation = {
  left: [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "#services" },
  ],
  right: [
    { name: "Where We Operate", href: "#coverage" },
    { name: "Contact Us", href: "/contact" },
  ],
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-md py-3"
            : "bg-white/95 backdrop-blur-sm py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Left navigation - Desktop */}
            <nav className="hidden lg:flex lg:items-center lg:gap-8">
              {navigation.left.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.26em] text-[#0b1e3e] transition-colors hover:text-[#c1a45f]"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Center - Logo */}
            <div className="flex flex-1 items-center justify-center lg:flex-none">
              <Link href="/" className="block w-48 transition-opacity hover:opacity-80">
                <Image
                  src="/logo.png"
                  alt="G&P Ship Agency & Co."
                  width={800}
                  height={600}
                  priority
                  className="h-auto w-full"
                />
              </Link>
            </div>

            {/* Right navigation - Desktop */}
            <nav className="hidden lg:flex lg:items-center lg:gap-8">
              {navigation.right.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.26em] text-[#0b1e3e] transition-colors hover:text-[#c1a45f]"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#0b1e3e] transition-colors hover:text-[#c1a45f] lg:hidden"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <FaXmark className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
        style={{ top: "72px" }}
      >
        <div className="flex flex-col p-6">
          <nav className="flex flex-col gap-6">
            {[...navigation.left, ...navigation.right].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-[family-name:var(--font-subtitle)] text-base uppercase tracking-[0.26em] text-[#0b1e3e] transition-colors hover:text-[#c1a45f]"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          {/* Mobile contact info */}
          <div className="mt-12 border-t border-[rgba(11,30,62,0.08)] pt-8">
            <p className="font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.34em] text-[#c1a45f]">
              Contact
            </p>
            <div className="mt-4 space-y-3">
              <a
                href="mailto:Info@gpshippingcm.com"
                className="block text-sm text-[#3b3b3b] transition-colors hover:text-[#c1a45f]"
              >
                Info@gpshippingcm.com
              </a>
              <a
                href="tel:+573116406379"
                className="block text-sm text-[#3b3b3b] transition-colors hover:text-[#c1a45f]"
              >
                +57 3116406379
              </a>
              <p className="text-sm text-[#3b3b3b]">
                Barranquilla, Atlántico
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-[72px]" />
    </>
  );
}