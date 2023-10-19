import React from "react"
import Img from "gatsby-image"
import { graphql, StaticQuery } from "gatsby"

const WestStreetCrossFit = () => {
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
          crossfit: file(relativePath: { eq: "shots/weststreet_cf.jpg" }) {
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
          {/* West Stree CrossFit */}
          <div
            id="west-street-crossfit"
            class="my-12 flex flex-col lg:flex-row lg:justify-between lg:items-center"
          >
            <div className="w-full lg:w-7/12">
              <p className="text-lg text-gray-500">
                Are you looking for a change to your current workout program?
                Have you hit a plateau because of your current routine? Whether
                you consider yourself a competitor or are someone looking to
                tackle every day life with a little bit more energy - our
                CrossFit classes are for you!
              </p>
              <p className="mt-4 text-lg text-gray-500">
                CrossFit defined is constantly varied high intensity exercise
                incorporating functional movements. Every day you show up to the
                box you’re going to get a workout that is completely different
                from what you did the day before - we keep the body guessing to
                avoid peaks and plateaus. A heightened intensity level is always
                encouraged so that our athletes can maximize their workout, but
                we also recognize that intensity is relative based on each
                athletes’ individual needs. The regular incorporation of
                functional movements - exercises and movement patterns your body
                was made to perform - helps our athletes improve their quality
                of life outside the walls of the gym.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                All CrossFit classes are led by one of our trainers. Each class
                begins with a warm-up to help athletes prepare for the class and
                safely execute their workout. Strength training and high
                intensity workouts are regularly incorporated into classes as
                well as skill development, mobility, and stretching. Your
                trainer is there with you every step of the way, not just
                leading the class, but providing coaching cues catered to each
                athlete to help you get better.
              </p>
            </div>
            <div class="lg:w-4/12 h-full w-full mt-4">
              <Img
                className="rounded-xl w-2/4 m-auto md:w-full md:max-w-lg "
                fluid={data.crossfit.childImageSharp.fluid}
                alt="West Street CrossFit"
              />
            </div>
          </div>

          {/* Introduction To CrossFit */}
          <div
            id="introduction-to-crossfit"
            class="my-12 flex flex-col lg:justify-between lg:flex-row lg:items-center"
          >
            <div className="w-full lg:w-7/12">
              <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">
                Introduction to CrossFit
              </h2>
              <p class="mt-4 text-lg text-gray-500">
                CrossFit is high intensity functional movements executed at a
                high intensity. The program is meant to promote a healthy
                lifestyle and it is designed for everyone! And while CrossFit is
                made for everyone, knowing the foundational movements is
                paramount to a safe and effective future in your training.
                That’s where our Introduction to CrossFit program comes in!
              </p>
              <p class="mt-4 text-lg text-gray-500">
                This 4 session program is meant to teach you the foundational
                movements of CrossFit, basic gymnastics, CrossFit terminology,
                and introduce athletes to the North Endurance community! In 4 x
                60 minute sessions, you’ll be ready to begin your CrossFit
                journey with us. Whether you are currently training at a gym,
                have a background in sport, or are just trying to get started,
                please consult with us to talk about what the best next step is
                for you. If you’re interested in getting started, email us at{" "}
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

export default WestStreetCrossFit
