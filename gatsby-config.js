module.exports = {
    pathPrefix: "/Summer20",
    siteMetadata: {
        siteTitle: `DAB! Summer 2020`,
        defaultTitle: `DAB! Summer 2020`,
        siteTitleShort: `DAB! Summer 2020`,
        siteDescription: `Static Web App for DAB 2020`,
        siteUrl: `https://williepayne.com`,
        siteAuthor: `@huriphoonado`,
        siteImage: `/favicon.png`,
        siteLanguage: `en`,
        themeColor: `#7159c1`,
        basePath: `/`,
        footer: `AMPED Research | STEM From Dance`,
    },
    plugins: [
        {
            resolve: `@rocketseat/gatsby-theme-docs`,
            options: {
                configPath: `src/config`,
                docsPath: `src/docs`,
                githubUrl: `https://github.com/rocketseat/gatsby-themes`,
                baseDir: `examples/gatsby-theme-docs`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Rocketseat Gatsby Themes`,
                short_name: `RS Gatsby Themes`,
                start_url: `/`,
                background_color: `#ffffff`,
                display: `standalone`,
                icon: `static/favicon.png`,
            },
        },
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // trackingId: ``,
            },
        },
        {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
                siteUrl: `https://rocketdocs.netlify.com`,
            },
        },
        `gatsby-plugin-offline`,
    ],
};
