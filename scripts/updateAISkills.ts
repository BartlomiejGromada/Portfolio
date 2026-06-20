import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const updates: Record<string, { pl: string; en: string }> = {
  "AI-Driven Development": {
    pl: "Traktuję asystentów AI jak niezwykle szybkiego partnera do Pair Programmingu. Używam ich do generowania boilerplate kodu, pisania testów jednostkowych dla powtarzalnych przypadków (np. z Bogus), szybkiego debugowania i analizy logów, co pozwala mi skupić się na architekturze i logice biznesowej.",
    en: "I treat AI assistants like an incredibly fast Pair Programming partner. I use them to generate boilerplate code, write unit tests for repetitive cases (e.g., with Bogus), quickly debug, and analyze logs, which allows me to focus on architecture and business logic."
  },
  "Prompt Engineering": {
    pl: "Aby z modelu wyciągnąć maksimum, trzeba umieć z nim precyzyjnie rozmawiać. Projektuję zaawansowane instrukcje systemowe, stosując techniki takie jak Few-Shot Prompting czy Chain-of-Thought, dzięki czemu uzyskiwane rezultaty są powtarzalne, ustrukturyzowane (np. jako czysty JSON) i gotowe do wdrożenia.",
    en: "To get the maximum out of a model, you have to know how to talk to it precisely. I design advanced system instructions using techniques such as Few-Shot Prompting or Chain-of-Thought, making the obtained results repeatable, structured (e.g., as clean JSON), and ready for deployment."
  },
  "Business Process Automation": {
    pl: "Szanuję czas – zarówno swój, jak i biznesu. Buduję przepływy danych, które eliminują potrzebę ręcznego przeklejania informacji między systemami. Wpinam modele LLM bezpośrednio w procesy biznesowe, tworząc automatyczne systemy kategoryzacji, powiadomień czy wstępnej analizy danych.",
    en: "I respect time – both mine and the business's. I build data flows that eliminate the need for manual copying and pasting of information between systems. I integrate LLM models directly into business processes, creating automatic systems for categorization, notifications, or preliminary data analysis."
  },
  "AI Agents & Workflows": {
    pl: "Idę o krok dalej niż proste zapytanie-odpowiedź. Projektuję wieloetapowe workflowy, w których wyspecjalizowani agenci AI współpracują ze sobą, korzystają z zewnętrznych narzędzi (Tool Calling) i podejmują autonomiczne decyzje na podstawie dostarczonych danych wejściowych.",
    en: "I go a step further than simple query-response. I design multi-stage workflows in which specialized AI agents cooperate with each other, use external tools (Tool Calling), and make autonomous decisions based on the provided input data."
  },
  "Google Antigravity & AI Workspaces": {
    pl: "Wykorzystuję nowoczesne środowiska programistyczne i przestrzenie AI, aby eksperymentować z nowymi podejściami i sprawnie integrować funkcje oparte na sztucznej inteligencji bezpośrednio z moim workflowem deweloperskim.",
    en: "I use modern development environments and AI workspaces to experiment with new approaches and efficiently integrate AI-based features directly into my developer workflow."
  },
  "Make.com & n8n": {
    pl: "Moje ulubione narzędzia do orkiestracji procesów. Pozwalają mi na błyskawiczne łączenie API różnych usług, automatyzację zadań cron oraz budowanie zaawansowanych systemów agentowych bez konieczności pisania i utrzymywania setek linii kodu infrastrukturalnego.",
    en: "My favorite tools for process orchestration. They allow me to instantly connect APIs of various services, automate cron tasks, and build advanced agent systems without having to write and maintain hundreds of lines of infrastructure code."
  },
  "NotebookLM": {
    pl: "Moje centrum zarządzania wiedzą i dokumentacją projektową. Używam go do błyskawicznej syntezy wiedzy z obszernych specyfikacji technicznych, repozytoriów czy dokumentacji architektonicznej, co skraca czas researchu do absolutnego minimum.",
    en: "My center for knowledge management and project documentation. I use it for instant synthesis of knowledge from extensive technical specifications, repositories, or architectural documentation, which cuts research time to the absolute minimum."
  },
  "LLM Models (GPT, Gemini, Claude, Bielik)": {
    pl: "Dobieram model do konkretnego zadania – Claude świetnie radzi sobie z refaktoryzacją i pisaniem kodu, Gemini z analizą ogromnego kontekstu i plików, a polski Bielik ze specyfiką lokalnego rynku i języka. Znam ich mocne oraz słabe strony i wyciągam z nich to, co najlepsze.",
    en: "I choose the model for a specific task – Claude is great at refactoring and writing code, Gemini at analyzing huge contexts and files, and the Polish Bielik with the specifics of the local market and language. I know their strengths and weaknesses and bring out the best in them."
  }
};

async function main() {
  const categoryId = "6a2d3d1605465e09aff1f791"; // AI
  
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

  console.log("Successfully updated AI skills!");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
