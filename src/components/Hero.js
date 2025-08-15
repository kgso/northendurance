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
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const index = Math.floor(Math.random() * heroImages.length)
    setSelectedHeroImage(heroImages[index])
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const fadeStart = 0
      const fadeEnd = 300

      if (scrollTop <= fadeStart) setOpacity(1)
      else if (scrollTop >= fadeEnd) setOpacity(0)
      else setOpacity(1 - (scrollTop - fadeStart) / (fadeEnd - fadeStart))
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      className="w-full overflow-hidden transition-opacity duration-500 ease-out h-auto lg:[height:calc(100vh-207px)]"
      style={{ opacity }}
    >
      {selectedHeroImage && (
        <div className="w-full h-full flex justify-center">
          <GatsbyImage
            image={selectedHeroImage}
            alt="Hero Image"
            className="w-full h-full lg:max-w-[1728px]" // stops growing past this width
            style={{ height: "100%" }}
            imgClassName="w-full h-full"
            objectFit="cover"
            objectPosition="center 50%" // adjust vertical crop
          />
        </div>
      )}
    </section>
  )
}

export default Hero
