require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "GDRTools.it",
    titleTemplate: "%s | GDRTools.it",
    description: `Raccolta di tool open source senza scopro di lucro per vari giochi di ruolo`,
    siteUrl: "https://www.gdrtools.it",
    image: "/images/logo.png",
  },
  plugins: [
     {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GDRTools.it`,
        short_name: `GDRTools.it`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#25262b`, // Use the 7th color of background for default theme
        display: `standalone`,
        icon: `src/images/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`, // This must be placed AFTER gatsby-plugin-manifest
      options: {
        // Support offline pages
        precachePages: [
          `/`,
          `/fabula-ultima/*`, // Just as an example
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        // The env is read from GATSBY_ACTIVE_ENV, falling back to NODE_ENV
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }]
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }]
          }
        }
      }
    },
    `gatsby-plugin-react-helmet`,
    /**
     * Sources
     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    /**
     * Transformers
     */
     `gatsby-plugin-image`,
     `gatsby-transformer-sharp`,
     {
       resolve: `gatsby-plugin-sharp`,
       options: {
         defaults: {
           formats: [
             `auto`,
             `webp`,
             `avif`,
           ],
           quality: 100,
           placeholder: "blurred",
         },
       },
     },
  ],
};
