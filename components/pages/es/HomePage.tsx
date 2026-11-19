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
    const STEPS = [["01", "Entender", "¿Qué estamos resolviendo y para quién?", "Empiezo escuchando: stakeholders, requisitos y las personas que lo van a usar. Hago muchas preguntas antes de dibujar nada.", "En Acreditta partí de un documento de requisitos de los stakeholders y lo convertí en la primera versión de la plataforma."], ["02", "Explorar", "¿Qué sabemos ya?", "Datos existentes, comportamiento de los usuarios y lo que el equipo ya ha aprendido. Las entrevistas y encuestas completan lo que falta.", "Usé Hotjar para ver cómo usaban de verdad la plataforma las organizaciones y reporté lo que encontré a desarrollo."], ["03", "Definir", "¿En qué nos enfocamos y qué dejamos fuera?", "Priorizo con producto para que el equipo trabaje en lo que los usuarios necesitan ahora. La investigación también decide qué no construir.", "Los focus groups mostraron que las colecciones de credenciales aún no eran prioridad, así que pausamos el módulo y nos enfocamos en otra cosa."], ["04", "Diseñar", "¿Cómo podría funcionar?", "Flujos, wireframes y UI, sobre una librería de componentes compartida para que el producto siga siendo coherente a medida que crece.", "Construí la librería de componentes de Acreditta sobre Material Design y diseñé todos los flujos, de la emisión a los reportes."], ["05", "Validar", "¿Tiene sentido para los usuarios y para el negocio?", "Pruebo las ideas con usuarios y con datos: entrevistas, focus groups y experimentos.", "En Tus Clases Particulares diseñé tests A/B/C para la campaña de Black Friday."], ["06", "Iterar", "¿Qué sacamos ahora y qué después?", "Defino el alcance con desarrollo para que salga una primera versión y paso el resto a historias de usuario posteriores.", "Cuando un diseño no era viable a tiempo, me sentaba con los desarrolladores y lo rediseñaba en una versión que pudiera salir."]];
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
    const CAPS = ["Acreditta · dashboard, creación de insignias, emisión masiva y página de la credencial", "Tus Clases Particulares · página tras publicar, bandeja del profesor y métricas de respuesta", "Acreditta Wallet · PWA móvil"];
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
            <div className="dm-hero-txt" style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "26px" }}>
              <div style={{ position: "relative" }}>
                <p style={{ margin: "0", display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>
                  <button type="button" className="dm-egg" onClick={v.openEgg} aria-label="Un pequeño detalle" style={{ width: "44px", height: "44px", margin: "-18px -8px -18px -18px", padding: "0", border: "0", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span className={v.dotClass} style={{ display: "block", width: "8px", height: "8px", borderRadius: "50%", background: "#B8336A", transition: "transform .2s ease" }} />
                  </button>
                  Product Designer · UX/UI · Barcelona
                </p>
                {v.eggVisible && (
                  <>
                    <div className="dm-card" role="dialog" aria-label="Una insignia para ti" style={{ position: "absolute", left: "0", top: "44px", zIndex: "30", width: "min(400px, calc(100vw - 40px))", boxSizing: "border-box", background: "#FFFFFF", borderRadius: "28px", padding: "26px", boxShadow: "0 30px 70px rgba(29,42,34,0.25)", display: "flex", flexDirection: "column", gap: "18px", textTransform: "none", letterSpacing: "0" }}>
                      <button type="button" onClick={v.closeEgg} aria-label="Cerrar" style={{ position: "absolute", right: "12px", top: "12px", width: "44px", height: "44px", border: "0", borderRadius: "50%", background: "transparent", color: "#4B524D", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                          <path d="M6 6l12 12M18 6L6 18" />
                        </svg>
                      </button>
                      <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
                        <svg width="96" height="96" viewBox="0 0 96 96" role="img" aria-label="Insignia Detail Spotter" style={{ flex: "0 0 auto" }}>
                          <circle cx="48" cy="48" r="46" fill="#34503E" />
                          <circle cx="48" cy="48" r="38" fill="none" stroke="#F3D1DC" strokeWidth="1.5" strokeDasharray="2 4" />
                          <circle cx="48" cy="40" r="13" fill="none" stroke="#F7F3EE" strokeWidth="2.4" />
                          <path d="M57.5 49.5L66 58" stroke="#F7F3EE" strokeWidth="3" strokeLinecap="round" />
                          <circle cx="48" cy="40" r="3.4" fill="#B8336A" />
                          <text x="48" y="74" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="8" fontWeight="600" letterSpacing="1.2" fill="#F7F3EE">DETAIL SPOTTER</text>
                        </svg>
                        <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingRight: "30px" }}>
                          <span style={{ alignSelf: "flex-start", padding: "4px 12px", borderRadius: "999px", background: "#F3D1DC", color: "#6E1A3D", fontSize: "12px", fontWeight: "600" }}>Nueva credencial</span>
                          <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "24px", lineHeight: "1.15", color: "#34503E" }}>Detail Spotter</strong>
                          <span style={{ fontSize: "13px", color: "#4B524D" }}>Emitida por Daniela Muñoz</span>
                        </div>
                      </div>
                      {v.eggIssued && (
                        <>
                          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                            <p style={{ margin: "0", fontFamily: "Fraunces, serif", fontSize: "22px", lineHeight: "1.3", color: "#34503E" }}>
                              Te han emitido{" "}
                              <em style={{ color: "#B8336A" }}>¡una insignia!</em>
                            </p>
                            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>
                              Casi todo el mundo pasa de largo este puntito. Fijarme en los detalles es gran parte de cómo diseño. Por lo visto, también es como tú miras los portafolios.
                            </p>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                              <button type="button" onClick={v.acceptEgg} style={{ display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "46px", padding: "0 22px", border: "0", borderRadius: "999px", background: "#34503E", color: "#F7F3EE", fontFamily: "'DM Sans', sans-serif", fontSize: "15px", fontWeight: "500", cursor: "pointer" }}>Aceptar insignia</button>
                              <button type="button" onClick={v.closeEgg} style={{ display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "46px", padding: "0 20px", border: "1.5px solid #34503E", borderRadius: "999px", background: "transparent", color: "#34503E", fontFamily: "'DM Sans', sans-serif", fontSize: "15px", fontWeight: "500", cursor: "pointer" }}>Ahora no</button>
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
                              Insignia aceptada
                            </p>
                            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>Callada al principio, color cuando hay confianza. Así que la página acaba de ganar un poco de color. ¿Hablamos?</p>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                              <Link href="/es/contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "46px", padding: "0 22px", border: "0", borderRadius: "999px", background: "#34503E", color: "#F7F3EE", fontFamily: "'DM Sans', sans-serif", fontSize: "15px", fontWeight: "500", cursor: "pointer", background: "#A02B5B", textDecoration: "none" }}>Hablemos →</Link>
                              <button type="button" onClick={v.closeEgg} style={{ display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "46px", padding: "0 20px", border: "1.5px solid #34503E", borderRadius: "999px", background: "transparent", color: "#34503E", fontFamily: "'DM Sans', sans-serif", fontSize: "15px", fontWeight: "500", cursor: "pointer" }}>Seguir explorando</button>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </>
                )}
              </div>
              <h1 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(44px, 5.2vw, 84px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }} data-anim="words">
                <span className="dm-w" style={{ "--i": "0" }}>Diseño</span>
                {" "}
                <span className="dm-w" style={{ "--i": "1" }}>productos</span>
                {" "}
                <span className="dm-w" style={{ "--i": "2" }}>digitales</span>
                {" "}
                <span className="dm-w" style={{ "--i": "3" }}>de</span>
                {" "}
                <span className="dm-w" style={{ "--i": "4" }}>principio</span>
                {" "}
                <span className="dm-w" style={{ "--i": "5" }}>a</span>
                {" "}
                <span className="dm-w" style={{ "--i": "6" }}>fin,</span>
                {" "}
                <em style={{ color: v.heroEm, transition: "color .6s ease" }}>
                  <span className="dm-w" style={{ "--i": "7" }}>desde</span>
                  {" "}
                  <span className="dm-w" style={{ "--i": "8" }}>la</span>
                  {" "}
                  <span className="dm-w" style={{ "--i": "9" }}>primera</span>
                  {" "}
                  <span className="dm-w" style={{ "--i": "10" }}>pregunta</span>
                  {" "}
                  <span className="dm-w" style={{ "--i": "11" }}>hasta</span>
                  {" "}
                  <span className="dm-w" style={{ "--i": "12" }}>la</span>
                  {" "}
                  <span className="dm-w" style={{ "--i": "13" }}>funcionalidad</span>
                  {" "}
                  <span className="dm-w" style={{ "--i": "14" }}>en</span>
                  {" "}
                  <span className="dm-w" style={{ "--i": "15" }}>producción.</span>
                </em>
              </h1>
              <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.7", color: "#4B524D", maxWidth: "620px" }}>
                Diseñadora de producto con más de 3 años en productos B2B SaaS y marketplaces. Fui la única diseñadora de una plataforma de credenciales digitales usada por organizaciones de toda Latinoamérica, y fui responsable de la experiencia de los profesores en un marketplace en España.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px" }}>
                <Link href="/es/work" style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "52px", padding: "0 28px", borderRadius: "999px", background: "#34503E", color: "#F7F3EE", fontSize: "15px", fontWeight: "500" }}>Ver proyectos →</Link>
                <a href="/documents/daniela-munoz-cv.pdf" style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "52px", padding: "0 26px", borderRadius: "999px", border: "1.5px solid #34503E", color: "#34503E", fontSize: "15px", fontWeight: "500" }} target="_blank" rel="noopener noreferrer">Descargar CV</a>
              </div>
              <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#4B524D" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                En Barcelona · Disponible para nuevas oportunidades
              </span>
            </div>
            <figure className="dm-hero-fig" style={{ flex: "1 1 460px", maxWidth: "620px", margin: "0" }}>
              <div className="dm-hero-mk">
                <img className="dm-rot dm-mk-acr" style={{ "--n": "0" }} src="/images/v2/mockup-acreditta-desktop-isometrico.webp" alt="Pantallas de la plataforma Acreditta: dashboard, creación de insignias, emisión masiva y página de la credencial" />
                <img className="dm-rot dm-mk-tus" style={{ "--n": "1" }} src="/images/v2/mockup-tusclases-web-isometrico.webp" alt="Pantallas de Tus Clases Particulares en escritorio y móvil: página tras publicar, bandeja y métricas de respuesta" />
                <img className="dm-rot dm-mk-wal" style={{ "--n": "2" }} src="/images/v2/mockup-acreditta-wallet-3d.webp" alt="Pantallas de Acreditta Wallet en cinco móviles" />
              </div>
            </figure>
          </div>
        </div>
      </section>
      <section style={{ padding: "8px clamp(20px, 5vw, 80px) 56px", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "28px" }} data-reveal="">
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "16px", borderTop: "1.5px solid #34503E" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(24px, 2.2vw, 32px)", lineHeight: "1.15", color: "#34503E" }}>Única diseñadora, de 0 a 1</span>
              <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#4B524D" }}>Diseñé una plataforma B2B SaaS desde cero y la hice crecer durante casi 3 años.</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "16px", borderTop: "1.5px solid #34503E" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(24px, 2.2vw, 32px)", lineHeight: "1.15", color: "#34503E" }}>Del discovery al handoff</span>
              <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#4B524D" }}>Investigación, flujos, UI, librería de componentes y entrega a desarrollo.</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "16px", borderTop: "1.5px solid #34503E" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(24px, 2.2vw, 32px)", lineHeight: "1.15", color: "#34503E" }}>Basada en datos</span>
              <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#4B524D" }}>Entrevistas, focus groups, Hotjar y tests A/B/C para decidir qué construir.</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "16px", borderTop: "1.5px solid #34503E" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(24px, 2.2vw, 32px)", lineHeight: "1.15", color: "#34503E" }}>Oficio visual</span>
              <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#4B524D" }}>Diseñando desde 2019, incluidas más de 200 insignias digitales para organizaciones.</span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <p style={{ margin: "0", fontSize: "13px", color: "#4B524D", textAlign: "center" }}>Algunas de las organizaciones que emitieron insignias digitales que diseñé en Acreditta</p>
            <div className="dm-marquee" role="img" aria-label="Algunas de las organizaciones que emitieron insignias digitales que diseñé en Acreditta: Adidas, Nutresa, Bayer, ICONTEC, Tecmilenio, Tec de Monterrey, AIESEC, FIAD, Cámara de Comercio de Cali, MoodleMoot México, Universidad BCI, ANUIES." style={{ overflow: "hidden", padding: "4px 0" }}>
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
      <section style={{ background: "#34503E", padding: "96px clamp(20px, 5vw, 80px)", color: "#F7F3EE", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <p style={{ margin: "0", fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#CFDCCB" }}>Proyectos destacados</p>
              <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(40px, 4.4vw, 68px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#F7F3EE" }} data-fill="">
                <span className="dm-f" style={{ "--i": "0" }}>Casos</span>
                {" "}
                <span className="dm-f" style={{ "--i": "1" }}>de</span>
                {" "}
                <span className="dm-f" style={{ "--i": "2" }}>estudio</span>
                {" "}
                <em>
                  <span className="dm-f" style={{ "--i": "3" }}>de</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "4" }}>productos</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "5" }}>reales.</span>
                </em>
              </h2>
            </div>
            <Link href="/es/work" style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "52px", padding: "0 26px", borderRadius: "999px", border: "1.5px solid #F7F3EE", color: "#F7F3EE", fontSize: "15px", fontWeight: "500" }}>Ver todos los proyectos →</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "28px" }} data-reveal="">
            <Link href="/es/work/acreditta" className="dm-lift" style={{ background: "#F7F3EE", color: "#1D2A22", borderRadius: "24px", padding: "14px 14px 26px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ height: "250px", overflow: "hidden", borderRadius: "18px" }}>
                <div style={{ height: "100%", boxSizing: "border-box", background: "#DDE7D7", display: "flex", alignItems: "center", justifyContent: "center", padding: "18px 22px" }}>
                  <img src="/images/v2/mockup-acreditta-dashboard-laptop.webp" alt="Dashboard de Acreditta en un portátil" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
                </div>
              </div>
              <div style={{ padding: "0 10px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "#6E1A3D" }}>B2B SaaS · Única diseñadora · 2021–2024</span>
                <span style={{ fontFamily: "Fraunces, serif", fontSize: "28px", fontWeight: "500", color: "#34503E" }}>Acreditta →</span>
                <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>
                  Una plataforma de credenciales digitales diseñada desde cero: insignias, certificados y títulos profesionales, con emisión masiva, analítica, administración multiorganización e integraciones con LMS.
                </span>
              </div>
            </Link>
            <Link href="/es/work/tus-clases-particulares" className="dm-lift" style={{ background: "#F7F3EE", color: "#1D2A22", borderRadius: "24px", padding: "14px 14px 26px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ height: "250px", overflow: "hidden", borderRadius: "18px" }}>
                <div style={{ height: "100%", boxSizing: "border-box", background: "#F3D1DC", display: "flex", alignItems: "center", justifyContent: "center", padding: "18px 22px" }}>
                  <img src="/images/v2/mockup-tusclases-acciones-laptop.webp" alt="Página tras publicar un anuncio de Tus Clases Particulares en un portátil" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
                </div>
              </div>
              <div style={{ padding: "0 10px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "#6E1A3D" }}>Marketplace · Área de profesores · 2025</span>
                <span style={{ fontFamily: "Fraunces, serif", fontSize: "28px", fontWeight: "500", color: "#34503E" }}>Tus Clases Particulares →</span>
                <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>
                  Responsable de la experiencia de los profesores en un marketplace de dos lados: recomendación de alumnos, métricas de respuesta y activación tras el registro, todo en producción.
                </span>
              </div>
            </Link>
            <Link href="/es/work/wallet" className="dm-lift" style={{ background: "#F7F3EE", color: "#1D2A22", borderRadius: "24px", padding: "14px 14px 26px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ height: "250px", overflow: "hidden", borderRadius: "18px" }}>
                <div style={{ height: "100%", boxSizing: "border-box", background: "#DDE7D7", display: "flex", alignItems: "center", justifyContent: "center", padding: "18px 22px" }}>
                  <img src="/images/v2/mockup-wallet-trio.webp" alt="Pantallas de Acreditta Wallet en móviles" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
                </div>
              </div>
              <div style={{ padding: "0 10px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "#6E1A3D" }}>PWA móvil · 2021–2024</span>
                <span style={{ fontFamily: "Fraunces, serif", fontSize: "28px", fontWeight: "500", color: "#34503E" }}>Acreditta Wallet →</span>
                <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>
                  Una wallet sencilla y pensada para móvil donde las personas aceptan, gestionan y comparten las credenciales que obtienen.
                </span>
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
                El enfoque centrado en el usuario de Daniela, su capacidad para convertir insights en soluciones a partir de datos cualitativos y cuantitativos, y su atención al detalle para transformar flujos complejos en simples, con una buena mezcla de UX y UI, tuvieron un impacto directo en la mejora de la experiencia de nuestros usuarios en varias métricas clave.
              </blockquote>
              <figcaption style={{ fontSize: "15px", color: "#4B524D" }}>
                <strong style={{ color: "#34503E", fontWeight: "600" }}>Oliver Morgade</strong>
                {" "}· Head of Product en Tusmedia (Tus Clases Particulares), mi responsable directo
                <span style={{ display: "block", fontSize: "13px", marginTop: "4px" }}>Recomendación de LinkedIn</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section style={{ padding: "96px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "flex-end" }}>
            <div style={{ flex: "999 1 520px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <p style={{ margin: "0", fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Cómo trabajo</p>
              <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(40px, 4.4vw, 68px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }} data-fill="">
                <span className="dm-f" style={{ "--i": "0" }}>Normalmente</span>
                {" "}
                <span className="dm-f" style={{ "--i": "1" }}>empieza</span>
                {" "}
                <span className="dm-f" style={{ "--i": "2" }}>con</span>
                {" "}
                <em style={{ color: "#B8336A" }}>
                  <span className="dm-f" style={{ "--i": "3" }}>muchas</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "4" }}>preguntas.</span>
                </em>
              </h2>
            </div>
            <div style={{ flex: "1 1 340px" }}>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#4B524D" }}>
                Primero escucho con atención, y ese hábito resulta muy útil para investigar. A partir de ahí me muevo entre discovery, flujos, wireframes, UI y testing, y defino el alcance con producto y desarrollo para que la primera versión salga y el resto llegue después.
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
              <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.12em", textTransform: "uppercase", color: "#A02B5B" }}>Paso {v.cur.n} · {v.cur.title}</span>
              <p style={{ margin: "0", fontFamily: "Fraunces, serif", fontSize: "clamp(26px, 2.4vw, 34px)", lineHeight: "1.2", color: "#34503E" }}>{v.cur.q}</p>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#4B524D" }}>{v.cur.what}</p>
            </div>
            <div style={{ padding: "clamp(26px, 3vw, 40px)", background: "#DDE7D7", display: "flex", flexDirection: "column", justifyContent: "center", gap: "12px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.12em", textTransform: "uppercase", color: "#34503E" }}>De mi trabajo</span>
              <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#1D2A22" }}>{v.cur.ex}</p>
              <div style={{ display: "flex", gap: "10px", marginTop: "6px" }}>
                <button type="button" onClick={v.prev} aria-label="Paso anterior" style={{ width: "44px", height: "44px", borderRadius: "50%", border: "1.5px solid #34503E", background: "transparent", color: "#34503E", fontSize: "18px", cursor: "pointer" }}>←</button>
                <button type="button" onClick={v.next} aria-label="Paso siguiente" style={{ width: "44px", height: "44px", borderRadius: "50%", border: "0", background: "#34503E", color: "#F7F3EE", fontSize: "18px", cursor: "pointer" }}>→</button>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "center", justifyContent: "space-between", background: "#DDE7D7", borderRadius: "24px", padding: "24px 32px" }}>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#1D2A22" }}>
              Uso la{" "}
              <strong>IA</strong>
              {" "}para acelerar la síntesis de investigación, la exploración, el UX writing y el prototipado. Las decisiones de producto y el criterio de diseño siguen siendo humanos.
            </p>
          </div>
        </div>
      </section>
      <section style={{ background: "#A9C0A0", padding: "96px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "flex-end" }}>
            <div style={{ flex: "999 1 520px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <p style={{ margin: "0", fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Lab de exploración</p>
              <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(40px, 4.4vw, 68px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }} data-fill="">
                <span className="dm-f" style={{ "--i": "0" }}>Más</span>
                {" "}
                <span className="dm-f" style={{ "--i": "1" }}>allá</span>
                {" "}
                <em>
                  <span className="dm-f" style={{ "--i": "2" }}>del</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "3" }}>brief.</span>
                </em>
              </h2>
            </div>
            <div style={{ flex: "1 1 340px" }}>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#4B524D" }}>Un proyecto en equipo de marca y e-commerce, mi proyecto final del máster en ELISAVA y una web para un cliente real.</p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }} data-reveal="">
            <div style={{ background: "#F7F3EE", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600", color: "#6E1A3D" }}>Proyecto en equipo · Marca y e-commerce</span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "24px", color: "#34503E" }}>A Casa Portuguesa</strong>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>Identidad visual y tienda online para un negocio portugués de Barcelona.</span>
            </div>
            <div style={{ background: "#F7F3EE", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600", color: "#6E1A3D" }}>Proyecto final del máster · Móvil</span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "24px", color: "#34503E" }}>Opto</strong>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>Una app que ayuda a las personas a ser más conscientes de lo que beben.</span>
            </div>
            <div style={{ background: "#F7F3EE", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600", color: "#6E1A3D" }}>Proyecto para cliente · Web</span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "24px", color: "#34503E" }}>Diego Pomareda</strong>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>Una web para presentar un perfil público y sus propuestas con claridad.</span>
            </div>
          </div>
          <div>
            <Link href="/es/lab" style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "52px", padding: "0 28px", borderRadius: "999px", background: "#34503E", color: "#F7F3EE", fontSize: "15px", fontWeight: "500" }}>Visitar el Lab →</Link>
          </div>
        </div>
      </section>
      <ContactBand />
      <SiteFooter hint={v.showHint} />
    </>
  );
}
