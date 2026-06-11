"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Server, AppWindow, Cloud } from "lucide-react";
import { motion } from "framer-motion";

export function FeaturesSection() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Server className="w-6 h-6 text-primary" />,
      title: t("features.backend"),
      subtitle: t("features.backendSub"),
    },
    {
      icon: <AppWindow className="w-6 h-6 text-primary" />,
      title: t("features.frontend"),
      subtitle: t("features.frontendSub"),
    },
    {
      icon: <Cloud className="w-6 h-6 text-primary" />,
      title: t("features.cloud"),
      subtitle: t("features.cloudSub"),
    },
  ];

  return (
    <div className="w-full bg-secondary/10 border-y border-border/50">
      <section className="w-full py-20 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              key={index}
              className="flex flex-col justify-between bg-card border border-border p-8 rounded-2xl hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:border-border/80 group"
            >
              <div className="mb-12">
                <div className="p-2.5 inline-flex rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  {feature.icon}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground/80 font-semibold">
                  {feature.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
