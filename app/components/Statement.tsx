import Reveal from "./Reveal";
import PillCTA from "./PillCTA";
import TextReveal from "./motion/TextReveal";

export default function Statement() {
  return (
    <section id="philosophy" className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 md:px-12" style={{ background: "var(--background)" }}>
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
          <p
            className="text-base leading-relaxed max-w-2xl mx-auto"
            style={{ color: "var(--muted)" }}
          >
            Sense gives architecture its order. Sensibility gives it depth.
            Space gives it life. At MJ Architects, we see every project as an
            opportunity to bring these three together — to transform ideas,
            conditions, and possibilities into spaces that are meaningful to
            the people who inhabit them.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex justify-center pt-10 md:pt-12">
            <PillCTA href="/philosophy">Explore Our Philosophy</PillCTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
