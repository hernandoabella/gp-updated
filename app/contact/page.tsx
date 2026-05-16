import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  FaArrowRight,
  FaEnvelope,
  FaGlobe,
  FaLocationDot,
  FaWhatsapp,
} from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Contact | G&P Ship Agency & Co.",
  description:
    "Contact G&P Ship Agency & Co. through a refined inquiry page designed for direct maritime communication.",
};

async function submitContactForm(formData: FormData) {
  "use server";

  const query = new URLSearchParams({
    sent: "true",
    name: String(formData.get("fullName") ?? ""),
  });

  redirect(`/contact?${query.toString()}`);
}

type ContactPageProps = {
  searchParams: Promise<{ sent?: string; name?: string }>;
};

export default async function ContactPage(props: ContactPageProps) {
  const searchParams = await props.searchParams;
  const isSent = searchParams.sent === "true";
  const submittedName = searchParams.name?.trim();

  return (
    <main className="bg-[var(--color-paper)] text-[var(--color-ink)]">
      <section className="px-6 pb-24 pt-10 sm:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div>
            <p className="font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.42em] text-[var(--color-accent-strong)]">
              Contact
            </p>
            <h1 className="mt-5 font-[family-name:var(--font-display)] text-5xl leading-[0.94] text-balance sm:text-6xl">
              Direct communication with protocol and precision.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              Built in English, refined in tone, and aligned with the new
              visual identity. This page is meant to feel institutional,
              ceremonial, and immediately useful for serious maritime
              inquiries.
            </p>

            <div className="mt-10 grid gap-5">
              {[
                {
                  label: "Email",
                  value: "operations@gpshipagency.com",
                  href: "mailto:operations@gpshipagency.com",
                  icon: FaEnvelope,
                },
                {
                  label: "WhatsApp",
                  value: "Open direct conversation",
                  href: "https://wa.me/?text=Hello%20G%26P%20Ship%20Agency%20%26%20Co.%20I%20would%20like%20to%20request%20more%20information.",
                  icon: FaWhatsapp,
                },
                {
                  label: "Navigation",
                  value: "Return to the institutional homepage",
                  href: "/",
                  icon: FaGlobe,
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="border border-[rgba(11,30,62,0.08)] bg-white px-6 py-6 shadow-[0_16px_40px_rgba(11,30,62,0.06)] hover:-translate-y-0.5"
                >
                  <item.icon className="text-base text-[var(--color-accent-strong)]" />
                  <p className="font-[family-name:var(--font-subtitle)] text-[11px] uppercase tracking-[0.34em] text-[var(--color-accent-strong)]">
                    {item.label}
                  </p>
                  <p className="mt-3 font-[family-name:var(--font-display)] text-3xl text-[var(--color-ink)]">
                    {item.value}
                  </p>
                </a>
              ))}
            </div>
          </div>

          <div className="border border-[rgba(11,30,62,0.08)] bg-white p-8 shadow-[0_26px_70px_rgba(11,30,62,0.08)] sm:p-10">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.42em] text-[var(--color-accent-strong)]">
                  Inquiry form
                </p>
                <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl text-balance">
                  Share your vessel, port, or service requirement.
                </h2>
              </div>

              <Link
                href="/#services"
                className="hidden border border-[var(--color-accent)] px-4 py-2 font-[family-name:var(--font-subtitle)] text-[11px] uppercase tracking-[0.24em] text-[var(--color-ink)] hover:bg-[var(--color-accent)] lg:inline-flex"
              >
                <FaArrowRight className="mr-2 text-[11px]" />
                See services
              </Link>
            </div>

            {isSent ? (
              <div className="mt-8 border border-[rgba(193,164,95,0.34)] bg-[linear-gradient(160deg,#f7f6f2_0%,#ece7d9_100%)] px-5 py-4">
                <p className="font-[family-name:var(--font-subtitle)] text-[11px] uppercase tracking-[0.32em] text-[var(--color-accent-strong)]">
                  Inquiry registered
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                  Thank you
                  {submittedName ? `, ${submittedName}` : ""}. Your inquiry
                  flow is ready. The next step can be wiring this form to email,
                  CRM, or WhatsApp automation while preserving the same
                  high-protocol presentation.
                </p>
              </div>
            ) : null}

            <form action={submitContactForm} className="mt-8 grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="font-[family-name:var(--font-subtitle)] text-[11px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                    Full name
                  </span>
                  <input
                    name="fullName"
                    type="text"
                    required
                    className="border border-[rgba(11,30,62,0.12)] bg-[var(--color-paper)] px-4 py-3"
                    placeholder="James Thornton"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="font-[family-name:var(--font-subtitle)] text-[11px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                    Company
                  </span>
                  <input
                    name="company"
                    type="text"
                    className="border border-[rgba(11,30,62,0.12)] bg-[var(--color-paper)] px-4 py-3"
                    placeholder="Atlantic Marine Group"
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="font-[family-name:var(--font-subtitle)] text-[11px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                    Email
                  </span>
                  <input
                    name="email"
                    type="email"
                    required
                    className="border border-[rgba(11,30,62,0.12)] bg-[var(--color-paper)] px-4 py-3"
                    placeholder="james@company.com"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="font-[family-name:var(--font-subtitle)] text-[11px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                    Phone
                  </span>
                  <input
                    name="phone"
                    type="tel"
                    className="border border-[rgba(11,30,62,0.12)] bg-[var(--color-paper)] px-4 py-3"
                    placeholder="+57 300 000 0000"
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="font-[family-name:var(--font-subtitle)] text-[11px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                    Service interest
                  </span>
                  <select
                    name="service"
                    defaultValue=""
                    className="border border-[rgba(11,30,62,0.12)] bg-[var(--color-paper)] px-4 py-3"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>Port agency</option>
                    <option>Protective agency</option>
                    <option>Owner representation</option>
                    <option>Special operations</option>
                  </select>
                </label>

                <label className="grid gap-2">
                  <span className="font-[family-name:var(--font-subtitle)] text-[11px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                    Port or location
                  </span>
                  <div className="relative">
                    <FaLocationDot className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[var(--color-accent-strong)]" />
                    <input
                      name="location"
                      type="text"
                      className="w-full border border-[rgba(11,30,62,0.12)] bg-[var(--color-paper)] py-3 pl-10 pr-4"
                      placeholder="Cartagena"
                    />
                  </div>
                </label>
              </div>

              <label className="grid gap-2">
                <span className="font-[family-name:var(--font-subtitle)] text-[11px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                  Message
                </span>
                <textarea
                  name="message"
                  required
                  rows={7}
                  className="resize-none border border-[rgba(11,30,62,0.12)] bg-[var(--color-paper)] px-4 py-3"
                  placeholder="Please share your vessel details, schedule, preferred service scope, and any operational priorities."
                />
              </label>

              <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-md text-sm leading-7 text-[var(--color-muted)]">
                  This form is ready for the visual experience now and can be
                  connected next to your preferred delivery workflow.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-ink)] px-7 py-3 font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.26em] text-[var(--color-paper)] hover:bg-[var(--color-accent-strong)]"
                >
                  <FaArrowRight className="mr-2 text-sm" />
                  Send inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
