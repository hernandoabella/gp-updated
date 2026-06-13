"use client";

import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";

export function AboutCEO() {
  const { lang } = useLanguage();

  return (
    <section id="sobre" className="bg-[#ece9e0]">
      <div className="grid md:grid-cols-2 min-h-[560px]">
        <div className="relative overflow-hidden">
          <Image
            src="/hero-img.png"
            alt="Gabriel Martínez, CEO de G&P Ship Agency"
            fill
            className="object-cover object-center brightness-[0.85] contrast-[1.05] transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[rgba(11,30,62,0.85)] to-transparent p-6 pt-12">
            <p className="font-[family-name:var(--font-display)] text-2xl text-[#f7f6f2] font-normal">
              Gabriel Martínez
            </p>
            <p className="font-[family-name:var(--font-subtitle)] text-[11px] uppercase tracking-[0.2em] text-[#c1a45f] mt-1">
              {lang === "es" ? "Director General · G&P Ship Agency & Co." : "General Manager · G&P Ship Agency & Co."}
            </p>
          </div>
        </div>
        <div className="bg-[#0b1e3e] p-8 md:p-16 flex flex-col justify-center">
          <p className="font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.42em] text-[#c1a45f] mb-4">
            {lang === "es" ? "Liderazgo" : "Leadership"}
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-light text-[#f7f6f2] leading-tight mb-6">
            {lang === "es" ? "Una agencia que impone respeto." : "An agency that commands respect."}
          </h2>
          <p className="font-[family-name:var(--font-subtitle)] text-sm leading-7 text-[rgba(247,246,242,0.7)] mb-4">
            {lang === "es"
              ? "G&P Ship Agency & Co. nació de la convicción de que la industria marítima colombiana merece una agencia a la altura de los más altos estándares internacionales. Con presencia en los principales puertos del Pacífico y el Atlántico, operamos con el rigor de una institución naval y la eficiencia de un equipo moderno."
              : "G&P Ship Agency & Co. was born from the conviction that Colombia's maritime industry deserves an agency that meets the highest international standards. With presence in the main ports of the Pacific and Atlantic, we operate with the rigor of a naval institution and the efficiency of a modern team."}
          </p>
          <p className="font-[family-name:var(--font-subtitle)] text-sm leading-7 text-[rgba(247,246,242,0.7)]">
            {lang === "es"
              ? "Gabriel Martínez, Director General, ha construido G&P bajo una premisa irrenunciable: cada escala es una oportunidad de demostrar que la excelencia y la industria marítima son compatibles."
              : "Gabriel Martínez, General Manager, has built G&P under a non-negotiable premise: every vessel call is an opportunity to prove that excellence and the maritime industry are compatible."}
          </p>
          <div className="flex flex-wrap gap-6 mt-8">
            <div>
              <p className="font-[family-name:var(--font-subtitle)] text-[10px] uppercase tracking-[0.2em] text-[#c1a45f] mb-1">
                {lang === "es" ? "Fundada" : "Founded"}
              </p>
              <p className="font-[family-name:var(--font-display)] text-3xl font-light text-[#f7f6f2]">2003</p>
            </div>
            <div className="w-px bg-[rgba(193,164,95,0.2)]" />
            <div>
              <p className="font-[family-name:var(--font-subtitle)] text-[10px] uppercase tracking-[0.2em] text-[#c1a45f] mb-1">
                {lang === "es" ? "Sede central" : "Headquarters"}
              </p>
              <p className="font-[family-name:var(--font-display)] text-xl font-light text-[#f7f6f2]">Barranquilla</p>
            </div>
            <div className="w-px bg-[rgba(193,164,95,0.2)]" />
            <div>
              <p className="font-[family-name:var(--font-subtitle)] text-[10px] uppercase tracking-[0.2em] text-[#c1a45f] mb-1">
                {lang === "es" ? "Certificación" : "Certification"}
              </p>
              <p className="font-[family-name:var(--font-display)] text-xl font-light text-[#f7f6f2]">FONDONORMA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
