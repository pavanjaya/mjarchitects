import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "../../components/Reveal";
import ProjectCarousel from "../../components/ProjectCarousel";
import { projects, getProjectBySlug } from "../../lib/projects";

function article(word: string) {
  return /^[aeiou]/i.test(word) ? "an" : "a";
}

function capitalize(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.name} — MJ Architect`,
    description:
      project.description ??
      `${project.name} — ${article(project.category)} ${project.category.toLowerCase()} project in ${project.location}, ${project.year}.`,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  const facts = [
    { label: "Location", value: project.location },
    { label: "Year", value: project.year },
    { label: "Category", value: project.category },
    ...(project.builtUp ? [{ label: "Built-up Area", value: project.builtUp }] : []),
    { label: "Scope", value: project.tags.join(", ") },
  ];

  const bodyParagraphs =
    project.paragraphs ?? [
      `${capitalize(article(project.category))} ${project.category.toLowerCase()} project in ${project.location}, completed in ${project.year}${
        project.builtUp ? ` with a built-up area of ${project.builtUp}` : ""
      }.`,
    ];

  return (
    <>
      <section className="pt-28 pb-24 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Image — 8 cols */}
            <div className="lg:col-span-8">
              <Reveal>
                <ProjectCarousel
                  images={project.images ?? (project.image ? [project.image] : [])}
                  alt={project.name}
                  color={project.color}
                  viewTransitionName={`project-image-${project.slug}`}
                />
              </Reveal>
            </div>

            {/* Content — 4 cols */}
            <div className="lg:col-span-4">
              <Reveal delay={0.1}>
                <p
                  className="text-[12px] uppercase mb-4"
                  style={{ color: "var(--foreground)", letterSpacing: "0.05em" }}
                >
                  {project.category} — {project.location}
                </p>
                <h1
                  className="font-display uppercase mb-12"
                  style={{
                    color: "var(--foreground)",
                    fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.05,
                  }}
                >
                  {project.name}
                </h1>

                <p
                  className="text-[11px] uppercase mb-4"
                  style={{ color: "var(--muted)", letterSpacing: "0.05em" }}
                >
                  About the Project
                </p>
                <div className="space-y-4 mb-12">
                  {bodyParagraphs.map((p, i) => (
                    <p
                      key={i}
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--muted)" }}
                    >
                      {p}
                    </p>
                  ))}
                </div>

                <p
                  className="text-[11px] uppercase mb-2"
                  style={{ color: "var(--muted)", letterSpacing: "0.05em" }}
                >
                  Project Details
                </p>
                <div
                  className="grid grid-cols-2 gap-x-8"
                  style={{ borderTop: "1px solid var(--border)" }}
                >
                  {facts.map((item) => (
                    <div
                      key={item.label}
                      className={`py-4 ${item.label === "Scope" ? "col-span-2" : ""}`}
                      style={{ borderBottom: "1px solid var(--border)" }}
                    >
                      <p
                        className="text-sm font-display mb-1"
                        style={{ color: "var(--foreground)" }}
                      >
                        {item.label}
                      </p>
                      <p className="text-sm" style={{ color: "var(--muted)" }}>
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Reveal>
        <Link
          href={`/work/${next.slug}`}
          className="group block py-16 md:py-24 px-6 md:px-12 transition-colors duration-300"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div className="max-w-[1600px] mx-auto">
            <p
              className="text-[12px] uppercase mb-4"
              style={{ color: "var(--foreground)", letterSpacing: "0.05em" }}
            >
              Next Project
            </p>
            <h2
              className="font-display uppercase transition-transform duration-500 group-hover:translate-x-2"
              style={{
                color: "var(--foreground)",
                fontSize: "clamp(2rem, 5vw, 4rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
            >
              {next.name} →
            </h2>
          </div>
        </Link>
      </Reveal>
    </>
  );
}
