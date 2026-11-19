"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { langOf } from "./i18n";

type Item = { id: string; label: string };

/** Shorter labels for the pill, so it stays on one line. */
const SHORT: Record<string, string> = {
  "Students without a tutor": "Students without a tutor",
  "After publishing an ad": "After publishing",
  "Ad status for academies": "Ads for academies",
  "Alumnos sin profesor": "Alumnos sin profesor",
  "Después de publicar un anuncio": "Después de publicar",
  "Estado de anuncios para academias": "Anuncios para academias",
};

function shortLabel(label: string) {
  const bare = label.replace(/^(Feature|Funcionalidad)\s*·\s*/, "");
  return SHORT[bare] ?? bare;
}

/** Sections left out of the pill on specific cases (they stay on the page). */
function hiddenIn(path: string) {
  if (path.includes("tus-clases")) return new Set(["Response metrics", "Métricas de respuesta", "Learnings", "Aprendizajes"]);
  if (path.includes("wallet")) return new Set(["Learnings", "Aprendizajes"]);
  return new Set<string>();
}

/** Floating pill with the sections of a case study. Desktop only. */
export default function CaseNav() {
  const es = langOf(usePathname()) === "es";
  const [items, setItems] = useState<Item[]>([]);
  const [active, setActive] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-case-section]"));
    const path = window.location.pathname;
    setItems(
      sections
        .map((s) => ({ id: s.id, label: shortLabel(s.dataset.caseSection || "") }))
        .filter((it) => !hiddenIn(path).has(it.label)),
    );

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));

    const onScroll = () => {
      const nearEnd = window.innerHeight + window.scrollY > document.body.scrollHeight - 700;
      setVisible(window.scrollY > 500 && !nearEnd);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (!items.length) return null;

  return (
    <nav
      aria-label={es ? "Secciones del caso" : "Case study sections"}
      className="dm-casenav"
      style={{
        position: "fixed",
        left: "50%",
        bottom: "24px",
        zIndex: 40,
        transform: `translate(-50%, ${visible ? "0" : "140%"})`,
        opacity: visible ? 1 : 0,
        transition: "transform .4s ease, opacity .4s ease",
        background: "#1D2A22",
        borderRadius: "999px",
        padding: "6px",
        display: "flex",
        gap: "2px",
        maxWidth: "calc(100vw - 32px)",
        overflowX: "auto",
        boxShadow: "0 16px 40px rgba(29,42,34,0.25)",
      }}
    >
      {items.map((it) => (
        <a
          key={it.id}
          href={`#${it.id}`}
          aria-current={active === it.id ? "true" : undefined}
          style={{
            whiteSpace: "nowrap",
            padding: "10px 16px",
            borderRadius: "999px",
            fontSize: "13px",
            fontWeight: 500,
            color: active === it.id ? "#1D2A22" : "#F7F3EE",
            background: active === it.id ? "#F3D1DC" : "transparent",
            transition: "background .25s ease, color .25s ease",
          }}
        >
          {it.label}
        </a>
      ))}
    </nav>
  );
}
