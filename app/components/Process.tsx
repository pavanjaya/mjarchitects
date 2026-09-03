"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Reveal from "./Reveal";

const steps = [
  {
    num: "01",
    title: "Discovery",
    duration: "2–4 weeks",
    image: "/process/01-discovery.jpg",
    description:
      "We begin with deep listening. Site visits, stakeholder conversations, cultural research, and climatic analysis form the foundation before a single line is drawn.",
    deliverables: ["Site Analysis Report", "Client Brief", "Vision Statement", "Feasibility Overview"],
  },
  {
    num: "02",
    title: "Concept",
    duration: "3–6 weeks",
    image: "/process/02-concept.jpg",
    description:
      "From research, we derive a guiding concept — a spatial idea that will drive every decision from massing to material. Multiple schemes are explored and pressure-tested.",
    deliverables: ["Concept Diagrams", "Massing Studies", "Material Palette", "Reference Board"],
  },
  {
    num: "03",
    title: "Design Development",
    duration: "6–12 weeks",
    image: "/process/03-design-development.jpg",
    description:
      "The concept deepens into architecture. Plans, sections, elevations — every space designed with intention. Structural and MEP engineers join the team.",
    deliverables: ["Detailed Drawings", "3D Renderings", "Technical Specifications", "Cost Estimate"],
  },
  {
    num: "04",
    title: "Documentation",
    duration: "4–8 weeks",
    image: "/process/04-documentation.jpg",
    description:
      "Complete construction documents prepared with precision. Every detail resolved on paper before it's resolved on site. Permits and approvals managed.",
    deliverables: ["Construction Drawings", "Structural Drawings", "Permit Applications", "Tender Package"],
  },
  {
    num: "05",
    title: "Construction",
    duration: "Varies",
    image: "/process/05-construction.jpg",
    description:
      "We remain on-site throughout construction — not as inspectors, but as collaborators with the builders. Quality is maintained through relationship, not just specification.",
    deliverables: ["Site Supervision", "Shop Drawing Review", "Quality Control", "Progress Reports"],
  },
  {
    num: "06",
    title: "Handover",
    duration: "1–2 weeks",
    image: "/process/06-handover.jpg",
    description:
      "The building is handed over with full documentation, operating manuals, and a post-occupancy consultation scheduled for six months later.",
    deliverables: ["As-Built Drawings", "O&M Manuals", "Snag List Clearance", "6-Month Review"],
  },
];

function StepRow({ step, isLast }: { step: (typeof steps)[number]; isLast: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="flex gap-6 md:gap-12">
      {/* Rail */}
      <div className="flex flex-col items-center shrink-0">
        <motion.div
          className="rounded-full flex items-center justify-center font-display shrink-0"
          style={{
            width: "clamp(3rem, 5vw, 4.5rem)",
            height: "clamp(3rem, 5vw, 4.5rem)",
            border: "1px solid var(--foreground)",
            color: "var(--foreground)",
            background: "var(--surface)",
            fontSize: "clamp(0.9rem, 1.2vw, 1.1rem)",
          }}
          initial={{ scale: 0.85, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {step.num}
        </motion.div>
        {!isLast && (
          <div className="relative w-px flex-1 mt-2 overflow-hidden" style={{ background: "var(--border)" }}>
            <motion.div
              className="absolute inset-x-0 top-0 w-px"
              style={{ background: "var(--foreground)" }}
              initial={{ height: "0%" }}
              animate={inView ? { height: "100%" } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        )}
      </div>

      {/* Content */}
      <motion.div
        className="flex-1 pb-20 md:pb-28"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 mb-6">
          <h3
            className="font-display uppercase"
            style={{
              color: "var(--foreground)",
              fontSize: "clamp(1.25rem, 2.5vw, 2rem)",
              letterSpacing: "-0.02em",
            }}
          >
            {step.title}
          </h3>
          <span
            className="text-[12px] uppercase"
            style={{ color: "var(--muted)", letterSpacing: "0.05em" }}
          >
            {step.duration}
          </span>
        </div>

        <div
          className="relative w-full aspect-[21/9] overflow-hidden mb-8"
          style={{ background: "var(--background)" }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.08, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image src={step.image} alt={step.title} fill className="object-cover" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            {step.description}
          </p>
          <div>
            <p
              className="text-[11px] uppercase mb-4"
              style={{ color: "var(--foreground)", letterSpacing: "0.05em" }}
            >
              Deliverables
            </p>
            <div className="flex flex-wrap gap-2">
              {step.deliverables.map((d) => (
                <span
                  key={d}
                  className="text-[12px] px-3 py-1.5"
                  style={{
                    color: "var(--foreground)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Process() {
  return (
    <section id="process" className="py-28 md:py-36 px-6 md:px-12" style={{ background: "var(--surface)" }}>
      <div className="max-w-[1600px] mx-auto">
        <Reveal>
          <div className="max-w-3xl mb-24 md:mb-32">
            <p
              className="text-[12px] uppercase mb-8"
              style={{ color: "var(--foreground)", letterSpacing: "0.05em" }}
            >
              How We Work
            </p>
            <h2
              className="font-display uppercase mb-10"
              style={{
                color: "var(--foreground)",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              A considered path from first conversation to final handover.
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
              Every project moves through the same six stages — each one
              building on the last, none of them rushed. Structure gives the
              process clarity; attention gives it care.
            </p>
          </div>
        </Reveal>

        <div>
          {steps.map((step, i) => (
            <StepRow key={step.num} step={step} isLast={i === steps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
