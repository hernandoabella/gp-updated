"use client";

import { useState } from "react";
import { FaLocationDot, FaPhone, FaEnvelope, FaCircleCheck, FaXmark } from "react-icons/fa6";
import { useLanguage } from "@/app/context/LanguageContext";

export function ContactSection() {
  const { lang } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    port: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.company,
          vessel: formData.port,
          message: formData.message,
        }),
      });
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", company: "", email: "", port: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contacto" className="bg-[#0b1e3e] py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.42em] text-[#c1a45f] mb-8">
              {lang === "es" ? "Contacto" : "Contact"}
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex gap-5 items-start">
                <div className="w-9 h-9 border border-[rgba(193,164,95,0.3)] flex items-center justify-center flex-shrink-0">
                  <FaLocationDot className="text-[#c1a45f] w-4 h-4" />
                </div>
                <div>
                  <p className="font-[family-name:var(--font-subtitle)] text-[10px] uppercase tracking-[0.2em] text-[#c1a45f] mb-1">
                    {lang === "es" ? "Sede principal" : "Main office"}
                  </p>
                  <p className="font-[family-name:var(--font-subtitle)] text-sm text-[rgba(247,246,242,0.75)]">
                    Barranquilla, Colombia<br />
                    <span className="opacity-60 text-xs">Cartagena · Buenaventura · Santa Marta</span>
                  </p>
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <div className="w-9 h-9 border border-[rgba(193,164,95,0.3)] flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-[#c1a45f] w-4 h-4" />
                </div>
                <div>
                  <p className="font-[family-name:var(--font-subtitle)] text-[10px] uppercase tracking-[0.2em] text-[#c1a45f] mb-1">
                    {lang === "es" ? "Teléfono 24/7" : "24/7 phone"}
                  </p>
                  <p className="font-[family-name:var(--font-subtitle)] text-sm text-[rgba(247,246,242,0.75)]">
                    +57 3116406379
                  </p>
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <div className="w-9 h-9 border border-[rgba(193,164,95,0.3)] flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-[#c1a45f] w-4 h-4" />
                </div>
                <div>
                  <p className="font-[family-name:var(--font-subtitle)] text-[10px] uppercase tracking-[0.2em] text-[#c1a45f] mb-1">
                    Email
                  </p>
                  <p className="font-[family-name:var(--font-subtitle)] text-sm text-[rgba(247,246,242,0.75)]">
                    Info@gpshippingcm.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder={lang === "es" ? "Nombre completo" : "Full name"}
                className="w-full bg-white/10 border border-[rgba(193,164,95,0.35)] text-white font-[family-name:var(--font-subtitle)] text-sm px-4 py-3.5 outline-none focus:bg-white/15 focus:border-[#c1a45f] focus:ring-1 focus:ring-[#c1a45f]/50 transition-all placeholder:text-white/30 autofill:bg-[#0b1e3e] autofill:text-white"
              />
              <input
                id="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                placeholder={lang === "es" ? "Empresa" : "Company"}
                className="w-full bg-white/10 border border-[rgba(193,164,95,0.35)] text-white font-[family-name:var(--font-subtitle)] text-sm px-4 py-3.5 outline-none focus:bg-white/15 focus:border-[#c1a45f] focus:ring-1 focus:ring-[#c1a45f]/50 transition-all placeholder:text-white/30 autofill:bg-[#0b1e3e] autofill:text-white"
              />
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full bg-white/10 border border-[rgba(193,164,95,0.35)] text-white font-[family-name:var(--font-subtitle)] text-sm px-4 py-3.5 outline-none focus:bg-white/15 focus:border-[#c1a45f] focus:ring-1 focus:ring-[#c1a45f]/50 transition-all placeholder:text-white/30 autofill:bg-[#0b1e3e] autofill:text-white"
              />
              <select
                id="port"
                value={formData.port}
                onChange={handleChange}
                className="w-full bg-white/10 border border-[rgba(193,164,95,0.35)] text-white font-[family-name:var(--font-subtitle)] text-sm px-4 py-3.5 outline-none focus:bg-white/15 focus:border-[#c1a45f] focus:ring-1 focus:ring-[#c1a45f]/50 transition-all"
              >
                <option value="" disabled className="bg-[#0b1e3e] text-white/50">
                  {lang === "es" ? "Puerto de interés" : "Port of interest"}
                </option>
                <option value="Barranquilla" className="bg-[#0b1e3e] text-white">Barranquilla</option>
                <option value="Cartagena" className="bg-[#0b1e3e] text-white">Cartagena</option>
                <option value="Santa Marta" className="bg-[#0b1e3e] text-white">Santa Marta</option>
                <option value="Buenaventura" className="bg-[#0b1e3e] text-white">Buenaventura</option>
                <option value="Turbo" className="bg-[#0b1e3e] text-white">Turbo</option>
                <option value="Other" className="bg-[#0b1e3e] text-white">
                  {lang === "es" ? "Otro puerto" : "Other port"}
                </option>
              </select>
              <textarea
                id="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder={lang === "es" ? "Mensaje" : "Message"}
                className="w-full bg-white/10 border border-[rgba(193,164,95,0.35)] text-white font-[family-name:var(--font-subtitle)] text-sm px-4 py-3.5 outline-none focus:bg-white/15 focus:border-[#c1a45f] focus:ring-1 focus:ring-[#c1a45f]/50 transition-all resize-none placeholder:text-white/30"
              />

              {status === "success" && (
                <div className="flex items-center gap-2 text-green-300 bg-green-900/30 border border-green-700/30 p-3 text-sm rounded">
                  <FaCircleCheck className="shrink-0" />
                  <span>
                    {lang === "es"
                      ? "Mensaje enviado con éxito. Le responderemos pronto."
                      : "Message sent successfully. We'll get back to you soon."}
                  </span>
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 text-red-300 bg-red-900/30 border border-red-700/30 p-3 text-sm rounded">
                  <FaXmark className="shrink-0" />
                  <span>
                    {lang === "es" ? "Error al enviar. Intente de nuevo." : "Failed to send. Please try again."}
                  </span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-[#c1a45f] hover:bg-[#d4b87a] active:bg-[#9e8245] text-[#0b1e3e] font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.15em] font-bold py-4 border border-[#c1a45f] transition-all disabled:opacity-50 cursor-pointer"
              >
                {status === "loading"
                  ? lang === "es" ? "Enviando..." : "Sending..."
                  : lang === "es" ? "Enviar mensaje" : "Send message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
