"use client";

import { useLanguage } from "@/app/context/LanguageContext";

export function BrandStatement() {
  const { lang } = useLanguage();

  return (
    <section className="bg-[#ece9e0] py-20 text-center">
      <div className="mx-auto max-w-4xl px-6 sm:px-10 lg:px-12">
        <blockquote className="font-[family-name:var(--font-display)] italic font-light text-2xl md:text-4xl text-[#0b1e3e] leading-snug">
          {lang === "es"
            ? "Trazando un rumbo hacia la innovación marítima"
            : "Charting a course towards maritime innovation"}
        </blockquote>
        <cite className="block mt-6 font-[family-name:var(--font-subtitle)] not-italic text-xs uppercase tracking-[0.2em] text-[#c1a45f]">
          {lang === "es" ? "Gabriel Martínez · CEO, G&P Ship Agency & Co." : "Gabriel Martínez · CEO, G&P Ship Agency & Co."}
        </cite>
      </div>
    </section>
  );
}
