"use client";

import { useEffect, useRef } from "react";

export function PlatformIllustration() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Normalise cursor position relative to window centre (-0.5 to 0.5)
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      el.style.setProperty("--mouse-x", String(x));
      el.style.setProperty("--mouse-y", String(y));
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="hero-image text-center lg:text-end"
      role="img"
      aria-label="Integrated Bridge Dynamics suites sharing one enterprise operating platform"
    >
      <img
        src="/images/hero-image.svg"
        alt="Bridge Dynamics Enterprise Business Operating System Interface"
        className="w-full h-auto max-w-full mx-auto"
      />
    </div>
  );
}
