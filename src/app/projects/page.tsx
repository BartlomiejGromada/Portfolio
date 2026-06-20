"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { usePortfolio } from "@/context/PortfolioContext";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Code2,
  Rocket,
  Layout,
  FolderGit2,
  Server,
  Smartphone,
} from "lucide-react";
import Link from "next/link";
import { TableOfContents } from "@/components/custom/TableOfContents";

const iconMap: Record<string, React.ElementType> = {
  Rocket: Rocket,
  Layout: Layout,
  Code2: Code2,
  FolderGit2: FolderGit2,
  Server: Server,
  Smartphone: Smartphone,
};

export default function ProjectsPage() {
  const { language } = useLanguage();
  const portfolioData = usePortfolio();
  const [activeSection, setActiveSection] = useState("");
  const isPl = language === "pl";
  const langKey = isPl ? "pl" : "en";

  const projectsData = portfolioData.projects;

  return (
    <div className="min-h-screen bg-background pt-24 pb-16 px-8 relative">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-[128px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col xl:flex-row gap-8 relative">
        <div className="flex-1 w-full max-w-5xl mx-auto">
          <motion.div
            className="mb-16 pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              {isPl ? "Projekty" : "Projects"}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              {isPl
                ? "Wybrane aplikacje, które najlepiej pokazują moje podejście do kodu, architektury i designu. Nie interesuje mnie bezmyślne przepisywanie specyfikacji. W projektach szukam optymalnych wzorców, dbam o czystość struktury i płynność działania. Poniższe przykłady pokazują, jak przekładam wyzwania biznesowe na przemyślaną architekturę i nowoczesny UX."
                : "Selected applications that best demonstrate my approach to code, architecture, and design. I'm not interested in mindlessly rewriting specifications. In my projects, I seek optimal patterns, ensuring clean structure and smooth operation. The examples below demonstrate how I translate business challenges into thoughtful architecture and modern UX."}
            </p>
          </motion.div>

          {/* Spis treści (Mobile/Tablet Only) */}
          <TableOfContents
            sections={projectsData.map((p) => ({ id: p.id, title: p.title }))}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            language={language as "pl" | "en"}
            isMobile={true}
          />

          <div className="grid grid-cols-1 gap-8">
            {projectsData
              .filter((p) => !activeSection || p.id === activeSection)
              .map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`group relative flex flex-col md:flex-row gap-6 p-8 rounded-3xl border transition-all duration-300 overflow-hidden ${
                    project.featured
                      ? "bg-card border-primary/20 hover:border-primary/50 shadow-[0_0_30px_-15px_rgba(var(--primary),0.2)]"
                      : "bg-background border-border/50 hover:border-primary/30"
                  }`}
                >
                  {/* Highlight Background Effect */}
                  {project.featured && (
                    <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500 pointer-events-none" />
                  )}

                  {/* Icon Container */}
                  <div className="shrink-0 relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/50 border border-border flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {(() => {
                        const IconComponent =
                          iconMap[project.iconName] || FolderGit2;
                        return (
                          <IconComponent
                            className={`w-8 h-8 ${project.featured ? "text-primary" : "text-muted-foreground group-hover:text-foreground"}`}
                          />
                        );
                      })()}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-center relative z-10">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        {project.featured && (
                          <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider text-primary bg-primary/10 rounded-full uppercase">
                            {isPl ? "Wyróżniony projekt" : "Featured Project"}
                          </span>
                        )}
                        <h2 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                          {project.title[langKey]}
                        </h2>
                      </div>

                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 px-4 py-2.5 bg-secondary/30 rounded-xl hover:bg-primary/20 hover:text-primary transition-colors shrink-0 font-semibold text-sm"
                        aria-label="View Source on GitHub"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>{isPl ? "Repo na Github" : "GitHub Repo"}</span>
                      </Link>
                    </div>

                    <p className="text-lg text-muted-foreground leading-relaxed mb-6 whitespace-pre-line">
                      {project.description[langKey]}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1.5 text-sm font-semibold bg-secondary/40 text-secondary-foreground border border-border/50 rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Prawa kolumna: Spis treści (Sidebar) - Desktop Only */}
        <TableOfContents
          sections={projectsData.map((p) => ({ id: p.id, title: p.title }))}
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
