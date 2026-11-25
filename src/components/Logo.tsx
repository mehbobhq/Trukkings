import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
<<<<<<< HEAD
  return (
    <Link className={`logo${light ? " logo-light" : ""}`} href="/" aria-label="Trukkings home">
      <svg width="38" height="38" viewBox="0 0 64 64" aria-hidden="true">
        <path fill="#ff7939" d="M5 9H59L48 22H37L20 54H5L22 22H5Z" />
        <path fill={light ? "#ffffff" : "#0a0f16"} d="M40 29H54L40 54H26Z" />
        <circle cx="56" cy="9" r="4" fill="#26c6a2" />
      </svg>
      <span>
        trukkings<i aria-hidden="true">.</i>
      </span>
=======
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
>>>>>>> 3eb25cd183f4fa59313fd3296435b812108e7679
    </Link>
  );
}
