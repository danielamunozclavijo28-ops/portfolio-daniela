import type { Metadata } from "next";
import TusClasesCase from "@/components/pages/TusClasesCase";

export const metadata: Metadata = {
  title: "Tus Clases Particulares · Daniela Muñoz",
  description: "Helping tutors find students and act on it.",
};

export default function Page() {
  return <TusClasesCase />;
}
