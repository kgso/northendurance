import React from "react"
import Img from 'gatsby-image'
import CTA from "../components/CTA"
import Grid from "../components/Grid"
import Hero from "../components/Hero"
import Layout from "../components/Layout"

import SEO from "../components/SEO"


const Home = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home | North Endurance" />
      <Hero />
      <Img fluid={data.file.childImageSharp.fluid} />
      <Grid />
      <CTA />
    </Layout>
  )
}

export const HomePageQuery = graphql`
  query {
    file(relativePath: { eq: "shots/group_shot-1024x398.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1280, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default Home
