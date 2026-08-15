import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

const strong = (children: React.ReactNode) => (
  <strong style={{ color: "var(--foreground)", fontWeight: 500 }}>{children}</strong>
);

export default function Studio() {
  return (
    <section id="studio" className="py-24 px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        <Reveal>
          <p
            className="text-[12px] uppercase mb-8"
            style={{ color: "var(--foreground)", letterSpacing: "0.05em" }}
          >
            About the Studio
          </p>
          <h2
            className="font-display uppercase mb-10"
            style={{
              color: "var(--foreground)",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            Sense. Sensibility. Space.
          </h2>
          <p
            className="font-display mb-16 md:mb-20 max-w-4xl"
            style={{
              color: "var(--foreground)",
              fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
              letterSpacing: "-0.01em",
              lineHeight: 1.3,
            }}
          >
            MJ Architects is an architecture and design practice exploring
            the relationship between people, place, and space.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-24 mb-20 md:mb-28">
          <Reveal>
            <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
              Architecture begins with its conditions — the character of a
              place, the needs of its inhabitants, the qualities of its
              materials, and the forces of climate, culture, and time.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-6 max-w-2xl">
              <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                Our work emerges from the dialogue between{" "}
                {strong("logic and intuition, structure and experience, permanence and change")}.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                Geometry, proportion, and structure establish an underlying
                order. Light, material, texture, scale, and movement give
                that order a human dimension.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                We see space as more than physical enclosure. It is an
                experience shaped by the way we enter, move, gather, pause,
                and inhabit it. A threshold can create anticipation. A
                change in light can alter perception. A carefully
                proportioned room can create a sense of calm.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                This attention to the relationship between{" "}
                {strong("form and experience")} informs every project we
                undertake.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                Rather than treating architecture as an isolated object, we
                consider it within its larger context — its landscape,
                climate, culture, and the life that will unfold within it.
                The intention is not to impose a singular aesthetic, but to
                find an architectural expression that belongs to its place.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                Material plays an equally important role. Its weight,
                texture, tactility, and ability to change with light and
                time become part of the architecture. Details are not
                applied after the idea; they are where the idea is
                resolved.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                For us, architecture is ultimately about relationships —
                between{" "}
                {strong("inside and outside, solid and void, light and shadow, structure and material, permanence and change")}.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--foreground)" }}
              >
                The measure of a space lies not only in how it is seen, but
                in how it is inhabited.
              </p>

              <Link
                href="/philosophy"
                className="text-[13px] uppercase pb-1 inline-block transition-colors duration-300"
                style={{
                  color: "var(--foreground)",
                  letterSpacing: "-0.01em",
                  borderBottom: "1px solid var(--foreground)",
                }}
              >
                Read Our Philosophy →
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div
            className="pt-16 md:pt-20 mb-20 md:mb-28"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <p
              className="text-[12px] uppercase mb-8"
              style={{ color: "var(--foreground)", letterSpacing: "0.05em" }}
            >
              (Principal Architect)
            </p>
            <h2
              className="font-display uppercase mb-10 max-w-3xl"
              style={{
                color: "var(--foreground)",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Architect Mahesh Jangid
            </h2>

            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-24">
              <div>
                <div
                  className="relative w-full aspect-[4/5] mb-8"
                  style={{ background: "var(--surface)" }}
                >
                  <Image
                    src="/mahesh-jangid.png"
                    alt="Mahesh Jangid, Principal Architect at MJ Architects"
                    fill
                    className="object-cover"
                  />
                </div>
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: "var(--foreground)" }}
                >
                  {strong(
                    "Mahesh Jangid is an architect and Principal Architect at MJ Architects"
                  )}
                  , with a practice grounded in the relationship between space,
                  structure, material, and human experience.
                </p>
              </div>

              <div className="space-y-6 max-w-2xl">
                <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                  He studied architecture at{" "}
                  {strong("N.D.M.V.P. Samaj's College of Architecture, Nashik")}
                  , completing his Bachelor of Architecture in 2005. His early
                  professional practice with {strong("Aijaz Hakim Architect")}{" "}
                  and {strong("STUP Consultants")} in Pune shaped a rigorous
                  understanding of architectural design, technical
                  resolution, and the relationship between an idea and its
                  built expression.
                </p>
                <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                  Since 2019, Mahesh has led the architectural practice at{" "}
                  {strong("MJ Architects")}, where his work continues to
                  explore the essential qualities of architecture —{" "}
                  {strong("proportion, geometry, light, material, structure, and scale")}
                  . Rather than pursuing a predetermined aesthetic, he
                  approaches each project through its particular conditions,
                  allowing the architecture to emerge from its context,
                  purpose, and experience.
                </p>
                <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                  His approach is defined by{" "}
                  {strong("clarity, restraint, and attention to detail")}.
                  Structure provides order; material and light introduce
                  depth; and human experience gives space its meaning. This
                  balance between precision and sensibility forms the
                  foundation of his work and the evolving architectural
                  language of MJ Architects.
                </p>
                <p
                  className="font-serif italic text-lg"
                  style={{ color: "var(--foreground)" }}
                >
                  Sense. Sensibility. Space.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div
            className="pt-16 md:pt-20 mb-20 md:mb-28 text-center"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <p
              className="font-display uppercase"
              style={{
                color: "var(--foreground)",
                fontSize: "clamp(1.5rem, 3.5vw, 3rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.3,
              }}
            >
              Sense gives direction.
              <br />
              Sensibility gives depth.
              <br />
              Space gives it life.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            {[
              { label: "Principal Architect", value: "Mahesh Jangid" },
              { label: "Studio Founded", value: "2008, Mumbai" },
              { label: "Team Size", value: "42 Architects" },
              { label: "Active Projects", value: "18 Worldwide" },
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
  );
}
