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
    pubDate: z.date(),
    author: z.string().default(content.authors.defaultName),
    category: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    thumb: z.string().optional(),
    large: z.string().optional(),
  }),
})

const ALERT_SEVERITIES = [1, 2] as const

const alert = defineCollection({
  loader: file('src/data/alerts.json'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    active: z.boolean().default(false),
    severity: z.union(ALERT_SEVERITIES.map((val) => z.literal(val)) as any),
    publishDate: z.coerce.date(),
    updateDate: z.coerce.date().optional(),
    post: reference('article'),
  }),
})

const announcement = defineCollection({
  loader: file('src/data/announcements.json'),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishStartDate: z.coerce.date(),
    publishEndDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    post: reference('article'),
  }),
})

export const collections = {
  alert,
  announcement,
  article,
}
