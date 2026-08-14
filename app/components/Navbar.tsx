"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Studio", href: "/studio" },
  { label: "Philosophy", href: "/philosophy" },
  { label: "Process", href: "/process" },
  { label: "Journal", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  // Home hero is a full-bleed dark image with no solid nav backing yet —
  // use light text until the user scrolls past it.
  const onDarkHero = pathname === "/" && !scrolled;
  const fg = onDarkHero ? "#f5f3ef" : "var(--foreground)";

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
        }}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center" style={{ color: fg }}>
            <Logo className="h-[34.56px] md:h-[40.32px] w-auto" />
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative group text-[13px] uppercase font-display transition-colors duration-300 pb-1"
                style={{
                  color: isActive(link.href) ? "var(--accent)" : fg,
                  letterSpacing: "-0.01em",
                }}
              >
                {link.label}
                <span
                  className={`absolute left-0 -bottom-0 h-px w-full origin-left transition-transform duration-300 ease-out ${
                    isActive(link.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                  style={{ background: "currentColor" }}
                />
              </Link>
            ))}
          </div>

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: fg }}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-500 flex flex-col justify-center items-center gap-10"
        style={{
          background: "var(--background)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
        }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-2xl uppercase font-display"
            style={{ color: isActive(link.href) ? "var(--accent)" : "var(--foreground)" }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
