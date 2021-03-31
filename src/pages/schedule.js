import React from "react"
import CTA from "../components/CTA"
import Grid from "../components/Grid"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const Schedule = () => {
  return (
    <Layout>
      <SEO title="Schedule | North Endurance" />
      <Hero />
      <div className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8">
        <h2 class="text-base text-yellow-600 font-semibold tracking-wide uppercase">
          Schedule
        </h2>
        <div className="my-4">
          <iframe
            id="idZenPlannerFrame"
            style={{ width: "100%", height: "500px" }}
            title="ZenPlanner North Endurance Schedule"
            src="https://crossfitkineticsca.zenplanner.com/zenplanner/portal/calendar.cfm?frame=true&amp;VIEW=week"
            frameborder="0"
          ></iframe>
          <script src="https://crossfitkineticsca.zenplanner.com/zenplanner/skin/js/resize.js"></script>
        </div>
        <Grid />
        <CTA />
      </div>
    </Layout>
  )
}

export default Schedule
