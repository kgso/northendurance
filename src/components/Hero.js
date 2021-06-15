import React from "react"

import logo from "../assets/images/logos/northEndurancezlogo.png"
import westStreet from "../assets/images/logos/westst_crossfit.png"
import homeOf from "../assets/images/logos/homeof.png"

const Hero = () => (
  <>
      <div className="sm:text-center my-10 max-w-3xl m-auto	flex flex-col sm:flex-row justify-between items-center">
        <div className="w-80 md:w-2/4">
          <img src={logo} className="mw-80" />
        </div>
        <div className="m-auto w-2/4 my-8 sm:my-0 flex justify-center items-center">
          <div className="sm:w-1/4"></div>
          <div className="w-2/4 m-auto flex flex-row sm:flex-col justify-center items-center">
            <img src={homeOf} className="h-1/4 px-4 sm:px-10" />
            <img src={westStreet} className="h-3/4 sm:p-2" />
          </div>
        </div>
      </div>
  </>
)

export default Hero
