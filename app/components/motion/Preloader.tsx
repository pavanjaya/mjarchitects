"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const start = performance.now();
    const duration = 1100;
    let raf: number;

    const tick = (t: number) => {
      const elapsed = t - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setDone(true);
          document.body.style.overflow = "";
        }, 120);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center"
          style={{ background: "var(--background)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
        >
          <motion.div
            className="flex items-center gap-4 md:gap-6"
            exit={{ y: -16, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              className="font-display uppercase"
              style={{
                fontSize: "clamp(1rem, 2vw, 1.4rem)",
                letterSpacing: "-0.01em",
                color: "var(--foreground)",
              }}
            >
              MJ Architects
            </span>
            <span
              style={{
                width: "clamp(48px, 8vw, 96px)",
                height: 1,
                background: "var(--border)",
              }}
            />
            <span
              className="font-display tabular-nums"
              style={{
                fontSize: "clamp(1rem, 2vw, 1.4rem)",
                color: "var(--muted)",
                minWidth: "3ch",
              }}
            >
              {progress}%
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
