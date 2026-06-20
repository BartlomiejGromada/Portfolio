import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const updates: Record<string, { pl: string; en: string }> = {
  "Agile / Scrum": {
    pl: "Cenię zwinność za to, że pozwala nam szybko reagować na feedback od użytkowników i zmieniające się potrzeby rynku. Aktywnie uczestniczę w codziennych spotkaniach, planowaniach i retrospektywach, traktując je jako narzędzia do stałego podnoszenia jakości naszej pracy i eliminowania przeszkód.",
    en: "I value agility because it allows us to quickly respond to user feedback and changing market needs. I actively participate in daily meetings, planning sessions, and retrospectives, treating them as tools for constantly improving the quality of our work and eliminating obstacles."
  },
  "Technical Documentation": {
    pl: "Dobry kod częściowo dokumentuje się sam, ale decyzje architektoniczne wymagają kontekstu. Regularnie tworzę i aktualizuję dokumentację, opisy struktur danych czy pliki README. Wychodzę z założenia, że oszczędza to godziny pracy każdemu, kto dołączy do projektu w przyszłości.",
    en: "Good code partially documents itself, but architectural decisions require context. I regularly create and update documentation, data structure descriptions, or README files. I assume this saves hours of work for anyone who joins the project in the future."
  },
  "Cross-functional Collaboration": {
    pl: "Nie zamykam się w \"bańce\" backendu. Rozmawiam z designerami o ograniczeniach technicznych przed zakodowaniem interfejsu i z biznesem o tym, co jest realnie potrzebne na już (MVP), a co można odłożyć w czasie. Taki dialog eliminuje błędy na styku technologia-biznes.",
    en: "I don't lock myself in a backend 'bubble'. I talk with designers about technical limitations before coding the interface and with the business about what is realistically needed right now (MVP) and what can be postponed. Such a dialogue eliminates errors at the technology-business intersection."
  },
  "Requirements Analysis": {
    pl: "Zanim zacznę pisać pierwszą linię kodu, upewniam się, że dokładnie rozumiem problem. Zadawanie właściwych pytań na etapie analizy pozwala mi wykryć logiczne sprzeczności w wymaganiach i zaoszczędzić tygodnie pracy nad poprawianiem źle zaprojektowanej funkcjonalności.",
    en: "Before I start writing the first line of code, I make sure I thoroughly understand the problem. Asking the right questions at the analysis stage allows me to detect logical contradictions in requirements and save weeks of work on fixing poorly designed functionality."
  },
  "Jira": {
    pl: "Moje codzienne narzędzie do organizacji pracy. Dbam o to, by statusy moich zadań były zawsze aktualne, a opisy zgłoszeń i komentarze – konkretne i jasne dla PM-ów oraz testerów.",
    en: "My daily tool for work organization. I ensure that the statuses of my tasks are always up to date, and the issue descriptions and comments are specific and clear for PMs and testers."
  },
  "Confluence": {
    pl: "Moja \"baza wiedzy\" w projekcie. Używam go do spisywania ustaleń technicznych, dokumentowania architektury API czy tworzenia instrukcji wdrożeniowych, dzięki czemu kluczowe informacje nigdy nie giną w gąszczu wiadomości.",
    en: "My 'knowledge base' in a project. I use it to write down technical agreements, document API architecture, or create deployment instructions, ensuring that key information never gets lost in a maze of messages."
  },
  "Slack": {
    pl: "Stawiam na asynchroniczną, ale dynamiczną i precyzyjną komunikację. Wykorzystuję wątki, dbam o transparentność na kanałach projektowych i sprawnie przekazuję statusy, aby nie generować niepotrzebnych przestojów.",
    en: "I prioritize asynchronous, yet dynamic and precise communication. I use threads, care for transparency on project channels, and efficiently communicate statuses to avoid generating unnecessary downtime."
  },
  "Miro": {
    pl: "Idealna cyfrowa tablica do modelowania procesów biznesowych (np. podczas sesji Event Storming) oraz wizualizacji architektury modularnej. Pomaga mi poukładać myśli i schematy, zanim trafią one do kodu.",
    en: "An ideal digital whiteboard for modeling business processes (e.g., during Event Storming sessions) and visualizing modular architecture. It helps me organize thoughts and schemas before they turn into code."
  },
  "Figma": {
    pl: "Nie czekam na gotowe obrazki do skopiowania. Samodzielnie analizuję makiety w Figmie, sprawdzam marginesy, wyciągam tokeny projektowe (kolory, typografię) i upewniam się, że zakodowany frontend idealnie odzwierciedla wizję projektanta UI/UX.",
    en: "I don't wait for ready images to copy. I independently analyze mockups in Figma, check margins, extract design tokens (colors, typography), and ensure that the coded frontend perfectly reflects the UI/UX designer's vision."
  }
};

const categoryDescription = {
  pl: "Skuteczne tworzenie oprogramowania wymaga nie tylko sprawnych palców na klawiaturze, ale przede wszystkim precyzyjnej komunikacji. Na co dzień płynnie współpracuję z biznesem, analitykami, projektantami UI/UX oraz innymi deweloperami. Angażuję się w cały proces dostarczania wartości – od pierwszej burzy mózgów i analizy wymagań, aż po stabilne wdrożenie, dbając o to, by cały zespół grał do jednej bramki.",
  en: "Effective software development requires not only nimble fingers on the keyboard, but above all, precise communication. On a daily basis, I seamlessly collaborate with business, analysts, UI/UX designers, and other developers. I engage in the entire value delivery process – from the initial brainstorming and requirements analysis to stable deployment, ensuring that the whole team plays towards a common goal."
};

async function main() {
  const categoryId = "6a2d3d1605465e09aff1f794"; // Collaboration
  
  const category = await prisma.skillCategory.findUnique({
    where: { id: categoryId }
  });

  if (!category) {
    console.error("Category not found");
    return;
  }

  const updatedItems = category.items.map(item => {
    const update = updates[item.name];
    if (update) {
      item.description = update;
    }
    return item;
  });

  await prisma.skillCategory.update({
    where: { id: categoryId },
    data: { 
      description: categoryDescription,
      items: updatedItems 
    }
  });

  console.log("Successfully updated Collaboration skills!");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
