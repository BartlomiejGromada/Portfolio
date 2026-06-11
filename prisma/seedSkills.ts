import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const skillsData = [
  {
    category: { pl: "Backend", en: "Backend" },
    iconName: "Server",
    items: [
      { name: "C#", description: { pl: "Główny język programowania do tworzenia logiki serwerowej.", en: "Main programming language for server-side logic." } },
      { name: ".NET", description: { pl: "Wszechstronna platforma do budowania wydajnych i bezpiecznych aplikacji.", en: "Versatile framework for building performant and secure applications." } },
      { name: "ASP.NET Core", description: { pl: "Framework do tworzenia nowoczesnych aplikacji webowych i API REST.", en: "Framework for modern web apps and RESTful APIs." } },
      { name: "Entity Framework Core", description: { pl: "Zarządzanie relacyjnymi bazami danych za pomocą podejścia ORM.", en: "Managing relational databases using ORM." } },
      { name: "Dapper", description: { pl: "Lekki i niezwykle szybki micro-ORM do złożonych zapytań SQL.", en: "Lightweight and extremely fast micro-ORM for complex SQL queries." } },
      { name: "SignalR", description: { pl: "Umożliwia komunikację w czasie rzeczywistym między serwerem a klientem.", en: "Enables real-time communication between server and client." } },
      { name: "Quartz", description: { pl: "Narzędzie do tworzenia i zarządzania powtarzalnymi zadaniami w tle.", en: "Tool for scheduling and managing background jobs." } },
      { name: "Swagger", description: { pl: "Narzędzie do automatycznego dokumentowania i testowania API REST.", en: "Tool for automated REST API documentation and testing." } },
      { name: "Automapper", description: { pl: "Zautomatyzowane mapowanie danych między modelami (DTO).", en: "Automated data mapping between models (DTOs)." } },
      { name: "Polly", description: { pl: "Zapewnia odporność na awarie i stabilność połączeń (np. ponawianie żądań).", en: "Ensures resilience and transient-fault-handling (e.g., retries)." } },
      { name: "FluentValidation", description: { pl: "Tworzenie złożonych, przejrzystych reguł walidacji obiektów.", en: "Creating complex, readable object validation rules." } },
      { name: "Serilog", description: { pl: "Rozbudowany system logowania danych, niezbędny w debugowaniu.", en: "Advanced logging system essential for debugging." } },
      { name: "OOP", description: { pl: "Programowanie zorientowane obiektowo pozwalające na tworzenie modularnego kodu.", en: "Object-oriented programming for modular code design." } },
      { name: "Design Patterns", description: { pl: "Sprawdzone wzorce projektowe ułatwiające rozwiązywanie typowych problemów architektonicznych.", en: "Proven patterns to solve common architectural problems." } },
      { name: "CQRS", description: { pl: "Rozdzielenie logiki zapisu (Command) od logiki odczytu (Query).", en: "Separation of write operations (Command) from read operations (Query)." } },
      { name: "DDD", description: { pl: "Architektura oparta na modelowaniu biznesowym w skomplikowanych domenach.", en: "Domain-Driven Design for complex business modeling." } },
      { name: "SOLID", description: { pl: "Pięć fundamentalnych zasad pisania czystego, skalowalnego i łatwego w utrzymaniu kodu.", en: "Five core principles for clean, scalable, and maintainable code." } },
      { name: "REST", description: { pl: "Standard architektury do projektowania komunikacji w usługach webowych.", en: "Architectural standard for designing web services communication." } }
    ]
  },
  {
    category: { pl: "Frontend", en: "Frontend" },
    iconName: "AppWindow",
    items: [
      { name: "JavaScript", description: { pl: "Podstawowy język dodający interaktywność na stronach internetowych.", en: "Core language adding interactivity to web pages." } },
      { name: "TypeScript", description: { pl: "Typowana nakładka na JS, drastycznie zmniejszająca liczbę błędów w kodzie.", en: "Typed superset of JS, drastically reducing bugs." } },
      { name: "React", description: { pl: "Biblioteka do budowania dynamicznych interfejsów użytkownika z komponentów.", en: "Library for building dynamic, component-based user interfaces." } },
      { name: "React Native (basic)", description: { pl: "Tworzenie natywnych aplikacji mobilnych przy użyciu technologii React.", en: "Building native mobile applications using React." } },
      { name: "Vite", description: { pl: "Ultraszybkie narzędzie do kompilacji projektów frontendowych.", en: "Ultra-fast build tool for frontend projects." } },
      { name: "TanStack", description: { pl: "Narzędzia do zarządzania stanem asynchronicznym (React Query) oraz tabelami.", en: "Tools for async state management (React Query) and tables." } },
      { name: "React Hook Form", description: { pl: "Wydajne zarządzanie formularzami i ich stanem w React.", en: "Performant form and state management in React." } },
      { name: "Zod", description: { pl: "Walidacja i deklaracja schematów danych oparta na TypeScript.", en: "TypeScript-first schema declaration and validation." } },
      { name: "CSS/SCSS", description: { pl: "Stylowanie aplikacji i wdrażanie zaawansowanych układów wizualnych.", en: "Styling applications and implementing advanced visual layouts." } },
      { name: "Material UI", description: { pl: "Gotowe, kompleksowe biblioteki komponentów zgodne z Material Design.", en: "Comprehensive component library based on Material Design." } },
      { name: "Shadcn UI", description: { pl: "Kolekcja przepięknych, wysoce edytowalnych komponentów Tailwind.", en: "Collection of beautiful, highly customizable Tailwind components." } },
      { name: "Zustand", description: { pl: "Lekkie i nowoczesne narzędzie do globalnego zarządzania stanem w React.", en: "Lightweight and modern global state management tool for React." } },
      { name: "Redux", description: { pl: "Zaawansowane zarządzanie skomplikowanym stanem w ogromnych aplikacjach.", en: "Advanced state management for complex, large-scale apps." } }
    ]
  },
  {
    category: { pl: "Databases", en: "Databases" },
    iconName: "Database",
    items: [
      { name: "MS SQL Server", description: { pl: "Główna relacyjna baza danych wykorzystywana w ekosystemie .NET.", en: "Main relational database used in the .NET ecosystem." } },
      { name: "PostgreSQL", description: { pl: "Zaawansowana baza danych open-source o dużych możliwościach analitycznych.", en: "Advanced open-source database with great analytical capabilities." } },
      { name: "Redis", description: { pl: "Ultraszybka baza in-memory stosowana głównie do cache'owania danych.", en: "Ultra-fast in-memory database mainly used for caching." } },
      { name: "NoSQL (Firebase, MongoDB)", description: { pl: "Nierelacyjne bazy do elastycznego przechowywania danych JSON oraz synchronizacji w czasie rzeczywistym.", en: "Non-relational databases for flexible JSON storage and real-time sync." } }
    ]
  },
  {
    category: { pl: "AI", en: "AI" },
    iconName: "Smartphone",
    items: [
      { name: "Prompt Engineering basics", description: { pl: "Projektowanie i optymalizacja zapytań, by zmaksymalizować użyteczność i skuteczność modeli sztucznej inteligencji.", en: "Designing and optimizing prompts to maximize the effectiveness of AI models." } }
    ]
  },
  {
    category: { pl: "Testing", en: "Testing" },
    iconName: "Wrench",
    items: [
      { name: "Unit Testing", description: { pl: "Testowanie pojedynczych funkcji pod kątem logiki biznesowej.", en: "Testing individual functions for business logic accuracy." } },
      { name: "Integration Testing", description: { pl: "Sprawdzanie współpracy wielu komponentów systemu ze sobą.", en: "Verifying the cooperation of multiple system components." } },
      { name: "xUnit", description: { pl: "Nowoczesny framework do tworzenia testów w ekosystemie .NET.", en: "Modern testing framework in the .NET ecosystem." } },
      { name: "Moq", description: { pl: "Narzędzie do tworzenia atrap (mocków) obiektów w celu izolacji testów.", en: "Tool for creating mock objects to isolate test contexts." } },
      { name: "Testcontainers", description: { pl: "Tworzenie tymczasowych instancji Dockera z bazami danych do testów integracyjnych.", en: "Throwaway, lightweight instances of databases via Docker for testing." } },
      { name: "Bogus", description: { pl: "Generowanie realistycznych danych testowych (tzw. fake data).", en: "Generating realistic fake data for testing." } },
      { name: "Arrange-Act-Assert", description: { pl: "Wzorzec projektowania testów zwiększający ich czytelność.", en: "Test design pattern improving readability and structure." } }
    ]
  },
  {
    category: { pl: "DevOps & Tools", en: "DevOps & Tools" },
    iconName: "Cloud",
    items: [
      { name: "Docker", description: { pl: "Konteneryzacja aplikacji, zapewniająca ich działanie w każdym środowisku.", en: "Containerizing applications to run consistently across environments." } },
      { name: "Azure DevOps", description: { pl: "Zarządzanie kodem, automatyzacją i procesem budowania w środowisku Microsoft.", en: "Source code management, automation, and CI/CD pipelines in MS environment." } },
      { name: "Git (GitHub, GitLab)", description: { pl: "System kontroli wersji do bezkolizyjnej współpracy w zespołach.", en: "Version control system for seamless team collaboration." } },
      { name: "CI/CD", description: { pl: "Automatyzacja procesów testowania i wdrażania (Continuous Integration / Continuous Deployment).", en: "Automated testing and deployment pipelines." } }
    ]
  },
  {
    category: { pl: "Project Management", en: "Project Management" },
    iconName: "Building2",
    items: [
      { name: "Jira", description: { pl: "Śledzenie zadań i zarządzanie projektami w metodologii Agile/Scrum.", en: "Issue tracking and project management in Agile/Scrum." } },
      { name: "Confluence", description: { pl: "Tworzenie oraz utrzymywanie dokumentacji projektowej i technicznej.", en: "Creating and maintaining project and technical documentation." } },
      { name: "Slack", description: { pl: "Szybka, zorganizowana komunikacja w zespole projektowym.", en: "Fast, organized team communication." } },
      { name: "Miro", description: { pl: "Wizualne burze mózgów i planowanie architektury na wirtualnych tablicach.", en: "Visual brainstorming and architecture planning on virtual whiteboards." } },
      { name: "Figma", description: { pl: "Projektowanie interfejsów UI/UX i przekazywanie ich do rąk deweloperów.", en: "UI/UX design and developer handoff." } }
    ]
  }
];

async function main() {
  console.log("Seeding detailed skills data into MongoDB...");

  // Remove existing categories
  await prisma.skillCategory.deleteMany();

  // Insert new categories with localized item descriptions
  for (const [index, skillCategory] of skillsData.entries()) {
    await prisma.skillCategory.create({
      data: {
        category: skillCategory.category,
        iconName: skillCategory.iconName,
        orderIndex: index,
        items: skillCategory.items
      }
    });
  }

  console.log("Successfully seeded 7 detailed skill categories.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
