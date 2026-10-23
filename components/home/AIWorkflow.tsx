const areas = [
  {
    title: "Research",
    description: "Summarising notes and finding patterns",
    icon: "/images/home/home-icons/home-icon-09.svg",
  },
  {
    title: "Ideation",
    description: "Summarising notes and finding patterns",
    icon: "/images/home/home-icons/home-icon-10.svg",
  },
  {
    title: "Content",
    description: "Drafting and refining UX copy.",
    icon: "/images/home/home-icons/home-icon-11.svg",
  },
  {
    title: "Prototyping",
    description: "Testing ideas before spending too much time on them.",
    icon: "/images/home/home-icons/home-icon-12.svg",
  },
  {
    title: "Development",
    description: "Helping turn designs into working interfaces.",
    icon: "/images/home/home-icons/home-icon-13.svg",
  },
];

export default function AIWorkflow() {
  return (
    <section id="ai-workflow" className="bg-background-secondary px-20 py-[72px]">
      <div className="mx-auto flex max-w-[1352px] items-center gap-16">
        {/* Left column */}
        <div className="flex w-[321px] shrink-0 flex-col gap-8">
          <p className="text-[18px] font-normal text-accent">
            AI IN MY WORKFLOW
          </p>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-[34px] font-normal leading-normal text-foreground">
              I’ve been exploring how AI can fit into my design process.
            </h2>

            <p className="text-[18px] font-normal leading-normal text-[#454C54]">
              I use AI for things like exploring ideas, organising research,
              writing, prototyping and getting through repetitive tasks faster.
              I still make the design decisions, but it has changed the way I
              approach some parts of the process.
            </p>
          </div>
        </div>

        {/* AI areas */}
        <div className="flex min-w-0 flex-1 items-start gap-8">
          {areas.map((area) => (
            <article
              key={area.title}
              className="flex w-[167.8px] shrink-0 flex-col gap-6"
            >
              <div className="h-[50px] w-[50px] shrink-0">
                <img
                  src={area.icon}
                  alt=""
                  className="h-full w-full"
                />
              </div>

              <div className="flex flex-col gap-2 text-[18px] leading-normal">
                <h3 className="font-semibold text-foreground">
                  {area.title}
                </h3>

                <p className="text-[#454C54]">
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