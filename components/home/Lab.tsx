
import Image from "next/image";
import Link from "next/link";

const explorations = [
  {
    title: "Academic Projects",
    description:
      "Projects developed during my studies, from initial ideas to finished concepts.",
    image: "/images/lab/a-casa-portuguesa.png",
  },
  {
    title: "Design Experiments",
    description:
      "Ideas, interfaces and visual directions I wanted to try out.",
    image: "/images/lab/amigou.png",
  },
  {
    title: "AI Explorations",
    description:
      "Trying AI tools to explore images, concepts and different creative approaches.",
    image: "/images/lab/frizz.png",
  },
];

export default function Lab() {
  return (
    <section
      id="lab"
      className="bg-background px-8 py-10 md:px-10 md:py-[72px] xl:px-20"
    >
      <div className="mx-auto flex max-w-[1352px] flex-col items-start gap-8 lg:flex-row lg:items-center lg:gap-16">
        {/* Intro */}
        <div className="flex w-full shrink-0 flex-col gap-5 lg:w-[321px] lg:gap-8">
          <div className="flex flex-col gap-5 lg:gap-8">
            <p className="text-[16px] font-normal text-accent md:text-[18px]">
              EXPLORATION LAB
            </p>

            <div className="flex flex-col gap-3 md:gap-4">
              <h2 className="font-display text-[24px] font-normal leading-[1.2] text-foreground md:text-[34px] md:leading-normal">
                Things I&apos;m trying out.
              </h2>

              <p className="text-[16px] font-normal leading-[1.5] text-[#454C54] md:text-[18px] md:leading-normal">
                A mix of academic projects, visual experiments and ideas
                I&apos;ve explored along the way. Some started with a brief,
                others simply with curiosity.
              </p>
            </div>
          </div>

          <Link
            href="/lab"
            className="flex w-fit items-center gap-2 rounded-[6px] bg-foreground px-3 py-3 text-[16px] font-medium text-white transition-opacity hover:opacity-90 md:gap-[10px] md:text-[18px]"
          >
            <span>See what I&apos;m exploring</span>
            <span
              aria-hidden="true"
              className="text-[20px] leading-none"
            >
              →
            </span>
          </Link>
        </div>

        {/* Explorations */}
        <div className="grid w-full min-w-0 flex-1 grid-cols-1 gap-7 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-6">
          {explorations.map((exploration) => (
            <article
              key={exploration.title}
              className="flex min-w-0 flex-col"
            >
              <div className="relative h-[170px] w-full md:h-[210px]">
                <Image
                  src={exploration.image}
                  alt={exploration.title}
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 767px) calc(100vw - 64px), (max-width: 1023px) 45vw, 320px"
                />
              </div>

              <div className="mt-3 flex flex-col gap-1 md:mt-6 md:gap-2">
                <h3 className="font-body text-[16px] font-semibold leading-[1.3] text-foreground md:text-[22px] md:leading-normal">
                  {exploration.title}
                </h3>

                <p className="font-body text-[16px] font-normal leading-[1.5] text-[#454C54] md:text-[18px] md:leading-normal">
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
