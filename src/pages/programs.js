import React from "react"
import Layout from "../components/Layout"
import PageHero from "../components/PageHero"
import ProgramList from "../components/ProgramList"
import SEO from "../components/SEO"

const Programs = () => {
  return (
    <Layout moreSpace>
      <SEO title="Programs | North Endurance" />
      <div className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8">
        <PageHero title="Programs" />
        <ProgramList />
      </div>
    </Layout>
  )
}

export default Programs
