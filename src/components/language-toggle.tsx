"use client";

import { Button } from "@/components/ui/button";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "es" : "en";

    // Remove the current locale from the pathname
    const pathnameWithoutLocale = pathname.replace(`/${locale}`, "");

    startTransition(() => {
      router.replace(`/${nextLocale}${pathnameWithoutLocale}`);
    });
  };

  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className="px-2"
      onClick={toggleLanguage}
      disabled={isPending}
      aria-label="Toggle language"
    >
      <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
        {locale === "en" ? "ES" : "EN"}
      </span>
    </Button>
  );
}
