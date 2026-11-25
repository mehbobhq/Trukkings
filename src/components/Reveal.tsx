"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const targets = ".sec-head, .card, .rule-card, .step, .lc-node, .stage, .trust-item, .stat, .compare, .ctaband, .split > div, .faq-split > div, details, .formcard";

/** Fades content in as it scrolls into view. Content already on screen is left alone, and nothing is hidden without JS. */
export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const vh = window.innerHeight;
    const els = Array.from(document.querySelectorAll<HTMLElement>(targets)).filter(
      (el) => el.getBoundingClientRect().top > vh * 0.92 && !el.closest(".rv"),
    );
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    els.forEach((el, i) => {
      el.classList.add("rv");
      el.style.transitionDelay = `${(i % 3) * 70}ms`;
      io.observe(el);
    });
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
