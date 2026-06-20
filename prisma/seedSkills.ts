import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const skillsData = [
  {
    category: { pl: "Backend", en: "Backend" },
    iconName: "Server",
    description: {
      pl: "W pracy z backendem stawiam na niezawodność, skalowalność i czystą architekturę. Nie sztuką jest napisać kod, który działa dzisiaj – sztuką jest napisać go tak, by za dwa lata inny deweloper mógł go bezpiecznie rozwijać. Kieruję się zasadami, które chronią projekt przed tzw. długiem technicznym.",
      en: "When working with the backend, I focus on reliability, scalability and clean architecture. It's not an art to write code that works today - the art is to write it so that another developer can safely develop it in two years. I am guided by principles that protect the project against the so-called technical debt.",
    },
    items: [
      {
        name: "Clean Architecture",
        description: {
          pl: "Strukturyzowanie projektów z wyraźnym podziałem na warstwy (Domain, Application, Infrastructure, Web) w celu odizolowania logiki biznesowej od zewnętrznych frameworków i baz danych.",
          en: "Structuring projects with a clear separation of layers (Domain, Application, Infrastructure, Web) to isolate business logic from external frameworks and databases.",
        },
        subcategory: {
          pl: "Podejścia i Metodologie",
          en: "Approaches and Methodologies",
        },
      },
      {
        name: "DDD (Domain-Driven Design)",
        description: {
          pl: "Architektura oparta na głębokim modelowaniu biznesowym, idealna do zarządzania złożoną logiką w wymagających domenach enterprise.",
          en: "Architecture based on deep business modeling, ideal for managing complex logic in demanding enterprise domains.",
        },
        subcategory: {
          pl: "Podejścia i Metodologie",
          en: "Approaches and Methodologies",
        },
      },
      {
        name: "Modular Monolith",
        description: {
          pl: "Projektowanie aplikacji jako jednej jednostki wdrożeniowej z rygorystycznym podziałem na niezależne moduły biznesowe, co zapewnia czyste granice domenowe i łatwą migrację do mikroserwisów.",
          en: "Designing the application as a single deployment unit with rigorous separation into independent business modules, ensuring clean domain boundaries and easy migration to microservices.",
        },
        subcategory: {
          pl: "Podejścia i Metodologie",
          en: "Approaches and Methodologies",
        },
      },
      {
        name: "CQRS",
        description: {
          pl: "Całkowite rozdzielenie operacji modyfikacji danych (Commands) od operacji ich odczytu (Queries), zwiększające wydajność i elastyczność systemu.",
          en: "Complete separation of data modification operations (Commands) from data reading operations (Queries), increasing system performance and flexibility.",
        },
        subcategory: {
          pl: "Podejścia i Metodologie",
          en: "Approaches and Methodologies",
        },
      },
      {
        name: "SOLID",
        description: {
          pl: "Pięć fundamentalnych zasad projektowania obiektowego, gwarantujących pisanie czystego, rozszerzalnego i łatwego w utrzymaniu kodu.",
          en: "Five fundamental object-oriented design principles ensuring clean, extensible, and maintainable code.",
        },
        subcategory: {
          pl: "Podejścia i Metodologie",
          en: "Approaches and Methodologies",
        },
      },
      {
        name: "OOP",
        description: {
          pl: "Paradygmat programowania zorientowanego obiektowo, będący fundamentem tworzenia modularnego i reużywalnego kodu.",
          en: "Object-oriented programming paradigm, forming the foundation of modular and reusable code.",
        },
        subcategory: {
          pl: "Podejścia i Metodologie",
          en: "Approaches and Methodologies",
        },
      },
      {
        name: "Design Patterns",
        description: {
          pl: "Świadome stosowanie sprawdzonych wzorców projektowych (kreacyjnych, strukturalnych i behawioralnych) w odpowiedzi na powtarzające się wyzwania inżynieryjne.",
          en: "Conscious application of proven design patterns (creational, structural, and behavioral) in response to recurring engineering challenges.",
        },
        subcategory: {
          pl: "Podejścia i Metodologie",
          en: "Approaches and Methodologies",
        },
      },
      {
        name: "REST",
        description: {
          pl: "Projektowanie spójnych, intuicyjnych i bezstanowych interfejsów API do niezawodnej komunikacji sieciowej.",
          en: "Designing consistent, intuitive, and stateless APIs for reliable network communication.",
        },
        subcategory: {
          pl: "Podejścia i Metodologie",
          en: "Approaches and Methodologies",
        },
      },
      {
        name: "OAuth2 / JWT",
        description: {
          pl: "Standardy bezpiecznego uwierzytelniania i autoryzacji użytkowników oraz zabezpieczania komunikacji między frontendem a API.",
          en: "Standards for secure user authentication and authorization, and securing communication between frontend and API.",
        },
        subcategory: {
          pl: "Podejścia i Metodologie",
          en: "Approaches and Methodologies",
        },
      },

      {
        name: "C#",
        description: {
          pl: "Główny, stale rozwijany język programowania, wykorzystywany przeze mnie do tworzenia zaawansowanej logiki serwerowej.",
          en: "The main, constantly evolving programming language I use to create advanced server logic.",
        },
        subcategory: {
          pl: "Narzędzia i Biblioteki",
          en: "Tools and Libraries",
        },
      },
      {
        name: ".NET",
        description: {
          pl: "Wszechstronna, nowoczesna i niezwykle wydajna platforma uruchomieniowa do budowania bezpiecznych aplikacji enterprise.",
          en: "A versatile, modern, and extremely efficient runtime platform for building secure enterprise applications.",
        },
        subcategory: {
          pl: "Narzędzia i Biblioteki",
          en: "Tools and Libraries",
        },
      },
      {
        name: "ASP.NET Core",
        description: {
          pl: "Zaawansowany framework do budowania nowoczesnych, chmurowych aplikacji webowych oraz interfejsów REST API.",
          en: "An advanced framework for building modern, cloud-based web applications and REST APIs.",
        },
        subcategory: {
          pl: "Narzędzia i Biblioteki",
          en: "Tools and Libraries",
        },
      },
      {
        name: "Entity Framework Core",
        description: {
          pl: "Główny system ORM do wygodnego i bezpiecznego zarządzania relacyjnymi bazami danych z poziomu kodu C#.",
          en: "The main ORM system for convenient and secure management of relational databases from C# code.",
        },
        subcategory: {
          pl: "Narzędzia i Biblioteki",
          en: "Tools and Libraries",
        },
      },
      {
        name: "LINQ",
        description: {
          pl: "Pozwala w prosty i przejrzysty sposób wykonywać operacje na danych, takie jak wyszukiwanie, filtrowanie, sortowanie i agregacja.",
          en: "It allows you to perform data operations such as searching, filtering, sorting and aggregation in a simple and transparent way.",
        },
        subcategory: {
          pl: "Narzędzia i Biblioteki",
          en: "Tools and Libraries",
        },
      },
      {
        name: "Dapper",
        description: {
          pl: "Lekki i ultraszybki micro-ORM, wykorzystywany do optymalizacji oraz wykonywania złożonych, wysokowydajnych zapytań SQL.",
          en: "A lightweight and ultra-fast micro-ORM used for optimization and executing complex, high-performance SQL queries.",
        },
        subcategory: {
          pl: "Narzędzia i Biblioteki",
          en: "Tools and Libraries",
        },
      },
      {
        name: "MediatR",
        description: {
          pl: "Biblioteka wspierająca implementację wzorca Mediator, kluczowa przy wdrażaniu czystego CQRS wewnątrzprocesowego.",
          en: "A library supporting the implementation of the Mediator pattern, crucial when implementing clean in-process CQRS.",
        },
        subcategory: {
          pl: "Narzędzia i Biblioteki",
          en: "Tools and Libraries",
        },
      },
      {
        name: "SignalR",
        description: {
          pl: "Technologia umożliwiająca dwukierunkową komunikację w czasie rzeczywistym (real-time) między serwerem a klientem.",
          en: "Technology enabling two-way, real-time communication between server and client.",
        },
        subcategory: {
          pl: "Narzędzia i Biblioteki",
          en: "Tools and Libraries",
        },
      },
      {
        name: "Quartz",
        description: {
          pl: "Rozbudowane narzędzie do harmonogramowania, tworzenia i precyzyjnego zarządzania powtarzalnymi zadaniami w tle.",
          en: "An extensive tool for scheduling, creating, and precisely managing repetitive background tasks.",
        },
        subcategory: {
          pl: "Narzędzia i Biblioteki",
          en: "Tools and Libraries",
        },
      },
      {
        name: "RabbitMQ",
        description: {
          pl: "Usprawnia komunikację między komponentami systemu poprzez asynchroniczne przesyłanie wiadomości, zwiększając skalowalność, niezawodność i odporność aplikacji na awarie.",
          en: "It improves communication between system components through asynchronous messaging, increasing application scalability, reliability, and fault tolerance.",
        },
        subcategory: {
          pl: "Narzędzia i Biblioteki",
          en: "Tools and Libraries",
        },
      },
      {
        name: "Swagger / OpenAPI",
        description: {
          pl: "Narzędzia do automatycznego generowania interaktywnej dokumentacji oraz wygodnego testowania punktów końcowych API.",
          en: "Tools for automatically generating interactive documentation and easily testing API endpoints.",
        },
        subcategory: {
          pl: "Narzędzia i Biblioteki",
          en: "Tools and Libraries",
        },
      },
      {
        name: "FluentValidation",
        description: {
          pl: "Biblioteka do tworzenia silnie typowanych, złożonych i czytelnych reguł walidacji obiektów wejściowych.",
          en: "A library for creating strongly-typed, complex, and readable validation rules for input objects.",
        },
        subcategory: {
          pl: "Narzędzia i Biblioteki",
          en: "Tools and Libraries",
        },
      },
      {
        name: "Polly",
        description: {
          pl: "Framework zapewniający odporność aplikacji na awarie poprzez mechanizmy takie jak Retry, Circuit Breaker czy Timeout.",
          en: "A framework ensuring application resilience to failures through mechanisms such as Retry, Circuit Breaker, or Timeout.",
        },
        subcategory: {
          pl: "Narzędzia i Biblioteki",
          en: "Tools and Libraries",
        },
      },
      {
        name: "Automapper",
        description: {
          pl: "Narzędzie do zautomatyzowanego i bezkonfiguracyjnego mapowania danych pomiędzy encjami domonowymi a modelami DTO.",
          en: "A tool for automated and configuration-free data mapping between domain entities and DTO models.",
        },
        subcategory: {
          pl: "Narzędzia i Biblioteki",
          en: "Tools and Libraries",
        },
      },
      {
        name: "Serilog",
        description: {
          pl: "Nowoczesny system strukturalnego logowania danych, kluczowy dla obserwowalności (observability) systemów produkcyjnych i szybkiego debugowania.",
          en: "A modern structural data logging system, crucial for the observability of production systems and fast debugging.",
        },
        subcategory: {
          pl: "Narzędzia i Biblioteki",
          en: "Tools and Libraries",
        },
      },
    ],
  },
  {
    category: { pl: "Frontend", en: "Frontend" },
    iconName: "AppWindow",
    description: {
      pl: "Buduję dynamiczne aplikacje internetowe z wykorzystaniem Reacta i TypeScript. Zależy mi na tworzeniu komponentów, które są łatwe w utrzymaniu, skalowalne oraz zapewniają użytkownikom płynne i intuicyjne doświadczenia podczas korzystania z aplikacji.",
      en: "I build dynamic web applications using React and TypeScript. I strive to create components that are easy to maintain, scalable, and provide users with a smooth and intuitive experience.",
    },
    items: [
      {
        name: "Component-Driven Development (CDD)",
        description: {
          pl: "Tworzenie interfejsów użytkownika w oparciu o niezależne, modularne i reużywalne komponenty, co przyspiesza rozwój i ułatwia utrzymanie aplikacji.",
          en: "Creating user interfaces based on independent, modular, and reusable components, which accelerates development and simplifies application maintenance.",
        },
        subcategory: {
          pl: "Podejścia i Metodologie",
          en: "Approaches and Methodologies",
        },
      },
      {
        name: "Asynchronous State Management",
        description: {
          pl: "Zaawansowane zarządzanie cyklem życia danych pobieranych z zewnętrznych API, z uwzględnieniem cache'owania, synchronizacji i optymalizacji zapytań sieciowych.",
          en: "Advanced management of the lifecycle of data fetched from external APIs, including caching, synchronization, and network query optimization.",
        },
        subcategory: {
          pl: "Podejścia i Metodologie",
          en: "Approaches and Methodologies",
        },
      },
      {
        name: "Responsive Web Design (RWD)",
        description: {
          pl: "Projektowanie i implementacja elastycznych interfejsów, które gwarantują nienaganne działanie i wygląd aplikacji na ekranach o dowolnej rozdzielczości.",
          en: "Designing and implementing flexible interfaces that ensure flawless operation and appearance of applications on screens of any resolution.",
        },
        subcategory: {
          pl: "Podejścia i Metodologie",
          en: "Approaches and Methodologies",
        },
      },
      {
        name: "Single Page Applications (SPA)",
        description: {
          pl: "Architektura aplikacji internetowych zapewniająca płynne działanie bez przeładowywania strony, symulująca wrażenia z korzystania z aplikacji desktopowych.",
          en: "Web application architecture providing smooth operation without page reloads, simulating the experience of using desktop applications.",
        },
        subcategory: {
          pl: "Podejścia i Metodologie",
          en: "Approaches and Methodologies",
        },
      },

      {
        name: "TypeScript",
        description: {
          pl: "Silnie typowana nakładka na JavaScript, stanowiąca mój standard w projektach komercyjnych w celu eliminacji błędów na etapie kompilacji.",
          en: "A strongly typed superset of JavaScript, which is my standard in commercial projects to eliminate bugs at compile time.",
        },
        subcategory: {
          pl: "Narzędzia i Biblioteki",
          en: "Tools and Libraries",
        },
      },
      {
        name: "JavaScript (ES6+)",
        description: {
          pl: "Fundamentalny język programowania webowego, wykorzystywany do implementacji logiki klienckiej i dynamicznych interakcji.",
          en: "The fundamental web programming language used to implement client-side logic and dynamic interactions.",
        },
        subcategory: {
          pl: "Narzędzia i Biblioteki",
          en: "Tools and Libraries",
        },
      },
      {
        name: "React",
        description: {
          pl: "Główna biblioteka komponentowa, w której projektuję zaawansowane, wydajne i wysoce interaktywne interfejsy użytkownika.",
          en: "The main component library where I design advanced, performant, and highly interactive user interfaces.",
        },
        subcategory: {
          pl: "Narzędzia i Biblioteki",
          en: "Tools and Libraries",
        },
      },
      {
        name: "Next.js",
        description: {
          pl: "Nowoczesny framework oparty na React, wykorzystywany do renderowania po stronie serwera (SSR) w celu optymalizacji wydajności aplikacji.",
          en: "A modern React-based framework used for server-side rendering (SSR) to optimize application performance.",
        },
        subcategory: {
          pl: "Narzędzia i Biblioteki",
          en: "Tools and Libraries",
        },
      },
      {
        name: "React Native",
        description: {
          pl: "Technologia umożliwiająca współdzielenie logiki i tworzenie natywnych aplikacji mobilnych na systemy Android oraz iOS z użyciem Reacta.",
          en: "Technology that enables sharing logic and building native mobile applications for Android and iOS using React.",
        },
        subcategory: {
          pl: "Narzędzia i Biblioteki",
          en: "Tools and Libraries",
        },
      },
      {
        name: "Vite",
        description: {
          pl: "Ultraszybkie i nowoczesne narzędzie do budowania oraz serwowania projektów frontendowych, drastycznie przyspieszające codzienną pracę.",
          en: "An ultra-fast and modern tool for building and serving frontend projects, drastically speeding up daily work.",
        },
        subcategory: {
          pl: "Narzędzia i Biblioteki",
          en: "Tools and Libraries",
        },
      },
      {
        name: "npm / pnpm",
        description: {
          pl: "Menedżery pakietów służące do efektywnego zarządzania zależnościami, skryptami automatyzującymi oraz architekturą bibliotek w projektach frontendowych.",
          en: "Package managers used for efficient dependency management, automation scripts, and library architecture in frontend projects.",
        },
        subcategory: {
          pl: "Narzędzia i Biblioteki",
          en: "Tools and Libraries",
        },
      },
      {
        name: "ESLint / Prettier",
        description: {
          pl: "Narzędzia do statycznej analizy kodu oraz automatycznego formatowania, które gwarantują utrzymanie jednolitego standardu i czystości kodu w zespole.",
          en: "Tools for static code analysis and automated formatting, ensuring a consistent standard and code cleanliness within the team.",
        },
        subcategory: {
          pl: "Narzędzia i Biblioteki",
          en: "Tools and Libraries",
        },
      },
      {
        name: "TanStack (React Query)",
        description: {
          pl: "Potężny zestaw narzędzi do wydajnego zarządzania stanem serwerowym, obsługi pamięci podręcznej oraz zaawansowanych tabel danych.",
          en: "A powerful set of tools for efficient server state management, cache handling, and advanced data tables.",
        },
        subcategory: {
          pl: "Narzędzia i Biblioteki",
          en: "Tools and Libraries",
        },
      },
      {
        name: "Axios",
        description: {
          pl: "Niezawodny i popularny klient HTTP oparty na obietnicach, wykorzystywany do wygodnej komunikacji z backendowym API, obsługi interceptorów oraz transformacji danych.",
          en: "A reliable and popular promise-based HTTP client used for convenient communication with backend APIs, handling interceptors, and data transformation.",
        },
        subcategory: {
          pl: "Narzędzia i Biblioteki",
          en: "Tools and Libraries",
        },
      },
      {
        name: "React Router Dom",
        description: {
          pl: "Standardowe narzędzie do obsługi routingu po stronie klienta w aplikacjach typu SPA, umożliwiające dynamiczną nawigację i zabezpieczanie ścieżek (Guards).",
          en: "A standard tool for client-side routing in SPA applications, enabling dynamic navigation and securing routes (Guards).",
        },
        subcategory: {
          pl: "Narzędzia i Biblioteki",
          en: "Tools and Libraries",
        },
      },
      {
        name: "Zustand",
        description: {
          pl: "Lekka, nowoczesna i wysoce skalowalna biblioteka do globalnego zarządzania stanem aplikacji bez zbędnego boilerplate'u.",
          en: "A lightweight, modern, and highly scalable library for global application state management without unnecessary boilerplate.",
        },
        subcategory: {
          pl: "Narzędzia i Biblioteki",
          en: "Tools and Libraries",
        },
      },
      {
        name: "Redux / Redux Toolkit",
        description: {
          pl: "Zaawansowany system zarządzania złożonym stanem globalnym, dedykowany do rozbudowanych aplikacji klasy enterprise.",
          en: "An advanced global state management system dedicated to complex enterprise-class applications.",
        },
        subcategory: {
          pl: "Narzędzia i Biblioteki",
          en: "Tools and Libraries",
        },
      },
      {
        name: "React Hook Form",
        description: {
          pl: "Wydajna i lekka biblioteka do kompleksowego zarządzania stanem, renderowaniem oraz obsługą formularzy w React.",
          en: "A performant and lightweight library for comprehensive state management, rendering, and form handling in React.",
        },
        subcategory: {
          pl: "Narzędzia i Biblioteki",
          en: "Tools and Libraries",
        },
      },
      {
        name: "Zod",
        description: {
          pl: "Biblioteka do deklaratywnego tworzenia schematów oraz rygorystycznej walidacji danych wejściowych w oparciu o typy TypeScript.",
          en: "A library for declarative schema creation and rigorous validation of input data based on TypeScript types.",
        },
        subcategory: {
          pl: "Narzędzia i Biblioteki",
          en: "Tools and Libraries",
        },
      },
      {
        name: "Tailwind CSS",
        description: {
          pl: "Framework CSS oparty na klasach narzędziowych, umożliwiający błyskawiczne i spójne stylowanie bez opuszczania kodu komponentu.",
          en: "A utility-first CSS framework that enables rapid and consistent styling without leaving component code.",
        },
        subcategory: {
          pl: "Narzędzia i Biblioteki",
          en: "Tools and Libraries",
        },
      },
      {
        name: "Shadcn UI",
        description: {
          pl: "Kolekcja nowoczesnych, dostępnych i w pełni edytowalnych komponentów interfejsu budowanych bezpośrednio w projekcie.",
          en: "A collection of modern, accessible, and fully customizable interface components built directly into the project.",
        },
        subcategory: {
          pl: "Narzędzia i Biblioteki",
          en: "Tools and Libraries",
        },
      },
      {
        name: "Material UI (MUI)",
        description: {
          pl: "Kompleksowa i dojrzała biblioteka gotowych komponentów zgodnych ze standardami wizualnymi Material Design firmy Google.",
          en: "A comprehensive and mature library of ready-made components compliant with Google's Material Design visual standards.",
        },
        subcategory: {
          pl: "Narzędzia i Biblioteki",
          en: "Tools and Libraries",
        },
      },
      {
        name: "CSS / SCSS",
        description: {
          pl: "Tradycyjne technologie stylowania wykorzystywane do tworzenia zaawansowanych układów graficznych i animacji.",
          en: "Traditional styling technologies used to create advanced layouts and animations.",
        },
        subcategory: {
          pl: "Narzędzia i Biblioteki",
          en: "Tools and Libraries",
        },
      },
    ],
  },
  {
    category: { pl: "Databases", en: "Databases" },
    iconName: "Database",
    description: {
      pl: "Projektując struktury danych, dobieram rozwiązania technologiczne bezpośrednio do wymagań architektonicznych i biznesowych systemu. Skupiam się na zapewnieniu pełnej integralności danych, optymalizacji wydajności zapytań pod kątem dużych obciążeń oraz efektywnym wykorzystaniu pamięci podręcznej.",
      en: "When designing data structures, I match technological solutions directly to the architectural and business requirements of the system. I focus on ensuring full data integrity, optimizing query performance for heavy loads, and efficiently utilizing caching.",
    },
    items: [
      {
        name: "Relational Database Design",
        description: {
          pl: "Projektowanie relacyjnych struktur danych z uwzględnieniem zasad normalizacji, zapewniających spójność informacji, ograniczenie redundancji oraz łatwość dalszego rozwoju systemu.",
          en: "Designing relational data structures adhering to normalization principles, ensuring information consistency, reducing redundancy, and facilitating future system evolution.",
        },
        subcategory: {
          pl: "Podejścia i Metodologie",
          en: "Approaches and Methodologies",
        },
      },
      {
        name: "Database Optimization",
        description: {
          pl: "Analiza i optymalizacja wydajności baz danych poprzez odpowiednie projektowanie indeksów, usprawnianie zapytań oraz eliminowanie wąskich gardeł wpływających na czas odpowiedzi aplikacji.",
          en: "Analyzing and optimizing database performance through proper index design, query tuning, and eliminating bottlenecks affecting application response times.",
        },
        subcategory: {
          pl: "Podejścia i Metodologie",
          en: "Approaches and Methodologies",
        },
      },
      {
        name: "Data Caching Strategies",
        description: {
          pl: "Wykorzystanie mechanizmów pamięci podręcznej do ograniczania liczby operacji na bazie danych, zwiększania wydajności systemu oraz skracania czasu dostępu do często wykorzystywanych danych.",
          en: "Utilizing caching mechanisms to limit the number of database operations, increase system performance, and shorten access times to frequently used data.",
        },
        subcategory: {
          pl: "Podejścia i Metodologie",
          en: "Approaches and Methodologies",
        },
      },
      {
        name: "Database Transactions (ACID)",
        description: {
          pl: "Zarządzanie operacjami na danych z zachowaniem zasad ACID, gwarantujących niezawodność, integralność oraz spójność informacji nawet w środowiskach o wysokiej współbieżności.",
          en: "Managing data operations while adhering to ACID principles, guaranteeing reliability, integrity, and information consistency even in highly concurrent environments.",
        },
        subcategory: {
          pl: "Podejścia i Metodologie",
          en: "Approaches and Methodologies",
        },
      },

      {
        name: "MS SQL Server",
        description: {
          pl: "Główny relacyjny system zarządzania bazą danych (RDBMS) w moim stosie technologicznym, wykorzystywany do budowy stabilnych i bezpiecznych rozwiązań enterprise.",
          en: "The main relational database management system (RDBMS) in my technology stack, used for building stable and secure enterprise solutions.",
        },
        subcategory: {
          pl: "Narzędzia i Systemy DBMS",
          en: "Tools and DBMS Systems",
        },
      },
      {
        name: "PostgreSQL",
        description: {
          pl: "Zaawansowana, otwartoźródłowa relacyjna baza danych, z której korzystam przy projektach wymagających elastyczności, dużej wydajności oraz wsparcia dla typów JSON.",
          en: "An advanced, open-source relational database that I use for projects requiring flexibility, high performance, and JSON support.",
        },
        subcategory: {
          pl: "Narzędzia i Systemy DBMS",
          en: "Tools and DBMS Systems",
        },
      },
      {
        name: "Redis",
        description: {
          pl: "Ultraszybka baza danych in-memory typu klucz-wartość, stosowana przeze mnie głównie jako rozproszony cache oraz magazyn sesji w architekturze mikroserwisowej i modularnej.",
          en: "An ultra-fast in-memory key-value database, mainly used by me as a distributed cache and session store in microservice and modular architectures.",
        },
        subcategory: {
          pl: "Narzędzia i Systemy DBMS",
          en: "Tools and DBMS Systems",
        },
      },
      {
        name: "NoSQL (Firebase / MongoDB)",
        description: {
          pl: "Nierelacyjne bazy danych wykorzystywane do elastycznego przechowywania dokumentów JSON oraz szybkiej synchronizacji danych w czasie rzeczywistym.",
          en: "Non-relational databases used for flexible JSON document storage and fast real-time data synchronization.",
        },
        subcategory: {
          pl: "Narzędzia i Systemy DBMS",
          en: "Tools and DBMS Systems",
        },
      },
      {
        name: "T-SQL / pgSQL",
        description: {
          pl: "Języki proceduralne dedykowane dla SQL Server oraz PostgreSQL, służące do pisania wydajnych zapytań, procedur składowanych, funkcji oraz wyzwalaczy (triggers).",
          en: "Procedural languages dedicated to SQL Server and PostgreSQL, used for writing efficient queries, stored procedures, functions, and triggers.",
        },
        subcategory: {
          pl: "Narzędzia i Systemy DBMS",
          en: "Tools and DBMS Systems",
        },
      },
    ],
  },
  {
    category: {
      pl: "AI (Artificial Intelligence)",
      en: "AI (Artificial Intelligence)",
    },
    iconName: "Bot",
    description: {
      pl: "Wykorzystuję sztuczną inteligencję do zwiększania produktywności, automatyzacji procesów oraz wspierania procesu tworzenia oprogramowania. Łączę nowoczesne modele językowe, narzędzia automatyzacji oraz rozwiązania agentowe w celu budowania efektywnych i skalowalnych rozwiązań biznesowych.",
      en: "I use artificial intelligence to increase productivity, automate processes, and support software development. I combine modern language models, automation tools, and agent-based solutions to build efficient and scalable business solutions.",
    },
    items: [
      {
        name: "AI-Driven Development",
        description: {
          pl: "Świadome wykorzystanie modeli AI oraz asystentów programistycznych do przyspieszania tworzenia oprogramowania, analizy kodu, generowania rozwiązań oraz wspomagania procesów debugowania.",
          en: "Conscious use of AI models and programming assistants to accelerate software development, code analysis, solution generation, and debugging processes.",
        },
        subcategory: {
          pl: "Podejścia i Metodologie",
          en: "Approaches and Methodologies",
        },
      },
      {
        name: "Prompt Engineering",
        description: {
          pl: "Projektowanie i optymalizacja instrukcji dla modeli językowych w celu uzyskiwania precyzyjnych, spójnych i przewidywalnych rezultatów w różnych scenariuszach biznesowych i technicznych.",
          en: "Designing and optimizing instructions for language models to achieve precise, consistent, and predictable results in various business and technical scenarios.",
        },
        subcategory: {
          pl: "Podejścia i Metodologie",
          en: "Approaches and Methodologies",
        },
      },
      {
        name: "Business Process Automation",
        description: {
          pl: "Budowa inteligentnych przepływów pracy integrujących modele AI z zewnętrznymi systemami i usługami, pozwalających ograniczać manualne operacje oraz zwiększać efektywność procesów.",
          en: "Building intelligent workflows integrating AI models with external systems and services, reducing manual operations and increasing process efficiency.",
        },
        subcategory: {
          pl: "Podejścia i Metodologie",
          en: "Approaches and Methodologies",
        },
      },
      {
        name: "AI Agents & Workflows",
        description: {
          pl: "Projektowanie systemów agentowych zdolnych do wykonywania wieloetapowych zadań, podejmowania decyzji oraz współpracy z narzędziami i źródłami danych.",
          en: "Designing agent systems capable of performing multi-step tasks, making decisions, and collaborating with tools and data sources.",
        },
        subcategory: {
          pl: "Podejścia i Metodologie",
          en: "Approaches and Methodologies",
        },
      },

      {
        name: "Google Antigravity & AI Workspaces",
        description: {
          pl: "Nowoczesne środowiska wspierające rozwój oprogramowania, automatyzację procesów oraz eksperymentowanie z rozwiązaniami opartymi na sztucznej inteligencji.",
          en: "Modern environments supporting software development, process automation, and experimenting with artificial intelligence-based solutions.",
        },
        subcategory: {
          pl: "Narzędzia i Ekosystemy",
          en: "Tools and Ecosystems",
        },
      },
      {
        name: "Make.com & n8n",
        description: {
          pl: "Platformy automatyzacji wykorzystywane do budowy workflowów, integracji systemów oraz tworzenia agentów AI realizujących złożone procesy biznesowe.",
          en: "Automation platforms used for building workflows, integrating systems, and creating AI agents executing complex business processes.",
        },
        subcategory: {
          pl: "Narzędzia i Ekosystemy",
          en: "Tools and Ecosystems",
        },
      },
      {
        name: "NotebookLM",
        description: {
          pl: "Narzędzie wspierające analizę dokumentów, syntezę wiedzy oraz pozyskiwanie informacji z wielu źródeł danych jednocześnie.",
          en: "A tool supporting document analysis, knowledge synthesis, and information retrieval from multiple data sources simultaneously.",
        },
        subcategory: {
          pl: "Narzędzia i Ekosystemy",
          en: "Tools and Ecosystems",
        },
      },
      {
        name: "LLM Models (GPT, Gemini, Claude, Bielik)",
        description: {
          pl: "Praktyczne wykorzystanie dużych modeli językowych do generowania treści, analizy danych, automatyzacji procesów oraz budowy rozwiązań wspieranych przez AI.",
          en: "Practical use of large language models for content generation, data analysis, process automation, and building AI-supported solutions.",
        },
        subcategory: {
          pl: "Narzędzia i Ekosystemy",
          en: "Tools and Ecosystems",
        },
      },
    ],
  },
  {
    category: { pl: "Testing", en: "Testing" },
    iconName: "TestTubes",
    description: {
      pl: "Testowanie traktuję jako integralny element procesu wytwarzania oprogramowania, pozwalający zapewnić wysoką jakość, stabilność oraz niezawodność aplikacji. Tworzę zautomatyzowane testy, które weryfikują zarówno logikę biznesową, jak i poprawność współpracy poszczególnych komponentów systemu.",
      en: "I treat testing as an integral part of the software development process, ensuring high quality, stability, and reliability of applications. I create automated tests that verify both business logic and the correct cooperation of individual system components.",
    },
    items: [
      {
        name: "Unit Testing",
        description: {
          pl: "Weryfikacja pojedynczych komponentów i jednostek kodu w izolacji od pozostałych elementów systemu w celu szybkiego wykrywania błędów oraz potwierdzenia poprawności logiki biznesowej.",
          en: "Verification of individual components and code units in isolation from other system elements for quick bug detection and confirmation of business logic correctness.",
        },
        subcategory: {
          pl: "Podejścia i Metodologie",
          en: "Approaches and Methodologies",
        },
      },
      {
        name: "Integration Testing",
        description: {
          pl: "Sprawdzanie współpracy wielu komponentów aplikacji, w tym komunikacji z bazami danych, kolejkami wiadomości oraz zewnętrznymi usługami.",
          en: "Checking the cooperation of multiple application components, including communication with databases, message queues, and external services.",
        },
        subcategory: {
          pl: "Podejścia i Metodologie",
          en: "Approaches and Methodologies",
        },
      },
      {
        name: "Arrange-Act-Assert (AAA)",
        description: {
          pl: "Popularny wzorzec organizacji testów, zwiększający czytelność i utrzymywalność kodu testowego poprzez wyraźne rozdzielenie przygotowania, działania i weryfikacji.",
          en: "A popular test organization pattern increasing test code readability and maintainability through clear separation of preparation, execution, and verification.",
        },
        subcategory: {
          pl: "Podejścia i Metodologie",
          en: "Approaches and Methodologies",
        },
      },
      {
        name: "Test-Driven Development (TDD)",
        description: {
          pl: "Podejście do tworzenia oprogramowania zakładające pisanie testów przed implementacją funkcjonalności, wspierające projektowanie czytelnej i łatwej w utrzymaniu architektury.",
          en: "A software development approach assuming writing tests before feature implementation, supporting the design of clear and maintainable architecture.",
        },
        subcategory: {
          pl: "Podejścia i Metodologie",
          en: "Approaches and Methodologies",
        },
      },
      {
        name: "Test Isolation",
        description: {
          pl: "Projektowanie testów w sposób zapewniający ich pełną niezależność od środowiska uruchomieniowego oraz innych testów, co zwiększa ich powtarzalność i wiarygodność.",
          en: "Designing tests in a way that ensures their full independence from the runtime environment and other tests, increasing their repeatability and reliability.",
        },
        subcategory: {
          pl: "Podejścia i Metodologie",
          en: "Approaches and Methodologies",
        },
      },

      {
        name: "xUnit",
        description: {
          pl: "Framework testowy dla platformy .NET wykorzystywany do tworzenia i uruchamiania testów jednostkowych oraz integracyjnych.",
          en: "A testing framework for the .NET platform used for creating and running unit and integration tests.",
        },
        subcategory: {
          pl: "Narzędzia i Frameworki",
          en: "Tools and Frameworks",
        },
      },
      {
        name: "Testcontainers",
        description: {
          pl: "Biblioteka umożliwiająca uruchamianie rzeczywistych zależności infrastrukturalnych w kontenerach Docker na potrzeby testów integracyjnych.",
          en: "A library that allows running real infrastructural dependencies in Docker containers for integration tests.",
        },
        subcategory: {
          pl: "Narzędzia i Frameworki",
          en: "Tools and Frameworks",
        },
      },
      {
        name: "Moq",
        description: {
          pl: "Biblioteka służąca do tworzenia obiektów pozorowanych (mocków), pozwalająca izolować testowaną logikę od jej zależności.",
          en: "A library used to create mock objects, allowing the tested logic to be isolated from its dependencies.",
        },
        subcategory: {
          pl: "Narzędzia i Frameworki",
          en: "Tools and Frameworks",
        },
      },
      {
        name: "Bogus",
        description: {
          pl: "Narzędzie do generowania realistycznych danych testowych wykorzystywanych podczas testowania aplikacji i scenariuszy biznesowych.",
          en: "A tool for generating realistic test data used when testing applications and business scenarios.",
        },
        subcategory: {
          pl: "Narzędzia i Frameworki",
          en: "Tools and Frameworks",
        },
      },
    ],
  },
  {
    category: { pl: "DevOps & Cloud", en: "DevOps & Cloud" },
    iconName: "Cloud",
    description: {
      pl: "Wykorzystuję praktyki DevOps, rozwiązania chmurowe oraz konteneryzację do automatyzacji procesów wytwórczych i wdrożeniowych. Dzięki temu możliwe jest szybsze dostarczanie oprogramowania, utrzymanie spójnych środowisk oraz zwiększenie niezawodności aplikacji na każdym etapie jej rozwoju.",
      en: "I use DevOps practices, cloud solutions, and containerization to automate development and deployment processes. This enables faster software delivery, maintaining consistent environments, and increasing application reliability at every stage of its development.",
    },
    items: [
      {
        name: "CI/CD (Continuous Integration / Continuous Deployment)",
        description: {
          pl: "Automatyzacja procesów budowania, testowania i wdrażania aplikacji, pozwalająca na częste, bezpieczne i przewidywalne dostarczanie nowych wersji oprogramowania.",
          en: "Automation of application building, testing, and deployment processes, allowing for frequent, safe, and predictable delivery of new software versions.",
        },
        subcategory: {
          pl: "Podejścia i Metodologie",
          en: "Approaches and Methodologies",
        },
      },
      {
        name: "Containerization",
        description: {
          pl: "Standaryzacja środowisk uruchomieniowych poprzez wykorzystanie kontenerów, zapewniająca spójność działania aplikacji niezależnie od platformy.",
          en: "Standardization of runtime environments through the use of containers, ensuring consistent application operation regardless of the platform.",
        },
        subcategory: {
          pl: "Podejścia i Metodologie",
          en: "Approaches and Methodologies",
        },
      },

      {
        name: "Azure DevOps",
        description: {
          pl: "Platforma wspierająca zarządzanie cyklem życia oprogramowania, obejmująca repozytoria kodu, planowanie prac oraz automatyzację procesów CI/CD.",
          en: "A platform supporting software lifecycle management, including code repositories, work planning, and CI/CD process automation.",
        },
        subcategory: { pl: "Narzędzia i Platformy", en: "Tools and Platforms" },
      },
      {
        name: "Docker",
        description: {
          pl: "Technologia konteneryzacji umożliwiająca pakowanie aplikacji wraz z ich zależnościami i uruchamianie ich w spójny sposób na różnych środowiskach.",
          en: "A containerization technology that allows packaging applications with their dependencies and running them consistently across different environments.",
        },
        subcategory: { pl: "Narzędzia i Platformy", en: "Tools and Platforms" },
      },
      {
        name: "Azure Service Bus",
        description: {
          pl: "Usługa komunikacji asynchronicznej umożliwiająca niezawodną wymianę wiadomości pomiędzy komponentami systemów rozproszonych.",
          en: "An asynchronous communication service enabling reliable message exchange between components of distributed systems.",
        },
        subcategory: { pl: "Narzędzia i Platformy", en: "Tools and Platforms" },
      },
      {
        name: "Azure Blob Storage",
        description: {
          pl: "Chmurowa usługa przechowywania danych wykorzystywana do składowania plików, dokumentów, multimediów oraz innych danych niestrukturalnych.",
          en: "A cloud data storage service used for storing files, documents, multimedia, and other unstructured data.",
        },
        subcategory: { pl: "Narzędzia i Platformy", en: "Tools and Platforms" },
      },
      {
        name: "Git (GitHub / GitLab)",
        description: {
          pl: "Rozproszony system kontroli wersji wykorzystywany do zarządzania kodem źródłowym, współpracy zespołowej oraz śledzenia zmian w projekcie.",
          en: "A distributed version control system used for source code management, team collaboration, and tracking project changes.",
        },
        subcategory: { pl: "Narzędzia i Platformy", en: "Tools and Platforms" },
      },
    ],
  },
  {
    category: {
      pl: "Project Management & Collaboration",
      en: "Project Management & Collaboration",
    },
    iconName: "Users",
    description: {
      pl: "Skuteczne tworzenie oprogramowania wymaga nie tylko umiejętności technicznych, ale również sprawnej komunikacji i dobrej organizacji pracy. Na co dzień współpracuję z analitykami, projektantami UI/UX oraz innymi programistami, uczestnicząc w całym procesie dostarczania wartościowych rozwiązań biznesowych.",
      en: "Effective software development requires not only technical skills but also efficient communication and good work organization. On a daily basis, I collaborate with analysts, UI/UX designers, and other developers, participating in the entire process of delivering valuable business solutions.",
    },
    items: [
      {
        name: "Agile / Scrum",
        description: {
          pl: "Praca w oparciu o zwinne metodyki umożliwiające iteracyjne dostarczanie oprogramowania, szybką adaptację do zmian oraz regularne doskonalenie procesów zespołowych.",
          en: "Working based on agile methodologies enabling iterative software delivery, quick adaptation to changes, and regular improvement of team processes.",
        },
        subcategory: {
          pl: "Podejścia i Metodologie",
          en: "Approaches and Methodologies",
        },
      },
      {
        name: "Technical Documentation",
        description: {
          pl: "Tworzenie i utrzymywanie dokumentacji technicznej, opisów architektury oraz decyzji projektowych wspierających rozwój i utrzymanie systemów.",
          en: "Creating and maintaining technical documentation, architecture descriptions, and design decisions supporting the development and maintenance of systems.",
        },
        subcategory: {
          pl: "Podejścia i Metodologie",
          en: "Approaches and Methodologies",
        },
      },
      {
        name: "Cross-functional Collaboration",
        description: {
          pl: "Współpraca z zespołami biznesowymi, projektowymi i technicznymi w celu skutecznego przekładania wymagań na funkcjonalne rozwiązania programistyczne.",
          en: "Collaboration with business, design, and technical teams to effectively translate requirements into functional programming solutions.",
        },
        subcategory: {
          pl: "Podejścia i Metodologie",
          en: "Approaches and Methodologies",
        },
      },
      {
        name: "Requirements Analysis",
        description: {
          pl: "Analiza wymagań biznesowych i technicznych pozwalająca na właściwe zaprojektowanie funkcjonalności oraz ograniczenie ryzyka błędnych założeń projektowych.",
          en: "Analysis of business and technical requirements allowing for proper functionality design and mitigating the risk of incorrect project assumptions.",
        },
        subcategory: {
          pl: "Podejścia i Metodologie",
          en: "Approaches and Methodologies",
        },
      },

      {
        name: "Jira",
        description: {
          pl: "Narzędzie wykorzystywane do planowania prac, zarządzania zadaniami oraz monitorowania postępów realizacji projektów.",
          en: "A tool used for work planning, task management, and monitoring project progress.",
        },
        subcategory: { pl: "Narzędzia", en: "Tools" },
      },
      {
        name: "Confluence",
        description: {
          pl: "Platforma służąca do tworzenia, organizowania i udostępniania dokumentacji projektowej oraz technicznej.",
          en: "A platform used for creating, organizing, and sharing project and technical documentation.",
        },
        subcategory: { pl: "Narzędzia", en: "Tools" },
      },
      {
        name: "Slack",
        description: {
          pl: "Komunikator wspierający codzienną współpracę zespołową oraz sprawną wymianę informacji pomiędzy członkami projektu.",
          en: "A communicator supporting daily team collaboration and efficient information exchange among project members.",
        },
        subcategory: { pl: "Narzędzia", en: "Tools" },
      },
      {
        name: "Miro",
        description: {
          pl: "Narzędzie wykorzystywane do modelowania procesów, warsztatów projektowych oraz wizualizacji pomysłów i architektury systemów.",
          en: "A tool used for process modeling, design workshops, and visualizing ideas and system architecture.",
        },
        subcategory: { pl: "Narzędzia", en: "Tools" },
      },
      {
        name: "Figma",
        description: {
          pl: "Platforma służąca do współpracy z projektantami UI/UX oraz analizy i implementacji interfejsów użytkownika.",
          en: "A platform used for collaborating with UI/UX designers and analyzing and implementing user interfaces.",
        },
        subcategory: { pl: "Narzędzia", en: "Tools" },
      },
    ],
  },
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
        description: skillCategory.description || undefined,
        orderIndex: index,
        items: skillCategory.items,
      },
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
