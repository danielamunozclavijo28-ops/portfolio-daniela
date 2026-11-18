// @ts-nocheck
// Generated from the portfolio design canvas.
import Link from "next/link";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import ContactBand from "@/components/site/ContactBand";

export default function LabPage() {
  return (
    <>
      <SiteHeader />
      <section style={{ padding: "64px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "22px", maxWidth: "920px" }}>
            <p style={{ margin: "0", fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Lab de exploración</p>
            <h1 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(48px, 5.8vw, 92px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }}>
              Proyectos más allá{" "}
              <em style={{ color: "#B8336A" }}>del brief.</em>
              <sup className="dm-count" aria-label="3 proyectos">03</sup>
            </h1>
            <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.7", color: "#4B524D", maxWidth: "680px" }}>
              Proyectos académicos y para clientes en los que exploré problemas nuevos, desde el comportamiento y la salud hasta la marca y el e-commerce.
            </p>
          </div>
        </div>
      </section>
      <section style={{ padding: "24px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "40px" }} data-reveal="">
            <Link href="/es/lab/a-casa-portuguesa" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <span className="dm-swap" style={{ position: "relative", display: "block", borderRadius: "24px", overflow: "hidden" }}>
                <img src="/images/v2/casa-portada.jpg" alt="Mockups de A Casa Portuguesa" style={{ width: "100%", height: "300px", objectFit: "cover", objectPosition: "top center", borderRadius: "24px", background: "#F3D1DC", display: "block" }} />
                <img className="dm-swap-2" src="/images/v2/casa-mockups.jpg" alt="A Casa Portuguesa: pantallas de producto y tienda" style={{ width: "100%", height: "300px", objectFit: "cover", objectPosition: "top center", borderRadius: "24px", background: "#F3D1DC", display: "block", position: "absolute", inset: "0" }} />
                <span className="dm-swap-hint" style={{ position: "absolute", left: "14px", bottom: "14px", padding: "6px 12px", borderRadius: "999px", background: "rgba(247,243,238,0.92)", color: "#34503E", fontSize: "12px", fontWeight: "600" }}>Pasa el ratón para ver más</span>
              </span>
              <span style={{ fontSize: "13px", fontWeight: "600", color: "#6E1A3D" }}>Proyecto en equipo · Máster en ELISAVA · Cliente real</span>
              <span style={{ fontFamily: "Fraunces, serif", fontSize: "28px", fontWeight: "500", color: "#34503E" }}>A Casa Portuguesa</span>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>
                Una experiencia web para una pastelería portuguesa en Gràcia: tienda, catas y talleres, y la cultura detrás de la comida. Lideré UX y UI en un equipo de cinco. Uno de los proyectos destacados del semestre.
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <span style={{ padding: "6px 14px", borderRadius: "999px", background: "#DDE7D7", color: "#34503E", fontSize: "13px", fontWeight: "600" }}>Investigación UX</span>
                <span style={{ padding: "6px 14px", borderRadius: "999px", background: "#DDE7D7", color: "#34503E", fontSize: "13px", fontWeight: "600" }}>UX/UI</span>
                <span style={{ padding: "6px 14px", borderRadius: "999px", background: "#DDE7D7", color: "#34503E", fontSize: "13px", fontWeight: "600" }}>E-commerce</span>
              </div>
              <span style={{ fontSize: "15px", fontWeight: "600", color: "#A02B5B" }}>Ver más →</span>
            </Link>
            <Link href="/es/lab/opto" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <span className="dm-swap" style={{ position: "relative", display: "block", borderRadius: "24px", overflow: "hidden" }}>
                <img src="/images/v2/opto-hero.webp" alt="Mockups de Opto" style={{ width: "100%", height: "300px", objectFit: "cover", objectPosition: "top center", borderRadius: "24px", background: "#F3D1DC", display: "block" }} />
                <img className="dm-swap-2" src="/images/v2/opto-sol-planes.webp" alt="Opto: pantallas de planes" style={{ width: "100%", height: "300px", objectFit: "cover", objectPosition: "top center", borderRadius: "24px", background: "#F3D1DC", display: "block", position: "absolute", inset: "0" }} />
                <span className="dm-swap-hint" style={{ position: "absolute", left: "14px", bottom: "14px", padding: "6px 12px", borderRadius: "999px", background: "rgba(247,243,238,0.92)", color: "#34503E", fontSize: "12px", fontWeight: "600" }}>Pasa el ratón para ver más</span>
              </span>
              <span style={{ fontSize: "13px", fontWeight: "600", color: "#6E1A3D" }}>Trabajo final de máster · ELISAVA · Equipo de 5</span>
              <span style={{ fontFamily: "Fraunces, serif", fontSize: "28px", fontWeight: "500", color: "#34503E" }}>Opto</span>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>
                Concepto de app móvil para quienes quieren beber menos sin renunciar a su vida social: planes sin alcohol, una carta de bar que pone primero las alternativas y un presupuesto para la noche. Yo diseñé el flujo de crear un plan.
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <span style={{ padding: "6px 14px", borderRadius: "999px", background: "#DDE7D7", color: "#34503E", fontSize: "13px", fontWeight: "600" }}>Investigación UX</span>
                <span style={{ padding: "6px 14px", borderRadius: "999px", background: "#DDE7D7", color: "#34503E", fontSize: "13px", fontWeight: "600" }}>Producto móvil</span>
                <span style={{ padding: "6px 14px", borderRadius: "999px", background: "#DDE7D7", color: "#34503E", fontSize: "13px", fontWeight: "600" }}>Diseño de comportamiento</span>
                <span style={{ padding: "6px 14px", borderRadius: "999px", background: "#DDE7D7", color: "#34503E", fontSize: "13px", fontWeight: "600" }}>UI</span>
              </div>
              <span style={{ fontSize: "15px", fontWeight: "600", color: "#A02B5B" }}>Ver más →</span>
            </Link>
            <a href="#" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <span className="dm-swap" style={{ position: "relative", display: "block", borderRadius: "24px", overflow: "hidden" }}>
                <img src="/images/v2/diego-hero.jpg" alt="Mockups de Diego Pomareda" style={{ width: "100%", height: "300px", objectFit: "cover", objectPosition: "top center", borderRadius: "24px", background: "#F3D1DC", display: "block" }} />
                <img className="dm-swap-2" src="/images/v2/diego-2.jpg" alt="Diego Pomareda: secciones de la web" style={{ width: "100%", height: "300px", objectFit: "cover", objectPosition: "top center", borderRadius: "24px", background: "#F3D1DC", display: "block", position: "absolute", inset: "0" }} />
                <span className="dm-swap-hint" style={{ position: "absolute", left: "14px", bottom: "14px", padding: "6px 12px", borderRadius: "999px", background: "rgba(247,243,238,0.92)", color: "#34503E", fontSize: "12px", fontWeight: "600" }}>Pasa el ratón para ver más</span>
              </span>
              <span style={{ fontSize: "13px", fontWeight: "600", color: "#6E1A3D" }}>Proyecto para cliente · Web</span>
              <span style={{ fontFamily: "Fraunces, serif", fontSize: "28px", fontWeight: "500", color: "#34503E" }}>Diego Pomareda</span>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>Una web para un candidato público en Perú, diseñada para que su perfil y sus propuestas sean fáciles de explorar.</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <span style={{ padding: "6px 14px", borderRadius: "999px", background: "#DDE7D7", color: "#34503E", fontSize: "13px", fontWeight: "600" }}>Diseño web</span>
                <span style={{ padding: "6px 14px", borderRadius: "999px", background: "#DDE7D7", color: "#34503E", fontSize: "13px", fontWeight: "600" }}>UX/UI</span>
                <span style={{ padding: "6px 14px", borderRadius: "999px", background: "#DDE7D7", color: "#34503E", fontSize: "13px", fontWeight: "600" }}>Arquitectura de información</span>
              </div>
              <span style={{ fontSize: "15px", fontWeight: "600", color: "#A02B5B" }}>Ver más →</span>
            </a>
          </div>
        </div>
      </section>
      <section style={{ background: "#A9C0A0", padding: "96px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden", marginTop: "88px" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "56px", alignItems: "center" }}>
            <div style={{ flex: "1 1 380px", display: "flex", flexDirection: "column", gap: "18px" }}>
              <span style={{ alignSelf: "flex-start" }}>
                <span style={{ padding: "6px 14px", borderRadius: "999px", background: "#F7F3EE", color: "#6E1A3D", fontSize: "13px", fontWeight: "600" }}>Explorando ahora</span>
              </span>
              <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(38px, 4vw, 60px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#1D2A22" }} data-fill="">
                <span className="dm-f" style={{ "--i": "0" }}>Aprendiendo</span>
                {" "}
                <span className="dm-f" style={{ "--i": "1" }}>a</span>
                {" "}
                <span className="dm-f" style={{ "--i": "2" }}>diseñar</span>
                {" "}
                <span className="dm-f" style={{ "--i": "3" }}>con</span>
                {" "}
                <span className="dm-f" style={{ "--i": "4" }}>IA,</span>
                {" "}
                <em>
                  <span className="dm-f" style={{ "--i": "5" }}>no</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "6" }}>solo</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "7" }}>a</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "8" }}>usarla.</span>
                </em>
              </h2>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#1D2A22" }}>
                Cómo puede apoyar la IA cada etapa del proceso de diseño de producto. El objetivo no es automatizar el diseño, sino dejar más espacio para pensar mejor.
              </p>
            </div>
            <ul style={{ flex: "1 1 480px", listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "16px", background: "#F7F3EE", borderRadius: "999px", padding: "10px 26px 10px 10px" }}>
                <span style={{ flex: "0 0 auto", width: "46px", height: "46px", borderRadius: "50%", background: "#F3D1DC", color: "#6E1A3D", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="11" cy="11" r="6" />
                    <path d="M20 20l-4-4" />
                  </svg>
                </span>
                <strong style={{ minWidth: "120px", fontWeight: "600", color: "#34503E" }}>Investigación</strong>
                <span style={{ fontSize: "15px", color: "#4B524D" }}>Síntesis con IA</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "16px", background: "#F7F3EE", borderRadius: "999px", padding: "10px 26px 10px 10px", marginLeft: "28px" }}>
                <span style={{ flex: "0 0 auto", width: "46px", height: "46px", borderRadius: "50%", background: "#F3D1DC", color: "#6E1A3D", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z" />
                  </svg>
                </span>
                <strong style={{ minWidth: "120px", fontWeight: "600", color: "#34503E" }}>Ideación</strong>
                <span style={{ fontSize: "15px", color: "#4B524D" }}>Exploración rápida</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "16px", background: "#F7F3EE", borderRadius: "999px", padding: "10px 26px 10px 10px" }}>
                <span style={{ flex: "0 0 auto", width: "46px", height: "46px", borderRadius: "50%", background: "#F3D1DC", color: "#6E1A3D", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="5" width="12" height="12" rx="2" />
                    <rect x="9" y="9" width="12" height="12" rx="2" />
                  </svg>
                </span>
                <strong style={{ minWidth: "120px", fontWeight: "600", color: "#34503E" }}>Prototipado</strong>
                <span style={{ fontSize: "15px", color: "#4B524D" }}>Iteración más rápida</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "16px", background: "#F7F3EE", borderRadius: "999px", padding: "10px 26px 10px 10px", marginLeft: "28px" }}>
                <span style={{ flex: "0 0 auto", width: "46px", height: "46px", borderRadius: "50%", background: "#F3D1DC", color: "#6E1A3D", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="5" y="3" width="14" height="18" rx="2" />
                    <path d="M9 8h6M9 12h6M9 16h4" />
                  </svg>
                </span>
                <strong style={{ minWidth: "120px", fontWeight: "600", color: "#34503E" }}>Contenido</strong>
                <span style={{ fontSize: "15px", color: "#4B524D" }}>UX writing y exploración</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "16px", background: "#F7F3EE", borderRadius: "999px", padding: "10px 26px 10px 10px" }}>
                <span style={{ flex: "0 0 auto", width: "46px", height: "46px", borderRadius: "50%", background: "#F3D1DC", color: "#6E1A3D", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <path d="M7 10l3 2-3 2M12 15h5" />
                  </svg>
                </span>
                <strong style={{ minWidth: "120px", fontWeight: "600", color: "#34503E" }}>Desarrollo</strong>
                <span style={{ fontSize: "15px", color: "#4B524D" }}>Diseño → código</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "16px", background: "#F7F3EE", borderRadius: "999px", padding: "10px 26px 10px 10px", marginLeft: "28px" }}>
                <span style={{ flex: "0 0 auto", width: "46px", height: "46px", borderRadius: "50%", background: "#F3D1DC", color: "#6E1A3D", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
                  </svg>
                </span>
                <strong style={{ minWidth: "120px", fontWeight: "600", color: "#34503E" }}>Optimización</strong>
                <span style={{ fontSize: "15px", color: "#4B524D" }}>Experimentación rápida</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <ContactBand />
      <SiteFooter />
    </>
  );
}
