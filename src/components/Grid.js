import React from "react"

import nav from "../assets/images/icons/nav-grid.svg"
import emailImg from "../assets/images/icons/email.svg"
import phoneImg from "../assets/images/icons/phone-grid.svg"
import clockImg from "../assets/images/icons/clock-grid.svg"

const Grid = () => {
  const phone = process.env.GATSBY_CONTACT_PHONE
  const email = process.env.GATSBY_CONTACT_EMAIL
  const phoneLink = "tel:" + process.env.GATSBY_CONTACT_PHONE
  const emailLink = "mailto:" + process.env.GATSBY_CONTACT_EMAIL
  const mapLink =
    "https://www.google.com/maps/place/North+Endurance/@44.6533868,-63.5922157,17z/data=!3m2!4b1!5s0x4b5a217e479dae83:0x2f0d2dc854491867!4m5!3m4!1s0x4b5a23d5b8ab2cad:0x774b1ba6c8196c63!8m2!3d44.653383!4d-63.590027"

  return (
    <div className="mb-7 max-w-7xl mx-auto">
      <div className="mt-10">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white">
                <img className="p-2" src={nav} alt="location" />
              </div>
            </div>
            <div className="ml-4">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Location
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                <a href={mapLink}>
                  <p>5687 West Street</p>
                  <p>Halifax, NS</p>
                  <p>B3K 1H6</p>
                </a>
              </dd>
            </div>
          </div>

          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <img className="p-2" src={phoneImg} alt="phone" />
              </div>
            </div>
            <div className="ml-4">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Phone
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                <a href={phoneLink}>{phone}</a>
              </dd>
            </div>
          </div>

          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                <img className="p-2" src={emailImg} alt="email" />
              </div>
            </div>
            <div className="ml-4">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Email
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                <a href={emailLink}>{email}</a>
              </dd>
            </div>
          </div>

          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                <img className="p-2" src={clockImg} alt="right start" />
              </div>
            </div>
            <div className="ml-4">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Hours of Operation
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                <p>Monday-Friday: 6:00am - 8:30pm</p>
                <p>Saturday-Sunday: 9:00am - 1:00pm</p>
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </div>
  )
}

export default Grid
