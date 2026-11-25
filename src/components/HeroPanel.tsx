"use client";

import { useEffect, useRef, useState } from "react";

const views = ["Marketplace", "Dispatch", "Assistant"] as const;
type View = (typeof views)[number];

const loads = [
  { meta: ["Dry van", "Full truckload", "Pickup tomorrow"], tag: "Good fit", hot: true },
  { meta: ["Reefer", "Full truckload", "Pickup in 2 days"], tag: "Needs review", hot: false },
];

const board: { name: string; cards: { t: string; m: string; d: string; warn?: boolean }[] }[] = [
  { name: "Booked", cards: [{ t: "Load A", m: "Dry van", d: "Unassigned", warn: true }] },
  { name: "Assigned", cards: [{ t: "Load B", m: "Driver A · Truck 12", d: "Docs 1/3", warn: true }] },
  { name: "In transit", cards: [{ t: "Load C", m: "Driver B · Truck 7", d: "On time" }] },
  { name: "Delivered", cards: [{ t: "Load E", m: "Driver D · Truck 9", d: "Docs complete" }] },
];

function Lane() {
  return (
    <div className="lane">
      <span>Origin</span>
      <span className="lane-line" />
      <span>Destination</span>
    </div>
  );
}

export default function HeroPanel() {
  const [view, setView] = useState<View>("Assistant");
  const [auto, setAuto] = useState(true);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!auto || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timer.current = setInterval(() => {
      setView((v) => views[(views.indexOf(v) + 1) % views.length]);
    }, 5500);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [auto]);

  return (
    <div className="panel" onMouseEnter={() => setAuto(false)} onFocus={() => setAuto(false)}>
      <div className="panel-top">
        <span className="dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="live">
          <span className="pulse" aria-hidden="true" /> Illustrative preview
        </span>
      </div>
      <div className="tabs" role="tablist" aria-label="Product preview">
        {views.map((v) => (
          <button
            key={v}
            type="button"
            role="tab"
            aria-selected={view === v}
            className={view === v ? "on" : undefined}
            onClick={() => {
              setView(v);
              setAuto(false);
            }}
          >
            {v}
          </button>
        ))}
      </div>

      <div className="panel-view" key={view} role="tabpanel" aria-label={`${view} preview`}>
        {view === "Marketplace" && (
          <>
            <div className="filters" aria-hidden="true">
              <span className="on">Dry van</span>
              <span>Reefer</span>
              <span className="on">This week</span>
              <span>Full truckload</span>
            </div>
            {[...loads, { meta: ["Dry van", "Partial", "Pickup in 3 days"], tag: "Good fit", hot: true }].map((l, i) => (
              <div className="load" key={i}>
                <div className="load-row">
                  <Lane />
                  <span className={`tag${l.hot ? " hot" : ""}`}>{l.tag}</span>
                </div>
                <div className="meta">{l.meta.map((m) => <span key={m}>{m}</span>)}</div>
              </div>
            ))}
            <div className="panel-foot">
              <span>Saved search · alerts on</span>
              <span className="tag">3 new</span>
            </div>
          </>
        )}

        {view === "Dispatch" && (
          <div className="board">
            {board.map((c) => (
              <div className="col" key={c.name}>
                <h4>{c.name}</h4>
                {c.cards.map((card) => (
                  <div className="bcard" key={card.t}>
                    <strong>{card.t}</strong>
                    <span>{card.m}</span>
                    <em className={card.warn ? "warn" : ""}>{card.d}</em>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {view === "Assistant" && (
          <>
            {loads.map((l, i) => (
              <div className="load" key={i}>
                <div className="load-row">
                  <Lane />
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
          </>
        )}
      </div>
      <p className="note">Sample content for illustration only.</p>
    </div>
  );
}
