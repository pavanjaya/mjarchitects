"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectCarousel({
  images,
  alt,
  color,
  viewTransitionName,
}: {
  images: string[];
  alt: string;
  color: string;
  viewTransitionName?: string;
}) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div>
      <div
        className="relative w-full aspect-[16/9] overflow-hidden"
        style={{
          background: color,
          ...(viewTransitionName ? { viewTransitionName } : {}),
        } as React.CSSProperties}
      >
        {images.length > 0 && (
          <Image
            src={images[index]}
            alt={`${alt} — image ${index + 1} of ${images.length}`}
            fill
            priority
            className="object-cover"
          />
        )}

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 transition-colors duration-300"
              style={{ background: "rgba(255,255,255,0.9)", color: "var(--foreground)" }}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 transition-colors duration-300"
              style={{ background: "rgba(255,255,255,0.9)", color: "var(--foreground)" }}
            >
              <ChevronRight size={18} />
            </button>
            <div
              className="absolute bottom-4 right-4 text-[11px] uppercase px-3 py-1"
              style={{ background: "rgba(0,0,0,0.55)", color: "#fff", letterSpacing: "0.05em" }}
            >
              {index + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex gap-3 mt-4 overflow-x-auto pb-1">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setIndex(i)}
              className="relative w-20 h-14 shrink-0 overflow-hidden transition-opacity duration-300"
              style={{ opacity: i === index ? 1 : 0.5 }}
            >
              <Image src={src} alt="" fill className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
