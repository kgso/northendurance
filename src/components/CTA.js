import React from "react"

const ContactCTA = () => {
  const phone = process.env.GATSBY_CONTACT_PHONE
  const email = process.env.GATSBY_CONTACT_EMAIL
  const phoneLink = "tel:" + phone
  const emailLink = "mailto:" + email
  const signUpLink =
    "https://northendurance.sites.zenplanner.com/sign-up-now.cfm"

  return (
    <section className="bg-white py-12 px-6 text-center rounded-lg shadow-md max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
        Let's Get Moving — Together!
      </h2>
      <p className="text-gray-700 mb-8">
        New to group fitness? Visiting from out of town? Just getting started?
        We’d love to meet you. Reach out today and let’s find the best path
        forward.
      </p>

      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
        <a
          href={signUpLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-md font-semibold text-sm uppercase tracking-wide bg-primary text-white hover:text-yellow-400 transition duration-300"
        >
          Sign Up Now!
        </a>

        <a
          href={phoneLink}
          className="px-6 py-3 rounded-md font-semibold text-sm uppercase tracking-wide border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white transition duration-300"
        >
          Call Us
        </a>

        <a
          href={emailLink}
          className="px-6 py-3 rounded-md font-semibold text-sm uppercase tracking-wide border-2 border-primary text-primary hover:bg-primary hover:text-white transition duration-300"
        >
          Send Us a Message
        </a>
      </div>
    </section>
  )
}

export default ContactCTA
