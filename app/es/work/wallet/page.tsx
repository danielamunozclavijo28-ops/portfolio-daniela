import type { Metadata } from "next";
import WalletCase from "@/components/pages/es/WalletCase";

export const metadata: Metadata = {
  title: "Acreditta Wallet · Daniela Muñoz",
  description: "Un hogar sencillo y pensado para móvil para las credenciales obtenidas.",
};

export default function Page() {
  return <WalletCase />;
}
