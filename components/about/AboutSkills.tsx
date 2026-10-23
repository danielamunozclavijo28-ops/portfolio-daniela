
import Link from "next/link";

const skills = [
  {
    title: "Product Thinking",
    description: "From user needs to sustainable solutions.",
    icon: "/images/about/about-icons/about-icon-11.svg",
  },
  {
    title: "UX Research",
    description: "Listen, learn and find what matters.",
    icon: "/images/about/about-icons/about-icon-12.svg",
  },
  {
    title: "UI Design",
    description: "Clear, consistent and accessible interfaces.",
    icon: "/images/about/about-icons/about-icon-13.svg",
  },
  {
    title: "Strategy",
    description: "Turn insights into actionable decisions.",
    icon: "/images/about/about-icons/about-icon-14.svg",
  },
  {
    title: "Collaboration",
    description: "Working closely with product, engineering and business.",
    icon: "/images/about/about-icons/about-icon-15.svg",
  },
  {
    title: "AI in Design",
    description: "Using new tools to explore, iterate and create better.",
    icon: "/images/about/about-icons/about-icon-16.svg",
  },
];

export default function AboutSkills() {
  return (
    <section className="bg-background px-6 py-12 md:px-10 md:py-[72px] xl:px-20">
      <div className="mx-auto flex max-w-[1352px] flex-col items-start gap-10 lg:flex-row lg:gap-12 xl:gap-16">
        {/* Introduction */}
        <div className="flex w-full shrink-0 flex-col items-start gap-8 lg:w-[260px] xl:w-[321px]">
          <p className="text-[18px] font-normal text-accent">
            SKILLS &amp; FOCUS
          </p>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-[34px] font-normal leading-normal text-foreground">
              The tools and mindset behind the work.
            </h2>

            <p className="text-[18px] font-normal leading-normal text-[#454C54]">
              I combine design thinking, user research, visual design and
              product strategy with a strong focus on usability, accessibility
              and real business needs.
            </p>
          </div>

          <Link
            href="/work"
            className="flex w-fit items-center gap-[10px] rounded-[6px] bg-foreground px-3 py-3 text-[18px] font-medium text-white transition-opacity hover:opacity-90"
          >
            <span>View all projects</span>
            <span aria-hidden="true" className="text-[20px] leading-none">
              →
            </span>
          </Link>
        </div>

        {/* Skills grid */}
        <div className="grid min-w-0 flex-1 grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <article
              key={skill.title}
              className="flex min-w-0 flex-col gap-6"
            >
              <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-accent">
                <img
                  src={skill.icon}
                  alt=""
                  aria-hidden="true"
                />
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-[18px] font-semibold leading-normal text-foreground">
                  {skill.title}
                </h3>

                <p className="text-[16px] font-normal leading-normal text-[#454C54]">
                  {skill.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
