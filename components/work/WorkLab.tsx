
import Image from "next/image";
import Link from "next/link";

const explorations = [
  {
    title: "Academic Projects",
    description: "Research, layouts and visual explorations.",
    image: "/images/lab/a-casa-portuguesa.png",
  },
  {
    title: "Web Experiments",
    description: "Interactions, layouts and visual explorations.",
    image: "/images/lab/amigou.png",
  },
  {
    title: "AI Experiments",
    description: "Testing new tools, prompts and workflows.",
    image: "/images/lab/frizz.png",
  },
];

const tags = [
  "AI",
  "Web",
  "Visual Design",
  "Interaction",
  "E-commerce",
  "Prototyping",
];

export default function WorkLab() {
  return (
    <section className="bg-background px-6 py-12 md:px-10 md:py-[72px] xl:px-20">
      <div className="mx-auto flex max-w-[1352px] flex-col items-start gap-10 lg:flex-row lg:gap-12">
        {/* LAB introduction */}
        <div className="flex w-full shrink-0 flex-col items-start gap-6 lg:w-[350px]">
          {/* Section number */}
          <div className="flex items-center gap-3">
            <span className="text-[16px] font-normal leading-none text-accent">
              05
            </span>

            <span
              aria-hidden="true"
              className="h-px w-10 bg-accent"
            />
          </div>

          {/* Icon and category */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/work/work-icons/work-icon-05.svg"
              alt=""
              width={20}
              height={20}
              aria-hidden="true"
              className="h-5 w-5 shrink-0 object-contain"
            />

            <p className="text-[14px] font-normal leading-normal text-[#7B828A]">
              Experiments &amp; Small Projects
            </p>
          </div>

          {/* Heading and copy */}
          <div className="flex flex-col gap-3">
            <h2 className="font-display text-[28px] font-semibold leading-[1.2] text-foreground">
              Exploration LAB
            </h2>

            <p className="text-[16px] font-semibold leading-[1.4] text-foreground">
              Ideas beyond the brief.
            </p>

            <p className="text-[14px] font-normal leading-[1.45] text-[#454C54]">
              A collection of smaller projects, visual explorations and
              experiments with AI, web design, interaction and code.
            </p>
          </div>

          {/* Exploration tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#F1E3E1] px-3 py-[7px] text-[12px] font-normal leading-none text-[#454C54]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* LAB button */}
          <Link
            href="/lab"
            className="inline-flex w-fit items-center gap-2 rounded-[4px] bg-[#121721] px-3 py-[10px] text-[14px] font-semibold leading-none text-[#FBFAF8] transition-opacity hover:opacity-80"
          >
            <span>View LAB</span>

            <span aria-hidden="true" className="text-[16px] leading-none">
              →
            </span>
          </Link>
        </div>

        {/* Exploration cards */}
        <div className="grid w-full min-w-0 flex-1 grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {explorations.map((exploration) => (
            <article
              key={exploration.title}
              className="flex min-w-0 flex-col"
            >
              <div className="relative h-[190px] w-full">
                <Image
                  src={exploration.image}
                  alt={exploration.title}
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 45vw, 300px"
                />
              </div>

              <div className="mt-5 flex flex-col gap-2">
                <h3 className="text-[16px] font-semibold leading-[1.3] text-[#FE1346]">
                  {exploration.title}
                </h3>

                <p className="text-[14px] font-normal leading-[1.45] text-[#454C54]">
                  {exploration.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
