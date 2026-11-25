import { CardGrid, CtaBand, PageHero, Section, Split } from "@/components/Blocks";
import { partnersPage as p } from "@/content/company";
import { pageMeta } from "@/lib/meta";
import Link from "next/link";

export const metadata = pageMeta(p.meta.title, p.meta.description, "/partners");

export default function Page() {
  return (
    <>
      <PageHero {...p.hero} crumbs={[{ label: "Partners & investors" }]} actions={[{ label: "Start a conversation", href: "/contact", variant: "primary" }]} />

      <Section eyebrow={p.ways.eyebrow} title={p.ways.title}>
        <CardGrid cols={2} items={p.ways.items} />
      </Section>

      <Section tone="paper">
        <Split
          eyebrow={p.looking.eyebrow}
          title={p.looking.title}
          points={p.looking.points}
          visual={
            <div className="note-card">
              <h3>Say hello</h3>
              <p>Tell us who you are and what you have in mind. A short note is plenty, and we read every message.</p>
              <Link className="btn btn-dark" href="/contact">
                Contact us
              </Link>
            </div>
          }
        />
      </Section>

      <CtaBand
        title="Let's talk about what we could build together."
        text="Whether you haul, ship, build software or back early-stage companies, we'd like to hear from you."
        primary={{ label: "Get in touch", href: "/contact" }}
      />
    </>
  );
}
