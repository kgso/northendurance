import React from "react"
import styled from "styled-components"

import Journal from "../assets/images/crossfit/cfjpur.png"
import CFL1 from "../assets/images/crossfit/CFL1.png"
import CrossCom from "../assets/images/crossfit/cf.com_.png"

const Crossfit = () => {
  return (
    <div className="flex flex-row	justify-center items-center">
      <a
        href="https://www.crossfit.com/certificate-courses/level-1"
        target="_blank"
        rel="noopener noreferrer"
        title="CrossFit Level 1"
      >
        <CrossfitImage
          className="my-2"
          style={{ maxWidth: "100px" }}
          src={CFL1}
          alt="CrossFit Level 1"
        />
      </a>
      <a
        href="https://journal.crossfit.com/"
        target="_blank"
        rel="noopener noreferrer"
        title="CrossFit Journal"
      >
        <CrossfitImage
          className="my-2"
          style={{ maxWidth: "100px", height: "100%" }}
          src={Journal}
          alt="CrossFit Journal"
        />
      </a>
      <a
        href="https://www.crossfit.com/"
        target="_blank"
        rel="noopener noreferrer"
        title="CrossFit.Com"
      >
        <CrossfitImage
          className="my-2"
          style={{ maxWidth: "100px", height: "100%" }}
          src={CrossCom}
          alt="CrossFit.Com"
        />
      </a>
    </div>
  )
}

export default Crossfit

export const CrossfitImage = styled.img`
  width: auto;
`
