import type { Metadata } from "next";
import HomePage from "@/components/pages/es/HomePage";

export const metadata: Metadata = {
  title: "Daniela Muñoz · Product Designer",
  description: "Product Designer · UX/UI en Barcelona. Productos B2B SaaS y marketplaces, diseñados de principio a fin.",
};

export default function Page() {
  return <HomePage />;
}
