// @ts-nocheck
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const pathname = usePathname() || "/";
  const active = (href: string) => {
    const on = href === "/" ? pathname === "/" : pathname.startsWith(href);
    return on ? "2px solid #B8336A" : "2px solid transparent";
  };
  return (
    <header style={{ position: "sticky", top: "0", zIndex: 50, background: "#F7F3EE", padding: "14px clamp(20px, 5vw, 80px)", borderBottom: "1px solid rgba(52, 80, 62, 0.1)" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
        <Link href="/" style={{ fontFamily: "Fraunces, serif", fontSize: "24px", fontWeight: "500", color: "#34503E" }}>
          Daniela{" "}
          <em style={{ fontWeight: "400" }}>Muñoz</em>
        </Link>
        <nav style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "32px", fontSize: "15px", fontWeight: "500" }}>
          <Link href="/" style={{ padding: "6px 0", borderBottom: active("/") }}>Home</Link>
          <Link href="/work" style={{ padding: "6px 0", borderBottom: active("/work") }}>Work</Link>
          <Link href="/about" style={{ padding: "6px 0", borderBottom: active("/about") }}>About</Link>
          <Link href="/lab" style={{ padding: "6px 0", borderBottom: active("/lab") }}>Lab</Link>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 22px", border: "1.5px solid #34503E", borderRadius: "999px", color: "#34503E" }}>Let’s talk</Link>
        </nav>
      </div>
    </header>
  );
}
