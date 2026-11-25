/**
 * Global settings and navigation. Page copy lives in the other files in this folder.
 * No country or region is named anywhere on purpose.
 */

export const site = {
  name: "Trukkings",
  // Used by the contact form and email links. Change it once, here.
  contactEmail: "info@trukkings.com",
  // Set to your real domain when you deploy (used for sitemap and social previews).
  url: "https://trukkings.com",
  title: "Trukkings | Freight, run smarter",
  description:
    "Trukkings brings a freight marketplace, carrier operations software and an AI freight assistant into one platform for carriers, drivers, shippers and brokers.",
};

export type NavChild = { label: string; href: string; desc?: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const nav: NavItem[] = [
  {
    label: "Platform",
    href: "/platform",
    children: [
      { label: "Overview", href: "/platform", desc: "One load, one record" },
      { label: "Freight marketplace", href: "/marketplace", desc: "Find and post loads" },
      { label: "Operations & TMS", href: "/operations", desc: "Plan, dispatch and track" },
      { label: "AI assistant", href: "/ai-assistant", desc: "Answers from your own records" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Carriers & fleets", href: "/solutions/carriers", desc: "Keep trucks full and the operation in view" },
      { label: "Owner-operators & drivers", href: "/solutions/owner-operators", desc: "Find work, keep paperwork in order" },
      { label: "Shippers & brokers", href: "/solutions/shippers-brokers", desc: "Post freight, reach capable carriers" },
    ],
  },
  { label: "How it works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export const footerColumns: { title: string; links: NavChild[] }[] = [
  {
    title: "Platform",
    links: [
      { label: "Overview", href: "/platform" },
      { label: "Freight marketplace", href: "/marketplace" },
      { label: "Operations & TMS", href: "/operations" },
      { label: "AI assistant", href: "/ai-assistant" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Carriers & fleets", href: "/solutions/carriers" },
      { label: "Owner-operators & drivers", href: "/solutions/owner-operators" },
      { label: "Shippers & brokers", href: "/solutions/shippers-brokers" },
      { label: "How it works", href: "/how-it-works" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Partners & investors", href: "/partners" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export const allPaths = [
  "/",
  "/platform",
  "/marketplace",
  "/operations",
  "/ai-assistant",
  "/solutions",
  "/solutions/carriers",
  "/solutions/owner-operators",
  "/solutions/shippers-brokers",
  "/how-it-works",
  "/about",
  "/partners",
  "/faq",
  "/contact",
  "/privacy",
  "/terms",
];
