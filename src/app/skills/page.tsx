"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { usePortfolio } from "@/context/PortfolioContext";
import { motion, AnimatePresence } from "framer-motion";
import { Server, AppWindow, Smartphone, Database, Cloud, Building2, Wrench, ChevronUp } from "lucide-react";

const iconMap: Record<string, any> = {
  Server,
  AppWindow,
  Smartphone,
  Database,
  Cloud,
  Building2,
  Wrench,
};

export default function SkillsPage() {
  const { t, language } = useLanguage();
  const portfolioData = usePortfolio();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);

    // Intersection Observer dla aktywnej sekcji
    const sectionElements = document.querySelectorAll("div[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" } // Aktywacja, gdy sekcja jest w środkowej części ekranu
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-16 px-8 overflow-x-hidden">
      <div className="max-w-5xl mx-auto relative">
        
        {/* Lewa kolumna: Główna treść */}
        <div className="w-full">
        {/* Nagłówek */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            {t("skills.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            {language === 'pl' 
              ? "Poniżej znajdziesz szczegółowy opis technologii, narzędzi i metodologii, z którymi pracuję na co dzień, tworząc nowoczesne oprogramowanie."
              : "Below you'll find a detailed breakdown of the technologies, tools, and methodologies I work with daily to build modern software."}
          </p>
        </motion.div>

        {/* Spis treści (Table of Contents) - Mobile/Tablet Only */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="2xl:hidden sticky top-[72px] z-40 mb-16 flex flex-wrap gap-3 bg-background/90 backdrop-blur-md py-4 border-b border-border/50 shadow-sm -mx-8 px-8 md:mx-0 md:px-0 md:border-b-0 md:shadow-none"
        >
          {portfolioData.detailedSkills.map((category, idx) => {
            const id = category.category.en.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            const isActive = activeSection === id;
            return (
              <a
                key={idx}
                href={`#${id}`}
                className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all flex items-center border ${
                  isActive 
                    ? "bg-primary text-primary-foreground border-primary shadow-md scale-105" 
                    : "bg-secondary/20 hover:bg-primary/20 text-foreground border-border hover:border-primary/50"
                }`}
              >
                {category.category[language as 'pl' | 'en']}
              </a>
            );
          })}
        </motion.div>

        {/* Lista Kategorii */}
        <div className="space-y-16">
          {portfolioData.detailedSkills.map((category, catIndex) => {
            const IconComponent = iconMap[category.iconName] || Server;
            const id = category.category.en.toLowerCase().replace(/[^a-z0-9]+/g, '-');

            return (
              <motion.div 
                key={catIndex}
                id={id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="scroll-mt-32"
              >
                {/* Nagłówek Kategorii */}
                <div className="flex items-center space-x-4 mb-8 border-b border-border/50 pb-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">
                    {category.category[language as 'pl' | 'en']}
                  </h2>
                </div>

                {/* Siatka Umiejętności */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ y: -4 }}
                      className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 flex flex-col h-full"
                    >
                      <h3 className="text-lg font-bold text-foreground mb-3 flex items-center">
                        <span className="w-2 h-2 rounded-full bg-primary/80 mr-3"></span>
                        {skill.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                        {skill.description[language as 'pl' | 'en']}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
          </div>
        </div>

        {/* Prawa kolumna: Spis treści (Sidebar) - Desktop Only */}
        <div className="hidden 2xl:block fixed top-32 left-[calc(50%+34rem)] w-56">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-1.5 border-l border-border/50 pl-4 py-2"
          >
              <div className="text-xs uppercase tracking-wider font-bold text-foreground/50 mb-3 ml-2">
                {language === 'pl' ? 'Spis Treści' : 'Table of Contents'}
              </div>
              {portfolioData.detailedSkills.map((category, idx) => {
                const id = category.category.en.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                const isActive = activeSection === id;
                return (
                  <a
                    key={idx}
                    href={`#${id}`}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                      isActive 
                        ? "bg-primary/10 text-primary font-bold shadow-sm" 
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    }`}
                  >
                    {category.category[language as 'pl' | 'en']}
                  </a>
                );
              })}
            </motion.div>
        </div>

      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-transform hover:-translate-y-1 z-50 flex items-center justify-center"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
