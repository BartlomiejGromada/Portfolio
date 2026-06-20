import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.project.deleteMany();

  await prisma.project.create({
    data: {
      title: {
        pl: "Modularny Monolit API dla Portalu Pracy",
        en: "Modular Monolith API for Job Portal"
      },
      description: {
        pl: "W skrócie: Alternatywa dla mikroserwisów, która nie generuje zbędnego overheadu sieciowego i infrastrukturalnego.\n\nStory: Projekt powstał jako odpowiedź na problem rosnącego skomplikowania systemów rozproszonych. Udowadniam nim, że dobrze zaprojektowany, odizolowany modularny monolit pozwala na równoległą pracę wielu deweloperów bez bólu głowy związanego z mikroserwisami. System opiera się na wyraźnych granicach kontekstów biznesowych (Bounded Contexts) i komunikacji sterowanej zdarzeniami.",
        en: "In short: An alternative to microservices that doesn't generate unnecessary network and infrastructure overhead.\n\nStory: The project was created in response to the growing complexity of distributed systems. I prove that a well-designed, isolated modular monolith allows parallel work of many developers without the headaches associated with microservices. The system relies on clear boundaries of business contexts (Bounded Contexts) and event-driven communication."
      },
      technologies: [".NET", "Modular Monolith", "DDD", "CQRS (MediatR)", "Clean Architecture", "MS SQL Server"],
      githubUrl: "https://github.com/bartlomiejgromada97",
      iconName: "Server",
      featured: true,
      orderIndex: 0
    }
  });

  await prisma.project.create({
    data: {
      title: {
        pl: "Aplikacja Mobilna dla Biegaczy",
        en: "Mobile App for Runners"
      },
      description: {
        pl: "W skrócie: Lekki, bezkompromisowy asystent treningowy stworzony z myślą o biegaczach.\n\nStory: Największym wyzwaniem było precyzyjne zbieranie danych GPS w czasie rzeczywistym przy jednoczesnym dbaniu o optymalizację zużycia baterii urządzenia. Aplikacja oferuje czysty, minimalistyczny interfejs pozbawiony rozpraszaczy – liczy się tylko bieg, tempo i dystans. Po zakończeniu treningu system natychmiast generuje przejrzyste podsumowania i wykresy.",
        en: "In short: A lightweight, uncompromising training assistant designed for runners.\n\nStory: The biggest challenge was collecting precise real-time GPS data while simultaneously optimizing device battery consumption. The app offers a clean, minimalist interface free of distractions – only the run, pace, and distance matter. After finishing a workout, the system immediately generates clear summaries and charts."
      },
      technologies: ["Java", "Firebase", "Google Maps API", "GPS Tracking"],
      githubUrl: "https://github.com/bartlomiejgromada97",
      iconName: "Smartphone",
      featured: true,
      orderIndex: 1
    }
  });

  await prisma.project.create({
    data: {
      title: {
        pl: "Minimalistyczne Portfolio Dewelopera",
        en: "Minimalist Developer Portfolio"
      },
      description: {
        pl: "W skrócie: Szybka, responsywna strona wizytówkowa z dynamicznym backendem i płynnym UX.\n\nStory: Moje własne miejsce w sieci (gromada.dev), zaprojektowane z naciskiem na User Experience i najwyższą wydajność (Core Web Vitals). Zamiast gotowych szablonów postawiłem na pełną kontrolę nad kodem za pomocą React 19 i Tailwind CSS, a subtelne animacje Framer Motion nadają całości nowoczesny, organiczny charakter. Dane o projektach i statystykach zarządzane są dynamicznie.",
        en: "In short: A fast, responsive business card website with a dynamic backend and smooth UX.\n\nStory: My own place on the web (gromada.dev), designed with a focus on User Experience and peak performance (Core Web Vitals). Instead of pre-made templates, I opted for full code control using React 19 and Tailwind CSS, and subtle Framer Motion animations give the whole thing a modern, organic feel. Data about projects and stats are managed dynamically."
      },
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "MongoDB", "Prisma"],
      githubUrl: "https://github.com/bartlomiejgromada97",
      iconName: "Layout",
      featured: true,
      orderIndex: 2
    }
  });

  console.log("Projects updated successfully");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
