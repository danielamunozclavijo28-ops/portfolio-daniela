"use client";

import { usePathname } from "next/navigation";
import { langOf } from "./i18n";

export default function SiteFooter({ hint }: { hint?: () => void }) {
  const es = langOf(usePathname()) === "es";
  return (
    <footer style={{ background: "#34503E", color: "#F7F3EE", padding: "28px clamp(20px, 5vw, 80px)", borderTop: "1px solid rgba(247,243,238,0.18)" }}>
      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
          fontSize: "14px",
        }}
      >
        <span style={{ fontFamily: "Fraunces, serif", fontSize: "22px" }}>
          Daniela <em>Muñoz</em>
        </span>
        <span style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          <a href="mailto:danielamunoz5428@gmail.com" style={{ color: "#F7F3EE" }}>
            danielamunoz5428@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/daniela-munoz28" style={{ color: "#F7F3EE" }} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </span>
        {hint ? (
          <button
            type="button"
            className="dm-btn"
            onClick={hint}
            style={{
              border: 0,
              background: "transparent",
              padding: "10px 0",
              minHeight: "44px",
              cursor: "pointer",
              color: "#F7F3EE",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "14px",
              textDecoration: "underline",
              textUnderlineOffset: "4px",
            }}
          >
            {es ? "Psst… no todos los puntos de esta página son decoración." : "Psst… not every dot on this page is just decoration."}
          </button>
        ) : (
          <span>{es ? "Diseñado en Barcelona · Hecho con curiosidad." : "Designed in Barcelona · Built with curiosity."}</span>
        )}
      </div>
    </footer>
  );
}
