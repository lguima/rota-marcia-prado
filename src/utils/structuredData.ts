import type { CollectionEntry } from 'astro:content'
import site from '@config/site.mjs'
import media from '@config/media.mjs'

const context = 'https://schema.org'

function getProjectSchema() {
  return {
    '@type': 'Project',
    name: site.name,
    description: site.subTitle,
    logo: `${media.url}/rota-marcia-prado/image/upload/rota-marcia-prado-logo_bupnqd.png`,
    sameAs: 'https://github.com/lguima/rota-marcia-prado',
  }
}

export function getWebsiteSchema(siteUrl: URL | undefined) {
  return {
    '@context': context,
    '@type': 'WebSite',
    name: site.name,
    alternateName: [site.metadata.alternateName],
    description: site.metadata.description,
    url: siteUrl,
    about: getProjectSchema(),
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
