import React from "react"
import CTA from "../components/CTA"
import Grid from "../components/Grid"
import Hero from "../components/Hero"
import Layout from "../components/Layout"

const Home = () => {
  return (
    <Layout>
      <Hero />
      <CTA />
      <Grid />
    </Layout>
  )
}

export default Home
