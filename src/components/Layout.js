import React from "react"
import Footer from "./Footer"
import Header from "./Header"

const Layout = ({ children, moreSpace = false, background }) => {
  return (
    <div
      className="relative bg-white overflow-hidden"
      style={{
        backgroundImage: background ? `url(${background})` : "",
        backgroundSize: "contain",
        backgroundRepeat: "repeat",
        backgroundPosition: "",
      }}
    >
      <Header />
      <main
        className={`mx-auto ${
          moreSpace ? "max-w-screen-2xl" : "max-w-7xl"
        } px-4 sm:mt-6 sm:px-6 md:mt-8 lg:mt-10 lg:px-8 xl:mt-12`}
      >
        <div className="main">{children}</div>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default Layout
