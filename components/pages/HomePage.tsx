// @ts-nocheck
"use client";
// Generated from the portfolio design canvas. Interactive page.
import { Fragment, useRef, useState } from "react";
import Link from "next/link";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import ContactBand from "@/components/site/ContactBand";

export default function HomePage() {
  const [state, setSt] = useState({});
  const self = useRef({}).current;
  self.state = state;
  self.setState = (p) => setSt((s) => ({ ...s, ...p }));
  const v = function () {
    const st = this.state || {};
    const egg = st.egg || 'closed';
    const step = st.step || 0;
    const STEPS = [["01", "Understand", "What are we solving, and for whom?", "I start by listening: stakeholders, requirements, the people who will use it. I ask a lot of questions before drawing anything.", "At Acreditta I started from a requirements document from the stakeholders and turned it into the first version of the platform."], ["02", "Explore", "What do we already know?", "Existing data, user behaviour and what the team already learned. Interviews and surveys fill the gaps.", "I used Hotjar to see how organizations actually used the platform and reported what I found to engineering."], ["03", "Define", "What should we focus on, and what should we leave out?", "I prioritize with product so the team works on what users need now. Research also decides what not to build.", "Focus groups showed credential collections weren’t a priority yet, so we paused the module and focused elsewhere."], ["04", "Design", "How could this work?", "Flows, wireframes and UI, built on a shared component library so the product stays consistent as it grows.", "I built Acreditta’s component library on Material Design and designed every flow, from issuing to reports."], ["05", "Validate", "Does it make sense to users and the business?", "I test ideas with users and with data: interviews, focus groups and experiments.", "At Tus Clases Particulares I designed A/B/C tests for the Black Friday campaign."], ["06", "Iterate", "What do we ship now, what later?", "I scope with engineering so a first version ships, and move the rest into follow-up user stories.", "When a design wasn’t feasible in time, I sat down with the developers and redesigned it into a version that could ship."]];
    const steps = STEPS.map((s, i) => ({
      n: s[0], title: s[1],
      pressed: i === step ? 'true' : 'false',
      bg: i === step ? '#34503E' : '#FFFFFF',
      fg: i === step ? '#F7F3EE' : '#34503E',
      num: i === step ? '#F3D1DC' : '#B8336A',
      pick: () => this.setState({ step: i })
    }));
    const c = STEPS[step];
    const bloom = egg === 'accepted' || !!st.bloomed;
    const hero = st.hero || 0;
    const tabs = (list, cur, key) => list.map((label, i) => ({ label,
      pressed: i === cur ? 'true' : 'false',
      bg: i === cur ? '#34503E' : 'transparent',
      fg: i === cur ? '#F7F3EE' : '#34503E',
      pick: () => this.setState({ [key]: i }) }));
    const CAPS = ["Acreditta \u00b7 B2B SaaS platform and its Wallet", "Tus Clases Particulares \u00b7 tutor inbox and response metrics", "Acreditta Wallet \u00b7 mobile PWA"];
    return {
      steps,
      cur: { n: c[0], title: c[1], q: c[2], what: c[3], ex: c[4] },
      prev: () => this.setState({ step: (step + STEPS.length - 1) % STEPS.length }),
      next: () => this.setState({ step: (step + 1) % STEPS.length }),
      openEgg: () => this.setState({ egg: st.bloomed ? 'accepted' : 'issued', hint: false }),
      acceptEgg: () => this.setState({ egg: 'accepted', bloomed: true }),
      closeEgg: () => this.setState({ egg: 'closed', hint: false }),
      heroTabs: tabs(["Acreditta", "Tus Clases", "Wallet"], hero, 'hero'),
      hero0: hero === 0, hero1: hero === 1, hero2: hero === 2,
      heroCaption: CAPS[hero],
      dotClass: st.hint ? 'dm-dot dm-dot-loud' : 'dm-dot',
      showHint: () => {
        this.setState({ hint: false });
        setTimeout(() => this.setState({ hint: true }), 30);
        try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch (e) { window.scrollTo(0, 0); }
        setTimeout(() => { const d = document.querySelector('.dm-egg'); if (d) d.focus({ preventScroll: true }); }, 600);
      },
      eggVisible: egg !== 'closed',
      eggIssued: egg === 'issued',
      eggAccepted: egg === 'accepted',
      heroEm: bloom ? '#B8336A' : '#34503E',
      heroStage: bloom ? '#F3D1DC' : '#DDE7D7',
      stripe: bloom ? '#B8336A' : '#34503E'
    };
  }.call(self);

  return (
    <>
      <SiteHeader />
      <section style={{ padding: "64px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(40px, 6vw, 96px)", alignItems: "center" }}>
            <div style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "26px" }}>
              <div style={{ position: "relative" }}>
                <p style={{ margin: "0", display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>
                  <button type="button" className="dm-egg" onClick={v.openEgg} aria-label="A small detail" style={{ width: "44px", height: "44px", margin: "-18px -8px -18px -18px", padding: "0", border: "0", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span className={v.dotClass} style={{ display: "block", width: "8px", height: "8px", borderRadius: "50%", background: "#B8336A", transition: "transform .2s ease" }} />
                  </button>
                  Product Designer · UX/UI · Barcelona
                </p>
                {v.eggVisible && (
                  <>
                    <div className="dm-card" role="dialog" aria-label="A badge for you" style={{ position: "absolute", left: "0", top: "44px", zIndex: "30", width: "min(400px, calc(100vw - 40px))", boxSizing: "border-box", background: "#FFFFFF", borderRadius: "28px", padding: "26px", boxShadow: "0 30px 70px rgba(29,42,34,0.25)", display: "flex", flexDirection: "column", gap: "18px", textTransform: "none", letterSpacing: "0" }}>
                      <button type="button" onClick={v.closeEgg} aria-label="Close" style={{ position: "absolute", right: "12px", top: "12px", width: "44px", height: "44px", border: "0", borderRadius: "50%", background: "transparent", color: "#4B524D", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                          <path d="M6 6l12 12M18 6L6 18" />
                        </svg>
                      </button>
                      <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
                        <svg width="96" height="96" viewBox="0 0 96 96" role="img" aria-label="Detail Spotter badge" style={{ flex: "0 0 auto" }}>
                          <circle cx="48" cy="48" r="46" fill="#34503E" />
                          <circle cx="48" cy="48" r="38" fill="none" stroke="#F3D1DC" strokeWidth="1.5" strokeDasharray="2 4" />
                          <circle cx="48" cy="40" r="13" fill="none" stroke="#F7F3EE" strokeWidth="2.4" />
                          <path d="M57.5 49.5L66 58" stroke="#F7F3EE" strokeWidth="3" strokeLinecap="round" />
                          <circle cx="48" cy="40" r="3.4" fill="#B8336A" />
                          <text x="48" y="74" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="8" fontWeight="600" letterSpacing="1.2" fill="#F7F3EE">DETAIL SPOTTER</text>
                        </svg>
                        <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingRight: "30px" }}>
                          <span style={{ alignSelf: "flex-start", padding: "4px 12px", borderRadius: "999px", background: "#F3D1DC", color: "#6E1A3D", fontSize: "12px", fontWeight: "600" }}>New credential</span>
                          <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "24px", lineHeight: "1.15", color: "#34503E" }}>Detail Spotter</strong>
                          <span style={{ fontSize: "13px", color: "#4B524D" }}>Issued by Daniela Muñoz</span>
                        </div>
                      </div>
                      {v.eggIssued && (
                        <>
                          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                            <p style={{ margin: "0", fontFamily: "Fraunces, serif", fontSize: "22px", lineHeight: "1.3", color: "#34503E" }}>
                              You’ve been issued{" "}
                              <em style={{ color: "#B8336A" }}>a badge!</em>
                            </p>
                            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>
                              Most people scroll past this little dot. Noticing small things is a big part of how I design. Apparently it’s also how you look at portfolios.
                            </p>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                              <button type="button" onClick={v.acceptEgg} style={{ display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "46px", padding: "0 22px", border: "0", borderRadius: "999px", background: "#34503E", color: "#F7F3EE", fontFamily: "'DM Sans', sans-serif", fontSize: "15px", fontWeight: "500", cursor: "pointer" }}>Accept badge</button>
                              <button type="button" onClick={v.closeEgg} style={{ display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "46px", padding: "0 20px", border: "1.5px solid #34503E", borderRadius: "999px", background: "transparent", color: "#34503E", fontFamily: "'DM Sans', sans-serif", fontSize: "15px", fontWeight: "500", cursor: "pointer" }}>Not now</button>
                            </div>
                          </div>
                        </>
                      )}
                      {v.eggAccepted && (
                        <>
                          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                            <p style={{ margin: "0", display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", fontWeight: "600", color: "#34503E" }}>
                              <span style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#DDE7D7", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M5 12l5 5 9-10" />
                                </svg>
                              </span>
                              Badge accepted
                            </p>
                            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>Quiet at first, color once there’s trust. So the page just got a little more color. Shall we talk?</p>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "46px", padding: "0 22px", border: "0", borderRadius: "999px", background: "#34503E", color: "#F7F3EE", fontFamily: "'DM Sans', sans-serif", fontSize: "15px", fontWeight: "500", cursor: "pointer", background: "#A02B5B", textDecoration: "none" }}>Let’s talk →</Link>
                              <button type="button" onClick={v.closeEgg} style={{ display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "46px", padding: "0 20px", border: "1.5px solid #34503E", borderRadius: "999px", background: "transparent", color: "#34503E", fontFamily: "'DM Sans', sans-serif", fontSize: "15px", fontWeight: "500", cursor: "pointer" }}>Keep exploring</button>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </>
                )}
              </div>
              <h1 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(44px, 5.2vw, 84px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }} data-anim="words">
                <span className="dm-w" style={{ "--i": "0" }}>I</span>
                {" "}
                <span className="dm-w" style={{ "--i": "1" }}>design</span>
                {" "}
                <span className="dm-w" style={{ "--i": "2" }}>digital</span>
                {" "}
                <span className="dm-w" style={{ "--i": "3" }}>products</span>
                {" "}
                <span className="dm-w" style={{ "--i": "4" }}>end</span>
                {" "}
                <span className="dm-w" style={{ "--i": "5" }}>to</span>
                {" "}
                <span className="dm-w" style={{ "--i": "6" }}>end,</span>
                {" "}
                <em style={{ color: v.heroEm, transition: "color .6s ease" }}>
                  <span className="dm-w" style={{ "--i": "7" }}>from</span>
                  {" "}
                  <span className="dm-w" style={{ "--i": "8" }}>the</span>
                  {" "}
                  <span className="dm-w" style={{ "--i": "9" }}>first</span>
                  {" "}
                  <span className="dm-w" style={{ "--i": "10" }}>question</span>
                  {" "}
                  <span className="dm-w" style={{ "--i": "11" }}>to</span>
                  {" "}
                  <span className="dm-w" style={{ "--i": "12" }}>the</span>
                  {" "}
                  <span className="dm-w" style={{ "--i": "13" }}>shipped</span>
                  {" "}
                  <span className="dm-w" style={{ "--i": "14" }}>feature.</span>
                </em>
              </h1>
              <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.7", color: "#4B524D", maxWidth: "620px" }}>
                3+ years designing B2B SaaS and marketplace products, 7+ years in digital design. I was the sole designer of a digital-credentials platform used by organizations across Latin America, and I owned the tutor experience of a two-sided marketplace in Spain.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px" }}>
                <Link href="/work" style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "52px", padding: "0 28px", borderRadius: "999px", background: "#34503E", color: "#F7F3EE", fontSize: "15px", fontWeight: "500" }}>View selected work →</Link>
                <a href="/documents/daniela-munoz-cv.pdf" style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "52px", padding: "0 26px", borderRadius: "999px", border: "1.5px solid #34503E", color: "#34503E", fontSize: "15px", fontWeight: "500" }} target="_blank" rel="noopener noreferrer">Download CV</a>
              </div>
              <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#4B524D" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                Based in Barcelona · Available for new opportunities
              </span>
            </div>
            <figure style={{ flex: "1 1 460px", maxWidth: "620px", margin: "0", display: "flex", flexDirection: "column", gap: "18px" }}>
              {v.hero0 && (
                <>
                  <div style={{ position: "relative", background: v.heroStage, borderRadius: "36px", padding: "clamp(28px, 5vw, 72px)", overflow: "hidden", minHeight: "auto" }}>
                    <div style={{ position: "relative", padding: "4% 14% 2% 4%" }}>
                      <div style={{ position: "relative" }}>
                        <div style={{ position: "relative", background: "#1E211F", borderRadius: "20px 20px 6px 6px", padding: "2.2% 2.2% 2.8%", boxShadow: "0 40px 80px rgba(29,42,34,0.22)" }}>
                          <span style={{ position: "absolute", left: "50%", top: "0.9%", width: "6px", height: "6px", marginLeft: "-3px", borderRadius: "50%", background: "#3A3E3B" }} aria-hidden="true" />
                          <img src="/images/v2/acr-dashboard.jpg" alt="Acreditta dashboard I designed" style={{ width: "100%", aspectRatio: "16 / 10", objectFit: "cover", objectPosition: "top left", display: "block", borderRadius: "4px", background: "#FFFFFF" }} />
                        </div>
                        <div style={{ height: "14px", margin: "0 -6%", background: "#D9D4CC", borderRadius: "2px 2px 16px 16px", boxShadow: "inset 0 3px 0 #EEEAE4" }} aria-hidden="true" />
                      </div>
                      <div style={{ position: "absolute", left: "-2%", top: "4%", width: "26%", zIndex: "2", background: "#FFFFFF", borderRadius: "16px", padding: "8px", boxShadow: "0 24px 50px rgba(29,42,34,0.22)" }}>
                        <img src="/images/v2/det-template.jpg" alt="Badge template card from Acreditta" style={{ width: "100%", height: "auto", display: "block", borderRadius: "10px" }} />
                      </div>
                      <div style={{ position: "absolute", right: "2%", bottom: "0", width: "20%", zIndex: "3" }}>
                        <div style={{ position: "relative", width: "100%", boxSizing: "border-box", borderRadius: "30px", padding: "7px", background: "#1E211F", boxShadow: "0 30px 60px rgba(29,42,34,0.28)" }}>
                          <img src="/images/v2/w-emitida.jpg" alt="Acreditta Wallet: badge received" style={{ width: "100%", height: "auto", display: "block", borderRadius: "23px", background: "#FFFFFF" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {v.hero1 && (
                <>
                  <div style={{ position: "relative", background: v.heroStage, borderRadius: "36px", padding: "clamp(28px, 5vw, 72px)", overflow: "hidden", minHeight: "auto" }}>
                    <div style={{ position: "relative", padding: "4% 14% 2% 4%" }}>
                      <div style={{ position: "relative" }}>
                        <div style={{ position: "relative", background: "#1E211F", borderRadius: "20px 20px 6px 6px", padding: "2.2% 2.2% 2.8%", boxShadow: "0 40px 80px rgba(29,42,34,0.22)" }}>
                          <span style={{ position: "absolute", left: "50%", top: "0.9%", width: "6px", height: "6px", marginLeft: "-3px", borderRadius: "50%", background: "#3A3E3B" }} aria-hidden="true" />
                          <img src="/images/v2/tus-ratio-1.jpg" alt="Tus Clases Particulares tutor inbox with response metrics" style={{ width: "100%", aspectRatio: "16 / 10", objectFit: "cover", objectPosition: "top left", display: "block", borderRadius: "4px", background: "#FFFFFF" }} />
                        </div>
                        <div style={{ height: "14px", margin: "0 -6%", background: "#D9D4CC", borderRadius: "2px 2px 16px 16px", boxShadow: "inset 0 3px 0 #EEEAE4" }} aria-hidden="true" />
                      </div>
                      <div style={{ position: "absolute", right: "2%", bottom: "0", width: "20%", zIndex: "3" }}>
                        <div style={{ position: "relative", width: "100%", boxSizing: "border-box", borderRadius: "30px", padding: "7px", background: "#1E211F", boxShadow: "0 30px 60px rgba(29,42,34,0.28)" }}>
                          <img src="/images/v2/tus-ratio-m1.jpg" alt="Tus Clases Particulares mobile response metrics" style={{ width: "100%", height: "auto", display: "block", borderRadius: "23px", background: "#FFFFFF" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {v.hero2 && (
                <>
                  <div style={{ position: "relative", background: v.heroStage, borderRadius: "36px", padding: "clamp(24px, 4vw, 48px)", overflow: "hidden", minHeight: "auto" }}>
                    <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "14px", alignItems: "center" }}>
                      <img src="/images/v2/w-mk-trio-b.webp" alt="Acreditta Wallet screens: badge received, my badges and credential detail" style={{ width: "100%", maxWidth: "100%", height: "auto", display: "block" }} />
                    </figure>
                  </div>
                </>
              )}
              <div role="group" aria-label="Choose a project" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px" }}>
                {v.heroTabs.map((t, i) => (
                  <Fragment key={i}>
                    <button type="button" className="dm-tab dm-btn" onClick={t.pick} aria-pressed={t.pressed} style={{ minHeight: "44px", padding: "0 20px", borderRadius: "999px", border: "1.5px solid #34503E", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontSize: "15px", fontWeight: "500", background: t.bg, color: t.fg }}>{t.label}</button>
                  </Fragment>
                ))}
              </div>
              <figcaption style={{ fontSize: "14px", color: "#4B524D", textAlign: "center" }}>{v.heroCaption}</figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section style={{ padding: "8px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "28px" }} data-reveal="">
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "16px", borderTop: "1.5px solid #34503E" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(24px, 2.2vw, 32px)", lineHeight: "1.15", color: "#34503E" }}>Sole designer, 0 → 1</span>
              <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#4B524D" }}>Designed a B2B SaaS platform from scratch and evolved it for almost 3 years.</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "16px", borderTop: "1.5px solid #34503E" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(24px, 2.2vw, 32px)", lineHeight: "1.15", color: "#34503E" }}>Discovery to handoff</span>
              <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#4B524D" }}>Research, flows, UI, component library and developer handoff.</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "16px", borderTop: "1.5px solid #34503E" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(24px, 2.2vw, 32px)", lineHeight: "1.15", color: "#34503E" }}>Data-informed</span>
              <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#4B524D" }}>Interviews, focus groups, Hotjar and A/B/C tests to decide what to build.</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "16px", borderTop: "1.5px solid #34503E" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(24px, 2.2vw, 32px)", lineHeight: "1.15", color: "#34503E" }}>Visual craft</span>
              <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#4B524D" }}>7+ years in visual and digital design, including 200+ digital badges for organizations.</span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <p style={{ margin: "0", fontSize: "13px", color: "#4B524D" }}>Some of the organizations that issued digital badges I designed at Acreditta</p>
            <div className="dm-marquee" role="img" aria-label="Some of the organizations that issued digital badges I designed at Acreditta: Adidas, Nutresa, Bayer, ICONTEC, Tecmilenio, Tec de Monterrey, AIESEC, FIAD, Cámara de Comercio de Cali, MoodleMoot México, Universidad BCI, ANUIES." style={{ overflow: "hidden", padding: "4px 0" }}>
              <div className="dm-track" aria-hidden="true" style={{ display: "flex", gap: "28px", width: "max-content", fontSize: "15px", fontWeight: "500", color: "#4B524D" }}>
                <span style={{ display: "inline-flex", gap: "28px" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "28px" }}>
                    Adidas
                    <span style={{ color: "#B8336A" }}>·</span>
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "28px" }}>
                    Nutresa
                    <span style={{ color: "#B8336A" }}>·</span>
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "28px" }}>
                    Bayer
                    <span style={{ color: "#B8336A" }}>·</span>
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "28px" }}>
                    ICONTEC
                    <span style={{ color: "#B8336A" }}>·</span>
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "28px" }}>
                    Tecmilenio
                    <span style={{ color: "#B8336A" }}>·</span>
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "28px" }}>
                    Tec de Monterrey
                    <span style={{ color: "#B8336A" }}>·</span>
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "28px" }}>
                    AIESEC
                    <span style={{ color: "#B8336A" }}>·</span>
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "28px" }}>
                    FIAD
                    <span style={{ color: "#B8336A" }}>·</span>
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "28px" }}>
                    Cámara de Comercio de Cali
                    <span style={{ color: "#B8336A" }}>·</span>
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "28px" }}>
                    MoodleMoot México
                    <span style={{ color: "#B8336A" }}>·</span>
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "28px" }}>
                    Universidad BCI
                    <span style={{ color: "#B8336A" }}>·</span>
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "28px" }}>
                    ANUIES
                    <span style={{ color: "#B8336A" }}>·</span>
                  </span>
                </span>
                <span style={{ display: "inline-flex", gap: "28px" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "28px" }}>
                    Adidas
                    <span style={{ color: "#B8336A" }}>·</span>
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "28px" }}>
                    Nutresa
                    <span style={{ color: "#B8336A" }}>·</span>
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "28px" }}>
                    Bayer
                    <span style={{ color: "#B8336A" }}>·</span>
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "28px" }}>
                    ICONTEC
                    <span style={{ color: "#B8336A" }}>·</span>
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "28px" }}>
                    Tecmilenio
                    <span style={{ color: "#B8336A" }}>·</span>
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "28px" }}>
                    Tec de Monterrey
                    <span style={{ color: "#B8336A" }}>·</span>
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "28px" }}>
                    AIESEC
                    <span style={{ color: "#B8336A" }}>·</span>
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "28px" }}>
                    FIAD
                    <span style={{ color: "#B8336A" }}>·</span>
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "28px" }}>
                    Cámara de Comercio de Cali
                    <span style={{ color: "#B8336A" }}>·</span>
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "28px" }}>
                    MoodleMoot México
                    <span style={{ color: "#B8336A" }}>·</span>
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "28px" }}>
                    Universidad BCI
                    <span style={{ color: "#B8336A" }}>·</span>
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "28px" }}>
                    ANUIES
                    <span style={{ color: "#B8336A" }}>·</span>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: "#34503E", padding: "96px clamp(20px, 5vw, 80px)", color: "#F7F3EE", position: "relative", overflow: "hidden", marginTop: "88px" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <p style={{ margin: "0", fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#CFDCCB" }}>Selected work</p>
              <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(40px, 4.4vw, 68px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#F7F3EE" }} data-fill="">
                <span className="dm-f" style={{ "--i": "0" }}>Case</span>
                {" "}
                <span className="dm-f" style={{ "--i": "1" }}>studies</span>
                {" "}
                <em>
                  <span className="dm-f" style={{ "--i": "2" }}>from</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "3" }}>real</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "4" }}>products.</span>
                </em>
                <sup className="dm-count" aria-label="3 projects">03</sup>
              </h2>
            </div>
            <Link href="/work" style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "52px", padding: "0 26px", borderRadius: "999px", border: "1.5px solid #F7F3EE", color: "#F7F3EE", fontSize: "15px", fontWeight: "500" }}>View all work →</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "28px" }} data-reveal="">
            <Link href="/work/acreditta" className="dm-lift" style={{ background: "#F7F3EE", color: "#1D2A22", borderRadius: "24px", padding: "14px 14px 26px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ height: "250px", overflow: "hidden", borderRadius: "18px" }}>
                <div style={{ position: "relative", background: "#DDE7D7", borderRadius: "36px", padding: "28px 34px 22px", overflow: "hidden", minHeight: "auto" }}>
                  <div style={{ position: "relative" }}>
                    <div style={{ position: "relative", background: "#1E211F", borderRadius: "20px 20px 6px 6px", padding: "2.2% 2.2% 2.8%", boxShadow: "0 40px 80px rgba(29,42,34,0.22)" }}>
                      <span style={{ position: "absolute", left: "50%", top: "0.9%", width: "6px", height: "6px", marginLeft: "-3px", borderRadius: "50%", background: "#3A3E3B" }} aria-hidden="true" />
                      <img src="/images/v2/acr-dashboard.jpg" alt="Acreditta dashboard" style={{ width: "100%", aspectRatio: "16 / 10", objectFit: "cover", objectPosition: "top left", display: "block", borderRadius: "4px", background: "#FFFFFF" }} />
                    </div>
                    <div style={{ height: "14px", margin: "0 -6%", background: "#D9D4CC", borderRadius: "2px 2px 16px 16px", boxShadow: "inset 0 3px 0 #EEEAE4" }} aria-hidden="true" />
                  </div>
                </div>
              </div>
              <div style={{ padding: "0 10px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "#6E1A3D" }}>B2B SaaS · Sole designer · 2021–2024</span>
                <span style={{ fontFamily: "Fraunces, serif", fontSize: "28px", fontWeight: "500", color: "#34503E" }}>Acreditta →</span>
                <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>
                  A digital-credentials platform designed from scratch: badges, certificates and professional degrees, with bulk issuing, analytics, multi-organization admin and LMS integrations.
                </span>
              </div>
            </Link>
            <Link href="/work/tus-clases-particulares" className="dm-lift" style={{ background: "#F7F3EE", color: "#1D2A22", borderRadius: "24px", padding: "14px 14px 26px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ height: "250px", overflow: "hidden", borderRadius: "18px" }}>
                <div style={{ position: "relative", background: "#F3D1DC", borderRadius: "36px", padding: "28px 34px 22px", overflow: "hidden", minHeight: "auto" }}>
                  <div style={{ position: "relative" }}>
                    <div style={{ position: "relative", background: "#1E211F", borderRadius: "20px 20px 6px 6px", padding: "2.2% 2.2% 2.8%", boxShadow: "0 40px 80px rgba(29,42,34,0.22)" }}>
                      <span style={{ position: "absolute", left: "50%", top: "0.9%", width: "6px", height: "6px", marginLeft: "-3px", borderRadius: "50%", background: "#3A3E3B" }} aria-hidden="true" />
                      <img src="/images/v2/tus-alumnos-1.jpg" alt="Tus Clases Particulares tutor inbox" style={{ width: "100%", aspectRatio: "16 / 10", objectFit: "cover", objectPosition: "top left", display: "block", borderRadius: "4px", background: "#FFFFFF" }} />
                    </div>
                    <div style={{ height: "14px", margin: "0 -6%", background: "#D9D4CC", borderRadius: "2px 2px 16px 16px", boxShadow: "inset 0 3px 0 #EEEAE4" }} aria-hidden="true" />
                  </div>
                </div>
              </div>
              <div style={{ padding: "0 10px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "#6E1A3D" }}>Marketplace · Tutor area · 2025</span>
                <span style={{ fontFamily: "Fraunces, serif", fontSize: "28px", fontWeight: "500", color: "#34503E" }}>Tus Clases Particulares →</span>
                <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>
                  Owned the tutor experience of a two-sided marketplace: student matching, response-rate insights and post-signup activation, all shipped to production.
                </span>
              </div>
            </Link>
            <Link href="/work/wallet" className="dm-lift" style={{ background: "#F7F3EE", color: "#1D2A22", borderRadius: "24px", padding: "14px 14px 26px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ height: "250px", overflow: "hidden", borderRadius: "18px" }}>
                <div style={{ position: "relative", background: "#DDE7D7", borderRadius: "36px", padding: "22px 26px", overflow: "hidden", minHeight: "auto" }}>
                  <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "14px", alignItems: "center" }}>
                    <img src="/images/v2/w-mk-trio-c.webp" alt="Acreditta Wallet screens" style={{ width: "100%", maxWidth: "100%", height: "auto", display: "block" }} />
                  </figure>
                </div>
              </div>
              <div style={{ padding: "0 10px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "#6E1A3D" }}>Mobile PWA · 2021–2024</span>
                <span style={{ fontFamily: "Fraunces, serif", fontSize: "28px", fontWeight: "500", color: "#34503E" }}>Acreditta Wallet →</span>
                <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>A lean, mobile-first wallet where people accept, manage and share the credentials they earn.</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section style={{ padding: "96px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ maxWidth: "980px" }}>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "18px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontSize: "64px", lineHeight: "0.5", color: "#B8336A" }} aria-hidden="true">“</span>
              <blockquote style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(20px, 1.8vw, 26px)", lineHeight: "1.45", color: "#34503E" }}>
                Daniela’s user-centred approach, her ability to turn insights into solutions using qualitative and quantitative data, and her attention to detail in turning complex flows into simple ones, through a good mix of UX and UI, had a direct impact on improving our users’ experience across several key metrics.
              </blockquote>
              <figcaption style={{ fontSize: "15px", color: "#4B524D" }}>
                <strong style={{ color: "#34503E", fontWeight: "600" }}>Oliver Morgade</strong>
                {" "}· Head of Product at Tusmedia (Tus Clases Particulares), my direct manager
                <span style={{ display: "block", fontSize: "13px", marginTop: "4px" }}>Translated from Spanish · LinkedIn recommendation</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section style={{ padding: "96px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "flex-end" }}>
            <div style={{ flex: "999 1 520px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <p style={{ margin: "0", fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>How I work</p>
              <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(40px, 4.4vw, 68px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }} data-fill="">
                <span className="dm-f" style={{ "--i": "0" }}>It</span>
                {" "}
                <span className="dm-f" style={{ "--i": "1" }}>usually</span>
                {" "}
                <span className="dm-f" style={{ "--i": "2" }}>starts</span>
                {" "}
                <span className="dm-f" style={{ "--i": "3" }}>with</span>
                {" "}
                <em style={{ color: "#B8336A" }}>
                  <span className="dm-f" style={{ "--i": "4" }}>a</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "5" }}>lot</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "6" }}>of</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "7" }}>questions.</span>
                </em>
              </h2>
            </div>
            <div style={{ flex: "1 1 340px" }}>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#4B524D" }}>
                I’m a careful listener first, and that habit turns out to be very useful for research. From there I move between discovery, flows, wireframes, UI and testing, and I scope with product and engineering so the first version ships and the rest follows.
              </p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "12px" }}>
            {v.steps.map((item, i) => (
              <Fragment key={i}>
                <button type="button" className="dm-step" onClick={item.pick} aria-pressed={item.pressed} style={{ textAlign: "left", border: "0", cursor: "pointer", borderRadius: "22px", padding: "22px", minHeight: "120px", display: "flex", flexDirection: "column", gap: "10px", fontFamily: "'DM Sans', sans-serif", background: item.bg }}>
                  <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "34px", lineHeight: "1", color: item.num }}>{item.n}</span>
                  <strong style={{ fontSize: "17px", fontWeight: "600", color: item.fg }}>{item.title}</strong>
                </button>
              </Fragment>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "0", background: "#FFFFFF", borderRadius: "28px", overflow: "hidden" }} aria-live="polite">
            <div style={{ padding: "clamp(26px, 3vw, 40px)", display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.12em", textTransform: "uppercase", color: "#A02B5B" }}>Step {v.cur.n} · {v.cur.title}</span>
              <p style={{ margin: "0", fontFamily: "Fraunces, serif", fontSize: "clamp(26px, 2.4vw, 34px)", lineHeight: "1.2", color: "#34503E" }}>{v.cur.q}</p>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#4B524D" }}>{v.cur.what}</p>
            </div>
            <div style={{ padding: "clamp(26px, 3vw, 40px)", background: "#DDE7D7", display: "flex", flexDirection: "column", justifyContent: "center", gap: "12px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.12em", textTransform: "uppercase", color: "#34503E" }}>From my work</span>
              <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#1D2A22" }}>{v.cur.ex}</p>
              <div style={{ display: "flex", gap: "10px", marginTop: "6px" }}>
                <button type="button" onClick={v.prev} aria-label="Previous step" style={{ width: "44px", height: "44px", borderRadius: "50%", border: "1.5px solid #34503E", background: "transparent", color: "#34503E", fontSize: "18px", cursor: "pointer" }}>←</button>
                <button type="button" onClick={v.next} aria-label="Next step" style={{ width: "44px", height: "44px", borderRadius: "50%", border: "0", background: "#34503E", color: "#F7F3EE", fontSize: "18px", cursor: "pointer" }}>→</button>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "center", justifyContent: "space-between", background: "#DDE7D7", borderRadius: "24px", padding: "24px 32px" }}>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#1D2A22" }}>
              I use{" "}
              <strong>AI</strong>
              {" "}to speed up research synthesis, exploration, UX copy and prototyping. Product decisions and design judgment stay human-led.
            </p>
          </div>
        </div>
      </section>
      <section style={{ background: "#A9C0A0", padding: "96px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "flex-end" }}>
            <div style={{ flex: "999 1 520px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <p style={{ margin: "0", fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Exploration Lab</p>
              <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(40px, 4.4vw, 68px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }} data-fill="">
                <span className="dm-f" style={{ "--i": "0" }}>Beyond</span>
                {" "}
                <em>
                  <span className="dm-f" style={{ "--i": "1" }}>the</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "2" }}>brief.</span>
                </em>
                <sup className="dm-count" aria-label="3 projects">03</sup>
              </h2>
            </div>
            <div style={{ flex: "1 1 340px" }}>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#4B524D" }}>A team project in brand and e-commerce, my Master’s final project at ELISAVA, and a website for a real client.</p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }} data-reveal="">
            <div style={{ background: "#F7F3EE", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600", color: "#6E1A3D" }}>Team project · Brand &amp; e-commerce</span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "24px", color: "#34503E" }}>A Casa Portuguesa</strong>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>Visual identity and online shop for a Portuguese local business in Barcelona.</span>
            </div>
            <div style={{ background: "#F7F3EE", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600", color: "#6E1A3D" }}>Master’s final project · Mobile</span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "24px", color: "#34503E" }}>Opto</strong>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>An app that helps people become more aware of their drinking habits.</span>
            </div>
            <div style={{ background: "#F7F3EE", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600", color: "#6E1A3D" }}>Client project · Web</span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "24px", color: "#34503E" }}>Diego Pomareda</strong>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>A website to present a public profile and proposals clearly.</span>
            </div>
          </div>
          <div>
            <Link href="/lab" style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "52px", padding: "0 28px", borderRadius: "999px", background: "#34503E", color: "#F7F3EE", fontSize: "15px", fontWeight: "500" }}>Visit the Lab →</Link>
          </div>
        </div>
      </section>
      <ContactBand />
      <SiteFooter hint={v.showHint} />
    </>
  );
}
