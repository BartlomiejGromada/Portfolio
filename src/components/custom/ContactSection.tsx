"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Link from "next/link";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-background relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
      
      <section id="contact" className="w-full py-32 px-8 max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col items-center text-center"
        >
          <div className="mb-6 inline-flex p-3 rounded-2xl bg-primary/10 text-primary">
            <Mail className="w-8 h-8" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            {t("contact.title")}
          </h2>
          
          <h3 className="text-xl md:text-2xl font-semibold text-foreground/80 mb-6">
            {t("contact.subtitle")}
          </h3>

          <p className="text-muted-foreground max-w-xl text-lg mb-10">
            {t("contact.description")}
          </p>

          <Link
            href="mailto:hello@example.com"
            className="group flex items-center justify-center space-x-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all tracking-wider hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/25 w-full sm:w-auto text-base md:text-lg"
          >
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>{t("contact.button")}</span>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
