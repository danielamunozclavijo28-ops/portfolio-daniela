import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";

export const metadata: Metadata = {
  title: "Daniela Muñoz · Product Designer",
  description: "Product Designer · UX/UI in Barcelona. B2B SaaS and marketplace products, designed end to end.",
};

export default function Page() {
  return <HomePage />;
}
