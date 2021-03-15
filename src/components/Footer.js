import React from "react"
import Logo from "./Logo"
import Social from "./Social"
import Crossfit from "./Crossfit"

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-wrap justify-center bg-gray-900 p-6 text-white">
        <div className="flex flex-wrap mb-4 w-full">
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 justify-center items-center flex">
            <Logo></Logo>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-8justify-center items-center flex flex-col">
            <div className="w-auto m-auto">
              <h3 className="text-2xl py-4">Location & Hours</h3>
              <ul>
                <li className="text-sm">5687 West St Halifax, NS B3K 1H6</li>
                <li className="text-sm">Mon - Fri: 6:00 AM - 8:45 PM</li>
                <li className="text-sm">Sat & Sun: 9:00 AM - 2:00 PM</li>
              </ul>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-8 justify-center items-center flex flex-row">
            <Crossfit></Crossfit>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 pl-8 justify-center items-center flex">
            <Social></Social>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
