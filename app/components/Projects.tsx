"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import PillCTA from "./PillCTA";
import ProjectCard from "./ProjectCard";
import { projects } from "../lib/projects";

const categories = [
  { label: "All", value: "All" },
  { label: "Apartments", value: "Apartments" },
  { label: "Bungalows", value: "Residential Bungalows" },
  { label: "Interiors", value: "Interiors" },
];

export default function Projects({ featured = false }: { featured?: boolean }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = featured
    ? projects.slice(0, 4)
    : activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  // Standalone /work page needs a real h1; embedded as a homepage
  // section it must stay an h2 so it doesn't collide with Hero's h1.
  const Heading = featured ? "h2" : "h1";

  return (
    <section id="work" className="pt-20 pb-24 px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <Heading
              className="font-display uppercase"
              style={{
                color: "var(--foreground)",
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
            >
              {featured ? "Featured Work" : "All Work"}
            </Heading>

            {/* Filter */}
            {!featured && (
              <div className="flex flex-wrap gap-6">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => setActiveCategory(cat.value)}
                    className="text-[13px] uppercase font-display transition-colors duration-300"
                    style={{
                      color:
                        activeCategory === cat.value ? "var(--foreground)" : "var(--muted)",
                      letterSpacing: "-0.01em",
                      borderBottom:
                        activeCategory === cat.value
                          ? "1px solid var(--foreground)"
                          : "1px solid transparent",
                    }}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </Reveal>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-16 md:gap-y-20">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={(i % 2) * 0.05} />
          ))}
        </div>

        {featured && (
          <Reveal delay={0.15}>
            <div className="flex justify-center pt-20">
              <PillCTA href="/work">View All Projects</PillCTA>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
