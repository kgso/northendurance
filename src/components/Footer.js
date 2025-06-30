import React from "react"
import Social from "./Social"

const Footer = () => {
  return (
    <footer>
      <div className="footer flex flex-wrap justify-between p-6 text-white bg-gray-800">
        {/* Address */}
        <div className="w-full lg:w-1/6 p-4 flex flex-col">
          <ul className="text-sm">
            <a
              href="https://www.google.com/maps/place/North+Endurance/@44.6533868,-63.5922157,17z/data=!3m2!4b1!5s0x4b5a217e479dae83:0x2f0d2dc854491867!4m5!3m4!1s0x4b5a23d5b8ab2cad:0x774b1ba6c8196c63!8m2!3d44.653383!4d-63.590027"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>5687 West St</li>
              <li>Halifax, NS</li>
              <li>B3K 1H6</li>
            </a>
          </ul>
        </div>

        {/* Hours */}
        <div className="w-full lg:w-1/6 p-4 flex flex-col">
          <ul className="text-sm">
            <li>Mon - Fri</li>
            <li>5:45am - 2:45pm</li>
            <li>& 5:00pm - 8:30pm</li>
          </ul>
        </div>

        {/* Hours */}
        <div className="w-full lg:w-1/6 p-4 flex flex-col">
          <ul className="text-sm">
            <li>Sat - Sun</li>
            <li>9am - 11:30am</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="w-full lg:w-1/6 p-4 flex flex-col">
          <ul className="text-sm">
            <li>Your first class is on us!</li>
            <li>
              {/* TODO CREATE */}
              {/* <BookButton /> */}
              <a href="" className="text-secondary">
                Book now!
              </a>
            </li>
          </ul>
        </div>

        {/* Social & Phone Icon */}
        <div className="w-full lg:w-2/6 p-4 flex flex-col items-end">
          <Social />
        </div>
      </div>
    </footer>
  )
}

export default Footer
