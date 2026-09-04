import type{Metadata}from"next";
import{PageHero}from"@/components/marketing/PageHero";
import{DemoRequestForm}from"@/components/forms/DemoRequestForm";
import{createMetadata}from"@/lib/seo/metadata";

export const metadata:Metadata=createMetadata("Request a Demonstration","Request a tailored demonstration of the Bridge Dynamics Enterprise Business Operating System.","/request-demo");

export default function RequestDemo(){
    return <>
    
    <PageHero eyebrow="Request a demonstration" title="See how one connected platform can support your enterprise" description="Tell us about your operating priorities and the systems you use today. We will prepare a focused demonstration of the platform services and integrated suites most relevant to your organisation."/>
    
    <section className="section form-section">
        <div className="container form-wrap">
            <aside className="form-context">
                <p className="eyebrow">What to expect</p>
                <h2>A structured, relevant product conversation</h2>
                <p>The demonstration is designed around your operating context—not a generic tour of disconnected features.</p>
                <ol className="demo-steps">
                    <li>
                        <span>01</span>
                        <div>
                            <strong>Understand your priorities</strong>
                            <p>Discuss the processes, information gaps and operational outcomes that matter most.</p>
                        </div>
                    </li>
                    <li>
                        <span>02</span>
                        <div>
                            <strong>Explore the connected platform</strong>
                            <p>See how identity, workflow, content, collaboration and suites work together.</p>
                        </div>
                    </li>
                    <li><span>03</span>
                        <div><strong>Consider the path forward</strong>
                            <p>Review relevant implementation, configuration and integration considerations.</p>
                        </div>
                    </li>
                </ol>
            </aside>
            <DemoRequestForm/>
        </div>
    </section>
    </>
}
