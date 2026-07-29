import { defineCollection } from 'astro:content'
import { z } from 'astro/zod'
import { glob } from 'astro/loaders'
import content from '@config/content.mjs'

const article = defineCollection({
  loader: glob({
    base: './src/content/article',
    pattern: '**/[^_]*.{md,mdx}',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default(content.authors.defaultName),
    category: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    thumb: z.string().optional(),
    large: z.string().optional(),
  }),
});

export const collections = {
  article: articleCollection,
};
