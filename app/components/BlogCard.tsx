"use client";

import { useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import type { Post } from "../lib/blog";
import type { MouseEvent } from "react";
import TransitionLink from "./motion/TransitionLink";

export default function BlogCard({ post, delay = 0 }: { post: Post; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 20, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 150, damping: 20, mass: 0.4 });

  const handleImageMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(((e.clientX - rect.left) / rect.width - 0.5) * 14);
    y.set(((e.clientY - rect.top) / rect.height - 0.5) * 14);
  };

  const handleImageLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="flex flex-col h-full"
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <TransitionLink href={`/blog/${post.slug}`} className="flex flex-col h-full cursor-pointer group">
        {/* Image */}
        <div className="mb-8 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: delay + 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="relative w-full aspect-[16/11] overflow-hidden"
              style={{ background: post.color }}
              onMouseMove={handleImageMove}
              onMouseLeave={handleImageLeave}
            >
              {post.image && (
                <motion.div
                  className="absolute inset-0"
                  style={{ x: springX, y: springY }}
                  initial={{ scale: 1.06 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image src={post.image} alt={post.title} fill className="object-cover" />
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Title */}
        <h3
          className="font-display mb-auto"
          style={{
            color: "var(--foreground)",
            fontSize: "clamp(1.15rem, 1.6vw, 1.375rem)",
            letterSpacing: "-0.01em",
            lineHeight: 1.3,
          }}
        >
          {post.title}
        </h3>

        {/* Meta */}
        <div className="pt-16">
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            {post.readTime}
          </p>
          <p
            className="text-sm mt-1"
            style={{ color: "var(--foreground)" }}
          >
            {post.category}
          </p>
        </div>
      </TransitionLink>
    </motion.div>
  );
}
