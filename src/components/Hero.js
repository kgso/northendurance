import React from "react"
import dumbbell from "../assets/images/icons/dumbbell.svg"
import rings from "../assets/images/icons/rings.svg"
import barbell from "../assets/images/icons/barbell.svg"
import rope from "../assets/images/icons/rope.svg"
import kettlebell from "../assets/images/icons/kettlebell.svg"

const Hero = () => {
  return (
    <div className="sm:text-center my-10">
      {/* <div>
        <img className="w-16" src={dumbbell} alt="dumbbell" />
        <img className="w-14" src={rings} alt="rings" />
      </div> */}
      <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block xl:inline">North Endurance</span>
        <span className="block text-red-600">strength in community</span>
      </h1>
      <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
        We are North Endurance, or West Street CrossFit in the affiliate world.
        If you are looking for a place to feel accepted, make new friends,
        increase your aerobic or lifting capacity, set PRs and be a part of a
        diverse, fun-loving community - then welcome home.
      </p>
      {/* <div>
        <img className="w-16" src={kettlebell} alt="kettlebell" />
        <img className="w-16" src={barbell} alt="barbell" />
        <img className="w-16" src={rope} alt="rope" />
      </div> */}
    </div>
  )
}

export default Hero
