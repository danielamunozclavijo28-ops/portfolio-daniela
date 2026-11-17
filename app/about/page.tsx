import type { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";

export const metadata: Metadata = {
  title: "About · Daniela Muñoz",
  description: "Industrial designer by training, product designer by practice.",
};

export default function Page() {
  return <AboutPage />;
}
