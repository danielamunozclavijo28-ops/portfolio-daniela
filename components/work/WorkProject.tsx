
import Image from "next/image";
import Link from "next/link";

type WorkProjectProps = {
  number: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  secondaryDescription?: string;
  role?: string;
  tags: string[];
  image: string;
  cta: string;
  icon?: string;
  href?: string;
};

export default function WorkProject({
  number,
  category,
  title,
  subtitle,
  description,
  secondaryDescription,
  role,
  tags,
  image,
  cta,
  icon,
  href = "#",
}: WorkProjectProps) {
  return (
    <section className="bg-background-secondary px-6 py-12 md:px-10 md:py-[72px] xl:px-20">
      <div className="mx-auto flex max-w-[1352px] flex-col items-start gap-10 lg:flex-row lg:gap-16">
        {/* Project content */}
        <div className="flex w-full shrink-0 flex-col items-start gap-8 lg:w-[420px]">
          {/* Project number and divider */}
          <div className="flex items-center gap-3">
            <span className="text-[16px] font-normal leading-none text-accent">
              {number}
            </span>

            <span
              aria-hidden="true"
              className="h-px w-10 bg-accent"
            />
          </div>

          {/* Icon and category */}
          <div className="flex items-center gap-3">
            {icon && (
              <Image
                src={icon}
                alt=""
                width={20}
                height={20}
                aria-hidden="true"
                className="h-5 w-5 shrink-0 object-contain"
              />
            )}

            <p className="text-[14px] font-normal leading-normal text-[#7B828A]">
              {category}
            </p>
          </div>

          {/* Title and descriptions */}
          <div className="flex w-full flex-col items-start gap-3">
            <h2 className="font-display text-[28px] font-semibold leading-[1.2] text-foreground md:text-[30px]">
              {title}
            </h2>

            {role && (
              <p className="text-[14px] font-semibold leading-normal text-accent">
                {role}
              </p>
            )}

            <p className="text-[16px] font-semibold leading-[1.4] text-foreground">
              {subtitle}
            </p>

            <p className="text-[14px] font-normal leading-[1.45] text-[#454C54]">
              {description}
            </p>

            {secondaryDescription && (
              <p className="text-[14px] font-normal leading-[1.45] text-[#454C54]">
                {secondaryDescription}
              </p>
            )}
          </div>

          {/* Tags */}
          <div className="flex w-full flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#F1E3E1] px-3 py-[7px] text-[12px] font-normal leading-none text-[#454C54]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Case study button */}
          <Link
            href={href}
            className="inline-flex w-fit items-center gap-2 rounded-[4px] bg-[#121721] px-3 py-[10px] text-[14px] font-semibold leading-none text-[#FBFAF8] transition-opacity hover:opacity-80"
          >
            <span>{cta}</span>

            <span aria-hidden="true" className="text-[16px] leading-none">
              →
            </span>
          </Link>
        </div>

        {/* Project visual */}
        <div className="relative h-[320px] w-full min-w-0 lg:h-[500px] lg:flex-1">
          <Image
            src={image}
            alt={`${title} project preview`}
            fill
            className="object-contain object-center"
            sizes="(max-width: 1023px) 100vw, (max-width: 1352px) 55vw, 727px"
          />
        </div>
      </div>
    </section>
  );
}
