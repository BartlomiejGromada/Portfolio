"use client";

import { useLanguage } from "@/context/LanguageContext";
import { usePortfolio } from "@/context/PortfolioContext";
import { AnimatePresence, motion } from "framer-motion";
import { Building2, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { TableOfContents } from "@/components/custom/TableOfContents";

export default function ExperiencePage() {
  const { language } = useLanguage();
  const portfolioData = usePortfolio();

  // Stan aktywny, tak samo jak na stronach Edukacja/Umiejętności (domyślnie pusty = widok ogólny)
  const [activeSection, setActiveSection] = useState("");

  const isPl = language === "pl";
  const langKey = isPl ? "pl" : "en";

  const experienceData = portfolioData.experience;

  // Generowanie sekcji spisu treści z nazw firm
  const sections = experienceData.map((exp) => ({
    id: exp.company.split(" – ")[0].toLowerCase().replace(/\s+/g, "-"),
    title: {
      pl: exp.company.split(" – ")[0],
      en: exp.company.split(" – ")[0],
    },
    companyName: exp.company.split(" – ")[0],
    data: exp,
  }));

  return (
    <div className="min-h-screen bg-background pt-24 pb-16 px-8 relative">
      {/* Dekoracyjne tło */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[128px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[128px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col xl:flex-row gap-8 relative">
        {/* Lewa kolumna: Główna treść */}
        <div className="flex-1 w-full max-w-5xl mx-auto">
          {/* Widok domyślny (Ogólny) */}
          <AnimatePresence initial={false} mode="wait">
            {!activeSection && (
              <motion.div
                key="main-header"
                initial={{ opacity: 0, height: 0, overflow: "hidden" }}
                animate={{ opacity: 1, height: "auto", overflow: "visible" }}
                exit={{ opacity: 0, height: 0, overflow: "hidden" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <div className="pb-16 pt-2">
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                    {isPl
                      ? "Doświadczenie Zawodowe"
                      : "Professional Experience"}
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mb-12">
                    {isPl
                      ? "Przegląd mojej dotychczasowej ścieżki kariery, kluczowych ról i projektów, w których brałem udział. Każde z tych miejsc ukształtowało moje kompetencje inżynierskie i przygotowało mnie na nowe wyzwania."
                      : "An overview of my career path so far, key roles, and projects I have been involved in. Each of these places shaped my engineering skills and prepared me for new challenges."}
                  </p>

                  {/* Pozioma Oś Czasu jako przegląd (Overview) */}
                  <div className="relative mb-8 mt-24 md:mt-32 px-4 md:px-12 w-full">
                    {/* Linia tła */}
                    <div className="absolute top-1/2 left-10 right-10 md:left-16 md:right-16 h-1 bg-secondary/50 -translate-y-1/2 rounded-full" />

                    {/* Aktywna linia na 100% (wszystko zaliczone w widoku ogólnym) */}
                    <div className="absolute top-1/2 left-10 md:left-16 right-10 md:right-16 h-1 bg-primary/50 -translate-y-1/2 rounded-full z-0" />

                    {/* Węzły osi */}
                    <div className="relative flex justify-between z-10">
                      {sections.map((section, idx) => {
                        return (
                          <button
                            key={idx}
                            onClick={() => {
                              setActiveSection(section.id);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                            className="group flex flex-col items-center relative w-20 md:w-32"
                          >
                            <div className="absolute bottom-full mb-4 md:mb-6 flex items-center justify-center gap-1.5 whitespace-nowrap font-bold transition-all duration-300 text-muted-foreground text-sm group-hover:text-primary">
                              <Building2 className="w-4 h-4 shrink-0" />
                              {section.companyName}
                            </div>

                            <div className="py-2">
                              <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border-[3px] transition-all duration-300 flex items-center justify-center border-primary bg-background group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(var(--primary),0.5)]">
                                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full" />
                              </div>
                            </div>

                            <div className="absolute top-full mt-3 md:mt-4 whitespace-nowrap text-xs md:text-sm font-semibold transition-colors duration-300 text-muted-foreground group-hover:text-foreground">
                              {section.data.date[langKey]}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Spis treści (Mobile/Tablet Only) */}
          <TableOfContents 
            sections={sections}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            language={language as "pl" | "en"}
            isMobile={true}
            showOverview={true}
            overviewText={{ pl: "Przegląd", en: "Overview" }}
          />

          {/* Aktywna kategoria (Karty) */}
          <div className="space-y-16">
            <AnimatePresence mode="wait">
              {sections.map((section) => {
                if (activeSection !== section.id && activeSection !== "") return null;

                return (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-8 border-b border-border/50 pb-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-3 bg-primary/10 rounded-xl text-primary">
                          <Building2 className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold">
                          {section.data.company}
                        </h2>
                      </div>
                      <p className="text-lg text-muted-foreground max-w-3xl md:ml-[4.5rem]">
                        {section.data.role[langKey]} •{" "}
                        {section.data.date[langKey]}
                      </p>
                    </div>

                    <div className="bg-card p-8 md:p-12 rounded-3xl border border-border/50 shadow-sm relative overflow-hidden group hover:border-primary/50 transition-colors">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10 blur-2xl transition-all duration-500 group-hover:bg-primary/20" />

                      {/* Opis w formie punktów */}
                      <div className="mb-10">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                          <span className="w-8 h-px bg-primary" />
                          {isPl
                            ? "Kluczowe obowiązki i osiągnięcia:"
                            : "Key responsibilities & achievements:"}
                        </h3>
                        <ul className="space-y-4">
                          {section.data.description[langKey]
                            .split("\n")
                            .filter((point) => point.trim().length > 0)
                            .map((point, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-4 text-lg text-muted-foreground leading-relaxed"
                              >
                                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                                <span>{point}</span>
                              </li>
                            ))}
                        </ul>
                      </div>

                      {/* Technologie */}
                      <div>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                          <span className="w-8 h-px bg-primary" />
                          {isPl
                            ? "Wykorzystywane technologie:"
                            : "Used technologies:"}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {section.data.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-4 py-2 bg-secondary/30 text-secondary-foreground font-semibold rounded-xl border border-border/50 hover:bg-primary/10 hover:border-primary/30 transition-colors cursor-default"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Prawa kolumna: Spis treści (Sidebar) - Desktop Only */}
        <TableOfContents 
          sections={sections}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          language={language as "pl" | "en"}
          isMobile={false}
        />
      </div>
    </div>
  );
}
