import { CardGrid, CtaBand, PageHero, Section, Steps } from "@/components/Blocks";
import { ChatMock } from "@/components/Mocks";
import { assistantPage as p } from "@/content/platform";
import { home } from "@/content/home";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(p.meta.title, p.meta.description, "/ai-assistant");

export default function Page() {
  return (
    <>
      <PageHero {...p.hero} actions={p.hero.actions as never} crumbs={[{ label: "Platform", href: "/platform" }, { label: "AI assistant" }]} visual={<ChatMock messages={p.chat} />} />

      <Section eyebrow={p.does.eyebrow} title={p.does.title}>
        <CardGrid cols={3} items={p.does.items} />
      </Section>

      <Section tone="night" eyebrow={p.control.eyebrow} title={p.control.title} intro={p.control.intro}>
        <Steps night items={p.control.steps} />
      </Section>

      <Section eyebrow={p.wont.eyebrow} title={p.wont.title}>
        <CardGrid cols={4} variant="rule" items={p.wont.items} />
      </Section>

      <Section tone="paper" eyebrow={p.examples.eyebrow} title={p.examples.title}>
        <div className="grid grid-3">
          {p.examples.groups.map((g) => (
            <div key={g.title} className="card">
              <h3>{g.title}</h3>
              <ul className="quotes">
                {g.questions.map((q) => (
                  <li key={q}>&ldquo;{q}&rdquo;</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand {...home.cta} />
    </>
  );
}
