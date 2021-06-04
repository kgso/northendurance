import React from "react"
import Grid from "../components/Grid"
import Layout from "../components/Layout"
import PageHero from "../components/PageHero"
import SEO from "../components/SEO"
import SupportLocalGrid from "../components/SupportLocalGrid"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Schedule | North Endurance" />
      <PageHero title="Contact" />
      <div className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
        <Grid />
        <SupportLocalGrid />
        <div className="my-32 relative">
          <iframe
            width="800"
            height="450"
            style={{ border: 0, marginTop: "20px" }}
            loading="lazy"
            allowfullscreen
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCTl36RZaYHN7ggdTJ4QcSSBX9lUzgrtpc&q=North+Endurance,Halifax+NS"
          ></iframe>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
