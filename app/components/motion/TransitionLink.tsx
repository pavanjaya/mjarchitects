"use client";

import { usePathname, useRouter } from "next/navigation";
import type { ReactNode, MouseEvent, CSSProperties } from "react";

type DocumentWithViewTransition = Document & {
  startViewTransition?: (callback: () => void) => void;
};

export default function TransitionLink({
  href,
  children,
  className,
  style,
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
  onClick,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  onMouseEnter?: (e: MouseEvent<HTMLAnchorElement>) => void;
  onMouseLeave?: (e: MouseEvent<HTMLAnchorElement>) => void;
  onMouseMove?: (e: MouseEvent<HTMLAnchorElement>) => void;
  onClick?: () => void;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick?.();

    // Already on this route (or its base) — nothing to transition to.
    if (pathname === href) return;

    const doc = document as DocumentWithViewTransition;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (doc.startViewTransition && !reduceMotion) {
      doc.startViewTransition(() => router.push(href));
    } else {
      router.push(href);
    }
  };

  return (
    <a
      href={href}
      className={className}
      style={style}
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
    >
      {children}
    </a>
  );
}
