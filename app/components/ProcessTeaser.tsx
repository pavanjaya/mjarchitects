import Reveal from "./Reveal";
import PillCTA from "./PillCTA";
import TextReveal from "./motion/TextReveal";

const steps = [
  "Discovery",
  "Concept",
  "Design Development",
  "Documentation",
  "Construction",
  "Handover",
];

export default function ProcessTeaser() {
  return (
    <section id="process" className="py-24 px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
          {/* Left */}
          <Reveal>
            <p
              className="text-[12px] uppercase mb-6"
              style={{ color: "var(--foreground)", letterSpacing: "0.05em" }}
            >
              (Our Process)
            </p>

            <div
              className="w-full aspect-[5/4] mb-8"
              style={{ background: "#c9c4b6" }}
            />

            <div>
              {steps.map((step, i) => (
                <div
                  key={step}
                  className="flex items-baseline gap-4 py-2"
                  style={{ borderBottom: "1px solid var(--border)" }}
                >
                  <span
                    className="text-[12px] font-display shrink-0"
                    style={{ color: "var(--muted)" }}
                  >
                    ({String(i + 1).padStart(2, "0")})
                  </span>
                  <span
                    className="text-sm"
                    style={{ color: "var(--foreground)" }}
                  >
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right */}
          <Reveal delay={0.05}>
            <p
              className="font-serif mb-10"
              style={{
                color: "var(--foreground)",
                fontSize: "clamp(1.54rem, 3.08vw, 2.64rem)",
                letterSpacing: "-0.01em",
                lineHeight: 1.2,
                fontWeight: 400,
              }}
            >
              <TextReveal
                lines={[
                  "Our six-stage process brings clarity, rigour,",
                  "and intent to every project, from concept",
                  "to completion.",
                ]}
              />
            </p>
            <p
              className="font-serif mb-12"
              style={{
                color: "var(--foreground)",
                fontSize: "clamp(1.54rem, 3.08vw, 2.64rem)",
                letterSpacing: "-0.01em",
                lineHeight: 1.2,
                fontWeight: 400,
              }}
            >
              <TextReveal
                delay={0.15}
                lines={[
                  "Each stage builds upon the last, allowing",
                  "ideas to evolve through research, dialogue,",
                  "exploration, and refinement, while remaining",
                  "responsive to place, material, structure, and",
                  "use.",
                ]}
              />
            </p>

            <PillCTA href="/process">Get to Know Our Process</PillCTA>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
