import type{Metadata}from"next";
import{PageHero}from"@/components/marketing/PageHero";
import{ButtonLink}from"@/components/ui/ButtonLink";
import{FinalCta}from"@/components/marketing/FinalCta";
import { createMetadata } from "@/lib/seo/metadata";
export const metadata: Metadata = createMetadata("Pricing", "Bridge Dynamics plans start from ₦1.2 million annually, with tailored implementation and support.", "/pricing");
const services = [["Annual platform subscription", "Access to the agreed Bridge Dynamics capabilities and selected modules."], ["One-time implementation", "Structured discovery, solution design, setup and operational readiness."], ["Configuration", "Workflows, forms, rules, roles, approvals, notifications and custom fields."], ["Training", "Role-relevant enablement for administrators, managers and users."], ["Data migration", "Agreed preparation and transfer of suitable data from existing systems."], ["Integrations", "Scoped connections to approved business systems and services."], ["Customer-specific extensions", "Capabilities required for specific operating needs."], ["Premium support options", "Support arrangements aligned to service expectations and operating context."]];
export default function Pricing() {
  return <>
    <PageHero eyebrow="Commercial model" title="Enterprise software aligned to your operating requirements" description="A clear annual platform subscription supported by the implementation services required to establish a dependable operating environment." />

    <section className="section">
      <div className="container price-layout">
        <aside className="price-card">
          {/* <span className="price-card__badge">Annual platform subscription</span> */}
          <span className="price-value">From ₦1.2m</span>
          <span className="price-period">per year</span>
          <p className="price-card__note">This starting figure is indicative and does not constitute a binding quotation.</p>
          <ButtonLink href="/contact?enquiry=pricing" variant="light">Request a Tailored Quote</ButtonLink>
          <ButtonLink href="/request-demo" variant="secondary">Request a Demonstration</ButtonLink>
        </aside>
        <div>
          <h2>What your investment may include</h2>
          <div className="service-list">{services.map(([title, text]) => <article className="service" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </div>
    </section>
    <section className="section section--soft">
      <div className="container"><h2>Final pricing depends on your requirements</h2><p className="lead">We prepare a tailored commercial proposal after understanding the operating context and delivery scope.</p><ul className="factor-list">{["Active users","Selected modules","Implementation complexity","Data migration","Integrations","Training","Support requirements"].map(item=><li key={item}>{item}</li>)}</ul></div></section><FinalCta/></>}
