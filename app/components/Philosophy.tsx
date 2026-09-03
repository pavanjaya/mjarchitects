"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Reveal from "./Reveal";

const themes = [
  {
    num: "01",
    title: "Architecture Begins With Sense",
    image: "/philosophy/01-sense.jpg",
    body: (
      <>
        <p className="mb-5">
          For us, architecture is first an act of observation. Every site
          carries its own conditions — its climate, orientation, landscape,
          history, materiality, neighbourhood, and culture. Every project
          carries another layer of conditions: its purpose, its people, its
          aspirations, and its constraints.
        </p>
        <p className="mb-5">
          We believe these conditions are not limitations to overcome, but
          opportunities to discover a stronger architectural idea. Geometry
          gives us a language of order. Grid gives us a framework. Proportion
          gives us balance. Structure gives us clarity.
        </p>
        <p>
          But architecture cannot exist through rationality alone. It must
          also respond to the things that cannot always be measured — the
          quality of light, the warmth of a material, the intimacy of a
          threshold, the scale of a room, the silence between spaces. This is
          where sensibility enters.
        </p>
      </>
    ),
  },
  {
    num: "02",
    title: "Sensibility in Architecture",
    image: "/philosophy/02-sensibility.jpg",
    body: (
      <>
        <p className="mb-5">
          We believe architecture should be felt as much as it is
          understood. A space can be technically resolved yet remain
          emotionally distant. Conversely, a space can be expressive yet
          lack clarity. Our pursuit lies somewhere between the two.
        </p>
        <p>
          We work with light, material, proportion, texture, shadow, scale,
          and movement to create environments that reveal themselves
          gradually — morning light entering a room, a change in texture
          beneath the hand, the transition from one space to another, a
          framed view of the landscape. These seemingly small experiences
          become the architecture of everyday life.
        </p>
      </>
    ),
  },
  {
    num: "03",
    title: "Space as Experience",
    image: "/philosophy/03-space.jpg",
    body: (
      <>
        <p className="mb-5">
          We do not see space as an empty volume waiting to be filled.{" "}
          <strong style={{ color: "var(--foreground)", fontWeight: 500 }}>
            Space has character.
          </strong>{" "}
          It can compress and release. It can connect and separate. It can
          invite movement or encourage pause. It can create intimacy,
          openness, silence, or connection.
        </p>
        <p>
          Our work begins not only with what should be built, but with a
          deeper question — how should this space be experienced? The
          resulting architecture is not simply a collection of rooms or
          objects. It is a sequence of experiences, connected through
          proportion, material, light, and human movement.
        </p>
      </>
    ),
  },
  {
    num: "04",
    title: "Between Structure and Life",
    image: "/philosophy/04-structure.jpg",
    body: (
      <>
        <p className="mb-5">
          There is a certain discipline in every well-resolved space — a
          considered grid, a measured proportion, a structural logic, a
          material palette that belongs to its context. These elements
          create the underlying order of architecture.
        </p>
        <p>
          But once people inhabit a space, life introduces another
          layer — unpredictable, personal, constantly changing. We believe
          good architecture allows for this: enough structure to create
          clarity, yet enough openness for people to make a space their
          own.{" "}
          <strong style={{ color: "var(--foreground)", fontWeight: 500 }}>
            Architecture should support life, not compete with it.
          </strong>
        </p>
      </>
    ),
  },
  {
    num: "05",
    title: "Material & Time",
    image: "/philosophy/05-material.jpg",
    body: (
      <>
        <p className="mb-5">
          We approach material not simply as a surface or finish, but as
          part of the architectural language. Stone, concrete, wood, metal,
          brick, glass, and natural textures each carry their own weight,
          temperature, tactility, and memory.
        </p>
        <p>
          A successful space should have the ability to become richer with
          time — to develop character through occupation, weather, memory,
          and everyday life. For us, permanence is not about resisting
          change. It is about creating something with enough clarity and
          depth to remain relevant as everything around it evolves.
        </p>
      </>
    ),
  },
  {
    num: "06",
    title: "Context & Belonging",
    image: "/philosophy/06-context.jpg",
    body: (
      <>
        <p className="mb-5">
          Every building becomes part of a larger landscape — physical,
          cultural, social, and environmental. We approach context not as a
          backdrop, but as an active participant in the design process. The
          climate may determine orientation. The landscape may shape the
          threshold. Local materials may inform its expression.
        </p>
        <p>
          The aim is not to imitate what already exists, but to understand
          it deeply enough to create something that{" "}
          <strong style={{ color: "var(--foreground)", fontWeight: 500 }}>
            belongs without disappearing.
          </strong>
        </p>
      </>
    ),
  },
  {
    num: "07",
    title: "Our Approach",
    image: "/philosophy/07-approach.jpg",
    body: (
      <>
        <p className="mb-5">
          Every project begins with questions rather than predetermined
          answers. What does this place ask of us? Who will inhabit it?
          What should be preserved, what can be transformed, and where
          should the architecture remain quiet — and where should it speak?
        </p>
        <p>
          Through research, dialogue, iteration, and making, we gradually
          develop an architectural response. From the first line to the
          final detail, we look for coherence between idea and execution —
          because the smallest detail should be capable of belonging to the
          larger idea.
        </p>
      </>
    ),
  },
  {
    num: "08",
    title: "A Practice of Balance",
    image: "/philosophy/08-balance.jpg",
    body: (
      <>
        <p className="mb-5">
          At the heart of MJ Architects is a pursuit of balance — between
          sense and sensibility, structure and experience, form and
          function, material and light, individual expression and
          contextual belonging.
        </p>
        <p>
          We are not interested in architecture that exists only as an
          image. We are interested in architecture that can be inhabited,
          remembered, and experienced — architecture that has clarity
          without being cold, character without being loud, and that
          responds to its time while having the potential to endure beyond
          it.
        </p>
      </>
    ),
  },
];

function ThemeSection({
  theme,
  imageFirst,
}: {
  theme: (typeof themes)[number];
  imageFirst: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center"
    >
      <div
        className={`lg:col-span-6 ${imageFirst ? "lg:order-1" : "lg:order-2"}`}
      >
        <div
          className="relative w-full aspect-[4/5] overflow-hidden"
          style={{ background: "var(--surface)" }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.08, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={theme.image}
              alt={theme.title}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        className={`lg:col-span-6 ${imageFirst ? "lg:order-2" : "lg:order-1"}`}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <span
          className="block font-display mb-6"
          style={{
            color: "var(--border)",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          {theme.num}
        </span>
        <h2
          className="font-display uppercase mb-6 max-w-lg"
          style={{
            color: "var(--foreground)",
            fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
            letterSpacing: "-0.01em",
            lineHeight: 1.15,
          }}
        >
          {theme.title}
        </h2>
        <div
          className="text-base leading-relaxed max-w-lg"
          style={{ color: "var(--muted)" }}
        >
          {theme.body}
        </div>
      </motion.div>
    </div>
  );
}

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="py-28 md:py-36 px-6 md:px-12"
      style={{ background: "var(--background)" }}
    >
      <div className="max-w-[1600px] mx-auto">
        <Reveal>
          <div className="max-w-3xl mb-28 md:mb-36">
            <p
              className="text-[12px] uppercase mb-8"
              style={{ color: "var(--foreground)", letterSpacing: "0.05em" }}
            >
              Our Philosophy
            </p>
            <h1
              className="font-display uppercase mb-10"
              style={{
                color: "var(--foreground)",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              Understanding a place before intervening in it. Understanding
              people before designing for them. Understanding material
              before giving it form.
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
              And understanding that space is not merely what surrounds us,
              but what shapes how we live, move, gather, pause, and
              experience.
            </p>
          </div>
        </Reveal>

        <div className="space-y-28 md:space-y-40">
          {themes.map((theme, i) => (
            <ThemeSection key={theme.num} theme={theme} imageFirst={i % 2 === 0} />
          ))}
        </div>

        <Reveal>
          <div
            className="pt-28 md:pt-36 mt-28 md:mt-36 text-center"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <p
              className="font-display uppercase mb-10"
              style={{
                color: "var(--foreground)",
                fontSize: "clamp(1.75rem, 4vw, 3.5rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Sense → Sensibility → Space
            </p>
            <p
              className="text-base leading-relaxed max-w-2xl mx-auto mb-6"
              style={{ color: "var(--muted)" }}
            >
              Sense gives architecture its order. Sensibility gives it
              depth. Space gives it life. At MJ Architects, we see every
              project as an opportunity to bring these three together — to
              transform ideas, conditions, and possibilities into spaces
              that are meaningful to the people who inhabit them.
            </p>
            <p
              className="text-base leading-relaxed max-w-2xl mx-auto"
              style={{ color: "var(--foreground)" }}
            >
              Because ultimately, architecture is not only about making
              places. It is about shaping the experience of being in them.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
