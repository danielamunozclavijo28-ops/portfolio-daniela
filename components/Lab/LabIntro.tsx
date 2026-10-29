
export default function LabIntro() {
  return (
    <section className="min-h-0 bg-background px-8 py-10 md:h-[385px] md:px-20 md:py-0">
      <div className="mx-auto flex h-full max-w-[1352px] flex-col gap-8 md:flex-row md:items-center">
        {/* Intro */}
        <div className="flex w-full shrink-0 flex-col gap-6 md:w-[545px] md:gap-8">
          <p className="text-[16px] font-normal text-accent md:text-[18px]">
            EXPLORATION LAB
          </p>

          <div className="flex flex-col gap-4">
            <h1 className="font-display text-[24px] font-normal leading-[1.15] text-foreground md:text-[34px]">
              Projects, ideas and things I wanted to explore.
            </h1>

            <p className="text-[16px] font-normal leading-[1.25] text-[#454C54]">
              A collection of academic projects, concepts and design
              explorations from different moments of my journey. Some started
              with a specific problem, others with just an idea I wanted to
              develop.
            </p>
          </div>
        </div>

        {/* Handwritten statement — desktop only */}
        <div className="hidden h-[218px] min-w-0 flex-1 items-center justify-end bg-background-secondary px-[34px] md:flex">
          <p className="w-[170px] rotate-[-8deg] font-serif text-[30px] font-normal italic leading-[1.15] text-[#A97979]">
            explore
            <br />
            create
            <br />
            iterate
          </p>
        </div>
      </div>
    </section>
  );
}
