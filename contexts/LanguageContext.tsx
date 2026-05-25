"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "es" | "en";

const LanguageContext = createContext<{ lang: Lang; toggleLang: () => void }>({
  lang: "es",
  toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");
  const toggleLang = () => setLang(l => (l === "es" ? "en" : "es"));
  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
