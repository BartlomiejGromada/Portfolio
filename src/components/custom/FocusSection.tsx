"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Target, Blocks, Layers, Cloud, ShieldCheck, BookOpen } from "lucide-react";

export function FocusSection() {
  const { t } = useLanguage();

  const icons = [Target, Blocks, Layers, Cloud, ShieldCheck, BookOpen];

  // We have to extract the items array from translations
  // In our translation file, `t("focus.items")` will not work directly to return an array in a type-safe way if we use a simple string getter.
  // Wait, `t` returns a string. Our LanguageContext `t` function:
  // Usually we map over an array. Let's look at how we implemented `t` in LanguageContext.
  // Actually, `t` just splits by dot. If it's an array, we can return the array or we can just access them by index.
  // Let's create an array of indices [0, 1, 2, 3, 4, 5] and map them.

  return (
    <div className="w-full bg-background">
      <section id="focus" className="w-full py-24 px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            {t("focus.title")}
          </h2>
          <div className="w-24 h-1.5 bg-primary/80 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto auto-rows-fr">
          {[0, 1, 2, 3, 4, 5].map((index) => {
            const IconComponent = icons[index];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col h-full bg-card/20 border border-border p-8 rounded-2xl hover:border-primary/40 hover:bg-card/40 transition-all duration-300 group"
              >
                <div className="mb-6 inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                  <IconComponent className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground tracking-tight mb-3">
                  {t(`focus.items.${index}.title`)}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed flex-1">
                  {t(`focus.items.${index}.description`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
