import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../assets/images/logos/homeLogo.png"
import zenplanner from "../assets/images/logos/zenplannerlogo.png"

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <div className="container justify-between m-auto items-center px-4 sm:px-6 lg:px-8 bg-white z-10 py-3">
        <nav
          className="relative flex items-center justify-between sm:h-10"
          aria-label="Global"
        >
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link to="/">
                <img
                  className="h-8 w-auto sm:h-10"
                  src={logo}
                  alt="North Endurance Logo"
                />
              </Link>
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
            <a
              href="https://crossfitkineticsca.sites.zenplanner.com/leaderboard-day.cfm"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-500 hover:text-gray-900"
            >
              Today's WOD
            </a>
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
              to="/contact"
              className="font-medium text-gray-500 hover:text-gray-900"
            >
              Contact
            </Link>

            <a
              href="https://crossfitkineticsca.sites.zenplanner.com/login.cfm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-8 w-auto inline"
                src={zenplanner}
                alt="ZenPlanner"
              />
            </a>
          </div>
        </nav>
        {mobileOpen && (
          <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-lg ring-1 ring-red ring-opacity-5 bg-white divide-y-2">
              <div className="pt-4 pl-2 pr-3 pb-3">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src={logo}
                      alt="North Endurance Logo"
                    />
                  </div>
                  <div className="-mr-2">
                    <button
                      onClick={() => setMobileOpen(!mobileOpen)}
                      type="button"
                      className="bg-white rounded-md p-2 inline-flex items-center justify-center text-grey-400 hover:text-grey-500 hover:bg-grey-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-grey-500"
                    >
                      <span className="sr-only">Close menu</span>
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-2">
                    <a
                      href="https://crossfitkineticsca.sites.zenplanner.com/leaderboard-day.cfm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="-m-1 p-2 flex items-center rounded-md hover:bg-gray-100"
                    >
                      <span className="ml-1 text-base font-medium text-gray-900">
                        Today's WOD
                      </span>
                    </a>

                    <Link
                      to="/about"
                      className="-m-1 p-2 flex items-center rounded-md hover:bg-gray-100"
                    >
                      <span className="ml-1 text-base font-medium text-gray-900">
                        About
                      </span>
                    </Link>

                    <Link
                      to="/programs"
                      className="-m-1 p-2 flex items-center rounded-md hover:bg-gray-100"
                    >
                      <span className="ml-1 text-base font-medium text-gray-900">
                        Programs
                      </span>
                    </Link>

                    <Link
                      to="/contact"
                      className="-m-1 p-2 flex items-center rounded-md hover:bg-gray-100"
                    >
                      <span className="ml-1 text-base font-medium text-gray-900">
                        Contact
                      </span>
                    </Link>

                    <a
                      href="https://crossfitkineticsca.sites.zenplanner.com/login.cfm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="-m-1 p-2 flex items-center rounded-md hover:bg-gray-100"
                    >
                      <span className="ml-1 text-base font-medium text-gray-900">
                        ZenPlanner
                      </span>
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="h-12"></div>
    </>
  )
}

export default Header
