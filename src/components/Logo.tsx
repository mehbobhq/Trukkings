import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
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
    </Link>
  );
}
