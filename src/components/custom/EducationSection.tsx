"use client";

import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export function EducationSection() {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-secondary/10 border-y border-border/50">
      <section id="education" className="w-full py-24 px-8 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            {t("education.title")}
          </h2>
          <div className="w-24 h-1.5 bg-primary/80 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch auto-rows-fr">
          {portfolioData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col bg-card border border-border p-8 rounded-2xl hover:border-primary/50 transition-colors duration-300 group shadow-sm h-full relative overflow-hidden"
            >
              <div className="mb-6 inline-flex p-3 rounded-xl bg-primary/10 text-primary self-start group-hover:scale-110 transition-transform">
                <GraduationCap className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold text-foreground tracking-tight mb-4">
                {edu.degree}
              </h3>

              <div className="flex-1">
                <div className="flex items-start gap-3 text-muted-foreground mb-3">
                  <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                  <span className="leading-snug">{edu.institution}</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border/50 flex items-center gap-3 text-sm font-mono text-muted-foreground font-semibold">
                <Calendar className="w-4 h-4" />
                {edu.period}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
