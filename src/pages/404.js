import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const NotFound = ({ data }) => {
  return (
    <Layout>
      <SEO title="Page Not Found | North Endurance" />
      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
        Page Not Found
      </h1>
      <div className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
        <div className="w-full">
          <h2 className="text-xl font-extrabold tracking-tight text-gray-900">
            The page you are looking for does not exist.
          </h2>
        </div>
      </div>
    </Layout>
  )
}

export default NotFound
