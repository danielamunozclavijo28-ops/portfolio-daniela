
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
    <section id="about" className="bg-background px-20 py-[72px]">
      <div className="mx-auto flex max-w-[1352px] items-center gap-16">
        {/* Intro */}
        <div className="flex w-[314px] shrink-0 flex-col gap-8">
          <p className="text-[18px] font-normal text-accent">
            HOW I WORK
          </p>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-[34px] font-semibold leading-normal text-foreground">
              It usually starts with a lot of questions.
            </h2>

            <p className="text-[18px] font-normal leading-normal text-[#454C54]">
              Before jumping into the interface, I like to understand what
              we’re building, who it is for and what we’re trying to improve.
              From there, I move between research, flows, wireframes, UI and
              testing depending on the project needs.
            </p>
          </div>
        </div>

        {/* Process */}
        <div className="flex min-w-0 flex-1 flex-col gap-8">
          <div className="flex w-full items-start justify-between gap-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex w-[120px] shrink-0 flex-col gap-6"
              >
                {/* Larger icons without borders */}
                <div className="flex h-[50px] w-[50px] items-center justify-center">
                  <Image
                    src={step.icon}
                    alt=""
                    width={40}
                    height={40}
                    aria-hidden="true"
                    className="h-10 w-10 object-contain"
                  />
                </div>

                <div className="flex flex-col gap-2 text-[18px] leading-normal">
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
          <div className="flex w-full items-start gap-8">
            <div className="flex w-[474px] shrink-0 items-start gap-4">
              <Image
                src="/images/home/home-icons/home-icon-08.svg"
                alt=""
                width={28}
                height={28}
                aria-hidden="true"
                className="h-7 w-7 shrink-0 object-contain"
              />

              <p className="text-[18px] font-normal leading-normal text-[#454C54]">
                I use <strong>AI</strong> throughout my workflow to accelerate
                research, exploration, prototyping and production, while
                keeping product decisions, thinking and design
                judgment human-led.
              </p>
            </div>

            {/* Image: AI is a tool, not a replacement */}
            <div className="flex h-[200px] flex-1 items-center justify-center">
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
