import Link from "next/link";
import { Arrow, Icon } from "./Icons";
import { PageHero } from "./Blocks";
import { site } from "@/content/site";

type Doc = { title: string; updated: string; short: string[]; sections: { h: string; p: string[] }[] };

const slug = (h: string) => h.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function LegalPage({ doc, other }: { doc: Doc; other: { label: string; href: string } }) {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={doc.title}
        lede="Written in plain language. If anything here is unclear, write to us and we'll explain."
        crumbs={[{ label: doc.title }]}
      />
      <section className="sec sec-tight legal-sec">
        <div className="wrap">
          <div className="legal-meta">
            <span>
              <b>Effective</b> {doc.updated}
            </span>
            <span>
              <b>Entity</b> Trukkings Inc
            </span>
            <span>
              <b>Contact</b> <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
            </span>
          </div>

          <div className="legal-layout">
            <aside className="toc" aria-label="On this page">
              <p>On this page</p>
              <ol>
                {doc.sections.map((s, i) => (
                  <li key={s.h}>
                    <a href={`#${slug(s.h)}`}>
                      <i>{String(i + 1).padStart(2, "0")}</i> {s.h}
                    </a>
                  </li>
                ))}
              </ol>
            </aside>

            <div className="legal-body">
              <div className="short">
                <h2>
                  <Icon name="doc" /> The short version
                </h2>
                <ul>
                  {doc.short.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <p>The full text below is what applies.</p>
              </div>

              {doc.sections.map((s, i) => (
                <section key={s.h} id={slug(s.h)} className="clause">
                  <span className="clause-n">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h2>{s.h}</h2>
                    {s.p.map((t) => (
                      <p key={t}>{t}</p>
                    ))}
                  </div>
                </section>
              ))}

              <div className="legal-foot">
                <div>
                  <h3>Questions about this?</h3>
                  <p>
                    Write to <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>. A person reads every message.
                  </p>
                </div>
                <Link className="btn btn-ghost" href={other.href}>
                  {other.label} <Arrow />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
