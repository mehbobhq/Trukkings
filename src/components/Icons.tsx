const common = {
<<<<<<< HEAD
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
=======
  width: 28,
  height: 28,
  viewBox: "0 0 28 28",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
>>>>>>> 3eb25cd183f4fa59313fd3296435b812108e7679
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function Icon({ name }: { name: string }) {
  switch (name) {
    case "search":
      return (
        <svg {...common}>
<<<<<<< HEAD
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="M15.5 15.5L21 21" />
=======
          <circle cx="12" cy="12" r="7.5" />
          <path d="M18 18l7 7" />
>>>>>>> 3eb25cd183f4fa59313fd3296435b812108e7679
        </svg>
      );
    case "board":
      return (
        <svg {...common}>
<<<<<<< HEAD
          <rect x="3" y="4" width="18" height="16" rx="3" />
          <path d="M3 10h18M9 10v10" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "eye":
      return (
        <svg {...common}>
          <path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z" />
          <circle cx="12" cy="12" r="2.8" />
        </svg>
      );
    case "history":
      return (
        <svg {...common}>
          <path d="M3.5 12a8.5 8.5 0 1 0 2.6-6.1L3.5 8.5" />
          <path d="M3.5 4v4.5H8M12 8v4.5l3 2" />
        </svg>
      );
    case "users":
      return (
        <svg {...common}>
          <circle cx="9" cy="8.5" r="3.5" />
          <path d="M2.5 20c.6-3.6 3.1-5.5 6.5-5.5s5.9 1.9 6.5 5.5" />
          <path d="M16 5.2a3.5 3.5 0 0 1 0 6.6M18 14.8c2 .6 3.2 2.3 3.5 5.2" />
        </svg>
      );
    case "lock":
      return (
        <svg {...common}>
          <rect x="4.5" y="10.5" width="15" height="10" rx="2.5" />
          <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5M12 14.5v2.5" />
        </svg>
      );
    case "doc":
      return (
        <svg {...common}>
          <path d="M6 3h8l4 4v14H6z" />
          <path d="M14 3v4h4M9 12h6M9 16h6" />
        </svg>
      );
    case "link":
      return (
        <svg {...common}>
          <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1" />
          <path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" />
        </svg>
      );
    case "bolt":
      return (
        <svg {...common}>
          <path d="M13 2.5L5 13.5h6l-1 8 8-11h-6z" />
        </svg>
      );
    case "route":
      return (
        <svg {...common}>
          <circle cx="6" cy="18" r="2.5" />
          <circle cx="18" cy="6" r="2.5" />
          <path d="M8.5 18H15a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h6.5" />
=======
          <rect x="3" y="4" width="22" height="20" rx="3" />
          <path d="M3 11h22M10 11v13" />
>>>>>>> 3eb25cd183f4fa59313fd3296435b812108e7679
        </svg>
      );
    default:
      return (
        <svg {...common}>
<<<<<<< HEAD
          <path d="M4 5h16v11H11l-5 4v-4H4z" />
          <path d="M8 9.5h8M8 12.5h5" />
=======
          <path d="M4 5h20v14H12l-6 4.5V19H4z" />
          <path d="M9 10.5h10M9 14h6" />
>>>>>>> 3eb25cd183f4fa59313fd3296435b812108e7679
        </svg>
      );
  }
}

export function Check() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" className="check">
<<<<<<< HEAD
      <rect width="24" height="24" rx="7" fill="#FF7939" />
      <path d="M7 12.5l3.2 3.2L17 9" fill="none" stroke="#0A0F16" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
=======
      <circle cx="12" cy="12" r="12" fill="#FFB400" />
      <path d="M6.5 12.5l3.5 3.5L17.5 8.5" fill="none" stroke="#12161C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
>>>>>>> 3eb25cd183f4fa59313fd3296435b812108e7679
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
