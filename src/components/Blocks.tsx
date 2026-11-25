import Link from "next/link";
import { Arrow, Check, Icon } from "./Icons";

/* ---------- small helpers ---------- */

export function Eyebrow({ children, tone }: { children: React.ReactNode; tone?: "light" | "dark" }) {
  return <span className={`eyebrow${tone ? ` eyebrow-${tone}` : ""}`}>{children}</span>;
}

export type Action = { label: string; href: string; variant?: "primary" | "ghost" };

export function Actions({ actions }: { actions: Action[] }) {
  return (
    <div className="cta">
      {actions.map((a) => (
        <Link key={a.label} className={`btn ${a.variant === "ghost" ? "btn-ghost" : "btn-primary"}`} href={a.href}>
          {a.label} {a.variant !== "ghost" && <Arrow />}
        </Link>
      ))}
    </div>
  );
}

/* ---------- page hero ---------- */

export function PageHero({
  eyebrow,
  title,
  lede,
  actions,
  visual,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  actions?: Action[];
  visual?: React.ReactNode;
  crumbs?: { label: string; href?: string }[];
}) {
  return (
    <div className="pagehero">
      <div className="road" aria-hidden="true" />
      <div className={`wrap ${visual ? "ph-grid" : "ph-single"}`}>
        <div>
          {crumbs && (
            <nav aria-label="Breadcrumb" className="crumbs">
              <ol>
                <li>
                  <Link href="/">Home</Link>
                </li>
                {crumbs.map((c) => (
                  <li key={c.label}>{c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}</li>
                ))}
              </ol>
            </nav>
          )}
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="h1-page">{title}</h1>
          <p className="lede">{lede}</p>
          {actions && <Actions actions={actions} />}
        </div>
        {visual && <div className="ph-visual">{visual}</div>}
      </div>
    </div>
  );
}

/* ---------- section wrapper ---------- */

export function Section({
  id,
  tone = "plain",
  eyebrow,
  title,
  intro,
  children,
  tight,
}: {
  id?: string;
  tone?: "plain" | "paper" | "night";
  eyebrow?: string;
  title?: string;
  intro?: string;
  children?: React.ReactNode;
  tight?: boolean;
}) {
  return (
    <section id={id} className={`sec${tone === "paper" ? " paper" : ""}${tone === "night" ? " band" : ""}${tight ? " sec-tight" : ""}`}>
      <div className="wrap">
        {(eyebrow || title || intro) && (
          <div className="sec-head">
            {eyebrow && <Eyebrow tone={tone === "night" ? "light" : undefined}>{eyebrow}</Eyebrow>}
            {title && <h2>{title}</h2>}
            {intro && <p className="muted">{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

/* ---------- cards ---------- */

export type CardItem = { title: string; text: string; points?: string[]; href?: string; tag?: string; icon?: string };

/* ---------- stats row ---------- */

export function Stats({ items }: { items: { value: string; unit: string; text: string }[] }) {
  return (
    <div className="stats">
      {items.map((s) => (
        <div className="stat" key={s.unit}>
          <b>
            {s.value} <i>{s.unit}</i>
          </b>
          <span>{s.text}</span>
        </div>
      ))}
    </div>
  );
}

/* ---------- trust grid ---------- */

export function TrustGrid({ items, note }: { items: { icon: string; title: string; text: string }[]; note?: string }) {
  return (
    <>
      <div className="trust-grid">
        {items.map((t) => (
          <div className="trust-item" key={t.title}>
            <span className="icon-tile">
              <Icon name={t.icon} />
            </span>
            <h3>{t.title}</h3>
            <p>{t.text}</p>
          </div>
        ))}
      </div>
      {note && <p className="trust-note">{note}</p>}
    </>
  );
}

export function CardGrid({
  items,
  cols = 3,
  variant = "card",
  linkLabel = "Learn more",
  darkLast = false,
}: {
  items: CardItem[];
  cols?: 2 | 3 | 4;
  variant?: "card" | "rule";
  linkLabel?: string;
  darkLast?: boolean;
}) {
  return (
    <div className={`grid grid-${cols}`}>
      {items.map((it, i) => {
        const cls = variant === "rule" ? "rule-card" : `card${darkLast && i === items.length - 1 ? " card-dark" : ""}`;
        const body = (
          <>
            {it.icon && (
              <span className="icon-tile">
                <Icon name={it.icon} />
              </span>
            )}
            {it.tag && <span className="num">{it.tag}</span>}
            <h3>{it.title}</h3>
            <p>{it.text}</p>
            {it.points && (
              <ul>
                {it.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            )}
            {it.href && (
              <span className="textlink">
                {linkLabel} <Arrow />
              </span>
            )}
          </>
        );
        return it.href ? (
          <Link key={it.title} href={it.href} className={`${cls} is-link`}>
            {body}
          </Link>
        ) : (
          <article key={it.title} className={cls}>
            {body}
          </article>
        );
      })}
    </div>
  );
}

/* ---------- split (text + visual) ---------- */

export function Split({
  eyebrow,
  title,
  text,
  points,
  visual,
  reverse,
  checks,
  children,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  points?: string[];
  visual: React.ReactNode;
  reverse?: boolean;
  checks?: { lead: string; text: string }[];
  children?: React.ReactNode;
}) {
  return (
    <div className={`split${reverse ? " reverse" : ""}`}>
      <div>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h2 className="h2-lg">{title}</h2>
        {text && <p className="muted">{text}</p>}
        {points && (
          <ul className="checks">
            {points.map((p) => (
              <li key={p}>
                <Check />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        )}
        {checks && (
          <ul className="checks">
            {checks.map((p) => (
              <li key={p.lead}>
                <Check />
                <span>
                  <strong>{p.lead}</strong> {p.text}
                </span>
              </li>
            ))}
          </ul>
        )}
        {children}
      </div>
      <div>{visual}</div>
    </div>
  );
}

/* ---------- numbered steps ---------- */

export function Steps({ items, night }: { items: { title: string; text: string }[]; night?: boolean }) {
  return (
    <ol className={`steps steps-${items.length}${night ? " steps-night" : ""}`}>
      {items.map((s, i) => (
        <li key={s.title} className="step">
          <span className="n">{i + 1}</span>
          <h3>{s.title}</h3>
          <p className="muted">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}

/* ---------- detailed stage list ---------- */

export function StageList({
  items,
}: {
  items: { title: string; text: string; who: { role: string; does: string }[] }[];
}) {
  return (
    <ol className="stagelist">
      {items.map((s, i) => (
        <li key={s.title} className="stage">
          <div className="stage-n">
            <span>{String(i + 1).padStart(2, "0")}</span>
          </div>
          <div className="stage-main">
            <h3>{s.title}</h3>
            <p className="muted">{s.text}</p>
          </div>
          <dl className="stage-who">
            {s.who.map((w) => (
              <div key={w.role}>
                <dt>{w.role}</dt>
                <dd>{w.does}</dd>
              </div>
            ))}
          </dl>
        </li>
      ))}
    </ol>
  );
}

/* ---------- comparison table ---------- */

export function Compare({ rows }: { rows: { label: string; before: string; after: string }[] }) {
  return (
    <div className="compare" role="table" aria-label="Before and after comparison">
      <div className="cmp-row cmp-head" role="row">
        <div role="columnheader" />
        <div role="columnheader">Separate tools</div>
        <div role="columnheader" className="after">
          With Trukkings
        </div>
      </div>
      {rows.map((r) => (
        <div key={r.label} className="cmp-row" role="row">
          <div role="rowheader" className="cmp-label">
            {r.label}
          </div>
          <div role="cell" data-label="Separate tools">
            {r.before}
          </div>
          <div role="cell" className="after" data-label="With Trukkings">
            {r.after}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------- call to action band ---------- */

export function CtaBand({
  title,
  text,
  primary,
  secondary,
}: {
  title: string;
  text: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="sec sec-tight">
      <div className="wrap">
        <div className="ctaband">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="cta">
            <Link className="btn btn-dark" href={primary.href}>
              {primary.label} <Arrow />
            </Link>
            {secondary && (
              <Link className="btn btn-outline-dark" href={secondary.href}>
                {secondary.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="faq-list">
      {items.map((it) => (
        <details key={it.q}>
          <summary>{it.q}</summary>
          <p>{it.a}</p>
        </details>
      ))}
    </div>
  );
}

/* ---------- link row ---------- */

export function LinkRow({ items }: { items: { title: string; text: string; href: string }[] }) {
  return <CardGrid items={items} cols={3} variant="rule" linkLabel="Explore" />;
}
