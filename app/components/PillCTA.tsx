"use client";

import { ArrowRight } from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import type { MouseEvent } from "react";
import TransitionLink from "./motion/TransitionLink";

export default function PillCTA({
  href,
  children,
  className = "",
}: {
  href: string;
  children: string;
  className?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 });

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.25);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.4);
  };

  const handleMouseLeave = (e: MouseEvent<HTMLAnchorElement>) => {
    x.set(0);
    y.set(0);
    e.currentTarget.style.background = "transparent";
    e.currentTarget.style.color = "var(--foreground)";
  };

  return (
    <motion.div style={{ x: springX, y: springY, display: "inline-block" }}>
      <TransitionLink
        href={href}
        className={`group inline-flex items-center gap-3 text-[13px] uppercase font-display px-8 py-4 rounded-none border transition-colors duration-300 ${className}`}
        style={{
          background: "transparent",
          color: "var(--foreground)",
          borderColor: "var(--foreground)",
          letterSpacing: "-0.01em",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "var(--foreground)";
          e.currentTarget.style.color = "var(--background)";
        }}
        onMouseLeave={handleMouseLeave}
      >
        {children}
        <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-2" />
      </TransitionLink>
    </motion.div>
  );
}
