export default function LabIntro() {
  return (
    <section className="h-[385px] bg-background px-20">
      <div className="mx-auto flex h-full max-w-[1352px] items-center gap-8">
        {/* Intro */}
        <div className="flex w-[545px] shrink-0 flex-col gap-8">
          <p className="text-[18px] font-normal text-accent">
            EXPLORATION LAB
          </p>

          <div className="flex flex-col gap-4">
            <h1 className="font-display text-[34px] font-normal leading-[1.15] text-foreground">
              Projects, ideas and things I wanted
              <br />
              to explore.
            </h1>

            <p className="text-[16px] font-normal leading-[1.25] text-[#454C54]">
              A collection of academic projects, concepts and design
              explorations from different moments of my journey. Some started
              with a specific problem, others with just an idea I wanted to
              develop.
            </p>
          </div>
        </div>

        {/* Handwritten statement */}
        <div className="flex h-[218px] min-w-0 flex-1 items-center justify-end bg-background-secondary px-[34px]">
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