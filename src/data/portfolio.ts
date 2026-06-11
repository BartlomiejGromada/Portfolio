export const portfolioData = {
  name: "Bartłomiej",
  title: "Fullstack Developer",
  description:
    "Buduję nowoczesne aplikacje internetowe z wykorzystaniem .NET i React. Tworzę skalowalne backendy, intuicyjne interfejsy oraz rozwiązania, które łączą wysoką wydajność z doskonałym doświadczeniem użytkownika.",
  availabilityStatus: "Dostępny do pracy",
  socialLinks: {
    github: "https://github.com/BartlomiejGromada",
    linkedin: "https://www.linkedin.com/in/bart%C5%82omiej-gromada-670948238/",
  },
  skills: [".NET", "C#", "React", "TypeScript", "SQL", "Azure"],
  detailedSkills: [
    {
      category: "Backend",
      iconName: "Server",
      items: [
        ".NET",
        "C#",
        "ASP.NET Core",
        "Entity Framework Core",
        "REST APIs",
      ],
    },
    {
      category: "Frontend",
      iconName: "AppWindow",
      items: [
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
      ],
    },
    {
      category: "Cloud & Deployment",
      iconName: "Cloud",
      items: ["Azure", "Docker", "GitHub Actions", "CI/CD"],
    },
    {
      category: "Data",
      iconName: "Database",
      items: ["SQL Server", "PostgreSQL", "Redis"],
    },
  ],
  experience: [
    {
      company: "Correct",
      role: "Software Developer",
      date: "Mar 2025 – obecnie",
      description: "Tworzenie i rozwój API dla regulacji EUDR, udział w projektowaniu architektury systemu oraz pisanie testów jednostkowych i integracyjnych.",
      technologies: [".NET", "C#", "React", "Azure", "SQL Server"],
    },
    {
      company: "JMB Lab",
      role: "Junior FullStack Developer",
      date: "Sty 2023 – Paź 2024",
      description: "Rozwój systemów klasy enterprise (m.in. WMS). Projektowanie usług backendowych, optymalizacja front-endu oraz ścisła współpraca z klientami biznesowymi.",
      technologies: ["C#", "ASP.NET Core", "React", "TypeScript", "PostgreSQL"],
    },
    {
      company: "Skalmex",
      role: "FullStack Developer",
      date: "Wrz 2021 – Sty 2023",
      description: "Projektowanie systemu zarządzania czasem pracy i kontroli dostępu. Opracowanie rozwiązania powiadomień w terminalu kontenerowym.",
      technologies: [".NET Framework", "JavaScript", "SQL"],
    },
  ],
  education: [
    {
      degree: "Magister informatyki",
      institution: "Uniwersytet WSB Merito – Poznań",
      period: "Sty 2024 – Cze 2025",
    },
    {
      degree: "Inżynier informatyki",
      institution: "Akademia Kaliska im. Prezydenta Bronisława Wojciechowskiego – Kalisz",
      period: "Paź 2017 – Cze 2021",
    },
  ],
  codeWindow: {
    csharp: {
      className: "Developer",
      properties: [
        { type: "string", name: "Name", getter: "get;", value: '"Bartłomiej"' },
      ],
      methods: [{ signature: "public bool IsAvailable() => true;" }],
    },
    typescript: {
      interfaceName: "Developer",
      properties: [{ name: "name", type: "string", value: '"Bartłomiej"' }],
      methods: [
        { name: "isAvailable", returnType: "boolean", body: "() => true" },
      ],
    },
  },
};
