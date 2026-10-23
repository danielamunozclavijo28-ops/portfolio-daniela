
const challenges = [
  {
    number: "01",
    title: "Connecting teachers and students",
    description:
      "Helping teachers find opportunities that match their profile and availability.",
    icon: "♧",
  },
  {
    number: "02",
    title: "Communicating clearly",
    description:
      "Improving messages and feedback so teachers know what is happening and what they can do next.",
    icon: "○",
  },
  {
    number: "03",
    title: "Getting started",
    description:
      "Reducing uncertainty for new teachers joining the platform.",
    icon: "♧",
  },
  {
    number: "04",
    title: "Understanding performance",
    description:
      "Making response information easier to understand and act on.",
    icon: "↗",
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
    <p className="mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.12em] text-[#C99C9C]">
      <span>{number}</span>
      <span className="h-px w-8 bg-[#C99C9C]" />
      <span>{children}</span>
    </p>
  );
}

function ImagePlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center bg-white text-center text-xs text-[#92949A] ${className}`}
    >
      {label}
    </div>
  );
}

export default function TusClasesParticularesPage() {
  return (
    <main className="bg-[#FBFAF8] text-[#121721]">
      {/* HERO */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.12em] text-[#C99C9C]">
              Tusclasesparticulares · Marketplace
            </p>

            <h1 className="font-display max-w-xl text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
              Improving the experience for teachers.
            </h1>

            <p className="mt-6 max-w-lg text-sm leading-relaxed text-[#454C54]">
              Tusclasesparticulares is a platform that connects students with
              teachers. I worked on the UX/UI team, focusing specifically on
              the teacher experience.
            </p>

            <dl className="mt-8 grid grid-cols-3 gap-4 text-[11px]">
              <div>
                <dt className="font-semibold">Role</dt>
                <dd className="mt-2 text-[#454C54]">UX/UI Designer</dd>
              </div>
              <div>
                <dt className="font-semibold">Period</dt>
                <dd className="mt-2 text-[#454C54]">2025</dd>
              </div>
              <div>
                <dt className="font-semibold">Product</dt>
                <dd className="mt-2 text-[#454C54]">Web Platform</dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="absolute inset-8 rounded-[40%] bg-[#E8CACA]" />
            <div className="relative grid grid-cols-2 items-center gap-3 md:gap-5">
              <ImagePlaceholder
                label="Mobile interface"
                className="aspect-[3/5] rounded-lg shadow-sm"
              />
              <div className="space-y-4">
                <ImagePlaceholder
                  label="Desktop interface"
                  className="aspect-[16/9] rounded-lg shadow-sm"
                />
                <ImagePlaceholder
                  label="Teacher dashboard"
                  className="aspect-[16/9] rounded-lg shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT OVERVIEW */}
      <section className="bg-[#F6F2EE] px-6 py-16 md:px-10 md:py-20 lg:px-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionLabel number="01">The project</SectionLabel>

            <h2 className="font-display max-w-xl text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              Finding ways to make everyday tasks easier.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#454C54]">
              As part of the UX/UI team, I worked on different areas of the
              teacher experience, exploring new functionalities and
              improvements to existing ones.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#454C54]">
              The goal was to make the platform easier to use and help teachers
              manage their interactions with students more effectively.
            </p>
          </div>

          <ImagePlaceholder
            label="Project context / interface overview"
            className="aspect-[4/3] w-full"
          />
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="px-6 py-16 md:px-10 md:py-20 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionLabel number="02">Challenge</SectionLabel>

            <h2 className="font-display max-w-lg text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              Where could the experience improve?
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-relaxed text-[#454C54]">
              After looking at the current experience and understanding what
              teachers were saying, we identified a few key areas where things
              could be simpler, clearer and more intuitive.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
            {challenges.map((challenge, index) => (
              <article
                key={challenge.number}
                className={`${
                  index % 2 === 0 ? "sm:border-r sm:pr-6" : ""
                } border-[#E9E4E0]`}
              >
                <div className="mb-4 flex size-10 items-center justify-center rounded-full bg-[#C99C9C] text-lg text-white">
                  {challenge.icon}
                </div>

                <h3 className="text-sm font-semibold">{challenge.title}</h3>

                <p className="mt-2 text-xs leading-relaxed text-[#62666D]">
                  {challenge.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="bg-[#F6F2EE] px-6 py-16 md:px-10 md:py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionLabel number="03">Solutions</SectionLabel>

          <h2 className="font-display mb-10 text-3xl font-semibold tracking-tight md:text-4xl">
            Changes can make a real impact.
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {solutions.map((solution, index) => (
              <article
                key={solution.number}
                className={`${
                  index !== solutions.length - 1
                    ? "lg:border-r lg:pr-6"
                    : ""
                } border-[#E5DEDA]`}
              >
                <p className="mb-3 text-sm font-semibold text-[#C99C9C]">
                  {solution.number}
                </p>

                <h3 className="text-sm font-semibold">{solution.title}</h3>

                <p className="mt-2 text-xs font-medium leading-relaxed text-[#777B81]">
                  {solution.subtitle}
                </p>

                <p className="mt-2 text-xs leading-relaxed text-[#454C54]">
                  {solution.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INTERFACE GALLERY */}
      <section className="overflow-hidden px-6 py-16 md:px-10 md:py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="relative">
            <div className="absolute inset-x-12 top-10 h-3/4 rounded-[45%] bg-[#F0DEDE]" />

            <div className="relative grid items-center gap-4 md:grid-cols-12">
              <ImagePlaceholder
                label="Desktop dashboard"
                className="aspect-[4/3] rounded-lg shadow-sm md:col-span-5"
              />
              <ImagePlaceholder
                label="Mobile screens"
                className="aspect-[3/5] rounded-lg shadow-sm md:col-span-2"
              />
              <ImagePlaceholder
                label="Teacher profile"
                className="aspect-[3/5] rounded-lg shadow-sm md:col-span-2"
              />
              <ImagePlaceholder
                label="Performance metrics"
                className="aspect-[3/4] rounded-lg shadow-sm md:col-span-3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* LEARNINGS */}
      <section className="bg-[#F6F2EE] px-6 py-16 md:px-10 md:py-20 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <div>
            <SectionLabel number="04">Learnings</SectionLabel>

            <h2 className="font-display max-w-lg text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              Small things can make a difference.
            </h2>
          </div>

          <div className="space-y-4 text-sm leading-relaxed text-[#454C54]">
            <p>
              This project gave me the opportunity to work within an existing
              digital product and see how smaller improvements can contribute
              to a more coherent and easier-to-use experience.
            </p>

            <p>
              It also helped me better understand how product decisions need
              to balance user needs with the goals and constraints of an
              existing platform.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-[#F6F2EE] px-6 pb-12 pt-8 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-[10px] uppercase tracking-[0.12em] text-[#C99C9C]">
            Get in touch
          </p>

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight">
                Want to work together?
              </h2>

              <p className="mt-4 max-w-md text-sm leading-relaxed text-[#454C54]">
                I’m always interested in thoughtful products, ambitious ideas
                and opportunities to make digital experiences better.
              </p>

              <a
                href="/#contact"
                className="mt-6 inline-flex items-center gap-3 rounded-sm bg-[#121721] px-4 py-3 text-xs text-white transition-opacity hover:opacity-80"
              >
                Let’s talk <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="flex gap-8">
              <a
                href="mailto:"
                aria-label="Email"
                className="flex flex-col items-center gap-2 text-xs"
              >
                <span className="flex size-10 items-center justify-center rounded-full bg-[#C99C9C] text-lg text-white">
                  ✉
                </span>
                Email
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex flex-col items-center gap-2 text-xs"
              >
                <span className="flex size-10 items-center justify-center rounded-full bg-[#C99C9C] text-sm font-semibold text-white">
                  in
                </span>
                LinkedIn
              </a>
            </div>
          </div>

          <div className="mt-16 flex flex-col justify-between gap-4 border-t border-[#E5DEDA] pt-6 text-xs text-[#92949A] sm:flex-row sm:items-center">
            <span className="text-xl font-semibold text-[#C99C9C]">DM</span>
            <span>Designed in Barcelona · Built with curiosity.</span>
          </div>
        </div>
      </section>
    </main>
  );
}
