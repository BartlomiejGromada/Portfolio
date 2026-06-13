export type LocalizedString = { pl: string; en: string };

export interface SkillItem {
  name: string;
  description: LocalizedString;
  subcategory?: LocalizedString;
}

export interface SkillCategory {
  category: LocalizedString;
  iconName: string;
  description?: LocalizedString;
  items: SkillItem[];
}

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
  detailedSkills: SkillCategory[];
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
    thesisTitle?: LocalizedString;
    github?: string;
    description?: LocalizedString;
  }[];
  certificates: {
    title: LocalizedString;
    organizer: LocalizedString;
    date: LocalizedString;
    description: LocalizedString;
    certificateUrl?: LocalizedString;
    supplementUrl?: LocalizedString;
    highlight: boolean;
  }[];
};
