import React from "react"

import logo from "../assets/images/logos/northEndurancezlogo.png"
import westStreet from "../assets/images/logos/westst_crossfit.png"

const Hero = () => (
  <>
    <div className="">
      <div className="sm:text-center my-10 max-w-3xl m-auto	flex flex-col sm:flex-row justify-between items-center">
        <div className="w-2/4">
          <img src={logo} className="mw-80" />
        </div>
        <div className="w-2/4 flex justify-center items-center">
          <span className="w-0 sm:w-1/2"></span>
          <div className="w-1/2 m-auto flex sm:flex-col justify-center items-center">
            <h2 class="tracking-tight font-extrabold text-gray-900">
              <span class="block text-red-600">HOME OF</span>
            </h2>
            <img src={westStreet} className="h-2/4 p-2" />
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Hero
