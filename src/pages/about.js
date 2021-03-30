import React from "react"

import ClientStories from "../components/ClientStories"
import Coaches from "../components/Coaches"
import CTA from "../components/CTA"
import Grid from "../components/Grid"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const About = () => {
  return (
    <Layout>
      <SEO title="About | North Endurance" />
      <Hero />
      <div className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8">
        <h2 className="text-base text-yellow-600 font-semibold tracking-wide uppercase">
          About North Endurance
        </h2>
        <Coaches />
        <ClientStories />
        <Grid />
        <CTA />
      </div>
    </Layout>
  )
}

export default About
