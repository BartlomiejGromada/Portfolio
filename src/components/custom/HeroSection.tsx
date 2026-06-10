"use client";

import { motion, Variants } from "framer-motion";
import { FileText } from "lucide-react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { CodeWindow } from "./CodeWindow";
import { useLanguage } from "@/context/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full flex-1 flex items-center justify-center px-8 py-8 md:py-12 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
        {/* Left Column - Content */}
        <motion.div
          className="flex flex-col items-start space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status Badge */}
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-3 bg-secondary/30 px-4 py-2 rounded-full border border-border-ghost"
          >
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </div>
            <span className="text-sm font-mono tracking-wider">
              {t("hero.availability")}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants} className="space-y-2">
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tighter leading-[1.1]">
              {t("hero.greeting")}{" "}
              <span className="text-primary">{portfolioData.name}</span>,<br />
              {t("hero.title")}
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-foreground/80 max-w-xl leading-relaxed"
          >
            {t("hero.description")}
          </motion.p>

          {/* Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 pt-4"
          >
            <Link
              href="#projects"
              className="flex items-center justify-center bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-semibold hover:bg-primary/90 transition-all tracking-wider hover:-translate-y-0.5 w-full sm:w-auto sm:min-w-[180px] text-sm md:text-base"
            >
              <span>{t("hero.viewProjects")}</span>
            </Link>

            <Link
              href="/resume.pdf"
              target="_blank"
              className="group flex items-center justify-center space-x-2 bg-secondary/30 backdrop-blur-md border border-border-ghost text-foreground px-8 py-3.5 rounded-full font-semibold transition-all tracking-wider hover:bg-secondary/50 hover:-translate-y-0.5 hover:shadow-lg w-full sm:w-auto sm:min-w-[180px] text-sm md:text-base"
            >
              <FileText className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>{t("hero.resumeBtn")}</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Column - Code Window */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="w-full relative"
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full transform scale-90 -z-10" />
          <CodeWindow />
        </motion.div>
      </div>
    </section>
  );
}
