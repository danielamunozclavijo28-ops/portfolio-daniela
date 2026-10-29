
const timeline = [
  {
    title: "Industrial Design",
    subtitle: "Bachelor’s Degree · Colombia",
    date: "2014–2019",
    icon: "/images/about/about-icons/about-icon-02.svg",
  },
  {
    title: "Graphic & Digital Design",
    subtitle: "Freelance · Colombia",
    date: "2020–2024",
    icon: "/images/about/about-icons/about-icon-03.svg",
  },
  {
    title: "UX/UI",
    subtitle: "Certification · Colombia",
    date: "2021",
    icon: "/images/about/about-icons/about-icon-04.svg",
  },
  {
    title: "UX/UI & Service Design",
    subtitle: "Master’s Degree · Barcelona",
    date: "2024–2025",
    icon: "/images/about/about-icons/about-icon-05.svg",
  },
  {
    title: "Product Design",
    subtitle: "Freelance · Barcelona",
    date: "Present",
    icon: "/images/about/about-icons/about-icon-06.svg",
  },
];

const focusAreas = [
  {
    label: "SaaS",
    icon: "/images/about/about-icons/about-icon-07.svg",
  },
  {
    label: "Digital Products",
    icon: "/images/about/about-icons/about-icon-08.svg",
  },
  {
    label: "UX/UI",
    icon: "/images/about/about-icons/about-icon-09.svg",
  },
  {
    label: "AI",
    icon: "/images/about/about-icons/about-icon-10.svg",
  },
];

export default function AboutBackground() {
  return (
    <section className="bg-background-secondary px-6 py-12 md:px-10 md:py-[72px] xl:px-20">
      <div className="mx-auto grid max-w-[1352px] grid-cols-1 items-start gap-10 lg:grid-cols-[380px_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[380px_minmax(0,1fr)_360px] xl:gap-10">
        {/* My background */}
        <div className="flex flex-col gap-8">
          <p className="text-[18px] font-normal text-accent">
            MY BACKGROUND
          </p>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-[34px] font-normal leading-normal text-foreground">
              From industrial design to product design.
            </h2>

            <div className="flex flex-col gap-4 text-[16px] leading-normal text-[#454C54]">
              <p>
                My journey started in Industrial Design, where I learned to
                understand people, materials, systems and how things are made.
              </p>

              <p>
                Over time, I found my place in the digital world, combining
                creativity, strategy and technology to design meaningful
                products and experiences.
              </p>

              <p>
                Today, I work across UX/UI and Product Design, bringing
                together research, product thinking, visual design and a
                growing interest in AI-assisted workflows.
              </p>
            </div>
          </div>

          {/* CV button */}
          <a
            href="/documents/daniela-munoz-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-center gap-[10px] rounded-[4px] bg-foreground px-3 py-3 text-[16px] font-medium text-white transition-opacity hover:opacity-90"
          >
            <span>More about my experience</span>
            <span aria-hidden="true" className="text-[20px] leading-none">
              →
            </span>
          </a>
        </div>

        {/* Timeline */}
        <div
          id="experience"
          className="flex min-w-0 flex-col justify-self-center"
        >
          {timeline.map((item, index) => (
            <div
              key={item.title}
              className="relative flex min-h-[88px] items-start gap-4 pb-4 last:pb-0"
            >
              {index < timeline.length - 1 && (
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-[25px] top-[50px] w-px bg-[#D9D8D5]"
                />
              )}

              <div className="relative z-10 flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-accent">
                <img src={item.icon} alt="" aria-hidden="true" />
              </div>

              <div className="flex min-w-0 flex-col gap-1 pt-1">
                <h3 className="text-[16px] font-semibold leading-normal text-foreground">
                  {item.title}
                </h3>

                <p className="text-[14px] leading-normal text-[#454C54]">
                  {item.subtitle}
                </p>

                <p className="text-[14px] leading-normal text-[#7B828A]">
                  {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Currently */}
        <aside className="flex w-full flex-col bg-background p-6">
          <p className="text-[18px] font-normal text-accent">
            CURRENTLY
          </p>

          <h3 className="mt-8 font-display text-[28px] font-normal leading-normal text-foreground">
            Product Designer in Barcelona.
          </h3>

          <p className="mt-4 text-[16px] leading-normal text-[#454C54]">
            Focused on SaaS, digital products, UX/UI and AI-assisted design.
          </p>

          <div className="my-6 h-px w-full bg-[#D9D8D5]" />

          <div className="flex flex-col gap-4">
            {focusAreas.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <img src={item.icon} alt="" aria-hidden="true" />

                <span className="text-[16px] font-semibold text-foreground">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
