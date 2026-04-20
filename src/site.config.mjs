export default {
    siteTitle: "Rota Márcia Prado", // Main site title displayed in header
    siteSubTitle: "Rota cicloturística entre a Região Metropolitana de São Paulo e Santos", // Subtitle shown under main title
    copyright: "© 2026 Rota Márcia Prado. Todos os direitos reservados.", // Footer copyright text
    showAuthorsOnHomePage: false, // Display author info on homepage
    showFeaturrdPostsOnHomePage: true, // Show featured posts section on homepage
    showCategoryOnPosts: true, // Display categories on posts in homepage
    labels: {
        featuredPosts: "Publicações em destaque", // Title for featured posts section
        latestPosts: "Publicações recentes", // Title for latest posts section
        viewAllPosts: "Ver todos as publicações", // Text for link to paginated blog
        backToHome: "Voltar ao início", // Back navigation text
        youMightAlsoLike: "Você também pode gostar", // Similar posts section title
        postedIn: "Publicado em", // Category prefix text in articles
        noArticlesFound: "Nenhuma informação encontrada.", // Empty state message
        allCategories: "Todas as categorias", // Categories page title
        allTags: "Todas os tópicos", // Tags page title
        allAuthors: "Todas autorias", // Authors page title
        categories: "Categorias", // Categories link text
        tags: "Tópicos", // Tags link text
        authors: "Autorias", // Authors link text
        exploreArticlesByTags: "Publicações por tópico", // Tags page description
        exploreArticlesByCategories: "Publicações organizados por categoria", // Categories page description
        exploreArticlesByAuthors: "Publicações organizados por autoria", // Authors page description
        readMore: "Ler mais", // Text for "Read More" links on featured posts
        shareThisArticle: "Compartilhar esta publicação", // Share button text
    },
    localization: { // Localization settings (e.g., date formats)
        locale: "pt-BR", // Locale code for formatting
        date: {
            year: "numeric", // Year format
            month: "long", // Month format
            day: "numeric", // Day format
        }
    },
    pagination: {
        showPrevNext: true, // Show Previous/Next navigation buttons
        prevText: "Anterior", // Text for previous page button
        nextText: "Próxima", // Text for next page button
        postLabel: "publicações", // Label used in pagination info (e.g., "8 posts")
    },
    defaultAuthorName: "Rota Márcia Prado", // Default author name if not specified in post frontmatter
    showCategoriesLinkOnFooter: true, // Show Categories link in footer
    showTagsLinkOnFooter: true, // Show Tags link in footer
    showAuthorsLinkOnFooter: true, // Show Authors link in footer
    showSimilarPosts: true, // Display similar posts on article pages
    showReadMoreLinkOnFeaturedPosts: true, // Show "Read More" on featured cards
    showThumbnailOnFeaturedPosts: true, // Display thumbnails on featured posts
    numberOfLatestPostsOnHomePage: 6, // Number of latest posts on homepage
    numberOfBlogPostsPerPage: 8, // Number of posts per paginated blog

    googleTag: {
        enabled: true, // Enable Google Analytics
        measurementId: "G-X8970LK9KF" // Google Analytics Measurement ID
    },
}
