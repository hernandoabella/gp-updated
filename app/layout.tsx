import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaEnvelope,
  FaHouse,
  FaLocationDot,
  FaWhatsapp,
} from "react-icons/fa6";
import "./globals.css";

const primaryNav = [
  { href: "/#services", label: "Services" },
  { href: "/#approach", label: "Approach" },
  { href: "/#coverage", label: "Coverage" },
];

const secondaryNav = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
];

export const metadata: Metadata = {
  title: "G&P Ship Agency & Co.",
  description:
    "Prestigious ship agency presentation with refined Colombian maritime positioning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[var(--color-paper)] text-[var(--color-ink)]">
        <header className="fixed inset-x-0 top-0 z-50 border-b border-[rgba(11,30,62,0.08)] bg-white/95 shadow-[0_10px_35px_rgba(11,30,62,0.08)] backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
            <div className="hidden items-center md:grid md:grid-cols-[1fr_auto_1fr] md:gap-6">
              <nav className="flex items-center gap-6">
                {primaryNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="font-[family-name:var(--font-subtitle)] text-sm uppercase tracking-[0.22em] text-[var(--color-ink)]/78 hover:text-[var(--color-accent-strong)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <Link
                href="/"
                className="flex justify-center"
                aria-label="Go to homepage"
              >
                <Image
                  src="/logo-1.png"
                  alt="G&P Ship Agency & Co."
                  width={540}
                  height={190}
                  priority
                  className="h-20 w-auto object-contain sm:h-24"
                />
              </Link>

              <nav className="flex items-center justify-end gap-6">
                {secondaryNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="font-[family-name:var(--font-subtitle)] text-sm uppercase tracking-[0.22em] text-[var(--color-ink)]/78 hover:text-[var(--color-accent-strong)]"
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href="https://wa.me/?text=Hello%20G%26P%20Ship%20Agency%20%26%20Co.%20I%20would%20like%20to%20request%20more%20information."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-[var(--color-accent)] px-5 py-2 font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.24em] text-[var(--color-ink)] hover:bg-[var(--color-accent)] hover:text-[var(--color-ink)]"
                >
                  <FaWhatsapp className="mr-2 text-sm" />
                  WhatsApp
                </a>
              </nav>
            </div>

            <div className="flex flex-col items-center gap-3 md:hidden">
              <Link href="/" aria-label="Go to homepage">
                <Image
                  src="/logo-1.png"
                  alt="G&P Ship Agency & Co."
                  width={540}
                  height={190}
                  priority
                  className="h-18 w-auto object-contain sm:h-20"
                />
              </Link>
              <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
                {[...primaryNav, ...secondaryNav].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="font-[family-name:var(--font-subtitle)] text-[11px] uppercase tracking-[0.2em] text-[var(--color-ink)]/78 hover:text-[var(--color-accent-strong)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </header>

        <div className="flex min-h-screen flex-col pt-32 md:pt-28">
          <div className="flex-1">{children}</div>

          <footer className="border-t border-white/10 bg-[var(--color-ink)] text-[var(--color-paper)]">
            <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12">
              <div className="flex justify-center">
                <Image
                  src="/logo-2.png"
                  alt="G&P Ship Agency & Co."
                  width={620}
                  height={220}
                  className="h-24 w-auto object-contain sm:h-32"
                />
              </div>

              <div className="mt-12 grid gap-10 md:grid-cols-3">
                <div>
                  <p className="font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.34em] text-[var(--color-accent)]">
                    Positioning
                  </p>
                  <p className="mt-4 max-w-sm text-sm leading-7 text-[var(--color-paper-soft)]">
                    Preserved prestige, editorial discipline, and maritime
                    authority shaped into a cleaner digital presence.
                  </p>
                </div>

                <div>
                  <p className="font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.34em] text-[var(--color-accent)]">
                    Navigation
                  </p>
                  <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--color-paper-soft)]">
                    <Link href="/" className="hover:text-white">
                      <FaHouse className="mr-2 inline-block text-[11px]" />
                      Home
                    </Link>
                    <Link href="/#services" className="hover:text-white">
                      <FaArrowRight className="mr-2 inline-block text-[11px]" />
                      Services
                    </Link>
                    <Link href="/#coverage" className="hover:text-white">
                      <FaLocationDot className="mr-2 inline-block text-[11px]" />
                      Coverage
                    </Link>
                    <Link href="/contact" className="hover:text-white">
                      <FaEnvelope className="mr-2 inline-block text-[11px]" />
                      Contact
                    </Link>
                  </div>
                </div>

                <div>
                  <p className="font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.34em] text-[var(--color-accent)]">
                    Direct communication
                  </p>
                  <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--color-paper-soft)]">
                    <a
                      href="mailto:operations@gpshipagency.com"
                      className="hover:text-white"
                    >
                      <FaEnvelope className="mr-2 inline-block text-[11px]" />
                      operations@gpshipagency.com
                    </a>
                    <a
                      href="https://wa.me/?text=Hello%20G%26P%20Ship%20Agency%20%26%20Co.%20I%20would%20like%20to%20request%20more%20information."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white"
                    >
                      <FaWhatsapp className="mr-2 inline-block text-[11px]" />
                      Open WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs uppercase tracking-[0.22em] text-white/45">
                &copy; 2026 G&amp;P Ship Agency &amp; Co. All rights reserved.
              </div>
            </div>
          </footer>
        </div>

        <a
          href="https://wa.me/?text=Hello%20G%26P%20Ship%20Agency%20%26%20Co.%20I%20would%20like%20to%20request%20more%20information."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-ink)] shadow-[0_14px_35px_rgba(11,30,62,0.22)] hover:-translate-y-1"
        >
          <FaWhatsapp className="text-[1.45rem]" />
        </a>
      </body>
    </html>
  );
}
