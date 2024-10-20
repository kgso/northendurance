import React from "react"
import Social from "./Social"
import { formatPhone } from "../utils/Utils"

import pinImg from "../assets/images/icons/pin.svg"
import phoneImg from "../assets/images/icons/phone.svg"

const Footer = () => {
  const phone = process.env.GATSBY_CONTACT_PHONE
  const phoneLink = "tel:" + process.env.GATSBY_CONTACT_PHONE

  return (
    <footer>
      <div className="flex flex-wrap justify-center bg-gray-900 p-6 text-white mt-12">
        <div className="flex flex-wrap mb-4 w-full">
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 p-8justify-center items-center flex flex-col">
            <div className="w-auto m-auto">
              <h3 className="text-2xl py-4">Location & Hours</h3>
              <ul>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row"
                >
                  <img src={pinImg} alt="location icon" />
                  <li className="text-sm margin ml-3">
                    5687 West St Halifax, NS B3K 1H6
                  </li>
                </a>
                <a
                  href={phoneLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row"
                >
                  <img src={phoneImg} alt="phone icon" />
                  <li className="text-sm ml-3">{formatPhone(phone)}</li>
                </a>
                <li className="text-sm">Mon - Fri: 6:00 AM - 8:30 PM</li>
                <li className="text-sm">Sat & Sun: 9:00 AM - 1:00 PM</li>
              </ul>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 justify-center items-center flex">
            <Social></Social>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
