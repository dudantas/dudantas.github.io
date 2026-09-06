export const locales = ["en", "pt-BR"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeMetadata = {
  en: { label: "EN", htmlLang: "en", ogLocale: "en_US" },
  "pt-BR": { label: "PT-BR", htmlLang: "pt-BR", ogLocale: "pt_BR" }
} satisfies Record<Locale, { label: string; htmlLang: string; ogLocale: string }>;

const portuguesePrefix = "/pt-br";

export function isLocale(value: unknown): value is Locale {
  return value === "en" || value === "pt-BR";
}

export function getLocaleFromPath(pathname: string): Locale {
  return /^\/pt-br(?:\/|$)/i.test(pathname) ? "pt-BR" : defaultLocale;
}

export function stripLocalePrefix(pathname: string): string {
  const stripped = pathname.replace(/^\/pt-br(?=\/|$)/i, "");
  return stripped === "" ? "/" : stripped;
}

export function localizePath(href: string, locale: Locale): string {
  if (href === "" || href.startsWith("#") || href.startsWith("?") || href.startsWith("//") || /^[a-z][a-z\d+.-]*:/i.test(href)) {
    return href;
  }

  const [, pathname = "", suffix = ""] = href.match(/^([^?#]*)(.*)$/) ?? [];
  if (!pathname.startsWith("/")) return href;

  const neutralPath = stripLocalePrefix(pathname).replace(/\/$/, "") || "/";
  if (locale === "en") return `${neutralPath}${suffix}`;

  const localizedPath = neutralPath === "/" ? portuguesePrefix : `${portuguesePrefix}${neutralPath}`;
  return `${localizedPath}${suffix}`;
}

export function alternateLocale(locale: Locale): Locale {
  return locale === "en" ? "pt-BR" : "en";
}
