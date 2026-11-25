"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { nav } from "@/content/site";

export default function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Close menus when the page changes.
  useEffect(() => {
    setOpenMenu(null);
    setMobile(false);
  }, [pathname]);

  // Close the desktop dropdown on outside click or Escape.
  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobile(false);
      }
    }
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/"));

  return (
    <header className="header">
      <div className="wrap nav">
        <Logo light />
        <nav aria-label="Primary" className="nav-links" ref={navRef}>
          <ul>
            {nav.map((item) => (
              <li
                key={item.label}
                className={item.children ? "has-menu" : undefined}
                onMouseEnter={() => item.children && setOpenMenu(item.label)}
                onMouseLeave={() => item.children && setOpenMenu(null)}
              >
                {item.children ? (
                  <>
                    <button
                      type="button"
                      className={`link${isActive(item.href) ? " active" : ""}`}
                      aria-expanded={openMenu === item.label}
                      aria-haspopup="true"
                      onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                    >
                      {item.label}
                      <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 4.5l3 3 3-3" />
                      </svg>
                    </button>
                    {openMenu === item.label && (
                      <div className="dropdown" role="menu">
                        {item.children.map((c) => (
                          <Link key={c.href} href={c.href} role="menuitem">
                            <strong>{c.label}</strong>
                            {c.desc && <span>{c.desc}</span>}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link className={`link${isActive(item.href) ? " active" : ""}`} href={item.href}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-actions">
          <Link className="btn btn-primary btn-sm" href="/contact">
            Get early access
          </Link>
          <button
            type="button"
            className="menu-btn"
            aria-expanded={mobile}
            aria-controls="mobile-menu"
            aria-label={mobile ? "Close menu" : "Open menu"}
            onClick={() => setMobile((v) => !v)}
          >
            <span aria-hidden="true" className={mobile ? "bars open" : "bars"} />
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={mobile ? "mobile-menu show" : "mobile-menu"}>
        <div className="wrap">
          <ul>
            {nav.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <>
                    <button
                      type="button"
                      className="m-group"
                      aria-expanded={mobileGroup === item.label}
                      onClick={() => setMobileGroup(mobileGroup === item.label ? null : item.label)}
                    >
                      {item.label}
                      <span aria-hidden="true">{mobileGroup === item.label ? "–" : "+"}</span>
                    </button>
                    {mobileGroup === item.label && (
                      <ul className="m-sub">
                        {item.children.map((c) => (
                          <li key={c.href}>
                            <Link href={c.href}>{c.label}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link href={item.href}>{item.label}</Link>
                )}
              </li>
            ))}
            <li>
              <Link href="/contact" className="m-cta">
                Get early access
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
