import { CardGrid, CtaBand, PageHero, Section } from "@/components/Blocks";
import { solutionsIndex as s } from "@/content/solutions";
import { home } from "@/content/home";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(s.meta.title, s.meta.description, "/solutions");

export default function Page() {
  return (
    <>
      <PageHero {...s.hero} crumbs={[{ label: "Solutions" }]} />
      <Section tight>
        <CardGrid cols={3} items={s.items} linkLabel="See how it fits" />
      </Section>
      <Section tone="paper" eyebrow={s.together.eyebrow} title={s.together.title} intro={s.together.text} />
      <CtaBand {...home.cta} />
    </>
  );
}
