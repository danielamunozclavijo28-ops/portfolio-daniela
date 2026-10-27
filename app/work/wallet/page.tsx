
import Image from "next/image";
import Link from "next/link";

const ASSETS = "/images/wallet";
const ICONS = `${ASSETS}/wallet-icons`;

const projectInfo = [
  { label: "Role", value: "UX/UI Designer" },
  { label: "Period", value: "2021 – 2023" },
  { label: "Product", value: "PWA" },
];

const features = [
  {
    icon: "wallet-icon-01.svg",
    title: "Create",
    description: "Create and configure credentials.",
  },
  {
    icon: "wallet-icon-02.svg",
    title: "Receive",
    description: "Access digital credentials.",
  },
  {
    icon: "wallet-icon-03.svg",
    title: "Manage",
    description: "Keep credentials organised.",
  },
  {
    icon: "wallet-icon-04.svg",
    title: "Share",
    description: "Share achievements with others.",
  },
];

const researchMethods = [
  {
    icon: "wallet-icon-05.svg",
    title: "Applications",
    description:
      "Reviewing existing products to understand their navigation, structure and approach to managing digital credentials.",
  },
  {
    icon: "wallet-icon-06.svg",
    title: "Functionalities",
    description:
      "Exploring how users could access their credentials, find relevant information and share them when needed.",
  },
];

const insights = [
  {
    number: "01",
    title: "Easy access",
    description:
      "Users need to access their credentials when they need them, without having to search across different platforms.",
  },
  {
    number: "02",
    title: "Clear organisation",
    description:
      "Credentials should be organised in a way that makes them easy to find, identify and manage.",
  },
  {
    number: "03",
    title: "Designed for mobile",
    description:
      "The experience needs to work well on smaller screens, with clear navigation and straightforward actions.",
  },
];

const experiencePrinciples = [
  {
    icon: "wallet-icon-07.svg",
    title: "Navigation",
    description:
      "Organising the main areas of the app so users can move between their profile and credentials.",
  },
  {
    icon: "wallet-icon-08.svg",
    title: "Hierarchy",
    description:
      "Prioritising the most relevant information on each screen, especially on mobile.",
  },
  {
    icon: "wallet-icon-09.svg",
    title: "Key actions",
    description:
      "Making options such as viewing details and sharing a credential easy to identify.",
  },
];

const solutions = [
  {
    number: "01",
    title: "User profile",
    description:
      "A dedicated space to view and update the information associated with the user's profile.",
  },
  {
    number: "02",
    title: "Credential list",
    description:
      "A centralised view of available credentials, making it easier to browse and find them.",
  },
  {
    number: "03",
    title: "Credential details",
    description:
      "Access to relevant information about each credential, including its issue date and available management options.",
  },
  {
    number: "04",
    title: "Social sharing",
    description:
      "Options to share credentials and achievements directly from the application.",
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

function FeatureList() {
  return (
    <div className="flex flex-col gap-7">
      {features.map((feature) => (
        <article key={feature.title} className="flex items-center gap-4">
          <Image
            src={`${ICONS}/${feature.icon}`}
            alt=""
            width={40}
            height={40}
            className="size-10 shrink-0 object-contain"
          />

          <div>
            <h3 className="text-base font-semibold">{feature.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-[#454C54]">
              {feature.description}
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
        className="mb-5 size-10 object-contain"
      />

      <h3 className="text-base font-semibold text-foreground">{title}</h3>

      <p className="mt-3 text-sm leading-relaxed text-[#454C54]">
        {description}
      </p>
    </article>
  );
}

export default function WalletPage() {
  return (
    <main className="bg-background text-foreground">
      {/* HERO */}
      <section className="px-6 py-16 md:px-10 md:py-20 xl:px-20 xl:py-24">
        <div className="mx-auto grid max-w-[1352px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Link
              href="/work"
              className="mb-10 inline-flex items-center gap-2 text-base text-[#454C54] transition-opacity hover:opacity-70"
            >
              <span aria-hidden="true">←</span>
              Back to selected work
            </Link>

            <p className="mb-5 text-sm font-medium uppercase tracking-[0.12em] text-accent">
              Acreditta Wallet · Mobile Product
            </p>

            <h1 className="font-display max-w-xl text-4xl leading-tight md:text-5xl lg:text-6xl">
              A mobile-first experience for digital credentials.
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-[#454C54]">
              Acreditta Wallet gives credential recipients a place to access,
              manage and share their digital credentials from their mobile
              devices.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {projectInfo.map((item) => (
                <div key={item.label}>
                  <p className="text-sm font-semibold">{item.label}</p>
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

          <div className="relative mx-auto flex min-h-[300px] w-full items-center justify-center overflow-hidden md:min-h-[440px]">
            <div
              className="absolute inset-[5%] rounded-full bg-[#EAF0F7]"
              aria-hidden="true"
            />

            <Image
              src={`${ASSETS}/wallet-image-01.png`}
              alt="Acreditta Wallet mobile interface and digital credentials"
              width={1000}
              height={800}
              priority
              className="relative z-10 h-auto max-h-[520px] w-full object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* 01 — THE PROJECT */}
      <section className="bg-background-secondary px-6 py-16 md:px-10 md:py-20 xl:px-20 xl:py-24">
        <div className="mx-auto grid max-w-[1352px] gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionLabel number="01">The project</SectionLabel>

            <h2 className="mt-6 max-w-lg font-display text-3xl leading-snug md:text-4xl">
              Making digital credentials easier to access.
            </h2>

            <div className="mt-6 max-w-lg space-y-5 text-base leading-relaxed text-[#454C54]">
              <p>
                Acreditta Wallet was designed to help credential recipients
                access and manage their digital credentials from a mobile
                device, bringing the experience into one place.
              </p>

              <p>
                The challenge was to make credentials easy to find, understand
                and share, while keeping the experience simple and intuitive
                on a mobile screen.
              </p>
            </div>
          </div>

          <div className="self-center">
            <FeatureList />
          </div>
        </div>
      </section>

      {/* 02 — RESEARCH */}
      <section className="px-6 py-16 md:px-10 md:py-20 xl:px-20 xl:py-24">
        <div className="mx-auto grid max-w-[1352px] gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16">
          <div>
            <SectionLabel number="02">Research</SectionLabel>

            <h2 className="mt-6 max-w-lg font-display text-3xl leading-snug md:text-4xl">
              Looking at existing solutions.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-[#454C54]">
              I reviewed related applications and their functionalities to
              understand how digital credentials were presented, organised and
              accessed. This helped identify common patterns and opportunities
              to improve the mobile experience.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
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
      <section className="bg-background-secondary px-6 py-16 md:px-10 md:py-20 xl:px-20 xl:py-24">
        <div className="mx-auto max-w-[1352px]">
          <SectionLabel number="03">Insights</SectionLabel>

          <h2 className="mt-6 font-display text-3xl md:text-4xl">
            Three things the experience needed.
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-0">
            {insights.map((item, index) => (
              <article
                key={item.number}
                className={`${index !== 0 ? "sm:border-l sm:border-[#E6DEDA] sm:pl-6" : ""} ${index !== 2 ? "sm:pr-6" : ""}`}
              >
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
      <section className="px-6 py-16 md:px-10 md:py-20 xl:px-20 xl:py-24">
        <div className="mx-auto grid max-w-[1352px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionLabel number="04">Users</SectionLabel>

            <h2 className="mt-6 max-w-lg font-display text-3xl leading-snug md:text-4xl">
              Designed for credential recipients.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-[#454C54]">
              The experience focuses on people who receive digital credentials
              and need a convenient way to consult, organise and share their
              achievements.
            </p>
          </div>

          <article className="bg-background-secondary p-6 md:p-8">
            <div className="mb-5 flex size-14 items-center justify-center rounded-full bg-[#E5D5D2]">
              <Image
                src={`${ASSETS}/user-01.svg`}
                alt=""
                width={56}
                height={56}
                className="size-14 object-contain"
              />
            </div>

            <h3 className="text-base font-semibold">Credential recipient</h3>

            <p className="mt-4 text-base leading-relaxed text-[#454C54]">
              Someone who receives digital credentials and wants to access
              them whenever needed, understand the information they contain
              and share their achievements with others.
            </p>
          </article>
        </div>
      </section>

      {/* 05 — DEFINING THE EXPERIENCE */}
      <section className="bg-background-secondary px-6 py-16 md:px-10 md:py-20 xl:px-20 xl:py-24">
        <div className="mx-auto grid max-w-[1352px] gap-12 lg:grid-cols-[0.9fr_1.5fr] lg:gap-16">
          <div>
            <SectionLabel number="05">Defining the experience</SectionLabel>

            <h2 className="mt-6 max-w-lg font-display text-3xl leading-snug md:text-4xl">
              Keeping everything within reach.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-[#454C54]">
              The experience was structured around the main things users need
              to do with their credentials: access their profile, browse their
              credentials, view individual details and share them. The aim was
              to keep these actions easy to find and reduce unnecessary steps.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {experiencePrinciples.map((item) => (
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

      {/* 06 — SOLUTION */}
      <section className="px-6 py-16 md:px-10 md:py-20 xl:px-20 xl:py-24">
        <div className="mx-auto max-w-[1352px]">
          <SectionLabel number="06">Solution</SectionLabel>

          <h2 className="mt-6 max-w-3xl font-display text-3xl leading-snug md:text-4xl">
            Designed around everyday tasks.
          </h2>

          <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden md:min-h-[440px]">
              <div
                className="absolute inset-[8%] rounded-full bg-[#F0E0DE]"
                aria-hidden="true"
              />

              <Image
                src={`${ASSETS}/wallet-image-02.png`}
                alt="Acreditta Wallet credential screens"
                width={1000}
                height={800}
                className="relative z-10 h-auto max-h-[520px] w-full object-contain"
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

      {/* 07 — THE EXPERIENCE */}
      <section className="bg-background-secondary px-6 py-16 md:px-10 md:py-20 xl:px-20 xl:py-24">
        <div className="mx-auto grid max-w-[1352px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionLabel number="07">The experience</SectionLabel>

            <h2 className="mt-6 max-w-lg font-display text-3xl leading-snug md:text-4xl">
              From profile to credential sharing.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-[#454C54]">
              From browsing credentials to viewing their details and sharing
              achievements, the experience brings the main actions together in
              one mobile interface.
            </p>
          </div>

          <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden md:min-h-[400px]">
            <div
              className="absolute inset-[8%] rounded-full bg-[#F0E0DE]"
              aria-hidden="true"
            />

            <Image
              src={`${ASSETS}/wallet-image-03.png`}
              alt="Acreditta Wallet mobile experience"
              width={900}
              height={750}
              className="relative z-10 h-auto max-h-[460px] w-full object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
