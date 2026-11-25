import { CardGrid, CtaBand, PageHero, Section } from "@/components/Blocks";
import { aboutPage as p } from "@/content/company";
import { home } from "@/content/home";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(p.meta.title, p.meta.description, "/about");

export default function Page() {
  return (
    <>
      <PageHero {...p.hero} crumbs={[{ label: "About" }]} />

      <Section eyebrow={p.story.eyebrow} title={p.story.title}>
        <div className="prose-wide">
          {p.story.paragraphs.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </div>
      </Section>

      <Section tone="paper" eyebrow={p.beliefs.eyebrow} title={p.beliefs.title}>
        <CardGrid cols={4} variant="rule" items={p.beliefs.items} />
      </Section>

      <Section eyebrow={p.how.eyebrow} title={p.how.title}>
        <CardGrid cols={3} items={p.how.items} />
      </Section>

      <CtaBand {...home.cta} />
    </>
  );
}
