
import Image from "next/image";
import Link from "next/link";

const ASSETS = "/images/tusclases";
const ICONS = `${ASSETS}/tusclases-icons`;

const challenges = [
  {
    title: "Connecting teachers and students",
    description:
      "Helping teachers find opportunities that match their profile and availability.",
    icon: "tusclases-icon-01.svg",
  },
  {
    title: "Communicating clearly",
    description:
      "Improving messages and feedback so teachers know what is happening and what they can do next.",
    icon: "tusclases-icon-02.svg",
  },
  {
    title: "Getting started",
    description:
      "Reducing uncertainty for new teachers joining the platform.",
    icon: "tusclases-icon-03.svg",
  },
  {
    title: "Understanding performance",
    description:
      "Making response information easier to understand and act on.",
    icon: "tusclases-icon-04.svg",
  },
];

const solutions = [
  {
    number: "01",
    title: "Proactive Match",
    subtitle:
      "Helping teachers find opportunities that match their profile and availability.",
    description:
      "I designed a feature to connect teachers with students whose needs matched their profile and availability.",
  },
  {
    number: "02",
    title: "Response Rate",
    subtitle: "Making response performance easier to understand.",
    description:
      "I designed a section that helps teachers understand their response rate and gives them clearer information about how they are performing on the platform.",
  },
  {
    number: "03",
    title: "New Tutor Onboarding",
    subtitle: "Making the first steps easier.",
    description:
      "I redesigned the initial experience for new teachers to make the platform easier to understand and reduce uncertainty when getting started.",
  },
  {
    number: "04",
    title: "Feedback",
    subtitle: "Making feedback easier to understand.",
    description:
      "I simplified messages and states to make information clearer and reduce friction throughout the experience.",
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
    <p className="mb-6 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.12em] text-[#C99C9C]">
      <span>{number}</span>
      <span className="h-px w-8 bg-[#C99C9C]" aria-hidden="true" />
      <span>{children}</span>
    </p>
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

      <h3 className="text-base font-semibold leading-snug text-[#121721]">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-[#454C54]">
        {description}
      </p>
    </article>
  );
}

export default function TusClasesParticularesPage() {
  return (
    <main className="bg-[#FBFAF8] text-[#121721]">
      {/* HERO */}
      <section className="px-6 py-16 md:px-10 md:py-20 xl:px-20 xl:py-24">
        <div className="mx-auto grid max-w-[1352px] items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <Link
              href="/work"
              className="mb-10 inline-flex items-center gap-2 text-base text-[#454C54] transition-opacity hover:opacity-70"
            >
              <span aria-hidden="true">←</span>
              Back to selected work
            </Link>

            <p className="mb-5 text-sm font-medium uppercase tracking-[0.12em] text-[#C99C9C]">
              Tusclasesparticulares · Marketplace
            </p>

            <h1 className="font-display max-w-xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Improving the experience for teachers.
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-[#454C54]">
              Tusclasesparticulares is a platform that connects students with
              teachers. I worked on the UX/UI team, focusing specifically on
              the teacher experience.
            </p>

            <dl className="mt-8 grid grid-cols-3 gap-4">
              <div>
                <dt className="text-sm font-semibold">Role</dt>
                <dd className="mt-2 text-sm leading-relaxed text-[#454C54]">
                  UX/UI Designer
                </dd>
              </div>

              <div>
                <dt className="text-sm font-semibold">Period</dt>
                <dd className="mt-2 text-sm leading-relaxed text-[#454C54]">
                  2025
                </dd>
              </div>

              <div>
                <dt className="text-sm font-semibold">Product</dt>
                <dd className="mt-2 text-sm leading-relaxed text-[#454C54]">
                  Web Platform
                </dd>
              </div>
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-2xl">
            <div
              className="absolute inset-[8%] rounded-[40%] bg-[#E8CACA]"
              aria-hidden="true"
            />

            <Image
              src={`${ASSETS}/tusclases-image-01.png`}
              alt="Tusclasesparticulares teacher experience and interface designs"
              width={1200}
              height={900}
              priority
              className="relative h-auto w-full object-contain"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>
        </div>
      </section>

      {/* 01 — THE PROJECT */}
      <section className="bg-[#F6F2EE] px-6 py-16 md:px-10 md:py-20 xl:px-20 xl:py-24">
        <div className="mx-auto grid max-w-[1352px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionLabel number="01">The project</SectionLabel>

            <h2 className="font-display max-w-xl text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              Finding ways to make everyday tasks easier.
            </h2>

            <div className="mt-6 max-w-xl space-y-5 text-base leading-relaxed text-[#454C54]">
              <p>
                As part of the UX/UI team, I worked on different areas of the
                teacher experience, exploring new functionalities and
                improvements to existing ones.
              </p>

              <p>
                The goal was to make the platform easier to use and help
                teachers manage their interactions with students more
                effectively.
              </p>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <Image
              src={`${ASSETS}/tusclases-image-02.png`}
              alt="Tusclasesparticulares interface concepts"
              width={1200}
              height={900}
              className="h-auto w-full object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* 02 — CHALLENGE */}
      <section className="px-6 py-16 md:px-10 md:py-20 xl:px-20 xl:py-24">
        <div className="mx-auto grid max-w-[1352px] gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionLabel number="02">Challenge</SectionLabel>

            <h2 className="font-display max-w-lg text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              Where could the experience improve?
            </h2>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-[#454C54]">
              After looking at the current experience and understanding what
              teachers were saying, we identified a few key areas where things
              could be simpler, clearer and more intuitive.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
            {challenges.map((challenge, index) => (
              <article
                key={challenge.title}
                className={`${
                  index % 2 === 0 ? "sm:border-r sm:pr-6" : ""
                } border-[#E9E4E0]`}
              >
                <Image
                  src={`${ICONS}/${challenge.icon}`}
                  alt=""
                  width={40}
                  height={40}
                  className="mb-5 size-10 object-contain"
                />

                <h3 className="text-base font-semibold leading-snug">
                  {challenge.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#62666D]">
                  {challenge.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — SOLUTIONS */}
      <section className="bg-[#F6F2EE] px-6 py-16 md:px-10 md:py-20 xl:px-20 xl:py-24">
        <div className="mx-auto max-w-[1352px]">
          <SectionLabel number="03">Solutions</SectionLabel>

          <h2 className="font-display max-w-3xl text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            Changes can make a real impact.
          </h2>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {solutions.map((solution, index) => (
              <article
                key={solution.number}
                className={`${
                  index !== solutions.length - 1 ? "lg:border-r lg:pr-6" : ""
                } border-[#E5DEDA]`}
              >
                <p className="mb-4 text-sm font-semibold text-[#C99C9C]">
                  {solution.number}
                </p>

                <h3 className="text-lg font-semibold leading-snug">
                  {solution.title}
                </h3>

                <p className="mt-3 text-sm font-medium leading-relaxed text-[#777B81]">
                  {solution.subtitle}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-[#454C54]">
                  {solution.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

{/* INTERFACE */}
<section className="bg-[#FBFAF8] px-6 py-16 md:px-10 md:py-24 xl:px-20">
  <div className="mx-auto max-w-[1440px]">
    <div className="relative w-full overflow-hidden rounded-2xl">
      <Image
        src={`${ASSETS}/tusclases-image-03.png`}
        alt="Tus Clases Particulares interface"
        width={1600}
        height={1000}
        className="h-auto w-full object-cover"
        sizes="(max-width: 768px) 100vw, 90vw"
      />
    </div>
  </div>
</section>

      {/* 04 — LEARNINGS */}
      <section className="bg-[#F6F2EE] px-6 py-16 md:px-10 md:py-20 xl:px-20 xl:py-24">
        <div className="mx-auto grid max-w-[1352px] gap-8 md:grid-cols-2 md:gap-16">
          <div>
            <SectionLabel number="05">Learnings</SectionLabel>

            <h2 className="font-display max-w-lg text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              Small things can make a difference.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-relaxed text-[#454C54]">
            <p>
              This project gave me the opportunity to work within an existing
              digital product and see how smaller improvements can contribute
              to a more coherent and easier-to-use experience.
            </p>

            <p>
              It also helped me better understand how product decisions need to
              balance user needs with the goals and constraints of an existing
              platform.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
