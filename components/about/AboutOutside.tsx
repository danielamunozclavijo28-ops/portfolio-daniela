
import Image from "next/image";

const interests = [
  {
    title: "Running",
    icon: "/images/about/about-icons/about-icon-17.svg",
  },
  {
    title: "Travel",
    icon: "/images/about/about-icons/about-icon-18.svg",
  },
  {
    title: "Nature",
    icon: "/images/about/about-icons/about-icon-19.svg",
  },
  {
    title: "Learning",
    icon: "/images/about/about-icons/about-icon-20.svg",
  },
];

export default function AboutOutside() {
  return (
    <section className="bg-background-secondary px-6 py-12 md:px-10 md:py-[82px] xl:px-20">
      <div className="mx-auto flex max-w-[1352px] flex-col items-start gap-10 md:flex-row md:items-center md:gap-12 xl:gap-16">
        {/* SVG statement */}
        <div className="flex w-full shrink-0 items-center justify-center md:w-[46%]">
          <Image
            src="/images/about/Image-text-about.svg"
            alt="Better experience, real impact"
            width={620}
            height={160}
            className="h-auto w-full max-w-[500px] object-contain"
          />
        </div>

        {/* Outside of work */}
        <div className="flex min-w-0 w-full flex-1 flex-col">
          <p className="text-[18px] font-normal text-accent">
            OUTSIDE OF WORK
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <h2 className="font-display text-[34px] font-normal leading-normal text-foreground">
              When I&apos;m not designing...
            </h2>

            <p className="max-w-[650px] text-[16px] font-normal leading-normal text-[#454C54]">
              I&apos;m usually running, planning a trip, looking for a new
              place to eat or just getting outside. I also like learning new
              things, especially when they have nothing to do with design.
            </p>
          </div>

          {/* Interests */}
          <div className="mt-8 flex flex-wrap items-start gap-x-8 gap-y-5">
            {interests.map((interest) => (
              <div
                key={interest.title}
                className="flex min-w-[64px] flex-col items-center gap-3"
              >
                <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-accent">
                  <img
                    src={interest.icon}
                    alt=""
                    aria-hidden="true"
                  />
                </div>

                <p className="text-[14px] font-semibold leading-normal text-foreground">
                  {interest.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
