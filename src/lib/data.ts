import prisma from './prisma';
import { PortfolioDataType } from '@/types/portfolio';
import { cacheLife } from 'next/cache';

export async function getPortfolioData(): Promise<PortfolioDataType> {
  'use cache';
  cacheLife('database');

  // If no DATABASE_URL is provided, throw error
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set.");
  }

  // Try to fetch from database
  const profile = await prisma.profile.findFirst();
  const experience = await prisma.experience.findMany({ orderBy: { orderIndex: 'asc' } });
  const education = await prisma.education.findMany({ orderBy: { orderIndex: 'asc' } });
  const skills = await prisma.skillCategory.findMany({ orderBy: { orderIndex: 'asc' } });
  const certificates = await prisma.certificate.findMany({ orderBy: { orderIndex: 'asc' } });
  const projects = await prisma.project.findMany({ orderBy: { orderIndex: 'asc' } });

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
    email: profile.email,
    sourceCodeUrl: profile.sourceCodeUrl,
    cvUrl: profile.cvUrl,
    skills: profile.skillsSummary,
    detailedSkills: skills.map((s: any) => ({
      category: s.category,
      iconName: s.iconName,
      description: s.description || undefined,
      items: s.items.map((i: any) => ({
        name: i.name,
        description: i.description,
        subcategory: i.subcategory || undefined,
      })),
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
      thesisTitle: e.thesisTitle || undefined,
      github: e.github || undefined,
      description: e.description || undefined,
    })),
    certificates: certificates.map((c) => ({
      title: c.title,
      organizer: c.organizer,
      date: c.date,
      description: c.description,
      certificateUrl: c.certificateUrl || undefined,
      supplementUrl: c.supplementUrl || undefined,
      highlight: c.highlight,
    })),
    projects: projects.map((p) => ({
      id: p.id,
      title: p.title,
      description: p.description,
      technologies: p.technologies,
      githubUrl: p.githubUrl,
      iconName: p.iconName,
      featured: p.featured,
    }))
  };
}
