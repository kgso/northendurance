import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"

import groupShot from "../assets/images/shots/group-shot-commons.jpg"

const Seo = ({ title }) => {
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
        content="Welcome to North Endurance, where we find strength in community. We specialize in group fitness, strength training, and personalized coaching, offering a supportive and energetic environment to help you reach your goals. Get started with us today!"
      />
      <meta
        name="keywords"
        content="North Endurance, Halifax, CrossFit, Gym, Fitness, Group Fitness, Strength Training, Personal Coaching, Community, Halifax CrossFit, North Endurance Halifax, CrossFit Kinetics"
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
        content="Welcome to North Endurance, where we find strength in community. We specialize in group fitness, strength training, and personalized coaching, offering a supportive and energetic environment to help you reach your goals. Get started with us today!"
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

export default Seo
