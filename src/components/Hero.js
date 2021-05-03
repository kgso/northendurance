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
            <span className="h-2/4 text-2xl tracking-widest text-red-600 p-2">
              HOME OF
            </span>
            <img src={westStreet} className="h-2/4 p-2" />
          </div>
        </div>
      </div>
    </div>

    <div className="my-10 p-2">
      <div className="sm:text-center">
        <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:max-w-3xl sm:mx-auto md:mt-5 md:text-xl">
          We are North Endurance, or West Street CrossFit in the affiliate
          world. If you are looking for a place to feel accepted, make new
          friends, increase your aerobic or lifting capacity, set PRs and be a
          part of a diverse, fun-loving community - then welcome home.
        </p>
      </div>
    </div>
  </>
)

export default Hero
