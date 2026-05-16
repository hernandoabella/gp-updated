// components/layout/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Coverage", href: "#coverage" },
  { label: "Contact", href: "/contact" },
];

const servicesLinks = [
  { label: "Maritime Agency", href: "/services/maritime-agency" },
  { label: "Shipping Representatives", href: "/services/shipping-representatives" },
  { label: "Protective Agent", href: "/services/protective-agent" },
  { label: "Special Services", href: "/services/special-services" },
];

const contactInfo = [
  { icon: FaEnvelope, text: "contact@gnpshipagency.com", href: "mailto:contact@gnpshipagency.com" },
  { icon: FaPhone, text: "+57 (5) 123 4567", href: "tel:+5751234567" },
  { icon: FaLocationDot, text: "Cartagena, Colombia", href: "#" },
];

// New office information
const officeInfo = {
  location: "Barranquilla, Atlántico",
  email: "Info@gpshippingcm.com",
  phone: "+57 3116406379",
};

const socialLinks = [
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b1e3e] text-[#f7f6f2]">
      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="space-y-5">
            <div className="border border-[#c1a45f]/20 bg-[#f7f6f2]/5 p-4">
              <Image
                src="/logo-2.png"
                alt="G&P Ship Agency & Co."
                width={800}
                height={600}
                className="h-auto w-full"
              />
            </div>
            <p className="text-sm leading-7 text-[#f7f6f2]/70">
              Representation with protocol. Honor the port. Execute with precision.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#c1a45f]/30 p-2 text-[#c1a45f] transition-colors hover:bg-[#c1a45f] hover:text-[#0b1e3e]"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.34em] text-[#c1a45f]">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#f7f6f2]/70 transition-colors hover:text-[#c1a45f]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h3 className="font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.34em] text-[#c1a45f]">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#f7f6f2]/70 transition-colors hover:text-[#c1a45f]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.34em] text-[#c1a45f]">
              Contact
            </h3>
            <ul className="mt-5 space-y-4">
              {contactInfo.map((item) => (
                <li key={item.text}>
                  <a
                    href={item.href}
                    className="flex items-start gap-3 text-sm text-[#f7f6f2]/70 transition-colors hover:text-[#c1a45f]"
                  >
                    <item.icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#c1a45f]" />
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Main Office - Barranquilla */}
            <div className="mt-6 border-l-2 border-[#c1a45f] pl-4">
              <p className="font-[family-name:var(--font-subtitle)] text-[10px] uppercase tracking-[0.3em] text-[#c1a45f]">
                Main Office
              </p>
              <div className="mt-3 space-y-2">
                <div className="flex items-start gap-3">
                  <FaLocationDot className="mt-0.5 h-3 w-3 flex-shrink-0 text-[#c1a45f]" />
                  <span className="text-sm text-[#f7f6f2]/70">{officeInfo.location}</span>
                </div>
                <div className="flex items-start gap-3">
                  <FaEnvelope className="mt-0.5 h-3 w-3 flex-shrink-0 text-[#c1a45f]" />
                  <a href={`mailto:${officeInfo.email}`} className="text-sm text-[#f7f6f2]/70 transition-colors hover:text-[#c1a45f]">
                    {officeInfo.email}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <FaPhone className="mt-0.5 h-3 w-3 flex-shrink-0 text-[#c1a45f]" />
                  <a href={`tel:${officeInfo.phone.replace(/\s/g, '')}`} className="text-sm text-[#f7f6f2]/70 transition-colors hover:text-[#c1a45f]">
                    {officeInfo.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Coverage badge */}
            <div className="mt-6 border-l-2 border-[#c1a45f] pl-4">
              <p className="font-[family-name:var(--font-subtitle)] text-[10px] uppercase tracking-[0.3em] text-[#c1a45f]">
                Strategic ports
              </p>
              <p className="mt-2 text-sm text-[#f7f6f2]/70">
                Cartagena • Barranquilla • Santa Marta
                <br />
                Buenaventura • Covenas • Turbo
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#c1a45f]/20 bg-[#0b1e3e]/80">
        <div className="mx-auto max-w-7xl px-6 py-6 sm:px-10 lg:px-12">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row">
            <p className="text-xs text-[#f7f6f2]/50">
              © {currentYear} G&amp;P Ship Agency &amp; Co. All rights reserved.
            </p>
            <p className="text-xs text-[#f7f6f2]/50">
              Maritime excellence with institutional protocol
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}