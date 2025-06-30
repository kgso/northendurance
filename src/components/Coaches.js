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
    charles: file(relativePath: { eq: "coaches/charles.jpg" }) {
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
  const [activeCoach, setActiveCoach] = useState(null)

  return (
    <StaticQuery query={coachImageQuery}>
      {data => (
        <section className="my-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coaches.map((coach, idx) => {
              const isActive = activeCoach === idx
              const imageData = coach.imageKey && data[coach.imageKey]

              return (
                <div
                  key={idx}
                  className="bg-white shadow-sm rounded-lg overflow-hidden transition-all duration-300"
                >
                  {!isActive ? (
                    <div className="flex flex-col">
                      {imageData && (
                        <Img
                          fluid={imageData.childImageSharp.fluid}
                          alt={coach.name}
                          className="w-full h-[450px] object-cover"
                          imgStyle={{
                            objectFit: "cover",
                            objectPosition: "center top",
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      )}
                      <div className="p-6 text-black">
                        <p className="text-xl font-bold">{coach.name}</p>
                        {/* <p className="text-sm">
                          <p className="text-sm">
                            {Array.isArray(coach.role) ? coach.role.join(", ") : coach.role}
                          </p>
                        </p> */}

                        {coach.trainings?.length > 0 && (
                          <p className="text-sm text-gray-800 mt-3">
                            <strong>Training:</strong>{" "}
                            {coach.trainings.join(", ")}
                          </p>
                        )}

                        {coach.bio && (
                          <button
                            onClick={() => setActiveCoach(idx)}
                            className="mt-4 inline-block bg-yellow-500 text-white text-sm font-medium py-1.5 px-4 rounded hover:bg-yellow-600 transition"
                          >
                            View Bio
                          </button>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="p-6 text-black animate-slide-up">
                      <button
                        onClick={() => setActiveCoach(null)}
                        className="mb-4 text-sm text-blue-600 underline"
                      >
                        ← Back
                      </button>
                      <div
                        className="text-sm text-gray-800 transition-opacity duration-300"
                        dangerouslySetInnerHTML={{ __html: coach.bio }}
                      />
                      {coach.personalSite && (
                        <a
                          href={coach.personalSite}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block mt-4 text-blue-700 font-medium underline"
                        >
                          Visit Personal Training Website
                        </a>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>
      )}
    </StaticQuery>
  )
}

export default Coaches
