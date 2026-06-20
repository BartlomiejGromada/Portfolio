import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const updates: Record<string, { pl: string; en: string }> = {
  "Relational Database Design": {
    pl: "Dobrze zaprojektowany schemat bazy danych to fundament, który chroni projekt przed chaosem. Stosuję reguły normalizacji, aby wyeliminować redundancję i zapewnić integralność danych, ale potrafię też świadomie wprowadzić denormalizację tam, gdzie wymaga tego krytyczna wydajność odczytów.",
    en: "A well-designed database schema is the foundation that protects a project from chaos. I apply normalization rules to eliminate redundancy and ensure data integrity, but I can also consciously introduce denormalization where critical read performance requires it."
  },
  "Database Optimization": {
    pl: "Wolna baza danych potrafi zabić najlepszą aplikację. Analizuję plany wykonań zapytań (Execution Plans), aby namierzyć wąskie gardła, a następnie precyzyjnie dobieram indeksy (klastrowane, nieklastrowane, pokrywające), unikając jednocześnie ich nadmiaru, który spowolniłby zapisy.",
    en: "A slow database can kill the best application. I analyze query Execution Plans to pinpoint bottlenecks, and then precisely select indexes (clustered, non-clustered, covering) while avoiding an excess of them, which would slow down writes."
  },
  "Data Caching Strategies": {
    pl: "Najszybsze zapytanie do bazy danych to takie, którego nie trzeba wykonywać. Wdrażam strategie pamięci podręcznej (np. Cache-Aside), aby odciążyć główną bazę danych i serwować najczęściej odczytywane, statyczne dane w ułamku milisekundy.",
    en: "The fastest database query is the one you don't have to execute. I implement caching strategies (e.g., Cache-Aside) to offload the main database and serve the most frequently read, static data in a fraction of a millisecond."
  },
  "Database Transactions (ACID)": {
    pl: "W operacjach biznesowych (szczególnie finansowych czy magazynowych) nie ma miejsca na błędy. Zarządzam transakcjami tak, aby operacje zapisu były atomowe i spójne – dane w moim systemie są bezpieczne nawet w środowiskach o potężnej współbieżności.",
    en: "In business operations (especially financial or warehouse ones) there is no room for errors. I manage transactions so that write operations are atomic and consistent – the data in my system is safe even in environments with massive concurrency."
  },
  "MS SQL Server": {
    pl: "Mój główny system bazodanowy w ekosystemie .NET. Cenię go za bezkompromisową stabilność klasy enterprise, potężny silnik optymalizacyjny oraz świetne narzędzia diagnostyczne (SSMS, Profiler), które ułatwiają monitorowanie kondycji bazy.",
    en: "My primary database system in the .NET ecosystem. I value it for uncompromising enterprise-grade stability, a powerful optimization engine, and excellent diagnostic tools (SSMS, Profiler) that make it easy to monitor database health."
  },
  "PostgreSQL": {
    pl: "Mój pierwszy wybór w projektach open-source. Uwielbiam go za elastyczność, świetną wydajność i natywne wsparcie dla typów JSON/JSONB. Pozwala mi to na eleganckie łączenie świata relacyjnego z zaletami baz dokumentowych w obrębie jednej bazy.",
    en: "My first choice for open-source projects. I love it for its flexibility, great performance, and native support for JSON/JSONB types. This allows me to elegantly combine the relational world with the advantages of document databases within a single database."
  },
  "Redis": {
    pl: "Sięgam po niego zawsze, gdy liczy się każda mikrosekunda. Działa u mnie jako ultraszybki, rozproszony cache, magazyn sesji lub mechanizm blokad dystrybuowanych (Distributed Locking), eliminując opóźnienia tam, gdzie tradycyjny dysk twardy staje się ograniczeniem.",
    en: "I reach for it whenever every microsecond counts. It acts as my ultra-fast, distributed cache, session store, or distributed locking mechanism, eliminating delays where a traditional hard drive becomes a bottleneck."
  },
  "NoSQL (Firebase / MongoDB)": {
    pl: "Wybieram je, gdy natura danych wymaga elastyczności (brak sztywnego schematu) lub gdy buduję rozwiązania wymagające natychmiastowej synchronizacji w czasie rzeczywistym. Idealnie sprawdzają się przy szybkim prototypowaniu i składowaniu polimorficznych dokumentów.",
    en: "I choose them when the nature of the data requires flexibility (no rigid schema) or when building solutions requiring instant real-time synchronization. They are ideal for rapid prototyping and storing polymorphic documents."
  },
  "T-SQL / pgSQL": {
    pl: "Nie ograniczam się do samego ORM-a. Znam języki proceduralne obu tych silników, co pozwala mi na pisanie zaawansowanych, wydajnych zapytań, optymalizację procedur składowanych (Stored Procedures) oraz tworzenie widoków, które przenoszą ciężkie kalkulacje bliżej danych.",
    en: "I don't limit myself to just an ORM. I know the procedural languages of both these engines, allowing me to write advanced, efficient queries, optimize Stored Procedures, and create views that bring heavy calculations closer to the data."
  }
};

async function main() {
  const categoryId = "6a2d3d1605465e09aff1f790"; // Database
  
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

  console.log("Successfully updated database skills!");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
