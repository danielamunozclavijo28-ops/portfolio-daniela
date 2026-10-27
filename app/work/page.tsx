
import WorkIntro from "@/components/work/WorkIntro";
import WorkProject from "@/components/work/WorkProject";
import WorkLab from "@/components/work/WorkLab";

export default function WorkPage() {
  return (
    <main>
      <WorkIntro />

      {/* 01 — Acreditta */}
      <WorkProject
        number="01"
        category="SaaS · Product Design"
        icon="/images/work/work-icons/work-icon-01.svg"
        title="Acreditta"
        subtitle="Designing a SaaS platform for digital credentials."
        description="Acreditta is a B2B platform that allows organizations to create, issue, manage and verify digital credentials. I worked on the UX/UI of the platform, from understanding the existing experience and researching users to defining flows, designing interfaces and building reusable components."
        tags={[
          "Research",
          "UX",
          "UI",
          "Usability Testing",
          "Design System",
        ]}
        image="/images/work/work-1.png"
        cta="View case study"
        href="/work/acreditta"
      />

      {/* 02 — Tusclasesparticulares */}
      <WorkProject
        number="02"
        category="Marketplace · Product"
        icon="/images/work/work-icons/work-icon-02.svg"
        title="Tusclasesparticulares"
        subtitle="Improving the experience for teachers."
        description="I worked as part of the UX/UI team focused on the teacher experience within the platform. The work included exploring new functionalities and improving existing parts of the product to make everyday tasks clearer and easier to manage."
        tags={[
          "UX/UI",
          "A/B Testing",
          "Conversion",
        ]}
        image="/images/work/work-2.png"
        cta="View case study"
        href="/work/tus-clases-particulares"
      />

      {/* 03 — Acreditta Wallet */}
      <WorkProject
        number="03"
        category="Digital Product · UX/UI"
        icon="/images/work/work-icons/work-icon-03.svg"
        title="Acreditta Wallet"
        subtitle="The user side of digital credentials."
        description="Acreditta Wallet focuses on the experience of people who receive and manage their digital credentials. The project explored how credentials could be accessed, understood and used from the recipient’s perspective."
        tags={[
          "Mobile Experience",
          "UX",
          "UI",
          "PWA",
        ]}
        image="/images/work/work-3.png"
        cta="View case study"
        href="/work/wallet"
      />

      <WorkLab />
    </main>
  );
}
