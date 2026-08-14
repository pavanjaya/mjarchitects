import Reveal from "./Reveal";
import PillCTA from "./PillCTA";
import BlogCard from "./BlogCard";
import { posts } from "../lib/blog";

export default function Blog({ limit }: { limit?: number }) {
  const shown = limit ? posts.slice(0, limit) : posts;

  return (
    <section id="journal" className="py-24 px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <p
                className="text-[12px] uppercase mb-8"
                style={{ color: "var(--foreground)", letterSpacing: "0.05em" }}
              >
                Journal
              </p>
              <h2
                className="font-display uppercase"
                style={{
                  color: "var(--foreground)",
                  fontSize: "clamp(2rem, 4vw, 3.25rem)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                }}
              >
                Notes From the Studio
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-10 gap-y-16">
          {shown.map((post, i) => (
            <BlogCard key={post.slug} post={post} delay={(i % 3) * 0.05} />
          ))}
        </div>

        {limit && (
          <Reveal delay={0.15}>
            <div className="flex justify-center pt-20">
              <PillCTA href="/blog">View All Insights</PillCTA>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
