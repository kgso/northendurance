import React, { useState } from "react"

const Header = () => {
  const [tabletOpen, setTabletOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  const navGroups = [
    { label: "Home", items: [{ label: "Home", href: "#top" }] },
    {
      label: "About",
      items: [
        { label: "Team", href: "#team" },
        { label: "Schedule", href: "#schedule" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      label: "Classes",
      items: [
        { label: "Functionally F!t", href: "#functionally-fit" },
        { label: "Functionally F!t L!te", href: "#functionally-fit-lite" },
        { label: "Hyrox", href: "#hyrox" },
        { label: "Weightlifting", href: "#weightlifting" },
      ],
    },
    {
      label: "Private & Team Training",
      items: [
        { label: "Personal Training", href: "#personal-training" },
        { label: "Team Training", href: "#team-training" },
      ],
    },
  ]

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 px-4 py-6 shadow">
      <nav className="flex items-center justify-between">
        {/* Sign Up Now CTA replaces Logo */}
        <a
          href="https://northendurance.sites.zenplanner.com/sign-up-now.cfm"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-xl bg-[rgb(159,42,49)] text-white font-bold text-sm uppercase tracking-wide shadow-md hover:bg-[rgb(130,30,36)] hover:text-[rgb(255,235,85)] hover:shadow-lg transition-all duration-300 ease-in-out"
        >
          Sign Up Now!
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
              <button className="cursor-pointer text-[#9f2a31] hover:opacity-70">
                {group.label}
              </button>

              {group.items.length > 1 && (
                <div className="absolute left-0 top-full w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-30">
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
