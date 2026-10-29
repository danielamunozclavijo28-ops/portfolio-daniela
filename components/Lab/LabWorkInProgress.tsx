
const areas = [
  {
    title: "Research",
    description: "AI-assisted synthesis",
    icon: "/images/lab/lab-icons/lab-icon-01.svg",
  },
  {
    title: "Ideation",
    description: "Rapid exploration",
    icon: "/images/lab/lab-icons/lab-icon-02.svg",
  },
  {
    title: "Prototyping",
    description: "Faster iteration",
    icon: "/images/lab/lab-icons/lab-icon-03.svg",
  },
  {
    title: "Content",
    description: "UX writing and exploration",
    icon: "/images/lab/lab-icons/lab-icon-04.svg",
  },
  {
    title: "Development",
    description: "Design → Code",
    icon: "/images/lab/lab-icons/lab-icon-05.svg",
  },
  {
    title: "Optimization",
    description: "Rapid experimentation",
    icon: "/images/lab/lab-icons/lab-icon-06.svg",
  },
];

export default function LabWorkInProgress() {
  return (
    <section className="bg-background px-8 py-10 md:px-20 md:py-[72px]">
      <div className="mx-auto flex max-w-[1352px] flex-col gap-10 md:flex-row md:items-start md:gap-16">
        {/* Intro */}
        <div className="flex w-full shrink-0 flex-col gap-6 md:w-[321px] md:gap-8">
          <p className="text-[16px] font-normal text-accent md:text-[18px]">
            A WORK IN PROGRESS
          </p>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-[24px] font-normal leading-[1.15] text-foreground md:text-[34px]">
              Learning how to design with AI, not just use AI.
            </h2>

            <div className="flex flex-col gap-4">
              <p className="text-[16px] font-normal leading-[1.25] text-[#454C54]">
                I&apos;m exploring how AI can support different stages of the
                product design process from research synthesis and ideation to
                prototyping, content and development.
              </p>

              <p className="text-[16px] font-normal leading-[1.25] text-[#454C54]">
                The goal isn&apos;t to automate design. It&apos;s to create
                more space for better thinking.
              </p>
            </div>
          </div>
        </div>

        {/* Areas */}
        <div className="grid w-full min-w-0 grid-cols-2 gap-x-6 gap-y-8 md:flex-1 md:grid-cols-3 md:gap-x-8 md:gap-y-12">
          {areas.map((area) => (
            <article
              key={area.title}
              className="flex min-w-0 flex-col gap-4 md:gap-6"
            >
              <div className="flex size-[50px] shrink-0 items-center justify-center rounded-full bg-accent">
                <img
                  src={area.icon}
                  alt=""
                  aria-hidden="true"
                  className="size-full object-contain"
                />
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-[16px] font-semibold leading-[1.25] text-foreground md:text-[18px] md:leading-normal">
                  {area.title}
                </h3>

                <p className="text-[16px] font-normal leading-[1.25] text-[#454C54]">
                  {area.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
