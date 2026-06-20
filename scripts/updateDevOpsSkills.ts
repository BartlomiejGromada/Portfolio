import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const updates: Record<string, { pl: string; en: string }> = {
  "CI/CD (Continuous Integration / Continuous Deployment)": {
    pl: "Nie wyobrażam sobie ręcznego budowania i wgrywania aplikacji na serwer. Każdy mój push do repozytorium automatycznie odpala testy, weryfikuje jakość kodu i przygotowuje paczkę wdrożeniową. Dzięki temu nowe ficzery trafiają do użytkowników w sposób przewidywalny, bezpieczny i całkowicie bezstresowy.",
    en: "I can't imagine manually building and uploading applications to a server. Every push I make to the repository automatically triggers tests, verifies code quality, and prepares a deployment package. Thanks to this, new features reach users in a predictable, secure, and completely stress-free manner."
  },
  "Containerization": {
    pl: "Pakuję aplikację wraz ze wszystkimi jej zależnościami do jednego obrazu. Gwarantuje mi to, że kod uruchomiony na moim komputerze zachowa się dokładnie tak samo na środowisku testowym oraz na produkcji, eliminując problemy z niespójnością wersji bibliotek czy konfiguracji serwera.",
    en: "I pack the application together with all its dependencies into a single image. This guarantees that code run on my computer will behave exactly the same in the test environment and in production, eliminating problems with library version inconsistencies or server configuration."
  },
  "Azure DevOps": {
    pl: "Moje ulubione centrum dowodzenia w ekosystemie Microsoft klasy enterprise. Używam go do kompleksowego spięcia całego cyklu życia projektu: od zarządzania zadaniami w tablicach Agile, przez hostowanie repozytoriów, aż po budowanie zaawansowanych, wieloetapowych potoków wdrożeniowych (Pipelines).",
    en: "My favorite command center in the Microsoft enterprise ecosystem. I use it to comprehensively link the entire project lifecycle: from managing tasks in Agile boards, through hosting repositories, to building advanced, multi-stage deployment pipelines."
  },
  "Docker": {
    pl: "To mój standard w codziennej pracy deweloperskiej. Używam Dockera (i Docker Compose) do błyskawicznego podnoszenia lokalnych zależności infrastrukturalnych (bazy danych, kolejki, cache) bez zaśmiecania systemu operacyjnego, co drastycznie skraca czas wdrożenia nowego programisty do projektu.",
    en: "It's my standard in everyday development work. I use Docker (and Docker Compose) to instantly spin up local infrastructure dependencies (databases, queues, caches) without cluttering the operating system, which drastically reduces the onboarding time for new developers to a project."
  },
  "Azure Service Bus": {
    pl: "Serce mojej komunikacji asynchronicznej w chmurze. Wykorzystuję go do budowania systemów luźno powiązanych (loosely coupled), gdzie komponenty komunikują się za pomocą komunikatów i subskrypcji. Zapewnia to potężną skalowalność i odporność systemu na nagłe piki ruchu.",
    en: "The heart of my asynchronous communication in the cloud. I use it to build loosely coupled systems, where components communicate via messages and subscriptions. This ensures massive scalability and system resilience to sudden traffic spikes."
  },
  "Azure Blob Storage": {
    pl: "Nie przechowuję plików użytkowników na dysku serwera aplikacyjnego. Używam Blob Storage jako bezpiecznego, wysoce dostępnego i praktycznie nieograniczonego magazynu na dokumenty, zdjęcia czy logi, odciążając tym samym infrastrukturę obliczeniową.",
    en: "I don't store user files on the application server's disk. I use Blob Storage as a secure, highly available, and practically unlimited repository for documents, photos, or logs, thereby offloading the compute infrastructure."
  },
  "Git (GitHub / GitLab)": {
    pl: "To fundament pracy zespołowej. Wykorzystuję system kontroli wersji nie tylko do śledzenia zmian w kodzie, ale też do prowadzenia rzetelnego procesu Code Review, automatyzacji akcji (GitHub Actions / GitLab CI) oraz wdrażania strategii gałęziowej (Gitflow/Trunk-based development) dopasowanej do dynamiki zespołu.",
    en: "It's the foundation of teamwork. I use a version control system not only to track code changes, but also to conduct reliable Code Reviews, automate actions (GitHub Actions / GitLab CI), and implement branching strategies (Gitflow/Trunk-based development) tailored to the team's dynamics."
  }
};

const categoryDescription = {
  pl: "Wykorzystuję praktyki DevOps, rozwiązania chmurowe oraz konteneryzację, aby zamknąć lukę między \"działa u mnie lokalnie\" a bezpiecznym wdrożeniem produkcyjnym. Automatyzacja powtarzalnych procesów wdrożeniowych to dla mnie klucz do szybkiego dostarczania oprogramowania, utrzymania spójnych środowisk i minimalizowania ryzyka błędów ludzkich podczas release'ów.",
  en: "I use DevOps practices, cloud solutions, and containerization to close the gap between 'it works locally for me' and a secure production deployment. Automating repetitive deployment processes is the key to quickly delivering software, maintaining consistent environments, and minimizing the risk of human error during releases."
};

async function main() {
  const categoryId = "6a2d3d1605465e09aff1f793"; // DevOps
  
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

  console.log("Successfully updated DevOps skills!");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
