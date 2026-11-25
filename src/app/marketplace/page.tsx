import { CardGrid, CtaBand, PageHero, Section, Split, Steps } from "@/components/Blocks";
import { MarketplaceMock } from "@/components/Mocks";
import { marketplacePage as p } from "@/content/platform";
import { home } from "@/content/home";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(p.meta.title, p.meta.description, "/marketplace");

export default function Page() {
  return (
    <>
      <PageHero {...p.hero} actions={p.hero.actions as never} crumbs={[{ label: "Platform", href: "/platform" }, { label: "Freight marketplace" }]} visual={<MarketplaceMock />} />

      <Section eyebrow={p.sides.eyebrow} title={p.sides.title}>
        <CardGrid cols={2} items={p.sides.items} />
      </Section>

      <Section tone="paper" eyebrow={p.features.eyebrow} title={p.features.title}>
        <CardGrid cols={3} variant="rule" items={p.features.items} />
      </Section>

      <Section tone="night" eyebrow={p.steps.eyebrow} title={p.steps.title}>
        <Steps night items={p.steps.items} />
      </Section>

      <Section>
        <Split eyebrow={p.connected.eyebrow} title={p.connected.title} text={p.connected.text} points={p.connected.points} visual={<MarketplaceMock />} reverse />
      </Section>

      <CtaBand {...home.cta} />
    </>
  );
}
