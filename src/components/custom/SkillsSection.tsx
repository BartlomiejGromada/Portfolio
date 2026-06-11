"use client";

import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Server, AppWindow, Smartphone, Database, Cloud, Building2, Wrench } from "lucide-react";

const iconMap: Record<string, any> = {
  Server,
  AppWindow,
  Smartphone,
  Database,
  Cloud,
  Building2,
  Wrench,
};

export function SkillsSection() {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-secondary/10 border-y border-border/50">
      <section id="skills" className="w-full py-24 px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            {t("skills.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl text-base md:text-lg mb-6">
            {t("skills.subtitle")}
          </p>
          <div className="w-24 h-1.5 bg-primary/80 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch auto-rows-fr max-w-5xl mx-auto">
          {portfolioData.detailedSkills.map((category, index) => {
            const IconComponent = iconMap[category.iconName] || Server;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col h-full bg-card/40 backdrop-blur-sm border border-border p-6 rounded-2xl hover:border-primary/50 transition-colors duration-300 group shadow-sm"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2.5 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground tracking-tight">
                    {category.category}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2.5">
                  {category.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="px-3.5 py-1.5 bg-secondary/30 hover:bg-secondary/70 text-secondary-foreground text-sm font-medium rounded-lg transition-colors border border-border/50"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
