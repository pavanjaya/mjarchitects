"use client";

import { useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import TransitionLink from "./motion/TransitionLink";
import type { Project } from "../lib/projects";
import type { MouseEvent } from "react";

export default function ProjectCard({
  project,
  delay = 0,
}: {
  project: Project;
  delay?: number;
}) {
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
              className="relative w-full aspect-[4/3] overflow-hidden"
              style={{
                background: project.color,
                viewTransitionName: `project-image-${project.slug}`,
              } as React.CSSProperties}
              onMouseMove={handleImageMove}
              onMouseLeave={handleImageLeave}
            >
              {project.image && (
                <motion.div
                  className="absolute inset-0"
                  style={{ x: springX, y: springY }}
                  initial={{ scale: 1.06 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
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
