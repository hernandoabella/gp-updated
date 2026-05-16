// app/about/page.tsx
import Image from "next/image";
import Link from "next/link";
import {
  FaAnchor,
  FaShieldHalved,
  FaHandshake,
  FaGlobe,
  FaArrowRight,
  FaClock,
  FaUsers,
  FaShip,
  FaCompass,
} from "react-icons/fa6";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function AboutPage() {
  return (
    <main className="bg-[#f7f6f2]">
    <Header />
      {/* Hero Section */}
      <section className="px-6 pt-32 pb-20 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left side - Content */}
            <div>
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-[#c1a45f]" />
                  <p className="font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.42em] text-[#c1a45f]">
                    Our Identity
                  </p>
                </div>
                <h1 className="font-[family-name:var(--font-display)] text-4xl text-balance text-[#0b1e3e] sm:text-5xl lg:text-6xl">
                  Maritime excellence with{' '}
                  <span className="text-[#c1a45f]">institutional protocol</span>
                </h1>
                <p className="mt-6 text-base leading-7 text-[#3b3b3b]">
                  G&amp;P Ship Agency &amp; Co. stands against inoperance, poor presentation, 
                  and immature service. We define a more impeccable standard: institutional 
                  protocol, refined presence, and end-to-end operational control.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="border border-[rgba(11,30,62,0.08)] bg-white p-4">
                  <p className="font-[family-name:var(--font-display)] text-2xl text-[#0b1e3e]">12+</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#3b3b3b]">Years of excellence</p>
                </div>
                <div className="border border-[rgba(11,30,62,0.08)] bg-white p-4">
                  <p className="font-[family-name:var(--font-display)] text-2xl text-[#0b1e3e]">6</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#3b3b3b]">Strategic ports</p>
                </div>
                <div className="border border-[rgba(11,30,62,0.08)] bg-white p-4">
                  <p className="font-[family-name:var(--font-display)] text-2xl text-[#0b1e3e]">24/7</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#3b3b3b]">Operational readiness</p>
                </div>
                <div className="border border-[rgba(11,30,62,0.08)] bg-white p-4">
                  <p className="font-[family-name:var(--font-display)] text-2xl text-[#0b1e3e]">100%</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#3b3b3b]">Senior oversight</p>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#0b1e3e] px-6 py-3 font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.26em] text-[#f7f6f2] transition-colors hover:bg-[#c1a45f]"
                >
                  Work with us
                  <FaArrowRight className="text-sm" />
                </Link>
              </div>
            </div>

            {/* Right side - Logo pequeña */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white p-6 shadow-lg">
                <Image
                  src="/logo-3.png"
                  alt="G&P Ship Agency & Co."
                  width={200}
                  height={150}
                  className="h-auto w-40 lg:w-48"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="px-6 py-16 sm:px-10 lg:px-12 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="border border-[rgba(11,30,62,0.08)] p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center bg-[#c1a45f]/10">
                <FaCompass className="text-lg text-[#c1a45f]" />
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-xl text-[#0b1e3e]">Our Mission</h3>
              <div className="my-3 h-px w-8 bg-[#c1a45f]" />
              <p className="text-sm leading-6 text-[#3b3b3b]">
                To deliver maritime agency services with unwavering institutional protocol, 
                operational precision, and refined presence.
              </p>
            </div>

            <div className="border border-[rgba(11,30,62,0.08)] p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center bg-[#c1a45f]/10">
                <FaGlobe className="text-lg text-[#c1a45f]" />
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-xl text-[#0b1e3e]">Our Vision</h3>
              <div className="my-3 h-px w-8 bg-[#c1a45f]" />
              <p className="text-sm leading-6 text-[#3b3b3b]">
                To become Colombia's most respected maritime agency, recognized for our 
                ceremonial standard of service and operational excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-6 py-16 sm:px-10 lg:px-12 bg-[#0b1e3e]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-10">
            <p className="font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.42em] text-[#c1a45f] mb-2">
              Our Principles
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-balance text-white sm:text-4xl">
              The values that guide us
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: FaShieldHalved, title: "Institutional Protocol", description: "A ceremonial standard of service that commands respect." },
              { icon: FaHandshake, title: "Principal Protection", description: "We guard your interests with precision and transparency." },
              { icon: FaAnchor, title: "Operational Excellence", description: "Disciplined execution from pre-arrival to post-call." },
              { icon: FaClock, title: "24/7 Readiness", description: "Continuous presence and immediate response." },
              { icon: FaUsers, title: "Senior Oversight", description: "Every vessel call managed by experienced professionals." },
              { icon: FaShip, title: "Port Intelligence", description: "Deep local knowledge across Colombia's ports." },
            ].map((value) => (
              <div key={value.title} className="border border-white/10 bg-white/5 p-5">
                <value.icon className="text-xl text-[#c1a45f] mb-3" />
                <h3 className="font-[family-name:var(--font-display)] text-lg text-white">
                  {value.title}
                </h3>
                <div className="my-2 h-px w-8 bg-[#c1a45f]/50" />
                <p className="text-sm leading-6 text-[#f7f6f2]/70">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 sm:px-10 lg:px-12 bg-[#f7f6f2]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-balance text-[#0b1e3e] sm:text-4xl">
            Ready to experience the{' '}
            <span className="text-[#c1a45f]">G&amp;P standard</span>?
          </h2>
          <p className="mt-4 text-sm leading-6 text-[#3b3b3b]">
            Experience maritime agency as it should be: disciplined, refined, and executed with precision.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#0b1e3e] px-6 py-3 font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.26em] text-[#f7f6f2] transition-colors hover:bg-[#c1a45f]"
            >
              Request consultation
              <FaArrowRight />
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 border border-[#c1a45f] bg-transparent px-6 py-3 font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.26em] text-[#0b1e3e] transition-colors hover:bg-[#c1a45f] hover:text-[#f7f6f2]"
            >
              Explore services
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}