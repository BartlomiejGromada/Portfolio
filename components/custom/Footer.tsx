"use client";

import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="w-full border-t border-border bg-background mt-auto">
      <div className="max-w-7xl mx-auto px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-1.5 text-2xl font-bold tracking-tighter"
        >
          <Zap className="w-6 h-6 text-primary fill-primary" />
          <span>
            gromada<span className="text-primary">dev</span>
          </span>
        </Link>

        {/* Links */}
        <div className="flex items-center space-x-6 text-sm text-foreground/80">
          <Link
            href={portfolioData.socialLinks.linkedin}
            target="_blank"
            className="hover:text-primary transition-colors"
          >
            {t("footer.linkedin")}
          </Link>
          <Link
            href={portfolioData.socialLinks.github}
            target="_blank"
            className="hover:text-primary transition-colors"
          >
            {t("footer.github")}
          </Link>

          <Link
            href={portfolioData.socialLinks.github}
            target="_blank"
            className="hover:text-primary transition-colors"
          >
            {t("footer.sourceCode")}
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-sm text-foreground/60">
          © {new Date().getFullYear()}, Bartłomiej Gromada
        </div>
      </div>
    </footer>
  );
}
