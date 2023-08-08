import React from "react"

import Coaches from "../components/Coaches"
import Layout from "../components/Layout"
import PageHero from "../components/PageHero"
import Seo from "../components/Seo"

const Team = () => {
  return (
    <Layout>
      <Seo title="Meet Our Team | North Endurance" />
      <div className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8">
        <PageHero title="Meet Our Team" />
        <Coaches />
      </div>
    </Layout>
  )
}

export default Team
