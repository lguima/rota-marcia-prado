import { getCollection } from 'astro:content'

export async function getMenuItems(levels: number[]) {
  return (
    await getCollection('menu', ({ data }) => {
      return data.levels.some(level => levels.includes(level))
    })
  ).sort((a, b) => a.data.order - b.data.order)
}
