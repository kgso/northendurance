import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import WestStreetCrossFit from "../components/Programs/WestStreetCrossFit"
import PageHero from "../components/PageHero"

const WSCrossFit = () => {
  return (
    <Layout moreSpace>
      <SEO title="West Street CrossFit | North Endurance" />
      <div className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-center mt-12">
          <PageHero title="West Street CrossFit" />
        </div>
        <WestStreetCrossFit />
      </div>
    </Layout>
  )
}

export default WSCrossFit
