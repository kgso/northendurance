import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Social from "./Social"

const Footer = () => {
  return (
    <footer className="footer bg-black text-white w-full">
      <div
        className="
          grid 
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 
          gap-4 px-4 py-6 
          items-start 
          lg:max-h-[120px] lg:min-h-[80px]
          text-center

          md:text-left
          md:items-start

          flex flex-col items-center
          sm:flex-none sm:grid
        "
      >
        {/* Location */}
        <div className="flex flex-col lg:items-start">
          <a
            href="https://www.google.com/maps/place/North+Endurance/@44.6533868,-63.5922157,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs leading-tight sm:text-center md:text-left"
          >
            <ul>
              <li>5687 West St</li>
              <li>Halifax, NS</li>
              <li>B3K 1H6</li>
            </ul>
          </a>
        </div>

        {/* Weekday Hours */}
        <div className="flex flex-col lg:items-start">
          <ul className="text-xs leading-tight sm:text-center md:text-left">
            <li>Mon - Fri</li>
            <li>5:45am - 2:45pm</li>
            <li>& 5pm - 8:30pm</li>
          </ul>
        </div>

        {/* Weekend Hours */}
        <div className="flex flex-col lg:items-start">
          <ul className="text-xs leading-tight">
            <li>Sat - Sun</li>
            <li>9am - 11:30am</li>
          </ul>
        </div>

        {/* OUT Foundation Image + Label */}
        <div className="flex flex-col items-center lg:items-start">
          <a
            href="https://outfoundation.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StaticImage
              src="../assets/images/logos/out-main+logo.png"
              alt="Our Foundation"
              placeholder="blurred"
              height={60}
              className="cursor-pointer"
            />
          </a>
          <span className="text-[10px] text-gray-400 italic mt-1 text-left w-full max-w-[100px]">
            Inclusive Gym
          </span>
        </div>

        {/* Hyrox Image */}
        <div className="flex justify-center lg:justify-start items-center">
          <a href="#hyrox">
            <StaticImage
              src="../assets/images/logos/HYROX_TC_Logo_primary_white.png"
              alt="Hyrox Training"
              placeholder="blurred"
              height={75}
              className="cursor-pointer"
            />
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center lg:justify-end items-center">
          <Social className="gap-0" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
