import React from "react"
import Coaches from "../components/Coaches"
import CTA from "../components/CTA"
import Grid from "../components/Grid"
import Hero from "../components/Hero"
import Layout from "../components/Layout"

const About = () => {
  return (
    <Layout>
      <Hero />
      <div className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8">
        <h2 class="text-base text-yellow-600 font-semibold tracking-wide uppercase">
          About North Endurance
        </h2>
        <Coaches />
        <Grid />
        <CTA />
      </div>
    </Layout>
  )
}

export default About
