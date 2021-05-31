import React from "react"

import ClientStories from "../components/ClientStories"
import Coaches from "../components/Coaches"
import CTA from "../components/CTA"
import Grid from "../components/Grid"
import Layout from "../components/Layout"
import PageHero from "../components/PageHero"
import SEO from "../components/SEO"

const About = () => {
  return (
    <Layout>
      <SEO title="About | North Endurance" />
      <div className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8">
        <PageHero title="About" />
        <Coaches />
        <ClientStories />
        <Grid />
        <CTA />
      </div>
    </Layout>
  )
}

export default About
