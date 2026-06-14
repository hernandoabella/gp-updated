// components/sections/Coverage.tsx
import Link from "next/link";
import Image from "next/image";
import { FaLocationDot, FaArrowRight } from "react-icons/fa6";

const coverage = [
  {
    name: "Cartagena",
    image: "/cartagena.jpg",
    description: "Strategic maritime hub with comprehensive agency services, operational readiness, and institutional protocol.",
  },
  {
    name: "Barranquilla",
    image: "/barranquilla.jpg",
    description: "Strategic maritime hub with comprehensive agency services, operational readiness, and institutional protocol.",
  },
  {
    name: "Santa Marta",
    image: "/santa-marta.jpg",
    description: "Strategic maritime hub with comprehensive agency services, operational readiness, and institutional protocol.",
  },
  {
    name: "Buenaventura",
    image: "/buenaventura.jpg",
    description: "Strategic maritime hub with comprehensive agency services, operational readiness, and institutional protocol.",
  },
  {
    name: "Covenas",
    image: "/covenas.jpg",
    description: "Strategic maritime hub with comprehensive agency services, operational readiness, and institutional protocol.",
  },
  {
    name: "Turbo",
    image: "/turbo.jpg",
    description: "Strategic maritime hub with comprehensive agency services, operational readiness, and institutional protocol.",
  },
];

export function Coverage() {
  return (
    <section id="coverage" className="relative overflow-hidden bg-[#f7f6f2] px-6 py-28 sm:px-10 lg:px-12">
      {/* Background watermark logo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <Image
          src="/logo-3.png"
          alt="G&P Ship Agency"
          width={500}
          height={375}
          className="h-auto w-full max-w-xl"
        />
      </div>

      {/* Gold corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t border-l border-[#c1a45f]/20" />
      <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-[#c1a45f]/20" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b border-l border-[#c1a45f]/20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b border-r border-[#c1a45f]/20" />

      <div className="relative mx-auto max-w-7xl z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="flex justify-center mb-6">
            <div className="h-px w-12 bg-[#c1a45f]" />
          </div>
          
          <p className="font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.42em] text-[#c1a45f] mb-4">
            Coverage
          </p>
          
          <h2 className="font-[family-name:var(--font-display)] text-4xl text-balance text-[#0b1e3e] sm:text-5xl lg:text-6xl max-w-4xl mx-auto">
            A refined{' '}
            <span className="relative inline-block">
              Colombian coverage
              <span className="absolute -bottom-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c1a45f] to-transparent" />
            </span>
          </h2>
          
          <p className="mt-8 text-base leading-8 text-[#3b3b3b] max-w-2xl mx-auto">
            A stronger navigation system deserves equally strong destination anchors. 
            We maintain strategic presence across Colombia's most vital maritime corridors.
          </p>
        </div>

        {/* Ports Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coverage.map((port, index) => (
            <div
              key={port.name}
              className="group relative overflow-hidden border border-[rgba(11,30,62,0.08)] bg-white transition-all duration-300 hover:shadow-2xl hover:border-[#c1a45f]/30"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1e3e]/60 via-transparent to-transparent z-10" />
                <Image
                  src={port.image}
                  alt={`Port of ${port.name}`}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Port number badge */}
                <div className="absolute top-3 left-3 z-20 bg-[#c1a45f] px-3 py-1">
                  <p className="font-[family-name:var(--font-subtitle)] text-[10px] font-bold tracking-[0.2em] text-[#0b1e3e]">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                {/* Port name */}
                <div className="flex items-start justify-between">
                  <h3 className="font-[family-name:var(--font-display)] text-2xl text-[#0b1e3e]">
                    {port.name}
                  </h3>
                  <FaLocationDot className="text-[#c1a45f] opacity-50 transition-opacity group-hover:opacity-100" />
                </div>
                
                {/* Decorative line */}
                <div className="my-3 h-px w-12 bg-[#c1a45f]/30 transition-all duration-300 group-hover:w-20" />
                
                {/* Description */}
                <p className="text-sm text-[#3b3b3b]/70">
                  {port.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-none border-2 border-[#c1a45f] bg-transparent px-8 py-4 font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.26em] text-[#0b1e3e] transition-all duration-300 hover:bg-[#c1a45f] hover:text-[#f7f6f2]"
          >
            Discuss your port requirements
            <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}