"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function RotatingMonogram() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          scrub: 1,
          pin: pinRef.current,
          trigger: pinRef.current,
          start: "50% 50%",
          endTrigger: wrapRef.current,
          end: "bottom 50%",
        },
      });

      tl.to(svgRef.current, {
        rotateZ: 900,
      });
    });

    const raf = requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      cancelAnimationFrame(raf);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={wrapRef} className="relative" style={{ minHeight: "700px" }}>
      <div
        ref={pinRef}
        className="h-64 md:h-80 flex items-center justify-center"
      >
        <svg
          ref={svgRef}
          viewBox="0 0 420 241"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ color: "var(--foreground)" }}
          className="w-32 h-auto md:w-44"
        >
          <path d="M1.04986e-05 4.19629e-05L1.0485e-05 240.066L59.9232 240.066L59.9232 60.0327L119.879 60.0327L119.879 240.066L179.802 240.066L179.802 60.0005L239.757 60.0005L239.757 4.19494e-05L1.04986e-05 4.19629e-05Z" fill="currentColor" />
          <path d="M299.707 60.0327L299.707 4.19629e-05L419.585 4.19561e-05L419.585 240.099L299.675 240.099L299.675 180.066L359.662 180.066L359.662 60.0327L299.707 60.0327Z" fill="currentColor" />
          <rect x="239.743" y="90.0301" width="59.9232" height="90.0329" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}
