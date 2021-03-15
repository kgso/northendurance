import React from "react"

import yoga from "../assets/images/icons/yoga.svg"
import rightStart from "../assets/images/icons/rightStart.svg"
import compPrep from "../assets/images/icons/compPrep.svg"
import weightlifting from "../assets/images/icons/weightlifting.svg"

const Grid = () => {
  return (
    <div className="py-12 bg-white my-10">
      <div className="max-w-7xl mx-auto">
        <div className="lg:text-center">
          <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
            Programs
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Something for everyone
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Although CrossFit classes are our bread and butter, we also offer
            other types of classes too, to help with your overall fitness
            journey!
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white">
                  <img
                    className="p-2"
                    src={weightlifting}
                    alt="weightlifting"
                  />
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Weightlifting
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Work on the technique, strength, and speed to progress with
                  two very technical movements: the snatch, and the clean and
                  jerk.
                </dd>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <img className="p-2" src={yoga} alt="yoga" />
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Yoga
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  This is a one hour yin yoga session to work through the tight
                  and sore muscles you have developed during the week. A great
                  way to get zen.
                </dd>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                  <img className="p-2" src={compPrep} alt="comp prep" />
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Competition Prep
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Have you been doing CrossFit classes for a while, and feel
                  like you need a challenge? This classes is hosted by our coach
                  Kim, and she will take you through a
                </dd>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <img className="p-2" src={rightStart} alt="right start" />
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Right Start
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  New to CrossFit? This program will take you through all of the
                  basic movements with proper technique so you aren't
                  overwhlemed coming to your first CrossFit class.
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Grid
