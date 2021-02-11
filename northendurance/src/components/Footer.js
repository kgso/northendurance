import React from "react"
import Logo from "./Logo"
import Social from "./Social"
import Crossfit from "./Crossfit"

const Footer = () => {
  return (
    <footer>
      <div class="flex flex-wrap justify-center bg-purple-800 p-6">
        <div class="flex flex-wrap mb-4 w-full">
          <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 ">
            <Logo></Logo>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 pl-8">
            <Social></Social>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 ">
            <h3 class="text-3xl py-4">Location & Hours</h3>
            <ul>
              <li>5687 West St Halifax, NS B3K 1H6</li>
              <li>Mon - Fri: 6:00 AM - 8:45 PM</li>
              <li>Sat & Sun: 9:00 AM - 2:00 PM</li>
            </ul>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
            <Crossfit></Crossfit>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
