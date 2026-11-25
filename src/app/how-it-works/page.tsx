import { CtaBand, PageHero, Section, StageList, Steps } from "@/components/Blocks";
import { Lifecycle } from "@/components/Mocks";
import { howPage as p } from "@/content/company";
import { home } from "@/content/home";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(p.meta.title, p.meta.description, "/how-it-works");

export default function Page() {
  return (
    <>
      <PageHero {...p.hero} crumbs={[{ label: "How it works" }]} />
      <Section tone="night">
        <Lifecycle />
      </Section>
      <Section eyebrow={p.stages.eyebrow} title={p.stages.title}>
        <StageList items={p.stages.items} />
      </Section>
      <Section tone="paper" eyebrow={p.start.eyebrow} title={p.start.title} intro={p.start.intro}>
        <Steps items={p.start.items} />
      </Section>
      <CtaBand {...home.cta} />
    </>
  );
}
