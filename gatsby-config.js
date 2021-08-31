const path = require("path")

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
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-141718999-3",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Defers execution of google analytics script after page load
        defer: false,
      },
    },
  ],
}
