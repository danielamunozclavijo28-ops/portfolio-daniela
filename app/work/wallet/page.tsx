import type { Metadata } from "next";
import WalletCase from "@/components/pages/WalletCase";

export const metadata: Metadata = {
  title: "Acreditta Wallet · Daniela Muñoz",
  description: "A lean, mobile-first home for earned credentials.",
};

export default function Page() {
  return <WalletCase />;
}
