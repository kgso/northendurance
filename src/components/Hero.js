import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import React, { useMemo } from "react"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      hero1: file(
        relativePath: {
          eq: "heros/promo_photos_part_2_north_endurance_photo_credit_stoometzphoto_298.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      hero2: file(
        relativePath: {
          eq: "heros/promo_photos_part_2_north_endurance_photo_credit_stoometzphoto_84.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      hero3: file(
        relativePath: {
          eq: "heros/promo_photos_north_endurance_photo_credit_stoometzphoto_223.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      hero4: file(
        relativePath: {
          eq: "heros/promo_photos_part_2_north_endurance_photo_credit_stoometzphoto_295.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `)

  const heroImages = [
    getImage(data.hero1),
    getImage(data.hero2),
    getImage(data.hero3),
    getImage(data.hero4),
  ]

  const selectedHeroImage = useMemo(() => {
    const index = Math.floor(Math.random() * heroImages.length)
    return heroImages[index]
  }, [heroImages])

  return (
    <section
      id="top"
      className="relative w-full h-[70vh] lg:h-[90vh] overflow-hidden"
    >
      {/* Optimized hero image fills the section */}
      <GatsbyImage
        image={selectedHeroImage}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ position: "absolute" }}
      />

      {/* Global dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

      {/* Gradient mask */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background: `radial-gradient(circle at bottom right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 25%)`,
        }}
      />

      {/* Corner image */}
      <StaticImage
        src="../assets/images/logos/north_endurance_white_red_small.png"
        alt="North Endurance Logo"
        className="absolute bottom-6 right-6 opacity-0 animate-fade-in z-30"
        style={{ width: "400px", position: "absolute" }}
      />
    </section>
  )
}

export default Hero
