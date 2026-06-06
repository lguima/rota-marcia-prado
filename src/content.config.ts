import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import SiteOptions from "./site.config.mjs"

const articleCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/article" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default(SiteOptions.defaultAuthorName),
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
