
import Image from "next/image";

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
    <section
      id="ai-workflow"
      className="bg-background-secondary px-8 py-10 md:px-10 md:py-[72px] xl:px-20"
    >
      <div className="mx-auto flex max-w-[1352px] flex-col gap-8 md:flex-row md:items-center md:gap-10 lg:gap-16">
        {/* Left column */}
        <div className="flex w-full shrink-0 flex-col gap-5 md:w-[280px] md:gap-8 lg:w-[321px]">
          <p className="text-[16px] font-normal text-accent md:text-[18px]">
            AI IN MY WORKFLOW
          </p>

          <div className="flex flex-col gap-3 md:gap-4">
            <h2 className="font-display text-[24px] font-normal leading-[1.2] text-foreground md:text-[34px] md:leading-normal">
              I’ve been exploring how AI can fit into my design process.
            </h2>

            <p className="text-[16px] font-normal leading-[1.5] text-[#454C54] md:text-[18px] md:leading-normal">
              I use AI for things like exploring ideas, organising research,
              writing, prototyping and getting through repetitive tasks faster.
              I still make the design decisions, but it has changed the way I
              approach some parts of the process.
            </p>
          </div>
        </div>

        {/* AI areas */}
        <div className="grid w-full min-w-0 grid-cols-2 items-start gap-x-5 gap-y-8 md:flex md:flex-1 md:gap-6 lg:gap-8">
          {areas.map((area) => (
            <article
              key={area.title}
              className="flex min-w-0 flex-col gap-3 md:w-0 md:flex-1 md:gap-6"
            >
              <div className="h-10 w-10 shrink-0 md:h-[50px] md:w-[50px]">
                <Image
                  src={area.icon}
                  alt=""
                  width={50}
                  height={50}
                  aria-hidden="true"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="flex flex-col gap-1 md:gap-2">
                <h3 className="text-[16px] font-semibold leading-[1.3] text-foreground md:text-[18px] md:leading-normal">
                  {area.title}
                </h3>

                <p className="text-[16px] font-normal leading-[1.5] text-[#454C54] md:text-[18px] md:leading-normal">
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
