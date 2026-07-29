import { getCollection } from 'astro:content'

export async function getPublishedAnnouncements() {
  const now = new Date();

  return (await getCollection('announcement', ({ data }) => {
    return data.active && now >= new Date(data.publishStartDate) && now <= new Date(data.publishEndDate);
  }))
  .sort((a, b) =>
    new Date(b.data.publishStartDate).getTime() - new Date(a.data.publishStartDate).getTime()
  )
}
