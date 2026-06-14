"use client";

import Image from "next/image";
import { FaEnvelope, FaLinkedin } from "react-icons/fa6";
import { useLanguage } from "@/app/context/LanguageContext";

const quickLinks = (
  lang: "es" | "en"
): { label: string; href: string }[] => [
  { label: lang === "es" ? "Inicio" : "Home", href: "/" },
  { label: lang === "es" ? "Servicios" : "Services", href: "#servicios" },
  { label: lang === "es" ? "Sobre G&P" : "About G&P", href: "#sobre" },
  { label: lang === "es" ? "Puertos" : "Ports", href: "#puertos" },
  { label: lang === "es" ? "Contacto" : "Contact", href: "#contacto" },
];

const servicesLinks = (
  lang: "es" | "en"
): { label: string; href: string }[] => [
  {
    label: lang === "es" ? "Agenciamiento de Buques" : "Ship Agency",
    href: "#servicios",
  },
  {
    label: lang === "es" ? "Operaciones Logísticas" : "Logistics",
    href: "#servicios",
  },
  {
    label: lang === "es" ? "Atención a Tripulación" : "Crew Assistance",
    href: "#servicios",
  },
  {
    label: lang === "es" ? "Documentación" : "Documentation",
    href: "#servicios",
  },
  {
    label: lang === "es" ? "Consultoría" : "Consulting",
    href: "#servicios",
  },
];

const portLinks = [
  { label: "Barranquilla", href: "#puertos" },
  { label: "Cartagena", href: "#puertos" },
  { label: "Santa Marta", href: "#puertos" },
  { label: "Buenaventura", href: "#puertos" },
  { label: "Turbo", href: "#puertos" },
];

export function Footer() {
  const { lang } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#060f1f] text-[#f7f6f2]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 pb-10 border-b border-white/5">
          <div className="space-y-5">
            <Image
              src="/logo-2.png"
              alt="G&P Ship Agency & Co."
              width={200}
              height={60}
              className="h-auto w-40"
            />
            <p className="text-sm leading-7 text-[rgba(247,246,242,0.45)] font-[family-name:var(--font-subtitle)]">
              {lang === "es"
                ? "Representación marítima de excelencia institucional en los principales puertos de Colombia. Protocolo naval, control operativo y presencia impecable."
                : "Maritime representation of institutional excellence at Colombia's main ports. Naval protocol, operational control, and impeccable presence."}
            </p>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-subtitle)] text-[10px] uppercase tracking-[0.25em] text-[#c1a45f] mb-5">
              {lang === "es" ? "Navegación" : "Navigation"}
            </h4>
            <ul className="space-y-2">
              {quickLinks(lang).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[rgba(247,246,242,0.45)] transition-colors hover:text-[#c1a45f] font-[family-name:var(--font-subtitle)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-subtitle)] text-[10px] uppercase tracking-[0.25em] text-[#c1a45f] mb-5">
              {lang === "es" ? "Servicios" : "Services"}
            </h4>
            <ul className="space-y-2">
              {servicesLinks(lang).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[rgba(247,246,242,0.45)] transition-colors hover:text-[#c1a45f] font-[family-name:var(--font-subtitle)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-subtitle)] text-[10px] uppercase tracking-[0.25em] text-[#c1a45f] mb-5">
              {lang === "es" ? "Empresa" : "Company"}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#sobre" className="text-sm text-[rgba(247,246,242,0.45)] transition-colors hover:text-[#c1a45f] font-[family-name:var(--font-subtitle)]">
                  {lang === "es" ? "Sobre nosotros" : "About us"}
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-sm text-[rgba(247,246,242,0.45)] transition-colors hover:text-[#c1a45f] font-[family-name:var(--font-subtitle)]">
                  {lang === "es" ? "Contacto" : "Contact"}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[rgba(247,246,242,0.45)] transition-colors hover:text-[#c1a45f] font-[family-name:var(--font-subtitle)]">
                  {lang === "es" ? "Política de privacidad" : "Privacy policy"}
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <h4 className="font-[family-name:var(--font-subtitle)] text-[10px] uppercase tracking-[0.25em] text-[#c1a45f] mb-4">
                {lang === "es" ? "Puertos" : "Ports"}
              </h4>
              <ul className="space-y-2">
                {portLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[rgba(247,246,242,0.45)] transition-colors hover:text-[#c1a45f] font-[family-name:var(--font-subtitle)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6">
          <p className="text-xs text-[rgba(247,246,242,0.3)] font-[family-name:var(--font-subtitle)]">
            &copy; {currentYear} G&amp;P Ship Agency &amp; Co.{" "}
            {lang === "es" ? "Todos los derechos reservados." : "All rights reserved."}
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              className="w-9 h-9 border border-[rgba(193,164,95,0.2)] flex items-center justify-center text-[rgba(247,246,242,0.4)] transition-all hover:border-[#c1a45f] hover:text-[#c1a45f]"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:Info@gpshippingcm.com"
              className="w-9 h-9 border border-[rgba(193,164,95,0.2)] flex items-center justify-center text-[rgba(247,246,242,0.4)] transition-all hover:border-[#c1a45f] hover:text-[#c1a45f]"
              aria-label="Email"
            >
              <FaEnvelope className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
