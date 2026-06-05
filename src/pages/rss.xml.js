import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import SiteOptions from "../site.config.mjs"

export async function GET(context) {
  const articles = await getCollection('article');

  return rss({
    // `<title>` field in output xml
    title: SiteOptions.siteTitle,

    // `<description>` field in output xml
    description: SiteOptions.siteSubTitle,

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
      pubDate: post.data.pubDate,
      description: post.data.description,
      // Compute RSS link from post `id`
      link: `/article/${post.id}/`,
    })),

    // (optional) inject custom xml
    customData: `<language>pt-br</language>`,
  });
}
