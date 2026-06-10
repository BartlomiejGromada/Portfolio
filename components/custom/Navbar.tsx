"use client";

import Link from "next/link";
import { Zap } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { portfolioData } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const { t, language, setLanguage } = useLanguage();

  return (
    <nav className="w-full flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-1.5 text-2xl font-bold tracking-tighter">
        <Zap className="w-6 h-6 text-primary fill-primary" />
        <span>gromada<span className="text-primary">dev</span></span>
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
        <Link
          href="/"
          className="text-primary border-b-2 border-primary pb-1 uppercase"
        >
          {t("nav.home")}
        </Link>
        <Link
          href="#about"
          className="text-foreground/80 hover:text-primary transition-colors pb-1 uppercase"
        >
          {t("nav.about")}
        </Link>
        <Link
          href="#skills"
          className="text-foreground/80 hover:text-primary transition-colors pb-1 uppercase"
        >
          {t("nav.skills")}
        </Link>
        <Link
          href="#education"
          className="text-foreground/80 hover:text-primary transition-colors pb-1 uppercase"
        >
          {t("nav.education")}
        </Link>
        <Link
          href="#career"
          className="text-foreground/80 hover:text-primary transition-colors pb-1 uppercase"
        >
          {t("nav.career")}
        </Link>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <Link
            href={portfolioData.socialLinks.github}
            target="_blank"
            className="p-2.5 border border-transparent rounded-full hover:border-border hover:bg-secondary/30 hover:text-primary transition-colors group"
          >
            <GithubIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </Link>
          <Link
            href={portfolioData.socialLinks.linkedin}
            target="_blank"
            className="p-2.5 border border-transparent rounded-full hover:border-border hover:bg-secondary/30 hover:text-primary transition-colors group"
          >
            <LinkedinIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </Link>
        </div>

        <div className="w-px h-6 bg-border/80" />

        <ThemeToggle />
        
        <button
          onClick={() => setLanguage(language === "pl" ? "en" : "pl")}
          className="font-mono text-sm font-bold tracking-wider hover:text-primary transition-colors border border-border px-3 py-1.5 rounded-full bg-secondary/30 ml-1"
          aria-label="Toggle language"
        >
          {language === "pl" ? "EN" : "PL"}
        </button>
      </div>
    </nav>
  );
}
