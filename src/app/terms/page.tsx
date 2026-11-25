import LegalPage from "@/components/LegalPage";
import { termsPage as p } from "@/content/company";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(p.meta.title, p.meta.description, "/terms");

export default function Page() {
  return <LegalPage doc={p} other={{ label: "Read the privacy policy", href: "/privacy" }} />;
}
