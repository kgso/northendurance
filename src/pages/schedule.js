import React from "react"
import Layout from "../components/Layout"
import PageHero from "../components/PageHero"
import SEO from "../components/SEO"

const Schedule = () => {
  return (
    <Layout>
      <SEO title="Schedule | North Endurance" />
      <div className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8">
        <PageHero title="Schedule" />
        <div className="my-4">
          <iframe
            id="idZenPlannerFrame"
            style={{ width: "100%", height: "500px" }}
            title="ZenPlanner North Endurance Schedule"
            src="https://northendurance.zenplanner.com/zenplanner/portal/calendar.cfm?frame=true&amp;VIEW=week"
            frameborder="0"
          ></iframe>
          <script src="https://northendurance.zenplanner.com/zenplanner/skin/js/resize.js"></script>
        </div>
      </div>
    </Layout>
  )
}

export default Schedule
