import type { Metadata } from "next";
import LabPage from "@/components/pages/LabPage";

export const metadata: Metadata = {
  title: "Lab · Daniela Muñoz",
  description: "Academic and client projects beyond the brief.",
};

export default function Page() {
  return <LabPage />;
}
