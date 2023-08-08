import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import PageHero from "../components/PageHero"
import Seo from "../components/Seo"

const Inclusion = ({ data }) => {
  return (
    <Layout>
      <Seo title="Inclusion | North Endurance" />
      <PageHero title="Inclusion" />
      <div className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8">
        <div
          id="out-foundation"
          className="flex flex-col-reverse justify-between lg:flex-row-reverse lg:items-center lg:justify-between my-12"
        >
          <a
            href="https://theoutfoundation.org/"
            target="_blank"
            rel="noreferrer"
            className="lg:w-3/12 w-2/4 m-auto h-full mt-4"
          >
            <Img
              fluid={data.file.childImageSharp.fluid}
              className="rounded-xl lg:max-w-lg"
              alt="The Out Foundation"
            />
          </a>

          <div className="mt-6 w-full lg:w-8/12">
            <p class="mt-4 text-lg text-gray-500">
              The OUT Foundation is on a mission to remove the barriers that
              block LGBTQ+ people from accessing and participating in fitness,
              health, and wellness. The foundation is dedicated to nurturing,
              empowering, and celebrating LGBTQ+ bodies and minds.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const InclusionQuery = graphql`
  query {
    file(relativePath: { eq: "shots/out-foundation.png" }) {
      childImageSharp {
        fluid(maxWidth: 1280, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Inclusion
