import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../assets/images/logos/northEndurancezlogo.png"
import zenplanner from "../assets/images/logos/zenplannerlogo.png"

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="container justify-between m-auto items-center pt-6 px-4 sm:px-6 lg:px-8 max-w-7xl">
      <nav
        className="relative flex items-center justify-between sm:h-10"
        aria-label="Global"
      >
        <>
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a href="/">
                <img className="h-8 w-auto sm:h-10" src={logo} />
              </a>
              <div className="-mr-2 flex items-center md:hidden">
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  id="main-menu"
                  aria-haspopup="true"
                  onClick={() => setMobileOpen(!mobileOpen)}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div
            className={`${
              !mobileOpen && "hidden"
            } md:block md:ml-10 md:pr-4 md:space-x-8`}
          >
            <Link
              to="/about"
              className="font-medium text-gray-500 hover:text-gray-900"
            >
              About
            </Link>
            <Link
              to="/programs"
              className="font-medium text-gray-500 hover:text-gray-900"
            >
              Programs
            </Link>
            <Link
              to="/schedule"
              className="font-medium text-gray-500 hover:text-gray-900"
            >
              Schedule
            </Link>
            <Link
              to="/faq"
              className="font-medium text-gray-500 hover:text-gray-900"
            >
              FAQ
            </Link>
            <Link
              to="https://crossfitkineticsca.sites.zenplanner.com/login.cfm"
              target="_blank"
            >
              <img
                className="h-8 w-auto inline"
                src={zenplanner}
                alt="ZenPlanner"
              />
            </Link>
          </div>
        </>
      </nav>
      <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div>
                <img
                  class="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Workflow"
                />
              </div>
              <div class="-mr-2">
                <button
                  type="button"
                  class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span class="sr-only">Close menu</span>
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-8">
                <a
                  href="#"
                  class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <span class="ml-3 text-base font-medium text-gray-900">
                    Analytics
                  </span>
                </a>

                <a
                  href="#"
                  class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <span class="ml-3 text-base font-medium text-gray-900">
                    Engagement
                  </span>
                </a>

                <a
                  href="#"
                  class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <span class="ml-3 text-base font-medium text-gray-900">
                    Security
                  </span>
                </a>

                <a
                  href="#"
                  class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <span class="ml-3 text-base font-medium text-gray-900">
                    Integrations
                  </span>
                </a>

                <a
                  href="#"
                  class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <span class="ml-3 text-base font-medium text-gray-900">
                    Automations
                  </span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
