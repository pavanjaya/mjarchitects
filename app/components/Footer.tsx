"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Logo from "./Logo";

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/themjarchitects/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/themjarchitects/" },
  { label: "Facebook", href: "https://www.facebook.com/mjarchitects.official" },
  { label: "Archinect", href: "#" },
];

export default function Footer() {
  return (
    <footer
      className="pt-20 pb-8 px-6 md:px-12"
      style={{ background: "#B5533A" }}
    >
      <div className="max-w-[1600px] mx-auto">
        <h2
          className="font-display uppercase mb-16 md:mb-24"
          style={{
            color: "var(--background)",
            fontSize: "clamp(2.5rem, 7vw, 6rem)",
            letterSpacing: "-0.03em",
            lineHeight: 0.95,
          }}
        >
          Let&apos;s build
          <br />
          something lasting.
        </h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-16 md:mb-20">
          {/* Contact */}
          <div>
            <a
              href="mailto:hello@mjarchitects.co"
              className="relative group block w-fit font-display uppercase mb-6 pb-1"
              style={{ color: "var(--background)", fontSize: "clamp(1.125rem, 2vw, 1.5rem)", letterSpacing: "-0.01em" }}
            >
              hello@mjarchitects.co
              <span
                className="absolute left-0 -bottom-0 h-px w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
                style={{ background: "currentColor" }}
              />
            </a>
            <a
              href="tel:+912266001400"
              className="relative group inline-flex items-center gap-3 font-display uppercase mb-10 pb-1"
              style={{ color: "var(--background)", fontSize: "clamp(1.125rem, 2vw, 1.5rem)", letterSpacing: "-0.01em" }}
            >
              +91 22 6600 1400
              <ArrowRight size={20} />
              <span
                className="absolute left-0 -bottom-0 h-px w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
                style={{ background: "currentColor" }}
              />
            </a>

            <div
              className="text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              MJ Architects
              <br />
              G-2, Neelima Apartment, College Rd, Vise Mala
              <br />
              Nashik, Maharashtra 422005
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-3 md:items-end">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group inline-block font-display uppercase pb-1"
                style={{ color: "var(--background)", fontSize: "clamp(1.125rem, 2vw, 1.5rem)", letterSpacing: "-0.01em" }}
              >
                {social.label}
                <span
                  className="absolute left-0 -bottom-0 h-px w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
                  style={{ background: "currentColor" }}
                />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center" style={{ color: "var(--background)" }}>
            <Logo className="h-[34.56px] md:h-[40.32px] w-auto" />
          </div>

          <Link
            href="/privacy"
            className="relative group inline-block text-[12px] uppercase pb-1"
            style={{ color: "rgba(255,255,255,0.5)", letterSpacing: "0.05em" }}
          >
            Privacy Policy
            <span
              className="absolute left-0 -bottom-0 h-px w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
              style={{ background: "currentColor" }}
            />
          </Link>

          <p
            className="text-[12px]"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            © 2026 MJ Architects. All rights reserved.
          </p>

          <a
            href="https://www.hueness.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group inline-block text-[12px] pb-1"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Made by Hueness
            <span
              className="absolute left-0 -bottom-0 h-px w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
              style={{ background: "currentColor" }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
