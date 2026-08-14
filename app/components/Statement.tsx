import Reveal from "./Reveal";
import PillCTA from "./PillCTA";
import TextReveal from "./motion/TextReveal";

export default function Statement() {
  return (
    <section id="philosophy" className="py-32 md:py-40 px-6 md:px-12" style={{ background: "var(--background)" }}>
      <div className="max-w-[1600px] mx-auto text-center">
        <Reveal>
          <p
            className="text-[12px] uppercase mb-10"
            style={{ color: "var(--foreground)", letterSpacing: "0.05em" }}
          >
            (Our Philosophy)
          </p>
        </Reveal>
        <h2
          className="font-display uppercase mb-16 md:mb-20"
          style={{
            color: "var(--foreground)",
            fontSize: "clamp(2.75rem, 8vw, 7rem)",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            fontWeight: 600,
          }}
        >
          <TextReveal lines={["Sense. Sensibility.", "Space."]} />
        </h2>

        <Reveal delay={0.1}>
          <div className="grid sm:grid-cols-2 gap-8 sm:gap-16 max-w-3xl mx-auto">
            <p
              className="text-sm leading-relaxed text-left"
              style={{ color: "var(--muted)" }}
            >
              Sense gives architecture its order — logic, geometry,
              proportion, structure, and clarity.
            </p>
            <p
              className="text-sm leading-relaxed text-left"
              style={{ color: "var(--muted)" }}
            >
              Sensibility gives it depth — light, material, texture, scale,
              and human experience.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex justify-center pt-16 md:pt-20">
            <PillCTA href="/philosophy">Explore Our Philosophy</PillCTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
