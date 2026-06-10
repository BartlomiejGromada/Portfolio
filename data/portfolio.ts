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
