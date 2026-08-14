"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Post } from "../lib/blog";

export default function BlogCard({ post, delay = 0 }: { post: Post; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col h-full"
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/blog/${post.slug}`} className="flex flex-col h-full cursor-pointer group">
        {/* Image */}
        <div className="mb-8 overflow-hidden">
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={inView ? { clipPath: "inset(0 0 0% 0)" } : {}}
            transition={{ duration: 0.9, delay: delay + 0.1, ease: [0.65, 0, 0.35, 1] }}
          >
            <div
              className="relative w-full aspect-[16/11] overflow-hidden transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              style={{ background: post.color }}
            >
              {post.image && (
                <Image src={post.image} alt={post.title} fill className="object-cover" />
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
      </Link>
    </motion.div>
  );
}
