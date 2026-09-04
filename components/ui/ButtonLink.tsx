import { StaticLink as Link } from "./StaticLink";
export function ButtonLink({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "secondary" | "light" }) {
  return <Link className={`button button--${variant}`} href={href}>{children}<IconArrow /></Link>;
}
function IconArrow() { return <span aria-hidden="true">→</span>; }
