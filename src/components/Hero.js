import React from "react"

import logo from "../assets/images/logos/northEndurancezlogo.png"
import westStreet from "../assets/images/logos/westst_crossfit.png"
import homeOf from "../assets/images/logos/homeof.png"

const Hero = () => (
  <>
    <div className="sm:text-center my-10 max-w-3xl m-auto	flex flex-col sm:flex-row justify-between items-center">
      <div className="w-80 md:w-2/4">
        <img src={logo} className="mw-80" alt="North Endurance Logo"/>
      </div>
      <div className="m-auto w-2/4 my-8 sm:my-0 flex justify-center items-center">
        <div className="sm:w-1/4"></div>
        <div className="w-2/4 m-auto flex flex-row sm:flex-col justify-center items-center">
          <img src={homeOf} className="px-4 sm:px-10" alt="Home Of"/>
          <img src={westStreet} className="sm:p-2" alt="West Street CrossFit"/>
        </div>
      </div>
    </div>
  </>
)

export default Hero
