"use client";

import { useRef } from "react";
import { FaArrowRight, FaCompass } from "react-icons/fa6";
import { useLanguage } from "@/app/context/LanguageContext";

export function Hero() {
  const { lang } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden flex items-center">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover scale-[1.02]"
        style={{ filter: "brightness(0.4)" }}
      >
        <source src="/herovideo.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(11,30,62,0.85)] via-[rgba(11,30,62,0.5)] to-[rgba(0,0,0,0.25)]" />

      {/* Decorative gold line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c1a45f]/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full mx-auto max-w-5xl px-6 sm:px-10 lg:px-12 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-10 bg-[#c1a45f]" />
          <p className="font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.25em] text-[#c1a45f]">
            {lang === "es" ? "Agencia Marítima · Colombia" : "Ship Agency · Colombia"}
          </p>
          <div className="h-px w-10 bg-[#c1a45f]" />
        </div>

        <h1
          className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.92] text-balance text-[#f7f6f2] font-light"
          dangerouslySetInnerHTML={{
            __html: lang === "es"
              ? "Representación <span class='text-[#c1a45f]'>portuaria</span><br/>sin fricción."
              : "Port representation<br/><span class='text-[#c1a45f]'>without</span> friction.",
          }}
        />

        <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-8 text-[rgba(247,246,242,0.75)] font-[family-name:var(--font-subtitle)]">
          {lang === "es"
            ? "G&P Ship Agency & Co. es la agencia marítima de Colombia que garantiza presencia impecable, protocolo naval y control operativo de extremo a extremo en todos los puertos del país."
            : "G&P Ship Agency & Co. is Colombia's maritime agency ensuring impeccable presence, naval protocol, and end-to-end operational control across all national ports."}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#servicios"
            className="inline-flex items-center justify-center gap-2 bg-[#c1a45f] text-[#0b1e3e] px-8 py-3.5 font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.26em] font-bold transition-all hover:bg-[#d4b87a]"
          >
            <FaArrowRight className="text-sm" />
            {lang === "es" ? "Nuestros servicios" : "Our services"}
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 border border-[rgba(247,246,242,0.35)] text-[#f7f6f2] px-8 py-3.5 font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.26em] transition-all hover:border-[#c1a45f] hover:text-[#c1a45f]"
          >
            <FaCompass className="text-sm" />
            {lang === "es" ? "Contactar" : "Get in touch"}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.2em] text-[rgba(247,246,242,0.35)] font-[family-name:var(--font-subtitle)]">
          {lang === "es" ? "Explorar" : "Scroll"}
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-[#c1a45f] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
