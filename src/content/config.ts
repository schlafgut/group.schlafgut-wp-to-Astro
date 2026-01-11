import { defineCollection, z } from 'astro:content';

const jobs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    gender: z.string().default('m/w/d'),
    employmentType: z.enum(['vollzeit', 'teilzeit', 'werkstudent', 'praktikum']).default('vollzeit'),
    location: z.string().default('Eislingen'),
    contactEmail: z.string().email().default('bewerbung@schlafgut.com'),
    published: z.boolean().default(true),
    tasks: z.string().optional(),
    requirements: z.string().optional(),
    benefits: z.string().optional(),
  }),
});

export const collections = { jobs };
