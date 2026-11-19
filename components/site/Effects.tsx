"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { langOf } from "./i18n";

/**
 * Site-wide scroll effects, driven by data attributes in the markup:
 * - [data-anim]   word / letter reveals, played once when in view
 * - [data-reveal] children fade up in sequence when in view
 * - [data-fill]   title words fill with colour as you scroll
 */
export default function Effects() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.lang = langOf(pathname);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const once = Array.from(document.querySelectorAll<HTMLElement>("[data-anim], [data-reveal]"));
    const fills = Array.from(document.querySelectorAll<HTMLElement>("[data-fill]"));

    if (reduced || !("IntersectionObserver" in window)) {
      once.forEach((el) => el.classList.add("is-in"));
      fills.forEach((el) => el.querySelectorAll(".dm-f").forEach((w) => w.classList.add("on")));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    once.forEach((el) => io.observe(el));

    // Content that appears later (e.g. the Work filter) gets revealed too.
    const mo = new MutationObserver((muts) => {
      muts.forEach((m) =>
        m.addedNodes.forEach((n) => {
          if (!(n instanceof HTMLElement)) return;
          const found = [n, ...Array.from(n.querySelectorAll<HTMLElement>("[data-anim], [data-reveal]"))];
          found.forEach((el) => {
            if (el.matches("[data-anim], [data-reveal]") && !el.classList.contains("is-in")) io.observe(el);
          });
        }),
      );
    });
    mo.observe(document.body, { childList: true, subtree: true });
    const mo2 = new MutationObserver(() => requestAnimationFrame(() => update()));
    mo2.observe(document.body, { childList: true, subtree: true });

    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      document.querySelectorAll<HTMLElement>("[data-fill]").forEach((el) => {
        const words = el.querySelectorAll(".dm-f");
        const top = el.getBoundingClientRect().top;
        const p = Math.min(1, Math.max(0, (vh * 0.9 - top) / (vh * 0.45)));
        const lit = Math.round(p * words.length);
        words.forEach((w, i) => w.classList.toggle("on", i < lit));
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      io.disconnect();
      mo.disconnect();
      mo2.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return null;
}
