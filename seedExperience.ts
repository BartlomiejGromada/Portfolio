import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Clearing old experience...');
  await prisma.experience.deleteMany({});

  console.log('Seeding Experience...');
  await prisma.experience.createMany({
    data: [
      {
        company: "Correct – Nowe Skalmierzyce",
        role: { pl: "Software Developer", en: "Software Developer" },
        date: { pl: "Mar 2025 – obecnie", en: "Mar 2025 – present" },
        description: { 
          pl: "Tworzenie i rozwój API w celu zapewnienia zgodności z regulacjami Unii Europejskiej (EUDR).\nPisanie testów jednostkowych i integracyjnych, debugowanie oraz utrzymanie istniejącej bazy kodu.\nZbieranie i analiza wymagań klientów oraz przekładanie ich na rozwiązania techniczne.\nUdział w podejmowaniu decyzji dotyczących architektury systemu oraz projektowania oprogramowania.", 
          en: "Developing and advancing APIs to ensure compliance with European Union regulations (EUDR).\nWriting unit and integration tests, debugging, and maintaining the existing codebase.\nGathering and analyzing client requirements and translating them into technical solutions.\nParticipating in decisions regarding system architecture and software design." 
        },
        technologies: ["C#", ".NET Core", "React", "PostgreSQL", "xUnit", "Moq", "Docker", "CQRS", "REST API", "Entity Framework Core", "Azure DevOps"],
        orderIndex: 0
      },
      {
        company: "JMB Lab – Gdańsk",
        role: { pl: "Junior FullStack Developer", en: "Junior FullStack Developer" },
        date: { pl: "Sty 2023 – Paź 2024", en: "Jan 2023 – Oct 2024" },
        description: { 
          pl: "Tworzenie i rozwijanie systemów klasy enterprise, w tym systemu zarządzania magazynem (WMS), systemu zarządzania produkcją oraz panelu dla klientów.\nProjektowanie i implementacja usług backendowych oraz API wspierających procesy biznesowe i integracje.\nImplementacja i optymalizacja responsywnych aplikacji front-endowych.\nWspółpraca z interesariuszami biznesowymi w zakresie zbierania wymagań i dostarczania rozwiązań dopasowanych do potrzeb klientów.\nWspieranie procesu code review, testowania i wdrożeń w celu utrzymania wysokiej jakości i stabilności systemu.", 
          en: "Developing and advancing enterprise-class systems, including Warehouse Management Systems (WMS), production management systems, and a client panel.\nDesigning and implementing backend services and APIs supporting business processes and integrations.\nImplementing and optimizing responsive front-end applications.\nCollaborating with business stakeholders to gather requirements and deliver tailored solutions.\nSupporting the code review, testing, and deployment processes to maintain high quality and system stability." 
        },
        technologies: ["C#", ".NET", "React", "TypeScript", "SQL Server", "Git", "Jira", "CI/CD", "Responsive Design", "Code Review"],
        orderIndex: 1
      },
      {
        company: "Skalmex – Nowe Skalmierzyce",
        role: { pl: "FullStack Developer", en: "FullStack Developer" },
        date: { pl: "Wrz 2021 – Sty 2023", en: "Sep 2021 – Jan 2023" },
        description: { 
          pl: "Projektowanie i rozwój systemu zarządzania czasem pracy oraz kontroli dostępu.\nOpracowanie rozwiązania do obsługi powiadomień w terminalu kontenerowym, usprawniającego przepływ informacji i codzienne operacje.\nStworzenie platformy wspierającej pracę instalatorów serwisujących systemy kontroli dostępu, co usprawniło działania w terenie.", 
          en: "Designing and developing a work time management and access control system.\nDeveloping a notification handling solution in a container terminal to streamline information flow and daily operations.\nCreating a platform supporting the work of installers servicing access control systems, which improved field operations." 
        },
        technologies: ["C#", ".NET", "React", "SQL Server", "REST API", "OOP", "Design Patterns"],
        orderIndex: 2
      }
    ]
  });

  console.log('Done!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
