import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import groupShot from "../assets/images/heros/promo_photos_north_endurance_photo_credit_stoometzphoto_223.jpg"

const Seo = ({ title }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
          description
        }
      }
    }
  `)

  const siteTitle = site.siteMetadata.title
  const metaDescription = site.siteMetadata.description

  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle

  return (
    <Helmet title={fullTitle}>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />

      <meta name="description" content={metaDescription} />

      <link rel="canonical" href={site.siteMetadata.siteUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_CA" />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:image" content={groupShot} />

      <link rel="icon" href="/favicon.ico" />
      <meta name="theme-color" content="#9f2a31" />
    </Helmet>
  )
}

export default Seo
