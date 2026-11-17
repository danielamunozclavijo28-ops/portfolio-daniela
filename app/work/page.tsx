import type { Metadata } from "next";
import WorkPage from "@/components/pages/WorkPage";

export const metadata: Metadata = {
  title: "Work · Daniela Muñoz",
  description: "Case studies from real products: Acreditta, Tus Clases Particulares and Acreditta Wallet.",
};

export default function Page() {
  return <WorkPage />;
}
