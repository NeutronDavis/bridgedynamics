"use client";

import type { AnchorHTMLAttributes } from "react";
import { usePathname } from "next/navigation";

export function StaticLink({ href, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  const pathname = usePathname();
  const isActive = href !== "/" ? pathname.startsWith(href) : pathname === "/";
  return <a href={href} aria-current={isActive ? "page" : undefined} {...props} />;
}
