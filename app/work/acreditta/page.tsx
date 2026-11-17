import type { Metadata } from "next";
import AcredittaCase from "@/components/pages/AcredittaCase";

export const metadata: Metadata = {
  title: "Acreditta · Daniela Muñoz",
  description: "Designing a credentials platform from zero, as the only designer.",
};

export default function Page() {
  return <AcredittaCase />;
}
