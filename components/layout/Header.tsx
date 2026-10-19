import { StaticLink as Link } from "@/components/ui/StaticLink";
import { siteConfig } from "@/content/site";
import { MobileNavigation } from "./MobileNavigation";

export function BrandMark({ className = "brand-icon" }: { className?: string }) {
  return (
    <img
      src="/images/single.svg"
      alt=""
      aria-hidden="true"
      className={className}
      width={40}
      height={40}
    />
  );
}

export const BrandLogo = BrandMark;

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Bridge Dynamics home">
          <BrandMark />
          <span className="brand-text">Bridge<strong>Dynamics</strong></span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {siteConfig.navigation.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
          <Link className="button button--primary button--small" href="/request-demo">
            Request a Demo
          </Link>
        </nav>
        <MobileNavigation />
      </div>
    </header>
  );
}
