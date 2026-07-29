import { getCollection } from 'astro:content';

export async function getActiveAlerts() {
  return (await getCollection('alert', ({ data }) => data.active === true))
  .sort((a, b) => {
    if (a.data.severity !== b.data.severity) {
      return a.data.severity - b.data.severity;
    }
    return b.data.publishDate.valueOf() - a.data.publishDate.valueOf();
  })
}
