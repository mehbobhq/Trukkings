import { CardGrid, CtaBand, PageHero, Section, Split, Steps } from "@/components/Blocks";
import { BoardMock } from "@/components/Mocks";
import { operationsPage as p } from "@/content/platform";
import { home } from "@/content/home";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(p.meta.title, p.meta.description, "/operations");

export default function Page() {
  return (
    <>
      <PageHero {...p.hero} actions={p.hero.actions as never} crumbs={[{ label: "Platform", href: "/platform" }, { label: "Operations & TMS" }]} visual={<BoardMock />} />

      <Section eyebrow={p.features.eyebrow} title={p.features.title}>
        <CardGrid cols={3} items={p.features.items} />
      </Section>

      <Section tone="paper">
        <Split eyebrow={p.board.eyebrow} title={p.board.title} text={p.board.text} points={p.board.points} visual={<BoardMock />} />
      </Section>

      <Section tone="night" eyebrow={p.stages.eyebrow} title={p.stages.title}>
        <Steps night items={p.stages.items} />
      </Section>

      <Section eyebrow={p.stop.eyebrow} title={p.stop.title}>
        <CardGrid cols={3} variant="rule" items={p.stop.items} />
      </Section>

      <CtaBand {...home.cta} />
    </>
  );
}
