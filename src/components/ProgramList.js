import React from "react"
import Img from 'gatsby-image'
import { graphql, StaticQuery } from "gatsby"

const ProgramList = () => {
  return (
    <StaticQuery query={
      graphql`
  query {
    yoga: file(relativePath: {eq: "shots/yoga2.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 350, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    weightlifting: file(relativePath: {eq: "shots/weightlifting-1024x768.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 350, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    rightStart: file(relativePath: {eq: "shots/IMG_1675.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 350, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    crossfit: file(relativePath: {eq: "shots/maskson.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 350, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  compPrep: file(relativePath: {eq: "shots/open-1024x683.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 350, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`}>
      {(data) => (

        <div className="my-10">
          <div className="flex items-center shadow ring-1 ring-blue-100 sm:rounded-md p-4 my-4">
            <Img className="w-1/3 h-full" fluid={data.yoga.childImageSharp.fluid} alt="Yoga" />
            <div className="w-2/3 m-10">
              <h2 className="text-base text-blue-500 font-semibold tracking-wide uppercase my-1.5">
                Yoga
              </h2>
              <p>
                Yoga is offered by Marie. This is a yin-style yoga where positions are
                held for longer periods of time to work into tight muscles, and can be
                a great way to relax and end the day.
              </p>
            </div>
          </div>
          <div className="flex items-center shadow ring-1 ring-yellow-100 sm:rounded-md p-4 my-4">
            <Img className="w-1/3 h-full" fluid={data.weightlifting.childImageSharp.fluid} alt="Weightlifting" />
            <div className="w-2/3 m-10">
              <h2 className="text-base text-yellow-500 font-semibold tracking-wide uppercase my-1.5">
                Weightlifting
          </h2>
          Weightlifting class is a great opportunity to work on the skills to
          perfect the technique for the core two olympic lifting movements: the
          snatch, and the clean and jerk.
        </div>
          </div>
          <div className="flex items-center shadow ring-1 ring-green-100 sm:rounded-md p-4 my-4">
            <Img className="w-1/3 h-full" fluid={data.rightStart.childImageSharp.fluid} alt="Right Start" />
            <div className="w-2/3 m-10">
              <h2 className="text-base text-green-500 font-semibold tracking-wide uppercase my-1.5">
                Right Start
          </h2>
          Yoga is offered by Marie. This is a yin-style yoga where positions are
          held for longer periods of time to work into tight muscles, and can be
          a great way to relax and end the day.
        </div>
          </div>
          <div className="flex items-center shadow ring-1 ring-red-100 sm:rounded-md p-4 my-4">
            <Img className="w-1/3 h-full" fluid={data.crossfit.childImageSharp.fluid} alt="CrossFit" />
            <div className="w-2/3 m-10">
              <h2 className="text-base text-red-500 font-semibold tracking-wide uppercase my-1.5">
                CrossFit
          </h2>
          Yoga is offered by Marie. This is a yin-style yoga where positions are
          held for longer periods of time to work into tight muscles, and can be
          a great way to relax and end the day.
        </div>
          </div>
          <div className="flex items-center shadow ring-1 ring-purple-100 sm:rounded-md p-4 my-4">
            <Img className="w-1/3 h-full" fluid={data.compPrep.childImageSharp.fluid} alt="Competition Prep" />
            <div className="w-2/3 m-10">
              <h2 className="text-base text-purple-500 font-semibold tracking-wide uppercase my-1.5">
                Competition Prep

          </h2>
          Yoga is offered by Marie. This is a yin-style yoga where positions are
          held for longer periods of time to work into tight muscles, and can be
          a great way to relax and end the day.
        </div>
          </div>
        </div>
      )
      }
    </StaticQuery>
  )
}


export default ProgramList
