import SolutionPage from "@/components/SolutionPage";
import { carriers } from "@/content/solutions";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(carriers.meta.title, carriers.meta.description, "/solutions/carriers");

export default function Page() {
  return <SolutionPage s={carriers} />;
}
