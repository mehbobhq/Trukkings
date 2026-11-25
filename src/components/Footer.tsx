import Link from "next/link";
import Logo from "./Logo";
import { Arrow, Icon } from "./Icons";
import { footerColumns, legalLinks, site } from "@/content/site";

const trust = [
  { icon: "users", label: "People approve every change" },
  { icon: "eye", label: "Answers show their sources" },
  { icon: "history", label: "Reviewable record history" },
  { icon: "lock", label: "Your records, your control" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-cta">
          <div>
            <h2>Have a question about your operation?</h2>
            <p>Write to us. A person reads every message.</p>
          </div>
          <div className="foot-cta-actions">
            <a className="btn btn-ghost" href={`mailto:${site.contactEmail}`}>
              {site.contactEmail}
            </a>
            <Link className="btn btn-primary" href="/contact">
              Get early access <Arrow />
            </Link>
          </div>
        </div>

        <div className="foot-main">
          <div className="foot-brand">
            <Logo light />
            <p>One platform for finding freight, running it and getting answers about it.</p>
            <span className="status">
              <span className="pulse" aria-hidden="true" /> Early access open
            </span>
          </div>
          <div className="foot-cols">
            {footerColumns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h2>{col.title}</h2>
                <ul>
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <ul className="foot-trust" aria-label="What we commit to">
          {trust.map((t) => (
            <li key={t.label}>
              <Icon name={t.icon} />
              {t.label}
            </li>
          ))}
        </ul>

        <div className="foot-mark" aria-hidden="true">
          trukkings<i>.</i>
        </div>

        <div className="foot-bottom">
          <p>
            © {new Date().getFullYear()} Trukkings Inc. All rights reserved.
          </p>
          <ul>
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
            <li>
              <a href="#main" className="totop">
                Back to top <span aria-hidden="true">↑</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
