
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Acreditta",
    href: "/work/acreditta",
    description:
      "Designing and improving the experience for creating, managing and verifying digital credentials.",
    image: "/images/selected-work/selected-work-01.png",
    aspectRatio: "1782 / 1124",
    tags: ["Research", "UX", "UI", "SaaS", "Product Design"],
  },
  {
    title: "Tus Clases Particulares",
    href: "/work/tus-clases-particulares",
    description:
      "Designing and testing new features to make it easier for teachers to manage their experience on the platform.",
    image: "/images/selected-work/selected-work-02.png",
    aspectRatio: "1782 / 1124",
    tags: ["Research", "UX", "UI", "SaaS", "Product Design"],
  },
  {
    title: "Acreditta Wallet",
    href: "/work/wallet",
    description:
      "Exploring the experience of receiving, viewing and managing digital credentials from the user side.",
    image: "/images/selected-work/selected-work-03.png",
    aspectRatio: "1782 / 1048",
    tags: ["Research", "UX", "UI", "SaaS", "Product Design"],
  },
];

export default function SelectedWork() {
  return (
    <section
      id="work"
      className="bg-background-secondary px-8 py-10 md:px-10 md:py-[72px] xl:px-20"
    >
      <div className="mx-auto max-w-[1352px]">
        {/* Section header */}
        <div className="flex flex-col items-start gap-5 md:flex-row md:items-end md:justify-between md:gap-6">
          <div className="flex w-full flex-col gap-5 md:max-w-[545px] md:gap-8">
            <p className="text-[9px] font-normal text-accent md:text-[18px]">
              SELECTED WORK
            </p>

            <h2 className="font-display text-[22px] font-semibold leading-[1.2] text-foreground md:text-[34px] md:leading-normal">
              A few things I’ve worked on.
            </h2>
          </div>
        </div>

        {/* Projects */}
        <div className="mt-7 grid grid-cols-1 gap-6 md:mt-8 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-6">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group block min-w-0 rounded-[12px] transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              aria-label={`View ${project.title} case study`}
            >
              <article className="flex h-full w-full min-w-0 flex-col overflow-hidden">
                {/* Project image */}
                <div
                  className="relative w-full overflow-hidden rounded-[8px] md:rounded-[12px]"
                  style={{ aspectRatio: project.aspectRatio }}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 767px) calc(100vw - 64px), (max-width: 1023px) 50vw, 419px"
                  />
                </div>

                {/* Project information */}
                <div className="flex w-full flex-1 flex-col gap-4 px-0 py-4 md:gap-6 md:p-6">
                  <div className="flex w-full flex-col gap-2">
                    <div className="flex items-start gap-2">
                      <h3 className="min-w-0 font-display text-[16px] font-semibold leading-[1.3] text-foreground md:text-[22px] md:leading-normal">
                        {project.title}
                      </h3>

                      <span
                        aria-hidden="true"
                        className="shrink-0 text-[18px] leading-none text-foreground md:text-[20px]"
                      >
                        →
                      </span>
                    </div>

                    <p className="text-[12px] font-normal leading-[1.45] text-[#454C54] md:text-[18px] md:leading-normal">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap content-start gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-[20px] bg-[#F1E3E1] px-[9px] py-[5px] text-[10px] font-normal leading-normal text-[#2C323A] md:px-[10px] md:py-[6px] md:text-[14px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* View all projects — mobile and desktop */}
        <div className="mt-2 flex justify-start md:mt-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-[10px] rounded-[6px] bg-foreground px-3 py-3 text-[12px] font-medium text-white transition-opacity hover:opacity-90 md:text-[18px]"
          >
            <span>View all projects</span>
            <span aria-hidden="true" className="text-[18px] leading-none md:text-[20px]">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
