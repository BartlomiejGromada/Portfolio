"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { usePortfolio } from "@/context/PortfolioContext";
import { motion, AnimatePresence } from "framer-motion";
import { Server, AppWindow, Smartphone, Database, Cloud, Building2, Wrench, ChevronUp, Bot, TestTubes, Users, Search } from "lucide-react";
import { SiDotnet, SiReact, SiTypescript } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import { DiMsqlServer, DiPostgresql } from "react-icons/di";

const iconMap: Record<string, any> = {
  Server,
  AppWindow,
  Smartphone,
  Database,
  Cloud,
  Building2,
  Wrench,
  Bot,
  TestTubes,
  Users,
};

const topTechStack = [
  { name: ".NET", icon: SiDotnet, color: "text-primary" },
  { name: "C#", icon: TbBrandCSharp, color: "text-primary" },
  { name: "React", icon: SiReact, color: "text-primary" },
  { name: "TypeScript", icon: SiTypescript, color: "text-primary" },
  { name: "MS SQL Server", icon: DiMsqlServer, color: "text-primary" },
  { name: "PostgreSQL", icon: DiPostgresql, color: "text-primary" },
  { name: "Azure", icon: VscAzure, color: "text-primary" }
];

export default function SkillsPage() {
  const { t, language } = useLanguage();
  const portfolioData = usePortfolio();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [highlightedSkill, setHighlightedSkill] = useState("");

  const allSkills = portfolioData.detailedSkills.flatMap(cat => 
    cat.items.map(item => ({
      ...item,
      categoryId: cat.category.en.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      categoryName: cat.category[language as 'pl' | 'en']
    }))
  );

  const handleSearchSelect = (skillName: string, categoryId: string) => {
    setActiveSection(categoryId);
    setSearchQuery("");
    setHighlightedSkill(skillName);
    
    // Wait for the AnimatePresence to render the new section, then scroll
    setTimeout(() => {
      const safeId = `skill-${skillName.replace(/[^a-zA-Z0-9]/g, '-')}`;
      const el = document.getElementById(safeId);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 120;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 400);

    // Remove highlight after 3 seconds
    setTimeout(() => setHighlightedSkill(""), 3000);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderSearchBar = (id: string, isCompact: boolean = false) => (
    <motion.div layoutId="global-search" className={`relative z-30 ${isCompact ? "w-full" : "w-full max-w-md mt-8"}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <input
          type="text"
          placeholder={language === 'pl' ? "Szukaj (np. React, SQL)..." : "Search (e.g. React, SQL)..."}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={`w-full bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all pl-9 pr-4 py-2.5 text-sm rounded-xl`}
        />
      </div>
      
      {/* Wyniki wyszukiwania */}
      <AnimatePresence>
        {searchQuery.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className={`absolute z-50 w-full mt-2 bg-card border border-border shadow-xl overflow-hidden max-h-60 overflow-y-auto rounded-xl`}
          >
            {allSkills.filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase())).map((skill, idx) => (
              <button
                key={idx}
                onClick={() => handleSearchSelect(skill.name, skill.categoryId)}
                className="w-full text-left hover:bg-secondary/50 border-b border-border/50 last:border-0 transition-colors flex flex-col px-4 py-3"
              >
                <span className="font-bold text-sm text-foreground">{skill.name}</span>
                <span className="text-xs text-muted-foreground">{skill.categoryName}</span>
              </button>
            ))}
            {allSkills.filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && (
              <div className="text-sm text-muted-foreground px-4 py-3">
                {language === 'pl' ? "Brak wyników." : "No results found."}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-background pt-24 pb-16 px-8">
      <div className="max-w-5xl mx-auto relative">
        
        {/* Lewa kolumna: Główna treść */}
        <div className="w-full">
        {/* Nagłówek i Wyszukiwarka */}
        <div>
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
                    {t("skills.title")}
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-4xl leading-relaxed">
                    {language === 'pl' 
                      ? "Moje podejście do inżynierii oprogramowania opiera się na trzech filarach: czystej architekturze, niezawodności kodu oraz realnej wartości dla biznesu. Jako Fullstack Developer sprawnie poruszam się między zaawansowaną logiką serwerową a intuicyjnymi interfejsami użytkownika, wspierając cały proces nowoczesnymi praktykami DevOps i automatyzacją AI. Poniżej znajdziesz szczegółowy opis technologii i metodologii, które stanowią fundament moich codziennych projektów."
                      : "My approach to software engineering is built on three pillars: clean architecture, code reliability, and delivering real business value. As a Fullstack Developer, I smoothly navigate between advanced server-side logic and intuitive user interfaces, supporting the entire process with modern DevOps practices and AI automation. Below you'll find a detailed breakdown of the technologies and methodologies that form the foundation of my daily projects."}
                  </p>

                  {/* Ikonki/Pigułki głównych technologii */}
                  <div className="flex flex-wrap gap-3 mt-8">
                    {topTechStack.map(tech => (
                      <span key={tech.name} className="flex items-center gap-2 px-4 py-2 bg-secondary/30 text-foreground font-bold rounded-xl text-sm border border-border/50 shadow-sm hover:bg-secondary/50 transition-colors cursor-default">
                        <tech.icon className={`w-5 h-5 ${tech.color}`} />
                        {tech.name}
                      </span>
                    ))}
                  </div>

                  {/* Wyszukiwarka na start */}
                  {renderSearchBar("start-search", false)}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Spis treści (Table of Contents) - Mobile/Tablet Only */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="2xl:hidden sticky top-[72px] z-40 mb-6 flex flex-wrap gap-3 bg-background/90 backdrop-blur-md py-4 border-b border-border/50 shadow-sm -mx-8 px-8 md:mx-0 md:px-0 md:border-b-0 md:shadow-none"
        >
          {portfolioData.detailedSkills.map((category, idx) => {
            const id = category.category.en.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            const isActive = activeSection === id;
            return (
              <button
                key={idx}
                onClick={() => {
                  setActiveSection(prev => prev === id ? "" : id);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all flex items-center border ${
                  isActive 
                    ? "bg-primary text-primary-foreground border-primary shadow-md scale-105" 
                    : "bg-secondary/20 hover:bg-primary/20 text-foreground border-border hover:border-primary/50"
                }`}
              >
                {category.category[language as 'pl' | 'en']}
              </button>
            );
          })}
        </motion.div>

        {/* Aktywna kategoria */}
        <div className={activeSection ? "space-y-16 min-h-[50vh]" : "space-y-16"}>
          <AnimatePresence mode="wait">
            {portfolioData.detailedSkills.filter(c => c.category.en.toLowerCase().replace(/[^a-z0-9]+/g, '-') === activeSection).map((category) => {
              const IconComponent = iconMap[category.iconName] || Server;
              
              return (
                <motion.div 
                  key={activeSection}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Nagłówek Kategorii */}
                  <div className="mb-8 border-b border-border/50 pb-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-xl text-primary">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold">
                        {category.category[language as 'pl' | 'en']}
                      </h2>
                    </div>
                    {category.description && (
                      <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl">
                        {category.description[language as 'pl' | 'en']}
                      </p>
                    )}
                  </div>

                  {/* Siatka Umiejętności */}
                  {(() => {
                    const hasSubcategories = category.items.some(item => item.subcategory);
                    
                    const renderItem = (skill: typeof category.items[0], idx: number) => {
                      const isHighlighted = highlightedSkill === skill.name;
                      const safeId = `skill-${skill.name.replace(/[^a-zA-Z0-9]/g, '-')}`;

                      return (
                      <motion.div
                        id={safeId}
                        key={skill.name}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className={`group relative p-6 bg-card rounded-2xl border transition-all duration-300 flex flex-col h-full ${
                          isHighlighted 
                            ? "border-primary ring-2 ring-primary/50 shadow-lg scale-[1.02] bg-primary/5" 
                            : "border-border/50 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1"
                        }`}
                      >
                        <div className={`font-bold text-lg mb-2 transition-colors ${isHighlighted ? "text-primary" : "group-hover:text-primary"}`}>
                          {skill.name}
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {skill.description[language as 'pl' | 'en']}
                        </p>
                      </motion.div>
                    )};

                    if (hasSubcategories) {
                      const grouped = category.items.reduce((acc, item) => {
                        const sub = item.subcategory ? item.subcategory[language as 'pl' | 'en'] : 'Pozostałe';
                        if (!acc[sub]) acc[sub] = [];
                        acc[sub].push(item);
                        return acc;
                      }, {} as Record<string, typeof category.items>);

                      return (
                        <div className="flex flex-col gap-10">
                          {Object.entries(grouped).map(([subName, items]) => (
                            <div key={subName}>
                              <h3 className="text-xl font-bold mb-6 text-foreground/80 border-l-4 border-primary pl-3">
                                {subName}
                              </h3>
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {items.map((skill, idx) => renderItem(skill, idx))}
                              </div>
                            </div>
                          ))}
                        </div>
                      );
                    }

                    return (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {category.items.map((skill, idx) => renderItem(skill, idx))}
                      </div>
                    );
                  })()}
                </motion.div>
              );
            })}
          </AnimatePresence>
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
                {language === 'pl' ? 'Przejdź do' : 'Jump to'}
              </div>
              {portfolioData.detailedSkills.map((category, idx) => {
                const id = category.category.en.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                const isActive = activeSection === id;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveSection(prev => prev === id ? "" : id);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={`text-left px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                      isActive 
                        ? "bg-primary/10 text-primary font-bold shadow-sm" 
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    }`}
                  >
                    {category.category[language as 'pl' | 'en']}
                  </button>
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
