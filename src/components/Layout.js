import React from "react"

import Footer from "./Footer"
import Header from "./Header"
import Content from "./Content"

const Layout = ({ children, moreSpace = false }) => {
  return (
    <div className="relative bg-white overflow-hidden flex flex-col min-h-screen">
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default Layout
