import type { Metadata } from "next";
import CasaCase from "@/components/pages/CasaCase";

export const metadata: Metadata = {
  title: "A Casa Portuguesa · Daniela Muñoz",
  description: "Not just a shop: a way to visit Portugal from Barcelona.",
};

export default function Page() {
  return <CasaCase />;
}
