import React, { useEffect, useState } from "react"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
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
    // Pick one random image once on mount
    const index = Math.floor(Math.random() * heroImages.length)
    setSelectedHeroImage(heroImages[index])
  }, [])

  useEffect(() => {
    // Scroll fade effect
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const fadeStart = 0
      const fadeEnd = 300

      if (scrollTop <= fadeStart) {
        setOpacity(1)
      } else if (scrollTop >= fadeEnd) {
        setOpacity(0)
      } else {
        setOpacity(1 - (scrollTop - fadeStart) / (fadeEnd - fadeStart))
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      className="relative w-full bg-white overflow-hidden transition-opacity duration-500 ease-out h-[60vh] lg:h-[92vh]"
      style={{ opacity }}
    >
      {/* Only render image when loaded */}
      {selectedHeroImage && (
        <GatsbyImage
          image={selectedHeroImage}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      )}

      {/* Wave SVG — visible only on lg+ screens */}
      <svg
        className="hidden lg:block absolute bottom-0 left-0 w-full h-[400px] z-10"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
      >
        <path
          d="M0,280 C400,240 1100,350 1440,150 L1440,400 L0,400 Z"
          fill="black"
        />
        <path
          d="M0,280 C400,240 1100,350 1440,150"
          fill="none"
          stroke="#9e2a31"
          strokeWidth="6"
        />
      </svg>

      {/* Logo block — only visible on lg+ screens */}
      <div className="hidden lg:block absolute bottom-[25px] right-[40px] z-20 text-right">
        <StaticImage
          src="../assets/images/logos/north_endurance_white_red_small.png"
          alt="North Endurance Logo"
          className="w-[260px] h-auto mb-4"
        />
      </div>
    </section>
  )
}

export default Hero
