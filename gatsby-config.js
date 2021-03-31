const path = require('path');

module.exports = {
  pathPrefix: "/pizza",
  siteMetadata: {
    title: `North Endurance`,
    siteUrl: `https://northendurance.ca`,
    description: `North Endurance, home of West Street Crossfit`,
    twitter: "@northendurance",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`, `images`),
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
}
