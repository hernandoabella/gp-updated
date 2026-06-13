"use client";

import { useLanguage } from "@/app/context/LanguageContext";

const pillars = [
  {
    num: "01",
    title: { es: "Estándar", en: "Standard" },
    body: {
      es: "Procedimientos navales de alto protocolo aplicados en cada operación portuaria.",
      en: "High-protocol naval procedures applied in every port operation.",
    },
  },
  {
    num: "02",
    title: { es: "Protocolo", en: "Protocol" },
    body: {
      es: "Representación ante autoridades portuarias con presencia formal y documentación impecable.",
      en: "Representation before port authorities with formal presence and impeccable documentation.",
    },
  },
  {
    num: "03",
    title: { es: "Control", en: "Control" },
    body: {
      es: "Gestión operativa integral: de la llegada del buque hasta el zarpe.",
      en: "Comprehensive operational management: from vessel arrival to departure.",
    },
  },
  {
    num: "04",
    title: { es: "Honor", en: "Honor" },
    body: {
      es: "Una agencia que impone respeto por su presentación, no por su publicidad.",
      en: "An agency that commands respect through its conduct, not its advertising.",
    },
  },
];

export function PromiseBand() {
  const { lang } = useLanguage();

  return (
    <section className="bg-[#0b1e3e] py-20 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 80% 50%, rgba(193,164,95,0.06) 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="lg:pr-12 lg:border-r lg:border-[rgba(193,164,95,0.2)] flex flex-col justify-center">
            <p className="font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.42em] text-[#c1a45f] mb-6">
              {lang === "es" ? "Nuestra promesa" : "Our promise"}
            </p>
            <p className="font-[family-name:var(--font-display)] italic text-2xl md:text-3xl font-light text-[#d4b87a] leading-snug mb-8">
              {lang === "es"
                ? '"Profesionalismo, presencia impecable y trato de alto nivel — en cada puerto, en cada escala."'
                : '"Professionalism, impeccable presence, and high-level service — at every port, on every call."'}
            </p>
            <p className="font-[family-name:var(--font-subtitle)] text-sm leading-7 text-[rgba(247,246,242,0.6)]">
              {lang === "es"
                ? "Reemplazamos la inoperancia por estándar. Sustituimos el servicio inmaduro por protocolo naval. En G&P, la representación portuaria es un acto de honor institucional."
                : "We replace inefficiency with standard. We substitute immature service with naval protocol. At G&P, port representation is an act of institutional honor."}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {pillars.map((p) => (
              <div key={p.num}>
                <p className="font-[family-name:var(--font-display)] text-5xl font-light text-[rgba(193,164,95,0.25)] leading-none">
                  {p.num}
                </p>
                <p className="font-[family-name:var(--font-subtitle)] text-[11px] uppercase tracking-[0.2em] text-[#c1a45f] font-bold mt-2">
                  {p.title[lang]}
                </p>
                <p className="font-[family-name:var(--font-subtitle)] text-sm leading-7 text-[rgba(247,246,242,0.6)] mt-1">
                  {p.body[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
