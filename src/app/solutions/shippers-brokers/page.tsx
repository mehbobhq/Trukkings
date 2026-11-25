import SolutionPage from "@/components/SolutionPage";
import { shippersBrokers } from "@/content/solutions";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(shippersBrokers.meta.title, shippersBrokers.meta.description, "/solutions/shippers-brokers");

export default function Page() {
  return <SolutionPage s={shippersBrokers} />;
}
