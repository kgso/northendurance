import React from "react"
import Img from "gatsby-image"
import { graphql, StaticQuery } from "gatsby"

const ProgramList = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          open: file(relativePath: { eq: "shots/theopen.jpg" }) {
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
          rightStart: file(relativePath: { eq: "shots/IMG_1675.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          crossfit: file(relativePath: { eq: "shots/maskson.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          compPrep: file(relativePath: { eq: "shots/open-1024x683.jpg" }) {
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
        <div class="relative bg-white pb-32 overflow-hidden">
          {/* SECTION 1 */}
          <div
            id="west-street-crossfit"
            class="flex-col justify-between lg:flex lg:flex-row my-12"
          >
            <div className="mt-6 lg:w-8/12">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                West Street CrossFit
              </h2>
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
            <div class="lg:w-3/12 h-full m-auto">
              <Img
                className="rounded-xl max-w-lg"
                fluid={data.crossfit.childImageSharp.fluid}
                alt="Competition Prep"
              />
            </div>
          </div>

          {/* SECTION 2 */}
          <div
            id="personal-training"
            class="flex flex-col-reverse justify-between lg:flex lg:flex-row my-12"
          >
            <div class="lg:w-3/12 h-full m-auto">
              <Img
                className="rounded-xl max-w-lg"
                fluid={data.rightStart.childImageSharp.fluid}
                alt="Right Start"
              />
            </div>

            <div className="mt-6 lg:w-8/12">
              <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">
                Personal Training
              </h2>
              <p class="mt-4 text-lg text-gray-500">
                Do you have a specific goal? Increase strength, develop your
                skills in a specfic discipline - weightlifting, gymnastics, or
                conditioning? Our personal training program will be catered 100%
                towards your development to help bring you to and exceed your
                goal!
              </p>
              <p class="mt-4 text-lg text-gray-500">
                Have you struggled to find the motivation to commit to an
                exercise program? Our trainers will help keep you accountable
                and stay motivated for the long run. It isn’t just about putting
                in the work, it’s about building confidence and making fitness a
                part of your lifestyle!
              </p>
              <p class="mt-4 text-lg text-gray-500">
                Our personal training program is led by Bernie Thibeault
                (CF-L1). If you’re interested in a program, there are two
                options to help get you started:
              </p>
              <ol className="mt-6 space-y-4">
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="flex-shrink-0 h-5 w-5 text-green-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="text-base text-gray-500">
                    Personal training is available in 30 or 60 minute blocks.
                    The first step is to have a discussion with your trainer and
                    talk about what sort of training plan is right for you and
                    your goals. Your trainer will then begin to build a program
                    for you and schedule your sessions as determined by you. The
                    individualized attention will help you train safely and
                    develop your skills at an accelerated rate compared to an
                    independent program.
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="flex-shrink-0 h-5 w-5 text-green-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="text-base text-gray-500">
                    Customized online or distance programming is meant for
                    athletes who have already been training for a period of time
                    but are looking to take their training to the next level or
                    have peaked with their current workout routine. Sometimes
                    all it takes is a fresh lens to spice up your training and
                    take your fitness to new heights!
                  </span>
                </li>
              </ol>
            </div>
          </div>

          {/* SECTION 3 */}
          <div
            id="introduction-to-crossfit"
            class="flex-col justify-between lg:flex lg:flex-row my-12"
          >
            <div className="mt-6 lg:w-8/12">
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
                for you. If you’re interested in getting started, email us at
                info@northendurance.ca!
              </p>
            </div>
            <div class="lg:w-3/12 h-full">
              <Img
                className="rounded-xl max-w-lg"
                fluid={data.open.childImageSharp.fluid}
                alt="Open"
              />
            </div>
          </div>

          {/* SECTION 4 */}
          <div
            id="corporate-opportunities"
            class="flex flex-col-reverse justify-between lg:flex lg:flex-row my-12"
          >
            <div class="lg:w-3/12 h-full">
              <Img
                className="rounded-xl max-w-lg"
                fluid={data.rightStart.childImageSharp.fluid}
                alt="Right Start"
              />
            </div>

            <div className="mt-6 lg:w-8/12">
              <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">
                Corporate Opportunities
              </h2>
              <p>
                An active lifestyle and regularly incorporating exercise, such
                as CrossFit, into your routine has been proven to help combat
                fatigue and illness, reduce stress, improve brain function,
                alertness, and lead to fewer workplace absences.
              </p>
              <p>
                Located in the heart of Halifax’s North End, with 6+ classes per
                every weekday and showers available on site, we are a quick
                commute from many local businesses! If you are with a company in
                Halifax, and you or your team would like to make fitness a part
                of your everyday reach out to us - info@northendurance.ca!
              </p>
            </div>
          </div>
        </div>
      )}
    </StaticQuery>
  )
}

export default ProgramList
