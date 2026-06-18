import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Clearing old projects...');
  await prisma.project.deleteMany();

  console.log('Seeding Projects...');
  await prisma.project.createMany({
    data: [
      {
        title: {
          en: "Modular Monolith Job Board API",
          pl: "Modularny Monolit API dla Portalu Pracy"
        },
        description: {
          en: "An advanced REST API for job offers, designed as an alternative to microservices. Implements complex software architecture patterns ensuring high scalability and maintainability.",
          pl: "Zaawansowane REST API dla ofert pracy, zaprojektowane jako alternatywa dla mikroserwisów. Implementuje złożone wzorce architektoniczne zapewniając wysoką skalowalność i łatwość utrzymania."
        },
        technologies: [".NET 8", "Modular Monolith", "Domain-Driven Design (DDD)", "CQRS", "Clean Architecture", "PostgreSQL"],
        githubUrl: "https://github.com/BartlomiejGromada/JobOffersApi",
        iconName: "Rocket",
        featured: true,
        orderIndex: 0
      },
      {
        title: {
          en: "Mobile App for Runners",
          pl: "Aplikacja Mobilna dla Biegaczy"
        },
        description: {
          en: "A comprehensive mobile application designed to track, manage, and analyze running training sessions, tailored for athletes.",
          pl: "Kompleksowa aplikacja mobilna zaprojektowana do śledzenia, zarządzania i analizowania sesji treningowych, stworzona z myślą o sportowcach."
        },
        technologies: ["Mobile Development", "C#", ".NET", "API", "GPS Tracking"],
        githubUrl: "https://github.com/BartlomiejGromada/RunMobileApp",
        iconName: "Layout",
        featured: true,
        orderIndex: 1
      },
      {
        title: {
          en: "Minimalist Dev Portfolio",
          pl: "Minimalistyczne Portfolio Dewelopera"
        },
        description: {
          en: "My personal portfolio website showcasing my projects and skills, built with the latest React 19 and Next.js features.",
          pl: "Moja osobista strona portfolio prezentująca moje projekty i umiejętności, zbudowana z wykorzystaniem najnowszych funkcji React 19 i Next.js."
        },
        technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion"],
        githubUrl: "https://github.com/BartlomiejGromada/Portfolio",
        iconName: "Code2",
        featured: false,
        orderIndex: 2
      }
    ]
  });

  console.log('Done!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
