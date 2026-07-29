import { getCollection } from 'astro:content'

export async function getActiveAlerts() {
  const now = new Date()

  return (
    await getCollection('alert', ({ data }) => {
      return data.active && new Date(data.publishDate) <= now
    })
  ).sort((a, b) => {
    if (a.data.severity !== b.data.severity) {
      return a.data.severity - b.data.severity
    }
    return b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  })
}
