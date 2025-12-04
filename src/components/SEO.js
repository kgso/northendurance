import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"

import groupShot from "../assets/images/heros/promo_photos_north_endurance_photo_credit_stoometzphoto_223.jpg"

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
        content="An open-armed group fitness gym located in Halifax's North End. We specialize in functional strength training and moderate to high intensity conditioning. Along with group classes, we offer personal training, team training, and open gym access."
      />
      <meta
        name="keywords"
        content="North Endurance, Halifax, group fitness, functional strength training, conditioning, personal training, team training, open gym, inclusive gym, North End, fitness classes, Halifax gym, strength, community, HIIT, functional fitness, Halifax personal training, Halifax team training, Halifax open gym"
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
        content="An open-armed group fitness gym located in Halifax's North End. We specialize in functional strength training and moderate to high intensity conditioning. Along with group classes, we offer personal training, team training, and open gym access."
      />
      <meta property="og:image" content={groupShot} />
      <meta property="og:image:alt" content="North Endurance" />
      <meta property="og:site_name" content="North Endurance" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="theme-color" content="#9f2a31" />
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
