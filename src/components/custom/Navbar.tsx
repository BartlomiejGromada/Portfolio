"use client";

import { useState } from "react";
import Link from "next/link";
import { Zap, Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { portfolioData } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "#about", label: t("nav.about") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#education", label: t("nav.education") },
    { href: "#career", label: t("nav.career") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="w-full flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-1.5 text-2xl font-bold tracking-tighter">
        <Zap className="w-6 h-6 text-primary fill-primary" />
        <span>gromada<span className="text-primary">dev</span></span>
      </Link>

      {/* Navigation Links (Desktop) */}
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-foreground/80 hover:text-primary transition-colors pb-1 uppercase"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 md:gap-4">
        <div className="hidden sm:flex items-center gap-1">
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

        <div className="hidden sm:block w-px h-6 bg-border/80" />

        <ThemeToggle />
        
        <button
          onClick={() => setLanguage(language === "pl" ? "en" : "pl")}
          className="font-mono text-sm font-bold tracking-wider hover:text-primary transition-colors border border-border px-3 py-1.5 rounded-full bg-secondary/30 ml-1"
          aria-label="Toggle language"
        >
          {language === "pl" ? "EN" : "PL"}
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-foreground/80 hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-border/50 py-4 px-8 flex flex-col space-y-4 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors uppercase py-2"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 pt-4 border-t border-border/50">
            <Link
              href={portfolioData.socialLinks.github}
              target="_blank"
              className="p-2 border border-border rounded-full hover:bg-secondary/30 hover:text-primary transition-colors"
            >
              <GithubIcon className="w-5 h-5" />
            </Link>
            <Link
              href={portfolioData.socialLinks.linkedin}
              target="_blank"
              className="p-2 border border-border rounded-full hover:bg-secondary/30 hover:text-primary transition-colors"
            >
              <LinkedinIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
