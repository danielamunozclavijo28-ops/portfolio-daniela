
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-background-secondary px-6 pt-[72px] md:px-20"
    >
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

            {/* Contact CTA */}
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
          <div className="flex items-start gap-12 pt-0 md:pt-[68px]">
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
        <div className="flex min-h-[72px] flex-col items-start justify-center gap-5 py-5 sm:flex-row sm:items-center sm:gap-8 sm:py-0">
          <Link
            href="/"
            className="font-display text-[34px] leading-none text-accent"
            aria-label="Back to home"
          >
            DM
          </Link>

          <div className="hidden h-px flex-1 bg-[#D9D8D5] sm:block" />

          <p className="text-[14px] font-normal text-[#7B828A] sm:text-[18px]">
            Designed in Barcelona · Built with curiosity.
          </p>
        </div>
      </div>
    </footer>
  );
}
