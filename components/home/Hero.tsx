
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-background">
      <div className="mx-auto flex min-h-0 max-w-[1512px] items-center gap-8 px-8 py-8 md:min-h-[530px] md:px-10 md:py-[72px] xl:px-20">
        {/* Hero content */}
        <div className="flex w-full shrink-0 flex-col gap-5 md:gap-8 lg:w-[545px]">
          <p className="text-[9px] font-normal text-accent md:text-[18px]">
            PRODUCT DESIGNER · UX/UI · AI
          </p>

          <div className="flex flex-col gap-3 md:gap-4">
            <h1 className="font-display text-[20px] font-semibold leading-[1.15] tracking-normal text-foreground md:text-[34px] md:leading-[1.1]">
              I design digital products that combine research, strategy, and
              interface design to solve real user and business problems.
            </h1>

            <p className="text-[11px] font-normal leading-[1.4] text-[#454C54] md:text-[18px] md:leading-normal">
              I work end-to-end from understanding needs and defining the
              problem to structuring the experience, designing the interface,
              and collaborating with product and development teams to bring
              solutions to production.
            </p>
          </div>

          {/* Location and availability */}
          <div className="flex items-start gap-2">
            <Image
              src="/images/home/home-icons/home-icon-01.svg"
              alt=""
              width={20}
              height={25}
              aria-hidden="true"
              className="mt-0.5 h-[13px] w-[11px] shrink-0 object-contain md:mt-0 md:h-[25px] md:w-[20px]"
            />

            <p className="max-w-[260px] text-[10px] font-semibold leading-[1.4] text-[#7B828A] md:max-w-none md:text-[18px] md:leading-normal">
              Based in Barcelona · Available for new opportunities
            </p>
          </div>
        </div>

        {/* Hero image — desktop only */}
        <div className="relative hidden min-h-[386px] flex-1 self-stretch overflow-hidden lg:block">
          <Image
            src="/images/home/home-image-01.png"
            alt="Selected visual for Daniela's design portfolio"
            fill
            priority
            sizes="(max-width: 1512px) 50vw, 727px"
            className="object-contain object-center"
          />
        </div>
      </div>
    </section>
  );
}
