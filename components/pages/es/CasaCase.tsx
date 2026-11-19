// @ts-nocheck
// Generated from the portfolio design canvas.
import Link from "next/link";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import ContactBand from "@/components/site/ContactBand";
import CaseNav from "@/components/site/CaseNav";

export default function CasaCase() {
  return (
    <>
      <SiteHeader />
      <section style={{ padding: "56px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <Link href="/es/lab" style={{ alignSelf: "flex-start", fontSize: "15px", fontWeight: "500", color: "#4B524D" }}>← Volver al Lab</Link>
          <div style={{ display: "flex", flexDirection: "column", gap: "22px", maxWidth: "1000px" }}>
            <p style={{ margin: "0", fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#A02B5B" }}>A Casa Portuguesa · Proyecto de máster, ELISAVA · Cliente real</p>
            <h1 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(46px, 5.4vw, 84px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }}>
              No solo una tienda:{" "}
              <em>una forma de visitar Portugal desde Barcelona.</em>
            </h1>
            <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.7", color: "#4B524D", maxWidth: "780px" }}>
              A Casa Portuguesa es una pastelería y tienda de productos portugueses en Gràcia, Barcelona. Además de pastéis de nata, vino y conservas, organizan catas y talleres, pero su web apenas lo mostraba. En un equipo de cinco, lideré el UX y la UI de una nueva experiencia web donde la gente puede comprar, reservar una experiencia y conocer la cultura detrás de la comida.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "24px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "16px", borderTop: "1.5px solid #34503E" }}>
              <span style={{ fontSize: "13px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Mi rol</span>
              <span style={{ fontSize: "16px", fontWeight: "600", lineHeight: "1.45", color: "#34503E" }}>UX/UI Designer, liderando el diseño en un equipo de 5</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "16px", borderTop: "1.5px solid #34503E" }}>
              <span style={{ fontSize: "13px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Contexto</span>
              <span style={{ fontSize: "16px", fontWeight: "600", lineHeight: "1.45", color: "#34503E" }}>Proyecto final del primer semestre, Máster en UX en ELISAVA</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "16px", borderTop: "1.5px solid #34503E" }}>
              <span style={{ fontSize: "13px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Cliente</span>
              <span style={{ fontSize: "16px", fontWeight: "600", lineHeight: "1.45", color: "#34503E" }}>A Casa Portuguesa, una tienda real en Gràcia</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "16px", borderTop: "1.5px solid #34503E" }}>
              <span style={{ fontSize: "13px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Alcance</span>
              <span style={{ fontSize: "16px", fontWeight: "600", lineHeight: "1.45", color: "#34503E" }}>Investigación · Arquitectura · Wireframes · UI</span>
            </div>
          </div>
          <div style={{ position: "relative", background: "#F3D1DC", borderRadius: "36px", padding: "clamp(20px, 3vw, 40px)", overflow: "hidden", minHeight: "auto" }}>
            <img src="/images/v2/casa-set.jpg" alt="Web de A Casa Portuguesa: inicio, favoritos, vinos, tradición y experiencias" style={{ width: "100%", height: "auto", display: "block", borderRadius: "18px" }} />
          </div>
        </div>
      </section>
      <section style={{ padding: "0 clamp(20px, 5vw, 80px) 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "28px" }} data-reveal="">
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "16px", borderTop: "1.5px solid #34503E" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(24px, 2.2vw, 32px)", lineHeight: "1.15", color: "#34503E" }}>33 respuestas a la encuesta</span>
              <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#4B524D" }}>Para validar hábitos de consumo e interés en nuevos servicios.</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "16px", borderTop: "1.5px solid #34503E" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(24px, 2.2vw, 32px)", lineHeight: "1.15", color: "#34503E" }}>3 entrevistas + los dueños</span>
              <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#4B524D" }}>Clientes y las personas que llevan la tienda.</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "16px", borderTop: "1.5px solid #34503E" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(24px, 2.2vw, 32px)", lineHeight: "1.15", color: "#34503E" }}>6 benchmarks</span>
              <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#4B524D" }}>De Manteigaria en Lisboa a Magnolia Bakery en Nueva York.</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "16px", borderTop: "1.5px solid #34503E" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(24px, 2.2vw, 32px)", lineHeight: "1.15", color: "#34503E" }}>5 métodos de investigación</span>
              <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#4B524D" }}>Entrevistas, mystery shopper, visitas de campo, encuesta y benchmark.</span>
            </div>
          </div>
        </div>
      </section>
      <section id="s01" data-case-section="Contexto y mi rol" style={{ background: "#DDE7D7", padding: "96px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <p style={{ margin: "0", display: "flex", alignItems: "baseline", gap: "14px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "36px", color: "#B8336A" }}>01</span>
              <span style={{ fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Contexto y mi rol</span>
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 40px", alignItems: "flex-start" }}>
              <div style={{ flex: "999 1 520px" }}>
                <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(36px, 3.8vw, 58px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }} data-fill="">
                  <span className="dm-f" style={{ "--i": "0" }}>Una</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "1" }}>tienda</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "2" }}>con</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "3" }}>más</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "4" }}>que</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "5" }}>ofrecer</span>
                  {" "}
                  <em>
                    <span className="dm-f" style={{ "--i": "6" }}>de</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "7" }}>lo</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "8" }}>que</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "9" }}>mostraba</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "10" }}>su</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "11" }}>web.</span>
                  </em>
                </h2>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "flex-start" }}>
            <div style={{ flex: "1 1 380px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#4B524D" }}>
                A Casa Portuguesa vende pastelería, pan, vino y conservas tradicionales portuguesas, y organiza catas y talleres. También ofrece catering. Nada de eso se veía en internet: la web no reflejaba la calidez de la tienda y la mayoría de los clientes con los que hablamos ni sabían que existía.
              </p>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#4B524D" }}>Trabajamos directamente con los dueños para entender la tienda, sus clientes y cómo querían crecer.</p>
            </div>
            <div style={{ flex: "1 1 480px", minWidth: "0" }}>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#4B524D" }}>
                Éramos cinco personas con perfiles distintos, y tres de mis compañeras eran nuevas en UX/UI. Como yo ya tenía experiencia en diseño de producto, asumí el liderazgo del diseño:
              </p>
              <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "#4B524D" }}>
                  <span style={{ flex: "0 0 auto", marginTop: "3px", color: "#B8336A" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                  </span>
                  <span>Planifiqué y llevé a cabo la investigación con el equipo</span>
                </li>
                <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "#4B524D" }}>
                  <span style={{ flex: "0 0 auto", marginTop: "3px", color: "#B8336A" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                  </span>
                  <span>Definí la arquitectura de información y los flujos de usuario</span>
                </li>
                <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "#4B524D" }}>
                  <span style={{ flex: "0 0 auto", marginTop: "3px", color: "#B8336A" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                  </span>
                  <span>Diseñé los wireframes y la UI</span>
                </li>
                <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "#4B524D" }}>
                  <span style={{ flex: "0 0 auto", marginTop: "3px", color: "#B8336A" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                  </span>
                  <span>
                    Guié las decisiones visuales para que el equipo avanzara en una misma dirección; las ilustraciones las dibujó una compañera
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="s02" data-case-section="Investigación" style={{ padding: "96px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <p style={{ margin: "0", display: "flex", alignItems: "baseline", gap: "14px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "36px", color: "#B8336A" }}>02</span>
              <span style={{ fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Investigación</span>
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 40px", alignItems: "flex-start" }}>
              <div style={{ flex: "999 1 520px" }}>
                <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(36px, 3.8vw, 58px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }} data-fill="">
                  <span className="dm-f" style={{ "--i": "0" }}>Cinco</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "1" }}>formas</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "2" }}>de</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "3" }}>mirar</span>
                  {" "}
                  <em>
                    <span className="dm-f" style={{ "--i": "4" }}>la</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "5" }}>misma</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "6" }}>tienda.</span>
                  </em>
                </h2>
              </div>
              <div style={{ flex: "1 1 340px", paddingTop: "0.5em" }}>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#4B524D" }}>
                  Partimos de tres hipótesis: la gente viene sobre todo por los pastéis de nata y rara vez prueba otra cosa; no usa la web para hacer pedidos; y no participa en catas ni talleres porque no sabe que existen.
                </p>
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "20px" }} data-reveal="">
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "40px", lineHeight: "1", color: "#B8336A" }}>01</span>
              <strong style={{ fontSize: "18px", fontWeight: "600", color: "#34503E" }}>Entrevistas en profundidad</strong>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>Con los dueños, para entender la visión de la marca, y con 3 clientes habituales.</span>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "40px", lineHeight: "1", color: "#B8336A" }}>02</span>
              <strong style={{ fontSize: "18px", fontWeight: "600", color: "#34503E" }}>Mystery shopper</strong>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>Recorrimos explorar, descubrir, comprar y consumir, en la tienda y online.</span>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "40px", lineHeight: "1", color: "#B8336A" }}>03</span>
              <strong style={{ fontSize: "18px", fontWeight: "600", color: "#34503E" }}>Visitas de campo</strong>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>Observar cómo la gente encuentra la tienda, se mueve por ella y decide qué comprar.</span>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "40px", lineHeight: "1", color: "#B8336A" }}>04</span>
              <strong style={{ fontSize: "18px", fontWeight: "600", color: "#34503E" }}>Encuesta</strong>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>33 respuestas para medir hábitos e interés en nuevos servicios.</span>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "40px", lineHeight: "1", color: "#B8336A" }}>05</span>
              <strong style={{ fontSize: "18px", fontWeight: "600", color: "#34503E" }}>Benchmark y tendencias</strong>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>Brunells, A Brasileira, Manteigaria, Mercè Vins, La Felicità y Magnolia Bakery.</span>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(28px, 4vw, 56px)", alignItems: "center" }}>
            <div style={{ flex: "1 1 320px", maxWidth: "520px" }}>
              <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
                <img src="/images/v2/casa-campo.jpg" alt="Visitas de campo a la tienda de Gràcia" style={{ width: "100%", height: "auto", display: "block", borderRadius: "24px", boxShadow: "0 20px 50px rgba(29,42,34,0.10)" }} />
                <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#4B524D", padding: "0 6px" }}>Visitas de campo a la tienda de Gràcia.</figcaption>
              </figure>
            </div>
            <div style={{ flex: "1.3 1 420px", display: "flex", flexDirection: "column", gap: "22px" }}>
              <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(28px, 2.6vw, 38px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }}>Lo que encontramos</h2>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#4B524D" }}>
                La mayoría de los clientes compraba en la tienda, sobre todo pastéis de nata, y venía cada semana o de vez en cuando. Casi nadie usaba la web para hacer pedidos. Pero a muchos les daban curiosidad las catas de vino y aprender a hacer los pasteles.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "28px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "16px", borderTop: "1.5px solid #34503E" }}>
                  <span style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(24px, 2.2vw, 32px)", lineHeight: "1.15", color: "#34503E" }}>67%</span>
                  <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#4B524D" }}>estaba interesado en catas o talleres para aprender y vivir una experiencia auténtica.</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "16px", borderTop: "1.5px solid #34503E" }}>
                  <span style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(24px, 2.2vw, 32px)", lineHeight: "1.15", color: "#34503E" }}>58%</span>
                  <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#4B524D" }}>visita la web de una pastelería para ver qué encontrará antes de ir.</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "16px", borderTop: "1.5px solid #34503E" }}>
                  <span style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(24px, 2.2vw, 32px)", lineHeight: "1.15", color: "#34503E" }}>55%</span>
                  <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#4B524D" }}>pide comida online, sobre todo los fines de semana.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: "#34503E", padding: "96px clamp(20px, 5vw, 80px)", color: "#F7F3EE", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <p style={{ margin: "0", display: "flex", alignItems: "baseline", gap: "14px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "36px", color: "#F3D1DC" }}>03</span>
              <span style={{ fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#CFDCCB" }}>La idea</span>
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 40px", alignItems: "flex-start" }}>
              <div style={{ flex: "999 1 520px" }}>
                <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(36px, 3.8vw, 58px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#F7F3EE" }} data-fill="">
                  <span className="dm-f" style={{ "--i": "0" }}>Diseñar</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "1" }}>una</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "2" }}>experiencia,</span>
                  {" "}
                  <em>
                    <span className="dm-f" style={{ "--i": "3" }}>no</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "4" }}>un</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "5" }}>checkout.</span>
                  </em>
                </h2>
              </div>
              <div style={{ flex: "1 1 340px", paddingTop: "0.5em" }}>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#CFDCCB" }}>
                  No quería otra tienda online donde añades al carrito, pagas y te vas, ni un catálogo donde puedes mirar pero no comprar. La investigación apuntaba a otra cosa: la gente quería sentir Portugal. Así que la web se convirtió en un lugar para comprar, reservar una experiencia y aprender.
                </p>
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }} data-reveal="">
            <div style={{ background: "#F7F3EE", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#F3D1DC", color: "#6E1A3D", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />
                </svg>
              </span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "22px", color: "#34503E" }}>Autenticidad</strong>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>Cada elemento, de las imágenes a las ilustraciones, transmite el aspecto y la calidez de Portugal.</span>
            </div>
            <div style={{ background: "#F7F3EE", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#F3D1DC", color: "#6E1A3D", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" />
                </svg>
              </span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "22px", color: "#34503E" }}>Experiencias</strong>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>Las catas y talleres pasan a ser un camino principal, no una nota al pie.</span>
            </div>
            <div style={{ background: "#F7F3EE", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#F3D1DC", color: "#6E1A3D", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="9" cy="8" r="3.5" />
                  <path d="M2 20c0-3.5 3-6 7-6s7 2.5 7 6" />
                  <path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14c2.4.6 4 2.6 4 6" />
                </svg>
              </span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "22px", color: "#34503E" }}>Fácil de usar</strong>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>Navegación clara y una forma sencilla de comprar o reservar, para que la marca nunca estorbe.</span>
            </div>
          </div>
        </div>
      </section>
      <section id="s04" data-case-section="Personas" style={{ background: "#DDE7D7", padding: "96px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <p style={{ margin: "0", display: "flex", alignItems: "baseline", gap: "14px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "36px", color: "#B8336A" }}>04</span>
              <span style={{ fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Personas</span>
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 40px", alignItems: "flex-start" }}>
              <div style={{ flex: "999 1 520px" }}>
                <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(36px, 3.8vw, 58px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }} data-fill="">
                  <span className="dm-f" style={{ "--i": "0" }}>Tres</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "1" }}>clientes,</span>
                  {" "}
                  <em>
                    <span className="dm-f" style={{ "--i": "2" }}>tres</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "3" }}>motivos</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "4" }}>para</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "5" }}>venir.</span>
                  </em>
                </h2>
              </div>
              <div style={{ flex: "1 1 340px", paddingTop: "0.5em" }}>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#4B524D" }}>Convertimos la investigación en tres personas y trazamos un journey para cada una.</p>
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }} data-reveal="">
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ alignSelf: "flex-start", padding: "6px 14px", borderRadius: "999px", background: "#F3D1DC", color: "#6E1A3D", fontSize: "13px", fontWeight: "600" }}>El cliente nostálgico</span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "26px", color: "#34503E" }}>Pedro</strong>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.7", color: "#4B524D" }}>Portugués, vive fuera de Barcelona. Quiere seguir conectado con los sabores de casa y compartirlos con sus amigos.</p>
              <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A02B5B", marginTop: "6px" }}>Lo que necesita</span>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.7", color: "#1D2A22" }}>Pedidos online fáciles con click &amp; collect, recetas de casa y puntos que lo premien por volver.</p>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ alignSelf: "flex-start", padding: "6px 14px", borderRadius: "999px", background: "#F3D1DC", color: "#6E1A3D", fontSize: "13px", fontWeight: "600" }}>La compradora práctica</span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "26px", color: "#34503E" }}>María</strong>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.7", color: "#4B524D" }}>Vive en Gràcia y encontró la tienda en Google Maps. Le gusta planificar sus compras y sacarles partido.</p>
              <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A02B5B", marginTop: "6px" }}>Lo que necesita</span>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.7", color: "#1D2A22" }}>Promociones claras, un registro rápido y beneficios que pueda ver en su cuenta.</p>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ alignSelf: "flex-start", padding: "6px 14px", borderRadius: "999px", background: "#F3D1DC", color: "#6E1A3D", fontSize: "13px", fontWeight: "600" }}>El explorador</span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "26px", color: "#34503E" }}>Marcos</strong>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.7", color: "#4B524D" }}>Se mudó a Barcelona y busca experiencias gastronómicas para compartir con amigos.</p>
              <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A02B5B", marginTop: "6px" }}>Lo que necesita</span>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.7", color: "#1D2A22" }}>Información clara y actualizada sobre catas y talleres, y una forma fácil de reservar una fecha.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="s05" data-case-section="Decisiones clave" style={{ padding: "96px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <p style={{ margin: "0", display: "flex", alignItems: "baseline", gap: "14px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "36px", color: "#B8336A" }}>05</span>
              <span style={{ fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Decisiones clave</span>
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 40px", alignItems: "flex-start" }}>
              <div style={{ flex: "999 1 520px" }}>
                <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(36px, 3.8vw, 58px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }} data-fill="">
                  <span className="dm-f" style={{ "--i": "0" }}>Cuatro</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "1" }}>decisiones</span>
                  {" "}
                  <em>
                    <span className="dm-f" style={{ "--i": "2" }}>que</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "3" }}>dieron</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "4" }}>forma</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "5" }}>a</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "6" }}>la</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "7" }}>web.</span>
                  </em>
                </h2>
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", gap: "24px" }} data-reveal="">
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "32px", display: "flex", flexDirection: "column", gap: "12px", gap: "16px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "36px", lineHeight: "1", color: "#B8336A" }}>01</span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "26px", color: "#34503E" }}>Experiencias en la navegación principal</strong>
              <div style={{ display: "grid", gridTemplateColumns: "110px minmax(0, 1fr)", gap: "16px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A02B5B" }}>Problema</span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>Las catas y talleres ya existían en la tienda, pero casi nadie lo sabía.</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "110px minmax(0, 1fr)", gap: "16px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A02B5B" }}>Decisión</span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>
                  “Catas y talleres” está junto a la tienda en el menú principal, con filtros por tipo, fecha y hora, y un flujo de reserva con confirmación.
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "110px minmax(0, 1fr)", gap: "16px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A02B5B" }}>Por qué</span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>Convierte un servicio escondido en uno de los motivos para visitar la web.</span>
              </div>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "32px", display: "flex", flexDirection: "column", gap: "12px", gap: "16px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "36px", lineHeight: "1", color: "#B8336A" }}>02</span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "26px", color: "#34503E" }}>La cultura como parte de la experiencia</strong>
              <div style={{ display: "grid", gridTemplateColumns: "110px minmax(0, 1fr)", gap: "16px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A02B5B" }}>Problema</span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>La tienda vende una cultura, no solo productos, y esa sensación se perdía en internet.</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "110px minmax(0, 1fr)", gap: "16px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A02B5B" }}>Decisión</span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>
                  Una sección “Tradición” con recetas típicas que se pueden filtrar por sabor, ciudad y dificultad, un carrusel para descubrir lugares de Portugal y una canción del día con su propio reproductor. En la barra superior de cada página hay una playlist de Spotify.
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "110px minmax(0, 1fr)", gap: "16px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A02B5B" }}>Por qué</span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>La gente conoce Portugal mientras navega, y cada receta enlaza con productos que puede comprar.</span>
              </div>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "32px", display: "flex", flexDirection: "column", gap: "12px", gap: "16px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "36px", lineHeight: "1", color: "#B8336A" }}>03</span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "26px", color: "#34503E" }}>Un club que premia volver</strong>
              <div style={{ display: "grid", gridTemplateColumns: "110px minmax(0, 1fr)", gap: "16px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A02B5B" }}>Problema</span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>Los clientes habituales no tenían motivos para registrarse online.</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "110px minmax(0, 1fr)", gap: "16px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A02B5B" }}>Decisión</span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>
                  Club A Casa: 1 punto por cada euro gastado en la tienda u online, cupones que se canjean con un código QR en el mostrador, descuentos en catas y tres niveles, de “Amante de los Pastéis” a “Embajador Portugués”.
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "110px minmax(0, 1fr)", gap: "16px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A02B5B" }}>Por qué</span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>Conecta la web con la tienda física y da a la gente un motivo para volver.</span>
              </div>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "32px", display: "flex", flexDirection: "column", gap: "12px", gap: "16px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "36px", lineHeight: "1", color: "#B8336A" }}>04</span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "26px", color: "#34503E" }}>Sensación artesanal, estructura clara</strong>
              <div style={{ display: "grid", gridTemplateColumns: "110px minmax(0, 1fr)", gap: "16px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A02B5B" }}>Problema</span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>Una marca muy decorativa puede hacer que una tienda sea difícil de usar.</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "110px minmax(0, 1fr)", gap: "16px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A02B5B" }}>Decisión</span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>
                  Las ilustraciones a mano y los patrones de azulejos enmarcan el contenido, mientras la tipografía (Bricolage Grotesque y Sora), los componentes y la jerarquía se mantienen sencillos y coherentes.
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "110px minmax(0, 1fr)", gap: "16px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A02B5B" }}>Por qué</span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>La web se siente portuguesa sin estorbar al comprar o reservar.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="s06" data-case-section="Estructura" style={{ background: "#DDE7D7", padding: "96px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <p style={{ margin: "0", display: "flex", alignItems: "baseline", gap: "14px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "36px", color: "#B8336A" }}>06</span>
              <span style={{ fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Estructura</span>
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 40px", alignItems: "flex-start" }}>
              <div style={{ flex: "999 1 520px" }}>
                <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(36px, 3.8vw, 58px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }} data-fill="">
                  <span className="dm-f" style={{ "--i": "0" }}>Del</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "1" }}>sitemap</span>
                  {" "}
                  <em>
                    <span className="dm-f" style={{ "--i": "2" }}>a</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "3" }}>los</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "4" }}>wireframes.</span>
                  </em>
                </h2>
              </div>
              <div style={{ flex: "1 1 340px", paddingTop: "0.5em" }}>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#4B524D" }}>
                  Cuatro secciones sostienen la experiencia: Tienda, Catas y talleres, Tradición y Club A Casa. Diseñé un flujo para el objetivo principal de cada persona y luego pasé de los bocetos a los wireframes.
                </p>
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", gap: "28px" }}>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              <img src="/images/v2/casa-sitemap.jpg" alt="Sitemap de la nueva web" style={{ width: "100%", height: "auto", display: "block", borderRadius: "24px", boxShadow: "0 20px 50px rgba(29,42,34,0.10)" }} />
              <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#4B524D", padding: "0 6px" }}>Sitemap: tienda, catas y talleres, tradición y el club.</figcaption>
            </figure>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              <img src="/images/v2/casa-flows.jpg" alt="Flujos de usuario de las tres personas" style={{ width: "100%", height: "auto", display: "block", borderRadius: "24px", boxShadow: "0 20px 50px rgba(29,42,34,0.10)" }} />
              <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#4B524D", padding: "0 6px" }}>Flujos de usuario: pedir con click &amp; collect, unirse al club, reservar una cata.</figcaption>
            </figure>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", gap: "28px" }}>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              <img src="/images/v2/casa-bocetos.jpg" alt="Bocetos a mano de las páginas principales" style={{ width: "100%", height: "auto", display: "block", borderRadius: "24px", boxShadow: "0 20px 50px rgba(29,42,34,0.10)" }} />
              <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#4B524D", padding: "0 6px" }}>Primeros bocetos.</figcaption>
            </figure>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              <img src="/images/v2/casa-wire.jpg" alt="Wireframes de baja fidelidad en escritorio y móvil" style={{ width: "100%", height: "auto", display: "block", borderRadius: "24px", boxShadow: "0 20px 50px rgba(29,42,34,0.10)" }} />
              <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#4B524D", padding: "0 6px" }}>Wireframes de baja fidelidad para definir la estructura.</figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section id="s07" data-case-section="Diseño visual" style={{ padding: "96px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <p style={{ margin: "0", display: "flex", alignItems: "baseline", gap: "14px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "36px", color: "#B8336A" }}>07</span>
              <span style={{ fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Diseño visual</span>
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 40px", alignItems: "flex-start" }}>
              <div style={{ flex: "999 1 520px" }}>
                <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(36px, 3.8vw, 58px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }} data-fill="">
                  <span className="dm-f" style={{ "--i": "0" }}>Tradición</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "1" }}>que</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "2" }}>puedes</span>
                  {" "}
                  <em>
                    <span className="dm-f" style={{ "--i": "3" }}>ver</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "4" }}>y</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "5" }}>tocar.</span>
                  </em>
                </h2>
              </div>
              <div style={{ flex: "1 1 340px", paddingTop: "0.5em" }}>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#4B524D" }}>
                  El azul y el naranja de los azulejos y la cerámica portuguesa, imágenes tratadas en azul e ilustraciones que hacen que la web se sienta hecha a mano.
                </p>
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", gap: "28px" }}>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              <img src="/images/v2/casa-mood.jpg" alt="Moodboard con azulejos, pasteles y la tienda" style={{ width: "100%", height: "auto", display: "block", borderRadius: "24px", boxShadow: "0 20px 50px rgba(29,42,34,0.10)" }} />
              <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#4B524D", padding: "0 6px" }}>Moodboard.</figcaption>
            </figure>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              <img src="/images/v2/casa-ilus.jpg" alt="Ilustraciones a mano de comida y objetos portugueses" style={{ width: "100%", height: "auto", display: "block", borderRadius: "24px", boxShadow: "0 20px 50px rgba(29,42,34,0.10)" }} />
              <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#4B524D", padding: "0 6px" }}>Ilustraciones dibujadas por mi compañera, usadas en toda la web.</figcaption>
            </figure>
          </div>
          <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
            <img src="/images/v2/casa-comp.jpg" alt="Componentes de UI: tarjetas de producto, de experiencias y reseñas" style={{ width: "100%", height: "auto", display: "block", borderRadius: "24px", boxShadow: "0 20px 50px rgba(29,42,34,0.10)" }} />
            <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#4B524D", padding: "0 6px" }}>Componentes de UI: productos, experiencias y reseñas.</figcaption>
          </figure>
        </div>
      </section>
      <section id="s08" data-case-section="La solución" style={{ background: "#DDE7D7", padding: "96px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <p style={{ margin: "0", display: "flex", alignItems: "baseline", gap: "14px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "36px", color: "#B8336A" }}>08</span>
              <span style={{ fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>La solución</span>
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 40px", alignItems: "flex-start" }}>
              <div style={{ flex: "999 1 520px" }}>
                <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(36px, 3.8vw, 58px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }} data-fill="">
                  <span className="dm-f" style={{ "--i": "0" }}>Comprar,</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "1" }}>reservar</span>
                  {" "}
                  <em>
                    <span className="dm-f" style={{ "--i": "2" }}>y</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "3" }}>sentir</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "4" }}>Portugal.</span>
                  </em>
                </h2>
              </div>
              <div style={{ flex: "1 1 340px", paddingTop: "0.5em" }}>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#4B524D" }}>Estas son las páginas finales que diseñamos. Haz scroll dentro de cada ventana para ver la página completa.</p>
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", gap: "28px" }}>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ background: "#FFFFFF", borderRadius: "18px", overflow: "hidden", boxShadow: "0 24px 60px rgba(29,42,34,0.14)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "12px 16px", background: "#F1EEE9" }}>
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#D9D3CB" }} aria-hidden="true" />
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#D9D3CB" }} aria-hidden="true" />
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#D9D3CB" }} aria-hidden="true" />
                  <span style={{ marginLeft: "10px", fontSize: "13px", fontWeight: "600", color: "#4B524D" }}>Inicio</span>
                  <span style={{ marginLeft: "auto", fontSize: "12px", color: "#4B524D" }}>Desliza ↓</span>
                </div>
                <div tabIndex={0} aria-label="Página de inicio, con scroll" style={{ height: "520px", overflowY: "auto" }}>
                  <img src="/images/v2/cp-home.jpg" alt="Página de inicio" style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
              </div>
              <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#4B524D", padding: "0 6px" }}>Inicio: favoritos, experiencias, vinos, tradición y el club, todo a un scroll.</figcaption>
            </figure>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ background: "#FFFFFF", borderRadius: "18px", overflow: "hidden", boxShadow: "0 24px 60px rgba(29,42,34,0.14)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "12px 16px", background: "#F1EEE9" }}>
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#D9D3CB" }} aria-hidden="true" />
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#D9D3CB" }} aria-hidden="true" />
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#D9D3CB" }} aria-hidden="true" />
                  <span style={{ marginLeft: "10px", fontSize: "13px", fontWeight: "600", color: "#4B524D" }}>Catas y talleres</span>
                  <span style={{ marginLeft: "auto", fontSize: "12px", color: "#4B524D" }}>Desliza ↓</span>
                </div>
                <div tabIndex={0} aria-label="Página de catas y talleres, con scroll" style={{ height: "520px", overflowY: "auto" }}>
                  <img src="/images/v2/cp-catas.jpg" alt="Página de catas y talleres" style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
              </div>
              <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#4B524D", padding: "0 6px" }}>Catas y talleres, con filtros por experiencia, fecha y hora.</figcaption>
            </figure>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", gap: "28px" }}>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ background: "#FFFFFF", borderRadius: "18px", overflow: "hidden", boxShadow: "0 24px 60px rgba(29,42,34,0.14)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "12px 16px", background: "#F1EEE9" }}>
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#D9D3CB" }} aria-hidden="true" />
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#D9D3CB" }} aria-hidden="true" />
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#D9D3CB" }} aria-hidden="true" />
                  <span style={{ marginLeft: "10px", fontSize: "13px", fontWeight: "600", color: "#4B524D" }}>Cata de vinos, quesos y conservas</span>
                  <span style={{ marginLeft: "auto", fontSize: "12px", color: "#4B524D" }}>Desliza ↓</span>
                </div>
                <div tabIndex={0} aria-label="Página de detalle de una cata, con scroll" style={{ height: "520px", overflowY: "auto" }}>
                  <img src="/images/v2/cp-pdp-cata.jpg" alt="Página de detalle de una cata" style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
              </div>
              <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#4B524D", padding: "0 6px" }}>La página de una cata explica qué vas a probar y la historia detrás, y luego te deja reservar.</figcaption>
            </figure>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ background: "#FFFFFF", borderRadius: "18px", overflow: "hidden", boxShadow: "0 24px 60px rgba(29,42,34,0.14)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "12px 16px", background: "#F1EEE9" }}>
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#D9D3CB" }} aria-hidden="true" />
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#D9D3CB" }} aria-hidden="true" />
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#D9D3CB" }} aria-hidden="true" />
                  <span style={{ marginLeft: "10px", fontSize: "13px", fontWeight: "600", color: "#4B524D" }}>Pastel de nata</span>
                  <span style={{ marginLeft: "auto", fontSize: "12px", color: "#4B524D" }}>Desliza ↓</span>
                </div>
                <div tabIndex={0} aria-label="Página del producto pastel de nata, con scroll" style={{ height: "520px", overflowY: "auto" }}>
                  <img src="/images/v2/cp-pdp-pastel.jpg" alt="Página del producto pastel de nata" style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
              </div>
              <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#4B524D", padding: "0 6px" }}>Las páginas de producto cuentan cómo se hace y su historia, y enlazan al taller donde aprendes a prepararlo.</figcaption>
            </figure>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", gap: "28px" }}>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ background: "#FFFFFF", borderRadius: "18px", overflow: "hidden", boxShadow: "0 24px 60px rgba(29,42,34,0.14)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "12px 16px", background: "#F1EEE9" }}>
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#D9D3CB" }} aria-hidden="true" />
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#D9D3CB" }} aria-hidden="true" />
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#D9D3CB" }} aria-hidden="true" />
                  <span style={{ marginLeft: "10px", fontSize: "13px", fontWeight: "600", color: "#4B524D" }}>Tienda</span>
                  <span style={{ marginLeft: "auto", fontSize: "12px", color: "#4B524D" }}>Desliza ↓</span>
                </div>
                <div tabIndex={0} aria-label="Página de la tienda con categorías y productos, con scroll" style={{ height: "520px", overflowY: "auto" }}>
                  <img src="/images/v2/cp-shop.jpg" alt="Página de la tienda con categorías y productos" style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
              </div>
              <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#4B524D", padding: "0 6px" }}>La tienda: categorías, filtros y opciones de porción o entera.</figcaption>
            </figure>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ background: "#FFFFFF", borderRadius: "18px", overflow: "hidden", boxShadow: "0 24px 60px rgba(29,42,34,0.14)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "12px 16px", background: "#F1EEE9" }}>
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#D9D3CB" }} aria-hidden="true" />
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#D9D3CB" }} aria-hidden="true" />
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#D9D3CB" }} aria-hidden="true" />
                  <span style={{ marginLeft: "10px", fontSize: "13px", fontWeight: "600", color: "#4B524D" }}>Tradición</span>
                  <span style={{ marginLeft: "auto", fontSize: "12px", color: "#4B524D" }}>Desliza ↓</span>
                </div>
                <div tabIndex={0} aria-label="Página de tradición con recetas, lugares y música, con scroll" style={{ height: "520px", overflowY: "auto" }}>
                  <img src="/images/v2/cp-trad.jpg" alt="Página de tradición con recetas, lugares y música" style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
              </div>
              <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#4B524D", padding: "0 6px" }}>Tradición: recetas filtradas por ciudad, lugares para descubrir y una canción del día.</figcaption>
            </figure>
          </div>
          <div style={{ position: "relative", background: "#F3D1DC", borderRadius: "36px", padding: "clamp(24px, 4vw, 56px)", overflow: "hidden", minHeight: "auto" }}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "clamp(20px, 3vw, 44px)" }}>
              <figure style={{ margin: "0", flex: "0 1 250px", display: "flex", flexDirection: "column", gap: "14px", alignItems: "center" }}>
                <div style={{ width: "100%", boxSizing: "border-box", borderRadius: "34px", padding: "8px", background: "#1E211F", boxShadow: "0 30px 60px rgba(29,42,34,0.25)" }}>
                  <div tabIndex={0} aria-label="Inicio en móvil, con scroll" style={{ height: "560px", overflowY: "auto", borderRadius: "26px", background: "#FFFFFF" }}>
                    <img src="/images/v2/cp-home-m.jpg" alt="Inicio en móvil" style={{ width: "100%", height: "auto", display: "block" }} />
                  </div>
                </div>
                <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#1D2A22", textAlign: "center" }}>Inicio en móvil</figcaption>
              </figure>
              <figure style={{ margin: "0", flex: "0 1 250px", display: "flex", flexDirection: "column", gap: "14px", alignItems: "center" }}>
                <div style={{ width: "100%", boxSizing: "border-box", borderRadius: "34px", padding: "8px", background: "#1E211F", boxShadow: "0 30px 60px rgba(29,42,34,0.25)" }}>
                  <div tabIndex={0} aria-label="Club A Casa en móvil, con scroll" style={{ height: "560px", overflowY: "auto", borderRadius: "26px", background: "#FFFFFF" }}>
                    <img src="/images/v2/cp-club-m.jpg" alt="Club A Casa en móvil" style={{ width: "100%", height: "auto", display: "block" }} />
                  </div>
                </div>
                <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#1D2A22", textAlign: "center" }}>Club A Casa: beneficios y niveles</figcaption>
              </figure>
              <figure style={{ margin: "0", flex: "0 1 250px", display: "flex", flexDirection: "column", gap: "14px", alignItems: "center" }}>
                <div style={{ width: "100%", boxSizing: "border-box", borderRadius: "34px", padding: "8px", background: "#1E211F", boxShadow: "0 30px 60px rgba(29,42,34,0.25)" }}>
                  <div tabIndex={0} aria-label="Saldo de puntos y cupones en móvil, con scroll" style={{ height: "560px", overflowY: "auto", borderRadius: "26px", background: "#FFFFFF" }}>
                    <img src="/images/v2/cp-saldo-m.jpg" alt="Saldo de puntos y cupones en móvil" style={{ width: "100%", height: "auto", display: "block" }} />
                  </div>
                </div>
                <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#1D2A22", textAlign: "center" }}>Tu saldo y tus cupones</figcaption>
              </figure>
              <figure style={{ margin: "0", flex: "0 1 250px", display: "flex", flexDirection: "column", gap: "14px", alignItems: "center" }}>
                <div style={{ width: "100%", boxSizing: "border-box", borderRadius: "34px", padding: "8px", background: "#1E211F", boxShadow: "0 30px 60px rgba(29,42,34,0.25)" }}>
                  <div tabIndex={0} aria-label="Cupón con código QR, con scroll" style={{ height: "560px", overflowY: "auto", borderRadius: "26px", background: "#FFFFFF" }}>
                    <img src="/images/v2/cp-qr-m.jpg" alt="Cupón con código QR" style={{ width: "100%", height: "auto", display: "block" }} />
                  </div>
                </div>
                <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#1D2A22", textAlign: "center" }}>Canjéalo en la tienda con un código QR</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
      <section id="s09" data-case-section="Reflexiones" style={{ padding: "96px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <p style={{ margin: "0", display: "flex", alignItems: "baseline", gap: "14px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "36px", color: "#B8336A" }}>09</span>
              <span style={{ fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Reflexiones</span>
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 40px", alignItems: "flex-start" }}>
              <div style={{ flex: "999 1 520px" }}>
                <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(36px, 3.8vw, 58px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }} data-fill="">
                  <span className="dm-f" style={{ "--i": "0" }}>Lo</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "1" }}>que</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "2" }}>aprendí</span>
                  {" "}
                  <em>
                    <span className="dm-f" style={{ "--i": "3" }}>y</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "4" }}>lo</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "5" }}>que</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "6" }}>viene</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "7" }}>después.</span>
                  </em>
                </h2>
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", gap: "24px" }}>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "32px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "24px", color: "#34503E" }}>Lo que aprendí</strong>
              <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>
                  <span style={{ flex: "0 0 auto", marginTop: "3px", color: "#B8336A" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                  </span>
                  <span>La tradición y la usabilidad pueden convivir si la estructura se mantiene sencilla.</span>
                </li>
                <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>
                  <span style={{ flex: "0 0 auto", marginTop: "3px", color: "#B8336A" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                  </span>
                  <span>La conexión emocional con la cultura portuguesa es lo que hace volver a la gente.</span>
                </li>
                <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>
                  <span style={{ flex: "0 0 auto", marginTop: "3px", color: "#B8336A" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                  </span>
                  <span>Liderar un equipo con experiencias distintas implica explicar el porqué de cada decisión, no solo el qué.</span>
                </li>
                <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>
                  <span style={{ flex: "0 0 auto", marginTop: "3px", color: "#B8336A" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                  </span>
                  <span>Presentamos el diseño final a los dueños y les gustó la dirección.</span>
                </li>
              </ul>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "32px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "24px", color: "#34503E" }}>Próximos pasos</strong>
              <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>
                  <span style={{ flex: "0 0 auto", marginTop: "3px", color: "#B8336A" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                  </span>
                  <span>Pruebas de usabilidad con clientes. No entraban en el alcance del proyecto, así que serían mi primer paso.</span>
                </li>
                <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>
                  <span style={{ flex: "0 0 auto", marginTop: "3px", color: "#B8336A" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                  </span>
                  <span>Versiones móviles de la tienda, las catas, las páginas de producto y el checkout.</span>
                </li>
                <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>
                  <span style={{ flex: "0 0 auto", marginTop: "3px", color: "#B8336A" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                  </span>
                  <span>Una página de escritorio para el Club A Casa que explique los puntos, los beneficios y cómo unirse.</span>
                </li>
                <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>
                  <span style={{ flex: "0 0 auto", marginTop: "3px", color: "#B8336A" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                  </span>
                  <span>Un recomendador que haga unas pocas preguntas y sugiera productos o experiencias.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section style={{ padding: "72px clamp(20px, 5vw, 80px) 96px", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <Link href="/es/lab" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "24px", background: "#DDE7D7", borderRadius: "32px", padding: "40px 48px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <p style={{ margin: "0", fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Siguiente proyecto</p>
              <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(32px, 3.4vw, 52px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }} data-fill="">
                <span className="dm-f" style={{ "--i": "0" }}>Volver</span>
                {" "}
                <span className="dm-f" style={{ "--i": "1" }}>al</span>
                {" "}
                <span className="dm-f" style={{ "--i": "2" }}>Lab</span>
                {" "}
                <em>
                  <span className="dm-f" style={{ "--i": "3" }}>→</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "4" }}>más</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "5" }}>proyectos</span>
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
