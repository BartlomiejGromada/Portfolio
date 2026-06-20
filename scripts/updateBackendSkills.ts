import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updates: Record<string, { pl: string; en: string }> = {
  "Clean Architecture": {
    pl: "Izoluję kluczową logikę biznesową od zewnętrznych frameworków, baz danych czy bibliotek. Dzięki temu, gdy pojawia się potrzeba zmiany bazy danych lub migracji narzędzi, system przechodzi przez to bezbolesnie, a sam kod jest niezwykle prosty w testowaniu.",
    en: "I isolate key business logic from external frameworks, databases, or libraries. As a result, when there's a need to change a database or migrate tools, the system transitions painlessly, and the code itself is extremely easy to test.",
  },
  "DDD (Domain-Driven Design)": {
    pl: 'Pozwala mi rozmawiać z biznesem tym samym językiem (Ubiquitous Language). Zamiast kodować "na domysły", mapuję realne procesy firmy na architekturę systemu, co eliminuje błędy w komunikacji i porządkuje złożoną logikę biznesową.',
    en: "It allows me to speak the same language with the business (Ubiquitous Language). Instead of coding by guesswork, I map real company processes to the system architecture, which eliminates communication errors and organizes complex business logic.",
  },
  "Modular Monolith": {
    pl: "To dla mnie idealny złoty środek. Daje korzyści mikroserwisów (czyste granice modułów, brak spaghetti w kodzie), ale bez ich gigantycznego kosztu infrastrukturalnego i sieciowego. Jeśli system dorośnie do mikroserwisów – wydzielenie modułu to kwestia godzin, a nie miesięcy rewolucji.",
    en: "For me, it's the perfect golden mean. It provides the benefits of microservices (clean module boundaries, no spaghetti code) without their massive infrastructure and network costs. If the system outgrows the monolith, extracting a module takes hours, not months of revolution.",
  },
  CQRS: {
    pl: "Rozdzielam operacje zapisu od odczytu, ponieważ w 90% aplikacji użytkownicy znacznie częściej czytają dane, niż je modyfikują. Dzięki temu mogę niezależnie optymalizować proste, błyskawiczne zapytania (np. przez Dapper) oraz zaawansowaną logikę transakcyjną.",
    en: "I separate write from read operations because in 90% of applications, users read data much more often than they modify it. This allows me to independently optimize simple, lightning-fast queries (e.g., via Dapper) and advanced transactional logic.",
  },
  SOLID: {
    pl: 'Traktuję te zasady jak higienę pracy. Zapobiegają powstawaniu tzw. "kodu-domina", w którym zmiana jednej małej funkcji psuje trzy inne, pozornie niezwiązane części aplikacji.',
    en: "I treat these principles like work hygiene. They prevent the creation of so-called 'domino code', where changing one small function breaks three other seemingly unrelated parts of the application.",
  },
  OOP: {
    pl: "To fundament, który pozwala mi modelować rzeczywiste obiekty biznesowe w kodzie w sposób uporządkowany, reużywalny i zrozumiały dla całego zespołu.",
    en: "It's the foundation that allows me to model real business objects in code in an organized, reusable, and understandable way for the whole team.",
  },
  "Design Patterns": {
    pl: "Nie wymyślam koła na nowo. Wykorzystuję sprawdzone w branży schematy (np. Factory, Strategy, Mediator), aby kod był standaryzowany i łatwy do czytania dla każdego nowego dewelopera w projekcie.",
    en: "I don't reinvent the wheel. I use industry-proven patterns (e.g., Factory, Strategy, Mediator) so the code is standardized and easy to read for any new developer joining the project.",
  },
  REST: {
    pl: "Buduję API, które jest intuicyjne, przewidywalne i bezstanowe. Dobrze zaprojektowane punkty końcowe (endpoints) i spójne kody statusów HTTP to podstawa płynnej współpracy z zespołem frontendowym.",
    en: "I build APIs that are intuitive, predictable, and stateless. Well-designed endpoints and consistent HTTP status codes are the foundation of smooth collaboration with the frontend team.",
  },
  "OAuth2 / JWT": {
    pl: "Bezpieczeństwo nie jest opcją dodatkową. Stosuję te standardy, aby zapewnić bezkompromisową, bezstanową i bezpieczną autoryzację użytkowników oraz zabezpieczyć aplikację przed nieautoryzowanym dostępem.",
    en: "Security is not an optional extra. I use these standards to ensure uncompromising, stateless, and secure user authorization and to protect the application against unauthorized access.",
  },
};

async function main() {
  const categoryId = "6a2d3d1605465e09aff1f78e"; // Backend

  const category = await prisma.skillCategory.findUnique({
    where: { id: categoryId },
  });

  if (!category) {
    console.error("Category not found");
    return;
  }

  const updatedItems = category.items.map((item) => {
    // 1. Update subcategory title
    if (item.subcategory?.pl === "Podejścia i Metodologie") {
      item.subcategory.pl = "Podejścia i Metodologie";
      item.subcategory.en = "Approaches & Methodologies";
    }

    // 2. Update description if there's a match
    const update = updates[item.name];
    if (update) {
      item.description = update;
    }

    return item;
  });

  await prisma.skillCategory.update({
    where: { id: categoryId },
    data: { items: updatedItems },
  });

  console.log("Successfully updated backend skills!");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
