import React from "react"
import CTA from "../components/CTA"
import Grid from "../components/Grid"
import Hero from "../components/Hero"
import Layout from "../components/Layout"

const Schedule = () => {
  return (
    <Layout>
      <Hero />
      <div class="flex-1 min-w-0">
        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
          Schedule
        </h2>
      </div>
      <CTA />
      <Grid />
    </Layout>
  )
}

export default Schedule
