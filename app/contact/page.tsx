"use client";

import { useState } from "react";
import {
    FaEnvelope,
    FaPhone,
    FaLocationDot,
    FaClock,
    FaPaperPlane,
    FaCircleCheck,
    FaXmark,
} from "react-icons/fa6";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        vessel: "",
        message: "",
    });

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus("success");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    vessel: "",
                    message: "",
                });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                throw new Error(data.error || "Something went wrong");
            }
        } catch (error) {
            setStatus("error");
            setErrorMessage(error instanceof Error ? error.message : "Failed to send message");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    return (
        <main className="bg-[#f7f6f2]">
            <Header />
            {/* Hero Section */}
            <section className="px-6 pt-32 pb-12 sm:px-10 lg:px-12">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="flex justify-center mb-4">
                            <div className="h-px w-12 bg-[#c1a45f]" />
                        </div>
                        <p className="font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.42em] text-[#c1a45f] mb-4">
                            Get in Touch
                        </p>
                        <h1 className="font-[family-name:var(--font-display)] text-4xl text-balance text-[#0b1e3e] sm:text-5xl lg:text-6xl">
                            Let's discuss your{' '}
                            <span className="text-[#c1a45f]">maritime needs</span>
                        </h1>
                        <p className="mt-6 text-base leading-7 text-[#3b3b3b]">
                            Whether you need vessel attendance, protective agency, or special services,
                            our team is ready to assist with institutional protocol and precision.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="px-6 py-12 pb-24 sm:px-10 lg:px-12">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-12 lg:grid-cols-3">
                        {/* Contact Info */}
                        <div className="lg:col-span-1">
                            <div className="bg-white border border-[rgba(11,30,62,0.08)] p-6 shadow-lg">
                                <div className="mb-6">
                                    <div className="flex h-12 w-12 items-center justify-center bg-[#c1a45f]/10 mb-4">
                                        <FaEnvelope className="text-xl text-[#c1a45f]" />
                                    </div>
                                    <h3 className="font-[family-name:var(--font-display)] text-lg text-[#0b1e3e]">Email Us</h3>
                                    <a href="mailto:Info@gpshippingcm.com" className="text-sm text-[#3b3b3b] hover:text-[#c1a45f] transition-colors">
                                        Info@gpshippingcm.com
                                    </a>
                                </div>

                                <div className="mb-6">
                                    <div className="flex h-12 w-12 items-center justify-center bg-[#c1a45f]/10 mb-4">
                                        <FaPhone className="text-xl text-[#c1a45f]" />
                                    </div>
                                    <h3 className="font-[family-name:var(--font-display)] text-lg text-[#0b1e3e]">Call Us</h3>
                                    <a href="tel:+573116406379" className="text-sm text-[#3b3b3b] hover:text-[#c1a45f] transition-colors">
                                        +57 3116406379
                                    </a>
                                </div>

                                <div className="mb-6">
                                    <div className="flex h-12 w-12 items-center justify-center bg-[#c1a45f]/10 mb-4">
                                        <FaLocationDot className="text-xl text-[#c1a45f]" />
                                    </div>
                                    <h3 className="font-[family-name:var(--font-display)] text-lg text-[#0b1e3e]">Visit Us</h3>
                                    <p className="text-sm text-[#3b3b3b]">
                                        Barranquilla, Atlántico<br />
                                        Colombia
                                    </p>
                                </div>

                                <div>
                                    <div className="flex h-12 w-12 items-center justify-center bg-[#c1a45f]/10 mb-4">
                                        <FaClock className="text-xl text-[#c1a45f]" />
                                    </div>
                                    <h3 className="font-[family-name:var(--font-display)] text-lg text-[#0b1e3e]">24/7 Availability</h3>
                                    <p className="text-sm text-[#3b3b3b]">
                                        Our team is always ready<br />
                                        to assist you.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white border border-[rgba(11,30,62,0.08)] p-6 shadow-lg md:p-8">
                                <h2 className="font-[family-name:var(--font-display)] text-2xl text-[#0b1e3e] mb-2">
                                    Send us a message
                                </h2>
                                <p className="text-sm text-[#3b3b3b] mb-6">
                                    Fill out the form below and we'll get back to you promptly.
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid gap-5 sm:grid-cols-2">
                                        <div>
                                            <label htmlFor="name" className="block text-xs uppercase tracking-[0.2em] text-[#3b3b3b] mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full border border-[rgba(11,30,62,0.2)] bg-[#f7f6f2] px-4 py-3 text-sm text-[#0b1e3e] focus:border-[#c1a45f] focus:outline-none"
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-xs uppercase tracking-[0.2em] text-[#3b3b3b] mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full border border-[rgba(11,30,62,0.2)] bg-[#f7f6f2] px-4 py-3 text-sm text-[#0b1e3e] focus:border-[#c1a45f] focus:outline-none"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid gap-5 sm:grid-cols-2">
                                        <div>
                                            <label htmlFor="phone" className="block text-xs uppercase tracking-[0.2em] text-[#3b3b3b] mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full border border-[rgba(11,30,62,0.2)] bg-[#f7f6f2] px-4 py-3 text-sm text-[#0b1e3e] focus:border-[#c1a45f] focus:outline-none"
                                                placeholder="+57 3116406379"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="vessel" className="block text-xs uppercase tracking-[0.2em] text-[#3b3b3b] mb-2">
                                                Vessel Name (if applicable)
                                            </label>
                                            <input
                                                type="text"
                                                id="vessel"
                                                value={formData.vessel}
                                                onChange={handleChange}
                                                className="w-full border border-[rgba(11,30,62,0.2)] bg-[#f7f6f2] px-4 py-3 text-sm text-[#0b1e3e] focus:border-[#c1a45f] focus:outline-none"
                                                placeholder="M/V Example"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-xs uppercase tracking-[0.2em] text-[#3b3b3b] mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={5}
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full border border-[rgba(11,30,62,0.2)] bg-[#f7f6f2] px-4 py-3 text-sm text-[#0b1e3e] focus:border-[#c1a45f] focus:outline-none"
                                            placeholder="Tell us about your maritime requirements..."
                                        />
                                    </div>

                                    {/* Status Messages */}
                                    {status === "loading" && (
                                        <div className="flex items-center gap-3 text-[#c1a45f]">
                                            <div className="animate-spin rounded-full h-5 w-5 border-2 border-[#c1a45f] border-t-transparent" />
                                            <span className="text-sm">Sending your message...</span>
                                        </div>
                                    )}

                                    {status === "success" && (
                                        <div className="flex items-center gap-3 text-green-600 bg-green-50 p-3">
                                            <FaCircleCheck />
                                            <span className="text-sm">Message sent successfully! We'll get back to you soon.</span>
                                        </div>
                                    )}

                                    {status === "error" && (
                                        <div className="flex items-center gap-3 text-red-600 bg-red-50 p-3">
                                            <FaXmark />
                                            <span className="text-sm">{errorMessage || "Failed to send message. Please try again."}</span>
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={status === "loading"}
                                        className="inline-flex items-center gap-2 bg-[#0b1e3e] px-6 py-3 font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.26em] text-[#f7f6f2] transition-colors hover:bg-[#c1a45f] disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {status === "loading" ? "Sending..." : "Send Message"}
                                        <FaPaperPlane className="text-sm" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}