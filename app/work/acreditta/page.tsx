
import Image from "next/image";
import Link from "next/link";

const ASSETS = "/images/acreditta";
const ICONS = `${ASSETS}/acreditta-icons`;

const projectInfo = [
  { label: "Role", value: "UX/UI Designer" },
  { label: "Period", value: "2021 – 2023" },
  { label: "Product", value: "B2B SaaS" },
];

const features = [
  {
    icon: "acreditta-icon-01.svg",
    title: "Creation",
    description: "Create and configure credentials.",
  },
  {
    icon: "acreditta-icon-02.svg",
    title: "Issuing",
    description: "Send credentials to recipients.",
  },
  {
    icon: "acreditta-icon-03.svg",
    title: "Management",
    description: "Track and manage issued credentials.",
  },
  {
    icon: "acreditta-icon-04.svg",
    title: "Verification",
    description: "Validate authenticity.",
  },
];

const researchMethods = [
  {
    icon: "acreditta-icon-05.svg",
    title: "Interviews",
    description:
      "Conversations with users helped uncover how they managed credentials in their day-to-day work and where they encountered friction.",
  },
  {
    icon: "acreditta-icon-06.svg",
    title: "Surveys",
    description:
      "Surveys helped collect broader feedback and identify recurring needs across different users.",
  },
  {
    icon: "acreditta-icon-07.svg",
    title: "Benchmark",
    description:
      "I reviewed similar products to understand common patterns, approaches and opportunities for improvement.",
  },
];

const insights = [
  {
    number: "01",
    title: "Manual processes",
    description:
      "Some tasks still required too much manual work, making repetitive processes harder to manage.",
  },
  {
    number: "02",
    title: "Need for automation",
    description:
      "Users expected repetitive tasks to be easier to automate and manage.",
  },
  {
    number: "03",
    title: "Centralised management",
    description:
      "Managing information from different places made it harder to keep track of what was happening.",
  },
  {
    number: "04",
    title: "Trust & authenticity",
    description:
      "Because credentials needed to be trusted and verified, clarity and transparency were particularly important.",
  },
];

const experienceMethods = [
  {
    icon: "acreditta-icon-08.svg",
    title: "User Flow",
    description:
      "The flow helped define the steps users needed to complete each task and identify where the experience could be simplified.",
  },
  {
    icon: "acreditta-icon-09.svg",
    title: "Wireframes",
    description:
      "Wireframes allowed me to test the structure and hierarchy of the screens before defining the final interface.",
  },
];

const designPrinciples = [
  {
    icon: "acreditta-icon-10.svg",
    title: "Visual system",
    description:
      "Defining colours, typography and basic visual rules for the product.",
  },
  {
    icon: "acreditta-icon-11.svg",
    title: "Hierarchy",
    description:
      "Organising information so users could quickly understand what they were seeing and what they could do next.",
  },
  {
    icon: "acreditta-icon-12.svg",
    title: "Components",
    description:
      "Creating reusable components to make the interface more consistent and easier to extend.",
  },
];

const solutions = [
  {
    number: "01",
    title: "Credential creation",
    description:
      "Simplifying the process of creating and configuring a new credential.",
  },
  {
    number: "02",
    title: "Efficient issuing",
    description:
      "Reducing unnecessary steps to make issuing credentials faster and easier to manage.",
  },
  {
    number: "03",
    title: "Automatic validation",
    description:
      "Introducing clearer ways to verify credentials and make their authenticity easier to understand.",
  },
  {
    number: "04",
    title: "Usage metrics",
    description:
      "Bringing relevant information together so organisations can understand how their credentials are being used.",
  },
];

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <p className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.12em] text-accent">
      <span>{number}</span>
      <span className="h-px w-7 bg-accent" aria-hidden="true" />
      <span>{children}</span>
    </p>
  );
}

function FeatureList({
  items,
}: {
  items: {
    icon: string;
    title: string;
    description: string;
  }[];
}) {
  return (
    <div className="flex flex-col gap-8">
      {items.map((item) => (
        <article key={item.title} className="flex items-start gap-5">
          <Image
            src={`${ICONS}/${item.icon}`}
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 shrink-0 object-contain"
          />

          <div>
            <h3 className="text-base font-semibold text-foreground">
              {item.title}
            </h3>
            <p className="mt-2 text-base leading-relaxed text-[#454C54]">
              {item.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

function IconCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <article className="flex flex-col items-start">
      <Image
        src={`${ICONS}/${icon}`}
        alt=""
        width={40}
        height={40}
        className="mb-5 h-10 w-10 object-contain"
      />

      <h3 className="text-base font-semibold text-foreground">{title}</h3>

      <p className="mt-3 text-sm leading-relaxed text-[#454C54]">
        {description}
      </p>
    </article>
  );
}

export default function AcredittaPage() {
  return (
    <main className="bg-background text-foreground">
      {/* HERO */}
      <section className="px-6 py-16 md:px-20 md:py-24">
        <div className="mx-auto grid max-w-[1352px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Link
              href="/work"
              className="mb-12 inline-flex items-center gap-2 text-base text-[#454C54] transition-opacity hover:opacity-70"
            >
              <span aria-hidden="true">←</span>
              Back to selected work
            </Link>

            <p className="mb-5 text-sm font-medium uppercase tracking-[0.12em] text-accent">
              Acreditta · B2B SaaS
            </p>

            <h1 className="font-display max-w-xl text-4xl leading-tight md:text-5xl lg:text-6xl">
              Designing a platform for digital credentials.
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-[#454C54]">
              Acreditta is a platform that allows organizations to create,
              issue, manage and verify digital credentials.
            </p>

            {/* Project information without top border */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {projectInfo.map((item) => (
                <div key={item.label}>
                  <p className="text-sm font-semibold text-foreground">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#454C54]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-8 max-w-lg text-base leading-relaxed text-[#454C54]">
              My work covered research, UX, UI and the definition of new
              product experiences.
            </p>
          </div>

          <div className="relative mx-auto flex min-h-[300px] w-full items-center justify-center md:min-h-[440px]">
            <div
              className="absolute inset-[8%] rounded-full bg-[#F0E0DE]"
              aria-hidden="true"
            />

            <Image
              src="/images/acreditta/acreditta-image-01.png"
              alt="Acreditta digital credentials platform"
              width={900}
              height={700}
              priority
              className="relative z-10 h-auto max-h-[500px] w-full object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* 01 — THE PROJECT */}
      <section className="bg-background-secondary px-6 py-16 md:px-20 md:py-24">
        <div className="mx-auto grid max-w-[1352px] gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionLabel number="01">The project</SectionLabel>

            <h2 className="mt-6 max-w-lg font-display text-3xl leading-snug md:text-4xl">
              Making a growing platform easier to use.
            </h2>

            <div className="mt-6 max-w-lg space-y-5 text-base leading-relaxed text-[#454C54]">
              <p>
                Acreditta is a platform for creating, issuing and verifying
                digital credentials. I worked on the product experience across
                different parts of the platform, helping organise existing
                flows and explore improvements based on user needs.
              </p>

              <p>
                One of the main challenges was making the platform easier to
                understand and manage as the number of credentials, users and
                processes grew.
              </p>
            </div>
          </div>

          <div className="self-center">
            <FeatureList items={features} />
          </div>
        </div>
      </section>

      {/* 02 — RESEARCH */}
      <section className="px-6 py-16 md:px-20 md:py-24">
        <div className="mx-auto grid max-w-[1352px] gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16">
          <div>
            <SectionLabel number="02">Research</SectionLabel>

            <h2 className="mt-6 max-w-lg font-display text-3xl leading-snug md:text-4xl">
              First, I wanted to understand how people were using the platform.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-[#454C54]">
              I combined different research methods to understand the existing
              experience, identify recurring problems and see how similar
              products approached the same type of tasks.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {researchMethods.map((item) => (
              <IconCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 03 — INSIGHTS */}
      <section className="bg-background-secondary px-6 py-16 md:px-20 md:py-24">
        <div className="mx-auto max-w-[1352px]">
          <SectionLabel number="03">Insights</SectionLabel>

          <h2 className="mt-6 font-display text-3xl md:text-4xl">
            Four things stood out.
          </h2>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {insights.map((item) => (
              <article key={item.number}>
                <p className="text-base font-semibold text-accent">
                  {item.number}
                </p>

                <h3 className="mt-3 text-base font-semibold">{item.title}</h3>

                <p className="mt-3 text-sm leading-relaxed text-[#454C54]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — USERS */}
      <section className="px-6 py-16 md:px-20 md:py-24">
        <div className="mx-auto grid max-w-[1352px] gap-12 lg:grid-cols-[0.9fr_1.5fr] lg:gap-16">
          <div>
            <SectionLabel number="04">Users</SectionLabel>

            <h2 className="mt-6 max-w-lg font-display text-3xl leading-snug md:text-4xl">
              Different users, different needs.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-[#454C54]">
              Looking at both sides of the experience helped us consider the
              needs of the people managing credentials as well as those
              receiving them.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <article className="bg-background-secondary p-6 md:p-8">
              <div className="mb-5 flex size-14 items-center justify-center rounded-full bg-[#E5D5D2]">
                <Image
                  src={`${ASSETS}/user-01.svg`}
                  alt="Administrator persona"
                  width={56}
                  height={56}
                  className="h-14 w-14 object-contain"
                />
              </div>

              <h3 className="text-base font-semibold">Carlos</h3>
              <p className="mt-1 text-sm text-[#454C54]">Administrator</p>

              <p className="mt-4 text-base leading-relaxed text-[#454C54]">
                Manages credentials and needs to keep track of processes, users
                and information from one place.
              </p>
            </article>

            <article className="bg-background-secondary p-6 md:p-8">
              <div className="mb-5 flex size-14 items-center justify-center rounded-full bg-[#F2D99B]">
                <Image
                  src={`${ASSETS}/user-02.svg`}
                  alt="Credential recipient persona"
                  width={56}
                  height={56}
                  className="h-14 w-14 object-contain"
                />
              </div>

              <h3 className="text-base font-semibold">Andres</h3>
              <p className="mt-1 text-sm text-[#454C54]">
                Credential recipient
              </p>

              <p className="mt-4 text-base leading-relaxed text-[#454C54]">
                Receives credentials and needs to access, understand and share
                them easily.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 05 — DEFINING THE EXPERIENCE */}
      <section className="bg-background-secondary px-6 py-16 md:px-20 md:py-24">
        <div className="mx-auto grid max-w-[1352px] gap-12 lg:grid-cols-[0.9fr_1.5fr] lg:gap-16">
          <div>
            <SectionLabel number="05">Defining the experience</SectionLabel>

            <h2 className="mt-6 max-w-lg font-display text-3xl leading-snug md:text-4xl">
              Before designing the interface, I worked on the structure.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-[#454C54]">
              I mapped the main flows and explored different ways of organising
              the information before moving into visual design.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            {experienceMethods.map((item) => (
              <article key={item.title}>
                <Image
                  src={`${ICONS}/${item.icon}`}
                  alt=""
                  width={40}
                  height={40}
                  className="mb-5 h-10 w-10 object-contain"
                />

                <h3 className="text-base font-semibold">{item.title}</h3>

                <p className="mt-3 text-sm leading-relaxed text-[#454C54]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — DESIGN */}
      <section className="px-6 py-16 md:px-20 md:py-24">
        <div className="mx-auto grid max-w-[1352px] gap-12 lg:grid-cols-[0.9fr_1.5fr] lg:gap-16">
          <div>
            <SectionLabel number="06">Design</SectionLabel>

            <h2 className="mt-6 max-w-lg font-display text-3xl leading-snug md:text-4xl">
              Building a clearer and more consistent interface.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-[#454C54]">
              Once the structure was defined, I worked on the visual language
              and reusable elements needed to keep the product consistent as
              new features were added.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {designPrinciples.map((item) => (
              <article key={item.title}>
                <Image
                  src={`${ICONS}/${item.icon}`}
                  alt=""
                  width={40}
                  height={40}
                  className="mb-5 h-10 w-10 object-contain"
                />

                <h3 className="text-base font-semibold">{item.title}</h3>

                <p className="mt-3 text-sm leading-relaxed text-[#454C54]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — SOLUTION */}
      <section className="bg-background-secondary px-6 py-16 md:px-20 md:py-24">
        <div className="mx-auto max-w-[1352px]">
          <SectionLabel number="07">Solution</SectionLabel>

          <h2 className="mt-6 max-w-3xl font-display text-3xl leading-snug md:text-4xl">
            Designing around the tasks users actually needed to complete.
          </h2>

          <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div className="relative flex min-h-[300px] items-center justify-center md:min-h-[440px]">
              <div
                className="absolute inset-[8%] rounded-full bg-[#F0E0DE]"
                aria-hidden="true"
              />

              <Image
                src="/images/acreditta/acreditta-image-02.png"
                alt="Acreditta digital credential product screens"
                width={900}
                height={750}
                className="relative z-10 h-auto max-h-[500px] w-full object-contain"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>

            <div className="space-y-8">
              {solutions.map((item) => (
                <article key={item.number} className="flex gap-5">
                  <p className="text-base font-semibold text-accent">
                    {item.number}
                  </p>

                  <div>
                    <h3 className="text-base font-semibold">{item.title}</h3>

                    <p className="mt-3 text-base leading-relaxed text-[#454C54]">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
