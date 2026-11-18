import type { Metadata } from "next";
import AboutPage from "@/components/pages/es/AboutPage";

export const metadata: Metadata = {
  title: "Sobre mí · Daniela Muñoz",
  description: "Diseñadora industrial de formación, diseñadora de producto en la práctica.",
};

export default function Page() {
  return <AboutPage />;
}
