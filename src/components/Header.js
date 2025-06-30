import React, { useState } from "react"
import logo from "../assets/images/logos/homeLogo.png"

const Header = () => {
  const [tabletOpen, setTabletOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  const navGroups = [
    {
      label: "About",
      items: [
        { label: "Team", href: "#team" },
        { label: "Schedule", href: "#schedule" }, // optional
      ],
    },
    {
      label: "Classes",
      items: [
        { label: "Functionally F!t", href: "#functionally-fit" },
        { label: "Hyrox", href: "#hyrox" },
      ],
    },
    {
      label: "Private & Team Training",
      items: [
        { label: "Personal Training", href: "#personal-training" },
        { label: "Team Training", href: "#team-training" },
      ],
    },
    {
      label: "Contact",
      items: [{ label: "Contact", href: "#contact" }],
    },
  ]

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 px-4 py-6 shadow">
      <nav className="flex items-center justify-between">
        <a href="#top">
          <img className="h-8 w-auto" src={logo} alt="North Endurance Logo" />
        </a>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={() => setTabletOpen(!tabletOpen)}
            className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
          >
            <svg
              className="h-6 w-6"
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
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex space-x-8 text-base font-nav text-[#9f2a31]">
          {navGroups.map(group => (
            <div key={group.label} className="relative group">
              {/* Nav button */}
              <button className="cursor-pointer text-[#9f2a31] hover:opacity-70">
                {group.label}
              </button>

              {/* Dropdown for groups with more than one item */}
              {group.items.length > 1 && (
                <div className="absolute left-0 top-full w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-30">
                  {/* Optional: Add a small transparent padding at the top to catch mouse movement */}
                  <div className="pt-2">
                    {group.items.map(item => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-2 text-sm font-nav text-[#9f2a31] hover:bg-gray-100"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Single-link groups rendered as links */}
              {group.items.length === 1 && (
                <a
                  href={group.items[0].href}
                  className="absolute inset-0 z-10"
                  aria-label={group.items[0].label}
                />
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Mobile Nav */}
      {tabletOpen && (
        <div className="lg:hidden mt-4 bg-white rounded-md shadow-md ring-1 ring-gray-300">
          <nav className="px-4 py-4 space-y-4">
            {navGroups.map((group, index) => (
              <div key={group.label}>
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === index ? null : index)
                  }
                  className="w-full text-left font-nav uppercase tracking-widest text-[#9f2a31]"
                >
                  {group.label}
                </button>
                {openDropdown === index && (
                  <div className="mt-2 space-y-2 pl-4">
                    {group.items.map(item => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setTabletOpen(false)}
                        className="block text-sm font-nav text-[#9f2a31] hover:text-[#801e25]"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
