import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const projects = defineCollection({
  loader: glob({
    pattern: '**/[^_]*.{md,mdx}',
    base: './src/content/projects',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z
      .enum(['concept', 'in-progress', 'completed', 'archived'])
      .default('completed'),
    featured: z.boolean().default(false),
    category: z
      .enum(['ai-ml', 'full-stack', 'devops', 'data', 'other'])
      .default('other'),
    tags: z.array(z.string()).default([]),
    tech: z.array(z.string()).default([]),
    liveUrl: z.url().optional(),
    repoUrl: z.url().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    date: z.date().optional(),
  }),
})

const blog = defineCollection({
  loader: glob({
    pattern: '**/[^_]*.{md,mdx}',
    base: './src/content/blog',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    published: z.boolean().default(true),
    date: z.date(),
    readingTime: z.string().optional(),
  }),
})

export const collections = { projects, blog }
