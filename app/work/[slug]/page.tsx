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

  return (
    <>
      <section className="pt-40 pb-12 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto">
          <Reveal>
            <Link
              href="/work"
              className="text-[12px] uppercase inline-block mb-10 transition-colors duration-300"
              style={{ color: "var(--muted)", letterSpacing: "0.05em" }}
            >
              ← All Work
            </Link>
            <p
              className="text-[12px] uppercase mb-6"
              style={{ color: "var(--muted)", letterSpacing: "-0.01em" }}
            >
              {project.tags.join(" — ")}
            </p>
            <h1
              className="font-display uppercase mb-8"
              style={{
                color: "var(--foreground)",
                fontSize: "clamp(2.25rem, 6vw, 5rem)",
                letterSpacing: "-0.03em",
                lineHeight: 0.98,
              }}
            >
              {project.name}
            </h1>
            <div className="flex gap-10">
              <p
                className="text-[13px] uppercase"
                style={{ color: "var(--accent)", letterSpacing: "0.05em" }}
              >
                {project.location}
              </p>
              <p
                className="text-[13px] uppercase"
                style={{ color: "var(--muted)", letterSpacing: "0.05em" }}
              >
                {project.year}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-16 md:pb-24">
        <div className="max-w-[1600px] mx-auto">
          <Reveal>
            <ProjectCarousel
              images={project.images ?? (project.image ? [project.image] : [])}
              alt={project.name}
              color={project.color}
              viewTransitionName={`project-image-${project.slug}`}
            />
          </Reveal>
        </div>
      </section>

      <section className="pb-24 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-[2fr_1fr] gap-16">
          <Reveal>
            <div className="max-w-2xl space-y-6">
              {(
                project.paragraphs ?? [
                  `${capitalize(article(project.category))} ${project.category.toLowerCase()} project in ${project.location}, completed in ${project.year}${
                    project.builtUp ? ` with a built-up area of ${project.builtUp}` : ""
                  }.`,
                ]
              ).map((p, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div
              className="grid grid-cols-2 lg:grid-cols-1 gap-8 pt-8"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              {[
                { label: "Location", value: project.location },
                { label: "Year", value: project.year },
                { label: "Category", value: project.category },
                ...(project.builtUp ? [{ label: "Built-up Area", value: project.builtUp }] : []),
                { label: "Scope", value: project.tags.join(", ") },
              ].map((item) => (
                <div key={item.label}>
                  <p
                    className="text-[11px] uppercase mb-2"
                    style={{ color: "var(--accent)", letterSpacing: "0.05em" }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-sm font-display"
                    style={{ color: "var(--foreground)" }}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
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
              style={{ color: "var(--accent)", letterSpacing: "0.05em" }}
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
