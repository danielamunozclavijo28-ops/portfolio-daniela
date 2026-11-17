import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact · Daniela Muñoz",
  description: "Let’s talk about product design, UX/UI and new opportunities.",
};

export default function Page() {
  return <ContactPage />;
}
