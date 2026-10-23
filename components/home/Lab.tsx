import Image from "next/image";
import Link from "next/link";

const explorations = [
  {
    title: "Academic Projects",
    description: "Research, layouts and visual explorations.",
    image: "/images/lab/academic-projects.png",
  },
  {
    title: "Web Experiments",
    description: "Interactions, layouts and visual explorations.",
    image: "/images/lab/web-experiments.png",
  },
  {
    title: "AI Experiments",
    description: "Testing new tools, prompts and workflows.",
    image: "/images/lab/ai-experiments.png",
  },
];

export default function Lab() {
  return (
    <section id="lab" className="bg-background px-20 py-[72px]">
      <div className="mx-auto flex max-w-[1352px] items-center gap-16">
        {/* Intro */}
        <div className="flex w-[321px] shrink-0 flex-col gap-8">
          <div className="flex flex-col gap-8">
            <p className="text-[18px] font-normal text-accent">
              EXPLORATION LAB
            </p>

            <div className="flex flex-col gap-4">
              <h2 className="font-display text-[34px] font-normal leading-normal text-foreground">
                Things I&apos;m trying out.
              </h2>

              <p className="text-[18px] font-normal leading-normal text-[#454C54]">
                Small experiments, visual explorations and side projects that
                let me try something new without having to turn everything
                into a full case study.
              </p>
            </div>
          </div>

          <Link
            href="#lab"
            className="flex w-fit items-center gap-[10px] rounded-[6px] bg-foreground px-3 py-3 text-[18px] font-medium text-white transition-opacity hover:opacity-90"
          >
            <span>See what I&apos;m exploring</span>
            <span aria-hidden="true" className="text-[20px] leading-none">
              →
            </span>
          </Link>
        </div>

        {/* Explorations */}
        <div className="flex min-w-0 flex-1 items-start gap-6">
          {explorations.map((exploration) => (
            <article
              key={exploration.title}
              className="flex min-w-0 flex-1 flex-col"
            >
              <div className="relative h-[210px] w-full">
                <Image
                  src={exploration.image}
                  alt=""
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 1024px) 30vw, 320px"
                />
              </div>

              <div className="mt-6 flex flex-col gap-2">
                <h3 className="font-body text-[22px] font-semibold leading-normal text-[#FF1744]">
                  {exploration.title}
                </h3>

                <p className="font-body text-[18px] font-normal leading-normal text-[#454C54]">
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