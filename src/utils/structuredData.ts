import type { CollectionEntry } from 'astro:content'
import site from '@config/site.mjs'

const context = 'https://schema.org'

export function getWebsiteSchema(siteUrl: URL | undefined) {
  return {
    '@context': context,
    '@type': 'WebSite',
    name: site.name,
    alternateName: [site.metadata.alternateName],
    description: site.metadata.description,
    url: siteUrl,
  }
}

export function getFaqSchema(faqs: CollectionEntry<'faq'>[]) {
  return {
    '@context': context,
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.data.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.data.answer,
      },
    })),
  }
}
