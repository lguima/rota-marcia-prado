import { getCollection } from 'astro:content'

export async function getMenuItems() {
  return (await getCollection('menu')).sort((a, b) => a.data.order - b.data.order)
}
