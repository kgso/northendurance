import React from "react"

import Coaches from "../components/Coaches"
import Layout from "../components/Layout"
import PageHero from "../components/PageHero"
import SEO from "../components/SEO"

const Team = () => {
  return (
    <Layout>
      <SEO title="Schedule | North Endurance" />
      <div className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8">
        <PageHero title="Meet Our Team" />
        <Coaches />
      </div>
    </Layout>
  )
}

export default Team
