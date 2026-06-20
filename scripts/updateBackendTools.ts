import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const updates: Record<string, { pl: string; en: string }> = {
  "C#": {
    pl: "Mój główny język wyboru. Uwielbiam jego silne typowanie, nowoczesną składnię i to, jak z każdą kolejną wersją (jak .NET 8 czy .NET 10) pozwala pisać coraz szybszy, bardziej ekspresyjny kod przy mniejszym nakładzie pracy.",
    en: "My primary language of choice. I love its strong typing, modern syntax, and how with each new version (like .NET 8 or .NET 10) it allows writing faster, more expressive code with less effort."
  },
  ".NET": {
    pl: "To bezkompromisowa, cross-platformowa maszyna bojowa. Wybieram tę platformę ze względu na jej gigantyczną wydajność, bezpieczeństwo klasy enterprise oraz ekosystem, który pozwala błyskawicznie przechodzić od pomysłu do wdrożenia produkcyjnego.",
    en: "It's an uncompromising, cross-platform war machine. I choose this platform for its massive performance, enterprise-grade security, and an ecosystem that allows for lightning-fast transitions from idea to production deployment."
  },
  "ASP.NET Core": {
    pl: "Mój fundament pod budowę chmurowych aplikacji i REST API. Cenię go za niesamowity serwer Kestrel oraz wbudowane mechanizmy Dependency Injection, routingu i zabezpieczeń, które pozwalają mi skupić się na dostarczaniu logiki biznesowej.",
    en: "My foundation for building cloud applications and REST APIs. I value it for the incredible Kestrel server and built-in Dependency Injection, routing, and security mechanisms that let me focus on delivering business logic."
  },
  "Entity Framework Core": {
    pl: "Przyspieszam pracę z bazą danych, eliminując pisanie powtarzalnego kodu SQL dla standardowych operacji CRUD. Używam go świadomie – dbam o poprawne śledzenie encji (AsNoTracking) i kontroluję generowane pod spodem zapytania.",
    en: "I accelerate database work by eliminating repetitive SQL code for standard CRUD operations. I use it consciously – I ensure proper entity tracking (AsNoTracking) and control the underlying generated queries."
  },
  "LINQ": {
    pl: "Drastycznie zwiększa czytelność mojego kodu. Pozwala mi operować na kolekcjach danych i bazach w sposób deklaratywny i silnie typowany, eliminując potworki w postaci zagnieżdżonych pętli foreach.",
    en: "It drastically increases the readability of my code. It allows me to operate on data collections and databases in a declarative and strongly typed way, eliminating monstrosities in the form of nested foreach loops."
  },
  "Dapper": {
    pl: "Wkracza tam, gdzie EF Core staje się zbyt ciężki. Używam tego micro-ORM-a w architekturze CQRS po stronie odczytów (Queries), aby pisać surowe, perfekcyjnie zoptymalizowane zapytania SQL o zerowym narzucie wydajnościowym.",
    en: "It steps in where EF Core becomes too heavy. I use this micro-ORM in the CQRS architecture on the read side (Queries) to write raw, perfectly optimized SQL queries with zero performance overhead."
  },
  "MediatR": {
    pl: "To serce mojej implementacji CQRS. Dzięki niemu całkowicie odchudzam kontrolery API – żądania trafiają do dedykowanych, odizolowanych handlerów, co sprawia, że kod jest idealnie posegmentowany i banalny w testowaniu.",
    en: "It's the heart of my CQRS implementation. Thanks to it, I completely slim down API controllers – requests go to dedicated, isolated handlers, making the code perfectly segmented and trivial to test."
  },
  "SignalR": {
    pl: "Wdrażam funkcje real-time (jak powiadomienia na żywo, czaty czy dynamiczne dashboardy) bez uciążliwego odpytywania serwera (polling). Zapewnia płynne, dwukierunkowe połączenie serwera z klientem.",
    en: "I implement real-time features (like live notifications, chats, or dynamic dashboards) without cumbersome server polling. It ensures a smooth, two-way connection between the server and the client."
  },
  "Quartz": {
    pl: "Przenoszę ciężkie, powtarzalne procesy (np. generowanie raportów, wysyłkę maili) do zadań w tle. Dzięki temu użytkownik nie czeka na zakończenie operacji, a sam serwer działa stabilnie i przewidywalnie.",
    en: "I move heavy, repetitive processes (e.g., generating reports, sending emails) to background tasks. Thanks to this, the user doesn't wait for the operation to finish, and the server itself runs stably and predictably."
  },
  "RabbitMQ": {
    pl: "Wprowadzam asynchroniczność i luźne powiązanie (loose coupling) między modułami lub usługami. Jeśli jeden komponent systemu ma chwilowy przestój, RabbitMQ bezpiecznie przechowuje wiadomości, gwarantując, że żadne krytyczne dane nie zginą.",
    en: "I introduce asynchrony and loose coupling between modules or services. If one system component experiences downtime, RabbitMQ securely stores messages, guaranteeing that no critical data is lost."
  },
  "Swagger / OpenAPI": {
    pl: "Szanuję czas swój i zespołu frontendowego. Automatyczne generowanie żywej dokumentacji pozwala frontendowcom na natychmiastowe testowanie punktów końcowych bez konieczności pytania mnie \"jak wygląda ten model JSON\".",
    en: "I respect my time and the frontend team's time. Automatically generating living documentation allows frontend developers to instantly test endpoints without having to ask me 'what does this JSON model look like'."
  },
  "FluentValidation": {
    pl: "Czyszczę kod domenowy z \"ifologii\". Pozwala mi na tworzenie eleganckich, czytelnych i silnie typowanych reguł walidacji danych wejściowych, zanim jeszcze trafią one do głębszych warstw aplikacji.",
    en: "I clean domain code of 'ifology'. It allows me to create elegant, readable, and strongly typed validation rules for input data before it even reaches the deeper layers of the application."
  },
  "Polly": {
    pl: "Buduję aplikacje odporne na błędy sieciowe. Zamiast pozwolić systemowi wywalić się przy chwilowym braku odpowiedzi z zewnętrznego API, Polly automatycznie ponowi próbę (Retry) lub bezpiecznie odetnie ruch (Circuit Breaker).",
    en: "I build applications resilient to network errors. Instead of letting the system crash during a temporary lack of response from an external API, Polly will automatically retry or safely cut off traffic (Circuit Breaker)."
  },
  "Automapper": {
    pl: "Pozbywam się nudnego, powtarzalnego przepisywania właściwości z encji bazodanowych do obiektów DTO (User.Name = UserDto.Name). Jedna linijka kodu załatwia sprawę, a kod pozostaje czysty.",
    en: "I get rid of boring, repetitive copying of properties from database entities to DTO objects (User.Name = UserDto.Name). A single line of code handles it, and the code stays clean."
  },
  "Serilog": {
    pl: "Logowanie typu \"wypisz tekst\" na produkcji nie działa. Używam Seriloga do tworzenia strukturalnych logów (JSON), co pozwala na błyskawiczne filtrowanie i diagnozowanie problemów w systemach monitoringu (observability).",
    en: "'Print text' type logging doesn't work in production. I use Serilog to create structural logs (JSON), which allows for lightning-fast filtering and diagnosing problems in monitoring systems (observability)."
  }
};

async function main() {
  const categoryId = "6a2d3d1605465e09aff1f78e"; // Backend
  
  const category = await prisma.skillCategory.findUnique({
    where: { id: categoryId }
  });

  if (!category) {
    console.error("Category not found");
    return;
  }

  const updatedItems = category.items.map(item => {
    // 1. Check if we need to rename Quartz to Quartz / Hangfire
    if (item.name === "Quartz") {
      item.name = "Quartz / Hangfire";
    }

    // 2. Map old name (before rename) or current name
    let lookupName = item.name === "Quartz / Hangfire" ? "Quartz" : item.name;

    const update = updates[lookupName];
    if (update) {
      item.description = update;
    }

    return item;
  });

  await prisma.skillCategory.update({
    where: { id: categoryId },
    data: { items: updatedItems }
  });

  console.log("Successfully updated backend tools and libraries!");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
