import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import Social from "./Social"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      outLogo: file(relativePath: { eq: "logos/out-main+logo.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE, height: 48, layout: FIXED)
        }
      }
      hyroxLogo: file(
        relativePath: { eq: "logos/HYROX_TC_Logo_primary_white.png" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE, height: 61, layout: FIXED)
        }
      }
    }
  `)

  const outLogoImage = getImage(data.outLogo)
  const hyroxLogoImage = getImage(data.hyroxLogo)

  return (
    <footer className="footer bg-black text-white w-full">
      <div
        className="
          flex flex-col gap-6 items-center
          sm:grid sm:grid-cols-2 lg:grid-cols-6
          px-4 py-6 
          text-center
          md:text-left md:items-start
          lg:max-h-[120px] lg:min-h-[80px]
        "
      >
        {/* Location */}
        <div className="flex flex-col items-center">
          <a
            href="https://www.google.com/maps/place/North+Endurance/@44.6533868,-63.5922157,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs leading-tight sm:text-center md:text-left hover:text-secondary"
          >
            <ul>
              <li>5687 West St</li>
              <li>Halifax, NS</li>
              <li>B3K 1H6</li>
            </ul>
          </a>
        </div>

        {/* Weekday Hours */}
        <div className="flex flex-col items-center">
          <ul className="text-xs leading-tight sm:text-center md:text-left">
            <li>Mon - Fri</li>
            <li>5:45am - 2pm</li>
            <li>& 5pm - 7:30pm</li>
          </ul>
        </div>

        {/* Weekend Hours */}
        <div className="flex flex-col items-center">
          <ul className="text-xs leading-tight">
            <li>Sat - Sun</li>
            <li>9am - 11:30am</li>
          </ul>
        </div>

        {/* OUT Foundation Image + Label */}
        <div className="flex flex-col items-center">
          <a
            href="https://outfoundation.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GatsbyImage
              image={outLogoImage}
              alt="OUT Foundation"
              className="cursor-pointer"
            />
          </a>
          <span className="text-[10px] text-gray-400 italic w-full text-center">
            Inclusive Gym
          </span>
        </div>

        {/* Hyrox Image */}
        <div className="flex flex-col items-center">
          <a href="#hyrox">
            <GatsbyImage
              image={hyroxLogoImage}
              alt="Hyrox Training"
              className="cursor-pointer"
            />
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center">
          <Social className="gap-0" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
