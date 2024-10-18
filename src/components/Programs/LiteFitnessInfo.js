import React from "react"
import Img from "gatsby-image"
import { graphql, StaticQuery } from "gatsby"

const LiteFitnessInfo = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          cfl_1: file(relativePath: { eq: "cfl/cfl_1.jpeg" }) {
            childImageSharp {
              fluid(maxWidth: 350, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          cfl_2: file(relativePath: { eq: "cfl/cfl_2.jpeg" }) {
            childImageSharp {
              fluid(maxWidth: 350, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          cfl_3: file(relativePath: { eq: "cfl/cfl_3.jpeg" }) {
            childImageSharp {
              fluid(maxWidth: 350, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          cfl_4: file(relativePath: { eq: "cfl/cfl_4.jpeg" }) {
            childImageSharp {
              fluid(maxWidth: 350, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          cfl_5: file(relativePath: { eq: "cfl/cfl_5.jpeg" }) {
            childImageSharp {
              fluid(maxWidth: 350, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
    >
      {data => (
        <div class="lg:pb-32">
          <div class="my-12 flex flex-col lg:flex-row lg:justify-between lg:items-center">
            <div className="w-full lg:w-8/12">
              <p className="md:text-xl text-gray-500">
                Lite Fitness is <b>fitness for everyone!</b> While following the
                same quality programming as our regular classes, our Lite
                program puts a heightened focus on safe movement with lighter
                weights and regularly revisiting the importance of our
                foundations in the pursuit of long term health and wellness.
              </p>
            </div>
            <div class="lg:w-3/12 h-full w-full mt-4">
              <Img
                className="rounded-xl w-2/4 m-auto md:w-full md:max-w-lg "
                fluid={data.cfl_1.childImageSharp.fluid}
                alt="Lite Fitness"
              />
            </div>
          </div>

          <div class="my-12 flex flex-col lg:justify-between lg:flex-row lg:items-center">
            <div class="lg:w-3/12 h-full w-full mt-4">
              <Img
                className="rounded-xl w-2/4 m-auto md:w-full md:max-w-lg "
                fluid={data.cfl_2.childImageSharp.fluid}
                alt="Lite Fitness"
              />
            </div>
            <div className="w-full lg:w-8/12">
              <p class="mt-4 md:text-xl text-gray-500">
                We aren't kidding when we say Lite Fitness is for everyone -{" "}
                <b>
                  we have strived to go above and beyond for parents and
                  guardians with new little ones, or seniors looking to try
                  something new and fun,
                </b>{" "}
                to create a space and program that works for your lifestyles!
              </p>
            </div>
          </div>

          <div class="my-12 flex flex-col lg:flex-row lg:justify-between lg:items-center">
            <div className="w-full lg:w-8/12">
              <p class="mt-4 md:text-xl text-gray-500">
                In addition, we understand that the typical "high intensity,
                loud music, and weights dropping" environment often associated
                with certain fitness programs isn't for everyone. That's why in
                our Lite program we restrict the volume of the music, we don't
                drop weights, and we maintain a more relaxing vibe while still
                making sure that you get a great workout!
              </p>
            </div>
            <div class="lg:w-3/12 h-full w-full mt-4">
              <Img
                className="rounded-xl w-2/4 m-auto md:w-full md:max-w-lg "
                fluid={data.cfl_3.childImageSharp.fluid}
                alt="Lite Fitness"
              />
            </div>
          </div>

          <div class="my-12 flex flex-col lg:justify-between lg:flex-row lg:items-center">
            <div class="lg:w-3/12 h-full w-full mt-4">
              <Img
                className="rounded-xl w-2/4 m-auto md:w-full md:max-w-lg "
                fluid={data.cfl_4.childImageSharp.fluid}
                alt="Lite Fitness"
              />
            </div>
            <div className="w-full lg:w-8/12">
              <p class="mt-4 md:text-xl text-gray-500">
                If you are a parent or guardian with a young baby, and need
                space to set up a playard or playpen - we have that. If you are
                a senior looking to improve your strength, mobility, or cardio
                to chase your grandchildren around the park - this program will
                help you do that. Or simply if you are someone who is interested
                in a great workout with friends without any sort of intimidation
                this is what you're looking for!
              </p>
            </div>
          </div>

          <div class="my-12 flex flex-col lg:flex-row lg:justify-between lg:items-center">
            <div className="w-full lg:w-8/12">
              <p class="mt-4 md:text-xl text-gray-500">
                We're very excited that due to the popularity of Lite Fitness
                the program has expanded and is now offered{" "}
                <b>
                  3 times per week - Mondays, Wednesdays and Fridays at 1:30pm!
                </b>{" "}
                Flexible membership options are available to suit you! If you're
                ready to sign up, interested in a free trial class, or have any
                other questions please click here to{" "}
                <a
                  href="mailto:info@northendurance.ca"
                  className="text-red-600 hover:text-gray-500"
                >
                  email us
                </a>
                !
              </p>
            </div>
            <div class="lg:w-3/12 h-full w-full mt-4">
              <Img
                className="rounded-xl w-2/4 m-auto md:w-full md:max-w-lg "
                fluid={data.cfl_5.childImageSharp.fluid}
                alt="Lite Fitness"
              />
            </div>
          </div>
        </div>
      )}
    </StaticQuery>
  )
}

export default LiteFitnessInfo
