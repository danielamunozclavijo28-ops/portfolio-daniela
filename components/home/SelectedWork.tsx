
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Acreditta",
    href: "/work/acreditta",
    description:
      "Designing and improving the experience for creating, managing and verifying digital credentials.",
    image: "/images/work/acredita.png",
    aspectRatio: "1782 / 1124",
    tags: ["Research", "UX", "UI", "Saas", "Product Design"],
  },
  {
    title: "Acreditta Wallet",
    href: "/work/acreditta-wallet",
    description:
      "Exploring the experience of receiving, viewing and managing digital credentials from the user side.",
    image: "/images/work/acredita-wallet.png",
    aspectRatio: "1782 / 1048",
    tags: ["Research", "UX", "UI", "Saas", "Product Design"],
  },
  {
    title: "Tusclasesparticulares",
    href: "/work/tus-clases-particulares",
    description:
      "Designing and testing new features to make it easier for teachers to manage their experience on the platform.",
    image: "/images/work/tus-clases-particulares.png",
    aspectRatio: "1782 / 1124",
    tags: ["Research", "UX", "UI", "Saas", "Product Design"],
  },
];

export default function SelectedWork() {
  return (
    <section
      id="work"
      className="bg-background-secondary px-20 py-[72px]"
    >
      <div className="mx-auto max-w-[1352px]">
        {/* Section header */}
        <div className="flex items-end justify-between">
          <div className="flex w-[545px] flex-col gap-8">
            <p className="text-[18px] font-normal text-accent">
              SELECTED WORK
            </p>

            <h2 className="font-display text-[34px] font-semibold leading-normal text-foreground">
              A few things I’ve worked on.
            </h2>
          </div>

          <Link
            href="/work"
            className="flex items-center gap-[10px] rounded-[6px] bg-foreground px-3 py-3 text-[18px] font-medium text-white transition-opacity hover:opacity-90"
          >
            <span>View all projects</span>
            <span aria-hidden="true" className="text-[20px] leading-none">
              →
            </span>
          </Link>
        </div>

        {/* Projects */}
        <div className="mt-[32px] flex items-center gap-6">
          {projects.map((project, index) => (
            <div key={project.title} className="flex flex-1 items-center">
              <Link
                href={project.href}
                className="block min-w-0 flex-1 rounded-[20px] transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                aria-label={`View ${project.title} case study`}
              >
                <article className="flex w-full flex-col overflow-hidden rounded-[20px]">
                  {/* Project image */}
                  <div
                    className="relative w-full"
                    style={{ aspectRatio: project.aspectRatio }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 33vw, 419px"
                    />
                  </div>

                  {/* Project information */}
                  <div className="flex w-full flex-col gap-6 p-6">
                    <div className="flex w-full flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <h3 className="font-display text-[22px] font-normal leading-normal text-foreground">
                          {project.title}
                        </h3>

                        <span
                          aria-hidden="true"
                          className="text-[20px] leading-none text-foreground"
                        >
                          ↗
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

              {/* Divider */}
              {index < projects.length - 1 && (
                <div className="ml-6 h-[464px] w-px shrink-0 bg-[#D9D8D5]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
