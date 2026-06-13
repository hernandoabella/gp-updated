"use client";

import Image from "next/image";
import { FaArrowRight, FaCompass } from "react-icons/fa6";
import { useLanguage } from "@/app/context/LanguageContext";

const differentiators = [
  {
    es: "Representación con protocolo y un estándar visiblemente superior.",
    en: "Representation with protocol and a visibly higher standard.",
  },
  {
    es: "Claridad institucional para armadores, fletadores y autoridades portuarias.",
    en: "Editorial clarity for owners, charterers, and port authorities.",
  },
  {
    es: "Honrar el puerto. Ejecutar con precisión.",
    en: "Honor the port. Execute with precision.",
  },
];

const metrics = [
  { value: "24/7", label: { es: "Disponibilidad operativa", en: "Operational readiness" } },
  { value: "+20", label: { es: "Años de disciplina marítima", en: "Years of maritime discipline" } },
  { value: "8", label: { es: "Puertos estratégicos", en: "Strategic Colombian ports" } },
  { value: "100%", label: { es: "Supervisión de alto nivel", en: "Senior-level oversight" } },
];

export function Hero() {
  const { lang } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-[#f7f6f2] px-6 pb-24 pt-12 sm:px-10 lg:px-12">
      <div className="absolute inset-x-0 top-0 h-[32rem] bg-[linear-gradient(180deg,rgba(11,30,62,0.03),rgba(11,30,62,0))]" />
      <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-[rgba(193,164,95,0.12)] blur-3xl" />
      <div className="absolute left-0 top-28 h-64 w-64 rounded-full bg-[rgba(11,30,62,0.07)] blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:items-center">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#c1a45f]" />
            <p className="font-[family-name:var(--font-subtitle)] text-[11px] uppercase tracking-[0.25em] text-[#c1a45f]">
              {lang === "es" ? "Agencia Marítima · Colombia" : "Ship Agency · Colombia"}
            </p>
          </div>
          <h1
            className="mt-4 font-[family-name:var(--font-display)] text-5xl leading-[0.92] text-balance text-[#0b1e3e] sm:text-6xl lg:text-7xl"
            dangerouslySetInnerHTML={{
              __html: lang === "es"
                ? "Representación <em class='not-italic text-[#c1a45f]'>portuaria</em> sin fricción."
                : "Port representation <em class='not-italic text-[#c1a45f]'>without</em> friction.",
            }}
          />
          <p className="mt-7 max-w-2xl text-base leading-8 text-[#3b3b3b] sm:text-lg font-[family-name:var(--font-subtitle)]">
            {lang === "es"
              ? "G&P Ship Agency & Co. es la agencia marítima de Colombia que garantiza presencia impecable, protocolo naval y control operativo de extremo a extremo en todos los puertos del país."
              : "G&P Ship Agency & Co. is Colombia's maritime agency ensuring impeccable presence, naval protocol, and end-to-end operational control across all national ports."}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#servicios"
              className="inline-flex items-center justify-center bg-[#0b1e3e] px-7 py-3 font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.26em] text-[#f7f6f2] transition-colors hover:bg-[#c1a45f]"
            >
              <FaArrowRight className="mr-2 text-sm" />
              {lang === "es" ? "Nuestros servicios" : "Our services"}
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center border border-[#c1a45f] px-7 py-3 font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.26em] text-[#0b1e3e] transition-colors hover:bg-[#c1a45f] hover:text-[#f7f6f2]"
            >
              <FaCompass className="mr-2 text-sm" />
              {lang === "es" ? "Contactar" : "Get in touch"}
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {differentiators.map((item) => (
              <div
                key={item.es}
                className="border border-[rgba(11,30,62,0.08)] bg-white/90 px-5 py-5 shadow-[0_16px_40px_rgba(11,30,62,0.06)]"
              >
                <p className="text-sm leading-7 text-[#3b3b3b] font-[family-name:var(--font-subtitle)]">
                  {item[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-5 top-8 hidden h-28 w-28 border border-[rgba(193,164,95,0.35)] lg:block" />
          <div className="absolute bottom-5 right-0 hidden h-36 w-36 border border-[rgba(11,30,62,0.12)] lg:block" />

          <div className="relative overflow-hidden border border-[rgba(11,30,62,0.08)] bg-white p-5 shadow-[0_28px_80px_rgba(11,30,62,0.12)] sm:p-7">
            <div className="mb-5 flex items-center justify-between">
              <p className="font-[family-name:var(--font-subtitle)] text-[11px] uppercase tracking-[0.34em] text-[#c1a45f]">
                {lang === "es" ? "Presencia institucional" : "Institutional presence"}
              </p>
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#3b3b3b] font-[family-name:var(--font-subtitle)]">
                Colombia
              </p>
            </div>

            <div className="relative overflow-hidden border border-[rgba(11,30,62,0.06)] bg-[linear-gradient(160deg,#f7f6f2_0%,#ece7d9_100%)]">
              <Image
                src="/60.jpg"
                alt="G&P Ship Agency & Co. - Maritime Excellence"
                width={1200}
                height={900}
                priority
                className="h-auto w-full object-cover"
              />
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {metrics.slice(0, 2).map((metric) => (
                <div
                  key={metric.label.es}
                  className="border border-[rgba(11,30,62,0.08)] bg-[#f7f6f2] px-5 py-5"
                >
                  <p className="font-[family-name:var(--font-display)] text-3xl text-[#0b1e3e]">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-sm text-[#3b3b3b] font-[family-name:var(--font-subtitle)]">
                    {metric.label[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
