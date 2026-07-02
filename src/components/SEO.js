import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import groupShot from "../assets/images/heros/promo_photos_north_endurance_photo_credit_stoometzphoto_223.jpg"

const Seo = ({ title, description, pathname = "/", noindex = false }) => {
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
  const siteUrl = site.siteMetadata.siteUrl
  const metaDescription = description || site.siteMetadata.description

  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`
  const canonical = new URL(normalizedPath, siteUrl).toString()
  const ogImage = new URL(groupShot, siteUrl).toString()

  return (
    <>
      <title>{fullTitle}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow"}
      />

      <meta name="description" content={metaDescription} />

      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_CA" />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />

      <link rel="icon" href="/favicon.ico" />
      <meta name="theme-color" content="#9f2a31" />
    </>
  )
}

export default Seo
