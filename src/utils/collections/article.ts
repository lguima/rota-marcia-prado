import { getCollection, type CollectionEntry } from 'astro:content'
import content from '@config/content.mjs'

export async function getPublishedArticles() {
  const now = new Date()

  return (
    await getCollection('article', ({ data }) => {
      return new Date(data.pubDate) <= now
    })
  ).sort(
    (a, b) =>
      new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime(),
  )
}

export function getFeaturedArticles(articles: CollectionEntry<'article'>[]) {
  return articles
    .filter((article) => article.data.featured)
    .slice(0, content.featuredPosts.listSize)
}

export function getLatestArticles(articles: CollectionEntry<'article'>[]) {
  return articles.slice(0, content.latestPosts.listSize)
}
