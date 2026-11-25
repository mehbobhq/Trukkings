import { PageHero, Section } from "@/components/Blocks";
import { termsPage as p } from "@/content/company";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(p.meta.title, p.meta.description, "/terms");

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Legal" title={p.title} lede={`Last updated ${p.updated}`} />
      <Section tight>
        <div className="prose-wide legal">
          {p.sections.map((s) => (
            <div key={s.h}>
              <h2>{s.h}</h2>
              {s.p.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
