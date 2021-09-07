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
      <link
        rel="canonical"
        href={typeof window !== "undefined" ? window.location.href : ""}
      />
      <meta
        name="description"
        content="Welcome to North Endurance - home of West Street CrossFit! As the COVID-19 pandemic continues to affect our day to day lives, the health and safety of our athletes and community has never been more important to us. We are currently operating at a limited capacity as we work to keep North Endurance clean and safe! If you are interested in getting started with us, or you have any questions, please contact us!"
      />
      <meta
        name="keywords"
        content="North Endurance, Halifax, CrossFit, Gym, Fitness, Community, Halifax CrossFit, North Endurance Halifax, CrossFit Kinetics"
      />
      <meta
        property="og:url"
        content={typeof window !== "undefined" ? window.location.href : ""}
      />
      <meta property="og:locale" content="en_CA" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="North Endurance" />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content="Welcome to North Endurance - home of West Street CrossFit! As the COVID-19 pandemic continues to affect our day to day lives, the health and safety of our athletes and community has never been more important to us. We are currently operating at a limited capacity as we work to keep North Endurance clean and safe! If you are interested in getting started with us, or you have any questions, please contact us!"
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
