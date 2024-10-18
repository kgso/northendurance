import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import GroupFitnessProgram from "../components/Programs/GroupFitness"
import PageHero from "../components/PageHero"

const GroupFitness = () => {
  return (
    <Layout moreSpace>
      <SEO title="Group Fitness | North Endurance" />
      <div className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-center mt-12">
          <PageHero title="Group Fitness" />
        </div>
        <GroupFitnessProgram />
      </div>
    </Layout>
  )
}

export default GroupFitness
