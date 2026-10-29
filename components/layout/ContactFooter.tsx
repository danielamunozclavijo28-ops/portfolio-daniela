
import Link from "next/link";

const footerLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/daniela-munoz28",
  },
  {
    label: "Email",
    href: "mailto:danielamunoz5428@gmail.com",
  },
];

export default function ContactFooter() {
  return (
    <footer className="w-full border-t border-[#E5E0DC] bg-[#F6F2EE]">
      <div className="mx-auto flex min-h-[77px] max-w-[1512px] flex-col items-center justify-between gap-6 px-6 py-6 md:flex-row md:px-10 md:py-0 lg:px-11">
        {/* Logo */}
        <Link
          href="/"
          aria-label="DM — Home"
          className="font-display text-[38px] font-medium leading-none tracking-[-0.06em] text-[#C99C9C]"
        >
          DM
        </Link>

        {/* Contact links */}
        <nav
          aria-label="Contact footer"
          className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3"
        >
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={
                link.href.startsWith("https://") ? "_blank" : undefined
              }
              rel={
                link.href.startsWith("https://")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="text-sm font-semibold text-[#121721] transition-colors hover:text-[#C99C9C] md:text-base"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="mailto:danielamunoz5428@gmail.com"
          className="inline-flex min-h-[54px] items-center justify-center gap-3 rounded-md bg-[#121721] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#303743]"
        >
          Let’s talk
          <span aria-hidden="true" className="text-xl leading-none">
            →
          </span>
        </Link>
      </div>
    </footer>
  );
}
