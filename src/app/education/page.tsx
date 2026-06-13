"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { usePortfolio } from "@/context/PortfolioContext";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Award, Calendar, BookOpen, Sparkles, Building2, Zap, ExternalLink, FileText, Download } from "lucide-react";
import Link from "next/link";
import { GithubIcon } from "@/components/custom/icons";

export default function EducationPage() {
  const { language } = useLanguage();
  const portfolioData = usePortfolio();
  const [activeSection, setActiveSection] = useState("");

  const isPl = language === 'pl';
  const langKey = isPl ? 'pl' : 'en';

  const sections = [
    { id: 'academic', title: { pl: 'Edukacja akademicka', en: 'Academic Education' } },
    { id: 'certificates', title: { pl: 'Certyfikaty i Szkolenia', en: 'Certificates & Training' } }
  ];

  const academicData = portfolioData.education;
  const certificatesData = portfolioData.certificates;

  return (
    <div className="min-h-screen bg-background pt-24 pb-16 px-8">
      <div className="max-w-5xl mx-auto relative">
        
        {/* Lewa kolumna: Główna treść */}
        <div className="w-full">
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
                        ? "Edukacja stanowi fundament mojej wiedzy technicznej i sposobu rozwiązywania problemów. Studia informatyczne pozwoliły mi zdobyć solidne podstawy z zakresu projektowania systemów, baz danych oraz inżynierii oprogramowania, natomiast dodatkowe szkolenia i certyfikaty umożliwiają mi ciągłe rozwijanie kompetencji zgodnie z aktualnymi trendami technologicznymi."
                        : "Education is the foundation of my technical knowledge and problem-solving approach. Computer science studies provided me with a solid grounding in systems design, databases, and software engineering, while additional training and certifications allow me to continuously develop my competencies in line with current technological trends."}
                    </p>

                    {/* Statystyki / Edukacja w liczbach */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
                      <div className="bg-card border border-border/50 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:border-primary/50 transition-colors">
                        <GraduationCap className="w-8 h-8 text-primary mb-4" />
                        <h3 className="font-bold text-lg mb-2">{isPl ? "Mgr inż." : "M.Sc. Eng."}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {isPl ? "Pełne wykształcenie wyższe techniczne" : "Full technical higher education"}
                        </p>
                      </div>
                      <div className="bg-card border border-border/50 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:border-primary/50 transition-colors">
                        <BookOpen className="w-8 h-8 text-primary mb-4" />
                        <h3 className="font-bold text-lg mb-2">{isPl ? "2 Prace Dyplomowe" : "2 Theses"}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {isPl ? "Oparte na realnym kodzie i architekturze" : "Based on real code and architecture"}
                        </p>
                      </div>
                      <div className="bg-card border border-border/50 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:border-primary/50 transition-colors">
                        <Zap className="w-8 h-8 text-primary mb-4" />
                        <h3 className="font-bold text-lg mb-2">{isPl ? "Certyfikat Google" : "Google Certificate"}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {isPl ? "Aktywne wdrażanie rozwiązań AI w 2026 roku" : "Active implementation of AI solutions in 2026"}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Spis treści (Mobile/Tablet Only) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="2xl:hidden sticky top-[72px] z-40 mb-6 flex flex-wrap gap-3 bg-background/90 backdrop-blur-md py-4 border-b border-border/50 shadow-sm -mx-8 px-8 md:mx-0 md:px-0 md:border-b-0 md:shadow-none"
          >
            {sections.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => {
                    setActiveSection(prev => prev === section.id ? "" : section.id);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all flex items-center border ${
                    isActive 
                      ? "bg-primary text-primary-foreground border-primary shadow-md scale-105" 
                      : "bg-secondary/20 hover:bg-primary/20 text-foreground border-border hover:border-primary/50"
                  }`}
                >
                  {section.title[isPl ? 'pl' : 'en']}
                </button>
              );
            })}
          </motion.div>

          {/* Aktywna kategoria */}
          <div className="space-y-16">
            <AnimatePresence mode="wait">
              {activeSection === 'academic' && (
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
                              <span className="font-medium text-foreground/80">{item.institution[langKey]}</span>
                            </div>
                          </div>
                          <div className="flex items-center text-primary/80 bg-primary/10 px-3 py-1.5 rounded-lg shrink-0 w-fit">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span className="text-sm font-semibold">{item.period[langKey]}</span>
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
                                  "{item.thesisTitle[langKey]?.replace(/"/g, '')}"
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

              {activeSection === 'certificates' && (
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
                        {isPl ? "Certyfikaty i Szkolenia" : "Certificates & Training"}
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
                              <span className="text-sm font-semibold">{cert.date[langKey]}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2 mb-4">
                            <Award className="w-5 h-5 text-primary" />
                            <span className="font-semibold text-muted-foreground">{cert.organizer[langKey]}</span>
                          </div>

                          <p className="text-muted-foreground leading-relaxed mb-6">
                            {cert.description[langKey]}
                          </p>
                          
                          <div className="flex items-center gap-4 flex-wrap">
                            {cert.certificateUrl && cert.certificateUrl[langKey] !== '#' && cert.certificateUrl[langKey] !== '' && (
                              <Link 
                                href={cert.certificateUrl[langKey]} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary font-semibold rounded-lg hover:bg-primary/20 transition-colors w-fit border border-primary/20"
                              >
                                <Download className="w-4 h-4" />
                                {isPl ? "Pobierz Certyfikat" : "Download Certificate"}
                              </Link>
                            )}
                            
                            {cert.supplementUrl && cert.supplementUrl[langKey] !== '#' && cert.supplementUrl[langKey] !== '' && (
                              <Link 
                                href={cert.supplementUrl[langKey]} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/80 transition-colors w-fit border border-border/50"
                              >
                                <Download className="w-4 h-4" />
                                {isPl ? "Pobierz Suplement" : "Download Supplement"}
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
        <div className="hidden 2xl:block fixed top-32 left-[calc(50%+34rem)] w-56 z-30">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-1.5 border-l border-border/50 pl-4 py-2"
          >
            <div className="text-xs uppercase tracking-wider font-bold text-foreground/50 mb-3 ml-2">
              {isPl ? 'Spis treści' : 'Table of Contents'}
            </div>
            {sections.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => {
                    setActiveSection(prev => prev === section.id ? "" : section.id);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`text-left px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                    isActive 
                      ? "bg-primary/10 text-primary font-bold shadow-sm" 
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {section.title[isPl ? 'pl' : 'en']}
                </button>
              );
            })}
          </motion.div>
        </div>

      </div>
    </div>
  );
}
