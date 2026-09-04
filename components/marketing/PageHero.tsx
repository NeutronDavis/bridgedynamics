"use client";
import { useEffect, useRef, useState } from "react";
export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [hasTransitioned, setHasTransitioned] = useState(false);
  useEffect(() => {
    if (!titleRef.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        setHasTransitioned(true);
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section
      className={`page-hero ${hasTransitioned ? "page-hero--loaded" : ""}`}
    >
      <div className="container page-hero__content">
        <p className="eyebrow">{eyebrow}</p>
        <h1 ref={titleRef}>{title}</h1>
        <p className="lead">{description}</p>
      </div>
    </section>
  );
}
