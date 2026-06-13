"use client";

import Image from "next/image";
import { FaCompass, FaShip, FaShieldHalved, FaFileLines } from "react-icons/fa6";
import { useLanguage } from "@/app/context/LanguageContext";

const services = [
  {
    title: { es: "Agenciamiento de Buques", en: "Ship Agency" },
    icon: FaCompass,
    image: "/ship-agency.jpeg",
    description: {
      es: "Representación oficial del armador ante autoridades portuarias, de aduana, migración y capitanía de puerto. Gestionamos cada trámite con protocolo y rigor institucional.",
      en: "Official representation of the shipowner before port, customs, immigration, and harbor master authorities. We manage every procedure with protocol and institutional rigor.",
    },
  },
  {
    title: { es: "Agencia General de Línea", en: "Liner General Agency" },
    icon: FaShip,
    image: "/linear-general.jpg",
    description: {
      es: "Representación comercial para navieras regulares que requieren visibilidad confiable, coordinación directa y comunicación institucional con los actores portuarios.",
      en: "Commercial poise and polished representation for principals requiring dependable visibility, direct coordination, and stronger stakeholder communication.",
    },
  },
  {
    title: { es: "Agencia Protectora del Armador", en: "Owner Protective Agency" },
    icon: FaShieldHalved,
    image: "/owner-protective.jpg",
    description: {
      es: "Presencia local que protege los intereses del principal mediante supervisión precisa, visibilidad de costos y control operativo.",
      en: "A steady local presence that protects principal interests through precise supervision, cost visibility, and stronger operational control.",
    },
  },
  {
    title: { es: "Servicios Especiales", en: "Special Services" },
    icon: FaFileLines,
    image: "/special-services.jfif",
    description: {
      es: "Asistencia personalizada para cargas sensibles, escalas exigentes y escenarios operativos no rutinarios que requieren coordinación especializada.",
      en: "Tailored assistance for sensitive cargoes, demanding port calls, and non-routine operational scenarios that require measured coordination.",
    },
  },
];

export function Services() {
  const { lang } = useLanguage();

  return (
    <section id="servicios" className="relative bg-[#f7f6f2] px-6 py-24 sm:px-10 lg:px-12">
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
        <div className="max-w-2xl">
          <p className="font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.42em] text-[#c1a45f]">
            {lang === "es" ? "Área de servicios" : "Services"}
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl text-balance text-[#0b1e3e] sm:text-5xl">
            {lang === "es" ? "Capacidades operativas" : "Operational capabilities"}
          </h2>
          <p className="mt-5 text-base leading-8 text-[#3b3b3b] font-[family-name:var(--font-subtitle)]">
            {lang === "es"
              ? "Cubrimos el ciclo completo de la escala marítima: desde la coordinación de llegada hasta el zarpe final, con atención especializada a tripulación, autoridades y carga."
              : "We cover the complete vessel call cycle: from arrival coordination to final departure, with specialized attention to crew, authorities, and cargo."}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <article
              key={service.title.en}
              className="group border border-[rgba(11,30,62,0.08)] bg-white p-7 shadow-[0_18px_45px_rgba(11,30,62,0.07)] transition-all duration-300 hover:shadow-[0_25px_55px_rgba(11,30,62,0.12)]"
            >
              <div className="mb-5 overflow-hidden border border-[rgba(11,30,62,0.08)] bg-[#f7f6f2]">
                <Image
                  src={service.image}
                  alt={service.title.en}
                  width={1200}
                  height={900}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <service.icon className="text-lg text-[#c1a45f]" />

              <p className="mt-2 font-[family-name:var(--font-subtitle)] text-[11px] uppercase tracking-[0.34em] text-[#c1a45f]">
                0{index + 1}
              </p>

              <h3 className="mt-5 font-[family-name:var(--font-display)] text-3xl text-[#0b1e3e]">
                {service.title[lang]}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#3b3b3b] font-[family-name:var(--font-subtitle)]">
                {service.description[lang]}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
