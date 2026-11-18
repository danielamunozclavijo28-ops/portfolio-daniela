import type { Metadata } from "next";
import OptoCase from "@/components/pages/OptoCase";

export const metadata: Metadata = {
  title: "Opto · Daniela Muñoz",
  description: "Going out with friends, without the pressure to drink.",
};

export default function Page() {
  return <OptoCase />;
}
