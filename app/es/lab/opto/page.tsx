import type { Metadata } from "next";
import OptoCase from "@/components/pages/es/OptoCase";

export const metadata: Metadata = {
  title: "Opto · Daniela Muñoz",
  description: "Salir con amigos, sin la presión de beber.",
};

export default function Page() {
  return <OptoCase />;
}
