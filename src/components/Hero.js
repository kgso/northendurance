import React, { useEffect, useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      hero1: file(
        relativePath: {
          eq: "heros/promo_photos_part_2_north_endurance_photo_credit_stoometzphoto_298.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 90)
        }
      }
      hero2: file(
        relativePath: {
          eq: "heros/promo_photos_part_2_north_endurance_photo_credit_stoometzphoto_84.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 90)
        }
      }
      hero3: file(
        relativePath: {
          eq: "heros/promo_photos_north_endurance_photo_credit_stoometzphoto_223.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 90)
        }
      }
      hero4: file(
        relativePath: {
          eq: "heros/promo_photos_part_2_north_endurance_photo_credit_stoometzphoto_295.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            quality: 100
            formats: [AUTO, WEBP, AVIF]
          )
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

  const [selectedHeroImage, setSelectedHeroImage] = useState(null)

  useEffect(() => {
    const index = Math.floor(Math.random() * heroImages.length)
    setSelectedHeroImage(heroImages[index])
  }, [])

  return (
    <section className="w-full overflow-hidden h-auto lg:[height:calc(100vh-207px)]">
      {selectedHeroImage && (
        <div className="w-full h-full flex justify-center">
          <GatsbyImage
            image={selectedHeroImage}
            alt="North Endurance Class Photo (Photo © Stoo Metz)"
            className="w-full h-full lg:max-w-[1728px]"
            style={{ height: "100%" }}
            imgClassName="w-full h-full"
            objectFit="cover"
            objectPosition="center 50%"
          />
        </div>
      )}
    </section>
  )
}

export default Hero
