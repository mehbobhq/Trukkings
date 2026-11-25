import { Compare, CtaBand, LinkRow, PageHero, CardGrid, Section } from "@/components/Blocks";
import { Lifecycle } from "@/components/Mocks";
import { platformPage as p } from "@/content/platform";
import { home } from "@/content/home";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(p.meta.title, p.meta.description, "/platform");

export default function Page() {
  return (
    <>
      <PageHero {...p.hero} actions={p.hero.actions as never} crumbs={[{ label: "Platform" }]} />

      <Section tone="night" eyebrow="The flow" title="Every stage, one thread of history." intro="Each part of the platform covers a stage of the load, and the assistant helps across all of them.">
        <Lifecycle />
      </Section>

      <Section eyebrow={p.shared.eyebrow} title={p.shared.title} intro={p.shared.intro}>
        <CardGrid cols={3} items={p.shared.items} />
      </Section>

      <Section tone="paper" eyebrow={p.compare.eyebrow} title={p.compare.title}>
        <Compare rows={p.compare.rows} />
      </Section>

      <Section eyebrow={p.start.eyebrow} title={p.start.title} intro={p.start.intro}>
        <LinkRow items={p.start.items} />
      </Section>

      <CtaBand {...home.cta} />
    </>
  );
}
