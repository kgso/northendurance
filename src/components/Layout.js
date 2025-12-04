import React from "react"

import Footer from "./Footer"
import Header from "./Header"
import Content from "./Content"
import Hero from "./Hero"
import SEO from "./SEO"

const Layout = () => {
  return (
    <div className="relative bg-white overflow-hidden flex flex-col lg:h-screen">
      {/* SEO meta tags */}
      <SEO title="North Endurance | Strength in Community" />

      {/* Fixed header */}
      <Header />

      {/* Scrollable content area between header and sticky footer */}
      <div className="flex-grow overflow-y-auto">
        <main id="top">
          <Hero />
          <Content />
        </main>
      </div>

      {/* Sticky footer only on large screens */}
      <div className="lg:sticky lg:bottom-0 lg:z-30">
        <Footer />
      </div>
    </div>
  )
}

export default Layout
