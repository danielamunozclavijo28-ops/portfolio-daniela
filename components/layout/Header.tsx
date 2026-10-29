
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "LAB", href: "/lab" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (href: string) => {
    setMenuOpen(false);

    if (pathname === href) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background">
      <div className="mx-auto flex h-[76px] max-w-[1512px] items-center justify-between px-8 md:h-[77px] md:px-10">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => handleNavigate("/")}
          className="font-display text-[20px] font-semibold leading-none text-accent md:text-[24px]"
          aria-label="Daniela Muñoz Clavijo — Home"
        >
          Daniela Muñoz
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center md:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              scroll
              onClick={() => handleNavigate(item.href)}
              className="px-6 py-3 text-[18px] font-semibold text-foreground transition-opacity hover:opacity-60"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          scroll
          onClick={() => handleNavigate("/contact")}
          className="hidden items-center gap-2 rounded-[6px] bg-foreground px-3 py-3 text-[18px] font-medium text-white transition-opacity hover:opacity-90 md:flex"
        >
          <span>Let’s talk</span>
          <span aria-hidden="true" className="text-[20px] leading-none">
            →
          </span>
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex size-8 items-center justify-center text-foreground md:hidden"
        >
          <span className="flex w-[26px] flex-col gap-[7px]" aria-hidden="true">
            <span
              className={`h-[1.5px] w-full bg-current transition-transform ${
                menuOpen ? "translate-y-[8.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-full bg-current transition-opacity ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-full bg-current transition-transform ${
                menuOpen ? "-translate-y-[8.5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile navigation panel */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-foreground/10 bg-background px-8 py-4 md:hidden"
        >
          <div className="flex flex-col">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => handleNavigate(item.href)}
                className="border-b border-foreground/10 py-4 text-base font-semibold text-foreground last:border-b-0"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => handleNavigate("/contact")}
              className="mt-4 flex w-fit items-center gap-2 rounded-[6px] bg-foreground px-4 py-3 text-base font-medium text-white"
            >
              <span>Let’s talk</span>
              <span aria-hidden="true" className="text-xl leading-none">
                →
              </span>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
