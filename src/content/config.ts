import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
  }),
});

const spells = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string().min(20),
    difficulty: z.enum(['Novice', 'Adept', 'Archmage']),
    domain: z.enum([
      'Backend',
      'Data',
      'Automation',
      'Tooling',
      'Observability',
      'Infrastructure',
    ]),
    stack: z.array(z.string()).min(1),
    status: z.enum(['Active', 'Complete', 'Archived']),
    publishedAt: z.date(),
    featured: z.boolean().default(false),
  }),
});

const notes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string().min(20),
    domain: z.enum([
      'Backend',
      'Data',
      'Automation',
      'Tooling',
      'Observability',
      'Infrastructure',
      'Reliability',
    ]),
    tags: z.array(z.string()).min(1),
    publishedAt: z.date(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  pages,
  spells,
  notes,
};
