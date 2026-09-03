"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";

const steps = [
  {
    num: "01",
    title: "Discovery",
    duration: "2–4 weeks",
    description:
      "We begin with deep listening. Site visits, stakeholder conversations, cultural research, and climatic analysis form the foundation before a single line is drawn.",
    deliverables: ["Site Analysis Report", "Client Brief", "Vision Statement", "Feasibility Overview"],
  },
  {
    num: "02",
    title: "Concept",
    duration: "3–6 weeks",
    description:
      "From research, we derive a guiding concept — a spatial idea that will drive every decision from massing to material. Multiple schemes are explored and pressure-tested.",
    deliverables: ["Concept Diagrams", "Massing Studies", "Material Palette", "Reference Board"],
  },
  {
    num: "03",
    title: "Design Development",
    duration: "6–12 weeks",
    description:
      "The concept deepens into architecture. Plans, sections, elevations — every space designed with intention. Structural and MEP engineers join the team.",
    deliverables: ["Detailed Drawings", "3D Renderings", "Technical Specifications", "Cost Estimate"],
  },
  {
    num: "04",
    title: "Documentation",
    duration: "4–8 weeks",
    description:
      "Complete construction documents prepared with precision. Every detail resolved on paper before it's resolved on site. Permits and approvals managed.",
    deliverables: ["Construction Drawings", "Structural Drawings", "Permit Applications", "Tender Package"],
  },
  {
    num: "05",
    title: "Construction",
    duration: "Varies",
    description:
      "We remain on-site throughout construction — not as inspectors, but as collaborators with the builders. Quality is maintained through relationship, not just specification.",
    deliverables: ["Site Supervision", "Shop Drawing Review", "Quality Control", "Progress Reports"],
  },
  {
    num: "06",
    title: "Handover",
    duration: "1–2 weeks",
    description:
      "The building is handed over with full documentation, operating manuals, and a post-occupancy consultation scheduled for six months later.",
    deliverables: ["As-Built Drawings", "O&M Manuals", "Snag List Clearance", "6-Month Review"],
  },
];

export default function Process() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="process" className="py-24 px-6 md:px-12" style={{ background: "var(--surface)" }}>
      <div className="max-w-[1600px] mx-auto">
        <Reveal>
          <p
            className="text-[12px] uppercase mb-20"
            style={{ color: "var(--foreground)", letterSpacing: "0.05em" }}
          >
            How We Work
          </p>
        </Reveal>

        <div style={{ borderTop: "1px solid var(--border)" }}>
          {steps.map((step, i) => {
            const open = openIndex === i;
            return (
              <div key={step.num} style={{ borderBottom: "1px solid var(--border)" }}>
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="w-full text-left py-8 flex items-center gap-6 md:gap-10 group"
                >
                  <span
                    className="text-[13px] font-display shrink-0 w-10"
                    style={{ color: "var(--muted)" }}
                  >
                    {step.num}
                  </span>
                  <span
                    className="font-display uppercase flex-1"
                    style={{
                      color: "var(--foreground)",
                      fontSize: "clamp(1.25rem, 2.5vw, 2rem)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {step.title}
                  </span>
                  <span
                    className="hidden md:block text-[12px] uppercase shrink-0"
                    style={{ color: "var(--muted)", letterSpacing: "0.05em" }}
                  >
                    {step.duration}
                  </span>
                  <span
                    className="text-[12px] uppercase shrink-0 transition-colors duration-300"
                    style={{ color: "var(--foreground)" }}
                  >
                    {open ? "LESS −" : "MORE +"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 pl-16 md:pl-20 grid md:grid-cols-2 gap-8 max-w-4xl">
                        <p
                          className="text-base leading-relaxed"
                          style={{ color: "var(--muted)" }}
                        >
                          {step.description}
                        </p>
                        <div>
                          <p
                            className="text-[11px] uppercase mb-4"
                            style={{ color: "var(--foreground)", letterSpacing: "0.05em" }}
                          >
                            Deliverables
                          </p>
                          <ul className="space-y-2">
                            {step.deliverables.map((d) => (
                              <li
                                key={d}
                                className="text-sm flex items-center gap-3"
                                style={{ color: "var(--foreground)" }}
                              >
                                <span style={{ color: "var(--foreground)" }}>—</span>
                                {d}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
