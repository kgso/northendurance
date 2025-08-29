import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import coaches from "../assets/data/coaches.js"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const coachImageQuery = graphql`
  query {
    adam: file(
      relativePath: { eq: "coaches/headshot_adam_stoometzphoto.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 800
          quality: 90
          placeholder: BLURRED
          layout: CONSTRAINED
        )
      }
    }
    ry: file(relativePath: { eq: "coaches/headshot_ry_stoometzphoto.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 800
          quality: 90
          placeholder: BLURRED
          layout: CONSTRAINED
        )
      }
    }
    catherine: file(
      relativePath: { eq: "coaches/headshot_catherine_stoometzphoto.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 800
          quality: 90
          placeholder: BLURRED
          layout: CONSTRAINED
        )
      }
    }
    jess: file(
      relativePath: { eq: "coaches/headshot_jess_stoometzphoto.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 800
          quality: 90
          placeholder: BLURRED
          layout: CONSTRAINED
        )
      }
    }
    nicole: file(
      relativePath: { eq: "coaches/headshot_nicole_stoometzphoto.jpeg" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 800
          quality: 90
          placeholder: BLURRED
          layout: CONSTRAINED
        )
      }
    }
    sarah: file(
      relativePath: { eq: "coaches/headshot_sarah_stoometzphoto.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 800
          quality: 90
          placeholder: BLURRED
          layout: CONSTRAINED
        )
      }
    }
    erin: file(
      relativePath: { eq: "coaches/headshot_erin_stoometzphoto.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 800
          quality: 90
          placeholder: BLURRED
          layout: CONSTRAINED
        )
      }
    }
  }
`

const emailIconPath =
  "M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"

const Coaches = () => {
  const data = useStaticQuery(coachImageQuery)

  return (
    <section>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {coaches.map((coach, idx) => {
            const imageAvailable = coach.imageKey && data[coach.imageKey]

            return (
              <div key={idx}>
                {imageAvailable && (
                  <GatsbyImage
                    image={getImage(data[coach.imageKey]?.childImageSharp)}
                    alt={`Headshot of ${coach.name} (Photo © Stoo Metz)`}
                    className="rounded shadow-md w-full h-auto"
                  />
                )}

                <div className="mt-3 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  {/* Left side: name, pronouns, roles */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <span className="text-xl font-semibold text-gray-600 break-words">
                        {coach.name}
                      </span>
                      {coach.pronouns && (
                        <span className="text-sm font-bold text-black whitespace-nowrap">
                          ({coach.pronouns})
                        </span>
                      )}
                    </div>

                    {coach.roles && (
                      <p className="text-base font-bold text-black mt-1 break-words">
                        {coach.roles.join("; ")}
                      </p>
                    )}
                  </div>

                  {/* Right side: trainings */}
                  {coach.trainings?.length > 0 && (
                    <ul className="text-sm font-bold text-gray-600 space-y-1 text-right flex-shrink-0">
                      {coach.trainings.map((training, i) => (
                        <li
                          key={i}
                          className="flex items-center justify-end gap-1"
                        >
                          <span className="break-words">{training}</span>
                          {i === 0 && coach.email && (
                            <a
                              href={`mailto:${coach.email}`}
                              title={`Email ${coach.name}`}
                              className="inline-flex"
                            >
                              <svg
                                className="w-4 h-4 fill-gray-900"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d={emailIconPath} />
                              </svg>
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Coaches
