"use client";

import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import globaleng from "../locales/en/translation.json";
import arabic from "../locales/ar/translation.json";

if (!i18next.isInitialized) {
  i18next
    .use(LanguageDetector) // ⬅️ Activate auto language detection
    .init({
      interpolation: { escapeValue: false },

      resources: {
        en: { global: globaleng },
        ar: { global: arabic },
      },

      fallbackLng: "en",
      ns: ["global"],
      defaultNS: "global",

      detection: {
        order: ["localStorage", "navigator", "htmlTag"],
        caches: ["localStorage"],
      },
    });
}

export default i18next;
