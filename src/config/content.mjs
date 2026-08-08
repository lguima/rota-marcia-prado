import site from "./site.mjs";

/**
 * Content
 */
export default {
  featuredPosts: {
    listSize: 5,
  },
  latestPosts: {
    listSize: 5, // Number of posts in the list
  },
  posts: {
    pagination: {
      pageSize: 6, // Number of posts per page
    },
    similarPosts: {
      listSize: 3,
    }
  },
  authors: {
    defaultName: site.name,
    pagination: {
      pageSize: 6, // Number of posts per page
    },
  },
}
