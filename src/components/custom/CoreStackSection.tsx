"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Blocks, Code2, Database, Layout, Palette, Server } from "lucide-react";

const techStack = [
  { name: ".NET / C#", icon: Server },
  { name: "React / Next.js", icon: Layout },
  { name: "Clean Architecture", icon: Blocks },
  { name: "TypeScript", icon: Code2 },
  { name: "CQRS", icon: Database },
  { name: "Tailwind CSS", icon: Palette },
];

// Duplicate the array to create a seamless infinite loop
const marqueeItems = [...techStack, ...techStack];

export function CoreStackSection() {
  const { language } = useLanguage();
  const isPl = language === "pl";

  return (
    <section className="w-full py-20 bg-background border-t border-border/50 overflow-hidden relative">
      {/* Subtle fade edges for the marquee effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
          {isPl ? "Główny Stack i Architektura" : "Core Stack & Architecture"}
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {isPl
            ? "Technologie i wzorce, na których opieram swoje codzienne rozwiązania, dbając o wydajność i skalowalność."
            : "Technologies and patterns I rely on for my daily solutions, ensuring performance and scalability."}
        </p>
      </div>

      <div className="flex relative w-full overflow-hidden">
        <motion.div
          className="flex space-x-6 md:space-x-10 w-max px-4 py-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 35,
          }}
        >
          {marqueeItems.map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="flex items-center space-x-5 px-8 py-5 bg-card/80 backdrop-blur-sm rounded-2xl border-2 border-border hover:border-primary/60 hover:bg-secondary/40 transition-all duration-300 whitespace-nowrap group hover:shadow-lg hover:shadow-primary/5 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <tech.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="font-bold text-foreground tracking-wide text-lg md:text-xl">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
