import type { Metadata } from "next";
import ContactPage from "@/components/pages/es/ContactPage";

export const metadata: Metadata = {
  title: "Contacto · Daniela Muñoz",
  description: "Hablemos de diseño de producto, UX/UI y nuevas oportunidades.",
};

export default function Page() {
  return <ContactPage />;
}
