import React from "react"
import Img from "gatsby-image"
import { graphql, StaticQuery } from "gatsby"

const GroupFitness = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          rightStart: file(
            relativePath: { eq: "shots/right_start_classes.jpg" }
          ) {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          weightlifting: file(
            relativePath: { eq: "shots/weightlifting-1024x768.jpg" }
          ) {
            childImageSharp {
              fluid(maxWidth: 350, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          fitness: file(relativePath: { eq: "shots/northendurance.jpg" }) {
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
        <div class="lg:pb-32">
          {/* Group Fitness */}
          <div
            id="group-fitness"
            class="my-12 flex flex-col lg:flex-row lg:justify-between lg:items-center"
          >
            <div className="w-full lg:w-7/12">
              <p className="text-lg text-gray-500">
                Are you looking for a change to your current workout program?
                Have you hit a plateau because of your current routine? Whether
                you consider yourself a competitor or are someone looking to
                tackle every day life with a little bit more energy - our Group
                Fitness classes are for you!
              </p>
              <p className="mt-4 text-lg text-gray-500">
                All Group Fitness classes are led by one of our trainers. Each
                class begins with a warm-up to help athletes prepare for the
                class and safely execute their workout. Strength training and
                high intensity workouts are regularly incorporated into classes
                as well as skill development, mobility, and stretching. Your
                trainer is there with you every step of the way, not just
                leading the class, but providing coaching cues catered to each
                athlete to help you get better.
              </p>
            </div>
            <div class="lg:w-4/12 h-full w-full mt-4">
              <Img
                className="rounded-xl w-2/4 m-auto md:w-full md:max-w-lg "
                fluid={data.fitness.childImageSharp.fluid}
                alt="North Endurance"
              />
            </div>
          </div>

          {/* Introduction To Group Fitness */}
          <div
            id="introduction-to-group-fitness"
            class="my-12 flex flex-col lg:justify-between lg:flex-row lg:items-center"
          >
            <div className="w-full lg:w-7/12">
              <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">
                Introduction to Group Fitness
              </h2>
              <p class="mt-4 text-lg text-gray-500">
                Our Group Fitness classes are functional movements executed at a
                high intensity. The program is meant to promote a healthy
                lifestyle and it is designed for everyone! And while our Group
                Fitness classes are made for everyone, knowing the foundational
                movements is paramount to a safe and effective future in your
                training. That's where our Introduction program comes in!
              </p>
              <p class="mt-4 text-lg text-gray-500">
                This 3 session program is meant to teach you the foundational
                movements, basic gymnastics, terminology, and introduce athletes
                to the North Endurance community! In 3 x 60 minute sessions,
                you'll be ready to begin your fitness journey with us. Whether
                you are currently training at a gym, have a background in sport,
                or are just trying to get started, please consult with us to
                talk about what the best next step is for you. If you're
                interested in getting started, email us at{" "}
                <a
                  href="mailto:info@northendurance.ca"
                  className="text-red-600 hover:text-gray-500"
                >
                  info@northendurance.ca
                </a>
                !
              </p>
            </div>
            <div class="w-full lg:w-4/12 h-full mt-4">
              <Img
                className="rounded-xl w-2/4 m-auto md:w-full md:max-w-lg "
                fluid={data.rightStart.childImageSharp.fluid}
                alt="Right Start"
              />
            </div>
          </div>
        </div>
      )}
    </StaticQuery>
  )
}

export default GroupFitness
