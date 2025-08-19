import React, { useState } from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import coaches from "../assets/data/coaches.js"

const coachImageQuery = graphql`
  query {
    adam: file(relativePath: { eq: "coaches/adam.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ryan: file(relativePath: { eq: "coaches/ryan.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    catherine: file(relativePath: { eq: "coaches/catherine.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jess: file(relativePath: { eq: "coaches/jess.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nicole: file(relativePath: { eq: "coaches/nicole.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sarah: file(relativePath: { eq: "coaches/sarah.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Coaches = () => {
  return (
    <StaticQuery query={coachImageQuery}>
      {data => (
        <section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {coaches.map((coach, idx) => {
                const imageData = coach.imageKey && data[coach.imageKey]

                return (
                  <div
                    key={idx}
                    className="bg-white rounded-xl overflow-hidden shadow-md p-6"
                  >
                    {imageData && (
                      <Img
                        fluid={imageData.childImageSharp.fluid}
                        alt={coach.name}
                        className="w-full h-80 object-cover rounded-lg"
                        imgStyle={{
                          objectFit: "cover",
                          objectPosition: "center top",
                        }}
                      />
                    )}
                    <div className="mt-4">
                      <p className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                        <span>{coach.name}</span>
                        {coach.pronouns && (
                          <span className="text-sm text-gray-500 font-normal">
                            ({coach.pronouns})
                          </span>
                        )}
                      </p>

                      {coach.role && (
                        <p className="text-sm text-gray-600 mt-1">
                          {coach.role}
                        </p>
                      )}

                      {coach.trainings?.length > 0 && (
                        <p className="text-sm text-gray-700 mt-3">
                          <strong>Training:</strong>{" "}
                          {coach.trainings.join(", ")}
                        </p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}
    </StaticQuery>
  )
}

export default Coaches
