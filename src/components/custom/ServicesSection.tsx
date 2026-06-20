"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Server, ShieldCheck, Database, Cpu } from "lucide-react";

export function ServicesSection() {
  const { language } = useLanguage();
  const isPl = language === "pl";

  const services = [
    {
      id: "backend",
      icon: Server,
      title: {
        pl: "Projektowanie stabilnego backendu i API",
        en: "Stable Backend & API Design",
      },
      description: {
        pl: "Tworzę czyste, bezpieczne i wydajne REST API w .NET, dbając o standardy i przejrzystą dokumentację.",
        en: "I create clean, secure, and efficient REST APIs in .NET, ensuring standards and clear documentation.",
      },
    },
    {
      id: "architecture",
      icon: ShieldCheck,
      title: {
        pl: "Architektura i jakość kodu",
        en: "Architecture & Code Quality",
      },
      description: {
        pl: "Implementuję wzorce Clean Architecture, CQRS i Domain-Driven Design (DDD). Piszę kod, który łatwo się testuje i rozwija w zespole.",
        en: "I implement Clean Architecture, CQRS, and Domain-Driven Design (DDD) patterns. I write code that is easy to test and develop in a team.",
      },
    },
    {
      id: "database",
      icon: Database,
      title: {
        pl: "Optymalizacja baz danych",
        en: "Database Optimization",
      },
      description: {
        pl: "Projektuję struktury relacyjne i nierelacyjne. Znam triki optymalizacyjne, potrafię okiełznać wolne zapytania SQL, dobrać odpowiednie indeksy i wdrożyć caching.",
        en: "I design relational and non-relational structures. I know optimization tricks, can tame slow SQL queries, choose appropriate indexes, and implement caching.",
      },
    },
    {
      id: "ai",
      icon: Cpu,
      title: {
        pl: "Automatyzacja AI-assisted Development",
        en: "AI-Assisted Development",
      },
      description: {
        pl: "Nie rezygnuję z tradycyjnego rzemiosła, ale podkręcam swoje tempo pracy. Wykorzystuję zaawansowany Prompt Engineering i agentów AI do automatyzacji powtarzalnych zadań, szybkiego prototypowania i testowania.",
        en: "I don't give up on traditional craftsmanship, but I boost my work pace. I use advanced Prompt Engineering and AI agents to automate repetitive tasks, rapid prototyping, and testing.",
      },
    },
  ];

  return (
    <section className="w-full py-24 px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-125 bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              {service.title[isPl ? "pl" : "en"]}
            </h3>

            <p className="text-muted-foreground leading-relaxed flex-1">
              {service.description[isPl ? "pl" : "en"]}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
