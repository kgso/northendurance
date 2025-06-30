import React from "react"
import { formatPhone } from "../utils/Utils"

const ContactCTA = () => {
  const phone = process.env.GATSBY_CONTACT_PHONE
  const email = process.env.GATSBY_CONTACT_EMAIL
  const phoneLink = "tel:" + phone
  const emailLink = "mailto:" + email
  const dropInLink = "#" // update with real link later

  return (
    <section className="bg-white py-12 px-6 text-center rounded-lg shadow-md max-w-4xl mx-auto mt-16">
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
        Ready to Get Started?
      </h2>
      <p className="text-gray-700 mb-8">
        Whether you're new to group fitness or just new to the area — let's
        connect.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href={dropInLink}
          className="bg-blue-500 hover:bg-blue-300 text-white px-6 py-3 rounded-lg font-medium transition"
        >
          Schedule a Drop-In
        </a>
        <a
          href={phoneLink}
          className="bg-yellow-500 hover:bg-yellow-300 text-white px-6 py-3 rounded-lg font-medium transition"
        >
          Call Us
        </a>
        <a
          href={emailLink}
          className="bg-green-500 hover:bg-green-300 text-white px-6 py-3 rounded-lg font-medium transition"
        >
          Send Us a Message
        </a>
      </div>
    </section>
  )
}

export default ContactCTA
