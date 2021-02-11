import React from "react"
import Footer from "./Footer"
import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <div className="relative bg-white overflow-hidden">
      <Header></Header>
      <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="main">{children}</div>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default Layout
