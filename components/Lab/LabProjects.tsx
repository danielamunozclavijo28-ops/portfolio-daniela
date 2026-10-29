
import Image from "next/image";

const projects = [
  {
    title: "A Casa Portuguesa",
    description:
      "An e-commerce concept inspired by Portuguese culture and traditions. I worked on the brand and digital experience, from discovering products to exploring the stories behind them.",
    image: "/images/lab/a-casa-portuguesa.png",
    tags: ["Branding", "UX/UI", "E-commerce"],
  },
  {
    title: "Opto",
    description:
      "A mobile app concept exploring how technology could help people become more aware of their drinking habits through information, tracking and social features.",
    image: "/images/lab/opto.png",
    tags: ["UX Research", "Mobile Product", "UI", "App"],
  },
  {
    title: "Frizz",
    description:
      "An e-commerce concept for vitamin drinks that combines product discovery, a fresh visual identity and a simple digital shopping experience.",
    image: "/images/lab/frizz.png",
    tags: ["Web Design", "E-commerce", "AI", "UI"],
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
    <section className="bg-[#F6F2EE] px-8 py-10 md:px-20 md:py-[72px]">
      <div className="mx-auto max-w-[1352px]">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={[
                "flex min-w-0 flex-col px-0 py-8",
                "md:px-6 md:py-8",
                index % 3 !== 0
                  ? "md:border-l md:border-[#D9D8D5]"
                  : "",
                index > 0 ? "border-t border-[#D9D8D5] md:border-t-0" : "",
              ].join(" ")}
            >
              {/* Project image */}
              <div className="mb-6 flex h-[190px] w-full items-center justify-center md:mb-8 md:h-[220px]">
                <Image
                  src={project.image}
                  alt={`${project.title} project mockups`}
                  width={800}
                  height={500}
                  sizes="(max-width: 767px) 326px, (max-width: 1352px) 30vw, 400px"
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Project information */}
              <div className="flex flex-col gap-3 md:gap-4">
                <h2 className="font-display text-[16px] font-semibold leading-[1.25] text-foreground md:text-[22px] md:font-normal">
                  {project.title}
                </h2>

                <p className="text-[16px] font-normal leading-[1.25] text-[#454C54] md:text-[18px] md:leading-normal">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-[20px] bg-[#F1E3E1] px-[9px] py-[5px] text-[12px] leading-none text-[#454C54] md:px-[10px] md:py-[6px] md:text-[14px] md:leading-normal"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#"
                  className="mt-2 flex w-fit items-center gap-2 text-[16px] font-semibold text-foreground transition-opacity hover:opacity-60 md:mt-0 md:text-[18px]"
                >
                  <span>Explore more</span>
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
