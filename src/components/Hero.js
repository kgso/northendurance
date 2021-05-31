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
        <h3 className="mt-4 text-lg text-gray-900">
          Keeping Our Athletes and Community Safe
        </h3>
        <p className="mt-4 text-lg text-gray-500">
          Welcome to North Endurance - home of West Street CrossFit! As the
          COVID-19 pandemic continues to affect our day to day lives, the health
          and safety of our athletes and community has never been more important
          to us. We are currently operating at a limited capacity as we work to
          keep North Endurance clean and safe! Regrettably we are not able to
          accept new members at this time - but if you are interested in getting
          started with us, or you have any questions, please click here to
          contact us!
        </p>
      </div>
    </div>
  </>
)

export default Hero
