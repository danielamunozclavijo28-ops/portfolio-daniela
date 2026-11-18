export type Lang = "en" | "es";

/** Spanish pages live under /es. */
export function langOf(pathname: string | null): Lang {
  return pathname === "/es" || (pathname ?? "").startsWith("/es/") ? "es" : "en";
}

/** Path without the language prefix, e.g. "/es/work" -> "/work". */
export function basePath(pathname: string | null): string {
  const p = pathname || "/";
  if (p === "/es") return "/";
  return p.startsWith("/es/") ? p.slice(3) : p;
}

/** Same page in the given language. */
export function localize(path: string, lang: Lang): string {
  const base = basePath(path);
  if (lang === "en") return base;
  return base === "/" ? "/es" : `/es${base}`;
}
