import type { Metadata } from "next";
import DiegoCase from "@/components/pages/DiegoCase";

export const metadata: Metadata = {
  title: "Diego Pomareda · Daniela Muñoz",
  description: "A clear, transparent website for a public profile in Peru.",
};

export default function Page() {
  return <DiegoCase />;
}
