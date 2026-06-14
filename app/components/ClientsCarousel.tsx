"use client";

import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";

const clients = [
  { name: "Sociedad Portuaria de Barranquilla", logo: "/clients/sociedadportuariadebarranquilla.png" },
  { name: "Sociedad Portuaria de Santa Marta", logo: "/clients/sociedadportuariadesantamarta.png" },
  { name: "River Port", logo: "/clients/riverport.png" },
  { name: "Transnaval", logo: "/clients/transnaval.png" },
  { name: "Titanmed SARL", logo: "/clients/TitanmedSARL.png" },
  { name: "SMITCO", logo: "/clients/SMITCO.png" },
  { name: "Florens Asset Management", logo: "/clients/florensassetmanagment.png" },
  { name: "Renta Containers JJ", logo: "/clients/rentacontainersjj.png" },
];

export function ClientsCarousel() {
  const { lang } = useLanguage();

  return (
    <section className="bg-[#f7f6f2] py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 mb-12">
        <div className="text-center">
          <p className="font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.42em] text-[#c1a45f]">
            {lang === "es" ? "Clientes" : "Clients"}
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl text-balance text-[#0b1e3e] sm:text-5xl">
            {lang === "es" ? "Confían en nosotros" : "Trusted by"}
          </h2>
        </div>
      </div>

      <div className="relative">
        {/* Gradient edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 z-10 bg-gradient-to-r from-[#f7f6f2] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 z-10 bg-gradient-to-l from-[#f7f6f2] to-transparent pointer-events-none" />

        <div className="marquee-track">
          <div className="marquee-content">
            {[...clients, ...clients].map((client, idx) => (
              <div
                key={`${client.name}-${idx}`}
                className="marquee-item"
              >
                <div className="w-36 h-20 sm:w-44 sm:h-24 flex items-center justify-center px-4 py-3 bg-white border border-[rgba(11,30,62,0.06)] shadow-[0_2px_12px_rgba(11,30,62,0.04)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(11,30,62,0.1)] hover:border-[rgba(193,164,95,0.3)] group">
                  <div className="relative w-full h-full flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={200}
                      height={80}
                      className="max-w-full max-h-full w-auto h-auto object-contain"
                      style={{ filter: "brightness(0) saturate(0) invert(30%) sepia(10%) hue-rotate(190deg)" }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .marquee-track {
          width: 100%;
          overflow: hidden;
          mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
        }
        .marquee-content {
          display: flex;
          gap: 1.5rem;
          animation: marqueeScroll 30s linear infinite;
          width: max-content;
        }
        .marquee-item {
          flex-shrink: 0;
        }
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track:hover .marquee-content {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
