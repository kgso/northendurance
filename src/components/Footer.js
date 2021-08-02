import React from "react"
import Logo from "./Logo"
import Social from "./Social"
import Crossfit from "./Crossfit"

import pin from "../assets/images/icons/pin.svg"
import phone from "../assets/images/icons/phone.svg"

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-wrap justify-center bg-gray-900 p-6 text-white mt-12">
        <div className="flex flex-wrap mb-4 w-full">
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 justify-center items-center flex">
            <Logo></Logo>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-8justify-center items-center flex flex-col">
            <div className="w-auto m-auto">
              <h3 className="text-2xl py-4">Location & Hours</h3>
              <ul>
                <a
                  href="https://www.google.com/maps/place/5687+West+St,+Halifax,+NS+B3K+1H6/data=!4m2!3m1!1s0x4b5a217e388c53c7:0xf807ed041023fea2?sa=X&ved=2ahUKEwiskKjDhdbvAhXPRTABHU5zApoQ8gEwAHoECAYQAQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row"
                >
                  <img src={pin} alt="location icon" />
                  <li className="text-sm margin ml-3">
                    5687 West St Halifax, NS B3K 1H6
                  </li>
                </a>
                <a
                  href="tel:9024819516"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row"
                >
                  <img src={phone} alt="phone icon" />
                  <li className="text-sm  ml-3">902-481-9516</li>
                </a>
                <li className="text-sm">Mon - Fri: 6:00 AM - 8:30 PM</li>
                <li className="text-sm">Sat & Sun: 9:00 AM - 1:00 PM</li>
              </ul>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-8 justify-center items-center flex flex-row">
            <Crossfit></Crossfit>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 justify-center items-center flex">
            <Social></Social>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
