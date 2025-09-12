import React, { useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"

const Header = () => {
  const [tabletOpen, setTabletOpen] = useState(false)

  const emailLink = "mailto:" + process.env.GATSBY_CONTACT_EMAIL

  const data = useStaticQuery(graphql`
    query {
      logo: file(
        relativePath: { eq: "logos/north_endurance_black_small.png" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE, layout: CONSTRAINED)
        }
      }
    }
  `)

  const logoImage = getImage(data.logo)
  const signUpLink =
    "https://northendurance.sites.zenplanner.com/sign-up-now.cfm"
  const zenplannerLink = "https://northendurance.sites.zenplanner.com/login.cfm"

  const navGroups = [
    {
      label: "About",
      items: [
        { label: "Team", href: "#team" },
        { label: "Schedule", href: "#schedule" },
        { label: "Contact", href: emailLink },
        { label: "Zenplanner", href: zenplannerLink },
      ],
    },
    {
      label: "Programs",
      items: [
        { label: "Functionally F!t", href: "#functionally-fit" },
        { label: "Hyrox", href: "#hyrox" },
        { label: "FF L!te", href: "#functionally-fit-lite" },
        { label: "Weightlifting", href: "#weightlifting" },
        {
          label: "Personal Training",
          href: "#personal-training",
          className: "text-black font-bold",
        },
        {
          label: "Team Training",
          href: "#team-training",
          className: "text-black font-bold",
        },
      ],
    },
  ]

  // Helper function to check if link is external
  const isExternal = href =>
    href.startsWith("http") || href.startsWith("mailto:")

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white z-50 px-4 py-6 shadow">
        {/* Mobile Header */}
        <nav className="flex items-center justify-between lg:hidden">
          {/* Hamburger left */}
          <button
            onClick={() => setTabletOpen(!tabletOpen)}
            className="p-3 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Logo center */}
          <a href="#top">
            <GatsbyImage
              image={logoImage}
              alt="North Endurance Logo"
              className="w-[180px] h-auto"
            />
          </a>

          {/* Sign Up right */}
          <a
            href={signUpLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center px-3 py-2 rounded-md font-bold text-xs uppercase tracking-wider bg-primary text-white hover:text-yellow-400 transition duration-300"
          >
            <span className="block">Sign Up</span>
            <span className="block">Now!</span>
          </a>
        </nav>

        {/* Mobile Dropdown Menu */}
        {tabletOpen && (
          <div className="lg:hidden mt-4 space-y-6 border-t pt-4 font-nav text-base">
            {navGroups.map(group => (
              <div key={group.label}>
                <p className="font-bold uppercase tracking-wide mb-2 text-[#9f2a31]">
                  {group.label}
                </p>
                <div className="space-y-2">
                  {group.items.map(item => (
                    <a
                      key={item.label}
                      href={item.href}
                      {...(isExternal(item.href)
                        ? {
                            target: "_blank",
                            rel: "noopener noreferrer",
                          }
                        : {})}
                      className={`block px-2 py-1 hover:bg-gray-100 rounded ${
                        item.className ? item.className : "text-[#9f2a31]"
                      }`}
                      onClick={() => setTabletOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center justify-between">
          {/* Links left */}
          <div className="flex space-x-8 text-base font-nav">
            {navGroups.map(group => (
              <div key={group.label} className="relative group">
                <button className="cursor-pointer hover:opacity-70 text-[#9f2a31]">
                  {group.label}
                </button>
                {group.items.length > 1 && (
                  <div className="absolute left-0 top-full w-max bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-30">
                    <div className="pt-2">
                      {group.items.map(item => (
                        <a
                          key={item.label}
                          href={item.href}
                          {...(isExternal(item.href)
                            ? {
                                target: "_blank",
                                rel: "noopener noreferrer",
                              }
                            : {})}
                          className={`block px-4 py-2 text-sm hover:bg-gray-100 ${
                            item.className ? item.className : "text-[#9f2a31]"
                          }`}
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Logo center */}
          <a href="#top">
            <GatsbyImage
              image={logoImage}
              alt="North Endurance Logo"
              className="w-[150px] h-auto"
            />
          </a>

          {/* Sign Up right */}
          <a
            href={signUpLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-xl bg-[rgb(159,42,49)] text-white font-bold text-sm uppercase tracking-wide shadow-md hover:bg-[rgb(130,30,36)] hover:text-[rgb(255,235,85)]"
          >
            Sign Up Now!
          </a>
        </nav>
      </header>

      {/* Push page content below fixed header */}
      <div className="pt-[96px]"></div>
    </>
  )
}

export default Header
