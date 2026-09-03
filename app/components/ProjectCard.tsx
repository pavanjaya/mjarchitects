"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import TransitionLink from "./motion/TransitionLink";
import type { Project } from "../lib/projects";

export default function ProjectCard({
  project,
  delay = 0,
}: {
  project: Project;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <TransitionLink href={`/work/${project.slug}`} className="block cursor-pointer group">
        {/* Image */}
        <div className="mb-8 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: delay + 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="relative w-full aspect-[4/3] overflow-hidden transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              style={{
                background: project.color,
                viewTransitionName: `project-image-${project.slug}`,
              } as React.CSSProperties}
            >
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              )}
            </div>
          </motion.div>
        </div>

        {/* Meta */}
        <p
          className="text-[12px] uppercase mb-4"
          style={{ color: "var(--muted)", letterSpacing: "-0.01em" }}
        >
          {project.tags.join(" — ")}
        </p>
        <h3
          className="font-display uppercase transition-transform duration-500 group-hover:translate-x-2"
          style={{
            color: "var(--foreground)",
            fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          {project.name}
        </h3>
      </TransitionLink>
    </motion.div>
  );
}
