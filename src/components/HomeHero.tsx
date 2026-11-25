import Link from "next/link";
import { home } from "@/content/home";
import { Arrow, Icon } from "./Icons";

const day = [
  { t: "08:52", task: "Retyped a load from an email into the dispatch sheet", tag: "retyping" },
  { t: "09:30", task: "Called to ask whether the rate confirmation was signed", tag: "chasing" },
  { t: "10:05", task: "“Can Driver B take it?” Checked three places to find out", tag: "guessing" },
  { t: "11:40", task: "Found the delivery proof in a driver's phone photos", tag: "chasing" },
];

export default function HomeHero() {
  const hero = home.hero;
  return (
    <>
      <div className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">{hero.eyebrow}</span>
            <h1>
              {hero.headlineStart} <em>{hero.headlineEmphasis}</em>
            </h1>
            <p className="lede">{hero.subhead}</p>
            <div className="cta">
              <Link className="btn btn-primary" href={hero.primary.href}>
                {hero.primary.label} <Arrow />
              </Link>
              <Link className="btn btn-ghost" href={hero.secondary.href}>
                {hero.secondary.label}
              </Link>
            </div>
            <ul className="chips" aria-label="The gaps we remove">
              {hero.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>

          <div className="panel dayplan" role="img" aria-label="Illustrative example of a morning spent on work around the freight instead of moving it">
            <div className="panel-top">
              <span className="dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span className="live">Where a Tuesday morning goes</span>
            </div>
            <ol className="daylist" aria-hidden="true">
              {day.map((d) => (
                <li key={d.t}>
                  <time>{d.t}</time>
                  <span>{d.task}</span>
                  <em>{d.tag}</em>
                </li>
              ))}
            </ol>
            <div className="daysum" aria-hidden="true">
              <span>4 tasks</span>
              <b>0 loads moved</b>
            </div>
            <p className="note">Illustrative example. Does this look familiar?</p>
          </div>
        </div>
      </div>

      <section className="truststrip" aria-label="Sound familiar?">
        <div className="wrap">
          <ul>
            {home.strip.map((s) => (
              <li key={s.title}>
                <Icon name={s.icon} />
                <div>
                  <strong>{s.title}</strong>
                  <span>{s.text}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
