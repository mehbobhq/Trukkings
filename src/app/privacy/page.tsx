import LegalPage from "@/components/LegalPage";
import { privacyPage as p } from "@/content/company";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(p.meta.title, p.meta.description, "/privacy");

export default function Page() {
  return <LegalPage doc={p} other={{ label: "Read the terms of use", href: "/terms" }} />;
}
