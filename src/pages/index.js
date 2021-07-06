import React from "react"
import Img from "gatsby-image"
import CTA from "../components/CTA"
import Hero from "../components/Hero"
import Layout from "../components/Layout"

import SEO from "../components/SEO"
import SafetyNotice from "../components/SafetyNotice"

const Home = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home | North Endurance" />
      <Hero />
      <Img fluid={data.file.childImageSharp.fluid} className="max-h-96" />
      <SafetyNotice />
      {/* <CTA /> */}
    </Layout>
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

export default Home
