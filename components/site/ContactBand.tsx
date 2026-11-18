"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { langOf, localize } from "./i18n";

const COPY = {
  en: {
    kicker: "Get in touch",
    lead: "Want to work",
    em: "together?",
    body: "I’m always interested in thoughtful products, ambitious ideas and opportunities to make digital experiences better.",
    cta: "Let’s talk →",
  },
  es: {
    kicker: "Contacto",
    lead: "¿Trabajamos",
    em: "juntos?",
    body: "Siempre me interesan los productos bien pensados, las ideas ambiciosas y las oportunidades de mejorar experiencias digitales.",
    cta: "Hablemos →",
  },
};

/** Splits text into letters for the staggered entrance (see globals.css). */
function Letters({ text, start }: { text: string; start: number }) {
  let i = start;
  return (
    <>
      {text.split(" ").map((word, w) => (
        <span key={w}>
          {w > 0 ? " " : ""}
          <span style={{ display: "inline-block", whiteSpace: "nowrap" }}>
            {Array.from(word).map((ch, c) => (
              <span key={c} className="dm-l" style={{ "--i": i++ } as CSSProperties}>
                {ch}
              </span>
            ))}
          </span>
        </span>
      ))}
    </>
  );
}

export default function ContactBand() {
  const lang = langOf(usePathname());
  const t = COPY[lang];
  const leadCount = t.lead.replace(/ /g, "").length;
  const pill = {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    minHeight: "52px",
    padding: "0 26px",
    borderRadius: "999px",
    border: "1.5px solid #F7F3EE",
    color: "#F7F3EE",
    fontSize: "15px",
    fontWeight: 500,
  } as const;

  return (
    <section style={{ background: "#34503E", color: "#F7F3EE", padding: "104px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "22px",
          position: "relative",
        }}
      >
        <p style={{ margin: 0, fontSize: "14px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#F7F3EE" }}>{t.kicker}</p>
        <h2
          data-anim="letters"
          aria-label={`${t.lead} ${t.em}`}
          style={{
            margin: 0,
            fontFamily: "Fraunces, serif",
            fontWeight: 400,
            fontSize: "clamp(52px, 6.6vw, 104px)",
            lineHeight: 1.04,
            letterSpacing: "-0.02em",
            color: "#F7F3EE",
          }}
        >
          <span aria-hidden="true">
            <Letters text={t.lead} start={0} />{" "}
            <em style={{ color: "#F3D1DC" }}>
              <Letters text={t.em} start={leadCount} />
            </em>
          </span>
        </h2>
        <p style={{ margin: 0, fontSize: "18px", lineHeight: 1.7, color: "#F7F3EE", maxWidth: "560px" }}>{t.body}</p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "14px", marginTop: "8px" }}>
          <Link href={localize("/contact", lang)} style={{ ...pill, padding: "0 28px", background: "#F7F3EE", color: "#1D2A22", border: 0 }}>
            {t.cta}
          </Link>
          <a href="mailto:danielamunoz5428@gmail.com" style={pill}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
            Email
          </a>
          <a href="https://www.linkedin.com/in/daniela-munoz28" style={pill} target="_blank" rel="noopener noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
