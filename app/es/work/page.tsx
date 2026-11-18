import type { Metadata } from "next";
import WorkPage from "@/components/pages/es/WorkPage";

export const metadata: Metadata = {
  title: "Trabajo · Daniela Muñoz",
  description: "Casos de estudio de productos reales: Acreditta, Tus Clases Particulares y Acreditta Wallet.",
};

export default function Page() {
  return <WorkPage />;
}
