import React from "react"
import CTA from "../components/CTA"
import Grid from "../components/Grid"
import Hero from "../components/Hero"
import Layout from "../components/Layout"

import photo from "../assets/images/shots/group_shot-1024x398.jpg"

const Home = () => {
  return (
    <Layout>
      <Hero />
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(253, 230, 138, 0.3), rgba(248, 113, 113, 0.4)), url(${photo})`,
          backgroundRepeat: "no-repeat",
          height: "400px",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <Grid />
      <CTA />
    </Layout>
  )
}

export default Home
