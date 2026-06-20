"use client";

import { useLanguage } from "@/context/LanguageContext";
import { usePortfolio } from "@/context/PortfolioContext";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Link from "next/link";

export function ContactSection() {
  const { language } = useLanguage();
  const portfolioData = usePortfolio();
  const isPl = language === 'pl';
  
  const emailAddress = portfolioData.email;

  return (
    <div className="w-full bg-background relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-full max-w-2xl h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      
      <section id="contact" className="w-full py-24 px-8 max-w-4xl mx-auto relative z-10 border-t border-border/50">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col items-center text-center"
        >
          <div className="mb-6 inline-flex p-4 rounded-full bg-primary/10 text-primary ring-4 ring-primary/5">
            <Mail className="w-8 h-8" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            {isPl ? "Szukasz dewelopera do zespołu? Porozmawiajmy!" : "Looking for a developer for your team? Let's talk!"}
          </h2>

          {/* Wyraźny adres e-mail */}
          <a
            href={`mailto:${emailAddress}`}
            className="text-base sm:text-xl md:text-3xl lg:text-4xl font-mono text-primary hover:text-primary/80 transition-colors mb-12 underline decoration-primary/30 underline-offset-8 break-all sm:break-normal"
          >
            {emailAddress}
          </a>

          <p className="text-muted-foreground mb-6 font-medium tracking-wide uppercase text-sm">
            {isPl ? "Znajdź mnie w sieci" : "Find me online"}
          </p>

          <div className="flex items-center gap-6">
            <Link
              href={portfolioData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-secondary/30 border border-border/50 rounded-2xl hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all group"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="28" 
                height="28" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="group-hover:scale-110 transition-transform"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </Link>
            
            <Link
              href={portfolioData.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-secondary/30 border border-border/50 rounded-2xl hover:bg-[#0A66C2]/20 hover:text-[#0A66C2] hover:border-[#0A66C2]/50 transition-all group"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="28" 
                height="28" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="group-hover:scale-110 transition-transform"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
