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
    const EXP = [["2025 – hoy", "Diseñadora freelance", "Identidad de marca y web", ["Identidad visual y manual de marca para una empresa de inteligencia corporativa.", "Identidad visual y rediseño de la web de una hacienda (en curso)."], "", ""], ["May – Oct 2025", "Product & UX/UI Designer", "Tus Clases Particulares · Barcelona", ["Empecé en Marketing y CRM: journeys de email para profesores, copy y piezas para redes.", "Pasé a producto como diseñadora responsable del área de profesores, con un PM y 3 desarrolladores.", "Diseñé la recomendación de alumnos con plan de pago, las métricas de respuesta y los siguientes pasos tras el registro.", "Diseñé tests A/B/C para la campaña de Black Friday."], "/es/work/tus-clases-particulares", "Leer el caso →"], ["Jul 2021 – Abr 2024", "Product & UX/UI Designer", "Acreditta · Bogotá", ["Única diseñadora de una plataforma B2B SaaS de credenciales, desde un documento de requisitos hasta un ecosistema completo.", "Insignias, certificados y títulos; emisión individual y masiva; reportes; administración multiorganización; integraciones con Moodle.", "Construí la librería de componentes sobre Material Design y diseñé la Wallet móvil (PWA).", "Diseñé más de 200 insignias digitales para organizaciones de México a Chile."], "/es/work/acreditta", "Leer el caso →"], ["2022 – 2023", "Diseñadora gráfica y digital", "Gobernación de Cundinamarca", ["Más de 320 piezas gráficas y 2 vídeos cortos dentro de la identidad visual oficial, en paralelo con Acreditta."], "", ""], ["2019 – 2021", "Diseñadora gráfica y digital", "NIX Engineering · Hacienda Salamanca", ["Presentaciones, brochures, redes sociales y webs en WordPress y Wix."], "", ""]];
    const SKILLS = [["Producto", [["Producto y discovery", "Definición de problemas, historias de usuario, journey maps, flujos de principio a fin, diseño de 0 a 1."], ["Colaboración", "Entrega a desarrollo con historias de usuario y criterios de aceptación, Agile/Scrum, Jira."]], "Figma · FigJam · Miro · Notion · Jira"], ["Investigación", [["Investigación UX", "Entrevistas, encuestas, focus groups, pruebas de usabilidad, benchmarking, Hotjar."], ["Experimentación", "Tests A/B y A/B/C, CRO, journeys de email (flujos, copy y diseño)."]], "Hotjar · Miro · FigJam"], ["UI y sistemas", [["UX/UI", "Arquitectura de información, wireframes, prototipos de alta fidelidad, responsive y mobile-first, microcopy."], ["Sistemas de diseño", "Librerías de componentes sobre Material Design; diseño dentro de sistemas existentes."]], "Figma · Material Design"], ["Visual e IA", [["Diseño visual", "Identidad de marca, diseño web, más de 200 insignias digitales."], ["IA en mi proceso", "Síntesis de investigación, exploración, UX writing y prototipado con ayuda de IA."]], "Illustrator · Photoshop · After Effects · WordPress · Wix · Claude"]];
    const QUOTES = [["El enfoque centrado en el usuario de Daniela, su capacidad para convertir insights en soluciones a partir de datos cualitativos y cuantitativos, y su atención al detalle para transformar flujos complejos en simples, con una buena mezcla de UX y UI, tuvieron un impacto directo en la mejora de la experiencia de nuestros usuarios en varias métricas clave.", "Oliver Morgade", "Head of Product en Tusmedia (Tus Clases Particulares), mi responsable directo"], ["Desde el primer día demostró una gran capacidad creativa y técnica, combinando diseño, copy y experiencia de usuario con mucha sensibilidad y criterio.", "Laura Fernández", "Market Intelligence Manager, responsable directa de Daniela en Tus Clases Particulares"], ["Profesional, cercana y atenta al detalle desde el primer minuto de su onboarding. Trabaja de forma muy colaborativa, siempre dispuesta a ayudar, compartir feedback y mejorar procesos.", "Laia Blanes Fernández", "UX/UI Designer, trabajó con Daniela en otro equipo"]];
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
              <p style={{ margin: "0", fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Sobre mí</p>
              <h1 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(38px, 4vw, 60px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }}>
                Diseñadora industrial de formación.{" "}
                <em>Diseñadora de producto en la práctica.</em>
              </h1>
              <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.7", color: "#4B524D", maxWidth: "640px" }}>
                Empecé en el diseño industrial, aprendiendo cómo encajan las personas, los materiales y los sistemas. Pasé al diseño digital en 2019 y, desde 2021, me he enfocado en producto: primero como única diseñadora de una startup B2B SaaS en Bogotá y después en el equipo de producto de un marketplace en Barcelona, tras un máster en UX en ELISAVA.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
                <a href="/documents/daniela-munoz-cv.pdf" style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "52px", padding: "0 28px", borderRadius: "999px", background: "#34503E", color: "#F7F3EE", fontSize: "15px", fontWeight: "500" }} target="_blank" rel="noopener noreferrer">Descargar CV</a>
                <a href="https://www.linkedin.com/in/daniela-munoz28" style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "52px", padding: "0 26px", borderRadius: "999px", border: "1.5px solid #34503E", color: "#34503E", fontSize: "15px", fontWeight: "500" }} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
            <figure style={{ flex: "1 1 340px", maxWidth: "420px", margin: "0", position: "relative", padding: "24px 24px 0 0" }}>
              <div style={{ position: "absolute", right: "0", top: "0", width: "calc(100% - 24px)", height: "calc(100% - 24px)", borderRadius: "999px 999px 24px 24px", background: "#F3D1DC" }} aria-hidden="true" />
              <img src="/images/v2/portrait.webp" alt="Retrato de Daniela Muñoz" style={{ position: "relative", width: "100%", height: "500px", objectFit: "cover", objectPosition: "50% 15%", borderRadius: "999px 999px 24px 24px", display: "block", background: "#DDE7D7" }} />
            </figure>
          </div>
        </div>
      </section>
      <section style={{ background: "#34503E", padding: "96px clamp(20px, 5vw, 80px)", color: "#F7F3EE", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "56px", alignItems: "flex-start" }}>
            <div style={{ flex: "1 1 360px", display: "flex", flexDirection: "column", gap: "20px" }}>
              <p style={{ margin: "0", fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#CFDCCB" }}>Experiencia</p>
              <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(38px, 4vw, 60px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#F7F3EE" }} data-fill="">
                <span className="dm-f" style={{ "--i": "0" }}>De</span>
                {" "}
                <span className="dm-f" style={{ "--i": "1" }}>objetos</span>
                {" "}
                <span className="dm-f" style={{ "--i": "2" }}>físicos</span>
                {" "}
                <em>
                  <span className="dm-f" style={{ "--i": "3" }}>a</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "4" }}>productos</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "5" }}>digitales.</span>
                </em>
              </h2>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#CFDCCB" }}>Diseñando desde 2019, con más de 3 años en diseño de producto, entre Colombia y España.</p>
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
            <p style={{ margin: "0", fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#CFDCCB" }}>Formación</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
              <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: "24px", padding: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "#F3D1DC" }}>2024 – 2025</span>
                <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "21px", color: "#F7F3EE" }}>Máster en UX y Servicios Digitales</strong>
                <span style={{ fontSize: "14px", color: "#CFDCCB" }}>ELISAVA · Barcelona</span>
              </div>
              <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: "24px", padding: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "#F3D1DC" }}>2021</span>
                <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "21px", color: "#F7F3EE" }}>Diplomado en Diseño UX/UI</strong>
                <span style={{ fontSize: "14px", color: "#CFDCCB" }}>LCI · Bogotá</span>
              </div>
              <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: "24px", padding: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "#F3D1DC" }}>2014 – 2019</span>
                <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "21px", color: "#F7F3EE" }}>Grado en Diseño Industrial</strong>
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
              <p style={{ margin: "0", fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Habilidades y herramientas</p>
              <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(40px, 4.4vw, 68px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }} data-fill="">
                <span className="dm-f" style={{ "--i": "0" }}>Lo</span>
                {" "}
                <span className="dm-f" style={{ "--i": "1" }}>que</span>
                {" "}
                <span className="dm-f" style={{ "--i": "2" }}>aporto</span>
                {" "}
                <em>
                  <span className="dm-f" style={{ "--i": "3" }}>a</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "4" }}>un</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "5" }}>equipo</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "6" }}>de</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "7" }}>producto.</span>
                </em>
              </h2>
            </div>
            <div style={{ flex: "1 1 340px" }}>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#4B524D" }}>
                Fuerte en el trabajo de producto de principio a fin para B2B SaaS y marketplaces, con una base de diseño visual que se nota en el detalle.
              </p>
            </div>
          </div>
          <div role="group" aria-label="Áreas de habilidad" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
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
              <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.12em", textTransform: "uppercase", color: "#34503E" }}>Herramientas para esto</span>
              <span style={{ fontSize: "17px", lineHeight: "1.6", color: "#1D2A22" }}>{v.skill.tools}</span>
            </div>
          </div>
          <p style={{ margin: "0", fontSize: "15px", color: "#4B524D" }}>
            <strong style={{ color: "#34503E" }}>Herramientas:</strong>
            {" "}Figma, FigJam, Miro, Notion, Jira, Hotjar, Illustrator, Photoshop, After Effects, WordPress, Wix, Claude ·{" "}
            <strong style={{ color: "#34503E" }}>Idiomas:</strong>
            {" "}Español (nativo), inglés (profesional, C1)
          </p>
        </div>
      </section>
      <section style={{ background: "#A9C0A0", padding: "96px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <p style={{ margin: "0", fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#1D2A22" }}>Lo que dicen mis compañeros</p>
          <figure aria-live="polite" style={{ margin: "0", background: "#F7F3EE", borderRadius: "32px", padding: "clamp(28px, 4vw, 56px)", display: "flex", flexDirection: "column", gap: "20px" }}>
            <span style={{ fontFamily: "Fraunces, serif", fontSize: "72px", lineHeight: "0.5", color: "#B8336A" }} aria-hidden="true">“</span>
            <blockquote style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(22px, 2.2vw, 30px)", lineHeight: "1.45", color: "#34503E" }}>{v.quote.text}</blockquote>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "20px" }}>
              <figcaption style={{ fontSize: "15px", color: "#4B524D" }}>
                <strong style={{ color: "#34503E", fontWeight: "600" }}>{v.quote.name}</strong>
                {" "}· {v.quote.role}
                <span style={{ display: "block", fontSize: "13px", marginTop: "4px" }}>Recomendación de LinkedIn</span>
              </figcaption>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ fontSize: "14px", fontWeight: "600", color: "#34503E", minWidth: "44px", textAlign: "center" }}>{v.quotePos}</span>
                <button type="button" className="dm-btn" onClick={v.prevQuote} aria-label="Recomendación anterior" style={{ width: "48px", height: "48px", borderRadius: "50%", border: "1.5px solid #34503E", background: "transparent", color: "#34503E", fontSize: "18px", cursor: "pointer" }}>←</button>
                <button type="button" className="dm-btn" onClick={v.nextQuote} aria-label="Recomendación siguiente" style={{ width: "48px", height: "48px", borderRadius: "50%", border: "0", background: "#34503E", color: "#F7F3EE", fontSize: "18px", cursor: "pointer" }}>→</button>
              </div>
            </div>
          </figure>
        </div>
      </section>
      <section style={{ padding: "96px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "flex-end" }}>
            <div style={{ flex: "999 1 520px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <p style={{ margin: "0", fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Fuera del trabajo</p>
              <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(40px, 4.4vw, 68px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }} data-fill="">
                <span className="dm-f" style={{ "--i": "0" }}>Cuando</span>
                {" "}
                <span className="dm-f" style={{ "--i": "1" }}>no</span>
                {" "}
                <span className="dm-f" style={{ "--i": "2" }}>estoy</span>
                {" "}
                <em>
                  <span className="dm-f" style={{ "--i": "3" }}>diseñando…</span>
                </em>
              </h2>
            </div>
            <div style={{ flex: "1 1 340px" }}>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#4B524D" }}>
                Estoy corriendo, planeando un viaje, buscando un buen sitio para comer, en la naturaleza o aprendiendo algo que no tiene nada que ver con el diseño.
              </p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: "20px" }}>
            <div className="dm-hobby" style={{ "--tilt": "-6deg", background: "#F3D1DC", borderRadius: "28px", padding: "28px", minHeight: "190px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "28px" }}>
              <span className="dm-hobby-ic" style={{ width: "72px", height: "72px", borderRadius: "50%", background: "#FFFFFF", color: "#A02B5B", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" />
                  <path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" />
                  <path d="M16 17h4" />
                  <path d="M4 13h4" />
                </svg>
              </span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "26px", lineHeight: "1.15", color: "#34503E" }}>Correr</strong>
            </div>
            <div className="dm-hobby" style={{ "--tilt": "8deg", background: "#DDE7D7", borderRadius: "28px", padding: "28px", minHeight: "190px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "28px" }}>
              <span className="dm-hobby-ic" style={{ width: "72px", height: "72px", borderRadius: "50%", background: "#FFFFFF", color: "#34503E", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
                </svg>
              </span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "26px", lineHeight: "1.15", color: "#34503E" }}>Viajar</strong>
            </div>
            <div className="dm-hobby" style={{ "--tilt": "-8deg", background: "#34503E", borderRadius: "28px", padding: "28px", minHeight: "190px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "28px" }}>
              <span className="dm-hobby-ic" style={{ width: "72px", height: "72px", borderRadius: "50%", background: "#F7F3EE", color: "#B8336A", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                  <path d="M7 2v20" />
                  <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
                </svg>
              </span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "26px", lineHeight: "1.15", color: "#F7F3EE" }}>Comer bien</strong>
            </div>
            <div className="dm-hobby" style={{ "--tilt": "6deg", background: "#A9C0A0", borderRadius: "28px", padding: "28px", minHeight: "190px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "28px" }}>
              <span className="dm-hobby-ic" style={{ width: "72px", height: "72px", borderRadius: "50%", background: "#F7F3EE", color: "#34503E", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 20h10" />
                  <path d="M10 20c5.5-2.5.8-6.4 3-10" />
                  <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
                  <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
                </svg>
              </span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "26px", lineHeight: "1.15", color: "#1D2A22" }}>Naturaleza y plantas</strong>
            </div>
            <div className="dm-hobby" style={{ "--tilt": "-5deg", background: "#FFFFFF", borderRadius: "28px", padding: "28px", minHeight: "190px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "28px" }}>
              <span className="dm-hobby-ic" style={{ width: "72px", height: "72px", borderRadius: "50%", background: "#DDE7D7", color: "#34503E", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "26px", lineHeight: "1.15", color: "#34503E" }}>Aprender</strong>
            </div>
          </div>
        </div>
      </section>
      <ContactBand />
      <SiteFooter />
    </>
  );
}
