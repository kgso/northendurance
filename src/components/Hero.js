import React from "react"

import logo from "../assets/images/logos/northEndurancezlogo.png"
import westStreet from "../assets/images/logos/westst_crossfit.png"
import homeOf from "../assets/images/logos/homeof.png"

const Hero = () => (
  <>
    <div className="w-full lg:w-3/4 my-10 m-auto flex flex-col md:flex-row justify-between items-center">
      <div className="w-full md:w-3/4 flex flex-col items-center justify-center">
        <img
          src={logo}
          style={{ maxHeight: "180px" }}
          alt="North Endurance Logo"
        />
        <div className="my-4">
          <span
            className="text-lg"
            style={{ fontFamily: "LogoFont", letterSpacing: "8px" }}
          >
            The Home Of
          </span>
          &nbsp;&nbsp;
          <span
            className="text-lg"
            style={{ fontFamily: "Varsity", letterSpacing: "4px" }}
          >
            <span className="text-xl">w</span>
            est&nbsp;
            <span className="text-xl">s</span>
            treet&nbsp;
            <span className="text-xl">c</span>
            ross
            <span className="text-xl">f</span>
            it
          </span>
        </div>
      </div>
      <div className="hidden md:block w-2/4 mx-8 sm:my-0 md:w-1/4 flex justify-center items-center">
        <div className="w-full m-auto">
          <img src={westStreet} className="w-auto" alt="West Street CrossFit" />
        </div>
      </div>
    </div>
  </>
)

export default Hero
