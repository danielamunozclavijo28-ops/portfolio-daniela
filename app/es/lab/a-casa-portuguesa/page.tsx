import type { Metadata } from "next";
import CasaCase from "@/components/pages/es/CasaCase";

export const metadata: Metadata = {
  title: "A Casa Portuguesa · Daniela Muñoz",
  description: "No solo una tienda: una forma de visitar Portugal desde Barcelona.",
};

export default function Page() {
  return <CasaCase />;
}
