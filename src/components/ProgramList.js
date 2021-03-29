import React from "react"

import yoga from "../assets/images/shots/yoga2.jpg"
import weightlifting from "../assets/images/shots/weightlifting-1024x768.jpg"
import rightStart from "../assets/images/shots/IMG_1675.jpg"
import crossfit from "../assets/images/shots/maskson.jpg"
import compPrep from "../assets/images/shots/open-1024x683.jpg"

const ProgramList = () => {
  return (
    <div className="my-10">
      <div className="flex items-center shadow ring-1 ring-blue-100 sm:rounded-md p-4 my-4">
        <img className="w-1/3 h-full" src={yoga} alt="Yoga" />
        <div className="w-2/3 m-10">
          <h2 className="text-base text-blue-500 font-semibold tracking-wide uppercase my-1.5">
            Yoga
          </h2>
          Yoga is offered by Marie. This is a yin-style yoga where positions are
          held for longer periods of time to work into tight muscles, and can be
          a great way to relax and end the day.
        </div>
      </div>
      <div className="flex items-center shadow ring-1 ring-yellow-100 sm:rounded-md p-4 my-4">
        <img className="w-1/3 h-full" src={weightlifting} alt="Weightlifting" />
        <div className="w-2/3 m-10">
          <h2 className="text-base text-yellow-500 font-semibold tracking-wide uppercase my-1.5">
            Weightlifting
          </h2>
          Weightlifting class is a great opportunity to work on the skills to
          perfect the technique for the core two olympic lifting movements: the
          snatch, and the clean and jerk.
        </div>
      </div>
      <div className="flex items-center shadow ring-1 ring-green-100 sm:rounded-md p-4 my-4">
        <img className="w-1/3 h-full" src={rightStart} alt="Right Start" />
        <div className="w-2/3 m-10">
          <h2 className="text-base text-green-500 font-semibold tracking-wide uppercase my-1.5">
            Right Start
          </h2>
          Yoga is offered by Marie. This is a yin-style yoga where positions are
          held for longer periods of time to work into tight muscles, and can be
          a great way to relax and end the day.
        </div>
      </div>
      <div className="flex items-center shadow ring-1 ring-red-100 sm:rounded-md p-4 my-4">
        <img className="w-1/3 h-full" src={crossfit} alt="CrossFit" />
        <div className="w-2/3 m-10">
          <h2 className="text-base text-red-500 font-semibold tracking-wide uppercase my-1.5">
            CrossFit
          </h2>
          Yoga is offered by Marie. This is a yin-style yoga where positions are
          held for longer periods of time to work into tight muscles, and can be
          a great way to relax and end the day.
        </div>
      </div>
      <div className="flex items-center shadow ring-1 ring-purple-100 sm:rounded-md p-4 my-4">
        <img className="w-1/3 h-full" src={compPrep} alt="Competition Prep" />
        <div className="w-2/3 m-10">
          <h2 className="text-base text-purple-500 font-semibold tracking-wide uppercase my-1.5">
            Competition Prep
          </h2>
          Yoga is offered by Marie. This is a yin-style yoga where positions are
          held for longer periods of time to work into tight muscles, and can be
          a great way to relax and end the day.
        </div>
      </div>
    </div>
  )
}

export default ProgramList
