"use client";

import { useRouter } from "next/navigation";
import type { ReactNode, MouseEvent } from "react";

type DocumentWithViewTransition = Document & {
  startViewTransition?: (callback: () => void) => void;
};

export default function TransitionLink({
  href,
  children,
  className,
  onMouseEnter,
  onMouseLeave,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const doc = document as DocumentWithViewTransition;
    if (doc.startViewTransition) {
      doc.startViewTransition(() => router.push(href));
    } else {
      router.push(href);
    }
  };

  return (
    <a
      href={href}
      className={className}
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>
  );
}
