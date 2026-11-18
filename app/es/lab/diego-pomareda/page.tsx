import type { Metadata } from "next";
import DiegoCase from "@/components/pages/es/DiegoCase";

export const metadata: Metadata = {
  title: "Diego Pomareda · Daniela Muñoz",
  description: "Una web clara y transparente para un perfil público en Perú.",
};

export default function Page() {
  return <DiegoCase />;
}
