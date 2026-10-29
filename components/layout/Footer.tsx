
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact">
      {/* Mobile footer */}
      <div className="flex h-[77px] items-center justify-between bg-[#F6F2EE] px-8 md:hidden">
        <Link
          href="/"
          className="font-display text-[20px] font-semibold leading-none text-accent"
          aria-label="Back to home"
        >
          Daniela Muñoz
        </Link>

        <Link
          href="/contact"
          className="flex h-[45px] items-center justify-center gap-3 rounded-[6px] bg-[#121721] px-4 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
        >
          <span>Let’s talk</span>
          <span aria-hidden="true" className="text-xl leading-none">
            →
          </span>
        </Link>
      </div>

      {/* Desktop footer */}
      <div className="hidden bg-background-secondary px-6 pt-[72px] md:block md:px-20">
        <div className="mx-auto flex min-h-[406px] max-w-[1352px] flex-col">
          {/* Main content */}
          <div className="flex flex-1 flex-col justify-between gap-12 md:flex-row">
            <div className="flex w-full max-w-[545px] flex-col gap-8">
              <p className="text-[18px] font-normal text-accent">
                GET IN TOUCH
              </p>

              <div className="flex flex-col gap-4">
                <h2 className="font-display text-[34px] font-normal leading-normal text-foreground">
                  Want to work together?
                </h2>

                <p className="text-[18px] font-normal leading-normal text-[#454C54]">
                  I&apos;m always interested in thoughtful products, ambitious
                  ideas and opportunities to make digital experiences better.
                </p>
              </div>

              <Link
                href="/contact"
                className="flex w-fit items-center gap-[10px] rounded-[6px] bg-foreground px-3 py-3 text-[18px] font-medium text-white transition-opacity hover:opacity-90"
              >
                <span>Let&apos;s talk</span>
                <span aria-hidden="true" className="text-[20px] leading-none">
                  →
                </span>
              </Link>
            </div>

            {/* Contact links */}
            <div className="flex items-start gap-12 pt-[68px]">
              {/* Email */}
              <a
                href="mailto:danielamunoz5428@gmail.com"
                className="flex w-[100px] flex-col items-center gap-4 text-foreground transition-opacity hover:opacity-60"
                aria-label="Send Daniela an email"
              >
                <span className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-accent">
                  <Image
                    src="/images/footer/footer-icons/footer-icon-01.svg"
                    alt=""
                    width={50}
                    height={50}
                    className="h-[50px] w-[50px] object-contain"
                  />
                </span>

                <span className="text-[18px] font-semibold">Email</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/daniela-munoz28"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-[100px] flex-col items-center gap-4 text-foreground transition-opacity hover:opacity-60"
                aria-label="Visit Daniela's LinkedIn profile"
              >
                <span className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-accent">
                  <Image
                    src="/images/footer/footer-icons/footer-icon-02.svg"
                    alt=""
                    width={50}
                    height={50}
                    className="h-[50px] w-[50px] object-contain"
                  />
                </span>

                <span className="text-[18px] font-semibold">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex min-h-[72px] flex-row items-center justify-center gap-8">
            <Link
              href="/"
              className="font-display text-[24px] font-semibold leading-none text-accent"
              aria-label="Back to home"
            >
              Daniela Muñoz
            </Link>

            <div className="h-px flex-1 bg-[#D9D8D5]" />

            <p className="text-[18px] font-normal text-[#7B828A]">
              Designed in Barcelona · Built with curiosity.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
