import React from "react"
import Img from "gatsby-image"
import { graphql, StaticQuery } from "gatsby"

const PersonalTraining = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          personalTraining: file(relativePath: { eq: "pt/pt.jpg" }) {
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
          {/* Personal Training */}
          <div
            id="personal-training"
            class="my-12 flex flex-col xl:flex-row lg:justify-between lg:items-center"
          >
            <div class="w-full lg:w-9/12 h-full m-4">
              <Img
                className="rounded-xl w-2/4 m-auto md:w-full md:max-w-lg xl:m-0"
                fluid={data.personalTraining.childImageSharp.fluid}
                alt="Personal Training"
              />
            </div>

            <div className="w-full lg:w-8/12 text-center">
              <p class="mt-4 text-lg text-gray-500">
                Do you have a specific fitness goal? Have you plateaued and need
                to shake up your routine? Or maybe you’re looking for a push! To
                get started? To dig deeper? Whatever it may be our Personal
                Training Team is here for you! All of our personal training
                programs are custom built to best address your needs, abilities,
                and fitness goals!
              </p>
              <p class="mt-4 text-3xl text-gray-500">
                Wondering how to get started?{" "}
                <a
                  className="text-red-600 hover:text-gray-500"
                  href="mailto:info@northendurance.ca"
                >
                  Click here
                </a>
                !
              </p>
              <p class="mt-4 text-lg text-gray-500">
                Our first step is to arrange a no obligation consultation with
                someone from our team, after our initial assessment we’ll
                connect you with a team member who we believe can help you to
                best attack your goals!
              </p>
              <p class="mt-4 text-lg text-gray-500">
                Our personal training sessions are available in 30 and 60 minute
                blocks, and online programming is also available! There are many
                benefits to working with a personal trainer including the
                advantage of having individualized attention that will help
                accelerate your skill development, while also help you to train
                safely with the watchful eye of someone from our team.
              </p>
              <p class="mt-4 text-lg text-gray-500">
                Collectively, our team of Personal Trainers have decades worth
                of experience working with individuals at all skill levels -
                whether you are just getting off the couch looking to improve
                your quality of life, or a high level athlete looking for sport
                specific training - our team can help you level up!
              </p>
              <p class="mt-4 text-3xl text-gray-500">
                <a
                  className="text-red-600 hover:text-gray-500"
                  href="mailto:info@northendurance.ca"
                >
                  <i>Connect with us today</i>
                </a>{" "}
                for more information on packages and pricing.
              </p>
            </div>
          </div>
        </div>
      )}
    </StaticQuery>
  )
}

export default PersonalTraining
