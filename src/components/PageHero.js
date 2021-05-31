import React from "react"

const PageHero = ({ title }) => (
  <div className="flex items-center justify-center mb-12">
    <h2 class="tracking-tight font-extrabold text-gray-900">
      <span class="block text-indigo-600 text-4xl">NORTH ENDURANCE</span>
      <span class="block text-red-600">STRENGTH IN COMMUNITY</span>
    </h2>
    <span className="text-8xl tracking-widest text-red-600 p-8">/</span>
    <h1 class="text-2xl tracking-tight font-extrabold text-gray-900">
      {title}
    </h1>
  </div>
)

export default PageHero
