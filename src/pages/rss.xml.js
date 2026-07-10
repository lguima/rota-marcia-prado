import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import site from "@config/site.mjs"

export async function GET(context) {
  const articles = await getCollection('article');
  const sortedArticles = articles.sort((a, b) => new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf())

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
    items: sortedArticles.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      // Compute RSS link from post `id`
      link: `/publicacao/${post.id}/`,
    })),

    // (optional) inject custom xml
    customData: `<language>pt-br</language>`,
  });
}
