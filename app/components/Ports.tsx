"use client";

import { useLanguage } from "@/app/context/LanguageContext";

const ports = [
  {
    name: "Barranquilla",
    flag: { es: "Costa Atlántica", en: "Atlantic Coast" },
    desc: {
      es: "Puerto Palermo — sede central de operaciones G&P. Terminal fluvial y marítimo sobre el Río Magdalena.",
      en: "Puerto Palermo — G&P operations headquarters. River and maritime terminal on the Magdalena River.",
    },
  },
  {
    name: "Cartagena",
    flag: { es: "Costa Atlántica", en: "Atlantic Coast" },
    desc: {
      es: "Puerto de Cartagena — uno de los más grandes de América Latina. Terminal de contenedores, cruceros y carga general.",
      en: "Port of Cartagena — one of the largest in Latin America. Container, cruise, and general cargo terminal.",
    },
  },
  {
    name: "Santa Marta",
    flag: { es: "Costa Atlántica", en: "Atlantic Coast" },
    desc: {
      es: "Puerto de Santa Marta — puerto carbonero y multi-propósito. Acceso estratégico a la Sierra Nevada.",
      en: "Port of Santa Marta — coal and multi-purpose port. Strategic access to the Sierra Nevada.",
    },
  },
  {
    name: "Buenaventura",
    flag: { es: "Costa Pacífica", en: "Pacific Coast" },
    desc: {
      es: "Principal puerto del Pacífico colombiano. Terminal de contenedores TCBUEN — puerta de entrada al Asia-Pacífico.",
      en: "Colombia's main Pacific port. TCBUEN container terminal — gateway to Asia-Pacific.",
    },
  },
  {
    name: "Turbo",
    flag: { es: "Costa Atlántica", en: "Atlantic Coast" },
    desc: {
      es: "Terminal del Golfo de Urabá. Exportación de banano, plátano y productos agroindustriales.",
      en: "Urabá Gulf terminal. Export of banana, plantain, and agro-industrial products.",
    },
  },
  {
    name: "Coveñas",
    flag: { es: "Zonas offshore", en: "Offshore zones" },
    desc: {
      es: "Atención a plataformas y embarcaciones de soporte en el Caribe colombiano.",
      en: "Attendance to platforms and support vessels in the Colombian Caribbean.",
    },
  },
];

export function Ports() {
  const { lang } = useLanguage();

  return (
    <section id="puertos" className="bg-[#0b1e3e] py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-2 mb-16">
          <div>
            <p className="font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.42em] text-[#c1a45f] mb-4">
              {lang === "es" ? "Presencia nacional" : "National presence"}
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-light text-[#f7f6f2] leading-tight">
              {lang === "es" ? "Colombia, de océano a océano." : "Colombia, ocean to ocean."}
            </h2>
          </div>
          <div>
            <p className="font-[family-name:var(--font-subtitle)] text-sm leading-7 text-[rgba(247,246,242,0.7)]">
              {lang === "es"
                ? "G&P opera en los principales puertos marítimos de Colombia, cubriendo tanto la Costa Atlántica como el Pacífico. Nuestra presencia multi-puerto garantiza continuidad de servicio sin importar el destino del buque."
                : "G&P operates in Colombia's main maritime ports, covering both the Atlantic Coast and the Pacific. Our multi-port presence guarantees service continuity regardless of the vessel's destination."}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(193,164,95,0.1)]">
          {ports.map((port) => (
            <div
              key={port.name}
              className="bg-[rgba(255,255,255,0.03)] p-8 border-b-2 border-transparent transition-all duration-300 hover:bg-[rgba(255,255,255,0.07)] hover:border-[#c1a45f] cursor-default"
            >
              <p className="font-[family-name:var(--font-subtitle)] text-[10px] uppercase tracking-[0.2em] text-[#c1a45f] mb-3">
                {port.flag[lang]}
              </p>
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-normal text-[#f7f6f2] mb-2">
                {port.name}
              </h3>
              <p className="font-[family-name:var(--font-subtitle)] text-sm leading-7 text-[rgba(247,246,242,0.55)]">
                {port.desc[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
