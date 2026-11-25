import Link from "next/link";
import { home } from "@/content/home";
<<<<<<< HEAD
import { Arrow, Icon } from "./Icons";
import HeroPanel from "./HeroPanel";
=======
import { Arrow } from "./Icons";
>>>>>>> 3eb25cd183f4fa59313fd3296435b812108e7679

export default function HomeHero() {
  const hero = home.hero;
  return (
<<<<<<< HEAD
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
=======
    <div className="hero">
      <div className="road" aria-hidden="true" />
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

        <div className="panel" role="img" aria-label="Illustrative preview of a Trukkings dispatch view with an assistant answer">
          <div className="panel-top">
            <span className="dots" aria-hidden="true"><i /><i /><i /></span>
            <span>Illustrative preview</span>
          </div>
          <div className="tabs" aria-hidden="true">
            <span>Marketplace</span>
            <span>Dispatch</span>
            <span className="on">Assistant</span>
          </div>
          {[
            { meta: ["Dry van", "Full truckload", "Pickup tomorrow"], tag: "Good fit", hot: true },
            { meta: ["Reefer", "Full truckload", "Pickup in 2 days"], tag: "Needs review", hot: false },
          ].map((l, i) => (
            <div className="load" key={i}>
              <div className="load-row">
                <div className="lane">
                  <span>Origin</span>
                  <span className="lane-line" />
                  <span>Destination</span>
                </div>
                <span className={`tag${l.hot ? " hot" : ""}`}>{l.tag}</span>
              </div>
              <div className="meta">{l.meta.map((m) => <span key={m}>{m}</span>)}</div>
            </div>
          ))}
          <div className="assist">
            <p className="q">Can my driver take the first load and still be home this week?</p>
            <p className="a">
              <b>Trukkings AI</b> compares the route, the driver&apos;s available hours and your schedule, then shows its reasoning so you can confirm or change the plan.
            </p>
          </div>
          <p className="note">Sample content for illustration only.</p>
        </div>
      </div>
    </div>
>>>>>>> 3eb25cd183f4fa59313fd3296435b812108e7679
  );
}
