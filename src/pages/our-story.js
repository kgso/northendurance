import React from "react"

import ClientStories from "../components/ClientStories"
import Layout from "../components/Layout"
import PageHero from "../components/PageHero"
import Seo from "../components/Seo"

const OurStory = () => {
  return (
    <Layout>
      <Seo title="Our Story | North Endurance" />
      <div className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8">
        <PageHero title="Our Story" />
        <ClientStories />
      </div>
    </Layout>
  )
}

export default OurStory
