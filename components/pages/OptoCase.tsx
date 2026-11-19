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
          <Link href="/lab" style={{ alignSelf: "flex-start", fontSize: "15px", fontWeight: "500", color: "#4B524D" }}>← Back to the Lab</Link>
          <div style={{ display: "flex", flexDirection: "column", gap: "22px", maxWidth: "1000px" }}>
            <p style={{ margin: "0", fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#A02B5B" }}>Opto · Master’s final project, ELISAVA · Team of 5</p>
            <h1 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(46px, 5.4vw, 84px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }}>
              Going out with friends,{" "}
              <em>without the pressure to drink.</em>
            </h1>
            <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.7", color: "#4B524D", maxWidth: "780px" }}>
              Opto is a mobile app concept for people who want to drink less without giving up their social life. It suggests alcohol-free plans, helps you choose at the bar and keeps the night’s budget in check. It was our Master’s final project at ELISAVA, designed in a team of five.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "24px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "16px", borderTop: "1.5px solid #34503E" }}>
              <span style={{ fontSize: "13px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>My role</span>
              <span style={{ fontSize: "16px", fontWeight: "600", lineHeight: "1.45", color: "#34503E" }}>UX/UI Designer in a team of 5</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "16px", borderTop: "1.5px solid #34503E" }}>
              <span style={{ fontSize: "13px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Context</span>
              <span style={{ fontSize: "16px", fontWeight: "600", lineHeight: "1.45", color: "#34503E" }}>Master’s final project, Master’s in UX at ELISAVA</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "16px", borderTop: "1.5px solid #34503E" }}>
              <span style={{ fontSize: "13px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Timeline</span>
              <span style={{ fontSize: "16px", fontWeight: "600", lineHeight: "1.45", color: "#34503E" }}>February – July 2025</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "16px", borderTop: "1.5px solid #34503E" }}>
              <span style={{ fontSize: "13px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>My part</span>
              <span style={{ fontSize: "16px", fontWeight: "600", lineHeight: "1.45", color: "#34503E" }}>Expert interview · Journeys · Flows · Wireframes · UI of the create-a-plan flow</span>
            </div>
          </div>
          <img src="/images/v2/opto-hero.webp" alt="Opto app screens: welcome, plans, bar menu, savings and connections" style={{ width: "100%", height: "auto", display: "block", borderRadius: "32px" }} />
        </div>
      </section>
      <section style={{ padding: "0 clamp(20px, 5vw, 80px) 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "28px" }} data-reveal="">
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "16px", borderTop: "1.5px solid #34503E" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(24px, 2.2vw, 32px)", lineHeight: "1.15", color: "#34503E" }}>90 survey responses</span>
              <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#4B524D" }}>More than 60% wanted to drink less but hadn’t started yet.</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "16px", borderTop: "1.5px solid #34503E" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(24px, 2.2vw, 32px)", lineHeight: "1.15", color: "#34503E" }}>9 in-depth interviews</span>
              <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#4B524D" }}>With people who drink in social settings.</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "16px", borderTop: "1.5px solid #34503E" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(24px, 2.2vw, 32px)", lineHeight: "1.15", color: "#34503E" }}>1 expert interview</span>
              <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#4B524D" }}>With a psychologist specialized in alcohol use, which I ran.</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "16px", borderTop: "1.5px solid #34503E" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(24px, 2.2vw, 32px)", lineHeight: "1.15", color: "#34503E" }}>53%</span>
              <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#4B524D" }}>of survey participants named social pressure as their main barrier.</span>
            </div>
          </div>
        </div>
      </section>
      <section id="s01" data-case-section="Context and my role" style={{ background: "#DDE7D7", padding: "96px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <p style={{ margin: "0", display: "flex", alignItems: "baseline", gap: "14px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "36px", color: "#B8336A" }}>01</span>
              <span style={{ fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Context and my role</span>
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 40px", alignItems: "flex-start" }}>
              <div style={{ flex: "999 1 520px" }}>
                <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(36px, 3.8vw, 58px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }} data-fill="">
                  <span className="dm-f" style={{ "--i": "0" }}>Drinking</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "1" }}>less</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "2" }}>is</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "3" }}>easy</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "4" }}>to</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "5" }}>want</span>
                  {" "}
                  <em>
                    <span className="dm-f" style={{ "--i": "6" }}>and</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "7" }}>hard</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "8" }}>to</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "9" }}>do</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "10" }}>with</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "11" }}>friends.</span>
                  </em>
                </h2>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "flex-start" }}>
            <div style={{ flex: "1 1 380px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#4B524D" }}>
                For many people, alcohol is simply part of going out. In our survey, most people who wanted to drink less hadn’t started, and health was their strongest reason to change. What held them back wasn’t information, it was the social moment: the round, the offer, the friend asking why.
              </p>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#4B524D" }}>
                Our challenge was to design an experience that helps people understand their habits and make more conscious choices, without restrictive or moralizing communication.
              </p>
            </div>
            <div style={{ flex: "1 1 480px", minWidth: "0" }}>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#4B524D" }}>We were five designers. Within the team, I:</p>
              <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "#4B524D" }}>
                  <span style={{ flex: "0 0 auto", marginTop: "3px", color: "#B8336A" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                  </span>
                  <span>Interviewed a psychologist specialized in alcohol use, which set the tone of the whole app</span>
                </li>
                <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "#4B524D" }}>
                  <span style={{ flex: "0 0 auto", marginTop: "3px", color: "#B8336A" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                  </span>
                  <span>Worked on the user journeys, the user flows and the requirements</span>
                </li>
                <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "#4B524D" }}>
                  <span style={{ flex: "0 0 auto", marginTop: "3px", color: "#B8336A" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                  </span>
                  <span>Took part in the wireframes</span>
                </li>
                <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "#4B524D" }}>
                  <span style={{ flex: "0 0 auto", marginTop: "3px", color: "#B8336A" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                  </span>
                  <span>Designed the UI of the create-a-plan flow, on top of the design system we built as a team</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="s02" data-case-section="Research" style={{ padding: "96px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <p style={{ margin: "0", display: "flex", alignItems: "baseline", gap: "14px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "36px", color: "#B8336A" }}>02</span>
              <span style={{ fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Research</span>
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 40px", alignItems: "flex-start" }}>
              <div style={{ flex: "999 1 520px" }}>
                <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(36px, 3.8vw, 58px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }} data-fill="">
                  <span className="dm-f" style={{ "--i": "0" }}>What</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "1" }}>stops</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "2" }}>people</span>
                  {" "}
                  <em>
                    <span className="dm-f" style={{ "--i": "3" }}>from</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "4" }}>drinking</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "5" }}>less.</span>
                  </em>
                </h2>
              </div>
              <div style={{ flex: "1 1 340px", paddingTop: "0.5em" }}>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#4B524D" }}>
                  We focused on young adults who drink in social settings and started from four hypotheses: social pressure makes it hard to say no, drinking is tied to traditional ideas of masculinity, drinking consciously is becoming aspirational, and the reasons to cut down are mostly about personal wellbeing.
                </p>
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "20px" }} data-reveal="">
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "40px", lineHeight: "1", color: "#B8336A" }}>01</span>
              <strong style={{ fontSize: "18px", fontWeight: "600", color: "#34503E" }}>Survey</strong>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>90 responses about habits, motivations and barriers.</span>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "40px", lineHeight: "1", color: "#B8336A" }}>02</span>
              <strong style={{ fontSize: "18px", fontWeight: "600", color: "#34503E" }}>Interviews</strong>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>9 in-depth interviews with people who drink in social settings.</span>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "40px", lineHeight: "1", color: "#B8336A" }}>03</span>
              <strong style={{ fontSize: "18px", fontWeight: "600", color: "#34503E" }}>Expert interview</strong>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>A psychologist specialized in alcohol use, to understand the process of change and how to talk about it.</span>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "40px", lineHeight: "1", color: "#B8336A" }}>04</span>
              <strong style={{ fontSize: "18px", fontWeight: "600", color: "#34503E" }}>Desk research</strong>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>Public health data from the WHO, Spain’s Ministry of Health and Barcelona’s drug and addiction plan.</span>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "40px", lineHeight: "1", color: "#B8336A" }}>05</span>
              <strong style={{ fontSize: "18px", fontWeight: "600", color: "#34503E" }}>Benchmark</strong>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>Habit-change apps like Quitzilla, I Am Sober and Kwit: strong trackers, but almost no social life or plan ideas.</span>
            </div>
          </div>
          <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(28px, 2.6vw, 38px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }}>Five insights</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }} data-reveal="">
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "22px", lineHeight: "1.3", color: "#34503E" }}>Socializing without alcohol can feel awkward, especially with people you don’t know.</strong>
              <blockquote style={{ margin: "0", paddingLeft: "16px", borderLeft: "2px solid #B8336A", fontSize: "15px", lineHeight: "1.6", fontStyle: "italic", color: "#1D2A22" }}>“For me, alcohol is a kind of social lubricant. When you’re with people you don’t know well, it helps you relax.”</blockquote>
              <span style={{ fontSize: "13px", color: "#4B524D" }}>Survey participant, 29</span>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "22px", lineHeight: "1.3", color: "#34503E" }}>For many, ordering a drink is automatic: more habit than desire.</strong>
              <blockquote style={{ margin: "0", paddingLeft: "16px", borderLeft: "2px solid #B8336A", fontSize: "15px", lineHeight: "1.6", fontStyle: "italic", color: "#1D2A22" }}>“Sometimes I order a beer just so I don’t have to think. The first thing I see are the 2-for-1 beer offers.”</blockquote>
              <span style={{ fontSize: "13px", color: "#4B524D" }}>Survey participant, 31</span>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "22px", lineHeight: "1.3", color: "#34503E" }}>Money is a concrete reason to drink less.</strong>
              <blockquote style={{ margin: "0", paddingLeft: "16px", borderLeft: "2px solid #B8336A", fontSize: "15px", lineHeight: "1.6", fontStyle: "italic", color: "#1D2A22" }}>“Going out isn’t what it used to be. Between taxis and drinks, 50 euros go fast, so lately I try to drink less.”</blockquote>
              <span style={{ fontSize: "13px", color: "#4B524D" }}>Interviewee, 26</span>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "22px", lineHeight: "1.3", color: "#34503E" }}>It’s easier not to drink when the group doesn’t either.</strong>
              <blockquote style={{ margin: "0", paddingLeft: "16px", borderLeft: "2px solid #B8336A", fontSize: "15px", lineHeight: "1.6", fontStyle: "italic", color: "#1D2A22" }}>“If you’re with sober people, you don’t even think about it. The problem is when everyone starts.”</blockquote>
              <span style={{ fontSize: "13px", color: "#4B524D" }}>Survey participant, 28</span>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "22px", lineHeight: "1.3", color: "#34503E" }}>A plan with a purpose wins over the drink.</strong>
              <blockquote style={{ margin: "0", paddingLeft: "16px", borderLeft: "2px solid #B8336A", fontSize: "15px", lineHeight: "1.6", fontStyle: "italic", color: "#1D2A22" }}>
                “Now I realise that with other plans, like the mountains or going out during the day, I have a better time without drinking.”
              </blockquote>
              <span style={{ fontSize: "13px", color: "#4B524D" }}>Interviewee, 26</span>
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: "#34503E", padding: "96px clamp(20px, 5vw, 80px)", color: "#F7F3EE", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <p style={{ margin: "0", display: "flex", alignItems: "baseline", gap: "14px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "36px", color: "#F3D1DC" }}>03</span>
              <span style={{ fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#CFDCCB" }}>The tone</span>
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 40px", alignItems: "flex-start" }}>
              <div style={{ flex: "999 1 520px" }}>
                <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(36px, 3.8vw, 58px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#F7F3EE" }} data-fill="">
                  <span className="dm-f" style={{ "--i": "0" }}>Zero</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "1" }}>guilt,</span>
                  {" "}
                  <em>
                    <span className="dm-f" style={{ "--i": "2" }}>zero</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "3" }}>lectures.</span>
                  </em>
                </h2>
              </div>
              <div style={{ flex: "1 1 340px", paddingTop: "0.5em" }}>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#CFDCCB" }}>
                  I interviewed a psychologist specialized in alcohol use. Her main advice shaped everything else: people who want to drink less often already feel judged, so the app should never add guilt. We turned that into requirements for the whole team.
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
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "22px", color: "#34503E" }}>No moralizing language</strong>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>No “you failed” or “you relapsed”. Progress is celebrated and slips aren’t punished.</span>
            </div>
            <div style={{ background: "#F7F3EE", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#F3D1DC", color: "#6E1A3D", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="8" />
                  <circle cx="12" cy="12" r="3.5" />
                </svg>
              </span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "22px", color: "#34503E" }}>Not only abstinence</strong>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>Drinking less is a valid goal. Quitting completely is never presented as the only option.</span>
            </div>
            <div style={{ background: "#F7F3EE", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#F3D1DC", color: "#6E1A3D", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "22px", color: "#34503E" }}>Nothing forced in public</strong>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>People never have to share their achievements publicly to get rewards.</span>
            </div>
            <div style={{ background: "#F7F3EE", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#F3D1DC", color: "#6E1A3D", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" />
                </svg>
              </span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "22px", color: "#34503E" }}>Friendly, not clinical</strong>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#4B524D" }}>A warm, colourful interface that feels nothing like a health app.</span>
            </div>
          </div>
          <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.7", color: "#CFDCCB", maxWidth: "720px" }}>
            That’s why the app celebrates instead of warning. After a night out, it says: “You survived the night, and so did your money!”
          </p>
        </div>
      </section>
      <section id="s04" data-case-section="People" style={{ background: "#DDE7D7", padding: "96px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <p style={{ margin: "0", display: "flex", alignItems: "baseline", gap: "14px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "36px", color: "#B8336A" }}>04</span>
              <span style={{ fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>People</span>
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 40px", alignItems: "flex-start" }}>
              <div style={{ flex: "999 1 520px" }}>
                <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(36px, 3.8vw, 58px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }} data-fill="">
                  <span className="dm-f" style={{ "--i": "0" }}>Three</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "1" }}>people,</span>
                  {" "}
                  <em>
                    <span className="dm-f" style={{ "--i": "2" }}>three</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "3" }}>ways</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "4" }}>to</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "5" }}>drink</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "6" }}>less.</span>
                  </em>
                </h2>
              </div>
              <div style={{ flex: "1 1 340px", paddingTop: "0.5em" }}>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#4B524D" }}>
                  We turned the research into three personas, each with a job to be done and a journey. Their photos in the project were generated with AI by a teammate, so here I keep just their stories.
                </p>
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }} data-reveal="">
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ alignSelf: "flex-start", padding: "6px 14px", borderRadius: "999px", background: "#F3D1DC", color: "#6E1A3D", fontSize: "13px", fontWeight: "600" }}>Wants to drink less, not to stay in</span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "26px", color: "#34503E" }}>Luis, 28</strong>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.7", color: "#4B524D" }}>Engineer in Barcelona. Drinks mostly at weekends with friends and wants more energy and fewer hangovers.</p>
              <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A02B5B", marginTop: "6px" }}>What they need</span>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.7", color: "#1D2A22" }}>
                “When I go out with friends, I want to limit my drinking easily and without social friction, so I feel good and keep my plans for the next day.”
              </p>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ alignSelf: "flex-start", padding: "6px 14px", borderRadius: "999px", background: "#F3D1DC", color: "#6E1A3D", fontSize: "13px", fontWeight: "600" }}>Watches what she spends</span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "26px", color: "#34503E" }}>Laia, 27</strong>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.7", color: "#4B524D" }}>Creative professional in Barcelona. Enjoys going out but feels pressure when everything revolves around alcohol.</p>
              <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A02B5B", marginTop: "6px" }}>What they need</span>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.7", color: "#1D2A22" }}>
                “I want plans with my friends that don’t revolve around alcohol, and to keep track of what I spend on drinks when I go out.”
              </p>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ alignSelf: "flex-start", padding: "6px 14px", borderRadius: "999px", background: "#F3D1DC", color: "#6E1A3D", fontSize: "13px", fontWeight: "600" }}>Looks for better plans</span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "26px", color: "#34503E" }}>Jordi, 28</strong>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.7", color: "#4B524D" }}>Freelancer who prioritizes his health and sport. Chooses carefully which events he goes to.</p>
              <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A02B5B", marginTop: "6px" }}>What they need</span>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.7", color: "#1D2A22" }}>“When I can’t find a plan that fits me, I want to create my own and share it with friends who want the same.”</p>
            </div>
          </div>
          <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
            <img src="/images/v2/opto-journey.webp" alt="Luis’s current journey, from the invitation to the morning after" style={{ width: "100%", height: "auto", display: "block", borderRadius: "24px", boxShadow: "0 20px 50px rgba(29,42,34,0.10)" }} />
            <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#4B524D", padding: "0 6px" }}>Luis’s current journey, from the invitation to the morning after. Each low point became an opportunity for the app.</figcaption>
          </figure>
        </div>
      </section>
      <section id="s05" data-case-section="Key decisions" style={{ padding: "96px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <p style={{ margin: "0", display: "flex", alignItems: "baseline", gap: "14px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "36px", color: "#B8336A" }}>05</span>
              <span style={{ fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Key decisions</span>
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 40px", alignItems: "flex-start" }}>
              <div style={{ flex: "999 1 520px" }}>
                <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(36px, 3.8vw, 58px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }} data-fill="">
                  <span className="dm-f" style={{ "--i": "0" }}>Four</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "1" }}>ideas</span>
                  {" "}
                  <em>
                    <span className="dm-f" style={{ "--i": "2" }}>for</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "3" }}>one</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "4" }}>night</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "5" }}>out.</span>
                  </em>
                </h2>
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", gap: "24px" }} data-reveal="">
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "32px", display: "flex", flexDirection: "column", gap: "12px", gap: "16px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "36px", lineHeight: "1", color: "#B8336A" }}>01</span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "26px", color: "#34503E" }}>Plans that compete with the bar</strong>
              <div style={{ display: "grid", gridTemplateColumns: "110px minmax(0, 1fr)", gap: "16px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A02B5B" }}>Problem</span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>Most plans people find online revolve around bars and drinking.</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "110px minmax(0, 1fr)", gap: "16px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A02B5B" }}>Decision</span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>A Plans section with alcohol-free activities nearby, by category, where anyone can also create their own plan.</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "110px minmax(0, 1fr)", gap: "16px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A02B5B" }}>Why</span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>It gives people something better to say yes to.</span>
              </div>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "32px", display: "flex", flexDirection: "column", gap: "12px", gap: "16px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "36px", lineHeight: "1", color: "#B8336A" }}>02</span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "26px", color: "#34503E" }}>A menu that shows the alternatives</strong>
              <div style={{ display: "grid", gridTemplateColumns: "110px minmax(0, 1fr)", gap: "16px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A02B5B" }}>Problem</span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>In bars, alcohol-free drinks hide at the end of the menu while beer offers sit at the top.</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "110px minmax(0, 1fr)", gap: "16px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A02B5B" }}>Decision</span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>
                  Scanning the bar’s QR shows its menu with alcohol-free and low-alcohol drinks first, tagged “cheaper” or “fewer calories”.
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "110px minmax(0, 1fr)", gap: "16px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A02B5B" }}>Why</span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>It changes the easy choice without a single warning.</span>
              </div>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "32px", display: "flex", flexDirection: "column", gap: "12px", gap: "16px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "36px", lineHeight: "1", color: "#B8336A" }}>03</span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "26px", color: "#34503E" }}>OptoCard, a budget for the night</strong>
              <div style={{ display: "grid", gridTemplateColumns: "110px minmax(0, 1fr)", gap: "16px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A02B5B" }}>Problem</span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>Money motivates people to drink less, but nobody keeps track in the middle of a night out.</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "110px minmax(0, 1fr)", gap: "16px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A02B5B" }}>Decision</span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>
                  A virtual prepaid card you top up with what you want to spend tonight. What’s left goes to a savings goal, like a trip to Ibiza.
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "110px minmax(0, 1fr)", gap: "16px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A02B5B" }}>Why</span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>Drinking less becomes something you gain, not something you give up.</span>
              </div>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "32px", display: "flex", flexDirection: "column", gap: "12px", gap: "16px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "36px", lineHeight: "1", color: "#B8336A" }}>04</span>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "26px", color: "#34503E" }}>People on the same page</strong>
              <div style={{ display: "grid", gridTemplateColumns: "110px minmax(0, 1fr)", gap: "16px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A02B5B" }}>Problem</span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>It’s easier not to drink when someone else isn’t drinking either.</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "110px minmax(0, 1fr)", gap: "16px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A02B5B" }}>Decision</span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>Opto suggests people nearby with the same goal and shared interests, so you can meet and make plans together.</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "110px minmax(0, 1fr)", gap: "16px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A02B5B" }}>Why</span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>Being the one who isn’t drinking stops feeling lonely.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="s06" data-case-section="Structure" style={{ background: "#DDE7D7", padding: "96px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <p style={{ margin: "0", display: "flex", alignItems: "baseline", gap: "14px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "36px", color: "#B8336A" }}>06</span>
              <span style={{ fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Structure</span>
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 40px", alignItems: "flex-start" }}>
              <div style={{ flex: "999 1 520px" }}>
                <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(36px, 3.8vw, 58px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }} data-fill="">
                  <span className="dm-f" style={{ "--i": "0" }}>From</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "1" }}>sitemap</span>
                  {" "}
                  <em>
                    <span className="dm-f" style={{ "--i": "2" }}>to</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "3" }}>wireframes.</span>
                  </em>
                </h2>
              </div>
              <div style={{ flex: "1 1 340px", paddingTop: "0.5em" }}>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#4B524D" }}>
                  Six sections carry the app: Home, Plans, Community, Money, Learn and Profile. We drew a flow for each persona. Jordi’s, creating his own plan, is the one I later took to UI.
                </p>
              </div>
            </div>
          </div>
          <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
            <img src="/images/v2/opto-sitemap.webp" alt="Opto sitemap with its six main sections" style={{ width: "100%", height: "auto", display: "block", borderRadius: "24px", boxShadow: "0 20px 50px rgba(29,42,34,0.10)" }} />
            <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#4B524D", padding: "0 6px" }}>Sitemap: home, plans, community, money, learning content and profile.</figcaption>
          </figure>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", gap: "28px" }}>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              <img src="/images/v2/opto-userflow.webp" alt="Jordi’s user flow: from browsing plans to creating and sharing his own" style={{ width: "100%", height: "auto", display: "block", borderRadius: "24px", boxShadow: "0 20px 50px rgba(29,42,34,0.10)" }} />
              <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#4B524D", padding: "0 6px" }}>Jordi’s flow: browse plans, create one, publish it, share it and check people in.</figcaption>
            </figure>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              <img src="/images/v2/opto-wire-evento.webp" alt="Wireframes of the create-an-event flow" style={{ width: "100%", height: "auto", display: "block", borderRadius: "24px", boxShadow: "0 20px 50px rgba(29,42,34,0.10)" }} />
              <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#4B524D", padding: "0 6px" }}>Wireframes of the create-an-event flow, the base for my UI.</figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section id="s07" data-case-section="My UI" style={{ padding: "96px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <p style={{ margin: "0", display: "flex", alignItems: "baseline", gap: "14px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "36px", color: "#B8336A" }}>07</span>
              <span style={{ fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>My UI</span>
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 40px", alignItems: "flex-start" }}>
              <div style={{ flex: "999 1 520px" }}>
                <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(36px, 3.8vw, 58px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }} data-fill="">
                  <span className="dm-f" style={{ "--i": "0" }}>Creating</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "1" }}>a</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "2" }}>plan,</span>
                  {" "}
                  <em>
                    <span className="dm-f" style={{ "--i": "3" }}>from</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "4" }}>idea</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "5" }}>to</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "6" }}>invite.</span>
                  </em>
                </h2>
              </div>
              <div style={{ flex: "1 1 340px", paddingTop: "0.5em" }}>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#4B524D" }}>
                  Jordi wants to suggest something different to his friends, but can’t find a plan he likes. This is the flow I designed in UI, on top of our design system. Scroll inside each phone.
                </p>
              </div>
            </div>
          </div>
          <div style={{ position: "relative", background: "#F3D1DC", borderRadius: "36px", padding: "clamp(24px, 4vw, 56px)", overflow: "hidden", minHeight: "auto" }}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "clamp(14px, 1.8vw, 22px)" }}>
              <figure style={{ margin: "0", flex: "0 1 172px", display: "flex", flexDirection: "column", gap: "14px", alignItems: "center" }}>
                <div style={{ width: "100%", boxSizing: "border-box", borderRadius: "34px", padding: "8px", background: "#1E211F", boxShadow: "0 30px 60px rgba(29,42,34,0.25)" }}>
                  <div tabIndex={0} aria-label="Plans screen with a Create plan button, scrollable" style={{ height: "380px", overflowY: "auto", borderRadius: "26px", background: "#FFFFFF" }}>
                    <img src="/images/v2/opto-flow-planes.webp" alt="Plans screen with a Create plan button" style={{ width: "100%", height: "auto", display: "block" }} />
                  </div>
                </div>
                <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#1D2A22", textAlign: "center" }}>1. Browse plans and tap “Create plan”</figcaption>
              </figure>
              <figure style={{ margin: "0", flex: "0 1 172px", display: "flex", flexDirection: "column", gap: "14px", alignItems: "center" }}>
                <div style={{ width: "100%", boxSizing: "border-box", borderRadius: "34px", padding: "8px", background: "#1E211F", boxShadow: "0 30px 60px rgba(29,42,34,0.25)" }}>
                  <div tabIndex={0} aria-label="Create plan form, scrollable" style={{ height: "380px", overflowY: "auto", borderRadius: "26px", background: "#FFFFFF" }}>
                    <img src="/images/v2/opto-flow-form.webp" alt="Create plan form" style={{ width: "100%", height: "auto", display: "block" }} />
                  </div>
                </div>
                <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#1D2A22", textAlign: "center" }}>2. Title, date, time, place, category and image</figcaption>
              </figure>
              <figure style={{ margin: "0", flex: "0 1 172px", display: "flex", flexDirection: "column", gap: "14px", alignItems: "center" }}>
                <div style={{ width: "100%", boxSizing: "border-box", borderRadius: "34px", padding: "8px", background: "#1E211F", boxShadow: "0 30px 60px rgba(29,42,34,0.25)" }}>
                  <div tabIndex={0} aria-label="The new plan’s page, scrollable" style={{ height: "380px", overflowY: "auto", borderRadius: "26px", background: "#FFFFFF" }}>
                    <img src="/images/v2/opto-flow-creado.webp" alt="The new plan’s page" style={{ width: "100%", height: "auto", display: "block" }} />
                  </div>
                </div>
                <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#1D2A22", textAlign: "center" }}>3. The plan page: who’s coming, where and what to bring</figcaption>
              </figure>
              <figure style={{ margin: "0", flex: "0 1 172px", display: "flex", flexDirection: "column", gap: "14px", alignItems: "center" }}>
                <div style={{ width: "100%", boxSizing: "border-box", borderRadius: "34px", padding: "8px", background: "#1E211F", boxShadow: "0 30px 60px rgba(29,42,34,0.25)" }}>
                  <div tabIndex={0} aria-label="Share sheet to invite friends, scrollable" style={{ height: "380px", overflowY: "auto", borderRadius: "26px", background: "#FFFFFF" }}>
                    <img src="/images/v2/opto-flow-compartir.webp" alt="Share sheet to invite friends" style={{ width: "100%", height: "auto", display: "block" }} />
                  </div>
                </div>
                <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#1D2A22", textAlign: "center" }}>4. Share it with friends through any app</figcaption>
              </figure>
              <figure style={{ margin: "0", flex: "0 1 172px", display: "flex", flexDirection: "column", gap: "14px", alignItems: "center" }}>
                <div style={{ width: "100%", boxSizing: "border-box", borderRadius: "34px", padding: "8px", background: "#1E211F", boxShadow: "0 30px 60px rgba(29,42,34,0.25)" }}>
                  <div tabIndex={0} aria-label="Home with the upcoming plan, scrollable" style={{ height: "380px", overflowY: "auto", borderRadius: "26px", background: "#FFFFFF" }}>
                    <img src="/images/v2/opto-flow-home.webp" alt="Home with the upcoming plan" style={{ width: "100%", height: "auto", display: "block" }} />
                  </div>
                </div>
                <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#1D2A22", textAlign: "center" }}>5. It shows up on Home, with a QR to check people in</figcaption>
              </figure>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            <div style={{ background: "#F7F3EE", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "22px", color: "#34503E" }}>Only what’s needed to publish</strong>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.7", color: "#4B524D" }}>
                Title, description, date, time, place, category and image. Limiting attendees and making it public are optional switches, off by default.
              </p>
            </div>
            <div style={{ background: "#F7F3EE", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "22px", color: "#34503E" }}>Answers before saying yes</strong>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.7", color: "#4B524D" }}>
                The plan page shows when, where, how to get there, who created it, who’s going and what to bring, so friends can decide quickly.
              </p>
            </div>
            <div style={{ background: "#F7F3EE", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "22px", color: "#34503E" }}>Rewarding showing up</strong>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.7", color: "#4B524D" }}>
                Attendees scan each other’s QR at the meeting point to earn points. The reward is for sharing a plan, not for drinking less, which keeps the tone free of guilt.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="s08" data-case-section="Visual design" style={{ background: "#DDE7D7", padding: "96px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <p style={{ margin: "0", display: "flex", alignItems: "baseline", gap: "14px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "36px", color: "#B8336A" }}>08</span>
              <span style={{ fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Visual design</span>
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 40px", alignItems: "flex-start" }}>
              <div style={{ flex: "999 1 520px" }}>
                <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(36px, 3.8vw, 58px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }} data-fill="">
                  <span className="dm-f" style={{ "--i": "0" }}>One</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "1" }}>colour</span>
                  {" "}
                  <em>
                    <span className="dm-f" style={{ "--i": "2" }}>for</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "3" }}>each</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "4" }}>part</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "5" }}>of</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "6" }}>the</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "7" }}>app.</span>
                  </em>
                </h2>
              </div>
              <div style={{ flex: "1 1 340px", paddingTop: "0.5em" }}>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#4B524D" }}>
                  Instead of one dominant brand colour, we chose a vibrant palette for a young audience, and gave each colour a job: pink for health and wellbeing, purple for bars and menus, blue for community, yellow for plans and events, and green for money and the OptoCard. Hatton for headlines, IBM Plex Sans for everything else.
                </p>
              </div>
            </div>
          </div>
          <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
            <img src="/images/v2/opto-mood.webp" alt="Moodboard with vibrant editorial and app references" style={{ width: "100%", height: "auto", display: "block", borderRadius: "24px", boxShadow: "0 20px 50px rgba(29,42,34,0.10)" }} />
            <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#4B524D", padding: "0 6px" }}>Moodboard.</figcaption>
          </figure>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", gap: "28px" }}>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              <img src="/images/v2/opto-palette.webp" alt="Colour palette with a role for each colour" style={{ width: "100%", height: "auto", display: "block", borderRadius: "24px", boxShadow: "0 20px 50px rgba(29,42,34,0.10)" }} />
              <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#4B524D", padding: "0 6px" }}>Palette: each colour linked to a part of the app.</figcaption>
            </figure>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              <img src="/images/v2/opto-components.webp" alt="UI components: buttons, tags, filters, cards and navigation bar" style={{ width: "100%", height: "auto", display: "block", borderRadius: "24px", boxShadow: "0 20px 50px rgba(29,42,34,0.10)" }} />
              <figcaption style={{ fontSize: "14px", lineHeight: "1.5", color: "#4B524D", padding: "0 6px" }}>Components from the team’s design system.</figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section id="s09" data-case-section="The solution" style={{ padding: "96px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <p style={{ margin: "0", display: "flex", alignItems: "baseline", gap: "14px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "36px", color: "#B8336A" }}>09</span>
              <span style={{ fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>The solution</span>
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 40px", alignItems: "flex-start" }}>
              <div style={{ flex: "999 1 520px" }}>
                <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(36px, 3.8vw, 58px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }} data-fill="">
                  <span className="dm-f" style={{ "--i": "0" }}>Four</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "1" }}>ways</span>
                  {" "}
                  <em>
                    <span className="dm-f" style={{ "--i": "2" }}>to</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "3" }}>opt</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "4" }}>in.</span>
                  </em>
                </h2>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(28px, 4vw, 64px)", alignItems: "center" }}>
            <div style={{ flex: "1.2 1 420px", minWidth: "0", background: "#FFFFFF", borderRadius: "32px", padding: "clamp(16px, 2.5vw, 32px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src="/images/v2/opto-sol-planes.webp" alt="Plans screens: plans for you and explore by category" style={{ width: "100%", maxWidth: "620px", height: "auto", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 320px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(30px, 2.8vw, 42px)", lineHeight: "1.1", color: "#34503E" }}>Plans</strong>
              <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.7", color: "#4B524D", maxWidth: "480px" }}>
                Alcohol-free plans near you, from a jazz weekend to a cocktail workshop without alcohol, and the option to create your own.
              </p>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap-reverse", gap: "clamp(28px, 4vw, 64px)", alignItems: "center" }}>
            <div style={{ flex: "1 1 320px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(30px, 2.8vw, 42px)", lineHeight: "1.1", color: "#34503E" }}>Menu</strong>
              <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.7", color: "#4B524D", maxWidth: "480px" }}>
                Scan the bar’s QR and see alcohol-free and low-alcohol drinks first, with tags like “cheaper”, “fewer calories” or “only here”.
              </p>
            </div>
            <div style={{ flex: "1.2 1 420px", minWidth: "0", background: "#FFFFFF", borderRadius: "32px", padding: "clamp(16px, 2.5vw, 32px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src="/images/v2/opto-sol-menu.webp" alt="Bar menu screens with alcohol-free drinks first" style={{ width: "100%", maxWidth: "620px", height: "auto", display: "block" }} />
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(28px, 4vw, 64px)", alignItems: "center" }}>
            <div style={{ flex: "1.2 1 420px", minWidth: "0", background: "#FFFFFF", borderRadius: "32px", padding: "clamp(16px, 2.5vw, 32px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src="/images/v2/opto-sol-card.webp" alt="OptoCard screens: end of the night summary, card and top up" style={{ width: "100%", maxWidth: "620px", height: "auto", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 320px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(30px, 2.8vw, 42px)", lineHeight: "1.1", color: "#34503E" }}>OptoCard</strong>
              <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.7", color: "#4B524D", maxWidth: "480px" }}>
                Set a budget for the night and keep what’s left. “You survived the night, and so did your money!” moves it to your savings goal.
              </p>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap-reverse", gap: "clamp(28px, 4vw, 64px)", alignItems: "center" }}>
            <div style={{ flex: "1 1 320px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(30px, 2.8vw, 42px)", lineHeight: "1.1", color: "#34503E" }}>Connections</strong>
              <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.7", color: "#4B524D", maxWidth: "480px" }}>Find people nearby who also want to drink less and share your interests, then meet up and make plans together.</p>
            </div>
            <div style={{ flex: "1.2 1 420px", minWidth: "0", background: "#FFFFFF", borderRadius: "32px", padding: "clamp(16px, 2.5vw, 32px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src="/images/v2/opto-sol-conexion.webp" alt="Connection screens: profile, match, distance and friends list" style={{ width: "100%", maxWidth: "620px", height: "auto", display: "block" }} />
            </div>
          </div>
          <img src="/images/v2/opto-trio.webp" alt="Opto screens: welcome, end of the night, bar menu and plans" style={{ width: "100%", height: "auto", display: "block" }} />
        </div>
      </section>
      <section id="s10" data-case-section="Reflections" style={{ background: "#DDE7D7", padding: "96px clamp(20px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <p style={{ margin: "0", display: "flex", alignItems: "baseline", gap: "14px" }}>
              <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "36px", color: "#B8336A" }}>10</span>
              <span style={{ fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Reflections</span>
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 40px", alignItems: "flex-start" }}>
              <div style={{ flex: "999 1 520px" }}>
                <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(36px, 3.8vw, 58px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }} data-fill="">
                  <span className="dm-f" style={{ "--i": "0" }}>What</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "1" }}>I</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "2" }}>learned</span>
                  {" "}
                  <em>
                    <span className="dm-f" style={{ "--i": "3" }}>and</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "4" }}>what</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "5" }}>comes</span>
                    {" "}
                    <span className="dm-f" style={{ "--i": "6" }}>next.</span>
                  </em>
                </h2>
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", gap: "24px" }}>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "32px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "24px", color: "#34503E" }}>What I learned</strong>
              <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>
                  <span style={{ flex: "0 0 auto", marginTop: "3px", color: "#B8336A" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                  </span>
                  <span>Talking to an expert early changed the project: a guilt-free voice became a requirement, not a style choice.</span>
                </li>
                <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>
                  <span style={{ flex: "0 0 auto", marginTop: "3px", color: "#B8336A" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                  </span>
                  <span>A vibrant palette brings energy, but we had to keep checking contrast and hierarchy so it stayed accessible.</span>
                </li>
                <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>
                  <span style={{ flex: "0 0 auto", marginTop: "3px", color: "#B8336A" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                  </span>
                  <span>In a habit-change product, emotional details like celebrating a goal aren’t decoration. They keep people going.</span>
                </li>
                <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>
                  <span style={{ flex: "0 0 auto", marginTop: "3px", color: "#B8336A" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                  </span>
                  <span>We tried to cover many features. Looking back, I’d go deeper into one core flow rather than design them all.</span>
                </li>
              </ul>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "32px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <strong style={{ fontFamily: "Fraunces, serif", fontWeight: "500", fontSize: "24px", color: "#34503E" }}>Next steps</strong>
              <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>
                  <span style={{ flex: "0 0 auto", marginTop: "3px", color: "#B8336A" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                  </span>
                  <span>Usability tests. They weren’t part of the project’s scope, so they’d be my first step.</span>
                </li>
                <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>
                  <span style={{ flex: "0 0 auto", marginTop: "3px", color: "#B8336A" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                  </span>
                  <span>Choose one core flow, probably plans, and take it to a tested prototype.</span>
                </li>
                <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>
                  <span style={{ flex: "0 0 auto", marginTop: "3px", color: "#B8336A" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                  </span>
                  <span>A deeper onboarding to personalize recommendations from day one.</span>
                </li>
                <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "#1D2A22" }}>
                  <span style={{ flex: "0 0 auto", marginTop: "3px", color: "#B8336A" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                  </span>
                  <span>A stronger community section, using familiar social patterns in Opto’s own language.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section style={{ padding: "72px clamp(20px, 5vw, 80px) 96px", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px", position: "relative" }}>
          <Link href="/lab" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "24px", background: "#DDE7D7", borderRadius: "32px", padding: "40px 48px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <p style={{ margin: "0", fontSize: "14px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B524D" }}>Next project</p>
              <h2 style={{ margin: "0", fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "clamp(32px, 3.4vw, 52px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#34503E" }} data-fill="">
                <span className="dm-f" style={{ "--i": "0" }}>Back</span>
                {" "}
                <span className="dm-f" style={{ "--i": "1" }}>to</span>
                {" "}
                <span className="dm-f" style={{ "--i": "2" }}>the</span>
                {" "}
                <span className="dm-f" style={{ "--i": "3" }}>Lab</span>
                {" "}
                <em>
                  <span className="dm-f" style={{ "--i": "4" }}>→</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "5" }}>more</span>
                  {" "}
                  <span className="dm-f" style={{ "--i": "6" }}>projects</span>
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
