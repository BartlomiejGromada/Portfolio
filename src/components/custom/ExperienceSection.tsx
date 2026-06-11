"use client";

import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-background">
      <section id="experience" className="w-full py-24 px-8 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            {t("experience.title")}
          </h2>
          <div className="w-24 h-1.5 bg-primary/80 rounded-full" />
        </motion.div>

        <div className="border-l-2 border-border/50 ml-4 md:ml-6 space-y-12">
          {portfolioData.experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[21px] top-1 w-10 h-10 bg-background border-2 border-primary/30 rounded-full flex items-center justify-center shadow-sm">
                <Briefcase className="w-4 h-4 text-primary" />
              </div>

              {/* Content */}
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">
                  {job.role}
                </h3>
                <span className="text-xs md:text-sm font-mono text-muted-foreground bg-secondary/30 px-3 py-1 rounded-full w-fit">
                  {job.date}
                </span>
              </div>
              
              <div className="text-primary font-semibold mb-4 text-lg">
                {job.company}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {job.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {job.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-secondary/50 hover:bg-secondary text-secondary-foreground text-xs font-semibold rounded-md transition-colors border border-border/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
