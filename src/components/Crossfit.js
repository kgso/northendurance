import React from "react"
import styled from "styled-components"

import Journal from "../assets/images/crossfit/cfjpur.png"
import CFL1 from "../assets/images/crossfit/CFL1.png"
import CrossCom from "../assets/images/crossfit/cf.com_.png"

const Crossfit = () => {
  return (
    <div className="flex flex-row	justify-center items-center">
      <CrossfitImage
        className="my-2"
        style={{ maxWidth: "80px", height: "100%" }}
        src={CFL1}
        alt="CrossFit Journal"
      />
      <CrossfitImage
        className="my-2"
        style={{ maxWidth: "100px", height: "100%" }}
        src={Journal}
        alt="CrossFit Journal"
      />
      <CrossfitImage
        className="my-2"
        style={{ maxWidth: "100px", height: "100%" }}
        src={CrossCom}
        alt="CrossFit Journal"
      />
    </div>
  )
}

export default Crossfit

export const CrossfitImage = styled.img`
  width: auto;
`
