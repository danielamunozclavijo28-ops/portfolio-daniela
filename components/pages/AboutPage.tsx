// @ts-nocheck
"use client";
// Generated from the portfolio design canvas. Interactive page.
import { Fragment, useRef, useState } from "react";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import ContactBand from "@/components/site/ContactBand";

export default function AboutPage() {
  const [state, setSt] = useState({});
  const self = useRef({}).current;
  self.state = state;
  self.setState = (p) => setSt((s) => ({ ...s, ...p }));
  const v = function () {
    const st = this.state || {};
    const open = st.open === undefined ? 2 : st.open;
    const sk = st.skill || 0;
    const q = st.quote || 0;
    const tabs = (list, cur, key) => list.map((label, i) => ({ label,
      pressed: i === cur ? 'true' : 'false',
      bg: i === cur ? '#34503E' : 'transparent',
      fg: i === cur ? '#F7F3EE' : '#34503E',
      pick: () => this.setState({ [key]: i }) }));
    const EXP = [["2025 – now", "Freelance Designer", "Brand identity & web", ["Visual identity and brand guidelines for a corporate intelligence company.", "Visual identity and website redesign for a hacienda (in progress)."], "", ""], ["May – Oct 2025", "Product & UX/UI Designer", "Tus Clases Particulares · Barcelona", ["Started in Marketing & CRM: tutor email journeys, copy and social pieces.", "Moved to product as the designer responsible for the tutor area, with a PM and 3 engineers.", "Designed student matching with a paid plan, response-rate insights and post-signup next steps.", "Designed A/B/C tests for the Black Friday campaign."], "/work/tus-clases-particulares", "Read the case study →"], ["Jul 2021 – Apr 2024", "Product & UX/UI Designer", "Acreditta · Bogotá", ["Sole designer of a B2B SaaS credentials platform, from a requirements document to a full ecosystem.", "Badges, certificates and degrees; individual and bulk issuing; reports; multi-organization admin; Moodle integrations.", "Built the component library on Material Design and designed the mobile Wallet (PWA).", "Designed 200+ digital badges for organizations from Mexico to Chile."], "/work/acreditta", "Read the case study →"], ["2022 – 2023", "Graphic & Digital Designer", "Gobernación de Cundinamarca", ["320+ graphic pieces and 2 short videos within the official visual identity, in parallel with Acreditta."], "", ""], ["2019 – 2021", "Graphic & Digital Designer", "NIX Engineering · Hacienda Salamanca", ["Presentations, brochures, social media and websites in WordPress and Wix."], "", ""]];
    const SKILLS = [["Product", [["Product & discovery", "Problem framing, user stories, journey mapping, end-to-end flows, 0 → 1 design."], ["Collaboration", "Developer handoff with user stories and acceptance criteria, Agile/Scrum, Jira."]], "Figma · FigJam · Miro · Notion · Jira"], ["Research", [["UX research", "Interviews, surveys, focus groups, usability testing, benchmarking, Hotjar."], ["Experimentation", "A/B and A/B/C testing, CRO, email journeys (flows, copy and design)."]], "Hotjar · Miro · FigJam"], ["UI & systems", [["UX/UI", "Information architecture, wireframes, high-fidelity prototypes, responsive and mobile-first, microcopy."], ["Design systems", "Component libraries built on Material Design; designing within existing systems."]], "Figma · Material Design"], ["Visual & AI", [["Visual design", "Brand identity, web design, 200+ digital badges."], ["AI in my workflow", "AI-assisted research synthesis, exploration, UX copy and prototyping."]], "Illustrator · Photoshop · After Effects · WordPress · Wix"]];
    const QUOTES = [["Daniela’s user-centred approach, her ability to turn insights into solutions using qualitative and quantitative data, and her attention to detail in turning complex flows into simple ones, through a good mix of UX and UI, had a direct impact on improving our users’ experience across several key metrics.", "Oliver Morgade", "Head of Product at Tusmedia (Tus Clases Particulares), my direct manager"], ["From day one she showed great creative and technical ability, combining design, copy and user experience with a lot of sensitivity and judgment.", "Laura Fernández", "Market Intelligence Manager, managed Daniela directly at Tus Clases Particulares"], ["Professional, approachable and attentive to detail from the very first minute of her onboarding. She works in a very collaborative way, always ready to help, share feedback and improve processes.", "Laia Blanes Fernández", "UX/UI Designer, worked with Daniela on a different team"]];
    const exp = EXP.map((e, i) => ({
      y: e[0], t: e[1], c: e[2], d: e[3], href: e[4], cta: e[5], hasLink: !!e[4],
      open: i === open, expanded: i === open ? 'true' : 'false', rot: i === open ? 180 : 0,
      toggle: () => this.setState({ open: i === open ? -1 : i })
    }));
    const s = SKILLS[sk];
    const cq = QUOTES[q];
    return {
      exp,
      skillTabs: tabs(SKILLS.map(x => x[0]), sk, 'skill'),
      skill: { items: s[1].map(x => ({ t: x[0], d: x[1] })), tools: s[2] },
      quote: { text: cq[0], name: cq[1], role: cq[2] },
      quotePos: (q + 1) + ' / ' + QUOTES.length,
      prevQuote: () => this.setState({ quote: (q + QUOTES.length - 1) % QUOTES.length }),
      nextQuote: () => this.setState({ quote: (q + 1) % QUOTES.length })
    };
  }.call(self);

  return (
    <>
      <SiteHeader />
      <section style={{ padding: "64px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(40px, 6vw, 96px)", alignItems: "center" }}>
            <div style={{ flex: "1.3 1 480px", minWidth: "0", display: "flex", flexDirection: "column", gap: "24px" }}>
              <p style={{ margin: "0", fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>About</p>
              <h1 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(38px, 4vw, 60px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }}>
                Industrial designer by training.{" "}
                <em>Product designer by practice.</em>
              </h1>
              <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.7", color: "#4B524D", maxWidth: "640px" }}>
                I started in industrial design, learning how people, materials and systems fit together. I moved into digital design in 2019 and, since 2021, I’ve focused on product: first as the only designer of a B2B SaaS startup in Bogotá, then on the product team of a marketplace in Barcelona, after a Master’s in UX at ELISAVA.
              </p>
              <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.7", color: "#4B524D", maxWidth: "640px" }}>
                I’m quiet at first and a careful listener, which makes me good at research. Once I know a team, I talk a lot: about users, trade-offs and how to ship the next version.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
                <a href="/documents/daniela-munoz-cv.pdf" style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "52px", padding: "0 28px", borderRadius: "999px", background: "#34503E", color: "#F7F3EE", fontSize: "15px", fontWeight: "500" }} target="_blank" rel="noopener noreferrer">Download CV</a>
                <a href="https://www.linkedin.com/in/daniela-munoz28" style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "52px", padding: "0 26px", borderRadius: "999px", border: "1.5px solid #34503E", color: "#34503E", fontSize: "15px", fontWeight: "500" }} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
            <figure style={{ flex: "1 1 340px", maxWidth: "420px", margin: "0", position: "relative", padding: "24px 24px 0 0" }}>
              <div style={{ position: "absolute", right: "0", top: "0", width: "calc(100% - 24px)", height: "calc(100% - 24px)", borderRadius: "999px 999px 24px 24px", background: "#F3D1DC" }} aria-hidden="true" />
              <img src="/images/v2/portrait.webp" alt="Portrait of Daniela Muñoz" style={{ position: "relative", width: "100%", height: "500px", objectFit: "cover", objectPosition: "50% 15%", borderRadius: "999px 999px 24px 24px", display: "block", background: "#DDE7D7" }} />
            </figure>
          </div>
        </div>
      </section>
      <section style={{ background: "#34503E", padding: "96px clamp(20px, 5vw, 80px)", color: "#F7F3EE", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "56px", alignItems: "flex-start" }}>
            <div style={{ flex: "1 1 360px", display: "flex", flexDirection: "column", gap: "20px" }}>
              <p style={{ margin: "0", fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#CFDCCB" }}>Experience</p>
              <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(38px, 4vw, 60px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#F7F3EE" }} data-fill="">
                <span className="dm-f" style={{ "--i": "0" }}>From</span>
                {" "}
                <span className="dm-f" style={{ "--i": "1" }}>physical</span>
                {" "}
                <span className="dm-f" style={{ "--i": "2" }}>objects</span>
                {" "}
                <em>
                  <span className="dm-f" style={{ "--i": "3" }}>to</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "4" }}>digital</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "5" }}>products.</span>
                </em>
              </h2>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#CFDCCB" }}>Designing since 2019, with 3+ years in product design, across Colombia and Spain.</p>
            </div>
            <ol style={{ flex: "2 1 560px", listStyle: "none", margin: "0", padding: "0", borderBottom: "1px solid #CFDCCB" }}>
              {v.exp.map((e, i) => (
                <Fragment key={i}>
                  <li style={{ borderTop: "1px solid #CFDCCB" }}>
                    <button type="button" onClick={e.toggle} aria-expanded={e.expanded} style={{ width: "100%", border: "0", background: "transparent", color: "#F7F3EE", cursor: "pointer", textAlign: "left", padding: "22px 0", display: "grid", gridTemplateColumns: "minmax(110px, 170px) minmax(0, 1fr) 44px", gap: "20px", alignItems: "center", fontFamily: "'DM Sans', sans-serif" }}>
                      <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "19px", color: "#F3D1DC" }}>{e.y}</span>
                      <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "24px" }}>{e.t}</strong>
                        <span style={{ fontSize: "15px", fontWeight: "600", color: "#F7F3EE" }}>{e.c}</span>
                      </span>
                      <span style={{ width: "44px", height: "44px", borderRadius: "50%", border: "1px solid #CFDCCB", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ transform: `rotate(${e.rot}deg)`, transition: "transform .25s ease" }}>
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </span>
                    </button>
                    {e.open && (
                      <>
                        <div style={{ display: "grid", gridTemplateColumns: "minmax(110px, 170px) minmax(0, 1fr)", gap: "20px", padding: "0 0 26px" }}>
                          <span aria-hidden="true" />
                          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                            <ul style={{ margin: "0", padding: "0 0 0 18px", display: "flex", flexDirection: "column", gap: "8px" }}>
                              {e.d.map((line, i) => (
                                <Fragment key={i}>
                                  <li style={{ fontSize: "15px", lineHeight: "1.6", color: "#CFDCCB" }}>{line}</li>
                                </Fragment>
                              ))}
                            </ul>
                            {e.hasLink && (
                              <>
                                <a href={e.href} style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 22px", borderRadius: "999px", background: "#F7F3EE", color: "#1D2A22", fontSize: "15px", fontWeight: "500" }}>{e.cta}</a>
                              </>
                            )}
                          </div>
                        </div>
                      </>
                    )}
                  </li>
                </Fragment>
              ))}
            </ol>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <p style={{ margin: "0", fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#CFDCCB" }}>Education</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
              <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: "24px", padding: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "#F3D1DC" }}>2024 – 2025</span>
                <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "21px", color: "#F7F3EE" }}>Master’s in UX &amp; Digital Service Design</strong>
                <span style={{ fontSize: "14px", color: "#CFDCCB" }}>ELISAVA · Barcelona</span>
              </div>
              <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: "24px", padding: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "#F3D1DC" }}>2021</span>
                <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "21px", color: "#F7F3EE" }}>UX/UI Design Diploma</strong>
                <span style={{ fontSize: "14px", color: "#CFDCCB" }}>LCI · Bogotá</span>
              </div>
              <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: "24px", padding: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "#F3D1DC" }}>2014 – 2019</span>
                <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "21px", color: "#F7F3EE" }}>Bachelor’s in Industrial Product Design</strong>
                <span style={{ fontSize: "14px", color: "#CFDCCB" }}>Universidad Jorge Tadeo Lozano · Bogotá</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ padding: "96px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "flex-end" }}>
            <div style={{ flex: "999 1 520px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <p style={{ margin: "0", fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Skills &amp; tools</p>
              <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(40px, 4.4vw, 68px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }} data-fill="">
                <span className="dm-f" style={{ "--i": "0" }}>What</span>
                {" "}
                <span className="dm-f" style={{ "--i": "1" }}>I</span>
                {" "}
                <span className="dm-f" style={{ "--i": "2" }}>bring</span>
                {" "}
                <em>
                  <span className="dm-f" style={{ "--i": "3" }}>to</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "4" }}>a</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "5" }}>product</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "6" }}>team.</span>
                </em>
              </h2>
            </div>
            <div style={{ flex: "1 1 340px" }}>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#4B524D" }}>
                Strong in end-to-end product work for B2B SaaS and marketplaces, with a visual design background that shows in the craft.
              </p>
            </div>
          </div>
          <div role="group" aria-label="Skill areas" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {v.skillTabs.map((t, i) => (
              <Fragment key={i}>
                <button type="button" className="dm-tab dm-btn" onClick={t.pick} aria-pressed={t.pressed} style={{ minHeight: "44px", padding: "0 20px", borderRadius: "999px", border: "1.5px solid #34503E", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontSize: "15px", fontWeight: "500", background: t.bg, color: t.fg }}>{t.label}</button>
              </Fragment>
            ))}
          </div>
          <div aria-live="polite" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "16px" }}>
            {v.skill.items.map((k, i) => (
              <Fragment key={i}>
                <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "30px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "26px", color: "#34503E" }}>{k.t}</strong>
                  <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#4B524D" }}>{k.d}</span>
                </div>
              </Fragment>
            ))}
            <div style={{ background: "#DDE7D7", borderRadius: "24px", padding: "30px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "10px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.12em", textTransform: "uppercase", color: "#34503E" }}>Tools for this</span>
              <span style={{ fontSize: "17px", lineHeight: "1.6", color: "#1D2A22" }}>{v.skill.tools}</span>
            </div>
          </div>
          <p style={{ margin: "0", fontSize: "15px", color: "#4B524D" }}>
            <strong style={{ color: "#34503E" }}>Tools:</strong>
            {" "}Figma, FigJam, Miro, Notion, Jira, Hotjar, Illustrator, Photoshop, After Effects, WordPress, Wix ·{" "}
            <strong style={{ color: "#34503E" }}>Languages:</strong>
            {" "}Spanish (native), English (professional, C1)
          </p>
        </div>
      </section>
      <section style={{ background: "#A9C0A0", padding: "96px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <p style={{ margin: "0", fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#1D2A22" }}>What colleagues say</p>
          <figure aria-live="polite" style={{ margin: "0", background: "#F7F3EE", borderRadius: "32px", padding: "clamp(28px, 4vw, 56px)", display: "flex", flexDirection: "column", gap: "20px" }}>
            <span style={{ fontFamily: "Fraunces, serif", fontSize: "72px", lineHeight: "0.5", color: "#B8336A" }} aria-hidden="true">“</span>
            <blockquote style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(22px, 2.2vw, 30px)", lineHeight: "1.45", color: "#34503E" }}>{v.quote.text}</blockquote>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "20px" }}>
              <figcaption style={{ fontSize: "15px", color: "#4B524D" }}>
                <strong style={{ color: "#34503E", fontWeight: "600" }}>{v.quote.name}</strong>
                {" "}· {v.quote.role}
                <span style={{ display: "block", fontSize: "13px", marginTop: "4px" }}>Translated from Spanish · LinkedIn recommendation</span>
              </figcaption>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ fontSize: "14px", fontWeight: "600", color: "#34503E", minWidth: "44px", textAlign: "center" }}>{v.quotePos}</span>
                <button type="button" className="dm-btn" onClick={v.prevQuote} aria-label="Previous recommendation" style={{ width: "48px", height: "48px", borderRadius: "50%", border: "1.5px solid #34503E", background: "transparent", color: "#34503E", fontSize: "18px", cursor: "pointer" }}>←</button>
                <button type="button" className="dm-btn" onClick={v.nextQuote} aria-label="Next recommendation" style={{ width: "48px", height: "48px", borderRadius: "50%", border: "0", background: "#34503E", color: "#F7F3EE", fontSize: "18px", cursor: "pointer" }}>→</button>
              </div>
            </div>
          </figure>
        </div>
      </section>
      <section style={{ padding: "96px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "flex-end" }}>
            <div style={{ flex: "999 1 520px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <p style={{ margin: "0", fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Outside of work</p>
              <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(40px, 4.4vw, 68px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }} data-fill="">
                <span className="dm-f" style={{ "--i": "0" }}>When</span>
                {" "}
                <span className="dm-f" style={{ "--i": "1" }}>I’m</span>
                {" "}
                <span className="dm-f" style={{ "--i": "2" }}>not</span>
                {" "}
                <em>
                  <span className="dm-f" style={{ "--i": "3" }}>designing…</span>
                </em>
              </h2>
            </div>
            <div style={{ flex: "1 1 340px" }}>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#4B524D" }}>
                I’m running, planning a trip, looking for a good place to eat, out in nature, or learning something that has nothing to do with design.
              </p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ color: "#34503E" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="14" cy="4.5" r="2" />
                  <path d="M8 21l3-6 3 2 1 5M6 12l3-4 4 1 3 3 3 1" />
                </svg>
              </span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "24px", color: "#34503E" }}>Running</strong>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ color: "#34503E" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2 14l20-8-6 16-4-7z" />
                  <path d="M12 15l4-4" />
                </svg>
              </span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "24px", color: "#34503E" }}>Travel</strong>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ color: "#34503E" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />
                </svg>
              </span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "24px", color: "#34503E" }}>Nature &amp; plants</strong>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ color: "#34503E" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z" />
                  <path d="M4 21V5" />
                </svg>
              </span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "24px", color: "#34503E" }}>Learning</strong>
            </div>
          </div>
        </div>
      </section>
      <ContactBand />
      <SiteFooter />
    </>
  );
}
