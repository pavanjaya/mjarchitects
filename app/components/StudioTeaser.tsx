import Reveal from "./Reveal";
import PillCTA from "./PillCTA";
import TextReveal from "./motion/TextReveal";

export default function StudioTeaser() {
  return (
    <section id="studio" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        <h2
          className="font-serif mb-20 md:mb-28"
          style={{
            color: "var(--foreground)",
            fontSize: "clamp(2rem, 5vw, 4.25rem)",
            letterSpacing: "-0.01em",
            lineHeight: 1.1,
            maxWidth: "1400px",
          }}
        >
          <TextReveal
            lines={[
              "MJ Architects is an architecture and design",
              "practice exploring the relationship between",
              "people, place, and space.",
            ]}
          />
        </h2>

        <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
          <Reveal>
            <p
              className="font-display uppercase"
              style={{
                color: "var(--foreground)",
                fontSize: "1.125rem",
                lineHeight: 1.4,
                letterSpacing: "0.02em",
              }}
            >
              (Studio)
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <p
              className="font-display mb-12"
              style={{
                color: "var(--foreground)",
                fontSize: "clamp(1.25rem, 2.25vw, 1.75rem)",
                lineHeight: 1.6,
                maxWidth: "56rem",
              }}
            >
              Architecture begins with its conditions — the character of a
              place, the needs of its inhabitants, the qualities of its
              materials, and the forces of climate, culture, and time. Our
              work emerges from the dialogue between logic and intuition,
              structure and experience, permanence and change — geometry
              and proportion establishing order, light and material giving
              it a human dimension.
            </p>

            <PillCTA href="/studio">Read Our Story</PillCTA>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
