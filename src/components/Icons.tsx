const common = {
  width: 28,
  height: 28,
  viewBox: "0 0 28 28",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function Icon({ name }: { name: string }) {
  switch (name) {
    case "search":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="7.5" />
          <path d="M18 18l7 7" />
        </svg>
      );
    case "board":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="22" height="20" rx="3" />
          <path d="M3 11h22M10 11v13" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M4 5h20v14H12l-6 4.5V19H4z" />
          <path d="M9 10.5h10M9 14h6" />
        </svg>
      );
  }
}

export function Check() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" className="check">
      <circle cx="12" cy="12" r="12" fill="#FFB400" />
      <path d="M6.5 12.5l3.5 3.5L17.5 8.5" fill="none" stroke="#12161C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}
