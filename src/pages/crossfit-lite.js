import React from "react"
import Layout from "../components/Layout"
import CrossFitLiteInfo from "../components/CrossFitLiteInfo"
import Seo from "../components/Seo"
import background from "../assets/images/cfl/cfl_background.png"

const CrossFitLite = () => {
  return (
    <Layout moreSpace background={background}>
      <Seo title="CrossFit Lite | North Endurance" />
      <div className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8 md:w-4/6 md:m-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-center mt-12">
          <h1
            class="mt-2 text-2xl md:mt-0 md:text-2xl lg:text-4xl tracking-tight font-extrabold text-gray-900"
            style={{ fontFamily: "aAmpunBang", letterSpacing: "1px" }}
          >
            West Street CrossFit Lite
          </h1>
        </div>
        <CrossFitLiteInfo />
      </div>
    </Layout>
  )
}

export default CrossFitLite
