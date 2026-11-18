// @ts-nocheck
import Link from "next/link";

export default function ContactBand() {
  return (
    <section style={{ background: "#34503E", color: "#F7F3EE", padding: "104px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "22px", position: "relative" }}>
        <p style={{ margin: "0", fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#F7F3EE" }}>Get in touch</p>
        <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(52px, 6.6vw, 104px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#F7F3EE" }} data-anim="letters">
          <span className="dm-l" style={{ "--i": "0" }}>W</span>
          <span className="dm-l" style={{ "--i": "1" }}>a</span>
          <span className="dm-l" style={{ "--i": "2" }}>n</span>
          <span className="dm-l" style={{ "--i": "3" }}>t</span>
          {" "}
          <span className="dm-l" style={{ "--i": "4" }}>t</span>
          <span className="dm-l" style={{ "--i": "5" }}>o</span>
          {" "}
          <span className="dm-l" style={{ "--i": "6" }}>w</span>
          <span className="dm-l" style={{ "--i": "7" }}>o</span>
          <span className="dm-l" style={{ "--i": "8" }}>r</span>
          <span className="dm-l" style={{ "--i": "9" }}>k</span>
          {" "}
          <em style={{ color: "#F3D1DC" }}>
            <span className="dm-l" style={{ "--i": "10" }}>t</span>
            <span className="dm-l" style={{ "--i": "11" }}>o</span>
            <span className="dm-l" style={{ "--i": "12" }}>g</span>
            <span className="dm-l" style={{ "--i": "13" }}>e</span>
            <span className="dm-l" style={{ "--i": "14" }}>t</span>
            <span className="dm-l" style={{ "--i": "15" }}>h</span>
            <span className="dm-l" style={{ "--i": "16" }}>e</span>
            <span className="dm-l" style={{ "--i": "17" }}>r</span>
            <span className="dm-l" style={{ "--i": "18" }}>?</span>
          </em>
        </h2>
        <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.7", color: "#F7F3EE", maxWidth: "560px" }}>I’m always interested in thoughtful products, ambitious ideas and opportunities to make digital experiences better.</p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "14px", marginTop: "8px" }}>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "52px", padding: "0 28px", borderRadius: "999px", background: "#F7F3EE", color: "#1D2A22", fontSize: "15px", fontWeight: "500" }}>Let’s talk →</Link>
          <a href="mailto:danielamunoz5428@gmail.com" style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "52px", padding: "0 26px", borderRadius: "999px", border: "1.5px solid #F7F3EE", color: "#F7F3EE", fontSize: "15px", fontWeight: "500" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
            Email
          </a>
          <a href="https://www.linkedin.com/in/daniela-munoz28" style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "52px", padding: "0 26px", borderRadius: "999px", border: "1.5px solid #F7F3EE", color: "#F7F3EE", fontSize: "15px", fontWeight: "500" }} target="_blank" rel="noopener noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
