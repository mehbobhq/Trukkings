import type { Metadata, Viewport } from "next";
import "@fontsource-variable/archivo/wdth.css";
import "@fontsource-variable/instrument-sans/wght.css";
<<<<<<< HEAD
import "@fontsource-variable/jetbrains-mono/wght.css";
import "./globals.css";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
=======
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
>>>>>>> 3eb25cd183f4fa59313fd3296435b812108e7679
import { site } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  twitter: { card: "summary", title: site.title, description: site.description },
};

export const viewport: Viewport = {
<<<<<<< HEAD
  themeColor: "#080D14",
=======
  themeColor: "#F4F1EA",
>>>>>>> 3eb25cd183f4fa59313fd3296435b812108e7679
  width: "device-width",
  initialScale: 1,
};

<<<<<<< HEAD
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", name: site.name, url: site.url, email: site.contactEmail, description: site.description },
    { "@type": "WebSite", name: site.name, url: site.url },
  ],
};

=======
>>>>>>> 3eb25cd183f4fa59313fd3296435b812108e7679
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
<<<<<<< HEAD
        <div className="announce" role="region" aria-label="Announcement">
          <div className="wrap">
            <span className="pulse" aria-hidden="true" />
            <span>Early access is open: we&apos;re onboarding a small number of carriers, drivers, shippers and brokers.</span>
            <Link href="/contact">Request access</Link>
          </div>
        </div>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Reveal />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
=======
        <Header />
        <main id="main">{children}</main>
        <Footer />
>>>>>>> 3eb25cd183f4fa59313fd3296435b812108e7679
      </body>
    </html>
  );
}
