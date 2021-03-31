import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from 'gatsby-image';

import coaches from "../assets/data/coaches.js"

const coachImageQuery = graphql`
  query {
    adam: file(relativePath: { eq: "coaches/adam.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 275, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    charles: file(relativePath: { eq: "coaches/charles.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 275, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    boo: file(relativePath: { eq: "coaches/boo.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 275, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    erinn: file(relativePath: { eq: "coaches/erinn.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 275, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    kim: file(relativePath: { eq: "coaches/kim.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 275, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Coaches = () => {
  return (
    <StaticQuery
      query={coachImageQuery}
    >
      {data =>
        <div className="my-10">
          <div
            id="product-marketing-sections"
            className="pt-8 grid grid-cols-1 gap-y-6 lg:grid-cols-4 lg:gap-5"
          >
            <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
              Coaches
        </h2>
            <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-6 md:grid-cols-4 lg:col-span-4">
              {coaches.map(coach => (
                <figure>
                  <div className="relative rounded overflow-hidden transition transform duration-150 ease-in-out">
                    {coach.imageKey && (
                      <Img
                        fluid={data[coach.imageKey].childImageSharp.fluid}
                        alt={coach.name}
                        className="w-full h-auto"
                      />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center text-center rounded-md opacity-15 transition ease-in-out duration-150"></div>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition ease-in-out duration-150"></div>
                  </div>
                  <figcaption className="mt-3">
                    {coach.name && (
                      <p className="text-sm font-bold text-yellow-500">{coach.name}</p>
                    )}
                    {coach.role && (
                      <p className="text-sm font-medium text-yellow-700">
                        {coach.role}
                      </p>
                    )}
                    {coach.qualifications && (
                      <p className="text-sm text-red-900">{coach.qualifications}</p>
                    )}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      }
    </StaticQuery>
  )
}

export default Coaches
