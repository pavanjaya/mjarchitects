import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "../../components/Reveal";
import { posts, getPostBySlug } from "../../lib/blog";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — MJ Architect`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const index = posts.findIndex((p) => p.slug === slug);
  const next = posts[(index + 1) % posts.length];

  return (
    <>
      <section className="pt-40 pb-16 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto">
          <Reveal>
            <Link
              href="/blog"
              className="text-[12px] uppercase inline-block mb-10 transition-colors duration-300"
              style={{ color: "var(--muted)", letterSpacing: "0.05em" }}
            >
              ← Journal
            </Link>
            <p
              className="text-[12px] uppercase mb-6"
              style={{ color: "var(--muted)", letterSpacing: "0.05em" }}
            >
              {post.category} — {post.date} — {post.readTime}
            </p>
            <h1
              className="font-display max-w-4xl"
              style={{
                color: "var(--foreground)",
                fontSize: "clamp(2rem, 5vw, 3.75rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
            >
              {post.title}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto">
          <Reveal>
            <div className="max-w-2xl space-y-6" style={{ borderTop: "1px solid var(--border)", paddingTop: "3rem" }}>
              {post.paragraphs.map((p, i) => (
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
        </div>
      </section>

      <Reveal>
        <Link
          href={`/blog/${next.slug}`}
          className="group block py-16 md:py-24 px-6 md:px-12 transition-colors duration-300"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div className="max-w-[1600px] mx-auto">
            <p
              className="text-[12px] uppercase mb-4"
              style={{ color: "var(--accent)", letterSpacing: "0.05em" }}
            >
              Next
            </p>
            <h2
              className="font-display transition-transform duration-500 group-hover:translate-x-2"
              style={{
                color: "var(--foreground)",
                fontSize: "clamp(1.75rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              {next.title} →
            </h2>
          </div>
        </Link>
      </Reveal>
    </>
  );
}
