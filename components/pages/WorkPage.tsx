// @ts-nocheck
"use client";
// Generated from the portfolio design canvas. Interactive page.
import { Fragment, useRef, useState } from "react";
import Link from "next/link";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import ContactBand from "@/components/site/ContactBand";

export default function WorkPage() {
  const [state, setSt] = useState({});
  const self = useRef({}).current;
  self.state = state;
  self.setState = (p) => setSt((s) => ({ ...s, ...p }));
  const v = function () {
    const st = this.state || {};
    const f = st.filter || 0;
    const tabs = (list, cur, key) => list.map((label, i) => ({ label,
      pressed: i === cur ? 'true' : 'false',
      bg: i === cur ? '#34503E' : 'transparent',
      fg: i === cur ? '#F7F3EE' : '#34503E',
      pick: () => this.setState({ [key]: i }) }));
    const tags = [['B2B SaaS'], ['Marketplace'], ['Mobile']];
    const names = ["All", "B2B SaaS", "Marketplace", "Mobile"];
    const show = tags.map(t => f === 0 || t.indexOf(names[f]) !== -1);
    const n = show.filter(Boolean).length;
    return {
      filters: tabs(names, f, 'filter'),
      showAcr: show[0], showTus: show[1], showWal: show[2],
      countLabel: n + (n === 1 ? ' case study' : ' case studies')
    };
  }.call(self);

  return (
    <>
      <SiteHeader />
      <section style={{ padding: "64px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "22px", maxWidth: "920px" }}>
            <p style={{ margin: "0", fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Work</p>
            <h1 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(48px, 5.8vw, 92px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }}>
              Product design for{" "}
              <em>B2B SaaS and marketplaces.</em>
            </h1>
            <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.7", color: "#4B524D", maxWidth: "680px" }}>Each case shows the problem, my role, the decisions I made and what shipped. Real screens, real constraints.</p>
          </div>
        </div>
      </section>
      <section style={{ padding: "24px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "14px", fontWeight: "500", color: "#4B524D", marginRight: "6px" }}>Filter by</span>
            {v.filters.map((t, i) => (
              <Fragment key={i}>
                <button type="button" className="dm-tab dm-btn" onClick={t.pick} aria-pressed={t.pressed} style={{ minHeight: "44px", padding: "0 20px", borderRadius: "999px", border: "1.5px solid #34503E", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontSize: "15px", fontWeight: "500", background: t.bg, color: t.fg }}>{t.label}</button>
              </Fragment>
            ))}
            <span aria-live="polite" style={{ fontSize: "14px", color: "#4B524D", marginLeft: "6px" }}>{v.countLabel}</span>
          </div>
          {v.showAcr && (
            <>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(32px, 5vw, 72px)", alignItems: "center" }} data-reveal="">
                <Link href="/work/acreditta" style={{ flex: "1 1 480px", minWidth: "0", display: "block" }}>
                  <div style={{ position: "relative", background: "#DDE7D7", borderRadius: "36px", padding: "clamp(28px, 5vw, 72px)", overflow: "hidden", minHeight: "auto" }}>
                    <div style={{ position: "relative", padding: "4% 14% 2% 4%" }}>
                      <div style={{ position: "relative" }}>
                        <div style={{ position: "relative", background: "#1E211F", borderRadius: "20px 20px 6px 6px", padding: "2.2% 2.2% 2.8%", boxShadow: "0 40px 80px rgba(29,42,34,0.22)" }}>
                          <span style={{ position: "absolute", left: "50%", top: "0.9%", width: "6px", height: "6px", marginLeft: "-3px", borderRadius: "50%", background: "#3A3E3B" }} aria-hidden="true" />
                          <img src="/images/v2/acr-dashboard.jpg" alt="Acreditta dashboard" style={{ width: "100%", aspectRatio: "16 / 10", objectFit: "cover", objectPosition: "top left", display: "block", borderRadius: "4px", background: "#FFFFFF" }} />
                        </div>
                        <div style={{ height: "14px", margin: "0 -6%", background: "#D9D4CC", borderRadius: "2px 2px 16px 16px", boxShadow: "inset 0 3px 0 #EEEAE4" }} aria-hidden="true" />
                      </div>
                      <div style={{ position: "absolute", right: "18%", top: "-3%", width: "34%", zIndex: "2", background: "#FFFFFF", borderRadius: "16px", padding: "8px", boxShadow: "0 24px 50px rgba(29,42,34,0.22)" }}>
                        <img src="/images/v2/det-kpi.jpg" alt="Credentials accepted metric" style={{ width: "100%", height: "auto", display: "block", borderRadius: "10px" }} />
                      </div>
                      <div style={{ position: "absolute", right: "2%", bottom: "0", width: "20%", zIndex: "3" }}>
                        <div style={{ position: "relative", width: "100%", boxSizing: "border-box", borderRadius: "30px", padding: "7px", background: "#1E211F", boxShadow: "0 30px 60px rgba(29,42,34,0.28)" }}>
                          <img src="/images/v2/w-emitida.jpg" alt="Acreditta Wallet" style={{ width: "100%", height: "auto", display: "block", borderRadius: "23px", background: "#FFFFFF" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <div style={{ flex: "1 1 400px", minWidth: "0", display: "flex", flexDirection: "column", gap: "18px" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "16px" }}>
                    <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "48px", lineHeight: "1", color: "#B8336A" }}>01</span>
                    <span style={{ fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>B2B SaaS · 0 → 1</span>
                  </div>
                  <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(34px, 3.4vw, 50px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }} data-fill="">
                    <span className="dm-f" style={{ "--i": "0" }}>Acreditta:</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "1" }}>a</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "2" }}>credentials</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "3" }}>platform,</span>
                    {" "}
                    <em>
                      <span className="dm-f" style={{ "--i": "4" }}>from</span>
                      {" "}
                      <span className="dm-f" style={{ "--i": "5" }}>zero.</span>
                    </em>
                  </h2>
                  <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#4B524D" }}>
                    As the only designer, I designed Acreditta’s platform from a requirements document and grew it into an ecosystem: badges, certificates and professional degrees; individual and bulk issuing; tracking and analytics; multi-organization admin; LMS integrations.
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "16px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#4B524D" }}>Role</span>
                      <span style={{ fontSize: "15px", fontWeight: "600", color: "#34503E" }}>Sole Product &amp; UX/UI Designer</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#4B524D" }}>Team</span>
                      <span style={{ fontSize: "15px", fontWeight: "600", color: "#34503E" }}>1 PM + engineering</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#4B524D" }}>Timeline</span>
                      <span style={{ fontSize: "15px", fontWeight: "600", color: "#34503E" }}>Jul 2021 – Apr 2024</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#4B524D" }}>Focus</span>
                      <span style={{ fontSize: "15px", fontWeight: "600", color: "#34503E" }}>Discovery · UX · UI · Handoff</span>
                    </div>
                  </div>
                  <div style={{ marginTop: "6px" }}>
                    <Link href="/work/acreditta" style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "52px", padding: "0 28px", borderRadius: "999px", background: "#34503E", color: "#F7F3EE", fontSize: "15px", fontWeight: "500" }}>Read case study →</Link>
                  </div>
                </div>
              </div>
            </>
          )}
          {v.showTus && (
            <>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(32px, 5vw, 72px)", alignItems: "center" }} data-reveal="">
                <div style={{ flex: "1 1 400px", minWidth: "0", display: "flex", flexDirection: "column", gap: "18px" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "16px" }}>
                    <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "48px", lineHeight: "1", color: "#B8336A" }}>02</span>
                    <span style={{ fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Marketplace · Growth</span>
                  </div>
                  <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(34px, 3.4vw, 50px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }} data-fill="">
                    <span className="dm-f" style={{ "--i": "0" }}>Tus</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "1" }}>Clases</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "2" }}>Particulares:</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "3" }}>helping</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "4" }}>tutors</span>
                    {" "}
                    <em>
                      <span className="dm-f" style={{ "--i": "5" }}>find</span>
                      {" "}
                      <span className="dm-f" style={{ "--i": "6" }}>students.</span>
                    </em>
                  </h2>
                  <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#4B524D" }}>
                    Designer responsible for the tutor area of a two-sided marketplace. Student matching tied to a paid plan, response-rate insights that nudge action, and a post-signup flow that tells new tutors what to do next.
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "16px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#4B524D" }}>Role</span>
                      <span style={{ fontSize: "15px", fontWeight: "600", color: "#34503E" }}>Product &amp; UX/UI Designer</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#4B524D" }}>Team</span>
                      <span style={{ fontSize: "15px", fontWeight: "600", color: "#34503E" }}>PM + 3 engineers</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#4B524D" }}>Timeline</span>
                      <span style={{ fontSize: "15px", fontWeight: "600", color: "#34503E" }}>May – Oct 2025</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#4B524D" }}>Focus</span>
                      <span style={{ fontSize: "15px", fontWeight: "600", color: "#34503E" }}>Features · A/B/C · Handoff</span>
                    </div>
                  </div>
                  <div style={{ marginTop: "6px" }}>
                    <Link href="/work/tus-clases-particulares" style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "52px", padding: "0 28px", borderRadius: "999px", background: "#34503E", color: "#F7F3EE", fontSize: "15px", fontWeight: "500" }}>Read case study →</Link>
                  </div>
                </div>
                <Link href="/work/tus-clases-particulares" style={{ flex: "1 1 480px", minWidth: "0", display: "block" }}>
                  <div style={{ position: "relative", background: "#F3D1DC", borderRadius: "36px", padding: "clamp(28px, 5vw, 72px)", overflow: "hidden", minHeight: "auto" }}>
                    <div style={{ position: "relative", padding: "4% 14% 2% 4%" }}>
                      <div style={{ position: "relative" }}>
                        <div style={{ position: "relative", background: "#1E211F", borderRadius: "20px 20px 6px 6px", padding: "2.2% 2.2% 2.8%", boxShadow: "0 40px 80px rgba(29,42,34,0.22)" }}>
                          <span style={{ position: "absolute", left: "50%", top: "0.9%", width: "6px", height: "6px", marginLeft: "-3px", borderRadius: "50%", background: "#3A3E3B" }} aria-hidden="true" />
                          <img src="/images/v2/tus-ratio-1.jpg" alt="Tutor inbox with response metrics" style={{ width: "100%", aspectRatio: "16 / 10", objectFit: "cover", objectPosition: "top left", display: "block", borderRadius: "4px", background: "#FFFFFF" }} />
                        </div>
                        <div style={{ height: "14px", margin: "0 -6%", background: "#D9D4CC", borderRadius: "2px 2px 16px 16px", boxShadow: "inset 0 3px 0 #EEEAE4" }} aria-hidden="true" />
                      </div>
                      <div style={{ position: "absolute", right: "2%", bottom: "0", width: "20%", zIndex: "3" }}>
                        <div style={{ position: "relative", width: "100%", boxSizing: "border-box", borderRadius: "30px", padding: "7px", background: "#1E211F", boxShadow: "0 30px 60px rgba(29,42,34,0.28)" }}>
                          <img src="/images/v2/tus-ratio-m1.jpg" alt="Mobile response metrics" style={{ width: "100%", height: "auto", display: "block", borderRadius: "23px", background: "#FFFFFF" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </>
          )}
          {v.showWal && (
            <>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(32px, 5vw, 72px)", alignItems: "center" }} data-reveal="">
                <Link href="/work/wallet" style={{ flex: "1 1 480px", minWidth: "0", display: "block" }}>
                  <div style={{ position: "relative", background: "#DDE7D7", borderRadius: "36px", padding: "clamp(24px, 4vw, 48px)", overflow: "hidden", minHeight: "auto" }}>
                    <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "14px", alignItems: "center" }}>
                      <img src="/images/v2/w-mk-trio-c.webp" alt="Acreditta Wallet: badge received, my badges and credential detail" style={{ width: "100%", maxWidth: "100%", height: "auto", display: "block" }} />
                    </figure>
                  </div>
                </Link>
                <div style={{ flex: "1 1 400px", minWidth: "0", display: "flex", flexDirection: "column", gap: "18px" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "16px" }}>
                    <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "48px", lineHeight: "1", color: "#B8336A" }}>03</span>
                    <span style={{ fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Mobile · PWA</span>
                  </div>
                  <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(34px, 3.4vw, 50px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }} data-fill="">
                    <span className="dm-f" style={{ "--i": "0" }}>Acreditta</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "1" }}>Wallet:</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "2" }}>a</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "3" }}>home</span>
                    {" "}
                    <em>
                      <span className="dm-f" style={{ "--i": "4" }}>for</span>
                      {" "}
                      <span className="dm-f" style={{ "--i": "5" }}>earned</span>
                      {" "}
                      <span className="dm-f" style={{ "--i": "6" }}>credentials.</span>
                    </em>
                  </h2>
                  <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#4B524D" }}>
                    The recipient side of Acreditta: accept, view and share credentials from your phone. Scoped as a PWA so the team could ship fast while the B2B platform stayed the priority.
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "16px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#4B524D" }}>Role</span>
                      <span style={{ fontSize: "15px", fontWeight: "600", color: "#34503E" }}>Product &amp; UX/UI Designer</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#4B524D" }}>Platform</span>
                      <span style={{ fontSize: "15px", fontWeight: "600", color: "#34503E" }}>Progressive Web App</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#4B524D" }}>Timeline</span>
                      <span style={{ fontSize: "15px", fontWeight: "600", color: "#34503E" }}>2021 – 2024</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#4B524D" }}>Focus</span>
                      <span style={{ fontSize: "15px", fontWeight: "600", color: "#34503E" }}>Mobile UX · Scoping</span>
                    </div>
                  </div>
                  <div style={{ marginTop: "6px" }}>
                    <Link href="/work/wallet" style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "52px", padding: "0 28px", borderRadius: "999px", background: "#34503E", color: "#F7F3EE", fontSize: "15px", fontWeight: "500" }}>Read case study →</Link>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
      <section style={{ background: "#A9C0A0", padding: "96px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden", marginTop: "72px" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "flex-end" }}>
            <div style={{ flex: "999 1 520px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <p style={{ margin: "0", fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Also</p>
              <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(40px, 4.4vw, 68px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }} data-fill="">
                <span className="dm-f" style={{ "--i": "0" }}>Visual</span>
                {" "}
                <span className="dm-f" style={{ "--i": "1" }}>craft</span>
                {" "}
                <em>
                  <span className="dm-f" style={{ "--i": "2" }}>and</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "3" }}>side</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "4" }}>projects.</span>
                </em>
              </h2>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "20px" }} data-reveal="">
            <div style={{ background: "#F7F3EE", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#F3D1DC", color: "#6E1A3D", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z" />
                  <path d="M4 21V5" />
                </svg>
              </span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "22px", color: "#34503E" }}>Exploration Lab</strong>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>My Master’s final project at ELISAVA, a team brand &amp; e-commerce project and a client website.</span>
            </div>
            <div style={{ background: "#F7F3EE", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#F3D1DC", color: "#6E1A3D", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />
                </svg>
              </span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "22px", color: "#34503E" }}>Brand &amp; visual design</strong>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>Designing visual identities, websites and 200+ digital badges since 2019, for organizations across Latin America.</span>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
            <Link href="/lab" style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "52px", padding: "0 28px", borderRadius: "999px", background: "#34503E", color: "#F7F3EE", fontSize: "15px", fontWeight: "500" }}>Visit the Lab →</Link>
          </div>
        </div>
      </section>
      <ContactBand />
      <SiteFooter />
    </>
  );
}
