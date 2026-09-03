"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AUTO_SLIDE_MS = 5000;

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
  const [paused, setPaused] = useState(false);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  const nextRef = useRef(next);
  nextRef.current = next;

  useEffect(() => {
    if (images.length <= 1 || paused) return;
    const id = setInterval(() => nextRef.current(), AUTO_SLIDE_MS);
    return () => clearInterval(id);
  }, [images.length, paused]);

  return (
    <div>
      <div
        className="relative w-full aspect-[4/3] overflow-hidden"
        style={{
          background: color,
          ...(viewTransitionName ? { viewTransitionName } : {}),
        } as React.CSSProperties}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {images.length > 0 && (
          <AnimatePresence initial={false} mode="sync">
            <motion.div
              key={images[index]}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={images[index]}
                alt={`${alt} — image ${index + 1} of ${images.length}`}
                fill
                priority
                className="object-contain"
              />
            </motion.div>
          </AnimatePresence>
        )}

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-300"
              style={{ background: "rgba(255,255,255,0.9)", color: "var(--foreground)" }}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-300"
              style={{ background: "rgba(255,255,255,0.9)", color: "var(--foreground)" }}
            >
              <ChevronRight size={18} />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to image ${i + 1}`}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === index ? 8 : 6,
                    height: i === index ? 8 : 6,
                    background: i === index ? "#fff" : "rgba(255,255,255,0.5)",
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
