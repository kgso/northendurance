import React from "react"

import WestStreet from "../assets/images/logos/weststreetwhite.png"

const Logo = () => {
  return (
    <div className="w-32 py-4">
      <img className="w-full" src={WestStreet} alt="West Street CrossFit" />
    </div>
  )
}

export default Logo
