"use client";

import Link from "next/link";
import { useState } from "react";
import { Arrow } from "./Icons";

function verdict(n: number, total: number) {
  if (n === 0) return { head: "Nothing ticked.", body: "You may already be well set up. We would still like to hear how you do it." };
  if (n <= 2) return { head: "A few small leaks.", body: "Very common, and usually the cheapest ones to fix. They tend to grow as you add loads, drivers or trucks." };
  if (n < total) return { head: "That's a pattern, not bad luck.", body: "These all come from the same place: details and answers that live outside the load. It is exactly what Trukkings is built to remove." };
  return { head: "Every one of them.", body: "Your team is working hard to cover for the gaps between tools. That effort is the thing worth getting back." };
}

export default function LeakCheck({ items }: { items: string[] }) {
  const [on, setOn] = useState<boolean[]>(() => items.map(() => false));
  const n = on.filter(Boolean).length;
  const v = verdict(n, items.length);

  return (
    <div className="leak">
      <ul className="leak-list">
        {items.map((label, i) => (
          <li key={label}>
            <label className={on[i] ? "on" : undefined}>
              <input
                type="checkbox"
                checked={on[i]}
                onChange={() => setOn((prev) => prev.map((v2, j) => (j === i ? !v2 : v2)))}
              />
              <span className="box" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 7.5l3 3 6-6.5" />
                </svg>
              </span>
              <span>{label}</span>
            </label>
          </li>
        ))}
      </ul>

      <div className="leak-result" role="status" aria-live="polite">
        <div className="meter" aria-hidden="true">
          {items.map((_, i) => (
            <i key={i} className={i < n ? "full" : undefined} />
          ))}
        </div>
        <p className="count">
          <b>{n}</b> of {items.length} happened this week
        </p>
        <h3>{v.head}</h3>
        <p>{v.body}</p>
        {n > 0 && (
          <Link className="btn btn-primary" href="/contact">
            Show me how to close these gaps <Arrow />
          </Link>
        )}
      </div>
    </div>
  );
}
