"use client";

import { useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import type { MouseEvent } from "react";
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

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 20, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 150, damping: 20, mass: 0.4 });

  const handleImageMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(((e.clientX - rect.left) / rect.width - 0.5) * 14);
    y.set(((e.clientY - rect.top) / rect.height - 0.5) * 14);
  };

  const handleImageLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="relative w-full aspect-[4/3] overflow-hidden mb-8"
        style={{ background: "var(--surface)" }}
        onMouseMove={handleImageMove}
        onMouseLeave={handleImageLeave}
      >
        <motion.div
          className="absolute inset-0"
          style={{ x: springX, y: springY }}
          initial={{ scale: 1.08, opacity: 0 }}
          animate={inView ? { scale: 1.06, opacity: 1 } : {}}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image src={service.image} alt={service.title} fill className="object-cover" />
        </motion.div>
      </div>

      <span
        className="block font-display mb-3"
        style={{ color: "var(--muted)", fontSize: "13px" }}
      >
        {service.num}
      </span>
      <h3
        className="font-display uppercase mb-4"
        style={{
          color: "var(--foreground)",
          fontSize: "clamp(1.15rem, 1.6vw, 1.375rem)",
          letterSpacing: "-0.01em",
          lineHeight: 1.2,
        }}
      >
        {service.title}
      </h3>
      <p
        className="text-[15px] leading-relaxed mb-6"
        style={{ color: "var(--muted)" }}
      >
        {service.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {service.includes.map((d) => (
          <span
            key={d}
            className="text-[12px] px-3 py-1.5"
            style={{ color: "var(--foreground)", border: "1px solid var(--border)" }}
          >
            {d}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Services() {
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

        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 md:gap-y-20 pt-16"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          {services.map((service) => (
            <ServiceCard key={service.num} service={service} />
          ))}
        </div>

        <Reveal>
          <div className="flex justify-center pt-24 md:pt-32">
            <PillCTA href="/contact">Start a Project</PillCTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
