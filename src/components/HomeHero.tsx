import Link from "next/link";
import { home } from "@/content/home";
import { Arrow, Icon } from "./Icons";
import HeroPanel from "./HeroPanel";

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
            <ul className="chips" aria-label="What's inside">
              {hero.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>

          <HeroPanel />
        </div>
      </div>

      <section className="truststrip" aria-label="Our commitments">
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
