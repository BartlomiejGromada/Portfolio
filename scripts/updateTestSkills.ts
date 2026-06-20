import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const updates: Record<string, { pl: string; en: string }> = {
  "Unit Testing": {
    pl: "To moja pierwsza linia obrony. Izoluję poszczególne metody i klasy, aby w ułamku sekundy upewnić się, że rdzeń logiki biznesowej działa bezbłędnie. Szybki feedback podczas pisania kodu drastycznie skraca czas szukania bugów.",
    en: "It's my first line of defense. I isolate individual methods and classes to ensure in a fraction of a second that the core business logic works flawlessly. Fast feedback while writing code drastically reduces the time spent looking for bugs."
  },
  "Integration Testing": {
    pl: "Kod rzadko żyje w próżni. Testy integracyjne dają mi pewność, że backend bezbłędnie współpracuje z bazą danych, kolejkami wiadomości czy zewnętrznymi API. To one weryfikują realne, wieloetapowe scenariusze użytkownika.",
    en: "Code rarely lives in a vacuum. Integration tests give me the certainty that the backend cooperates flawlessly with the database, message queues, or external APIs. They are the ones that verify real, multi-stage user scenarios."
  },
  "Arrange-Act-Assert (AAA)": {
    pl: "Kod testowy to też kod i musi być czytelny. Stosując ten wzorzec, dbam o to, by każdy test miał przejrzystą strukturę: najpierw przygotowuję dane, potem wykonuję akcję, a na końcu sprawdzam wynik. Każdy deweloper w zespole od razu wie, co dany test weryfikuje.",
    en: "Test code is also code and must be readable. By applying this pattern, I ensure that each test has a transparent structure: first I prepare the data, then I execute the action, and finally I check the result. Every developer on the team immediately knows what a given test verifies."
  },
  "Test-Driven Development (TDD)": {
    pl: "Sięgam po TDD, gdy implementuję skomplikowane algorytmy lub dobrze zdefiniowane reguły biznesowe. Pisanie testu przed kodem zmusza mnie do głębokiego przemyślenia architektury i interfejsu danej klasy, zanim jeszcze zacznę pisać właściwą logikę.",
    en: "I reach for TDD when implementing complex algorithms or well-defined business rules. Writing a test before the code forces me to deeply think through the architecture and interface of a given class before I even start writing the actual logic."
  },
  "Test Isolation": {
    pl: "Walczę z tzw. \"flaky tests\" – testami, które raz przechodzą, a raz nie. Dbam o to, aby każdy test sam sprzątał po sobie w bazie danych i był całkowicie niezależny od kolejności uruchamiania czy stanu środowiska. Test ma dawać 100% pewny i powtarzalny wynik.",
    en: "I fight against so-called 'flaky tests' – tests that pass sometimes and fail others. I ensure that each test cleans up after itself in the database and is completely independent of the execution order or environment state. A test must provide a 100% certain and repeatable result."
  },
  "xUnit": {
    pl: "Mój domyślny i sprawdzony w bojach framework w ekosystemie .NET. Cenię go za nowoczesne podejście, elastyczność oraz doskonałe wsparcie dla testów parametryzowanych ([Theory]), co pozwala mi przetestować wiele skrajnych przypadków (edge cases) za pomocą jednej metody.",
    en: "My default and battle-tested framework in the .NET ecosystem. I value it for its modern approach, flexibility, and excellent support for parameterized tests ([Theory]), which allows me to test many edge cases using a single method."
  },
  "Testcontainers": {
    pl: "To absolutny game-changer w testach integracyjnych. Zamiast bawić się w podrabianie (mockowanie) bazy danych albo stawiać ją \"na stałe\" lokalnie, Testcontainers automatycznie podnosi dla mnie prawdziwego SQL Servera lub PostgreSa w Dockerze na czas trwania testów i niszczy go po ich zakończeniu. Testuję na realnym środowisku.",
    en: "It's an absolute game-changer in integration testing. Instead of playing around with mocking the database or setting it up 'permanently' locally, Testcontainers automatically spins up a real SQL Server or PostgreSQL in Docker for the duration of the tests and destroys it after they finish. I test in a real environment."
  },
  "Moq": {
    pl: "Kiedy piszę testy jednostkowe, odcinam zewnętrzne zależności (np. serwisy pogodowe czy bazy danych). Za pomocą Moq błyskawicznie tworzę obiekty pozorowane i symuluję ich zachowania oraz rzucane błędy, sprawdzając, jak reaguje na nie testowany komponent.",
    en: "When I write unit tests, I cut off external dependencies (e.g., weather services or databases). Using Moq, I instantly create mock objects and simulate their behavior and thrown errors, checking how the tested component reacts to them."
  },
  "Bogus": {
    pl: "Koniec z pisaniem na sztywno User1, TestAddress czy 999-999-999. Bogus pozwala mi w locie generować setki linii realistycznych, losowych danych (prawdziwe imiona, maile, numery PESEL). Dzięki temu moje testy są znacznie bardziej zbliżone do realiów produkcyjnych i często wyłapują błędy, o których sam bym nie pomyślał.",
    en: "No more hardcoding User1, TestAddress, or 999-999-999. Bogus allows me to generate hundreds of lines of realistic, random data on the fly (real names, emails, national ID numbers). Thanks to this, my tests are much closer to production realities and often catch bugs I wouldn't have thought of myself."
  }
};

async function main() {
  const categoryId = "6a2d3d1605465e09aff1f792"; // Testing
  
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
    data: { items: updatedItems }
  });

  console.log("Successfully updated testing skills!");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
