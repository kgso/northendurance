import React from "react"
import CTA from "../components/CTA"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import ProgramList from "../components/ProgramList"
import SEO from "../components/SEO"

const Programs = () => {
  return (
    <Layout>
      <SEO title="Programs | North Endurance" />
      <Hero />
      <div className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8">
        <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
          Programs
        </h2>
        <ProgramList />
        <CTA />
      </div>
    </Layout>
  )
}

export default Programs
