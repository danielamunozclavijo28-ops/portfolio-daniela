
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
      className="bg-background-secondary px-6 py-12 md:px-10 md:py-[72px] xl:px-20"
    >
      <div className="mx-auto max-w-[1352px]">
        {/* Section header */}
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="flex w-full flex-col gap-8 sm:max-w-[545px]">
            <p className="text-[18px] font-normal text-accent">
              SELECTED WORK
            </p>

            <h2 className="font-display text-[34px] font-semibold leading-normal text-foreground">
              A few things I’ve worked on.
            </h2>
          </div>

          <Link
            href="/work"
            className="flex shrink-0 items-center gap-[10px] rounded-[6px] bg-foreground px-3 py-3 text-[18px] font-medium text-white transition-opacity hover:opacity-90"
          >
            <span>View all projects</span>
            <span aria-hidden="true" className="text-[20px] leading-none">
              →
            </span>
          </Link>
        </div>

        {/* Projects */}
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group block min-w-0 rounded-[20px] transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              aria-label={`View ${project.title} case study`}
            >
              <article className="flex h-full w-full flex-col overflow-hidden rounded-[20px]">
                {/* Project image */}
                <div
                  className="relative w-full overflow-hidden rounded-[12px]"
                  style={{ aspectRatio: project.aspectRatio }}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 419px"
                  />
                </div>

                {/* Project information */}
                <div className="flex w-full flex-1 flex-col gap-6 p-4 md:p-6">
                  <div className="flex w-full flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-[22px] font-semibold leading-normal text-foreground">
                        {project.title}
                      </h3>

                      <span
                        aria-hidden="true"
                        className="text-[20px] leading-none text-foreground"
                      >
                        →
                      </span>
                    </div>

                    <p className="text-[18px] font-normal leading-normal text-[#454C54]">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap content-start gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-[20px] bg-[#F1E3E1] px-[10px] py-[6px] text-[14px] font-normal leading-normal text-[#2C323A]"
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
      </div>
    </section>
  );
}
