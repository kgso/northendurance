import React from "react"

const PageHero = ({ title }) => (
  <div className="flex flex-col md:flex-row md:items-center md:justify-center mt-12">
    <h2 class="tracking-tight font-extrabold text-gray-900">
      <span class="block text-indigo-600 text-3xl lg:text-4xl">
        NORTH ENDURANCE
      </span>
      <span class="block text-red-600">STRENGTH IN COMMUNITY</span>
    </h2>
    <span className="hidden md:block text-8xl tracking-widest text-red-600 lg:p-8 md:p-4">
      /
    </span>
    <h1 class="mt-2 text-xl md:mt-0 md:text-2xl lg:text-3xl tracking-tight font-extrabold text-gray-900">
      {title.toUpperCase()}
    </h1>
  </div>
)

export default PageHero
