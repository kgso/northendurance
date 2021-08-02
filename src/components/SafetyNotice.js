import React from "react"

const SafetyNotice = () => (
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
        keep North Endurance clean and safe! If you are interested in getting
        started with us, or you have any questions, please{" "}
        <a
          className="text-red-600 hover:text-gray-500"
          href="mailto:info@northendurance.ca"
        >
          click here
        </a>{" "}
        to contact us!
      </p>
    </div>
  </div>
)

export default SafetyNotice
