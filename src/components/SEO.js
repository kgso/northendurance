import React from "react"
import Helmet from "react-helmet"

import groupShot from "../assets/images/shots/group-shot-commons.jpg"

const SEO = ({ title, data }) => {
  console.log(data)
  return (
    <Helmet title={title}>
      <meta
        name="description"
        content="Welcome to North Endurance - home of West Street CrossFit!"
      />
      <meta property="og:type" content="article" />
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
