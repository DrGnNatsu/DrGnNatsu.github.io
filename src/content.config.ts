import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(['concept', 'in-progress', 'completed', 'archived']).default('completed'),
    featured: z.boolean().default(false),
    category: z.enum(['ai-ml', 'full-stack', 'devops', 'data', 'other']).default('other'),
    tags: z.array(z.string()).default([]),
    tech: z.array(z.string()).default([]),
    liveUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    image: z.string().optional(),
    date: z.date().optional(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    published: z.boolean().default(true),
    date: z.date(),
    readingTime: z.string().optional(),
  }),
});

export const collections = { projects, blog };
