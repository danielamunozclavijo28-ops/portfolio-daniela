import type { Metadata } from "next";
import AcredittaCase from "@/components/pages/es/AcredittaCase";

export const metadata: Metadata = {
  title: "Acreditta · Daniela Muñoz",
  description: "Diseñar una plataforma de credenciales desde cero, como única diseñadora.",
};

export default function Page() {
  return <AcredittaCase />;
}
