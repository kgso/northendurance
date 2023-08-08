import React from "react"
import Img from "gatsby-image"
import { graphql, StaticQuery } from "gatsby"

const SupportLocalGrid = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
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
        <div class="lg:pb-32">
          {/* Brickyard Health */}
          <div
            id="brickyard-health"
            class="my-12 flex flex-col lg:flex-row lg:justify-between lg:items-center"
          >
            <div className="w-full lg:w-8/12">
              <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">
                Brickyard Health
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Brickyard Health is a multidisciplinary health clinic offering
                Acupuncture/Dry Needling, Chiropractic Care, Counselling,
                Massage Therapy, Naturopathic Medicine, Nutrition and
                Osteopathy.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                At Brickyard Health, we build wellness as a community. We deal
                with everything from sports injuries to prenatal and
                preventative care. Our practitioners often coordinate a course
                of action that addresses your individual health concerns. If, at
                any point during your journey at Brickyard, a member of our team
                diagnoses a condition more appropriately treated by another
                healthcare professional, we will ensure you have a referral to a
                trusted associate of our clinic or within the local community.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                Nestled between Halifax’s North End and Downtown communities,
                our patient-centered clinic provides clients the collective
                experience of our dedicated team. Consider Brickyard Health as
                part of your overall wellness team.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                <a
                  href="https://www.google.com/maps/place/Brickyard+Health/@44.6521349,-63.5818523,15z/data=!4m5!3m4!1s0x0:0xe06b9b194fa663c8!8m2!3d44.6521349!4d-63.5818523"
                  target="_blank"
                  rel="noreferrer"
                  className="text-red-600 hover:text-gray-500"
                >
                  100-2111 Maitland Street Halifax, Nova Scotia B3K 2Z8
                </a>
              </p>
              <p className="mt-4 text-lg text-gray-500">
                [p]{" "}
                <a
                  href="tel:9024062006"
                  className="text-red-600 hover:text-gray-500"
                >
                  902.406.2006
                </a>{" "}
                | [p]{" "}
                <a
                  href="tel:9024062010"
                  className="text-red-600 hover:text-gray-500"
                >
                  902.406.2010
                </a>{" "}
                |{" "}
                <a
                  href="http://www.brickyardhealth.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-red-600 hover:text-gray-500"
                >
                  www.brickyardhealth.com
                </a>
              </p>
            </div>
            <div class="lg:w-3/12 h-full w-full mt-4">
              <Img
                className="rounded-xl w-2/4 m-auto md:w-full md:max-w-lg "
                fluid={data.brickyard.childImageSharp.fluid}
                alt="Brickyard Health"
              />
            </div>
          </div>

          {/* Fresh Prints */}
          <div
            id="fresh-prints"
            class="my-12 flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center"
          >
            <div class="lg:w-3/12 h-full w-full mt-4">
              <Img
                className="rounded-xl w-2/4 m-auto md:w-full md:max-w-lg "
                fluid={data.freshprints.childImageSharp.fluid}
                alt="Fresh Prints"
              />
            </div>

            <div className="w-full lg:w-8/12">
              <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">
                Fresh Prints
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                For more than a decade Fresh Prints has been delivering
                professional screen printing and custom apparel decoration
                solutions in the heart of Halifax.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                Our street-level, customer-focused approach has allowed us to
                thrive & grow as one of the many locally owned & operated small
                businesses here on Agricola St in the North End. We take pride
                in our work and our community, come check us out! Fresh Prints
                is based in Halifax, Nova Scotia. Our print shop is located at:
              </p>
              <p className="mt-4 text-lg text-gray-500">
                <a
                  href="https://www.google.com/maps/place/2411+Agricola+St,+Halifax,+NS+B3K+4C1/@44.6532621,-63.5902048,17z/data=!3m1!4b1!4m5!3m4!1s0x4b5a217e480edef7:0x3239c3b41e9e0ddb!8m2!3d44.6532621!4d-63.5902048"
                  target="_blank"
                  rel="noreferrer"
                  className="text-red-600 hover:text-gray-500"
                >
                  2411 Agricola Street Halifax, Nova Scotia Canada B3K 4C1
                </a>
              </p>

              <p className="mt-4 text-lg text-gray-500">
                Shop Hours: 9-5, Monday to Friday
              </p>

              <p className="mt-4 text-lg text-gray-500">
                For general contact information, quotes or any questions not
                covered on our FAQ page, you can write to us at&nbsp;
                <a
                  href="mailto:fresh@freshprintshalifax.com"
                  className="text-red-600 hover:text-gray-500"
                >
                  fresh@freshprintshalifax.com
                </a>
                . For a quick and easy quote try the Instant Quote Machine. If
                you would like to speak with someone in person, call one of our
                sales reps: at{" "}
                <a
                  href="tel:9024046468"
                  className="text-red-600 hover:text-gray-500"
                >
                  (902)404-6468
                </a>
                . If there's no one there to take your call just leave a message
                and we'll get back to you right away.
              </p>
            </div>
          </div>
        </div>
      )}
    </StaticQuery>
  )
}

export default SupportLocalGrid
