import type { Metadata } from "next";
import TusClasesCase from "@/components/pages/es/TusClasesCase";

export const metadata: Metadata = {
  title: "Tus Clases Particulares · Daniela Muñoz",
  description: "Ayudar a los profesores a encontrar alumnos y a actuar.",
};

export default function Page() {
  return <TusClasesCase />;
}
