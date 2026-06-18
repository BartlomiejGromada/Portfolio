"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Server, Layout, ShieldCheck } from "lucide-react";

export function ServicesSection() {
  const { language } = useLanguage();
  const isPl = language === 'pl';

  const services = [
    {
      id: "backend",
      icon: Server,
      title: {
        pl: "Projektowanie Backendowe",
        en: "Backend Engineering",
      },
      description: {
        pl: "Tworzę bezpieczne i testowalne API. Specjalizuję się w architekturze monolitów modułowych oraz optymalizacji baz danych.",
        en: "I create secure and testable APIs. I specialize in modular monolith architecture and database optimization.",
      }
    },
    {
      id: "frontend",
      icon: Layout,
      title: {
        pl: "Nowoczesny Frontend",
        en: "Modern Frontend",
      },
      description: {
        pl: "Buduję szybkie, zoptymalizowane pod kątem SEO i wydajności aplikacje w React/Next.js, dbając o intuicyjne UX i estetyczny design.",
        en: "I build fast, SEO and performance-optimized applications in React/Next.js, ensuring intuitive UX and aesthetic design.",
      }
    },
    {
      id: "practices",
      icon: ShieldCheck,
      title: {
        pl: "Dbam o architekturę i jakość",
        en: "Architecture & Quality",
      },
      description: {
        pl: "Wykorzystuję zaawansowane wzorce projektowe (DDD, CQRS). Piszę czysty, łatwy w utrzymaniu kod zgodny z zasadami SOLID.",
        en: "I use advanced design patterns (DDD, CQRS). I write clean, maintainable code following SOLID principles.",
      }
    }
  ];

  return (
    <section className="w-full py-24 px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
          {isPl ? "W czym mogę pomóc?" : "How Can I Help?"}
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {isPl 
            ? "Rozumiem, że programowanie to nie tylko kod. To dostarczanie wartościowych i przemyślanych rozwiązań." 
            : "I understand that programming is more than just code. It's about delivering valuable and well-thought-out solutions."}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="group p-8 bg-card rounded-3xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_-15px_rgba(var(--primary),0.3)] flex flex-col h-full relative overflow-hidden"
          >
            {/* Subtle corner glow on hover */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-colors duration-500 opacity-0 group-hover:opacity-100" />

            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <service.icon className="w-7 h-7 text-primary" />
            </div>

            <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
              {service.title[isPl ? 'pl' : 'en']}
            </h3>

            <p className="text-muted-foreground leading-relaxed flex-1">
              {service.description[isPl ? 'pl' : 'en']}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
