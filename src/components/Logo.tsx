import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  const bg = light ? "#FFB400" : "#12161C";
  const fg = light ? "#12161C" : "#FFB400";
  return (
    <Link className={`logo${light ? " logo-light" : ""}`} href="/" aria-label="Trukkings home">
      <svg width="36" height="36" viewBox="0 0 64 64" aria-hidden="true">
        <rect width="64" height="64" rx="14" fill={bg} />
        <path d="M12 22h26v19H12z M38 28h8l7 7v6H38z" fill="none" stroke={fg} strokeWidth="4" strokeLinejoin="round" />
        <circle cx="21" cy="44" r="4.5" fill={fg} />
        <circle cx="45" cy="44" r="4.5" fill={fg} />
      </svg>
      <span>Trukkings</span>
    </Link>
  );
}
