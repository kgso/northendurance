import React from "react"
import Layout from "../components/Layout"
import PageHero from "../components/PageHero"
import SEO from "../components/SEO"
import SupportLocalGrid from "../components/SupportLocalGrid"

const SupportLocal = () => (
  <Layout>
    <SEO title="Support Local | North Endurance" />
    <PageHero title="Support Local" />
    <div className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
      <SupportLocalGrid />
    </div>
  </Layout>
)

export default SupportLocal
