
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const handleNavigate = (href: string) => {
    if (pathname === href) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 h-[77px] border-b border-foreground/10 bg-background">
      <div className="mx-auto flex h-full max-w-[1512px] items-center justify-between px-10">
        <Link
          href="/"
          onClick={() => handleNavigate("/")}
          className="font-display text-[34px] leading-none text-accent"
          aria-label="Daniela Muñoz Clavijo — Home"
        >
          DM
        </Link>

        <nav className="flex items-center">
          {[
            { label: "Work", href: "/work" },
            { label: "About", href: "/about" },
            { label: "LAB", href: "/lab" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              scroll={true}
              onClick={() => handleNavigate(item.href)}
              className="px-6 py-3 text-[18px] font-semibold text-foreground transition-opacity hover:opacity-60"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          scroll={true}
          onClick={() => handleNavigate("/contact")}
          className="flex items-center gap-2 rounded-[6px] bg-foreground px-3 py-3 text-[18px] font-medium text-white transition-opacity hover:opacity-90"
        >
          <span>Let’s talk</span>
          <span aria-hidden="true" className="text-[20px] leading-none">
            →
          </span>
        </Link>
      </div>
    </header>
  );
}
