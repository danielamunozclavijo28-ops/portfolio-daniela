"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { basePath, langOf, localize } from "./i18n";

const NAV = {
  en: [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/lab", label: "Lab" },
  ],
  es: [
    { href: "/", label: "Inicio" },
    { href: "/work", label: "Trabajo" },
    { href: "/about", label: "Sobre mí" },
    { href: "/lab", label: "Lab" },
  ],
};

export default function SiteHeader() {
  const pathname = usePathname() || "/";
  const lang = langOf(pathname);
  const base = basePath(pathname);
  const on = (href: string) => (href === "/" ? base === "/" : base.startsWith(href));

  const langLink = (target: "en" | "es", label: string, full: string) => (
    <Link
      href={localize(pathname, target)}
      hrefLang={target}
      lang={target}
      aria-label={full}
      aria-current={lang === target ? "true" : undefined}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "40px",
        minHeight: "36px",
        padding: "0 10px",
        borderRadius: "999px",
        fontSize: "13px",
        fontWeight: 600,
        letterSpacing: "0.04em",
        background: lang === target ? "#34503E" : "transparent",
        color: lang === target ? "#F7F3EE" : "#34503E",
      }}
    >
      {label}
    </Link>
  );

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "#F7F3EE",
        padding: "14px clamp(20px, 5vw, 80px)",
        borderBottom: "1px solid rgba(52, 80, 62, 0.1)",
      }}
    >
      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <Link href={localize("/", lang)} style={{ fontFamily: "Fraunces, serif", fontSize: "24px", fontWeight: 500, color: "#34503E" }}>
          Daniela <em style={{ fontWeight: 400 }}>Muñoz</em>
        </Link>
        <nav style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "28px", fontSize: "15px", fontWeight: 500 }}>
          {NAV[lang].map((item) => (
            <Link
              key={item.href}
              href={localize(item.href, lang)}
              style={{ padding: "6px 0", borderBottom: on(item.href) ? "2px solid #B8336A" : "2px solid transparent" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={localize("/contact", lang)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              minHeight: "44px",
              padding: "0 22px",
              border: "1.5px solid #34503E",
              borderRadius: "999px",
              color: "#34503E",
            }}
          >
            {lang === "es" ? "Hablemos" : "Let’s talk"}
          </Link>
          <span
            role="group"
            aria-label={lang === "es" ? "Idioma" : "Language"}
            style={{ display: "inline-flex", gap: "2px", padding: "3px", border: "1px solid rgba(52, 80, 62, 0.25)", borderRadius: "999px" }}
          >
            {langLink("en", "EN", "English")}
            {langLink("es", "ES", "Español")}
          </span>
        </nav>
      </div>
    </header>
  );
}
