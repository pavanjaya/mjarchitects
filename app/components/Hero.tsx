"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import TextReveal from "./motion/TextReveal";
import CountUp from "./motion/CountUp";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
    >
      <motion.div
        className="absolute inset-0"
        initial={{ clipPath: "inset(0 0 100% 0)" }}
        animate={{ clipPath: "inset(0 0 0% 0)" }}
        transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1] }}
      >
        <motion.div
          className="absolute inset-0"
          style={{ y: parallaxY }}
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/hero-building.png"
            alt="MJ Architects — residential tower project"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </motion.div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(0deg, rgba(20,18,14,0.75) 0%, rgba(20,18,14,0.25) 40%, rgba(20,18,14,0) 65%)",
        }}
      />

      {/* Content */}
      <div className="relative px-6 md:px-12 pb-12 md:pb-16 pt-40">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <h1
              className="font-serif italic"
              style={{
                color: "#f5f3ef",
                fontSize: "clamp(2.1rem, 5.04vw, 4.62rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.01em",
                fontWeight: 400,
              }}
            >
              <TextReveal
                lines={["We craft spaces", "driven by place & purpose"]}
                delay={0.6}
                immediate
              />
            </h1>

            <motion.div
              className="flex gap-10 shrink-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div>
                <div className="text-2xl font-display" style={{ color: "#f5f3ef" }}>
                  <CountUp value={250} suffix="+" immediate />
                </div>
                <div
                  className="text-[10px] uppercase mt-1"
                  style={{ color: "rgba(245,243,239,0.65)", letterSpacing: "0.1em" }}
                >
                  Projects
                </div>
              </div>
              <div>
                <div className="text-2xl font-display" style={{ color: "#f5f3ef" }}>
                  <CountUp value={18} suffix="+" immediate />
                </div>
                <div
                  className="text-[10px] uppercase mt-1"
                  style={{ color: "rgba(245,243,239,0.65)", letterSpacing: "0.1em" }}
                >
                  Years of Practice
                </div>
              </div>
            </motion.div>
          </div>

          <motion.p
            className="text-[13px] uppercase mt-8"
            style={{ color: "rgba(245,243,239,0.75)", letterSpacing: "0.05em" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            Designed to endure — Built to inspire
          </motion.p>
        </div>
      </div>
    </section>
  );
}
