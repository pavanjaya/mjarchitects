import Reveal from "./Reveal";
import PillCTA from "./PillCTA";
import TextReveal from "./motion/TextReveal";

export default function PhilosophyTeaser() {
  return (
    <section
      id="philosophy"
      className="py-24 px-6 md:px-12 text-center"
      style={{ background: "var(--surface)" }}
    >
      <div className="max-w-[1600px] mx-auto">
        <Reveal>
          <p
            className="text-[12px] uppercase mb-10"
            style={{ color: "var(--foreground)", letterSpacing: "0.05em" }}
          >
            (Our Philosophy)
          </p>
          <p
            className="font-display uppercase mb-12 max-w-4xl mx-auto"
            style={{
              color: "var(--foreground)",
              fontSize: "clamp(1.75rem, 4vw, 3.25rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.25,
            }}
          >
            <TextReveal
              lines={[
                "Sense gives direction.",
                "Sensibility gives depth.",
                "Space gives it life.",
              ]}
            />
          </p>
          <PillCTA href="/philosophy">Explore Our Philosophy</PillCTA>
        </Reveal>
      </div>
    </section>
  );
}
