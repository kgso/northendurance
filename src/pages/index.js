import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const Home = () => {
  return <Layout></Layout>
}

export const Head = ({ location }) => <SEO pathname={location.pathname} />

export default Home
