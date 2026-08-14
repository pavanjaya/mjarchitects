"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { CSSProperties } from "react";

export default function TextReveal({
  lines,
  className,
  style,
  delay = 0,
  stagger = 0.09,
  once = true,
  immediate = false,
}: {
  lines: string[];
  className?: string;
  style?: CSSProperties;
  delay?: number;
  stagger?: number;
  once?: boolean;
  /** Animate on mount instead of on scroll-into-view — for above-the-fold content. */
  immediate?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once, margin: "-80px" });
  const show = immediate || inView;

  return (
    <span ref={ref} className={className} style={style}>
      {lines.map((line, i) => (
        <span key={i} style={{ display: "block", overflow: "hidden" }}>
          <motion.span
            style={{ display: "block" }}
            initial={{ y: "110%" }}
            animate={{ y: show ? "0%" : "110%" }}
            transition={{
              duration: 0.85,
              delay: delay + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
