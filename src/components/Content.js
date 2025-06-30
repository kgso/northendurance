import React from "react"

import Coaches from "./Coaches"
import Schedule from "./Schedule"
import CTA from "./CTA"
import Hero from "./Hero"
import LinkCTA from "./LinkCTA"

const Content = () => {
  const sections = [
    // {
    //   id: "about",
    //   title: "About",
    //   component: (
    //     <p>
    //       This is the About section. Add information here about the gym's
    //       mission, values, and community.
    //     </p>
    //   ),
    // },
    {
      id: "schedule",
      title: "Schedule",
      component: <Schedule />,
    },
    {
      id: "team",
      title: "Team",
      component: <Coaches />,
    },
    {
      id: "group-classes",
      title: "Group Classes",
      component: (
        <>
          <p>
            <b>
              Our Functionally F!t group classes combine strength and
              conditioning training through varied high intensity workouts that
              regularly incorporate barbell movements, gymnastics, calisthenics,
              plyometrics and cardio machines.{" "}
            </b>
            We offer world class functional fitness programming from some of the
            best trainers and coaches in the business to ensure that you never
            plateau, and you'll always be challenged by a new workout every day!
          </p>
          <p>
            From squats to presses, pull-ups to push-ups, burpees to box jumps -{" "}
            <b>
              Functionally F!t classes have it all and are infinitely scalable
              to suit your needs and abilities. Whether you are a newcomer to
              fitness and exercise, you're looking to get back in the mix, or an
              elite athlete looking to shake things up - we are here to help you
              reach your goals!{" "}
            </b>
            All of our classes are led by a Trainer to help guide you through
            each session - keeping you safe with coaching cues and feedback, and
            giving you direction to make sure you get the most out of every
            workout!
          </p>
        </>
      ),
    },
    {
      id: "functionally-fit",
      title: "Functionally F!t",
      component: (
        <>
          <p>
            <b>
              FF L!te is fitness for everyone! While following the same quality
              programming as our Functionally F!t classes, our Lite program puts
              a heightened focus on foundational movements in the pursuit of
              long term health and wellness. We also understand that the typical
              "high intensity training" environment often associated with
              certain fitness programs isn't for everyone. That's why in our
              L!te program we restrict the volume of the music, we don't drop
              weights, and we maintain a more relaxing vibe while still making
              sure that you get a great workout!
            </b>
          </p>
          <p>
            If you are a parent or guardian with a young baby, and need space to
            set up a playard - we have that. If you are a senior looking to
            improve your strength or cardio to chase your grandchildren around
            the park - this program will help you do that. Or if you are someone
            who is interested in a great workout without any sort of
            intimidation this is what you're looking for!
          </p>
        </>
      ),
    },
    {
      id: "hyrox",
      title: "Hyrox",
      component: (
        <>
          <p>
            <b>
              Hyrox is the sport for everybody! And we're happy to announce
              we're now a part of the fitness phenomenon as an official HYROX
              TRAINING CLUB!
            </b>{" "}
            Training for Hyrox involves a mix of running and functional
            movements designed to improve an athlete's strength, endurance and
            overall fitness. One of the reasons Hyrox has grown so rapidly in
            popularity is because of its accessibility - a fitness methodology
            accommodating to athletes of all levels.
          </p>
          <p>
            <b>
              Whether you are aspiring to compete in a Hyrox race, or you're
              simply looking to improve your endurance and strength - our Hyrox
              classes are for you. Offered Thursdays and Sundays, our Hyrox
              classes are a great way to further supplement your weekly workout
              routine or they will help you improve your functional strength and
              cardiovascular health as a standalone exercise regiment.
            </b>
          </p>
        </>
      ),
    },
    {
      id: "weightlifting",
      title: "Weightlifting",
      component: (
        <>
          <p>
            <b>
              We believe that strength training and weightlifting are critical
              to a well-rounded fitness regiment. And that's why weightlifting
              and barbell strength training is regularly incorporated into our
              Functionally F!t classes.
            </b>{" "}
            Expect to see cleans, snatches, back squats, deadlifts, bench press,
            and more on a regular basis!
          </p>
          <p>
            <b>
              Throughout the year, we also offer limited time speciality courses
              with a heightened focus on specific lifts allowing our athletes
              more time to help master their technique and maximize their gains.
            </b>{" "}
            Interested in a weightlifting specialty course? Keep an eye on our
            social media to see when we'll be launching another one! Or if
            you're curious about how weightlifting and strength training is
            regularly a part of our Functionally F!t classes,{" "}
            <LinkCTA href="#contact">reach out to us here</LinkCTA> and we'd be
            happy to chat and share a sample of our programming with you.
          </p>
        </>
      ),
    },
    {
      id: "personal-training",
      title: "Personal Training",
      component: (
        <>
          <p>
            Do you have a specific fitness goal? Have you plateaued and need to
            shake up your routine? Or maybe you're looking for a push! To get
            started? To dig deeper? Whatever it may be our Personal Training
            Team is here for you!{" "}
            <b>
              All of our personal training programs are custom built to best
              address your needs, abilities, and fitness goals!
            </b>
          </p>
          <p>
            <b>
              Our personal training sessions are available in 60 minute blocks,
              and online programming is also available. Some of the advantages
              of having a Personal Trainer include having access to
              individualized programming, a Trainer that is specifically
              monitoring you to help with your technique and make sure you are
              moving safely, and the constant adaptation that will help you
              achieve your goals.
            </b>
          </p>
          <p>
            Our experienced team of Personal Trainers have worked with
            individuals at all skill levels - whether you are just getting off
            the couch looking to improve your quality of life, or a high level
            athlete looking for sport specific training - our team can help you
            level up!
          </p>
          <p>
            For personal training package inquiries or to set up a no obligation
            consult, <LinkCTA href="#contact">click here</LinkCTA>!
          </p>
        </>
      ),
    },
    {
      id: "team-training",
      title: "Team Training",
      component: (
        <>
          <p>
            <b>
              Heads up coaches and youth sports teams - team training is now
              available at North Endurance! Are you a part of a youth sports
              team looking to enhance your team's training routine? We're proud
              to now offer team training packages with exclusive access to our
              facility.
            </b>
          </p>
          <p>
            Weight training, and strength and conditioning has exploded in
            popularity for young athletes across all sports.{" "}
            <b>
              Our programming looks to improve their sport specific abilities,
              while also providing a foundation of safe and healthy habits that
              will take them through their sports careers and beyond.
            </b>{" "}
            In-season or off-season training, our trainers can provide a program
            suited to your team, their sport, age, and skill level.
          </p>
          <p>
            Our team of trainers have been working with young athletes in
            football, hockey and more since 2018. In that period of time we've
            had the opportunity to watch players improve on the field, on the
            ice and in the gym while practicing safe fundamental movement
            patterns to keep them strong and fit through sports and through
            life!
          </p>
          <p>
            We believe that success in sport specific training starts with a
            respect for functional fitness! Let us help pave the way for your
            players' success with team strength and conditioning training!
          </p>
          <p>
            To arrange a tour, schedule a consult, or pricing inquiries{" "}
            <LinkCTA href="#contact">click here</LinkCTA>!
          </p>
        </>
      ),
    },
    {
      id: "contact",
      component: <CTA />,
      wrapperClass: "max-w-3xl", // smaller container for contact
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Dynamic Sections */}
      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`py-20 px-4 lg:px-12 ${
            index % 2 === 0 ? "bg-gray-50" : "bg-white"
          }`}
        >
          <div
            className={`${
              section.wrapperClass || "max-w-5xl"
            } mx-auto text-center`}
          >
            <h2 className="text-3xl font-semibold uppercase tracking-widest mb-4">
              {section.title}
            </h2>
            <div className="text-gray-700 text-lg space-y-4 text-left">
              {section.component}
            </div>
          </div>
        </section>
      ))}
    </>
  )
}

export default Content
