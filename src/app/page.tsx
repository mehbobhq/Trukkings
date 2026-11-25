import Link from "next/link";
import HomeHero from "@/components/HomeHero";
import HeroPanel from "@/components/HeroPanel";
import LeakCheck from "@/components/LeakCheck";
import { CardGrid, Compare, CtaBand, Eyebrow, FaqList, HiddenCost, Section, Split, Stats, Steps, TrustGrid } from "@/components/Blocks";
import { ChatMock, Lifecycle } from "@/components/Mocks";
import { Arrow } from "@/components/Icons";
import { home } from "@/content/home";
import { faqPage } from "@/content/company";
import { platformPage } from "@/content/platform";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(home.meta.title, home.meta.description, "/");

export default function Page() {
  return (
    <>
      <HomeHero />

      {/* 1. Name the problem they may not know they have */}
      <Section eyebrow={home.hidden.eyebrow} title={home.hidden.title} intro={home.hidden.intro}>
        <HiddenCost items={home.hidden.items} outro={home.hidden.outro} />
      </Section>

      {/* 2. Let them recognize it in their own week */}
      <Section id="check" tone="paper" eyebrow={home.check.eyebrow} title={home.check.title} intro={home.check.intro}>
        <LeakCheck items={home.check.items} />
      </Section>

      {/* 3. Explain why it keeps happening */}
      <Section eyebrow={home.problem.eyebrow} title={home.problem.title} intro={home.problem.intro}>
        <CardGrid cols={3} variant="rule" items={home.problem.items} />
      </Section>

      {/* 4. Only now: the fix */}
      <Section tone="paper" eyebrow={home.platform.eyebrow} title={home.platform.title} intro={home.platform.intro}>
        <CardGrid cols={3} items={home.platform.items} darkLast linkLabel="Explore" />
      </Section>

      <Section tone="night">
        <Split eyebrow={home.demo.eyebrow} title={home.demo.title} text={home.demo.text} points={home.demo.points} visual={<HeroPanel />}>
          <div className="cta" style={{ marginTop: 32 }}>
            <Link className="btn btn-primary" href="/platform">
              See the platform <Arrow />
            </Link>
          </div>
        </Split>
      </Section>

      <Section eyebrow={home.compare.eyebrow} title={home.compare.title}>
        <Stats items={home.stats} />
        <div style={{ marginTop: 40 }}>
          <Compare rows={platformPage.compare.rows} />
        </div>
      </Section>

      <Section tone="paper" eyebrow={home.who.eyebrow} title={home.who.title} intro={home.who.intro}>
        <CardGrid cols={4} variant="rule" items={home.who.items} linkLabel="Read more" />
      </Section>

      <Section tone="night" eyebrow={home.lifecycle.eyebrow} title={home.lifecycle.title} intro={home.lifecycle.intro}>
        <Lifecycle />
        <div className="cta" style={{ marginTop: 40 }}>
          <Link className="btn btn-primary" href="/how-it-works">
            See each stage in detail <Arrow />
          </Link>
        </div>
      </Section>

      <Section>
        <Split
          eyebrow={home.assistant.eyebrow}
          title={home.assistant.title}
          text={home.assistant.text}
          checks={home.assistant.points}
          visual={<ChatMock messages={home.assistant.chat} />}
        >
          <div className="cta" style={{ marginTop: 32 }}>
            <Link className="btn btn-ghost" href={home.assistant.link.href}>
              {home.assistant.link.label}
            </Link>
          </div>
        </Split>
      </Section>

      <Section tone="night" eyebrow={home.trust.eyebrow} title={home.trust.title} intro={home.trust.intro}>
        <TrustGrid items={home.trust.items} note={home.trust.note} />
      </Section>

      <Section eyebrow={home.principles.eyebrow} title={home.principles.title}>
        <CardGrid cols={3} variant="rule" items={home.principles.items} />
      </Section>

      <Section tone="paper" eyebrow={home.access.eyebrow} title={home.access.title} intro={home.access.intro}>
        <Steps items={home.access.items} />
      </Section>

      <Section>
        <div className="faq-split">
          <div className="sec-head">
            <Eyebrow>FAQ</Eyebrow>
            <h2>Questions we hear first.</h2>
            <p className="muted">Short answers about early access, the assistant and your data.</p>
            <div className="cta" style={{ marginTop: 24 }}>
              <Link className="btn btn-ghost" href="/faq">
                Read all questions
              </Link>
            </div>
          </div>
          <FaqList items={[faqPage.groups[0].items[1], faqPage.groups[0].items[4], faqPage.groups[3].items[1], faqPage.groups[4].items[0]]} />
        </div>
      </Section>

      <CtaBand {...home.cta} />
    </>
  );
}
