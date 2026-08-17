"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal";
import PillCTA from "./PillCTA";
import ProjectCard from "./ProjectCard";
import { projects } from "../lib/projects";

const categories = ["Industrial", "Residential", "Commercial", "Healthcare", "Institutional", "Hospitality"];

export default function Projects({ featured = false }: { featured?: boolean }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const filtered = featured
    ? projects.slice(0, 4)
    : activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="pt-20 pb-24 px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <h2
              className="font-display uppercase"
              style={{
                color: "var(--foreground)",
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
            >
              Featured Work
            </h2>

            {/* Filter */}
            {!featured && (
              <div className="flex items-center gap-6">
                <button
                  onClick={() => {
                    setActiveCategory("All");
                    setDropdownOpen(false);
                  }}
                  className="text-[13px] uppercase font-display transition-colors duration-300"
                  style={{
                    color: activeCategory === "All" ? "var(--foreground)" : "var(--muted)",
                    letterSpacing: "-0.01em",
                    borderBottom:
                      activeCategory === "All"
                        ? "1px solid var(--foreground)"
                        : "1px solid transparent",
                  }}
                >
                  All
                </button>

                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen((o) => !o)}
                    className="flex items-center gap-2 text-[13px] uppercase font-display transition-colors duration-300"
                    style={{
                      color: activeCategory !== "All" ? "var(--foreground)" : "var(--muted)",
                      letterSpacing: "-0.01em",
                      borderBottom:
                        activeCategory !== "All"
                          ? "1px solid var(--foreground)"
                          : "1px solid transparent",
                    }}
                  >
                    {activeCategory === "All" ? "Category" : activeCategory}
                    <ChevronDown
                      size={14}
                      style={{
                        transform: dropdownOpen ? "rotate(180deg)" : "none",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </button>

                  {dropdownOpen && (
                    <div
                      className="absolute right-0 top-full mt-3 py-2 min-w-[180px] z-10"
                      style={{ background: "var(--background)", border: "1px solid var(--border)" }}
                    >
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => {
                            setActiveCategory(cat);
                            setDropdownOpen(false);
                          }}
                          className="block w-full text-left px-5 py-2.5 text-[13px] uppercase font-display transition-colors duration-200"
                          style={{
                            color: activeCategory === cat ? "var(--foreground)" : "var(--muted)",
                          }}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
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
