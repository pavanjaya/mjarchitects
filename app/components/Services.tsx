"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import PillCTA from "./PillCTA";

const services = [
  {
    num: "01",
    title: "Architectural Design",
    description:
      "Full architectural design services from concept through construction — residential, commercial, institutional, and cultural projects shaped around place, purpose, and people.",
    includes: ["Concept Design", "Design Development", "Construction Documentation", "Regulatory Approvals"],
  },
  {
    num: "02",
    title: "Interior Design",
    description:
      "Interiors developed as an extension of the architecture, not an afterthought — material, light, and detail resolved together with the building envelope from the outset.",
    includes: ["Space Planning", "Material & Finish Selection", "Custom Furniture & Fixtures", "Lighting Design"],
  },
  {
    num: "03",
    title: "Master Planning & Urban Design",
    description:
      "Large-scale planning for campuses, townships, and mixed-use developments, balancing density, circulation, landscape, and civic life at a neighbourhood scale.",
    includes: ["Site & Feasibility Studies", "Zoning Strategy", "Phasing Plans", "Public Realm Design"],
  },
  {
    num: "04",
    title: "Landscape Architecture",
    description:
      "Landscape conceived alongside the building, not around it — courtyards, gardens, and outdoor rooms designed to extend a project's architecture into its site.",
    includes: ["Site Landscape Design", "Planting Strategy", "Hardscape & Water Features", "Rooftop & Terrace Gardens"],
  },
  {
    num: "05",
    title: "Project Management & Site Supervision",
    description:
      "On-site presence throughout construction to protect design intent, coordinate consultants, and keep quality, budget, and schedule aligned to the brief.",
    includes: ["Contractor Coordination", "Quality Control", "Schedule & Budget Tracking", "Snagging & Handover"],
  },
  {
    num: "06",
    title: "Sustainability Consulting",
    description:
      "Passive-first environmental strategy woven into the design from the earliest sketches — orientation, material, and massing before mechanical systems.",
    includes: ["Passive Design Strategy", "Energy Modelling", "Green Building Certification", "Material Lifecycle Review"],
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="services" className="py-24 px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        <Reveal>
          <p
            className="text-[12px] uppercase mb-6"
            style={{ color: "var(--muted)", letterSpacing: "0.05em" }}
          >
            (What We Do)
          </p>
          <h1
            className="font-display uppercase mb-20 md:mb-28 max-w-3xl"
            style={{
              color: "var(--foreground)",
              fontSize: "clamp(2.25rem, 5vw, 4rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            Services
          </h1>
        </Reveal>

        <div style={{ borderTop: "1px solid var(--border)" }}>
          {services.map((service, i) => {
            const open = openIndex === i;
            return (
              <div key={service.num} style={{ borderBottom: "1px solid var(--border)" }}>
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="w-full text-left py-8 flex items-center gap-6 md:gap-10 group"
                >
                  <span
                    className="text-[13px] font-display shrink-0 w-10"
                    style={{ color: "var(--muted)" }}
                  >
                    {service.num}
                  </span>
                  <span
                    className="font-display uppercase flex-1"
                    style={{
                      color: "var(--foreground)",
                      fontSize: "clamp(1.25rem, 2.5vw, 2rem)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {service.title}
                  </span>
                  <span
                    className="text-[12px] uppercase shrink-0 transition-colors duration-300"
                    style={{ color: open ? "var(--accent)" : "var(--foreground)" }}
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
                          {service.description}
                        </p>
                        <div>
                          <p
                            className="text-[11px] uppercase mb-4"
                            style={{ color: "var(--accent)", letterSpacing: "0.05em" }}
                          >
                            Includes
                          </p>
                          <ul className="space-y-2">
                            {service.includes.map((d) => (
                              <li
                                key={d}
                                className="text-sm flex items-center gap-3"
                                style={{ color: "var(--foreground)" }}
                              >
                                <span style={{ color: "var(--accent)" }}>—</span>
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

        <Reveal>
          <div className="flex justify-center pt-20">
            <PillCTA href="/contact">Start a Project</PillCTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
