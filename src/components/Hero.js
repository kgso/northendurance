import React from "react"

import logo from "../assets/images/logos/northEndurancezlogo.png"

const Hero = () => (
  <>
    <div className="w-full my-10 m-auto flex flex-col md:flex-row justify-between items-center">
      <div className="w-full flex flex-col items-center justify-center">
        <img
          src={logo}
          style={{ maxHeight: "220px" }}
          alt="North Endurance Logo"
        />
      </div>
    </div>
  </>
)

export default Hero
