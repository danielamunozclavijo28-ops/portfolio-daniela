
import Image from "next/image";

const projects = [
  {
    title: "A Casa Portuguesa",
    description:
      "An academic project exploring a digital experience inspired by Portuguese culture and products.",
    image: "/images/lab/a-casa-portuguesa.png",
    tags: ["UX/UI", "Branding", "E-commerce"],
  },
  {
    title: "Opto",
    description:
      "A digital product concept exploring how technology can support healthier drinking habits.",
    image: "/images/lab/opto.png",
    tags: ["UX Research", "UX/UI", "Mobile"],
  },
  {
    title: "Frizz",
    description:
      "A digital experience exploring branding, product discovery and e-commerce for a beverage brand.",
    image: "/images/lab/frizz.png",
    tags: ["Branding", "UI", "E-commerce"],
  },
  {
    title: "Diego Pomareda",
    description:
      "A political communication platform focused on making information and proposals easier to explore.",
    image: "/images/lab/diego-pomareda.png",
    tags: ["UX/UI", "Web Design", "Information Architecture"],
  },
  {
    title: "NBA App",
    description:
      "A mobile experience concept for exploring games, teams, players and basketball content.",
    image: "/images/lab/nba.png",
    tags: ["UX/UI", "Mobile", "Product Design"],
  },
  {
    title: "Amigou",
    description:
      "A mobile concept focused on discovering places and connecting people through shared interests.",
    image: "/images/lab/amigou.png",
    tags: ["Research", "UX/UI", "Mobile"],
  },
];

export default function LabProjects() {
  return (
    <section className="bg-[#F6F2EE] px-20 py-[72px]">
      <div className="mx-auto max-w-[1352px]">
        <div className="grid grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={[
                "flex flex-col px-6 py-8",
                index % 3 !== 0 ? "border-l border-[#D9D8D5]" : "",
              ].join(" ")}
            >
              <div className="mb-8 flex h-[220px] items-center justify-center">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={500}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="font-display text-[22px] font-normal text-foreground">
                  {project.title}
                </h2>

                <p className="text-[18px] font-normal leading-normal text-[#454C54]">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-[20px] bg-[#F1E3E1] px-[10px] py-[6px] text-[14px] text-[#454C54]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#"
                  className="flex w-fit items-center gap-2 text-[18px] font-semibold text-foreground"
                >
                  <span>Explore project</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
