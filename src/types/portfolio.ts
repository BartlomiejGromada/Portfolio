export type LocalizedString = { pl: string; en: string };

export type PortfolioDataType = {
  name: string;
  title: LocalizedString;
  description: LocalizedString;
  availabilityStatus: boolean;
  socialLinks: {
    github: string;
    linkedin: string;
  };
  sourceCodeUrl: string;
  cvUrl: LocalizedString;
  skills: string[];
  detailedSkills: {
    category: LocalizedString;
    iconName: string;
    items: string[];
  }[];
  experience: {
    company: string;
    role: LocalizedString;
    date: string;
    description: LocalizedString;
    technologies: string[];
  }[];
  education: {
    degree: LocalizedString;
    institution: LocalizedString;
    period: LocalizedString;
  }[];
};
