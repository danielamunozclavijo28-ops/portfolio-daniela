
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
    description: "UX writing And exploration",
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
    <section className="bg-background px-20 py-[72px]">
      <div className="mx-auto flex max-w-[1352px] items-start gap-16">
        {/* Intro */}
        <div className="flex w-[321px] shrink-0 flex-col gap-8">
          <p className="text-[18px] font-normal text-accent">
            A WORK IN PROGRESS
          </p>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-[34px] font-normal leading-[1.15] text-foreground">
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
        <div className="grid min-w-0 flex-1 grid-cols-3 gap-x-8 gap-y-12">
          {areas.map((area) => (
            <article
              key={area.title}
              className="flex flex-col gap-6"
            >
              <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-accent">
                <img
                  src={area.icon}
                  alt=""
                  aria-hidden="true"
                />
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-[18px] font-semibold leading-normal text-foreground">
                  {area.title}
                </h3>

                <p className="text-[16px] font-normal leading-normal text-[#454C54]">
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
