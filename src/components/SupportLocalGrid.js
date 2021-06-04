import React from "react"
import Img from "gatsby-image"
import { graphql, StaticQuery } from "gatsby"

const SupportLocalGrid = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          stoke: file(relativePath: { eq: "support-local/fourthpull.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          chainyard: file(relativePath: { eq: "support-local/chainyard.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          freshprints: file(
            relativePath: { eq: "support-local/freshprints.jpg" }
          ) {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          brickyard: file(relativePath: { eq: "support-local/brickyard.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
    >
      {data => (
        <div className="flex flex-col w-full my-12">
          <h4
            className="text-4xl m-auto"
            style={{
              backgroundImage:
                "-webkit-linear-gradient(0deg, #FF0018, #FFA52C, #FFFF41, #008018, #0000F9, #86007D)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            #SupportLocal
          </h4>
          <div className="flex flex-col lg:flex-row w-full justify-center items-center">
            <a
              href="https://stokefood.ca/"
              target="_blank"
              noopener
              noreferrer
              className="w-full h-auto m-8"
              title="Stoke Food"
            >
              <Img fluid={data.stoke.childImageSharp.fluid} alt="Stoke Food" />
            </a>
            <a
              href="https://freshprintshalifax.com/"
              target="_blank"
              noopener
              noreferrer
              className="w-full h-auto m-8"
              title="Fresh Prints"
            >
              <Img
                fluid={data.freshprints.childImageSharp.fluid}
                alt="Fresh Prints"
              />
            </a>
            <a
              href="http://www.brickyardhealth.com/"
              target="_blank"
              noopener
              noreferrer
              className="w-full h-auto m-8"
              title="Brickyard Health"
            >
              <Img
                fluid={data.brickyard.childImageSharp.fluid}
                alt="Brickyard Health"
              />
            </a>
            <a
              href="https://chainyardcider.com/"
              target="_blank"
              noopener
              noreferrer
              className="w-full h-auto m-8"
              title="Chainyard Cider"
            >
              <Img
                fluid={data.chainyard.childImageSharp.fluid}
                alt="Chainyard Cider"
              />
            </a>
          </div>
        </div>
      )}
    </StaticQuery>
  )
}

export default SupportLocalGrid
