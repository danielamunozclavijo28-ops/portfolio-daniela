// @ts-nocheck
// Generated from the portfolio design canvas.
import Link from "next/link";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import ContactBand from "@/components/site/ContactBand";
import CaseNav from "@/components/site/CaseNav";

export default function WalletCase() {
  return (
    <>
      <SiteHeader />
      <section style={{ padding: "56px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <Link href="/es/work" style={{ alignSelf: "flex-start", fontSize: "15px", fontWeight: "500", color: "#4B524D" }}>← Todos los proyectos</Link>
          <div style={{ display: "flex", flexDirection: "column", gap: "22px", maxWidth: "1000px" }}>
            <p style={{ margin: "0", fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#A02B5B" }}>Acreditta Wallet · PWA móvil</p>
            <h1 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(46px, 5.4vw, 84px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }}>
              Un hogar sencillo y pensado para móvil{" "}
              <em>para las credenciales obtenidas.</em>
            </h1>
            <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.7", color: "#4B524D", maxWidth: "760px" }}>
              Dentro de Acreditta, la Wallet dio a quienes reciben las credenciales, no a las organizaciones, un único lugar para aceptarlas, verlas y compartirlas. Como la plataforma B2B era la prioridad, la planteamos como Progressive Web App: la forma más rápida de aportar valor con un equipo pequeño.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "24px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "16px", borderTop: "1.5px solid #34503E" }}>
              <span style={{ fontSize: "13px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Rol</span>
              <span style={{ fontSize: "16px", fontWeight: "600", lineHeight: "1.45", color: "#34503E" }}>Product &amp; UX/UI Designer</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "16px", borderTop: "1.5px solid #34503E" }}>
              <span style={{ fontSize: "13px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Duración</span>
              <span style={{ fontSize: "16px", fontWeight: "600", lineHeight: "1.45", color: "#34503E" }}>2021 – 2024, dentro de Acreditta</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "16px", borderTop: "1.5px solid #34503E" }}>
              <span style={{ fontSize: "13px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Plataforma</span>
              <span style={{ fontSize: "16px", fontWeight: "600", lineHeight: "1.45", color: "#34503E" }}>Progressive Web App, mobile-first</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "16px", borderTop: "1.5px solid #34503E" }}>
              <span style={{ fontSize: "13px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Alcance</span>
              <span style={{ fontSize: "16px", fontWeight: "600", lineHeight: "1.45", color: "#34503E" }}>UX · UI · Reutilización de los componentes de la plataforma</span>
            </div>
          </div>
          <div style={{ position: "relative", background: "#F3D1DC", borderRadius: "36px", padding: "clamp(24px, 4vw, 56px)", overflow: "hidden", minHeight: "auto" }}>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "14px", alignItems: "center" }}>
              <img src="/images/v2/w-mk-set.webp" alt="Pantallas de Acreditta Wallet: lista de credenciales, pantalla de inicio y detalle de la credencial" style={{ width: "100%", maxWidth: "1100px", height: "auto", display: "block" }} />
            </figure>
          </div>
        </div>
      </section>
      <section id="s01" data-case-section="Una decisión de producto" style={{ background: "#DDE7D7", padding: "96px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "flex-end" }}>
            <div style={{ flex: "999 1 520px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <p style={{ margin: "0", display: "flex", alignItems: "baseline", gap: "14px" }}>
                <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "36px", color: "#B8336A" }}>01</span>
                <span style={{ fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Una decisión de producto</span>
              </p>
              <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(36px, 3.8vw, 58px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }} data-fill="">
                <span className="dm-f" style={{ "--i": "0" }}>Por</span>
                {" "}
                <span className="dm-f" style={{ "--i": "1" }}>qué</span>
                {" "}
                <span className="dm-f" style={{ "--i": "2" }}>una</span>
                {" "}
                <span className="dm-f" style={{ "--i": "3" }}>PWA</span>
                {" "}
                <em>
                  <span className="dm-f" style={{ "--i": "4" }}>y</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "5" }}>no</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "6" }}>una</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "7" }}>app</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "8" }}>nativa.</span>
                </em>
              </h2>
            </div>
            <div style={{ flex: "1 1 340px" }}>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#4B524D" }}>
                Junto con desarrollo elegimos una PWA: era más rápida de construir y la Wallet no era el centro del negocio. La app nativa se quedó en la hoja de ruta a largo plazo.
              </p>
            </div>
          </div>
          <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
            <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>
              <span style={{ flex: "0 0 auto", marginTop: "3px", color: "#B8336A" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12l4 4 10-10" />
                </svg>
              </span>
              <span>La plataforma para organizaciones iba primero, porque ahí estaba el negocio</span>
            </li>
            <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>
              <span style={{ flex: "0 0 auto", marginTop: "3px", color: "#B8336A" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12l4 4 10-10" />
                </svg>
              </span>
              <span>Una PWA permitía usar la Wallet en cualquier móvil sin instalar nada</span>
            </li>
            <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>
              <span style={{ flex: "0 0 auto", marginTop: "3px", color: "#B8336A" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12l4 4 10-10" />
                </svg>
              </span>
              <span>Reutilizar los componentes de la plataforma la mantuvo coherente y barata de construir</span>
            </li>
          </ul>
        </div>
      </section>
      <section id="s02" data-case-section="MVP acotado" style={{ padding: "96px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "flex-end" }}>
            <div style={{ flex: "999 1 520px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <p style={{ margin: "0", display: "flex", alignItems: "baseline", gap: "14px" }}>
                <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "36px", color: "#B8336A" }}>02</span>
                <span style={{ fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>MVP acotado</span>
              </p>
              <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(36px, 3.8vw, 58px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }} data-fill="">
                <span className="dm-f" style={{ "--i": "0" }}>Lo</span>
                {" "}
                <span className="dm-f" style={{ "--i": "1" }}>que</span>
                {" "}
                <span className="dm-f" style={{ "--i": "2" }}>diseñamos</span>
                {" "}
                <span className="dm-f" style={{ "--i": "3" }}>y</span>
                {" "}
                <span className="dm-f" style={{ "--i": "4" }}>lanzamos.</span>
              </h2>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }} data-reveal="">
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#F3D1DC", color: "#6E1A3D", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 13l3-8h12l3 8v6H3z" />
                  <path d="M3 13h5l1 3h6l1-3h5" />
                </svg>
              </span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "22px", color: "#34503E" }}>Tu primera insignia</strong>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>El momento en que recibes una credencial: “¡Te han emitido una insignia! Acepta y comparte tu nuevo logro.”</span>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#F3D1DC", color: "#6E1A3D", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 6h7l2 2h9v11H3z" />
                </svg>
              </span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "22px", color: "#34503E" }}>Lista de credenciales</strong>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>Todas tus credenciales en un solo lugar, fáciles de recorrer y encontrar.</span>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#F3D1DC", color: "#6E1A3D", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="5" y="3" width="14" height="18" rx="2" />
                  <path d="M9 8h6M9 12h6M9 16h4" />
                </svg>
              </span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "22px", color: "#34503E" }}>Detalle de la credencial</strong>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>Qué certifica, quién la emitió, cuándo y la evidencia que la respalda.</span>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#F3D1DC", color: "#6E1A3D", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="6" cy="12" r="2.5" />
                  <circle cx="18" cy="6" r="2.5" />
                  <circle cx="18" cy="18" r="2.5" />
                  <path d="M8.2 11l7.6-3.8M8.2 13l7.6 3.8" />
                </svg>
              </span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "22px", color: "#34503E" }}>Compartir</strong>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>Comparte en LinkedIn, X, Facebook, WhatsApp, Instagram o por email, o descárgala.</span>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#F3D1DC", color: "#6E1A3D", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
                </svg>
              </span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "22px", color: "#34503E" }}>Perfil</strong>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>Foto, nombre, idioma y un email de recuperación para mantener tus credenciales seguras.</span>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#F3D1DC", color: "#6E1A3D", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "22px", color: "#34503E" }}>Acceso</strong>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>Registro, inicio de sesión y código de verificación.</span>
            </div>
          </div>
          <div style={{ position: "relative", background: "#DDE7D7", borderRadius: "36px", padding: "clamp(24px, 4vw, 56px)", overflow: "hidden", minHeight: "auto" }}>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "14px", alignItems: "center" }}>
              <img src="/images/v2/w-mk-trio-b.webp" alt="Wallet: insignia recibida, lista de credenciales y detalle de la credencial" style={{ width: "100%", maxWidth: "1000px", height: "auto", display: "block" }} />
            </figure>
          </div>
          <div style={{ position: "relative", background: "#F7F3EE", borderRadius: "36px", padding: "clamp(24px, 4vw, 56px)", overflow: "hidden", minHeight: "auto" }}>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "14px", alignItems: "center" }}>
              <img src="/images/v2/w-mk-duo.webp" alt="Wallet: perfil y edición del perfil" style={{ width: "100%", maxWidth: "720px", height: "auto", display: "block" }} />
              <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#4B524D", textAlign: "center" }}>Perfil y ajustes: foto, nombre, idioma y un email de recuperación.</figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section style={{ background: "#34503E", padding: "96px clamp(20px, 5vw, 80px)", color: "#F7F3EE", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "flex-end" }}>
            <div style={{ flex: "999 1 520px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <p style={{ margin: "0", display: "flex", alignItems: "baseline", gap: "14px" }}>
                <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "36px", color: "#F3D1DC" }}>03</span>
                <span style={{ fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#CFDCCB" }}>El momento que importa</span>
              </p>
              <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(36px, 3.8vw, 58px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#F7F3EE" }} data-fill="">
                <span className="dm-f" style={{ "--i": "0" }}>Recibir</span>
                {" "}
                <span className="dm-f" style={{ "--i": "1" }}>una</span>
                {" "}
                <span className="dm-f" style={{ "--i": "2" }}>credencial</span>
                {" "}
                <em>
                  <span className="dm-f" style={{ "--i": "3" }}>debería</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "4" }}>sentirse</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "5" }}>como</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "6" }}>un</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "7" }}>logro.</span>
                </em>
              </h2>
            </div>
            <div style={{ flex: "1 1 340px" }}>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#CFDCCB" }}>
                La primera pantalla que ve la persona lleva la marca de la organización que emite y conduce a una sola acción: aceptar y compartir.
              </p>
            </div>
          </div>
          <div style={{ position: "relative", background: "#F3D1DC", borderRadius: "36px", padding: "clamp(28px, 5vw, 72px)", overflow: "hidden", minHeight: "auto" }}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "flex-end", gap: "clamp(20px, 4vw, 64px)" }}>
              <div style={{ flex: "0 1 260px" }}>
                <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "14px", alignItems: "center" }}>
                  <img src="/images/v2/w-mk-detalle.webp" alt="Detalle de la credencial" style={{ width: "100%", maxWidth: "260px", height: "auto", display: "block" }} />
                  <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#1D2A22", textAlign: "center" }}>Detalle de la credencial</figcaption>
                </figure>
              </div>
              <div style={{ flex: "0 1 260px" }}>
                <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "14px", alignItems: "center" }}>
                  <img src="/images/v2/w-mk-share.webp" alt="Opciones para compartir" style={{ width: "100%", maxWidth: "260px", height: "auto", display: "block" }} />
                  <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#1D2A22", textAlign: "center" }}>Compártela donde quieras</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="s04" data-case-section="Aprendizajes" style={{ padding: "96px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "flex-end" }}>
            <div style={{ flex: "999 1 520px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <p style={{ margin: "0", display: "flex", alignItems: "baseline", gap: "14px" }}>
                <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "36px", color: "#B8336A" }}>04</span>
                <span style={{ fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Aprendizajes</span>
              </p>
              <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(36px, 3.8vw, 58px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }} data-fill="">
                <span className="dm-f" style={{ "--i": "0" }}>Hacer</span>
                {" "}
                <span className="dm-f" style={{ "--i": "1" }}>menos,</span>
                {" "}
                <em>
                  <span className="dm-f" style={{ "--i": "2" }}>a</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "3" }}>propósito.</span>
                </em>
              </h2>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "20px" }} data-reveal="">
            <div style={{ background: "#DDE7D7", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.7", color: "#1D2A22" }}>
                Limitar el alcance a las tareas esenciales nos permitió dar valor real a quienes reciben las credenciales sin quitar foco al producto B2B principal.
              </p>
            </div>
            <div style={{ background: "#DDE7D7", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.7", color: "#1D2A22" }}>Diseñar los dos lados del mismo producto, quien emite y quien recibe, mejoró cada uno de ellos.</p>
            </div>
          </div>
        </div>
      </section>
      <section style={{ padding: "72px clamp(20px, 5vw, 80px) 96px", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <Link href="/es/work/acreditta" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "24px", background: "#DDE7D7", borderRadius: "32px", padding: "40px 48px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <p style={{ margin: "0", fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Siguiente proyecto</p>
              <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(32px, 3.4vw, 52px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }} data-fill="">
                <span className="dm-f" style={{ "--i": "0" }}>Acreditta</span>
                {" "}
                <em>
                  <span className="dm-f" style={{ "--i": "1" }}>→</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "2" }}>B2B</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "3" }}>SaaS</span>
                </em>
              </h2>
            </div>
            <span style={{ width: "64px", height: "64px", borderRadius: "50%", background: "#34503E", color: "#F7F3EE", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "26px" }}>→</span>
          </Link>
        </div>
      </section>
      <ContactBand />
      <CaseNav />
      <SiteFooter />
    </>
  );
}
