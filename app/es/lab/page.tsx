import type { Metadata } from "next";
import LabPage from "@/components/pages/es/LabPage";

export const metadata: Metadata = {
  title: "Lab · Daniela Muñoz",
  description: "Proyectos académicos y para clientes más allá del brief.",
};

export default function Page() {
  return <LabPage />;
}
