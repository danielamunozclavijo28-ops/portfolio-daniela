
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Understand",
    question: "What are we solving?",
    icon: "/images/home/home-icons/home-icon-02.svg",
  },
  {
    number: "02",
    title: "Explore",
    question: "What do we know so far?",
    icon: "/images/home/home-icons/home-icon-03.svg",
  },
  {
    number: "03",
    title: "Define",
    question: "What should we focus on?",
    icon: "/images/home/home-icons/home-icon-04.svg",
  },
  {
    number: "04",
    title: "Design",
    question: "How could this work?",
    icon: "/images/home/home-icons/home-icon-05.svg",
  },
  {
    number: "05",
    title: "Validate",
    question: "Does it make sense?",
    icon: "/images/home/home-icons/home-icon-06.svg",
  },
  {
    number: "06",
    title: "Iterate",
    question: "What can we change?",
    icon: "/images/home/home-icons/home-icon-07.svg",
  },
];

export default function HowIWork() {
  return (
    <section
      id="about"
      className="bg-background px-8 py-10 md:px-10 md:py-[72px] xl:px-20"
    >
      <div className="mx-auto flex max-w-[1352px] flex-col gap-8 md:flex-row md:items-center md:gap-10 lg:gap-16">
        {/* Intro */}
        <div className="flex w-full shrink-0 flex-col gap-5 md:w-[280px] md:gap-8 lg:w-[314px]">
          <p className="text-[16px] font-normal text-accent md:text-[18px]">
            HOW I WORK
          </p>

          <div className="flex flex-col gap-3 md:gap-4">
            <h2 className="font-display text-[24px] font-semibold leading-[1.2] text-foreground md:text-[34px] md:leading-normal">
              It usually starts with a lot of questions.
            </h2>

            <p className="text-[16px] font-normal leading-[1.5] text-[#454C54] md:text-[18px] md:leading-normal">
              Before jumping into the interface, I like to understand what
              we’re building, who it is for and what we’re trying to improve.
              From there, I move between research, flows, wireframes, UI and
              testing depending on the project needs.
            </p>
          </div>
        </div>

        {/* Process and AI */}
        <div className="flex min-w-0 w-full flex-1 flex-col gap-6 md:gap-8">
          {/* Process steps */}
          <div className="grid grid-cols-2 gap-x-5 gap-y-7 md:flex md:items-start md:justify-between md:gap-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex min-w-0 flex-col gap-3 md:w-[120px] md:shrink-0 md:gap-6"
              >
                <div className="flex h-10 w-10 items-center justify-center md:h-[50px] md:w-[50px]">
                  <Image
                    src={step.icon}
                    alt=""
                    width={40}
                    height={40}
                    aria-hidden="true"
                    className="h-8 w-8 object-contain md:h-10 md:w-10"
                  />
                </div>

                <div className="flex flex-col gap-1 text-[16px] leading-[1.4] md:gap-2 md:text-[18px] md:leading-normal">
                  <p className="font-semibold text-foreground">
                    {step.title}
                  </p>

                  <p className="text-[#454C54]">
                    {step.question}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="h-px w-full bg-[#D9D8D5]" />

          {/* AI statement */}
          <div className="flex w-full flex-col gap-5 md:flex-row md:items-start md:gap-8">
            <div className="flex w-full min-w-0 items-start gap-3 md:w-[474px] md:shrink-0 md:gap-4">
              <Image
                src="/images/home/home-icons/home-icon-08.svg"
                alt=""
                width={28}
                height={28}
                aria-hidden="true"
                className="mt-0.5 h-5 w-5 shrink-0 object-contain md:mt-0 md:h-7 md:w-7"
              />

              <p className="text-[16px] font-normal leading-[1.5] text-[#454C54] md:text-[18px] md:leading-normal">
                I use <strong>AI</strong> throughout my workflow to accelerate
                research, exploration, prototyping and production, while
                keeping product decisions, thinking and design
                judgment human-led.
              </p>
            </div>

            {/* AI is a tool, not a replacement */}
            <div className="flex w-full items-center justify-center md:h-[200px] md:flex-1">
              <Image
                src="/images/home/image-text-home.png"
                alt="AI is a tool, not a replacement."
                width={360}
                height={126}
                className="h-auto w-full max-w-[240px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
