"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Portrait with real plants and flowers that grow around it.
 * Grows when it comes into view, on hover, and on tap.
 */
export default function GrowPortrait() {
  const ref = useRef<HTMLDivElement>(null);
  const [grown, setGrown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => setGrown(true), 400);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const hoverable = () => typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;

  return (
    <div
      ref={ref}
      className={`dm-grow${grown ? " grown" : ""}`}
      role="button"
      tabIndex={0}
      aria-pressed={grown}
      aria-label="Portrait of Daniela Muñoz. Plants and flowers grow around it."
      onMouseEnter={() => hoverable() && setGrown(true)}
      onMouseLeave={() => hoverable() && setGrown(false)}
      onClick={() => !hoverable() && setGrown((g) => !g)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setGrown((g) => !g);
        }
      }}
    >
      <div className="dm-sway">
        <img className="dm-plants" src="/images/v2/plants.webp" alt="" aria-hidden="true" />
      </div>
      <img className="dm-portrait" src="/images/v2/portrait-cutout.webp" alt="" />
      <img className="dm-fl dm-f1" src="/images/v2/flower.webp" alt="" aria-hidden="true" />
      <img className="dm-fl dm-f2" src="/images/v2/flower.webp" alt="" aria-hidden="true" />
      <img className="dm-fl dm-f3" src="/images/v2/flower.webp" alt="" aria-hidden="true" />
    </div>
  );
}
