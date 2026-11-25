import Link from "next/link";
import HomeHero from "@/components/HomeHero";
import { CardGrid, CtaBand, Section, Split } from "@/components/Blocks";
import { ChatMock, Lifecycle } from "@/components/Mocks";
import { Arrow } from "@/components/Icons";
import { home } from "@/content/home";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(home.meta.title, home.meta.description, "/");

export default function Page() {
  return (
    <>
      <HomeHero />

      <Section eyebrow={home.problem.eyebrow} title={home.problem.title} intro={home.problem.intro}>
        <CardGrid cols={3} variant="rule" items={home.problem.items} />
      </Section>

      <Section tone="paper" eyebrow={home.platform.eyebrow} title={home.platform.title} intro={home.platform.intro}>
        <CardGrid cols={3} items={home.platform.items} darkLast linkLabel="Explore" />
      </Section>

      <Section tone="night" eyebrow={home.lifecycle.eyebrow} title={home.lifecycle.title} intro={home.lifecycle.intro}>
        <Lifecycle />
        <div className="cta" style={{ marginTop: 40 }}>
          <Link className="btn btn-primary" href="/how-it-works">
            See each stage in detail <Arrow />
          </Link>
        </div>
      </Section>

      <Section eyebrow={home.who.eyebrow} title={home.who.title} intro={home.who.intro}>
        <CardGrid cols={4} variant="rule" items={home.who.items} linkLabel="Read more" />
      </Section>

      <Section tone="paper">
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

      <Section eyebrow={home.principles.eyebrow} title={home.principles.title}>
        <CardGrid cols={3} variant="rule" items={home.principles.items} />
      </Section>

      <CtaBand {...home.cta} />
    </>
  );
}
