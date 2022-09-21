import React from "react"

import Grid from "../components/Grid"
import Layout from "../components/Layout"
import PageHero from "../components/PageHero"
import SEO from "../components/SEO"

const Contact = () => {
  const mapLink = `https://www.google.com/maps/embed/v1/place?key=${process.env.GATSBY_GOOGLE_API_KEY}&q=North+Endurance,Halifax+NS`

  return (
    <Layout>
      <SEO title="Contact | North Endurance" />
      <PageHero title="Contact" />
      <div className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
        <Grid />
        <iframe
          title="Google Map"
          width="800"
          height="450"
          style={{ border: 0, marginTop: "20px" }}
          loading="lazy"
          allowfullscreen
          src={mapLink}
        ></iframe>
      </div>
    </Layout>
  )
}

export default Contact
