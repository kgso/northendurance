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
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
}
