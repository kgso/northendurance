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
      <div className="mt-24 mb-64">
        <h2 class="mt-2 text-xl md:mt-0 md:text-2xl lg:text-3xl tracking-tight font-extrabold text-gray-900">
          COMING SOON!
        </h2>
      </div>
    </div>
  </Layout>
)

export default SupportLocal
