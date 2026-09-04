import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/PageHero";
import { FinalCta } from "@/components/marketing/FinalCta";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { PlatformFlow } from "@/components/marketing/PlatformFlow";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata("Enterprise Platform", "Explore the shared services that make Bridge Dynamics one Enterprise Business Operating System.", "/platform");
const services = [
  ["Identity & Access", "One governed identity and permission model across the enterprise."],
  ["Workflow Automation", "Shared approvals, business rules and process orchestration across suites."],
  ["Enterprise Content Management", "Governed documents, metadata, versioning, search and retention in business context."],
  ["Workplace Collaboration", "Enterprise communication connected directly to records, processes and teams."],
  ["Notifications", "Consistent enterprise alerts and actionable process notifications."],
  ["Reporting", "Shared operational reporting built from connected enterprise information."],
  ["Integration", "Controlled integration services for approved external systems and data exchanges."],
  ["Audit", "Traceable activity and business-record history supporting accountability."],
  ["Configuration", "Forms, fields, rules and processes configured around organisational requirements."],
  ["Developer APIs", "Defined interfaces for approved integrations and customer-specific extensions."],
];
export default function Platform() {
  return (
    <>
      <PageHero
        eyebrow="The Bridge Dynamics platform"
        title="One operating foundation for the entire enterprise"
        description="Shared platform services connect every suite, process, document and decision; giving departments the capabilities they need without creating data silos."
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Platform services"
            title="The capabilities every suite shares"
          >
            Bridge Dynamics provides common enterprise services once, then
            applies them consistently across business operations.
          </SectionHeading>
          <div className="feature-columns platform-services">
            {services.map(([title, text], index) => (
              <article className="feature-item" key={title}>
                <span className="feature-item__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2>{title}</h2>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--soft">
        <div className="container split split--flow">
          <div>
            <SectionHeading
              eyebrow="One source of truth"
              title="Every layer strengthens the next"
            >
              Identity establishes responsibility. Workflow coordinates action.
              Enterprise content preserves context. Workplace connects people.
              Suites run the business. Reporting brings the enterprise view
              together.
            </SectionHeading>
          </div>
          <PlatformFlow />
        </div>
      </section>
      <section className="section section--brand">
        <div className="container split">
          <div>
            <p className="eyebrow eyebrow--light">Designed to adapt</p>
            <h2>One platform, configured around your organisation</h2>
            <p className="lead">
              Shared services provide consistency while configurable forms,
              rules, permissions and workflows reflect how your enterprise
              operates.
            </p>
          </div>
          <ul className="capability-panel">
            {[
              "Configurable workflows",
              "Approval processes",
              "Role-based permissions",
              "Business rules",
              "Custom fields and forms",
              "Customer-specific extensions",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
