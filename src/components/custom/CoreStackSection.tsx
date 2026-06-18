"use client";

import { motion } from "framer-motion";
import { Server, Code2, Layers, Layout, FileCode2, Palette, Blocks, Database } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const techStack = [
  { name: ".NET", icon: Server },
  { name: "C#", icon: Code2 },
  { name: "React", icon: Layers },
  { name: "Next.js", icon: Layout },
  { name: "TypeScript", icon: FileCode2 },
  { name: "Tailwind CSS", icon: Palette },
  { name: "Clean Architecture", icon: Blocks },
  { name: "CQRS", icon: Database },
];

// Duplicate the array to create a seamless infinite loop
const marqueeItems = [...techStack, ...techStack];

export function CoreStackSection() {
  const { language } = useLanguage();
  const isPl = language === 'pl';

  return (
    <section className="w-full py-16 bg-background border-t border-border/50 overflow-hidden relative">
      {/* Subtle fade edges for the marquee effect */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 mb-8 text-center">
        <h3 className="text-sm uppercase tracking-widest font-semibold text-muted-foreground">
          {isPl ? "Główny Stack i Architektura" : "Core Stack & Architecture"}
        </h3>
      </div>

      <div className="flex relative w-full overflow-hidden">
        <motion.div
          className="flex space-x-8 md:space-x-12 w-max px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
        >
          {marqueeItems.map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="flex items-center space-x-3 px-6 py-3 bg-secondary/20 rounded-full border border-border/50 hover:border-primary/50 hover:bg-secondary/40 transition-colors whitespace-nowrap group"
            >
              <tech.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              <span className="font-medium text-foreground/90 tracking-wide text-sm md:text-base">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
