import type { Metadata } from "next";
import { StaticLink as Link } from "@/components/ui/StaticLink";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FinalCta } from "@/components/marketing/FinalCta";
import { PlatformFlow } from "@/components/marketing/PlatformFlow";
import { PlatformIllustration } from "@/components/marketing/PlatformIllustration";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { SuiteCard } from "@/components/marketing/SuiteCard";
import { createMetadata } from "@/lib/seo/metadata";
import { industries, suites } from "@/content/site";

const industryIcons: Record<string, React.ReactNode> = {
  "Oil & Gas Services": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2 C12 2 5 10 5 15 a7 7 0 0 0 14 0 C19 10 12 2 12 2 Z"/>
    </svg>
  ),
  "Engineering & Construction": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {/* Hard hat dome */}
      <path d="M4 15 C4 9 8 4 12 4 C16 4 20 9 20 15"/>
      {/* Brim */}
      <path d="M2 15 L22 15"/>
      {/* Hat band */}
      <path d="M4 15 L4 17 Q4 18 5 18 L19 18 Q20 18 20 17 L20 15"/>
      {/* Centre ridge */}
      <line x1="12" y1="4" x2="12" y2="10"/>
    </svg>
  ),
  "Professional Services": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {/* Head */}
      <circle cx="12" cy="6" r="3"/>
      {/* Suit jacket body */}
      <path d="M6 22 C6 16 8 13 12 13 C16 13 18 16 18 22"/>
      {/* Left lapel */}
      <path d="M9 13 L10.5 17 L12 15"/>
      {/* Right lapel */}
      <path d="M15 13 L13.5 17 L12 15"/>
      {/* Tie */}
      <path d="M12 15 L11.25 19 L12 20.5 L12.75 19 Z"/>
    </svg>
  ),
  "Public Sector": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="3" y1="22" x2="21" y2="22"/>
      <line x1="6" y1="18" x2="6" y2="11"/>
      <line x1="10" y1="18" x2="10" y2="11"/>
      <line x1="14" y1="18" x2="14" y2="11"/>
      <line x1="18" y1="18" x2="18" y2="11"/>
      <polygon points="12 2 20 7 4 7"/>
    </svg>
  ),
  "Facility Management": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
      <path d="M4.93 4.93a10 10 0 0 0 0 14.14"/>
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
      <path d="M8.46 8.46a5 5 0 0 0 0 7.07"/>
    </svg>
  ),
};

export const metadata: Metadata = createMetadata("Enterprise Business Operating System", "One platform. Integrated suites. One source of truth for the modern enterprise.");
const platformPrinciples = [
  ["One Platform", "A common enterprise foundation connects business capabilities without creating another fragmented technology estate."],
  ["One Identity", "People use one governed organisational identity with access aligned to their responsibilities."],
  ["One Workflow Engine", "Approvals, business rules and notifications operate consistently across suites and departments."],
  ["One Enterprise", "Shared content, collaboration and reporting create one dependable operational view."],
];
const workplace = ["Enterprise messaging", "Contextual conversations", "Message boards", "Enterprise notifications", "Document collaboration", "Workflow discussions"];
const contentCapabilities = ["Document libraries", "Version control", "Secure sharing", "Metadata and search", "Retention and compliance", "Business record attachments"];
const comparison = [
  ["Traditional enterprise software", ["Multiple applications", "Multiple logins", "Data silos", "Complex integrations", "Disconnected teams", "Higher operational complexity"]],
  ["Bridge Dynamics", ["One platform", "Integrated suites", "One identity", "Shared workflows", "Shared documents", "Shared collaboration", "Shared reporting", "Lower operational complexity"]],
] as const;

export default function Home() {
  return <>
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1>Run Your Entire Enterprise From One Intelligent Platform</h1><p className="lead">Bridge Dynamics unifies people, operations, finance, collaboration, enterprise content, workflows and analytics into one secure platform designed for modern organisations.</p>
          <div className="actions">
            <ButtonLink href="/request-demo">Request a Demonstration</ButtonLink>
            <ButtonLink href="/platform" variant="secondary">Explore the Platform</ButtonLink>
          </div>
        </div>
        <PlatformIllustration />
      </div>
    </section>
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="One platform" title="The operating foundation for one connected enterprise">
          Bridge Dynamics replaces fragmented business applications with a unified platform where identity, workflow, content, collaboration and reporting work together.
        </SectionHeading>
        <div className="principle-grid">
          {platformPrinciples.map(([title, text], index) =>
            <article className="platform-principle" key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          )}
        </div>
      </div>
    </section>
    <section className="section section--soft">
      <div className="container">
        <SectionHeading eyebrow="Integrated product suites" title="Enterprise capability, connected by design">
          Each suite serves a distinct area of the organisation while sharing the same identity, workflows, content, collaboration and source of enterprise data.
        </SectionHeading>
        <div className="suite-grid suite-grid--integrated">
          {suites.slice(0, 4).map((suite, index) => <SuiteCard key={suite.name} suite={suite} index={index} />)}
        </div>
        <div className="section-cta">
          <ButtonLink href="/solutions" variant="secondary">
            See all product suites
          </ButtonLink>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container split split--flow">
        <div>
          <SectionHeading eyebrow="How everything works together" title="A shared platform beneath every business process">
            Every suite uses the same enterprise services. Information moves through controlled workflows, stays connected to its business context and becomes available for consistent reporting.
          </SectionHeading>
          <ButtonLink href="/platform" variant="secondary">Explore platform services</ButtonLink>
        </div>
        <PlatformFlow />
      </div>
    </section>
    <section className="section section--brand">
      <div className="container split">
        <div>
          <p className="eyebrow eyebrow--light">Work happens here</p>
          <h2>Collaboration belongs in the context of enterprise work</h2>
          <p className="lead">The Workplace Suite brings communication into the processes, records and decisions people are already working on—reducing the need to switch between disconnected applications.</p>
          <ButtonLink href="/solutions" variant="light">Explore the Workplace Suite</ButtonLink>
        </div>
        <ul className="capability-panel">
          {workplace.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </section>
    <section className="section">
      <div className="container split">
        <div className="content-visual" aria-hidden="true">
          <span>Enterprise Content</span>
          <div>Contract / Version 04</div>
          <div>Project record / Approved</div>
          <div>Policy / Controlled</div>
        </div>
        <div>
          <p className="eyebrow">Enterprise content management</p>
          <h2>Business content with structure, context and control</h2>
          <p className="lead">Bridge Dynamics treats documents as governed enterprise records connected to customers, projects, people, workflows and decisions—not as files held in isolated storage.</p>
          <ul className="check-list check-list--columns">{contentCapabilities.map(item => <li key={item}>{item}</li>)}</ul>
        </div>
      </div>
    </section>
    <section className="section section--soft">
      <div className="container">
        <SectionHeading eyebrow="Why Bridge Dynamics" title="Reduce the operational cost of fragmentation">
          A unified operating system replaces duplicated identity, integration and reporting effort with shared enterprise services.
        </SectionHeading>
        <div className="comparison-grid">
          {comparison.map(([title, items], index) =>
            <article className={`comparison-panel ${index === 1 ? "comparison-panel--brand" : ""}`} key={title}>
              <p className="comparison-panel__label">{index === 0 ? "Fragmented model" : "Unified model"}</p>
              <h3>{title}</h3>
              <ul>{items.map(item => <li key={item}>{item}</li>)}</ul></article>)}
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Industry relevance" title="A common enterprise foundation, configured for operating context" />
        <div className="industry-list">
          {industries.map((industry, index) =>
            <article className="industry-row" key={industry.name}>
              <span className="industry-icon" aria-hidden="true">{industryIcons[industry.name]}</span>
              <h3>{industry.name}</h3>
              <p>{industry.description}</p>
              <Link className="text-link" href="/industries">Industry view <span aria-hidden="true">→</span></Link>
            </article>
          )}</div>
      </div>
    </section>
    <section className="section section--brand">
      <div className="container split"><div>
        <p className="eyebrow eyebrow--light">Security and trust</p>
        <h2>Enterprise controls across one connected platform</h2>
        <p>Identity, tenant isolation, permissions, content governance and audit capabilities support responsible operations across every suite.</p>
        <ButtonLink href="/security" variant="light">Explore security</ButtonLink>
      </div>
      <ul className="capability-panel">
        {["Role-based access", "Tenant isolation", "Audit trails", "Content governance", "Secure collaboration", "Platform monitoring"].map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
    </section>
    <FinalCta />
  </>
}
