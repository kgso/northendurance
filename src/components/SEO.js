import React from "react"
import Helmet from "react-helmet"

import groupShot from "../assets/images/shots/group-shot-commons.jpg"

const SEO = ({ title, data }) => {
  return (
    <Helmet title={title}>
      <title>{title}</title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={window.location.href} />
      <meta
        name="description"
        content="Welcome to North Endurance - home of West Street CrossFit!"
      />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:locale" content="en_CA" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="North Endurance" />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content="Welcome to North Endurance - home of West Street CrossFit!"
      />
      <meta property="og:image" content={groupShot} />
      <meta property="og:site_name" content="North Endurance" />
    </Helmet>
  )
}

export const HomePageQuery = graphql`
  query {
    file(relativePath: { eq: "shots/group-shot-commons.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1280, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default SEO
