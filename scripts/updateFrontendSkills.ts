import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const updates: Record<string, { pl: string; en: string }> = {
  "Component-Driven Development (CDD)": {
    pl: "Traktuję interfejs jak klocki Lego. Buduję niezależne, dobrze otypowane komponenty, które można wielokrotnie wykorzystać w różnych częściach aplikacji. To drastycznie przyspiesza rozwój projektu i sprawia, że zmiany w designie wprowadza się w jednym miejscu, a nie w całym systemie.",
    en: "I treat the interface like Lego blocks. I build independent, well-typed components that can be reused in different parts of the application. This drastically accelerates project development and ensures that design changes are made in one place, not throughout the entire system."
  },
  "Asynchronous State Management": {
    pl: "Stan serwerowy rządzi się swoimi prawami. Zamiast pisać generyczne bloki useEffect, świadomie zarządzam cyklem życia danych z API – wdrażam inteligentne cache'owanie, optymalne unieważnianie danych (invalidation) oraz optymistyczne aktualizacje UI (optimistic updates), aby użytkownik miał wrażenie, że aplikacja działa błyskawicznie.",
    en: "Server state follows its own rules. Instead of writing generic useEffect blocks, I consciously manage the API data lifecycle – I implement intelligent caching, optimal data invalidation, and optimistic UI updates so that the user feels the application runs lightning fast."
  },
  "Responsive Web Design (RWD)": {
    pl: "Mobile-first to dla mnie standard, a nie opcja. Projektuję interfejsy tak, aby płynnie adaptowały się do każdego ekranu – od smartfona w biegu po wielki monitor Tech Leada, dbając o nienaganny układ i czytelność.",
    en: "Mobile-first is a standard for me, not an option. I design interfaces to seamlessly adapt to any screen – from a smartphone on the go to a Tech Lead's large monitor, ensuring impeccable layout and readability."
  },
  "Single Page Applications (SPA)": {
    pl: "Dążę do tego, by aplikacja webowa dawała wrażenie płynności programu desktopowego. Eliminuję irytujące przeładowania stron, zapewniając błyskawiczną nawigację i płynne przejścia między widokami.",
    en: "I aim for web applications to feel as fluid as desktop programs. I eliminate annoying page reloads, providing instant navigation and smooth transitions between views."
  },
  "TypeScript": {
    pl: "Mój absolutny standard w projektach komercyjnych. Jako deweloper .NET uwielbiam silne typowanie. TypeScript pozwala mi wyłapać 90% błędów (literówki, brakujące właściwości, złe typy danych) już na etapie pisania kodu, zanim trafi on do repozytorium.",
    en: "My absolute standard in commercial projects. As a .NET developer, I love strong typing. TypeScript allows me to catch 90% of errors (typos, missing properties, wrong data types) at the coding stage, before it even reaches the repository."
  },
  "JavaScript (ES6+)": {
    pl: "Znam fundamenty, na których opierają się współczesne frameworki. Swobodnie wykorzystuję nowoczesną składnię asynchroniczną, destrukturyzację czy operatory tablicowe, aby pisać zwięzły i wydajny kod kliencki.",
    en: "I know the foundations on which modern frameworks are built. I freely use modern asynchronous syntax, destructuring, or array operators to write concise and efficient client code."
  },
  "React": {
    pl: "Moje główne narzędzie do budowy UI. Cenię go za deklaratywność i architekturę opartą na komponentach. Wykorzystuję zaawansowane mechanizmy (Hooks, Context, najnowsze ficzerzy React 19), aby tworzyć dynamiczne i stabilne interfejsy.",
    en: "My main tool for building UIs. I value it for its declarativeness and component-based architecture. I use advanced mechanisms (Hooks, Context, the latest React 19 features) to create dynamic and stable interfaces."
  },
  "Next.js": {
    pl: "Wykraczam poza standardowe SPA, gdy projekt wymaga świetnego SEO i natychmiastowego renderowania. Wykorzystuję Server Components i mechanizmy SSR/SSG, aby użytkownik widział gotową stronę w ułamku sekundy.",
    en: "I go beyond standard SPAs when a project requires great SEO and instant rendering. I use Server Components and SSR/SSG mechanisms so the user sees a ready page in a fraction of a second."
  },
  "React Native": {
    pl: "Gdy zachodzi potrzeba wyjścia poza przeglądarkę, wykorzystuję moją wiedzę z Reacta, by dostarczyć natywną aplikację na Androida i iOS, współdzieląc logikę biznesową i drastycznie tnąc koszty developmentu.",
    en: "When there's a need to go beyond the browser, I use my React knowledge to deliver a native Android and iOS application, sharing business logic and drastically cutting development costs."
  },
  "Vite": {
    pl: "Szanuję swój czas. Porzuciłem powolnego Webpacka na rzecz Vite, co daje mi natychmiastowe uruchamianie środowiska lokalnego i błyskawiczne przeładowania (HMR) podczas kodowania.",
    en: "I respect my time. I abandoned the slow Webpack in favor of Vite, which gives me instant local environment startup and lightning-fast Hot Module Replacement (HMR) while coding."
  },
  "npm / pnpm": {
    pl: "Dbam o porządek w zależnościach. Pnpm cenię za oszczędność miejsca na dysku i niesamowitą szybkość instalacji pakietów, co przekłada się na szybsze budowanie projektów, również na CI/CD.",
    en: "I keep dependencies organized. I value Pnpm for saving disk space and incredible package installation speed, which translates into faster project builds, including on CI/CD."
  },
  "ESLint / Prettier": {
    pl: "Kod w zespole musi wyglądać tak, jakby pisała go jedna osoba. Te narzędzia automatycznie pilnują standardów, czyszczą formatowanie i wyłapują potencjalne bugi (code smells) przy każdym zapisie pliku.",
    en: "Code in a team must look like it was written by one person. These tools automatically enforce standards, clean up formatting, and catch potential bugs (code smells) with every file save."
  },
  "TanStack (React Query)": {
    pl: "Całkowicie zdejmuje ze mnie ból głowy związany z pobieraniem danych. Odpowiada za automatyczne odświeżanie w tle, cache'owanie i obsługę stanów ładowania/błędów, redukując boilerplate w kodzie do minimum.",
    en: "It completely takes away the headache associated with data fetching. It handles automatic background refreshing, caching, and loading/error states, reducing boilerplate code to a minimum."
  },
  "Axios": {
    pl: "Wolę go od surowego fetch. Daje mi potężne mechanizmy interceptorów (Interceptors), dzięki którym w jednym miejscu wstrzykuję tokeny JWT do nagłówków, globalnie obsługuję błędy API (np. kod 401) czy transformuję dane wejściowe.",
    en: "I prefer it over raw fetch. It gives me powerful interceptor mechanisms, allowing me to inject JWT tokens into headers, globally handle API errors (e.g., code 401), or transform input data all in one place."
  },
  "React Router Dom": {
    pl: "Serce nawigacji w moich aplikacjach SPA. Pozwala mi na łatwe deklarowanie dynamicznych ścieżek, leniwe ładowanie komponentów (lazy loading) oraz zabezpieczanie tras (Route Guards) przed nieautoryzowanymi użytkownikami.",
    en: "The heart of navigation in my SPA applications. It allows me to easily declare dynamic routes, lazy load components, and secure routes (Route Guards) from unauthorized users."
  },
  "Zustand": {
    pl: "Mój pierwszy wybór do zarządzania stanem globalnym. Jest lekki, ultraszybki i pozbawiony zbędnego kodu konfiguracyjnego. Pozwala mi spiąć stan aplikacji w kilka minut bez skomplikowania znanego ze starszych narzędzi.",
    en: "My first choice for global state management. It's lightweight, ultra-fast, and devoid of unnecessary boilerplate code. It allows me to wire up application state in minutes without the complexity known from older tools."
  },
  "Redux / Redux Toolkit": {
    pl: "Sięgam po niego w projektach enterprise, gdzie struktura stanu aplikacji jest niezwykle złożona i wielopoziomowa. Z RTK proces ten jest przewidywalny i łatwy do debugowania przez dedykowane DevTools.",
    en: "I reach for it in enterprise projects where the application state structure is highly complex and multi-level. With RTK, this process is predictable and easy to debug via dedicated DevTools."
  },
  "React Hook Form": {
    pl: "Formularze potrafią zabić wydajność Reacta przez ciągłe re-rendery. Ta biblioteka opiera się na niekontrolowanych komponentach (uncontrolled inputs), dzięki czemu obsługa nawet gigantycznych formularzy działa płynnie i bez opóźnień.",
    en: "Forms can kill React's performance through continuous re-renders. This library relies on uncontrolled inputs, so handling even gigantic forms runs smoothly and without delays."
  },
  "Zod": {
    pl: "Zapewniam stuprocentową pewność, że dane, które trafiają z formularza lub zewnętrznego API, są poprawne. Łączę Zod z TypeScriptem, uzyskując automatyczne typowanie na podstawie schematów walidacji.",
    en: "I ensure 100% certainty that the data coming from a form or external API is correct. I combine Zod with TypeScript, gaining automatic typing based on validation schemas."
  },
  "Tailwind CSS": {
    pl: "Moje ulubione narzędzie do stylowania. Przyspiesza pisanie interfejsu o 200%, eliminując potrzebę skakania między plikami CSS a komponentami. Gwarantuje też spójność systemu projektowego (design system) poprzez predefiniowane klasy.",
    en: "My favorite styling tool. It accelerates interface writing by 200%, eliminating the need to jump between CSS files and components. It also guarantees the consistency of the design system through predefined classes."
  },
  "Shadcn UI": {
    pl: "Zamiast instalować ciężkie paczki ze sztywnym designem, używam komponentów, które stają się fizyczną częścią mojego projektu. Mam pełną kontrolę nad ich kodem, stylem i dostępnością (Radix UI), co pozwala mi dostosować je pod dowolny branding.",
    en: "Instead of installing heavy packages with rigid design, I use components that become a physical part of my project. I have full control over their code, style, and accessibility (Radix UI), allowing me to customize them for any branding."
  },
  "Material UI (MUI)": {
    pl: "Wybieram go w rozbudowanych panelach administracyjnych i systemach wewnętrznych (B2B). Oferuje gigantyczny zestaw gotowych, dojrzałych komponentów zgodnych z Material Design, co pozwala błyskawicznie dostarczyć działający i estetyczny produkt.",
    en: "I choose it for extensive administration panels and internal systems (B2B). It offers a massive set of ready, mature components compliant with Material Design, allowing for lightning-fast delivery of a working and aesthetic product."
  },
  "CSS / SCSS": {
    pl: "Znam fundamenty stylowania. Gdy projekt wymaga niestandardowych, zaawansowanych animacji lub specyficznej architektury stylów, wykorzystuję czysty CSS lub możliwości zmiennych i zagnieżdżeń w SCSS.",
    en: "I know the fundamentals of styling. When a project requires custom, advanced animations or specific style architecture, I use pure CSS or the variable and nesting capabilities of SCSS."
  }
};

async function main() {
  const categoryId = "6a2d3d1605465e09aff1f78f"; // Frontend
  
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

  console.log("Successfully updated frontend tools and methodologies!");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
