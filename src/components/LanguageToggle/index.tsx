"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { i18n, type Locale } from "../../../i18n-config";
import { cln } from "../../utils/classnames";
import { gabarito } from "../../utils/fontsImporter";

export default function LanguageToggle() {
  const pathname = usePathname();
  const [hovered, setHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted || !pathname) return null;

  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");

    // If switching to default locale, remove first segment if it exists
    if (locale === i18n.defaultLocale) {
      if (segments[1] && i18n.locales.includes(segments[1] as Locale)) {
        segments.splice(1, 1);
      }
      return segments.join("/") || "/";
    }

    // Otherwise, replace or insert locale segment
    if (segments[1] && i18n.locales.includes(segments[1] as Locale)) {
      segments[1] = locale;
    } else {
      segments.splice(1, 0, locale);
    }
    return segments.join("/");
  };

  const currentPathName = pathname.split("/")[1] === "en" ? "en" : "hu";
  const otherPathName = currentPathName === "hu" ? "en" : "hu";

  return (
    <Link
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      href={redirectedPathname(otherPathName)}
      className="h-9 sm:h-11 w-18 sm:w-20 border-1 flex relative items-center justify-center bg-white/5 border-1 border-white/20 backdrop-blur-md"
    >
      <ul className="flex relative gap-x-3">
        {i18n.locales.map((locale) => (
          <li
            className={cln(
              gabarito.className,
              "text-[16px] flex items-center duration-200",
              currentPathName === locale && "font-bold text-white",
              currentPathName === locale &&
                hovered &&
                "font-medium text-white/50",
              otherPathName === locale &&
                !hovered &&
                "font-regular text-white/50",
              otherPathName === locale && hovered && "font-bold text-white",
            )}
            key={locale}
          >
            {locale.toUpperCase()}
          </li>
        ))}
      </ul>
      <span className="h-3.5 w-[2px] bg-white/50 flex absolute left-[33px] sm:left-[37px]" />
    </Link>
  );
}
