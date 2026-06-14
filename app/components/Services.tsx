"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";

const departments = [
  {
    id: "ship-agency",
    logo: "/shipagencyandco.png",
    title: { es: "G&P Ship Agency & Co.", en: "G&P Ship Agency & Co." },
    subtitle: { es: "Agenciamiento Marítimo", en: "Ship Agency" },
    sections: [
      {
        heading: { es: "Ship Agency (Agenciamiento Marítimo)", en: "Ship Agency" },
        items: [
          { es: "Representación de armadores y operadores.", en: "Owner and operator representation." },
          { es: "Coordinación de arribo y zarpe de embarcaciones.", en: "Vessel arrival and departure coordination." },
          { es: "Trámites ante Capitanía de Puerto, Aduanas, Migración y Autoridades Sanitarias.", en: "Procedures before Harbor Master, Customs, Immigration, and Health Authorities." },
          { es: "Gestión de permisos y documentación portuaria.", en: "Port permits and documentation management." },
          { es: "Coordinación de prácticos, remolcadores y amarradores.", en: "Pilot, tug, and mooring coordination." },
          { es: "Elaboración y control de Disbursement Accounts (DA).", en: "Disbursement Accounts (DA) preparation and control." },
        ],
      },
      {
        heading: { es: "Husbandry Services", en: "Husbandry Services" },
        items: [
          { es: "Relevo y cambio de tripulaciones.", en: "Crew changes and relief." },
          { es: "Reservas de hoteles y transporte terrestre.", en: "Hotel bookings and ground transportation." },
          { es: "Asistencia médica para tripulantes.", en: "Medical assistance for crew." },
          { es: "Entrega de medicamentos y suministros.", en: "Medicine and supply delivery." },
          { es: "Cash to Master (CTM).", en: "Cash to Master (CTM)." },
          { es: "Gestión de visas e inmigración.", en: "Visa and immigration management." },
          { es: "Coordinación de servicios de bienestar para la tripulación.", en: "Crew welfare service coordination." },
        ],
      },
    ],
  },
  {
    id: "container-management",
    logo: "/containermanagment.png",
    title: { es: "G&P Container Management", en: "G&P Container Management" },
    subtitle: { es: "Gestión de Contenedores", en: "Container Management" },
    sections: [
      {
        heading: { es: "Servicios para Contenedores", en: "Container Services" },
        items: [
          { es: "Inspección Técnica de Contenedores (IICL) — inspecciones bajo estándares IICL y CIC, evaluación estructural y operacional, certificación de aptitud para uso internacional.", en: "Technical Container Inspection (IICL) — inspections under IICL and CIC standards, structural and operational evaluation, fitness certification for international use." },
          { es: "Reparación de Contenedores — reparaciones estructurales, cambio de paneles, postes, puertas y pisos, soldadura especializada y pintura industrial.", en: "Container Repair — structural repairs, panel, post, door and floor replacement, specialized welding and industrial painting." },
          { es: "Survey de Contenedores Refrigerados (Reefer) — inspección de unidades refrigeradas, verificación de funcionamiento y condiciones técnicas.", en: "Reefer Container Survey — inspection of refrigerated units, performance and technical condition verification." },
          { es: "Almacenamiento y Gestión de Contenedores — patios de almacenamiento, inventarios y control logístico, gestión de equipos vacíos y cargados.", en: "Container Storage & Management — storage yards, inventory and logistics control, empty and loaded equipment management." },
          { es: "Compra, Venta y Alquiler de Contenedores — Dry, Reefer, Open Top, Flat Rack y especiales. Soluciones para proyectos industriales y logísticos.", en: "Container Sale, Purchase & Rental — Dry, Reefer, Open Top, Flat Rack and specials. Solutions for industrial and logistics projects." },
        ],
      },
    ],
  },
  {
    id: "marine-survey",
    logo: "/marinesurveyengineering.png",
    title: { es: "G&P Marine Survey Engineering", en: "G&P Marine Survey Engineering" },
    subtitle: { es: "Ingeniería e Inspección Marítima", en: "Marine Survey & Engineering" },
    sections: [
      {
        heading: { es: "Marine Survey & Cargo Inspection", en: "Marine Survey & Cargo Inspection" },
        items: [
          { es: "Draft Survey — determinación de peso de carga a bordo mediante cálculos de calado, control de cargue y descargue de graneles sólidos y líquidos, certificación independiente de cantidades embarcadas y descargadas.", en: "Draft Survey — cargo weight determination through draft calculations, loading and discharge control for solid and liquid bulk, independent certification of loaded and discharged quantities." },
          { es: "Bunker Quantity Survey (BQS) — verificación de cantidades de combustible suministradas a buques, control de operaciones de bunkering, prevención de pérdidas y discrepancias.", en: "Bunker Quantity Survey (BQS) — verification of fuel quantities supplied to vessels, bunkering operation control, loss and discrepancy prevention." },
          { es: "Off-Hire / On-Hire Survey — inspección del estado general del buque al inicio o final de contratos de fletamento, verificación de combustible y consumibles.", en: "Off-Hire / On-Hire Survey — inspection of vessel condition at start or end of charter contracts, fuel and consumables verification." },
          { es: "Cargo Survey — inspección de mercancías durante carga, descarga y almacenamiento, verificación de condiciones y cantidades.", en: "Cargo Survey — inspection of goods during loading, discharge and storage, condition and quantity verification." },
          { es: "Damage Survey — evaluación técnica de daños en carga, contenedores y equipos.", en: "Damage Survey — technical assessment of damage to cargo, containers and equipment." },
        ],
      },
      {
        heading: { es: "Ingeniería y Mantenimiento Industrial", en: "Industrial Engineering & Maintenance" },
        items: [
          { es: "Sandblasting y Pintura Industrial — preparación de superficies mediante chorro abrasivo, aplicación de sistemas epóxicos y poliuretanos, protección anticorrosiva para estructuras metálicas y marítimas.", en: "Sandblasting & Industrial Painting — surface preparation by abrasive blasting, epoxy and polyurethane system application, anticorrosive protection for metal and marine structures." },
          { es: "Mantenimiento Metalmecánico — fabricación y reparación de estructuras metálicas, soldadura certificada, mantenimiento preventivo y correctivo.", en: "Metal-Mechanical Maintenance — fabrication and repair of metal structures, certified welding, preventive and corrective maintenance." },
          { es: "Fabricación de Piezas en Caucho para Buques — defensas marítimas, empaques industriales, componentes especiales bajo especificación.", en: "Rubber Parts Manufacturing for Vessels — marine fenders, industrial gaskets, custom components per specification." },
        ],
      },
      {
        heading: { es: "Servicios para la Industria Marítima y Portuaria", en: "Maritime & Port Industry Services" },
        items: [
          { es: "Suministro de Aparejos y Equipos — eslingas, grilletes, cables de acero, elementos de izaje certificados.", en: "Rigging & Equipment Supply — slings, shackles, steel cables, certified lifting gear." },
        ],
      },
      {
        heading: { es: "Consultoría y Proyectos Especiales", en: "Consulting & Special Projects" },
        items: [
          { es: "Asesoría Técnica Marítima — estudios operacionales, evaluación de riesgos, optimización de procesos logísticos.", en: "Maritime Technical Advisory — operational studies, risk assessment, logistics process optimization." },
          { es: "Project Cargo & Heavy Lift — planeación y supervisión de cargas de proyecto, coordinación logística integral.", en: "Project Cargo & Heavy Lift — planning and supervision of project cargoes, comprehensive logistics coordination." },
          { es: "Representación Comercial y Técnica — desarrollo de negocios marítimos, representación de empresas internacionales en Colombia y Suramérica.", en: "Commercial & Technical Representation — maritime business development, representation of international companies in Colombia and South America." },
        ],
      },
    ],
  },
];

export function Services() {
  const { lang } = useLanguage();
  const [lightbox, setLightbox] = useState<string | null>(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (!lightbox) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, closeLightbox]);

  return (
    <>
    <section id="servicios" className="bg-[#f7f6f2] py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="text-center mb-16">
          <p className="font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.42em] text-[#c1a45f]">
            {lang === "es" ? "Nuestras Divisiones" : "Our Divisions"}
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl text-balance text-[#0b1e3e] sm:text-5xl">
            {lang === "es" ? "Tres unidades de negocio" : "Three business units"}
          </h2>
        </div>

        <div className="space-y-20">
          {departments.map((dept, idx) => (
            <div key={dept.id} className="scroll-mt-24" id={dept.id}>
              {/* Department header with logo */}
              <div className="grid md:grid-cols-[320px_1fr] gap-8 items-start mb-10">
                <div
                  className="bg-white border border-[rgba(11,30,62,0.08)] p-4 shadow-lg cursor-zoom-in transition-shadow hover:shadow-xl"
                  onClick={() => setLightbox(dept.logo)}
                >
                  <Image
                    src={dept.logo}
                    alt={dept.title.en}
                    width={600}
                    height={400}
                    className="w-full h-auto object-contain pointer-events-none"
                  />
                </div>
                <div className="pt-2">
                  <p className="font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.42em] text-[#c1a45f] mb-2">
                    {dept.subtitle[lang]}
                  </p>
                  <h3 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#0b1e3e]">
                    {dept.title[lang]}
                  </h3>
                </div>
              </div>

              {/* Service sections */}
              <div className="grid md:grid-cols-2 gap-6">
                {dept.sections.map((section) => (
                  <div
                    key={section.heading.en}
                    className="bg-white border border-[rgba(11,30,62,0.08)] p-6 shadow-[0_8px_25px_rgba(11,30,62,0.05)]"
                  >
                    <h4 className="font-[family-name:var(--font-display)] text-xl text-[#0b1e3e] mb-4 pb-3 border-b border-[rgba(193,164,95,0.2)]">
                      {section.heading[lang]}
                    </h4>
                    <ul className="space-y-3">
                      {section.items.map((item) => (
                        <li
                          key={item.es.substring(0, 20)}
                          className="flex items-start gap-3 text-sm leading-6 text-[#3b3b3b] font-[family-name:var(--font-subtitle)]"
                        >
                          <span className="text-[#c1a45f] mt-1.5 shrink-0">—</span>
                          <span>{item[lang]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {idx < departments.length - 1 && (
                <div className="mt-16 h-px bg-gradient-to-r from-transparent via-[rgba(193,164,95,0.3)] to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    {lightbox && (
      <div
        className="fixed inset-0 z-[999] bg-black/80 flex items-center justify-center p-4 sm:p-8"
        onClick={closeLightbox}
      >
        <button
          onClick={closeLightbox}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/80 hover:text-white text-3xl leading-none w-10 h-10 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close"
        >
          ✕
        </button>
        <div className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center">
          <Image
            src={lightbox}
            alt=""
            width={1200}
            height={800}
            className="w-full h-auto max-h-[85vh] object-contain rounded-sm"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </div>
    )}
    </>
  );
}
