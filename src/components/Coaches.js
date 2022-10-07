import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import coaches from "../assets/data/coaches.js"

const coachImageQuery = graphql`
  query {
    adam: file(relativePath: { eq: "coaches/adam.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 275, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    charles: file(relativePath: { eq: "coaches/charles.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 275, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    rhea: file(relativePath: { eq: "coaches/rhea.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 275, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nicole: file(relativePath: { eq: "coaches/nicole.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 275, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sarah: file(relativePath: { eq: "coaches/sarah.jpg" }) {
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
    <StaticQuery query={coachImageQuery}>
      {data => (
        <div className="my-10">
          <div id="product-marketing-sections" className="pt-8 gap-y-6">
            <h2 className="text-lg text-red-600 font-semibold tracking-wide uppercase">
              Coaches
            </h2>
            {coaches.map(coach => (
              <div className="md:flex mt-5">
                <div className="py-4 md:p-0 md:w-1/3 rounded overflow-hidden transition transform duration-150 ease-in-out">
                  {coach.imageKey && (
                    <Img
                      fluid={data[coach.imageKey].childImageSharp.fluid}
                      alt={coach.name}
                      className="w-full object-fill object-top"
                      imgStyle={{ objectPosition: "50% 20%" }}
                    />
                  )}
                </div>
                <div className="md:w-2/3 md:mx-5 grid-cols-2 rounded overflow-hidden transition transform duration-150 ease-in-out">
                  {coach.name && (
                    <p className="tracking-tight text-lg md:text-base font-bold text-yellow-500">
                      {coach.name}
                    </p>
                  )}
                  {coach.role && (
                    <p className="text-base tracking-tight font-medium text-yellow-700">
                      {coach.role}
                    </p>
                  )}
                  {coach.bio && (
                    <div
                      className="text-base tracking-tight mt-2 text-grey-700 space-y-2"
                      dangerouslySetInnerHTML={{ __html: coach.bio }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </StaticQuery>
  )
}

export default Coaches

// sarah: file(relativePath: { eq: "coaches/sarah.jpg" }) {
//   childImageSharp {
//     fluid(maxWidth: 275, quality: 100) {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }
// jess: file(relativePath: { eq: "coaches/jess.jpg" }) {
//   childImageSharp {
//     fluid(maxWidth: 275, quality: 100) {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }
// sam: file(relativePath: { eq: "coaches/sam.jpg" }) {
//   childImageSharp {
//     fluid(maxWidth: 275, quality: 100) {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }
// boo: file(relativePath: { eq: "coaches/boo.jpg" }) {
//   childImageSharp {
//     fluid(maxWidth: 275, quality: 100) {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }
// marie: file(relativePath: { eq: "coaches/marie.jpg" }) {
//   childImageSharp {
//     fluid(maxWidth: 275, quality: 100) {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }
// keith: file(relativePath: { eq: "coaches/keith.jpg" }) {
//   childImageSharp {
//     fluid(maxWidth: 275, quality: 100) {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }
// melissa: file(relativePath: { eq: "coaches/melissa.jpg" }) {
//   childImageSharp {
//     fluid(maxWidth: 275, quality: 100) {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }
