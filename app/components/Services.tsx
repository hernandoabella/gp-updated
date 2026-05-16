// components/sections/Services.tsx
import Image from "next/image";
import {
  FaCompass,
  FaShip,
  FaShieldHalved,
  FaFileLines,
} from "react-icons/fa6";

const services = [
  {
    title: "Ship Agency",
    icon: FaCompass,
    image: "/ship-agency.jpeg",
    description:
      "Disciplined vessel attendance, port formalities, operational follow-up, and local execution under a more impeccable institutional standard. Complete maritime agency services with precision and protocol.",
  },
  {
    title: "Liner General Agency",
    icon: FaShip,
    image: "/linear-general.jpg",
    description:
      "Commercial poise and polished representation for principals requiring dependable visibility, direct coordination, and stronger stakeholder communication. Professional liner agency services with institutional presence.",
  },
  {
    title: "Owner Protective Agency",
    icon: FaShieldHalved,
    image: "/owner-protective.jpg",
    description:
      "A steady local presence that protects principal interests through precise supervision, cost visibility, and stronger operational control. Dedicated protection of owner's interests at every port call.",
  },
  {
    title: "Special Services",
    icon: FaFileLines,
    image: "/special-services.jfif",
    description:
      "Tailored assistance for sensitive cargoes, demanding port calls, and non-routine operational scenarios that require measured coordination. Custom solutions for complex maritime operations.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative bg-[#f7f6f2] px-6 py-24 sm:px-10 lg:px-12">
      {/* Logo-3.png en esquina superior derecha de la sección */}
      <div className="absolute top-6 right-6 z-10 opacity-30 transition-opacity duration-300 hover:opacity-80 lg:top-8 lg:right-8">
        <Image
          src="/logo-3.png"
          alt="G&P Ship Agency"
          width={80}
          height={60}
          className="h-auto w-16 lg:w-20"
        />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.42em] text-[#c1a45f]">
            Services
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl text-balance text-[#0b1e3e] sm:text-5xl">
            A polished service structure with stronger ceremonial presence.
          </h2>
          <p className="mt-5 text-base leading-8 text-[#3b3b3b]">
            The brochure makes the direction explicit: this brand should feel more like 
            a naval institution or private maritime house than a generic logistics website. 
            The service presentation now follows that standard.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group border border-[rgba(11,30,62,0.08)] bg-white p-7 shadow-[0_18px_45px_rgba(11,30,62,0.07)] transition-all duration-300 hover:shadow-[0_25px_55px_rgba(11,30,62,0.12)]"
            >
              {/* Image */}
              <div className="mb-5 overflow-hidden border border-[rgba(11,30,62,0.08)] bg-[#f7f6f2]">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={1200}
                  height={900}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Icon */}
              <service.icon className="text-lg text-[#c1a45f]" />
              
              {/* Number */}
              <p className="mt-2 font-[family-name:var(--font-subtitle)] text-[11px] uppercase tracking-[0.34em] text-[#c1a45f]">
                0{index + 1}
              </p>
              
              {/* Title */}
              <h3 className="mt-5 font-[family-name:var(--font-display)] text-3xl text-[#0b1e3e]">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="mt-4 text-sm leading-7 text-[#3b3b3b]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}