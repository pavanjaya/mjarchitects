"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const offices = [
  {
    city: "Nashik",
    address: "704, 7th Floor, Aura Sky Tower, Near Kulkarni Garden\nSharanpur Road, Nashik, Maharashtra 422005",
    phone: "+91 97666 40399",
    email: "hello@mjarchitects.co",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", project: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        <Reveal>
          <p
            className="text-[12px] uppercase mb-8"
            style={{ color: "var(--foreground)", letterSpacing: "0.05em" }}
          >
            Get In Touch
          </p>
          <h1
            className="font-display uppercase mb-16 md:mb-24"
            style={{
              color: "var(--foreground)",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              letterSpacing: "-0.02em",
              lineHeight: 0.98,
            }}
          >
            Let&apos;s Start a
            <br />
            Conversation
          </h1>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Form */}
          <Reveal>
            {sent ? (
              <div className="py-16">
                <div
                  className="h-px w-16 mb-8"
                  style={{ background: "var(--foreground)" }}
                />
                <h3
                  className="text-2xl font-display mb-4"
                  style={{ color: "var(--foreground)" }}
                >
                  Thank you.
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  We&apos;ve received your message. A member of our studio will be
                  in touch within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {[
                  { id: "name", label: "Full Name", type: "text", placeholder: "Your name" },
                  { id: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
                  { id: "project", label: "Project Type", type: "text", placeholder: "Residential, Commercial, Cultural..." },
                ].map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="block text-[11px] uppercase mb-3"
                      style={{ color: "var(--foreground)", letterSpacing: "0.05em" }}
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.id as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                      required
                      className="w-full bg-transparent py-3 text-base outline-none transition-colors duration-300"
                      style={{
                        color: "var(--foreground)",
                        borderBottom: "1px solid var(--border)",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderBottomColor = "var(--foreground)")}
                      onBlur={(e) => (e.currentTarget.style.borderBottomColor = "var(--border)")}
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[11px] uppercase mb-3"
                    style={{ color: "var(--foreground)", letterSpacing: "0.05em" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    className="w-full bg-transparent py-3 text-base outline-none resize-none transition-colors duration-300"
                    style={{
                      color: "var(--foreground)",
                      borderBottom: "1px solid var(--border)",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderBottomColor = "var(--foreground)")}
                    onBlur={(e) => (e.currentTarget.style.borderBottomColor = "var(--border)")}
                  />
                </div>

                <button
                  type="submit"
                  className="group flex items-center gap-4 text-[13px] uppercase px-8 py-4 transition-all duration-300"
                  style={{ background: "var(--foreground)", color: "var(--background)", letterSpacing: "-0.01em" }}
                >
                  Send Message
                  <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
                </button>
              </form>
            )}
          </Reveal>

          {/* Offices */}
          <Reveal delay={0.1}>
            <div className="space-y-10">
              {offices.map((office) => (
                <div key={office.city}>
                  <p
                    className="text-[13px] uppercase mb-4"
                    style={{ color: "var(--foreground)", letterSpacing: "-0.01em" }}
                  >
                    {office.city}
                  </p>
                  <p
                    className="text-sm leading-relaxed mb-3 whitespace-pre-line"
                    style={{ color: "var(--muted)" }}
                  >
                    {office.address}
                  </p>
                  <p
                    className="text-sm mb-1"
                    style={{ color: "var(--foreground)" }}
                  >
                    {office.phone}
                  </p>
                  <a
                    href={`mailto:${office.email}`}
                    className="text-sm transition-colors duration-300"
                    style={{ color: "var(--foreground)" }}
                  >
                    {office.email}
                  </a>
                  <div
                    className="h-px mt-8"
                    style={{ background: "var(--border)" }}
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
