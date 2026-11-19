// @ts-nocheck
// Generated from the portfolio design canvas.
import Link from "next/link";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import ContactBand from "@/components/site/ContactBand";
import CaseNav from "@/components/site/CaseNav";

export default function OptoCase() {
  return (
    <>
      <SiteHeader />
      <section style={{ padding: "56px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <Link href="/es/lab" style={{ alignSelf: "flex-start", fontSize: "15px", fontWeight: "500", color: "#4B524D" }}>← Volver al Lab</Link>
          <div style={{ display: "flex", flexDirection: "column", gap: "22px", maxWidth: "1000px" }}>
            <p style={{ margin: "0", fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#A02B5B" }}>Opto · Trabajo final de máster, ELISAVA · Equipo de 5</p>
            <h1 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(46px, 5.4vw, 84px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }}>
              Salir con amigos,{" "}
              <em>sin la presión de beber.</em>
            </h1>
            <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.7", color: "#4B524D", maxWidth: "780px" }}>
              Opto es el concepto de una app móvil para personas que quieren beber menos sin renunciar a su vida social. Propone planes sin alcohol, ayuda a elegir en el bar y controla el presupuesto de la noche. Fue nuestro trabajo final del Máster en ELISAVA, diseñado en un equipo de cinco personas.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "24px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "16px", borderTop: "1.5px solid #34503E" }}>
              <span style={{ fontSize: "13px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Mi rol</span>
              <span style={{ fontSize: "16px", fontWeight: "600", lineHeight: "1.45", color: "#34503E" }}>Diseñadora UX/UI en un equipo de 5</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "16px", borderTop: "1.5px solid #34503E" }}>
              <span style={{ fontSize: "13px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Contexto</span>
              <span style={{ fontSize: "16px", fontWeight: "600", lineHeight: "1.45", color: "#34503E" }}>Trabajo final del Máster en UX de ELISAVA</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "16px", borderTop: "1.5px solid #34503E" }}>
              <span style={{ fontSize: "13px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Duración</span>
              <span style={{ fontSize: "16px", fontWeight: "600", lineHeight: "1.45", color: "#34503E" }}>Febrero – julio 2025</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "16px", borderTop: "1.5px solid #34503E" }}>
              <span style={{ fontSize: "13px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Mi parte</span>
              <span style={{ fontSize: "16px", fontWeight: "600", lineHeight: "1.45", color: "#34503E" }}>Entrevista a experta · Journeys · Flujos · Wireframes · UI del flujo de crear un plan</span>
            </div>
          </div>
          <img src="/images/v2/opto-hero.webp" alt="Pantallas de la app Opto: bienvenida, planes, carta del bar, ahorro y conexiones" style={{ width: "100%", height: "auto", display: "block", borderRadius: "32px" }} />
        </div>
      </section>
      <section style={{ padding: "0 clamp(20px, 5vw, 80px) 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "28px" }} data-reveal="">
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "16px", borderTop: "1.5px solid #34503E" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(24px, 2.2vw, 32px)", lineHeight: "1.15", color: "#34503E" }}>90 respuestas a la encuesta</span>
              <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#4B524D" }}>Más del 60 % quería beber menos pero aún no había empezado.</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "16px", borderTop: "1.5px solid #34503E" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(24px, 2.2vw, 32px)", lineHeight: "1.15", color: "#34503E" }}>9 entrevistas en profundidad</span>
              <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#4B524D" }}>Con personas que beben en contextos sociales.</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "16px", borderTop: "1.5px solid #34503E" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(24px, 2.2vw, 32px)", lineHeight: "1.15", color: "#34503E" }}>1 entrevista a una experta</span>
              <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#4B524D" }}>Con una psicóloga especializada en consumo de alcohol, que hice yo.</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "16px", borderTop: "1.5px solid #34503E" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(24px, 2.2vw, 32px)", lineHeight: "1.15", color: "#34503E" }}>53%</span>
              <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#4B524D" }}>de quienes respondieron la encuesta señaló la presión social como su principal barrera.</span>
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
                  <span className="dm-f" style={{ "--i": "0" }}>Querer</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "1" }}>beber</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "2" }}>menos</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "3" }}>es</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "4" }}>fácil,</span>
                  {" "}
                  <em>
                    <span className="dm-f" style={{ "--i": "5" }}>hacerlo</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "6" }}>con</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "7" }}>amigos,</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "8" }}>no</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "9" }}>tanto.</span>
                  </em>
                </h2>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "flex-start" }}>
            <div style={{ flex: "1 1 380px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#4B524D" }}>
                Para mucha gente, el alcohol es simplemente parte de salir. En nuestra encuesta, la mayoría de quienes querían beber menos aún no había empezado, y la salud era su motivo más fuerte para cambiar. Lo que les frenaba no era la información, sino el momento social: la ronda, la promo, el amigo que pregunta por qué.
              </p>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#4B524D" }}>
                Nuestro reto era diseñar una experiencia que ayudara a las personas a comprender sus hábitos y tomar decisiones más conscientes, sin recurrir a una comunicación restrictiva ni moralista.
              </p>
            </div>
            <div style={{ flex: "1 1 480px", minWidth: "0" }}>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#4B524D" }}>Éramos cinco diseñadores. Dentro del equipo, yo:</p>
              <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "#4B524D" }}>
                  <span style={{ flex: "0 0 auto", marginTop: "3px", color: "#B8336A" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                  </span>
                  <span>Entrevisté a una psicóloga especializada en consumo de alcohol, lo que definió el tono de toda la app</span>
                </li>
                <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "#4B524D" }}>
                  <span style={{ flex: "0 0 auto", marginTop: "3px", color: "#B8336A" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                  </span>
                  <span>Trabajé en los user journeys, los user flows y los requerimientos</span>
                </li>
                <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "#4B524D" }}>
                  <span style={{ flex: "0 0 auto", marginTop: "3px", color: "#B8336A" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                  </span>
                  <span>Participé en los wireframes</span>
                </li>
                <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "#4B524D" }}>
                  <span style={{ flex: "0 0 auto", marginTop: "3px", color: "#B8336A" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                  </span>
                  <span>Diseñé la UI del flujo de crear un plan, sobre el design system que creamos en equipo</span>
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
                  <span className="dm-f" style={{ "--i": "0" }}>Qué</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "1" }}>frena</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "2" }}>a</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "3" }}>la</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "4" }}>gente</span>
                  {" "}
                  <em>
                    <span className="dm-f" style={{ "--i": "5" }}>a</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "6" }}>beber</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "7" }}>menos.</span>
                  </em>
                </h2>
              </div>
              <div style={{ flex: "1 1 340px", paddingTop: "0.5em" }}>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#4B524D" }}>
                  Nos centramos en adultos jóvenes que beben en contextos sociales y partimos de cuatro hipótesis: la presión social hace difícil decir que no, beber está ligado a ideas tradicionales de masculinidad, el consumo consciente empieza a ser aspiracional y los motivos para reducir tienen más que ver con el bienestar personal.
                </p>
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "20px" }} data-reveal="">
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "40px", lineHeight: "1", color: "#B8336A" }}>01</span>
              <strong style={{ fontSize: "18px", fontWeight: "600", color: "#34503E" }}>Encuesta</strong>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>90 respuestas sobre hábitos, motivaciones y barreras.</span>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "40px", lineHeight: "1", color: "#B8336A" }}>02</span>
              <strong style={{ fontSize: "18px", fontWeight: "600", color: "#34503E" }}>Entrevistas</strong>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>9 entrevistas en profundidad a personas que beben en contextos sociales.</span>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "40px", lineHeight: "1", color: "#B8336A" }}>03</span>
              <strong style={{ fontSize: "18px", fontWeight: "600", color: "#34503E" }}>Entrevista a experta</strong>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>Una psicóloga especializada en consumo de alcohol, para entender el proceso de cambio y cómo hablar de él.</span>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "40px", lineHeight: "1", color: "#B8336A" }}>04</span>
              <strong style={{ fontSize: "18px", fontWeight: "600", color: "#34503E" }}>Investigación bibliográfica</strong>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>Datos de salud pública de la OMS, el Ministerio de Sanidad y el Pla de Drogues i Addiccions de Barcelona.</span>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "40px", lineHeight: "1", color: "#B8336A" }}>05</span>
              <strong style={{ fontSize: "18px", fontWeight: "600", color: "#34503E" }}>Benchmark</strong>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>
                Apps de cambio de hábitos como Quitzilla, I Am Sober y Kwit: buenos trackers, pero casi sin vida social ni ideas de planes.
              </span>
            </div>
          </div>
          <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(28px, 2.6vw, 38px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }}>Cinco insights</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }} data-reveal="">
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "22px", lineHeight: "1.3", color: "#34503E" }}>Relacionarse sin alcohol puede generar inseguridad, sobre todo con gente desconocida.</strong>
              <blockquote style={{ margin: "0", paddingLeft: "16px", borderLeft: "2px solid #B8336A", fontSize: "15px", lineHeight: "1.6", fontStyle: "italic", color: "#1D2A22" }}>
                “Para mí el alcohol es como una especie de lubricante social. Cuando estás con gente que no conoces mucho, te ayuda a relajarte.”
              </blockquote>
              <span style={{ fontSize: "13px", color: "#4B524D" }}>Participante de la encuesta, 29 años</span>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "22px", lineHeight: "1.3", color: "#34503E" }}>Para muchos, pedir una copa es automático: más costumbre que deseo.</strong>
              <blockquote style={{ margin: "0", paddingLeft: "16px", borderLeft: "2px solid #B8336A", fontSize: "15px", lineHeight: "1.6", fontStyle: "italic", color: "#1D2A22" }}>“A veces pido cerveza solo por no pensar. Lo primero que me ofrecen y veo son las promos 2x1 en cervezas.”</blockquote>
              <span style={{ fontSize: "13px", color: "#4B524D" }}>Participante de la encuesta, 31 años</span>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "22px", lineHeight: "1.3", color: "#34503E" }}>El dinero es un motivo concreto para beber menos.</strong>
              <blockquote style={{ margin: "0", paddingLeft: "16px", borderLeft: "2px solid #B8336A", fontSize: "15px", lineHeight: "1.6", fontStyle: "italic", color: "#1D2A22" }}>
                “Salir a tomar algo ya no es como antes. Entre taxis y copas se van 50 € fácil. Así que últimamente intento beber menos.”
              </blockquote>
              <span style={{ fontSize: "13px", color: "#4B524D" }}>Persona entrevistada, 26 años</span>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "22px", lineHeight: "1.3", color: "#34503E" }}>Es más fácil no beber cuando el grupo tampoco bebe.</strong>
              <blockquote style={{ margin: "0", paddingLeft: "16px", borderLeft: "2px solid #B8336A", fontSize: "15px", lineHeight: "1.6", fontStyle: "italic", color: "#1D2A22" }}>“Si estás con gente sobria, ni te lo planteas. El problema es cuando todos empiezan.”</blockquote>
              <span style={{ fontSize: "13px", color: "#4B524D" }}>Participante de la encuesta, 28 años</span>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "22px", lineHeight: "1.3", color: "#34503E" }}>Un plan con propósito gana a la copa.</strong>
              <blockquote style={{ margin: "0", paddingLeft: "16px", borderLeft: "2px solid #B8336A", fontSize: "15px", lineHeight: "1.6", fontStyle: "italic", color: "#1D2A22" }}>“Ahora me doy cuenta de que en otros planes, como montaña o salir de día, me lo paso mejor sin beber.”</blockquote>
              <span style={{ fontSize: "13px", color: "#4B524D" }}>Persona entrevistada, 26 años</span>
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: "#34503E", padding: "96px clamp(20px, 5vw, 80px)", color: "#F7F3EE", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <p style={{ margin: "0", display: "flex", alignItems: "baseline", gap: "14px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "36px", color: "#F3D1DC" }}>03</span>
              <span style={{ fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#CFDCCB" }}>El tono</span>
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 40px", alignItems: "flex-start" }}>
              <div style={{ flex: "999 1 520px" }}>
                <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(36px, 3.8vw, 58px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#F7F3EE" }} data-fill="">
                  <span className="dm-f" style={{ "--i": "0" }}>Cero</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "1" }}>culpa,</span>
                  {" "}
                  <em>
                    <span className="dm-f" style={{ "--i": "2" }}>cero</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "3" }}>sermones.</span>
                  </em>
                </h2>
              </div>
              <div style={{ flex: "1 1 340px", paddingTop: "0.5em" }}>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#CFDCCB" }}>
                  Entrevisté a una psicóloga especializada en consumo de alcohol. Su consejo principal marcó todo lo demás: quien quiere beber menos a menudo ya se siente juzgado, así que la app nunca debía sumar culpa. Lo convertimos en requerimientos para todo el equipo.
                </p>
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            <div style={{ background: "#F7F3EE", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#F3D1DC", color: "#6E1A3D", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />
                </svg>
              </span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "22px", color: "#34503E" }}>Sin lenguaje moralista</strong>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>Nada de “fallaste” o “recaíste”. Se celebran los avances y no se castigan los tropiezos.</span>
            </div>
            <div style={{ background: "#F7F3EE", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#F3D1DC", color: "#6E1A3D", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="8" />
                  <circle cx="12" cy="12" r="3.5" />
                </svg>
              </span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "22px", color: "#34503E" }}>No solo abstinencia</strong>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>Beber menos es una meta válida. Dejarlo del todo nunca se presenta como la única opción.</span>
            </div>
            <div style={{ background: "#F7F3EE", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#F3D1DC", color: "#6E1A3D", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "22px", color: "#34503E" }}>Nada forzado en público</strong>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>Nadie tiene que compartir sus logros en público para conseguir recompensas.</span>
            </div>
            <div style={{ background: "#F7F3EE", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#F3D1DC", color: "#6E1A3D", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" />
                </svg>
              </span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "22px", color: "#34503E" }}>Cercana, no clínica</strong>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>Una interfaz cálida y colorida que no se parece en nada a una app de salud.</span>
            </div>
          </div>
          <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.7", color: "#CFDCCB", maxWidth: "720px" }}>
            Por eso la app celebra en vez de advertir. Después de una noche, te dice: “¡Sobreviviste a la noche y tu dinero también!”
          </p>
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
                  <span className="dm-f" style={{ "--i": "1" }}>personas,</span>
                  {" "}
                  <em>
                    <span className="dm-f" style={{ "--i": "2" }}>tres</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "3" }}>formas</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "4" }}>de</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "5" }}>beber</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "6" }}>menos.</span>
                  </em>
                </h2>
              </div>
              <div style={{ flex: "1 1 340px", paddingTop: "0.5em" }}>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#4B524D" }}>
                  Convertimos la investigación en tres personas, cada una con su job to be done y su journey. Sus fotos en el proyecto las generó con IA un compañero, así que aquí dejo solo sus historias.
                </p>
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }} data-reveal="">
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ alignSelf: "flex-start", padding: "6px 14px", borderRadius: "999px", background: "#F3D1DC", color: "#6E1A3D", fontSize: "13px", fontWeight: "600" }}>Quiere beber menos, no quedarse en casa</span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "26px", color: "#34503E" }}>Luis, 28 años</strong>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.7", color: "#4B524D" }}>Ingeniero en Barcelona. Bebe sobre todo los fines de semana con amigos y quiere más energía y menos resacas.</p>
              <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A02B5B", marginTop: "6px" }}>Lo que necesita</span>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.7", color: "#1D2A22" }}>
                “Cuando salgo con amigos, quiero poder limitar mi consumo de forma sencilla y sin fricción social, para sentirme bien y cumplir mis planes del día siguiente.”
              </p>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ alignSelf: "flex-start", padding: "6px 14px", borderRadius: "999px", background: "#F3D1DC", color: "#6E1A3D", fontSize: "13px", fontWeight: "600" }}>Cuida lo que gasta</span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "26px", color: "#34503E" }}>Laia, 27 años</strong>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.7", color: "#4B524D" }}>Profesional creativa en Barcelona. Disfruta saliendo, pero siente presión cuando todo gira en torno al alcohol.</p>
              <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A02B5B", marginTop: "6px" }}>Lo que necesita</span>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.7", color: "#1D2A22" }}>
                “Quiero disfrutar de planes con mis amigos que no giren en torno al alcohol, y poder llevar un control de lo que gasto en bebidas cuando salgo.”
              </p>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ alignSelf: "flex-start", padding: "6px 14px", borderRadius: "999px", background: "#F3D1DC", color: "#6E1A3D", fontSize: "13px", fontWeight: "600" }}>Busca mejores planes</span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "26px", color: "#34503E" }}>Jordi, 28 años</strong>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.7", color: "#4B524D" }}>Freelance que prioriza su salud y el deporte. Elige con cuidado a qué eventos va.</p>
              <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A02B5B", marginTop: "6px" }}>Lo que necesita</span>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.7", color: "#1D2A22" }}>“Cuando no encuentro un plan que encaje conmigo, quiero crear el mío y compartirlo con amigos que buscan lo mismo.”</p>
            </div>
          </div>
          <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
            <img src="/images/v2/opto-journey.webp" alt="Journey actual de Luis, desde la invitación hasta la mañana siguiente" style={{ width: "100%", height: "auto", display: "block", borderRadius: "24px", boxShadow: "0 20px 50px rgba(29,42,34,0.10)" }} />
            <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#4B524D", padding: "0 6px" }}>
              Journey actual de Luis, desde la invitación hasta la mañana siguiente. Cada punto bajo se convirtió en una oportunidad para la app.
            </figcaption>
          </figure>
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
                  <span className="dm-f" style={{ "--i": "1" }}>ideas</span>
                  {" "}
                  <em>
                    <span className="dm-f" style={{ "--i": "2" }}>para</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "3" }}>una</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "4" }}>noche</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "5" }}>de</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "6" }}>fiesta.</span>
                  </em>
                </h2>
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", gap: "24px" }} data-reveal="">
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "32px", display: "flex", flexDirection: "column", gap: "12px", gap: "16px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "36px", lineHeight: "1", color: "#B8336A" }}>01</span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "26px", color: "#34503E" }}>Planes que compiten con el bar</strong>
              <div style={{ display: "grid", gridTemplateColumns: "110px minmax(0, 1fr)", gap: "16px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A02B5B" }}>Problema</span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>La mayoría de planes que la gente encuentra en internet giran en torno a bares y copas.</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "110px minmax(0, 1fr)", gap: "16px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A02B5B" }}>Decisión</span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>
                  Una sección de Planes con actividades sin alcohol cerca, por categoría, donde cualquiera puede además crear su propio plan.
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "110px minmax(0, 1fr)", gap: "16px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A02B5B" }}>Por qué</span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>Da a la gente algo mejor a lo que decir que sí.</span>
              </div>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "32px", display: "flex", flexDirection: "column", gap: "12px", gap: "16px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "36px", lineHeight: "1", color: "#B8336A" }}>02</span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "26px", color: "#34503E" }}>Una carta que muestra las alternativas</strong>
              <div style={{ display: "grid", gridTemplateColumns: "110px minmax(0, 1fr)", gap: "16px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A02B5B" }}>Problema</span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>En los bares, las bebidas sin alcohol se esconden al final de la carta mientras las promos de cerveza están arriba.</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "110px minmax(0, 1fr)", gap: "16px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A02B5B" }}>Decisión</span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>
                  Al escanear el QR del bar se ve su carta con las bebidas sin alcohol y bajas en alcohol primero, con etiquetas como “más barato” o “menos calórico”.
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "110px minmax(0, 1fr)", gap: "16px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A02B5B" }}>Por qué</span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>Cambia la opción fácil sin una sola advertencia.</span>
              </div>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "32px", display: "flex", flexDirection: "column", gap: "12px", gap: "16px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "36px", lineHeight: "1", color: "#B8336A" }}>03</span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "26px", color: "#34503E" }}>OptoCard, un presupuesto para la noche</strong>
              <div style={{ display: "grid", gridTemplateColumns: "110px minmax(0, 1fr)", gap: "16px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A02B5B" }}>Problema</span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>El dinero motiva a beber menos, pero nadie lleva la cuenta en mitad de la noche.</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "110px minmax(0, 1fr)", gap: "16px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A02B5B" }}>Decisión</span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>
                  Una tarjeta virtual de prepago que recargas con lo que quieres gastar esa noche. Lo que sobra va a una meta de ahorro, como un viaje a Ibiza.
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "110px minmax(0, 1fr)", gap: "16px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A02B5B" }}>Por qué</span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>Beber menos se convierte en algo que ganas, no en algo a lo que renuncias.</span>
              </div>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "32px", display: "flex", flexDirection: "column", gap: "12px", gap: "16px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "36px", lineHeight: "1", color: "#B8336A" }}>04</span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "26px", color: "#34503E" }}>Gente en la misma onda</strong>
              <div style={{ display: "grid", gridTemplateColumns: "110px minmax(0, 1fr)", gap: "16px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A02B5B" }}>Problema</span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>Es más fácil no beber cuando alguien más tampoco bebe.</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "110px minmax(0, 1fr)", gap: "16px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A02B5B" }}>Decisión</span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>Opto sugiere personas cerca con la misma meta e intereses en común, para conoceros y hacer planes juntos.</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "110px minmax(0, 1fr)", gap: "16px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A02B5B" }}>Por qué</span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>Ser quien no bebe deja de sentirse solitario.</span>
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
                  Seis secciones sostienen la app: Inicio, Planes, Comunidad, Dinero, Contenido educativo y Perfil. Dibujamos un flujo para cada persona. El de Jordi, crear su propio plan, es el que después llevé a UI.
                </p>
              </div>
            </div>
          </div>
          <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
            <img src="/images/v2/opto-sitemap.webp" alt="Sitemap de Opto con sus seis secciones principales" style={{ width: "100%", height: "auto", display: "block", borderRadius: "24px", boxShadow: "0 20px 50px rgba(29,42,34,0.10)" }} />
            <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#4B524D", padding: "0 6px" }}>Sitemap: inicio, planes, comunidad, dinero, contenido educativo y perfil.</figcaption>
          </figure>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", gap: "28px" }}>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              <img src="/images/v2/opto-userflow.webp" alt="User flow de Jordi: de explorar planes a crear y compartir el suyo" style={{ width: "100%", height: "auto", display: "block", borderRadius: "24px", boxShadow: "0 20px 50px rgba(29,42,34,0.10)" }} />
              <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#4B524D", padding: "0 6px" }}>Flujo de Jordi: explora planes, crea uno, lo publica, lo comparte y registra a los asistentes.</figcaption>
            </figure>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              <img src="/images/v2/opto-wire-evento.webp" alt="Wireframes del flujo de creación de evento" style={{ width: "100%", height: "auto", display: "block", borderRadius: "24px", boxShadow: "0 20px 50px rgba(29,42,34,0.10)" }} />
              <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#4B524D", padding: "0 6px" }}>Wireframes del flujo de creación de evento, la base de mi UI.</figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section id="s07" data-case-section="Mi UI" style={{ padding: "96px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <p style={{ margin: "0", display: "flex", alignItems: "baseline", gap: "14px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "36px", color: "#B8336A" }}>07</span>
              <span style={{ fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Mi UI</span>
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 40px", alignItems: "flex-start" }}>
              <div style={{ flex: "999 1 520px" }}>
                <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(36px, 3.8vw, 58px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }} data-fill="">
                  <span className="dm-f" style={{ "--i": "0" }}>Crear</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "1" }}>un</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "2" }}>plan,</span>
                  {" "}
                  <em>
                    <span className="dm-f" style={{ "--i": "3" }}>de</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "4" }}>la</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "5" }}>idea</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "6" }}>a</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "7" }}>la</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "8" }}>invitación.</span>
                  </em>
                </h2>
              </div>
              <div style={{ flex: "1 1 340px", paddingTop: "0.5em" }}>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#4B524D" }}>
                  Jordi quiere proponer algo distinto a sus amigos, pero no encuentra un plan que le guste. Este es el flujo que diseñé en UI, sobre nuestro design system. Haz scroll dentro de cada móvil.
                </p>
              </div>
            </div>
          </div>
          <div style={{ position: "relative", background: "#F3D1DC", borderRadius: "36px", padding: "clamp(24px, 4vw, 56px)", overflow: "hidden", minHeight: "auto" }}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "clamp(14px, 1.8vw, 22px)" }}>
              <figure style={{ margin: "0", flex: "0 1 172px", display: "flex", flexDirection: "column", gap: "14px", alignItems: "center" }}>
                <div style={{ width: "100%", boxSizing: "border-box", borderRadius: "34px", padding: "8px", background: "#1E211F", boxShadow: "0 30px 60px rgba(29,42,34,0.25)" }}>
                  <div tabIndex={0} aria-label="Pantalla de Planes con el botón Crear plan, desplazable" style={{ height: "380px", overflowY: "auto", borderRadius: "26px", background: "#FFFFFF" }}>
                    <img src="/images/v2/opto-flow-planes.webp" alt="Pantalla de Planes con el botón Crear plan" style={{ width: "100%", height: "auto", display: "block" }} />
                  </div>
                </div>
                <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#1D2A22", textAlign: "center" }}>1. Explora planes y toca “Crear plan”</figcaption>
              </figure>
              <figure style={{ margin: "0", flex: "0 1 172px", display: "flex", flexDirection: "column", gap: "14px", alignItems: "center" }}>
                <div style={{ width: "100%", boxSizing: "border-box", borderRadius: "34px", padding: "8px", background: "#1E211F", boxShadow: "0 30px 60px rgba(29,42,34,0.25)" }}>
                  <div tabIndex={0} aria-label="Formulario para crear un plan, desplazable" style={{ height: "380px", overflowY: "auto", borderRadius: "26px", background: "#FFFFFF" }}>
                    <img src="/images/v2/opto-flow-form.webp" alt="Formulario para crear un plan" style={{ width: "100%", height: "auto", display: "block" }} />
                  </div>
                </div>
                <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#1D2A22", textAlign: "center" }}>2. Título, fecha, hora, lugar, categoría e imagen</figcaption>
              </figure>
              <figure style={{ margin: "0", flex: "0 1 172px", display: "flex", flexDirection: "column", gap: "14px", alignItems: "center" }}>
                <div style={{ width: "100%", boxSizing: "border-box", borderRadius: "34px", padding: "8px", background: "#1E211F", boxShadow: "0 30px 60px rgba(29,42,34,0.25)" }}>
                  <div tabIndex={0} aria-label="Página del nuevo plan, desplazable" style={{ height: "380px", overflowY: "auto", borderRadius: "26px", background: "#FFFFFF" }}>
                    <img src="/images/v2/opto-flow-creado.webp" alt="Página del nuevo plan" style={{ width: "100%", height: "auto", display: "block" }} />
                  </div>
                </div>
                <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#1D2A22", textAlign: "center" }}>3. La página del plan: quién va, dónde y qué llevar</figcaption>
              </figure>
              <figure style={{ margin: "0", flex: "0 1 172px", display: "flex", flexDirection: "column", gap: "14px", alignItems: "center" }}>
                <div style={{ width: "100%", boxSizing: "border-box", borderRadius: "34px", padding: "8px", background: "#1E211F", boxShadow: "0 30px 60px rgba(29,42,34,0.25)" }}>
                  <div tabIndex={0} aria-label="Menú para compartir e invitar a amigos, desplazable" style={{ height: "380px", overflowY: "auto", borderRadius: "26px", background: "#FFFFFF" }}>
                    <img src="/images/v2/opto-flow-compartir.webp" alt="Menú para compartir e invitar a amigos" style={{ width: "100%", height: "auto", display: "block" }} />
                  </div>
                </div>
                <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#1D2A22", textAlign: "center" }}>4. Compártelo con tus amigos por cualquier app</figcaption>
              </figure>
              <figure style={{ margin: "0", flex: "0 1 172px", display: "flex", flexDirection: "column", gap: "14px", alignItems: "center" }}>
                <div style={{ width: "100%", boxSizing: "border-box", borderRadius: "34px", padding: "8px", background: "#1E211F", boxShadow: "0 30px 60px rgba(29,42,34,0.25)" }}>
                  <div tabIndex={0} aria-label="Inicio con el próximo plan, desplazable" style={{ height: "380px", overflowY: "auto", borderRadius: "26px", background: "#FFFFFF" }}>
                    <img src="/images/v2/opto-flow-home.webp" alt="Inicio con el próximo plan" style={{ width: "100%", height: "auto", display: "block" }} />
                  </div>
                </div>
                <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#1D2A22", textAlign: "center" }}>5. Aparece en Inicio, con un QR para registrar a los asistentes</figcaption>
              </figure>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            <div style={{ background: "#F7F3EE", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "22px", color: "#34503E" }}>Solo lo necesario para publicar</strong>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.7", color: "#4B524D" }}>
                Título, descripción, fecha, hora, lugar, categoría e imagen. Limitar asistentes y hacerlo público son interruptores opcionales, desactivados por defecto.
              </p>
            </div>
            <div style={{ background: "#F7F3EE", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "22px", color: "#34503E" }}>Respuestas antes de decir que sí</strong>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.7", color: "#4B524D" }}>
                La página del plan muestra cuándo, dónde, cómo llegar, quién lo creó, quién va y qué llevar, para que los amigos decidan rápido.
              </p>
            </div>
            <div style={{ background: "#F7F3EE", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "22px", color: "#34503E" }}>Premiar que vayas</strong>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.7", color: "#4B524D" }}>
                Los asistentes escanean su QR en el punto de encuentro para ganar puntos. Se premia compartir un plan, no beber menos, y así el tono sigue libre de culpa.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="s08" data-case-section="Diseño visual" style={{ background: "#DDE7D7", padding: "96px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <p style={{ margin: "0", display: "flex", alignItems: "baseline", gap: "14px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "36px", color: "#B8336A" }}>08</span>
              <span style={{ fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Diseño visual</span>
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 40px", alignItems: "flex-start" }}>
              <div style={{ flex: "999 1 520px" }}>
                <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(36px, 3.8vw, 58px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }} data-fill="">
                  <span className="dm-f" style={{ "--i": "0" }}>Un</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "1" }}>color</span>
                  {" "}
                  <em>
                    <span className="dm-f" style={{ "--i": "2" }}>para</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "3" }}>cada</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "4" }}>parte</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "5" }}>de</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "6" }}>la</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "7" }}>app.</span>
                  </em>
                </h2>
              </div>
              <div style={{ flex: "1 1 340px", paddingTop: "0.5em" }}>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#4B524D" }}>
                  En lugar de un color de marca dominante, elegimos una paleta vibrante para un público joven y dimos a cada color una función: rosa para salud y bienestar, morado para bares y cartas, azul para la comunidad, amarillo para planes y eventos, y verde para el dinero y la OptoCard. Hatton para los titulares e IBM Plex Sans para todo lo demás.
                </p>
              </div>
            </div>
          </div>
          <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
            <img src="/images/v2/opto-mood.webp" alt="Moodboard con referencias editoriales y de apps vibrantes" style={{ width: "100%", height: "auto", display: "block", borderRadius: "24px", boxShadow: "0 20px 50px rgba(29,42,34,0.10)" }} />
            <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#4B524D", padding: "0 6px" }}>Moodboard.</figcaption>
          </figure>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", gap: "28px" }}>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              <img src="/images/v2/opto-palette.webp" alt="Paleta de color con una función para cada color" style={{ width: "100%", height: "auto", display: "block", borderRadius: "24px", boxShadow: "0 20px 50px rgba(29,42,34,0.10)" }} />
              <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#4B524D", padding: "0 6px" }}>Paleta: cada color ligado a una parte de la app.</figcaption>
            </figure>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              <img src="/images/v2/opto-components.webp" alt="Componentes de UI: botones, etiquetas, filtros, tarjetas y barra de navegación" style={{ width: "100%", height: "auto", display: "block", borderRadius: "24px", boxShadow: "0 20px 50px rgba(29,42,34,0.10)" }} />
              <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#4B524D", padding: "0 6px" }}>Componentes del design system del equipo.</figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section id="s09" data-case-section="La solución" style={{ padding: "96px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <p style={{ margin: "0", display: "flex", alignItems: "baseline", gap: "14px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "36px", color: "#B8336A" }}>09</span>
              <span style={{ fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>La solución</span>
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 40px", alignItems: "flex-start" }}>
              <div style={{ flex: "999 1 520px" }}>
                <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(36px, 3.8vw, 58px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }} data-fill="">
                  <span className="dm-f" style={{ "--i": "0" }}>Cuatro</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "1" }}>formas</span>
                  {" "}
                  <em>
                    <span className="dm-f" style={{ "--i": "2" }}>de</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "3" }}>elegir.</span>
                  </em>
                </h2>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(28px, 4vw, 64px)", alignItems: "center" }}>
            <div style={{ flex: "1.2 1 420px", minWidth: "0", background: "#FFFFFF", borderRadius: "32px", padding: "clamp(16px, 2.5vw, 32px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src="/images/v2/opto-sol-planes.webp" alt="Pantallas de Planes: planes para ti y explorar por categoría" style={{ width: "100%", maxWidth: "620px", height: "auto", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 320px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(30px, 2.8vw, 42px)", lineHeight: "1.1", color: "#34503E" }}>Planes</strong>
              <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.7", color: "#4B524D", maxWidth: "480px" }}>
                Planes sin alcohol cerca de ti, de un fin de semana de jazz a un taller de coctelería 0.0, y la opción de crear el tuyo.
              </p>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap-reverse", gap: "clamp(28px, 4vw, 64px)", alignItems: "center" }}>
            <div style={{ flex: "1 1 320px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(30px, 2.8vw, 42px)", lineHeight: "1.1", color: "#34503E" }}>Carta</strong>
              <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.7", color: "#4B524D", maxWidth: "480px" }}>
                Escanea el QR del bar y ve primero las bebidas sin alcohol y bajas en alcohol, con etiquetas como “más barato”, “menos calórico” o “solo aquí”.
              </p>
            </div>
            <div style={{ flex: "1.2 1 420px", minWidth: "0", background: "#FFFFFF", borderRadius: "32px", padding: "clamp(16px, 2.5vw, 32px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src="/images/v2/opto-sol-menu.webp" alt="Pantallas de la carta del bar con las bebidas sin alcohol primero" style={{ width: "100%", maxWidth: "620px", height: "auto", display: "block" }} />
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(28px, 4vw, 64px)", alignItems: "center" }}>
            <div style={{ flex: "1.2 1 420px", minWidth: "0", background: "#FFFFFF", borderRadius: "32px", padding: "clamp(16px, 2.5vw, 32px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src="/images/v2/opto-sol-card.webp" alt="Pantallas de la OptoCard: resumen de la noche, tarjeta y recarga" style={{ width: "100%", maxWidth: "620px", height: "auto", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 320px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(30px, 2.8vw, 42px)", lineHeight: "1.1", color: "#34503E" }}>OptoCard</strong>
              <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.7", color: "#4B524D", maxWidth: "480px" }}>
                Fija un presupuesto para la noche y quédate con lo que sobra. “¡Sobreviviste a la noche y tu dinero también!” lo lleva a tu meta de ahorro.
              </p>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap-reverse", gap: "clamp(28px, 4vw, 64px)", alignItems: "center" }}>
            <div style={{ flex: "1 1 320px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(30px, 2.8vw, 42px)", lineHeight: "1.1", color: "#34503E" }}>Conexiones</strong>
              <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.7", color: "#4B524D", maxWidth: "480px" }}>Encuentra personas cerca que también quieren beber menos y comparten tus intereses, y quedad para hacer planes juntos.</p>
            </div>
            <div style={{ flex: "1.2 1 420px", minWidth: "0", background: "#FFFFFF", borderRadius: "32px", padding: "clamp(16px, 2.5vw, 32px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src="/images/v2/opto-sol-conexion.webp" alt="Pantallas de conexión: perfil, coincidencia, distancia y lista de amigos" style={{ width: "100%", maxWidth: "620px", height: "auto", display: "block" }} />
            </div>
          </div>
          <img src="/images/v2/opto-trio.webp" alt="Pantallas de Opto: bienvenida, fin de la noche, carta del bar y planes" style={{ width: "100%", height: "auto", display: "block" }} />
        </div>
      </section>
      <section id="s10" data-case-section="Reflexiones" style={{ background: "#DDE7D7", padding: "96px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <p style={{ margin: "0", display: "flex", alignItems: "baseline", gap: "14px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "36px", color: "#B8336A" }}>10</span>
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
                  <span>
                    Hablar pronto con una experta cambió el proyecto: una voz sin culpa se convirtió en un requerimiento, no en una elección de estilo.
                  </span>
                </li>
                <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>
                  <span style={{ flex: "0 0 auto", marginTop: "3px", color: "#B8336A" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                  </span>
                  <span>
                    Una paleta vibrante aporta energía, pero tuvimos que revisar constantemente el contraste y la jerarquía para que siguiera siendo accesible.
                  </span>
                </li>
                <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>
                  <span style={{ flex: "0 0 auto", marginTop: "3px", color: "#B8336A" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                  </span>
                  <span>
                    En un producto de cambio de hábitos, los detalles emocionales como celebrar una meta no son decoración. Son lo que mantiene a la gente.
                  </span>
                </li>
                <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>
                  <span style={{ flex: "0 0 auto", marginTop: "3px", color: "#B8336A" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                  </span>
                  <span>
                    Intentamos abarcar muchas funcionalidades. Viéndolo ahora, profundizaría en un flujo principal en vez de diseñarlos todos.
                  </span>
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
                  <span>Pruebas de usabilidad. No entraban en el alcance del proyecto, así que serían mi primer paso.</span>
                </li>
                <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>
                  <span style={{ flex: "0 0 auto", marginTop: "3px", color: "#B8336A" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                  </span>
                  <span>Elegir un flujo principal, probablemente planes, y llevarlo a un prototipo testeado.</span>
                </li>
                <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>
                  <span style={{ flex: "0 0 auto", marginTop: "3px", color: "#B8336A" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                  </span>
                  <span>Un onboarding más profundo para personalizar las recomendaciones desde el primer día.</span>
                </li>
                <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>
                  <span style={{ flex: "0 0 auto", marginTop: "3px", color: "#B8336A" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                  </span>
                  <span>Una sección de comunidad más sólida, con patrones sociales conocidos en el lenguaje propio de Opto.</span>
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
