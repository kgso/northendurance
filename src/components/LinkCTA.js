import React from "react"

const LinkCTA = ({ href, children }) => (
  <a
    href={href}
    className="text-yellow-600 hover:text-yellow-700 font-medium underline"
  >
    {children}
  </a>
)

export default LinkCTA
