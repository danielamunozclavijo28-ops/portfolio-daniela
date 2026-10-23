
export default function AboutHero() {
  return (
    <section className="bg-background px-6 pt-12 pb-0 md:px-10 md:pt-[72px] xl:px-20">
      <div className="mx-auto flex max-w-[1352px] flex-col items-center gap-10 md:flex-row md:gap-12 xl:gap-16">
        <div className="flex w-full shrink-0 flex-col gap-8 md:w-[545px]">
          <p className="text-[18px] font-normal text-accent">
            ABOUT
          </p>

          <div className="flex flex-col gap-4">
            <h1 className="font-display text-[34px] font-normal leading-normal text-foreground">
              Designer by background.
              <br />
              Product thinker by practice.
            </h1>

            <p className="text-[18px] font-normal leading-normal text-[#454C54]">
              I&apos;m Daniela, a Product Designer with a background in
              Industrial Design and a passion for creating digital experiences
              that are useful, accessible and human-centered.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <img
              src="/images/about/about-icons/about-icon-01.svg"
              alt=""
              aria-hidden="true"
            />

            <p className="text-[16px] font-semibold text-[#7B828A]">
              Based in Barcelona · Available for new opportunities
            </p>
          </div>
        </div>

        <div className="flex min-w-0 w-full flex-1 items-center justify-center md:w-auto">
          <img
            src="/images/about/about-photo.png?v=2"
            alt="Daniela Muñoz"
            className="block h-auto w-full max-w-[520px]"
          />
        </div>
      </div>
    </section>
  );
}
