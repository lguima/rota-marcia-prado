import { getCollection } from 'astro:content'

export async function getFaqs() {
  return (await getCollection('faq')).sort((a, b) => a.data.order - b.data.order)
}
