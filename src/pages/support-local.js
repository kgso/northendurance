import React from "react"
import Layout from "../components/Layout"
import PageHero from "../components/PageHero"
import SEO from "../components/SEO"
import SupportLocalGrid from "../components/SupportLocalGrid"

const SupportLocal = () => (
  <Layout moreSpace>
    <SEO title="Support Local | North Endurance" />
    <div className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8">
      <PageHero title="Support Local" />
      <SupportLocalGrid />
    </div>
  </Layout>
)

export default SupportLocal
