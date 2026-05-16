import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaCompass,
  FaFileLines,
  FaHeadset,
  FaShieldHalved,
} from "react-icons/fa6";

const services = [
  {
    title: "Maritime Agency",
    icon: FaCompass,
    image: "/service-maritime-agency.svg",
    description:
      "Disciplined vessel attendance, port formalities, operational follow-up, and local execution under a more impeccable institutional standard.",
  },
  {
    title: "Shipping Representatives",
    icon: FaHeadset,
    image: "/service-shipping-representatives.svg",
    description:
      "Commercial poise and polished representation for principals requiring dependable visibility, direct coordination, and stronger stakeholder communication.",
  },
  {
    title: "Protective Agent",
    icon: FaShieldHalved,
    image: "/service-protective-agent.svg",
    description:
      "A steady local presence that protects principal interests through precise supervision, cost visibility, and stronger operational control.",
  },
  {
    title: "Special Services",
    icon: FaFileLines,
    image: "/service-special-services.svg",
    description:
      "Tailored assistance for sensitive cargoes, demanding port calls, and non-routine operational scenarios that require measured coordination.",
  },
];

const metrics = [
  { value: "24/7", label: "Operational readiness" },
  { value: "12+", label: "Years of maritime discipline" },
  { value: "6", label: "Strategic Colombian ports" },
  { value: "100%", label: "Senior-level oversight" },
];

const coverage = [
  "Cartagena",
  "Barranquilla",
  "Santa Marta",
  "Buenaventura",
  "Covenas",
  "Turbo",
];

const differentiators = [
  "Representation with protocol and a visibly higher standard.",
  "Editorial clarity for owners, charterers, and port authorities.",
  "Honor the port. Execute with precision.",
];

export default function Home() {
  return (
    <main className="bg-[var(--color-paper)] text-[var(--color-ink)]">
      <section
        id="top"
        className="relative overflow-hidden bg-[var(--color-paper)] px-6 pb-24 pt-12 sm:px-10 lg:px-12"
      >
        <div className="absolute inset-x-0 top-0 h-[32rem] bg-[linear-gradient(180deg,rgba(11,30,62,0.03),rgba(11,30,62,0))]" />
        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-[rgba(193,164,95,0.12)] blur-3xl" />
        <div className="absolute left-0 top-28 h-64 w-64 rounded-full bg-[rgba(11,30,62,0.07)] blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:items-center">
          <div className="max-w-3xl">
            <p className="font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.42em] text-[var(--color-accent-strong)]">
              Prestige preserved
            </p>
            <h1 className="mt-6 font-[family-name:var(--font-display)] text-5xl leading-[0.92] text-balance text-[var(--color-ink)] sm:text-6xl lg:text-7xl">
              Representation with protocol. Honor the port. Execute with
              precision.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              G&amp;P Ship Agency &amp; Co. stands against inoperance, poor
              presentation, and immature service. The brand system defines a
              more impeccable standard: institutional protocol, refined
              presence, and end-to-end operational control.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-ink)] px-7 py-3 font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.26em] text-[var(--color-paper)] hover:bg-[var(--color-accent-strong)]"
              >
                <FaArrowRight className="mr-2 text-sm" />
                Request a consultation
              </Link>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-accent)] px-7 py-3 font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.26em] text-[var(--color-ink)] hover:bg-[var(--color-accent)]"
              >
                <FaCompass className="mr-2 text-sm" />
                Explore services
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {differentiators.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-[rgba(11,30,62,0.08)] bg-white/90 px-5 py-5 shadow-[0_16px_40px_rgba(11,30,62,0.06)]"
                >
                  <p className="text-sm leading-7 text-[var(--color-muted)]">
                    {item}
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
                <p className="font-[family-name:var(--font-subtitle)] text-[11px] uppercase tracking-[0.34em] text-[var(--color-accent-strong)]">
                  Institutional presence
                </p>
                <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                  Colombia
                </p>
              </div>

              <div className="border border-[rgba(11,30,62,0.06)] bg-[linear-gradient(160deg,#f7f6f2_0%,#ece7d9_100%)] p-5">
                <Image
                  src="/logo-1.png"
                  alt="G&P Ship Agency & Co."
                  width={1600}
                  height={1200}
                  priority
                  className="h-auto w-full"
                />
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {metrics.slice(0, 2).map((metric) => (
                  <div
                    key={metric.label}
                    className="border border-[rgba(11,30,62,0.08)] bg-[var(--color-paper)] px-5 py-5"
                  >
                    <p className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-ink)]">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-sm text-[var(--color-muted)]">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[rgba(11,30,62,0.08)] bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-8 sm:grid-cols-2 sm:px-10 lg:grid-cols-4 lg:px-12">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <p className="font-[family-name:var(--font-display)] text-4xl text-[var(--color-ink)]">
                {metric.value}
              </p>
              <p className="mt-2 font-[family-name:var(--font-subtitle)] text-[11px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="services"
        className="bg-[var(--color-paper)] px-6 py-24 sm:px-10 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.42em] text-[var(--color-accent-strong)]">
              Services
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl text-balance sm:text-5xl">
              A polished service structure with stronger ceremonial presence.
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">
              The brochure makes the direction explicit: this brand should feel
              more like a naval institution or private maritime house than a
              generic logistics website. The service presentation now follows
              that standard.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="border border-[rgba(11,30,62,0.08)] bg-white p-7 shadow-[0_18px_45px_rgba(11,30,62,0.07)]"
              >
                <div className="mb-5 overflow-hidden border border-[rgba(11,30,62,0.08)] bg-[var(--color-paper)]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={1200}
                    height={900}
                    className="h-48 w-full object-cover"
                  />
                </div>
                <service.icon className="text-lg text-[var(--color-accent-strong)]" />
                <p className="font-[family-name:var(--font-subtitle)] text-[11px] uppercase tracking-[0.34em] text-[var(--color-accent-strong)]">
                  0{index + 1}
                </p>
                <h3 className="mt-5 font-[family-name:var(--font-display)] text-3xl text-[var(--color-ink)]">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="approach"
        className="bg-[var(--color-ink)] px-6 py-24 text-[var(--color-paper)] sm:px-10 lg:px-12"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div>
            <p className="font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.42em] text-[var(--color-accent)]">
              Approach
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl text-balance text-white sm:text-5xl">
              Pulcritude, continuity, and composed operational leadership.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[var(--color-paper-soft)]">
              The brand frequency is conservative prestige: pulcritude, vintage
              dignity, royalty, elite composure, and ceremony. Navy imposes
              respect, aged gold signals rank, and ivory brings official-paper
              calm.
            </p>
          </div>

          <div className="grid gap-5">
            {[
              {
                title: "Pre-arrival command",
                body: "Arrival notices, port coordination, documentation, and readiness planning presented with executive clarity.",
              },
              {
                title: "Port stay oversight",
                body: "Measured control across authorities, terminals, local providers, and every operational detail that touches the vessel call.",
              },
              {
                title: "Post-call reporting",
                body: "A neater closeout standard with concise cost visibility, operational updates, and principal-facing communication.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <h3 className="font-[family-name:var(--font-display)] text-2xl text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-paper-soft)]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="coverage"
        className="bg-white px-6 py-24 sm:px-10 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.42em] text-[var(--color-accent-strong)]">
              Coverage
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl text-balance sm:text-5xl">
              A refined Colombian coverage presentation.
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">
              A stronger navigation system deserves equally strong destination
              anchors. The fixed header now supports smooth movement across the
              homepage and a clear path into the dedicated contact page, while
              keeping the site aligned with the brochure&apos;s institutional
              rhythm.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {coverage.map((port) => (
              <div
                key={port}
                className="border border-[rgba(11,30,62,0.08)] bg-[var(--color-paper)] px-6 py-6 shadow-[0_16px_35px_rgba(11,30,62,0.05)]"
              >
                <p className="font-[family-name:var(--font-subtitle)] text-[11px] uppercase tracking-[0.34em] text-[var(--color-accent-strong)]">
                  Colombian port
                </p>
                <p className="mt-3 font-[family-name:var(--font-display)] text-3xl text-[var(--color-ink)]">
                  {port}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-paper)] px-6 pb-24 sm:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 border border-[rgba(11,30,62,0.08)] bg-white p-8 shadow-[0_22px_60px_rgba(11,30,62,0.08)] lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.75fr)] lg:p-12">
          <div>
            <p className="font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.42em] text-[var(--color-accent-strong)]">
              Contact
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl text-balance sm:text-5xl">
              Continue into a dedicated contact experience.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-muted)]">
              The new contact page is designed as a proper destination, with a
              more complete form, direct communication cues, and the same
              prestigious editorial tone.
            </p>
          </div>

          <div className="border border-[rgba(193,164,95,0.26)] bg-[linear-gradient(160deg,#f7f6f2_0%,#ece7d9_100%)] p-7">
            <p className="font-[family-name:var(--font-subtitle)] text-[11px] uppercase tracking-[0.34em] text-[var(--color-accent-strong)]">
              Next destination
            </p>
            <p className="mt-4 font-[family-name:var(--font-display)] text-3xl text-[var(--color-ink)]">
              Visit the English contact page and send your inquiry.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center rounded-full bg-[var(--color-ink)] px-6 py-3 font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.26em] text-[var(--color-paper)] hover:bg-[var(--color-accent-strong)]"
            >
              <FaArrowRight className="mr-2 text-sm" />
              Go to contact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
