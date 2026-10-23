
import Image from "next/image";

const categories = [
  {
    label: "SaaS & Digital Products",
    icon: "/images/work/work-icons/work-icon-01.svg",
  },
  {
    label: "Marketplace & Product",
    icon: "/images/work/work-icons/work-icon-02.svg",
  },
  {
    label: "UX/UI",
    icon: "/images/work/work-icons/work-icon-03.svg",
  },
  {
    label: "Web & Visual Design",
    icon: "/images/work/work-icons/work-icon-04.svg",
  },
  {
    label: "Experiments & Small Projects",
    icon: "/images/work/work-icons/work-icon-05.svg",
  },
];

export default function WorkIntro() {
  return (
    <section className="bg-background px-6 py-12 md:px-10 md:py-[72px] xl:px-20">
      <div className="mx-auto flex max-w-[1352px] flex-col justify-between gap-10 md:flex-row md:items-center md:gap-12">
        {/* Intro */}
        <div className="flex w-full flex-col gap-8 md:max-w-[545px]">
          <p className="text-[14px] font-normal text-accent">
            SELECTED WORK
          </p>

          <div className="flex flex-col gap-4">
            <h1 className="font-display text-[34px] font-normal leading-[1.2] text-foreground">
              A selection of projects I&apos;ve worked on.
            </h1>

            <p className="text-[16px] font-normal leading-[1.5] text-[#454C54]">
              My work has taken me from SaaS products and marketplaces to
              websites and digital experiences. Depending on the project,
              I&apos;ve worked across research, UX, UI, testing and visual
              design.
            </p>
          </div>
        </div>

        {/* Categories */}
        <div className="flex items-stretch gap-8 md:shrink-0">
          <div
            aria-hidden="true"
            className="w-px shrink-0 bg-[#D9D8D5]"
          />

          <div className="flex flex-col justify-center gap-5 py-1">
            {categories.map((category) => (
              <div
                key={category.label}
                className="flex items-center gap-4"
              >
                <Image
                  src={category.icon}
                  alt=""
                  width={20}
                  height={20}
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 object-contain"
                />

                <span className="text-[14px] font-normal leading-normal text-[#454C54] md:text-[16px]">
                  {category.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
