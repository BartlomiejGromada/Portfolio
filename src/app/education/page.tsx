"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { usePortfolio } from "@/context/PortfolioContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Award,
  Calendar,
  BookOpen,
  Sparkles,
  Building2,
  Zap,
  ExternalLink,
  FileText,
  Download,
} from "lucide-react";
import { TableOfContents } from "@/components/custom/TableOfContents";
import Link from "next/link";
import { GithubIcon } from "@/components/custom/icons";

export default function EducationPage() {
  const { language } = useLanguage();
  const portfolioData = usePortfolio();
  const [activeSection, setActiveSection] = useState("");

  const isPl = language === "pl";
  const langKey = isPl ? "pl" : "en";

  const sections = [
    {
      id: "academic",
      title: { pl: "Edukacja akademicka", en: "Academic Education" },
    },
    {
      id: "certificates",
      title: { pl: "Certyfikaty i Szkolenia", en: "Certificates & Training" },
    },
  ];

  const academicData = portfolioData.education;
  const certificatesData = portfolioData.certificates;

  return (
    <div className="min-h-screen bg-background pt-24 pb-16 px-8">
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col xl:flex-row gap-8 relative">
        {/* Lewa kolumna: Główna treść */}
        <div className="flex-1 w-full max-w-5xl mx-auto">
          {/* Nagłówek */}
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
                      {isPl ? "Edukacja" : "Education"}
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mb-12">
                      {isPl
                        ? "Informatyka to branża, w której zatrzymanie się oznacza cofanie się. Studia dały mi solidny fundament inżynierski i teoretyczny, ale to ciągły głód wiedzy, eksplorowanie nowych wzorców architektonicznych i testowanie najnowszych rozwiązań technologicznych napędzają mój codzienny rozwój."
                        : "Computer science is an industry where stopping means going backward. My studies gave me a solid engineering and theoretical foundation, but it's my constant thirst for knowledge, exploring new architectural patterns, and testing the latest technological solutions that fuel my daily development."}
                    </p>

                    {/* Statystyki / Edukacja w liczbach */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
                      <div className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 flex flex-col items-start text-left shadow-sm hover:border-primary/50 hover:shadow-[0_0_20px_-10px_rgba(var(--primary),0.2)] transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 shrink-0">
                          <GraduationCap className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-bold text-lg mb-3 leading-tight">
                          {isPl ? "Tytuł mgr inż. | Informatyka" : "M.Sc. Eng. | Computer Science"}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                          {isPl
                            ? "Przejście pełnej ścieżki akademickiej pozwoliło mi połączyć twardą wiedzę algorytmiczną i systemową z elastycznym podejściem menedżerskim do projektów IT."
                            : "Completing the full academic path allowed me to combine hard algorithmic and system knowledge with a flexible managerial approach to IT projects."}
                        </p>
                      </div>
                      <div className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 flex flex-col items-start text-left shadow-sm hover:border-primary/50 hover:shadow-[0_0_20px_-10px_rgba(var(--primary),0.2)] transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 shrink-0">
                          <BookOpen className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-bold text-lg mb-3 leading-tight">
                          {isPl ? "Dwie prace dyplomowe | Praktyka ponad teorię" : "Two Theses | Practice Over Theory"}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                          {isPl
                            ? "Zamiast pisać do szuflady, postawiłem na realny kod: stworzyłem natywną aplikację mobilną dla biegaczy oraz przeprowadziłem rzetelne badania nad modularnym monolitem jako stabilną alternatywą dla systemów rozproszonych."
                            : "Instead of writing for the drawer, I focused on real code: I created a native mobile app for runners and conducted solid research on a modular monolith as a stable alternative to distributed systems."}
                        </p>
                      </div>
                      <div className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 flex flex-col items-start text-left shadow-sm hover:border-primary/50 hover:shadow-[0_0_20px_-10px_rgba(var(--primary),0.2)] transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 shrink-0">
                          <Zap className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-bold text-lg mb-3 leading-tight">
                          {isPl ? "Certyfikat Google | Umiejętności Jutra: AI" : "Google Certificate | Skills of Tomorrow: AI"}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                          {isPl
                            ? "Aktywnie wdrażam narzędzia sztucznej inteligencji do codziennej pracy inżynierskiej. Program pozwolił mi usystematyzować wiedzę z zakresu Prompt Engineeringu i budowy agentów AI automatyzujących procesy."
                            : "I actively implement artificial intelligence tools in my daily engineering work. The program allowed me to systematize my knowledge of Prompt Engineering and building AI agents that automate processes."}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Spis treści (Mobile/Tablet Only) */}
          <TableOfContents
            sections={sections}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            language={language as "pl" | "en"}
            isMobile={true}
            showOverview={false}
          />

          {/* Aktywna kategoria */}
          <div className="space-y-16">
            <AnimatePresence mode="wait">
              {(activeSection === "academic" || activeSection === "") && (
                <motion.div
                  key="academic"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-8 border-b border-border/50 pb-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-xl text-primary">
                        <GraduationCap className="w-8 h-8" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold">
                        {isPl ? "Edukacja akademicka" : "Academic Education"}
                      </h2>
                    </div>
                    <p className="text-lg text-muted-foreground max-w-3xl md:ml-[4.5rem]">
                      {isPl
                        ? "Wykształcenie akademickie, które ukształtowało moje podejście do projektowania i tworzenia oprogramowania."
                        : "Academic education that shaped my approach to software design and development."}
                    </p>
                  </div>

                  <div className="space-y-8">
                    {academicData.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-colors shadow-sm hover:shadow-md relative overflow-hidden group"
                      >
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-primary/80" />
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                              {item.degree[langKey]}
                            </h3>
                            <div className="flex items-center text-muted-foreground gap-2 mb-1">
                              <Building2 className="w-4 h-4 shrink-0" />
                              <span className="font-medium text-foreground/80">
                                {item.institution[langKey]}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center text-primary/80 bg-primary/10 px-3 py-1.5 rounded-lg shrink-0 w-fit">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span className="text-sm font-semibold">
                              {item.period[langKey]}
                            </span>
                          </div>
                        </div>

                        {item.thesisTitle && (
                          <div className="mb-6 bg-secondary/30 p-4 rounded-xl border border-border/50">
                            <div className="flex items-start gap-3 mb-3">
                              <BookOpen className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                              <div>
                                <span className="text-sm text-muted-foreground uppercase tracking-wider font-semibold block mb-1">
                                  {isPl ? "Praca dyplomowa" : "Thesis"}
                                </span>
                                <span className="font-medium text-foreground italic">
                                  "
                                  {item.thesisTitle[langKey]?.replace(/"/g, "")}
                                  "
                                </span>
                              </div>
                            </div>
                            {item.description && (
                              <p className="text-muted-foreground leading-relaxed ml-8 text-sm">
                                {item.description[langKey]}
                              </p>
                            )}
                          </div>
                        )}

                        <div className="flex items-center gap-4">
                          {item.github && (
                            <Link
                              href={item.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background font-semibold rounded-xl hover:bg-foreground/90 transition-colors shadow-sm"
                            >
                              <GithubIcon className="w-5 h-5" />
                              {isPl ? "Zobacz na GitHub" : "View on GitHub"}
                            </Link>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {(activeSection === "certificates" || activeSection === "") && (
                <motion.div
                  key="certificates"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-8 border-b border-border/50 pb-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-xl text-primary">
                        <Award className="w-8 h-8" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold">
                        {isPl
                          ? "Certyfikaty i Szkolenia"
                          : "Certificates & Training"}
                      </h2>
                    </div>
                    <p className="text-lg text-muted-foreground max-w-3xl md:ml-[4.5rem]">
                      {isPl
                        ? "Ciągły rozwój zawodowy poprzez kursy, szkolenia i certyfikacje związane z inżynierią oprogramowania, AI oraz rozwiązaniami chmurowymi."
                        : "Continuous professional development through courses, training, and certifications related to software engineering, AI, and cloud solutions."}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    {certificatesData.map((cert, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className={`relative p-6 md:p-8 rounded-2xl border transition-all duration-300 ${
                          cert.highlight
                            ? "bg-gradient-to-br from-primary/10 via-background to-background border-primary/40 shadow-[0_0_30px_-5px_rgba(var(--primary),0.15)] ring-1 ring-primary/20"
                            : "bg-card border-border/50 hover:border-primary/50"
                        }`}
                      >
                        {cert.highlight && (
                          <div className="absolute top-0 right-0 p-6 opacity-20 pointer-events-none">
                            <Sparkles className="w-32 h-32 text-primary" />
                          </div>
                        )}

                        <div className="relative z-10">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                            <h3 className="text-2xl font-bold text-foreground">
                              {cert.title[langKey]}
                            </h3>
                            <div className="flex items-center text-primary/80 bg-primary/10 px-3 py-1.5 rounded-lg shrink-0 w-fit">
                              <Calendar className="w-4 h-4 mr-2" />
                              <span className="text-sm font-semibold">
                                {cert.date[langKey]}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 mb-4">
                            <Award className="w-5 h-5 text-primary" />
                            <span className="font-semibold text-muted-foreground">
                              {cert.organizer[langKey]}
                            </span>
                          </div>

                          <p className="text-muted-foreground leading-relaxed mb-6">
                            {cert.description[langKey]}
                          </p>

                          <div className="flex items-center gap-4 flex-wrap">
                            {cert.certificateUrl &&
                              cert.certificateUrl[langKey] !== "#" &&
                              cert.certificateUrl[langKey] !== "" && (
                                <Link
                                  href={cert.certificateUrl[langKey]}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary font-semibold rounded-lg hover:bg-primary/20 transition-colors w-fit border border-primary/20"
                                >
                                  <Download className="w-4 h-4" />
                                  {isPl
                                    ? "Pobierz Certyfikat"
                                    : "Download Certificate"}
                                </Link>
                              )}

                            {cert.supplementUrl &&
                              cert.supplementUrl[langKey] !== "#" &&
                              cert.supplementUrl[langKey] !== "" && (
                                <Link
                                  href={cert.supplementUrl[langKey]}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/80 transition-colors w-fit border border-border/50"
                                >
                                  <Download className="w-4 h-4" />
                                  {isPl
                                    ? "Pobierz Suplement"
                                    : "Download Supplement"}
                                </Link>
                              )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
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
          desktopClassName="xl:translate-x-16"
        />
      </div>
    </div>
  );
}
