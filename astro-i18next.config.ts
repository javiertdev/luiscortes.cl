import type { AstroI18nextConfig } from "astro-i18next";

export default {
  defaultLocale: "es",
  locales: ["es", "en"],
  showDefaultLocale: true,
  routes: {
    es: {
      index: "",
    },
    en: {
      index: "",
    },
  },
} as AstroI18nextConfig;