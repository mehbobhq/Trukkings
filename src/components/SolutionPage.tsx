import type { Solution } from "@/content/solutions";
import { home } from "@/content/home";
import { CardGrid, CtaBand, PageHero, Section, Split, Steps, LinkRow } from "./Blocks";
import { ChatMock } from "./Mocks";

export default function SolutionPage({ s }: { s: Solution }) {
  return (
    <>
      <PageHero
        eyebrow={s.hero.eyebrow}
        title={s.hero.title}
        lede={s.hero.lede}
        crumbs={[{ label: "Solutions", href: "/solutions" }, { label: s.hero.eyebrow.replace("For ", "") }]}
        actions={[
          { label: "Get early access", href: "/contact", variant: "primary" },
          { label: "See the platform", href: "/platform", variant: "ghost" },
        ]}
        visual={<ChatMock messages={s.chat} />}
      />

      <Section eyebrow={s.challenges.eyebrow} title={s.challenges.title}>
        <CardGrid cols={3} variant="rule" items={s.challenges.items} />
      </Section>

      <Section tone="paper" eyebrow={s.helps.eyebrow} title={s.helps.title}>
        <CardGrid cols={3} items={s.helps.items} linkLabel="See the tool" />
      </Section>

      <Section tone="night" eyebrow={s.week.eyebrow} title={s.week.title} intro={s.week.intro}>
        <Steps night items={s.week.items} />
      </Section>

      <Section eyebrow={s.start.eyebrow} title={s.start.title}>
        <LinkRow items={s.start.items} />
      </Section>

      <CtaBand {...home.cta} />
    </>
  );
}
