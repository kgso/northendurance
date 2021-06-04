import React from "react"

import Layout from "../components/Layout"
import PageHero from "../components/PageHero"
import SEO from "../components/SEO"

const Inclusion = () => {
  return (
    <Layout>
      <SEO title="About | North Endurance" />
      <div className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8">
        <PageHero title="Inclusion" />
      </div>
    </Layout>
  )
}

export default Inclusion
