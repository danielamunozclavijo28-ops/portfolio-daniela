
import Link from "next/link";

const contactDetails = [
  {
    icon: "/images/contact/contact-icons/contact-icon-01.svg",
    title: "Barcelona, Spain",
    description: "Available for new opportunities",
    href: null,
  },
  {
    icon: "/images/contact/contact-icons/contact-icon-02.svg",
    title: "LinkedIn",
    description: "danielamunoz28",
    href: "https://www.linkedin.com/in/daniela-munoz28",
  },
  {
    icon: "/images/contact/contact-icons/contact-icon-03.svg",
    title: "Email",
    description: "danielamunoz5428@gmail.com",
    href: "mailto:danielamunoz5428@gmail.com",
  },
];

export default function ContactPage() {
  return (
    <main className="flex min-h-[calc(100svh-77px)] flex-col bg-[#FBFAF8]">
      <section className="flex flex-1 items-center px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto grid w-full max-w-7xl gap-12 md:grid-cols-2 md:items-center md:gap-16">
          {/* Intro */}
          <div>
            <div className="mb-4">
              <img
                src="/images/contact/image-text-contact.svg"
                alt="Let's talk"
                className="block h-auto w-[400px]"
              />
            </div>

            <h1 className="font-display text-3xl font-semibold tracking-tight text-[#121721] md:text-4xl">
              Want to work together?
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-[#454C54]">
              I’m always interested in thoughtful products, ambitious ideas
              and opportunities to make digital experiences better.
            </p>
          </div>

          {/* Contact details */}
          <div className="space-y-7 border-t border-[#E5E0DC] pt-8 md:border-l md:border-t-0 md:py-2 md:pl-16">
            {contactDetails.map((item) => {
              const content = (
                <>
                  <span className="flex size-[50px] shrink-0 items-center justify-center rounded-full bg-[#C99C9C]">
                    <img
                      src={item.icon}
                      alt=""
                      aria-hidden="true"
                    />
                  </span>

                  <span className="min-w-0">
                    <span className="block text-base font-semibold text-[#121721]">
                      {item.title}
                    </span>

                    <span
                      className={`mt-1 block break-words text-base text-[#454C54] ${
                        item.href?.startsWith("mailto:")
                          ? "underline underline-offset-4"
                          : ""
                      }`}
                    >
                      {item.description}
                    </span>
                  </span>
                </>
              );

              return (
                <div key={item.title} className="flex items-center gap-4">
                  {item.href ? (
                    <Link
                      href={item.href}
                      target={
                        item.href.startsWith("https://")
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        item.href.startsWith("https://")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex min-w-0 items-center gap-4 transition-opacity hover:opacity-70"
                    >
                      {content}
                    </Link>
                  ) : (
                    <div className="flex min-w-0 items-center gap-4">
                      {content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

