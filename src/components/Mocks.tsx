import { lifecycleStages } from "@/content/home";

/* Illustrative product visuals. All content is sample content. */

export function ChatMock({
  messages,
  caption = "Illustrative conversation",
}: {
  messages: { from: string; text: string; sources?: string[] }[];
  caption?: string;
}) {
  return (
    <div className="chat" role="img" aria-label="Illustrative example conversation with the Trukkings assistant">
      {messages.map((m, i) => (
        <div key={i} className={m.from === "you" ? "msg u" : "msg b"}>
          {m.from === "ai" && <b>Trukkings AI</b>}
          {m.text}
          {m.sources && (
            <span className="srcs">
              {m.sources.map((s) => (
                <i key={s}>{s}</i>
              ))}
            </span>
          )}
        </div>
      ))}
      <p className="note left">{caption}</p>
    </div>
  );
}

export function MarketplaceMock() {
  const rows = [
    { a: "Origin", b: "Destination", meta: ["Dry van", "Full truckload", "Pickup tomorrow"], tag: "Good fit", hot: true },
    { a: "Origin", b: "Destination", meta: ["Dry van", "Partial", "Pickup in 2 days"], tag: "Good fit", hot: true },
    { a: "Origin", b: "Destination", meta: ["Reefer", "Full truckload", "Pickup in 3 days"], tag: "Review", hot: false },
  ];
  return (
    <div className="panel" role="img" aria-label="Illustrative preview of marketplace search results">
      <div className="panel-top">
        <span className="dots" aria-hidden="true"><i /><i /><i /></span>
        <span>Illustrative preview</span>
      </div>
      <div className="filters" aria-hidden="true">
        <span className="on">Dry van</span>
        <span>Reefer</span>
        <span>Flatbed</span>
        <span className="on">This week</span>
        <span>Full truckload</span>
      </div>
      {rows.map((r, i) => (
        <div className="load" key={i}>
          <div className="load-row">
            <div className="lane">
              <span>{r.a}</span>
              <span className="lane-line" />
              <span>{r.b}</span>
            </div>
            <span className={`tag${r.hot ? " hot" : ""}`}>{r.tag}</span>
          </div>
          <div className="meta">{r.meta.map((m) => <span key={m}>{m}</span>)}</div>
        </div>
      ))}
      <div className="panel-foot" aria-hidden="true">
        <span>Saved search · alerts on</span>
        <span className="tag">3 new</span>
      </div>
      <p className="note">Sample content for illustration only.</p>
    </div>
  );
}

export function BoardMock() {
  const cols = [
    { name: "Booked", cards: [{ t: "Load A", m: "Dry van", d: "Unassigned" }] },
    { name: "Assigned", cards: [{ t: "Load B", m: "Driver A · Truck 12", d: "Docs 1/3" }] },
    { name: "In transit", cards: [{ t: "Load C", m: "Driver B · Truck 7", d: "On time" }, { t: "Load D", m: "Driver C · Truck 3", d: "On time" }] },
    { name: "Delivered", cards: [{ t: "Load E", m: "Driver D · Truck 9", d: "Docs complete" }] },
  ];
  return (
    <div className="panel" role="img" aria-label="Illustrative preview of the dispatch board">
      <div className="panel-top">
        <span className="dots" aria-hidden="true"><i /><i /><i /></span>
        <span>Illustrative preview</span>
      </div>
      <div className="board" aria-hidden="true">
        {cols.map((c) => (
          <div className="col" key={c.name}>
            <h4>{c.name}</h4>
            {c.cards.map((card) => (
              <div className="bcard" key={card.t}>
                <strong>{card.t}</strong>
                <span>{card.m}</span>
                <em className={card.d.startsWith("Docs 1") || card.d === "Unassigned" ? "warn" : ""}>{card.d}</em>
              </div>
            ))}
          </div>
        ))}
      </div>
      <p className="note">Sample content for illustration only.</p>
    </div>
  );
}

export function Lifecycle() {
  return (
    <div className="lifecycle">
      <ol className="lc-nodes">
        {lifecycleStages.map((s, i) => (
          <li key={s.name} className="lc-node">
            <span className="lc-dot">{i + 1}</span>
            <h3>{s.name}</h3>
            <p>{s.text}</p>
            <em className="lc-part">{s.part}</em>
          </li>
        ))}
      </ol>
      <div className="lc-bars" aria-hidden="true">
        <span className="bar bar-market">Freight marketplace</span>
        <span className="bar bar-ops">Operations & TMS</span>
        <span className="bar bar-ai">AI assistant · across every stage</span>
      </div>
    </div>
  );
}
