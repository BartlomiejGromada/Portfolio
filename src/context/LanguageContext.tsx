"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Language } from "@/data/translations";

type TranslationKey = string; // Np. 'nav.home'

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Domyślnie PL podczas SSR aby uniknąć hydratation mismatch na serwerze
  const [language, setLanguageState] = useState<Language>("pl");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedLang = localStorage.getItem("portfolio-language") as Language;
    if (storedLang && (storedLang === "pl" || storedLang === "en")) {
      setLanguageState(storedLang);
    } else {
      const browserLang = navigator.language.startsWith("pl") ? "pl" : "en";
      setLanguageState(browserLang);
      localStorage.setItem("portfolio-language", browserLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("portfolio-language", lang);
  };

  const t = (key: TranslationKey): string => {
    const keys = key.split(".");
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value[k] === undefined) {
        console.warn(`Brak tłumaczenia dla klucza: ${key}`);
        return key;
      }
      value = value[k];
    }
    
    return value as string;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage musi być użyte wewnątrz LanguageProvider");
  }
  return context;
};
