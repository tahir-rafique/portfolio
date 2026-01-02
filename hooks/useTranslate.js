"use client";

import i18next from "../lib/i18n";
import { useEffect, useState } from "react";

export default function useTranslate() {
  // Initialize with i18next's current language, or from localStorage as fallback
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") return "en";
    return i18next.language || localStorage.getItem("i18nextLng") || "en";
  });

  useEffect(() => {
    // Immediately sync with i18next's actual language after mount
    setLang(i18next.language || "en");

    // Listen for language changes from i18next
    const handleChange = (lng) => {
      setLang(lng);
    };

    i18next.on("languageChanged", handleChange);

    // Also listen for initialization to catch delayed detection
    const handleInitialized = () => {
      setLang(i18next.language || "en");
    };

    i18next.on("initialized", handleInitialized);

    return () => {
      i18next.off("languageChanged", handleChange);
      i18next.off("initialized", handleInitialized);
    };
  }, []);

  // Switch language and persist to localStorage
  const changeLanguage = (lng) => {
    localStorage.setItem("i18nextLng", lng);
    i18next.changeLanguage(lng);
  };

  const t = (key) => i18next.t(key, { ns: "global" });

  return { t, lang, changeLanguage };
}
