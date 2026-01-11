import { defineCollection, z } from 'astro:content';

const jobs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    gender: z.string().default('m/w/d'),
    employmentType: z.enum(['vollzeit', 'teilzeit', 'werkstudent', 'praktikum']).default('vollzeit'),
    location: z.string(),
    requirements: z.string().optional(),
    benefits: z.string().optional(),
    contactEmail: z.string().email().default('bewerbung@schlafgut.com'),
    published: z.boolean().default(true),
  }),
});

export const collections = { jobs };
