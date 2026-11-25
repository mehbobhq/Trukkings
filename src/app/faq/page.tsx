import { CtaBand, FaqList, PageHero, Section } from "@/components/Blocks";
import { faqPage as p } from "@/content/company";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(p.meta.title, p.meta.description, "/faq");

export default function Page() {
  return (
    <>
      <PageHero {...p.hero} crumbs={[{ label: "FAQ" }]} />
      <Section tight>
        <div className="faq-groups">
          {p.groups.map((g) => (
            <div key={g.title} className="faq-group">
              <h2>{g.title}</h2>
              <FaqList items={g.items} />
            </div>
          ))}
        </div>
      </Section>
      <CtaBand
        title="Still have a question?"
        text="Write to us and we'll answer it, or tell us how you move freight and ask for early access."
        primary={{ label: "Contact us", href: "/contact" }}
      />
    </>
  );
}
