import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import Cta from "../components/Cta"
import Hero from "../components/Hero"
import Layout from "../components/Layout"

import Seo from "../components/Seo"
// import SafetyNotice from "../components/SafetyNotice"

const Home = ({ data }) => {
  return (
    <Layout>
      <Seo title="Home | North Endurance" />
      <h1 hidden>NORTH ENDURANCE</h1>
      <h2 hidden>The Home of West Street CrossFit</h2>
      <Hero />
      <Img fluid={data.file.childImageSharp.fluid} className="max-h-96" />
      {/* <SafetyNotice /> */}
      <Cta />
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
