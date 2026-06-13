import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Clearing old education and certificates...');
  await prisma.education.deleteMany({});
  await prisma.certificate.deleteMany({});

  console.log('Seeding Education...');
  await prisma.education.createMany({
    data: [
      {
        degree: { pl: "Magister informatyki", en: "Master of Computer Science" },
        institution: { pl: "Uniwersytet WSB Merito w Poznaniu", en: "WSB Merito University in Poznan" },
        period: { pl: "Sty 2024 – Cze 2025", en: "Jan 2024 – Jun 2025" },
        thesisTitle: { pl: "Modularny monolit jako alternatywa dla mikroserwisów.", en: "Modular monolith as an alternative to microservices." },
        github: "https://github.com/BartlomiejGromada/JobOffersApi",
        description: { 
          pl: "Analiza porównawcza architektur systemowych skupiona na korzyściach płynących z rygorystycznego podziału modularnego wewnątrz jednej jednostki wdrożeniowej, poparta autorską implementacją systemu API.", 
          en: "Comparative analysis of system architectures focused on the benefits of rigorous modular division within a single deployment unit, supported by a proprietary implementation of an API system." 
        },
        orderIndex: 0
      },
      {
        degree: { pl: "Inżynier informatyki", en: "Bachelor of Computer Science" },
        institution: { pl: "Akademia Kaliska im. Prezydenta Bronisława Wojciechowskiego w Kaliszu", en: "President Stanisław Wojciechowski Calisia Academy in Kalisz" },
        period: { pl: "Paź 2017 – Cze 2021", en: "Oct 2017 – Jun 2021" },
        thesisTitle: { pl: "Aplikacja mobilna dla biegacza.", en: "Mobile application for a runner." },
        github: "https://github.com/BartlomiejGromada/PracaInzynierska",
        description: { 
          pl: "Projekt i implementacja mobilnego asystenta treningowego wspierającego monitorowanie aktywności fizycznej, tras oraz analizę postępów biegowych.", 
          en: "Design and implementation of a mobile training assistant supporting the monitoring of physical activity, routes, and analysis of running progress." 
        },
        orderIndex: 1
      }
    ]
  });

  console.log('Seeding Certificates...');
  await prisma.certificate.createMany({
    data: [
      {
        title: { pl: "Wykorzystanie AI w rozwoju firmy", en: "AI Utilization in Business Development" },
        organizer: { pl: "Google & Szkoła Główna Handlowa w Warszawie (Program Umiejętności Jutra AI)", en: "Google & SGH Warsaw School of Economics (Skills of Tomorrow AI)" },
        date: { pl: "Czerwiec 2026 r.", en: "June 2026" },
        description: { 
          pl: "Zaawansowany, 5-tygodniowy program szkoleniowy zakończony oficjalnym egzaminem. Zakres obejmował m.in. budowę autonomicznych agentów AI (n8n, Make.com), zaawansowany prompt engineering, automatyzację procesów w ekosystemie Google oraz strategiczne planowanie wdrożeń AI w organizacjach przy użyciu matryc decyzyjnych.", 
          en: "Advanced, 5-week training program concluded with an official exam. The scope included building autonomous AI agents (n8n, Make.com), advanced prompt engineering, process automation in the Google ecosystem, and strategic planning of AI implementations in organizations using decision matrices." 
        },
        highlight: true,
        certificateUrl: { 
          pl: "https://drive.google.com/file/d/1VJQIyJCZ9BvERNwqNrpux5r19IaVs6Tt/view?usp=sharing", 
          en: "https://drive.google.com/file/d/1PkTPfSjMeir-GHK1drrQ7pwkN1u8S13d/view?usp=sharing" 
        },
        supplementUrl: { 
          pl: "https://drive.google.com/file/d/14jANj3dH7mgOCES8sOpio9_blYYIagzQ/view?usp=sharing", 
          en: "https://drive.google.com/file/d/1kcE990d_DGd7Sw52h5upEXKLo68l1PKe/view?usp=sharing" 
        },
        orderIndex: 0
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
