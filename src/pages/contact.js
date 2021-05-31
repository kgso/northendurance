import React from "react"
import CTA from "../components/CTA"
import Grid from "../components/Grid"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import PageHero from "../components/PageHero"
import SEO from "../components/SEO"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Schedule | North Endurance" />
      <PageHero title="Contact" />
      <div className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
        <p>5687 West Street Halifax, NS B3K 1H6</p>
        <p>Phone - 902-481-9516</p>
        <p>Email - info@northendurance.ca</p>
        <p>
          Hours of Operation Monday-Friday: 6:00am - 8:30pm Saturday-Sunday:
          9:00am - 1:00pm
        </p>
        #SupportLocal
        <iframe
          width="800"
          height="450"
          style={{ border: 0, marginTop: "20px" }}
          loading="lazy"
          allowfullscreen
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCTl36RZaYHN7ggdTJ4QcSSBX9lUzgrtpc&q=North+Endurance,Halifax+NS"
        ></iframe>
      </div>
    </Layout>
  )
}

export default Contact
