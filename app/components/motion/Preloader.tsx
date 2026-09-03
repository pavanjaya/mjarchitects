"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SESSION_KEY = "mj-preloaded";

function AnimatedMark() {
  return (
    <svg
      viewBox="0 0 420 241"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 md:h-12 w-auto"
    >
      <motion.path
        d="M1.04986e-05 4.19629e-05L1.0485e-05 240.066L59.9232 240.066L59.9232 60.0327L119.879 60.0327L119.879 240.066L179.802 240.066L179.802 60.0005L239.757 60.0005L239.757 4.19494e-05L1.04986e-05 4.19629e-05Z"
        fill="currentColor"
        initial={{ opacity: 0, x: -14 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.path
        d="M299.707 60.0327L299.707 4.19629e-05L419.585 4.19561e-05L419.585 240.099L299.675 240.099L299.675 180.066L359.662 180.066L359.662 60.0327L299.707 60.0327Z"
        fill="currentColor"
        initial={{ opacity: 0, x: 14 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.rect
        x="239.743"
        y="90.0301"
        width="59.9232"
        height="90.0329"
        fill="currentColor"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.25, 1, 0.25] }}
        transition={{ duration: 1.3, delay: 0.4, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

export default function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Only play the full load animation once per browser tab/session —
    // subsequent internal navigations and revisits skip straight past it.
    let alreadyShown = false;
    try {
      alreadyShown = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      // sessionStorage unavailable (private mode, etc.) — fall back to
      // always showing it rather than throwing.
    }

    if (alreadyShown) {
      const id = setTimeout(() => setDone(true), 0);
      return () => clearTimeout(id);
    }

    document.body.style.overflow = "hidden";
    const id = setTimeout(() => {
      setDone(true);
      document.body.style.overflow = "";
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        // ignore
      }
    }, 1400);

    return () => clearTimeout(id);
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
            exit={{ y: -16, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ color: "var(--foreground)" }}
          >
            <AnimatedMark />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
