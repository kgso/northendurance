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
                  className="h-8 w-auto"
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
          <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8 z-50">
            <a
              href="https://crossfitkineticsca.sites.zenplanner.com/leaderboard-day.cfm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-grey-700 hover:text-gray-300 cursor-pointer font-bold text-base uppercase tracking-wide relative"
            >
              TODAY'S WOD
            </a>
            <li className="dropdown inline-block relative text-grey-700 cursor-pointer font-bold text-base uppercase tracking-wide">
              About
              <div className="top-4 dropdown-menu absolute hidden h-auto flex flex-col pt-4 w-60 z-10">
                <Link
                  to="/schedule"
                  className="font-medium text-gray-500 hover:text-gray-900 font-bold text-base uppercase tracking-wide block"
                >
                  Schedule
                </Link>
                <Link
                  to="/our-story"
                  className="font-medium text-gray-500 hover:text-gray-900 font-bold text-base uppercase tracking-wide block"
                >
                  Our Story
                </Link>
                <Link
                  to="/team"
                  className="font-medium text-gray-500 hover:text-gray-900 font-bold text-base uppercase tracking-wide block"
                >
                  Meet Our Team
                </Link>
                <Link
                  to="/inclusion"
                  className="font-medium text-gray-500 hover:text-gray-900 font-bold text-base uppercase tracking-wide block"
                >
                  Inclusion
                </Link>
              </div>
            </li>
            <li className="dropdown inline-block relative text-grey-700 cursor-pointer font-bold text-base uppercase tracking-wide">
              Programs
              <div className="top-4 dropdown-menu absolute hidden h-auto flex flex-col pt-4 w-80 z-10">
                <Link
                  to="/programs#west-street-crossfit"
                  className="font-medium text-gray-500 hover:text-gray-900 font-bold text-base uppercase tracking-wide block"
                >
                  West Street CrossFit
                </Link>
                <Link
                  to="/programs#personal-training"
                  className="font-medium text-gray-500 hover:text-gray-900 font-bold text-base uppercase tracking-wide block"
                >
                  Personal Training
                </Link>
                <Link
                  to="/programs#introduction-to-crossfit"
                  className="font-medium text-gray-500 hover:text-gray-900 font-bold text-base uppercase tracking-wide block"
                >
                  Introduction to CrossFit
                </Link>
                <Link
                  to="/programs#wscf-lite"
                  className="font-medium text-gray-500 hover:text-gray-900 font-bold text-base uppercase tracking-wide block"
                >
                  WSCF Lite
                </Link>
                <Link
                  to="/programs#corporate-opportunities"
                  className="font-medium text-gray-500 hover:text-gray-900 font-bold text-base uppercase tracking-wide block"
                >
                  Corporate Opportunities
                </Link>
                <Link
                  to="/programs#virtual-classes"
                  className="font-medium text-gray-500 hover:text-gray-900 font-bold text-base uppercase tracking-wide block"
                >
                  Virtual Classes
                </Link>
              </div>
            </li>

            <li className="dropdown inline-block relative text-grey-700 cursor-pointer font-bold text-base uppercase tracking-wide">
              Contact
              <div className="top-4 dropdown-menu absolute hidden h-auto flex flex-col pt-4 w-60 z-10">
                <Link
                  to="/contact"
                  className="font-medium text-gray-500 hover:text-gray-900 font-bold text-base uppercase tracking-wide block"
                >
                  Contact Us
                </Link>
                <Link
                  to="/support-local"
                  className="font-medium text-gray-500 hover:text-gray-900 font-bold text-base uppercase tracking-wide block"
                >
                  #SupportLocal
                </Link>
              </div>
            </li>

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
          <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-10">
            <div className="rounded-lg shadow-lg ring-1 ring-red-700 ring-opacity-5 bg-white divide-y-2">
              <div className="pt-4 pl-2 pr-3 pb-3">
                <div className="flex items-center justify-between">
                  <Link to="/">
                    <img
                      className="h-8 w-auto"
                      src={logo}
                      alt="North Endurance Logo"
                    />
                  </Link>
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
                      <span className="inline-block relative text-grey-700 hover:text-grey-100 cursor-pointer font-bold text-base uppercase tracking-wide px-2">
                        Today's WOD
                      </span>
                    </a>

                    <li className="-m-1 p-2 inline-block relative text-grey-700 hover:text-grey-100 cursor-pointer font-bold text-base uppercase tracking-wide px-4">
                      About
                      <div className="top-4 h-auto flex flex-col pt-4">
                        <Link
                          to="/schedule"
                          className="-m-1 p-2 flex items-center rounded-md hover:bg-gray-100"
                        >
                          <span className="inline-block relative text-grey-700 hover:text-grey-100 cursor-pointer font-bold text-base uppercase tracking-wide px-2 py-1">
                            Schedule
                          </span>
                        </Link>
                        <Link
                          to="/our-story"
                          className="-m-1 p-2 flex items-center rounded-md hover:bg-gray-100"
                        >
                          <span className="inline-block relative text-grey-700 hover:text-grey-100 cursor-pointer font-bold text-base uppercase tracking-wide px-2 py-1">
                            Our Story
                          </span>
                        </Link>
                        <Link
                          to="/team"
                          className="-m-1 p-2 flex items-center rounded-md hover:bg-gray-100"
                        >
                          <span className="inline-block relative text-grey-700 hover:text-grey-100 cursor-pointer font-bold text-base uppercase tracking-wide px-2 py-1">
                            Meet Our Team
                          </span>
                        </Link>
                        <Link
                          to="/inclusion"
                          className="-m-1 p-2 flex items-center rounded-md hover:bg-gray-100"
                        >
                          <span className="inline-block relative text-grey-700 hover:text-grey-100 cursor-pointer font-bold text-base uppercase tracking-wide px-2 py-1">
                            Inclusion
                          </span>
                        </Link>
                      </div>
                    </li>

                    <li className="-m-1 p-2 inline-block relative text-grey-700 hover:text-grey-100 cursor-pointer font-bold text-base uppercase tracking-wide px-4">
                      Programs
                      <div className="top-4 h-auto flex flex-col pt-4">
                        <Link
                          to="/programs#west-street-crossfit"
                          className="-m-1 p-2 flex items-center rounded-md hover:bg-gray-100"
                        >
                          <span className="inline-block relative text-grey-700 hover:text-grey-100 cursor-pointer font-bold text-base uppercase tracking-wide px-2 py-1">
                            West Street CrossFit
                          </span>
                        </Link>
                        <Link
                          to="/programs#personal-training"
                          className="-m-1 p-2 flex items-center rounded-md hover:bg-gray-100"
                        >
                          <span className="inline-block relative text-grey-700 hover:text-grey-100 cursor-pointer font-bold text-base uppercase tracking-wide px-2 py-1">
                            Personal Training
                          </span>
                        </Link>
                        <Link
                          to="/programs#introduction-to-crossfit"
                          className="-m-1 p-2 flex items-center rounded-md hover:bg-gray-100"
                        >
                          <span className="inline-block relative text-grey-700 hover:text-grey-100 cursor-pointer font-bold text-base uppercase tracking-wide px-2 py-1">
                            Introduction to CrossFit
                          </span>
                        </Link>
                        <Link
                          to="/programs#wscf-lite"
                          className="-m-1 p-2 flex items-center rounded-md hover:bg-gray-100"
                        >
                          <span className="inline-block relative text-grey-700 hover:text-grey-100 cursor-pointer font-bold text-base uppercase tracking-wide px-2 py-1">
                            WSCF Lite
                          </span>
                        </Link>
                        <Link
                          to="/programs#corporate-opportunities"
                          className="-m-1 p-2 flex items-center rounded-md hover:bg-gray-100"
                        >
                          <span className="inline-block relative text-grey-700 hover:text-grey-100 cursor-pointer font-bold text-base uppercase tracking-wide px-2 py-1">
                            Corporate Opportunities
                          </span>
                        </Link>
                        <Link
                          to="/programs#virtual-classes"
                          className="-m-1 p-2 flex items-center rounded-md hover:bg-gray-100"
                        >
                          <span className="inline-block relative text-grey-700 hover:text-grey-100 cursor-pointer font-bold text-base uppercase tracking-wide px-2 py-1">
                            Virtual Classes
                          </span>
                        </Link>
                      </div>
                    </li>

                    <li className="-m-1 p-2 inline-block relative text-grey-700 hover:text-grey-100 cursor-pointer font-bold text-base uppercase tracking-wide px-4">
                      Contact
                      <div className="top-4 h-auto flex flex-col pt-4">
                        <Link
                          to="/contact"
                          className="-m-1 p-2 flex items-center rounded-md hover:bg-gray-100"
                        >
                          <span className="inline-block relative text-grey-700 hover:text-grey-100 cursor-pointer font-bold text-base uppercase tracking-wide px-2 py-1">
                            Contact Us
                          </span>
                        </Link>
                        <Link
                          to="/support-local"
                          className="-m-1 p-2 flex items-center rounded-md hover:bg-gray-100"
                        >
                          <span className="inline-block relative text-grey-700 hover:text-grey-100 cursor-pointer font-bold text-base uppercase tracking-wide px-2 py-1">
                            #SupportLocal
                          </span>
                        </Link>
                      </div>
                    </li>

                    <a
                      href="https://crossfitkineticsca.sites.zenplanner.com/login.cfm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="-m-1 p-2 flex items-center rounded-md hover:bg-gray-100"
                    >
                      <span className="inline-block relative text-grey-700 hover:text-grey-100 cursor-pointer font-bold text-base uppercase tracking-wide px-2">
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
    </>
  )
}

export default Header
