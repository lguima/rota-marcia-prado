import rss from '@astrojs/rss'
import site from '@config/site.mjs'
import { getPublishedArticles } from '@utils/collections/article'

export async function GET(context) {
  const articles = await getPublishedArticles()

  return rss({
    // `<title>` field in output xml
    title: site.name,

    // `<description>` field in output xml
    description: site.subTitle,

    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#site
    site: context.site,

    // Whether to add a trailing slash to the end of every item link
    trailingSlash: false,

    // (optional) specify a custom stylesheet for your RSS feed
    stylesheet: '/rss/styles.xsl',

    // Array of `<item>`s in output xml
    items: articles.map((post) => ({
      title: post.data.title,
      publishDate: post.data.publishDate,
      description: post.data.description,
      // Compute RSS link from post `id`
      link: `/artigos/${post.id}/`,
    })),

    // (optional) inject custom xml
    customData: `<language>pt-br</language>`,
  })
}
