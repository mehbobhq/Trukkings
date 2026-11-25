import SolutionPage from "@/components/SolutionPage";
import { ownerOperators } from "@/content/solutions";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(ownerOperators.meta.title, ownerOperators.meta.description, "/solutions/owner-operators");

export default function Page() {
  return <SolutionPage s={ownerOperators} />;
}
