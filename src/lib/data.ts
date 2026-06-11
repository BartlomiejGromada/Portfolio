import prisma from './prisma';
import { PortfolioDataType } from '@/types/portfolio';

export async function getPortfolioData(): Promise<PortfolioDataType> {
  // If no DATABASE_URL is provided, throw error
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set.");
  }

  // Try to fetch from database
  const profile = await prisma.profile.findFirst();
  const experience = await prisma.experience.findMany({ orderBy: { orderIndex: 'asc' } });
  const education = await prisma.education.findMany({ orderBy: { orderIndex: 'asc' } });
  const skills = await prisma.skillCategory.findMany({ orderBy: { orderIndex: 'asc' } });

  // If DB is empty, throw error
  if (!profile) {
    throw new Error("Database profile is empty. Please seed the database.");
  }

  // Map DB data to match the expected format
  return {
    name: profile.name,
    title: profile.title,
    description: profile.description,
    availabilityStatus: profile.availabilityStatus,
    socialLinks: {
      github: profile.githubUrl,
      linkedin: profile.linkedinUrl,
    },
    sourceCodeUrl: profile.sourceCodeUrl,
    cvUrl: profile.cvUrl,
    skills: profile.skillsSummary,
    detailedSkills: skills.map((s) => ({
      category: s.category,
      iconName: s.iconName,
      items: s.items,
    })),
    experience: experience.map((e) => ({
      company: e.company,
      role: e.role,
      date: e.date,
      description: e.description,
      technologies: e.technologies,
    })),
    education: education.map((e) => ({
      degree: e.degree,
      institution: e.institution,
      period: e.period,
    })),
  };
}
