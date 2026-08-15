import { defineCollection, reference } from 'astro:content'
import { z } from 'astro/zod'
import { file, glob } from 'astro/loaders'
import content from '@config/content.mjs'

const article = defineCollection({
  loader: glob({
    base: './src/content/article',
    pattern: '**/[^_]*.{md,mdx}',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().default(content.authors.defaultName),
    category: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    thumb: z.string().optional(),
    large: z.string().optional(),
    publishDate: z.coerce.date(),
    expirationDate: z.coerce.date().optional(),
    updateDate: z.coerce.date().optional(),
  }),
})

/**
 * Severities
 * 1: Danger (Red)
 * 2: Warning (Yellow)
 * 3: Success (Green)
 * 4: Info (Blue)
 */
const alert = defineCollection({
  loader: file('src/data/alerts.json'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    active: z.boolean(),
    severity: z.number().int().min(1).max(4),
    publishDate: z.coerce.date(),
    expirationDate: z.coerce.date().optional(),
    updateDate: z.coerce.date().optional(),
    article: reference('article'),
  }),
})

const faq = defineCollection({
  loader: file('src/data/faq.json'),
  schema: z.object({
    id: z.string(),
    order: z.number(),
    question: z.string(),
    answer: z.string(),
  }),
})

const menu = defineCollection({
  loader: file('src/data/menu.json'),
  schema: z.object({
    id: z.string(),
    order: z.number(),
    text: z.string(),
    href: z.string(),
  }),
})

export const collections = {
  alert,
  article,
  faq,
  menu,
}
