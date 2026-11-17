// @ts-nocheck
"use client";
// Generated from the portfolio design canvas. Interactive page.
import { Fragment, useRef, useState } from "react";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";

export default function ContactPage() {
  const [state, setSt] = useState({});
  const self = useRef({}).current;
  self.state = state;
  self.setState = (p) => setSt((s) => ({ ...s, ...p }));
  const v = function () {
    const st = this.state || {};
    const s = st.copy || 'idle';
    const email = 'danielamunoz5428@gmail.com';
    const done = (v) => { this.setState({ copy: v }); clearTimeout(this._t); this._t = setTimeout(() => this.setState({ copy: 'idle' }), 2600); };
    return {
      copyEmail: () => {
        try {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(email).then(() => done('ok'), () => done('fail'));
          } else { done('fail'); }
        } catch (e) { done('fail'); }
      },
      copyLabel: s === 'ok' ? 'Copied!' : 'Copy email',
      copyBg: s === 'ok' ? '#A02B5B' : '#34503E',
      copyNote: s === 'fail' ? 'Your browser blocked copying. Click the address above to select it.' : ''
    };
  }.call(self);

  return (
    <>
      <SiteHeader />
      <section style={{ padding: "72px clamp(20px, 5vw, 80px) 120px", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "clamp(40px, 6vw, 96px)", alignItems: "center", position: "relative" }}>
          <div style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "26px" }}>
            <p style={{ margin: "0", fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Contact</p>
            <h1 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(56px, 7vw, 112px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }}>
              Want to work{" "}
              <em style={{ color: "#B8336A" }}>together?</em>
            </h1>
            <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.7", color: "#4B524D", maxWidth: "560px" }}>I’m always interested in thoughtful products, ambitious ideas and opportunities to make digital experiences better.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", fontSize: "15px", color: "#4B524D" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                Barcelona, Spain
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#B8336A" }} aria-hidden="true" />
                Available for new opportunities
              </span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px", marginTop: "12px" }}>
              <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <span style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#F3D1DC", color: "#6E1A3D", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                </span>
                <span style={{ fontSize: "14px", color: "#4B524D" }}>Email</span>
                <strong style={{ fontSize: "18px", fontWeight: "600", color: "#34503E", wordBreak: "break-all", userSelect: "all" }}>danielamunoz5428@gmail.com</strong>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "6px" }}>
                  <button type="button" className="dm-btn" onClick={v.copyEmail} style={{ display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "44px", padding: "0 18px", borderRadius: "999px", border: "0", background: v.copyBg, color: "#F7F3EE", fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: "500", cursor: "pointer" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="9" y="9" width="11" height="11" rx="2" />
                      <path d="M5 15V6a2 2 0 0 1 2-2h9" />
                    </svg>
                    {v.copyLabel}
                  </button>
                  <a href="mailto:danielamunoz5428@gmail.com" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 18px", borderRadius: "999px", border: "1.5px solid #34503E", color: "#34503E", fontSize: "14px", fontWeight: "500" }}>Write an email →</a>
                </div>
                <span aria-live="polite" style={{ fontSize: "13px", color: "#4B524D" }}>{v.copyNote}</span>
              </div>
              <a href="https://www.linkedin.com/in/daniela-munoz28" style={{ background: "#FFFFFF", borderRadius: "24px", padding: "24px", display: "flex", flexDirection: "column", gap: "10px" }} target="_blank" rel="noopener noreferrer">
                <span style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#DDE7D7", color: "#34503E", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="3" />
                    <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
                  </svg>
                </span>
                <span style={{ fontSize: "14px", color: "#4B524D" }}>LinkedIn</span>
                <strong style={{ fontSize: "18px", fontWeight: "600", color: "#34503E" }}>daniela-munoz28</strong>
              </a>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
