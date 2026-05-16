// components/sections/Hero.tsx
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCompass } from "react-icons/fa6";

const differentiators = [
  "Representation with protocol and a visibly higher standard.",
  "Editorial clarity for owners, charterers, and port authorities.",
  "Honor the port. Execute with precision.",
];

const metrics = [
  { value: "24/7", label: "Operational readiness" },
  { value: "12+", label: "Years of maritime discipline" },
  { value: "6", label: "Strategic Colombian ports" },
  { value: "100%", label: "Senior-level oversight" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f6f2] px-6 pb-24 pt-12 sm:px-10 lg:px-12">
      {/* Background decorative elements */}
      <div className="absolute inset-x-0 top-0 h-[32rem] bg-[linear-gradient(180deg,rgba(11,30,62,0.03),rgba(11,30,62,0))]" />
      <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-[rgba(193,164,95,0.12)] blur-3xl" />
      <div className="absolute left-0 top-28 h-64 w-64 rounded-full bg-[rgba(11,30,62,0.07)] blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:items-center">
        {/* Left column - Content */}
        <div className="max-w-3xl">
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-5xl leading-[0.92] text-balance text-[#0b1e3e] sm:text-6xl lg:text-7xl">
            Representation with protocol. Honor the port. Execute with precision.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-[#3b3b3b] sm:text-lg">
            G&amp;P Ship Agency &amp; Co. stands against inoperance, poor presentation, 
            and immature service. The brand system defines a more impeccable standard: 
            institutional protocol, refined presence, and end-to-end operational control.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#0b1e3e] px-7 py-3 font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.26em] text-[#f7f6f2] transition-colors hover:bg-[#c1a45f]"
            >
              <FaArrowRight className="mr-2 text-sm" />
              Request a consultation
            </Link>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-[#c1a45f] px-7 py-3 font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.26em] text-[#0b1e3e] transition-colors hover:bg-[#c1a45f] hover:text-[#f7f6f2]"
            >
              <FaCompass className="mr-2 text-sm" />
              Explore services
            </a>
          </div>

          {/* Differentiators cards */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {differentiators.map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-[rgba(11,30,62,0.08)] bg-white/90 px-5 py-5 shadow-[0_16px_40px_rgba(11,30,62,0.06)]"
              >
                <p className="text-sm leading-7 text-[#3b3b3b]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right column - Hero Image */}
        <div className="relative">
          {/* Decorative border elements */}
          <div className="absolute -left-5 top-8 hidden h-28 w-28 border border-[rgba(193,164,95,0.35)] lg:block" />
          <div className="absolute bottom-5 right-0 hidden h-36 w-36 border border-[rgba(11,30,62,0.12)] lg:block" />
          
          {/* Main image card */}
          <div className="relative overflow-hidden border border-[rgba(11,30,62,0.08)] bg-white p-5 shadow-[0_28px_80px_rgba(11,30,62,0.12)] sm:p-7">
            <div className="mb-5 flex items-center justify-between">
              <p className="font-[family-name:var(--font-subtitle)] text-[11px] uppercase tracking-[0.34em] text-[#c1a45f]">
                Institutional presence
              </p>
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#3b3b3b]">
                Colombia
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative overflow-hidden border border-[rgba(11,30,62,0.06)] bg-[linear-gradient(160deg,#f7f6f2_0%,#ece7d9_100%)]">
              <Image
                src="/hero-img.png"
                alt="G&P Ship Agency & Co. - Maritime Excellence"
                width={1200}
                height={900}
                priority
                className="h-auto w-full object-cover"
              />
            </div>

            {/* Metrics grid - first two metrics below image */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {metrics.slice(0, 2).map((metric) => (
                <div
                  key={metric.label}
                  className="border border-[rgba(11,30,62,0.08)] bg-[#f7f6f2] px-5 py-5"
                >
                  <p className="font-[family-name:var(--font-display)] text-3xl text-[#0b1e3e]">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-sm text-[#3b3b3b]">
                    {metric.label}
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