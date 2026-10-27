
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-background">
      <div className="mx-auto flex min-h-[530px] max-w-[1512px] items-center gap-8 px-6 py-12 md:px-10 md:py-[72px] xl:px-20">
        {/* Hero content */}
        <div className="flex w-full shrink-0 flex-col gap-8 lg:w-[545px]">
          <p className="text-[18px] font-normal text-accent">
            PRODUCT DESIGNER · UX/UI · AI
          </p>

          <div className="flex flex-col gap-4">
            <h1 className="font-display text-[34px] font-semibold leading-[1.1] tracking-normal text-foreground">
              I design digital products that combine research, strategy, and
              interface design to solve real user and business problems.
            </h1>

            <p className="text-[18px] font-normal leading-normal text-[#454C54]">
              I work end-to-end from understanding needs and defining the
              problem to structuring the experience, designing the interface,
              and collaborating with product and development teams to bring
              solutions to production.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Image
              src="/images/home/home-icons/home-icon-01.svg"
              alt=""
              width={20}
              height={25}
              aria-hidden="true"
            />

            <p className="text-[18px] font-semibold text-[#7B828A]">
              Based in Barcelona · Available for new opportunities
            </p>
          </div>
        </div>

        {/* Hero image */}
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
