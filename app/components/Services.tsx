"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Reveal from "./Reveal";
import PillCTA from "./PillCTA";

const services = [
  {
    num: "01",
    title: "Architectural Design",
    image: "/services/01-architectural-design.jpg",
    description:
      "Full architectural design services from concept through construction — residential, commercial, institutional, and cultural projects shaped around place, purpose, and people.",
    includes: ["Concept Design", "Design Development", "Construction Documentation", "Regulatory Approvals"],
  },
  {
    num: "02",
    title: "Interior Design",
    image: "/services/02-interior-design.jpg",
    description:
      "Interiors developed as an extension of the architecture, not an afterthought — material, light, and detail resolved together with the building envelope from the outset.",
    includes: ["Space Planning", "Material & Finish Selection", "Custom Furniture & Fixtures", "Lighting Design"],
  },
  {
    num: "03",
    title: "Master Planning & Urban Design",
    image: "/services/03-master-planning.jpg",
    description:
      "Large-scale planning for campuses, townships, and mixed-use developments, balancing density, circulation, landscape, and civic life at a neighbourhood scale.",
    includes: ["Site & Feasibility Studies", "Zoning Strategy", "Phasing Plans", "Public Realm Design"],
  },
  {
    num: "04",
    title: "Landscape Architecture",
    image: "/services/04-landscape.jpg",
    description:
      "Landscape conceived alongside the building, not around it — courtyards, gardens, and outdoor rooms designed to extend a project's architecture into its site.",
    includes: ["Site Landscape Design", "Planting Strategy", "Hardscape & Water Features", "Rooftop & Terrace Gardens"],
  },
  {
    num: "05",
    title: "Project Management & Site Supervision",
    image: "/services/05-project-management.jpg",
    description:
      "On-site presence throughout construction to protect design intent, coordinate consultants, and keep quality, budget, and schedule aligned to the brief.",
    includes: ["Contractor Coordination", "Quality Control", "Schedule & Budget Tracking", "Snagging & Handover"],
  },
  {
    num: "06",
    title: "Sustainability Consulting",
    image: "/services/06-sustainability.jpg",
    description:
      "Passive-first environmental strategy woven into the design from the earliest sketches — orientation, material, and massing before mechanical systems.",
    includes: ["Passive Design Strategy", "Energy Modelling", "Green Building Certification", "Material Lifecycle Review"],
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="services" className="py-28 md:py-36 px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        <Reveal>
          <div className="max-w-3xl mb-24 md:mb-32">
            <p
              className="text-[12px] uppercase mb-6"
              style={{ color: "var(--muted)", letterSpacing: "0.05em" }}
            >
              (What We Do)
            </p>
            <h1
              className="font-display uppercase mb-10"
              style={{
                color: "var(--foreground)",
                fontSize: "clamp(2.25rem, 5vw, 4rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
            >
              Services
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
              Six disciplines, one studio — each one practised closely enough
              with the others that a building, its interiors, and the ground
              it stands on are never designed apart.
            </p>
          </div>
        </Reveal>

        <div style={{ borderTop: "1px solid var(--border)" }}>
          {services.map((service, i) => {
            const open = openIndex === i;
            return (
              <div key={service.num} style={{ borderBottom: "1px solid var(--border)" }}>
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="w-full text-left py-9 flex items-center gap-6 md:gap-10 group"
                >
                  <span
                    className="text-[13px] font-display shrink-0 w-10"
                    style={{ color: "var(--muted)" }}
                  >
                    {service.num}
                  </span>
                  <span
                    className="font-display uppercase flex-1 transition-opacity duration-300"
                    style={{
                      color: "var(--foreground)",
                      fontSize: "clamp(1.25rem, 2.5vw, 2rem)",
                      letterSpacing: "-0.02em",
                      opacity: open ? 1 : 0.85,
                    }}
                  >
                    {service.title}
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
                      <div className="pb-14 md:pb-16 pl-0 md:pl-20">
                        <div
                          className="relative w-full aspect-[21/9] overflow-hidden mb-8"
                          style={{ background: "var(--surface)" }}
                        >
                          <motion.div
                            className="absolute inset-0"
                            initial={{ scale: 1.08, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                          >
                            <Image
                              src={service.image}
                              alt={service.title}
                              fill
                              className="object-cover"
                            />
                          </motion.div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
                          <p
                            className="text-base leading-relaxed"
                            style={{ color: "var(--muted)" }}
                          >
                            {service.description}
                          </p>
                          <div>
                            <p
                              className="text-[11px] uppercase mb-4"
                              style={{ color: "var(--foreground)", letterSpacing: "0.05em" }}
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
                                  <span style={{ color: "var(--foreground)" }}>—</span>
                                  {d}
                                </li>
                              ))}
                            </ul>
                          </div>
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
          <div className="flex justify-center pt-24 md:pt-28">
            <PillCTA href="/contact">Start a Project</PillCTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
