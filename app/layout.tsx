
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "cal-sans";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daniela Muñoz Clavijo | Product Designer",
  description:
    "Portfolio de Daniela Muñoz Clavijo, Product Designer especializada en UX/UI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={workSans.variable}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
