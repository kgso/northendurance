import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import PersonalTraining from "../components/Programs/PersonalTraining"
import PageHero from "../components/PageHero"

const PT = () => {
  return (
    <Layout moreSpace>
      <SEO title="Personal Training | North Endurance" />
      <div className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-center mt-12">
          <PageHero title="Personal Training" />
        </div>
        <PersonalTraining />
      </div>
    </Layout>
  )
}

export default PT
