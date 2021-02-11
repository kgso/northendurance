import React from "react"

const Hero = () => {
  return (
    <div class="sm:text-center lg:text-left">
      <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span class="block xl:inline">North Endurance</span>
        <span class="block text-red-600 xl:inline">strength in community</span>
      </h1>
      <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
        We are North Endurance, or West Street CrossFit in the affiliate world.
        If you are looking for a place to feel accepted, make new friends,
        increase your aerobic or lifting capacity, set PRs and be a part of a
        diverse, fun-loving community - then welcome home.
      </p>
      <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <div class="rounded-md shadow">
          <a
            href="#"
            class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
          >
            Get started
          </a>
        </div>
        <div class="mt-3 sm:mt-0 sm:ml-3">
          <a
            href="#"
            class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 md:py-4 md:text-lg md:px-10"
          >
            Drop In
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
