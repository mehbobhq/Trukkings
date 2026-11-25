import Link from "next/link";
import Logo from "./Logo";
import { footerColumns, site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
<<<<<<< HEAD
            <Logo light />
=======
            <Logo />
>>>>>>> 3eb25cd183f4fa59313fd3296435b812108e7679
            <p>One platform for finding freight, running it and getting answers about it.</p>
            <a className="foot-mail" href={`mailto:${site.contactEmail}`}>
              {site.contactEmail}
            </a>
          </div>
          <div className="foot-cols">
            {footerColumns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h2>{col.title}</h2>
                <ul>
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        <div className="foot-bottom">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
<<<<<<< HEAD
          <p className="live">
            <span className="pulse" aria-hidden="true" /> Early access open
          </p>
=======
          <p>Early access</p>
>>>>>>> 3eb25cd183f4fa59313fd3296435b812108e7679
        </div>
      </div>
    </footer>
  );
}
