import { StaticLink as Link } from "@/components/ui/StaticLink";
import { Icon, type IconName } from "@/components/ui/Icon";
import type { suites } from "@/content/site";

type Suite = (typeof suites)[number];
export function SuiteCard({ suite, showCapabilities = true }: { suite: Suite; index?: number; showCapabilities?: boolean }) { return <article className="suite-card" data-accent={suite.accent}><div className="suite-card__icon"><Icon name={suite.icon as IconName} /></div><h3>{suite.name}</h3><p>{suite.description}</p>{showCapabilities && <ul className="capability-list">{suite.capabilities.map(item => <li key={item}>{item}</li>)}</ul>}<Link className="text-link" href="/solutions">Explore suite <span aria-hidden="true">→</span></Link></article> }
