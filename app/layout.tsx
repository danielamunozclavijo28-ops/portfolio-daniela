import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Effects from "@/components/site/Effects";

export const metadata: Metadata = {
  title: "Daniela Muñoz · Product Designer",
  description:
    "Product Designer · UX/UI in Barcelona. B2B SaaS and marketplace products, designed end to end.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap"
        />
      </head>
      <body>
        <div
          style={{
            width: "100%",
            background: "#F7F3EE",
            color: "#1D2A22",
            fontFamily: "'DM Sans', sans-serif",
            display: "flex",
            flexDirection: "column",
            overflowX: "clip",
          }}
        >
          {children}
        </div>
        <Effects />
        <Analytics />
      </body>
    </html>
  );
}
