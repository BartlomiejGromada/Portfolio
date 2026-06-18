"use client";

import { motion } from "framer-motion";

export interface TOCSection {
  id: string;
  title: string | { pl: string; en: string };
}

interface TableOfContentsProps {
  sections: TOCSection[];
  activeSection: string;
  setActiveSection: (id: string) => void;
  language: "pl" | "en";
  isMobile?: boolean;
  showOverview?: boolean;
  overviewText?: { pl: string; en: string };
}

export function TableOfContents({
  sections,
  activeSection,
  setActiveSection,
  language,
  isMobile = false,
  showOverview = false,
  overviewText = { pl: "Przegląd", en: "Overview" },
}: TableOfContentsProps) {
  const isPl = language === "pl";

  const getTitle = (title: string | { pl: string; en: string }) => {
    if (typeof title === "string") return title;
    return isPl ? title.pl : title.en;
  };

  const handleSectionClick = (id: string) => {
    setActiveSection(activeSection === id ? "" : id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isMobile) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="xl:hidden sticky top-[72px] z-40 mb-10 flex flex-wrap gap-3 bg-background/90 backdrop-blur-md py-4 border-b border-border/50 shadow-sm -mx-8 px-8 md:mx-0 md:px-0 md:border-b-0 md:shadow-none"
      >
        {showOverview && (
          <button
            onClick={() => {
              setActiveSection("");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all flex items-center border ${
              activeSection === ""
                ? "bg-primary text-primary-foreground border-primary shadow-md scale-105"
                : "bg-secondary/20 hover:bg-primary/20 text-foreground border-border hover:border-primary/50"
            }`}
          >
            {isPl ? overviewText.pl : overviewText.en}
          </button>
        )}
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              onClick={() => handleSectionClick(section.id)}
              className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all flex items-center border ${
                isActive
                  ? "bg-primary text-primary-foreground border-primary shadow-md scale-105"
                  : "bg-secondary/20 hover:bg-primary/20 text-foreground border-border hover:border-primary/50"
              }`}
            >
              {getTitle(section.title)}
            </button>
          );
        })}
      </motion.div>
    );
  }

  // Desktop TOC
  return (
    <div className="hidden xl:block w-56 shrink-0 relative">
      <div className="sticky top-32 z-30">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-1.5 border-l border-border/50 pl-4 py-2"
        >
          <div className="text-xs uppercase tracking-wider font-bold text-foreground/50 mb-3 ml-2">
            {isPl ? "Przejdź do" : "Jump to"}
          </div>
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => handleSectionClick(section.id)}
                className={`text-left px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                  isActive
                    ? "bg-primary/10 text-primary font-bold shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {getTitle(section.title)}
              </button>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
