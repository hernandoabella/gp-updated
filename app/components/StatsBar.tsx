"use client";

import { useLanguage } from "@/app/context/LanguageContext";

const stats = [
  { value: "+20", label: { es: "Años de experiencia", en: "Years of experience" } },
  { value: "8", label: { es: "Puertos activos", en: "Active ports" } },
  { value: "+500", label: { es: "Buques atendidos", en: "Vessels attended" } },
  { value: "24/7", label: { es: "Disponibilidad operativa", en: "Operational availability" } },
];

export function StatsBar() {
  const { lang } = useLanguage();

  return (
    <div className="bg-[#c1a45f] py-10">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.value}
              className={`text-center py-4 px-4 ${
                i < stats.length - 1 ? "border-r border-[rgba(11,30,62,0.15)]" : ""
              } ${i === 1 ? "md:border-r" : ""}`}
            >
              <p className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-light text-[#0b1e3e] leading-none mb-2">
                {stat.value}
              </p>
              <p className="font-[family-name:var(--font-subtitle)] text-[11px] uppercase tracking-[0.2em] text-[rgba(11,30,62,0.65)]">
                {stat.label[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
