import { getCollection } from 'astro:content'

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
