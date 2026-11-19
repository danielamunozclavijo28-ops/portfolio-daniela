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
          <Link href="/work" style={{ alignSelf: "flex-start", fontSize: "15px", fontWeight: "500", color: "#4B524D" }}>← All work</Link>
          <div style={{ display: "flex", flexDirection: "column", gap: "22px", maxWidth: "1000px" }}>
            <p style={{ margin: "0", fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#A02B5B" }}>Acreditta Wallet · Mobile PWA</p>
            <h1 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(46px, 5.4vw, 84px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }}>
              A lean, mobile-first home{" "}
              <em>for earned credentials.</em>
            </h1>
            <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.7", color: "#4B524D", maxWidth: "760px" }}>
              Inside Acreditta, the Wallet gave recipients, not organizations, one place to accept, view and share their credentials. Because the B2B platform was the priority, we scoped it as a Progressive Web App: the fastest way to ship value with a small team.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "24px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "16px", borderTop: "1.5px solid #34503E" }}>
              <span style={{ fontSize: "13px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Role</span>
              <span style={{ fontSize: "16px", fontWeight: "600", lineHeight: "1.45", color: "#34503E" }}>Product &amp; UX/UI Designer</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "16px", borderTop: "1.5px solid #34503E" }}>
              <span style={{ fontSize: "13px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Timeline</span>
              <span style={{ fontSize: "16px", fontWeight: "600", lineHeight: "1.45", color: "#34503E" }}>2021 – 2024, within Acreditta</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "16px", borderTop: "1.5px solid #34503E" }}>
              <span style={{ fontSize: "13px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Platform</span>
              <span style={{ fontSize: "16px", fontWeight: "600", lineHeight: "1.45", color: "#34503E" }}>Progressive Web App, mobile-first</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "16px", borderTop: "1.5px solid #34503E" }}>
              <span style={{ fontSize: "13px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Scope</span>
              <span style={{ fontSize: "16px", fontWeight: "600", lineHeight: "1.45", color: "#34503E" }}>UX · UI · Reuse of the platform’s components</span>
            </div>
          </div>
          <div style={{ position: "relative", background: "#F3D1DC", borderRadius: "36px", padding: "clamp(24px, 4vw, 56px)", overflow: "hidden", minHeight: "auto" }}>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "14px", alignItems: "center" }}>
              <img src="/images/v2/w-mk-set.webp" alt="Acreditta Wallet screens: credential list, splash and credential detail" style={{ width: "100%", maxWidth: "1100px", height: "auto", display: "block" }} />
            </figure>
          </div>
        </div>
      </section>
      <section id="s01" data-case-section="A product decision" style={{ background: "#DDE7D7", padding: "96px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <p style={{ margin: "0", display: "flex", alignItems: "baseline", gap: "14px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "36px", color: "#B8336A" }}>01</span>
              <span style={{ fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>A product decision</span>
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 40px", alignItems: "flex-start" }}>
              <div style={{ flex: "999 1 520px" }}>
                <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(36px, 3.8vw, 58px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }} data-fill="">
                  <span className="dm-f" style={{ "--i": "0" }}>Why</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "1" }}>a</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "2" }}>PWA</span>
                  {" "}
                  <em>
                    <span className="dm-f" style={{ "--i": "3" }}>and</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "4" }}>not</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "5" }}>a</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "6" }}>native</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "7" }}>app.</span>
                  </em>
                </h2>
              </div>
              <div style={{ flex: "1 1 340px", paddingTop: "0.5em" }}>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#4B524D" }}>
                  Together with engineering, we chose a PWA: it was faster to build, and the Wallet wasn’t the core of the business. A native app stayed on the long-term roadmap.
                </p>
              </div>
            </div>
          </div>
          <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
            <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>
              <span style={{ flex: "0 0 auto", marginTop: "3px", color: "#B8336A" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12l4 4 10-10" />
                </svg>
              </span>
              <span>The organizations’ platform came first, because that’s where the business was</span>
            </li>
            <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>
              <span style={{ flex: "0 0 auto", marginTop: "3px", color: "#B8336A" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12l4 4 10-10" />
                </svg>
              </span>
              <span>A PWA let recipients use the Wallet on any phone without installing anything</span>
            </li>
            <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>
              <span style={{ flex: "0 0 auto", marginTop: "3px", color: "#B8336A" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12l4 4 10-10" />
                </svg>
              </span>
              <span>Reusing the platform’s components kept it consistent and cheap to build</span>
            </li>
          </ul>
        </div>
      </section>
      <section id="s02" data-case-section="Scoped MVP" style={{ padding: "96px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <p style={{ margin: "0", display: "flex", alignItems: "baseline", gap: "14px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "36px", color: "#B8336A" }}>02</span>
              <span style={{ fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Scoped MVP</span>
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 40px", alignItems: "flex-start" }}>
              <div style={{ flex: "999 1 520px" }}>
                <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(36px, 3.8vw, 58px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }} data-fill="">
                  <span className="dm-f" style={{ "--i": "0" }}>What</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "1" }}>we</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "2" }}>designed</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "3" }}>and</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "4" }}>shipped.</span>
                </h2>
              </div>
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
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "22px", color: "#34503E" }}>Your first badge</strong>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>The moment you receive a credential: “You’ve been issued a badge! Accept and share your new achievement.”</span>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#F3D1DC", color: "#6E1A3D", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 6h7l2 2h9v11H3z" />
                </svg>
              </span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "22px", color: "#34503E" }}>Credential list</strong>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>All your credentials in one place, easy to browse and find.</span>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#F3D1DC", color: "#6E1A3D", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="5" y="3" width="14" height="18" rx="2" />
                  <path d="M9 8h6M9 12h6M9 16h4" />
                </svg>
              </span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "22px", color: "#34503E" }}>Credential detail</strong>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>What it certifies, who issued it, when, and the evidence behind it.</span>
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
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "22px", color: "#34503E" }}>Sharing</strong>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>Share to LinkedIn, X, Facebook, WhatsApp, Instagram or email, or download it.</span>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#F3D1DC", color: "#6E1A3D", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
                </svg>
              </span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "22px", color: "#34503E" }}>Profile</strong>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>Photo, name, language and a recovery email to keep your credentials safe.</span>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#F3D1DC", color: "#6E1A3D", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "22px", color: "#34503E" }}>Access</strong>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>Sign-up, login and verification code.</span>
            </div>
          </div>
          <div style={{ position: "relative", background: "#DDE7D7", borderRadius: "36px", padding: "clamp(24px, 4vw, 56px)", overflow: "hidden", minHeight: "auto" }}>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "14px", alignItems: "center" }}>
              <img src="/images/v2/w-mk-trio-b.webp" alt="Wallet: badge received, credential list and credential detail" style={{ width: "100%", maxWidth: "1000px", height: "auto", display: "block" }} />
            </figure>
          </div>
          <div style={{ position: "relative", background: "#F7F3EE", borderRadius: "36px", padding: "clamp(24px, 4vw, 56px)", overflow: "hidden", minHeight: "auto" }}>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "14px", alignItems: "center" }}>
              <img src="/images/v2/w-mk-duo.webp" alt="Wallet: profile and edit profile" style={{ width: "100%", maxWidth: "720px", height: "auto", display: "block" }} />
              <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#4B524D", textAlign: "center" }}>Profile and settings: photo, name, language and a recovery email.</figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section style={{ background: "#34503E", padding: "96px clamp(20px, 5vw, 80px)", color: "#F7F3EE", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <p style={{ margin: "0", display: "flex", alignItems: "baseline", gap: "14px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "36px", color: "#F3D1DC" }}>03</span>
              <span style={{ fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#CFDCCB" }}>The moment that matters</span>
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 40px", alignItems: "flex-start" }}>
              <div style={{ flex: "999 1 520px" }}>
                <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(36px, 3.8vw, 58px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#F7F3EE" }} data-fill="">
                  <span className="dm-f" style={{ "--i": "0" }}>Receiving</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "1" }}>a</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "2" }}>credential</span>
                  {" "}
                  <em>
                    <span className="dm-f" style={{ "--i": "3" }}>should</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "4" }}>feel</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "5" }}>like</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "6" }}>an</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "7" }}>achievement.</span>
                  </em>
                </h2>
              </div>
              <div style={{ flex: "1 1 340px", paddingTop: "0.5em" }}>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#CFDCCB" }}>The first screen people see is co-branded with the issuing organization and leads to a single action: accept and share.</p>
              </div>
            </div>
          </div>
          <div style={{ position: "relative", background: "#F3D1DC", borderRadius: "36px", padding: "clamp(28px, 5vw, 72px)", overflow: "hidden", minHeight: "auto" }}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "flex-end", gap: "clamp(20px, 4vw, 64px)" }}>
              <div style={{ flex: "0 1 260px" }}>
                <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "14px", alignItems: "center" }}>
                  <img src="/images/v2/w-mk-detalle.webp" alt="Credential detail" style={{ width: "100%", maxWidth: "260px", height: "auto", display: "block" }} />
                  <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#1D2A22", textAlign: "center" }}>Credential detail</figcaption>
                </figure>
              </div>
              <div style={{ flex: "0 1 260px" }}>
                <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "14px", alignItems: "center" }}>
                  <img src="/images/v2/w-mk-share.webp" alt="Sharing options" style={{ width: "100%", maxWidth: "260px", height: "auto", display: "block" }} />
                  <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#1D2A22", textAlign: "center" }}>Share it anywhere</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="s04" data-case-section="Learnings" style={{ padding: "96px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <p style={{ margin: "0", display: "flex", alignItems: "baseline", gap: "14px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "36px", color: "#B8336A" }}>04</span>
              <span style={{ fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Learnings</span>
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 40px", alignItems: "flex-start" }}>
              <div style={{ flex: "999 1 520px" }}>
                <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(36px, 3.8vw, 58px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }} data-fill="">
                  <span className="dm-f" style={{ "--i": "0" }}>Doing</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "1" }}>less,</span>
                  {" "}
                  <em>
                    <span className="dm-f" style={{ "--i": "2" }}>on</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "3" }}>purpose.</span>
                  </em>
                </h2>
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "20px" }} data-reveal="">
            <div style={{ background: "#DDE7D7", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.7", color: "#1D2A22" }}>Scoping to the essential tasks let us give recipients real value without pulling focus from the core B2B product.</p>
            </div>
            <div style={{ background: "#DDE7D7", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.7", color: "#1D2A22" }}>Designing both sides of the same product, issuers and recipients, made each side better.</p>
            </div>
          </div>
        </div>
      </section>
      <section style={{ padding: "72px clamp(20px, 5vw, 80px) 96px", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <Link href="/work/acreditta" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "24px", background: "#DDE7D7", borderRadius: "32px", padding: "40px 48px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <p style={{ margin: "0", fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Next project</p>
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
