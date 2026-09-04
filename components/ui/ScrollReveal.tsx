"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Add js-enabled class to the root HTML element to activate transition rules
    document.documentElement.classList.add("js-enabled");

    // Automatically discover all elements with the 'section' class
    const sections = document.querySelectorAll(".section");

    // Add 'reveal' class to each section
    sections.forEach((sec) => {
      sec.classList.add("reveal");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            // Remove 'active' when it scrolls out of the viewport
            entry.target.classList.remove("active");
          }
        });
      },
      {
        threshold: 0.05, // trigger when 5% is visible
        rootMargin: "0px 0px -40px 0px", // offset trigger point slightly
      }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
      observer.disconnect();
    };
  }, [pathname]); // re-run when navigation occurs

  return null;
}
