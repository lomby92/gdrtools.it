module.exports = {
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
        icon: `src/images/icon.png`,
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
