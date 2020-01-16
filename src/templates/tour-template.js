import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "../css/template.module.css"
import Image from "gatsby-image"
import { FaMoneyBillWave, FaMap } from "react-icons/fa"
import { Link } from "gatsby"

const tourTemplate = ({ data }) => {
  const {
    name,
    price,
    country,
    days,
    description: { description },
    images,
    start,
    journey,
  } = data.tour

  return (
    <Layout>
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {images.map((item, index) => {
              return (
                <Image
                  fluid={item.fluid}
                  key={index}
                  alt={name}
                  className={styles.image}
                />
              )
            })}
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <p>
              <FaMoneyBillWave className={styles.icon}></FaMoneyBillWave>
              starting from ${price}
            </p>
            <p>
              <FaMap className={styles.icon}></FaMap>
              {country}
            </p>
          </div>
          <h4>starts on : {start}</h4>
          <h4>duration : {days} days</h4>
          <p className={styles.description}>{description}</p>
          <h2>daily schedules</h2>
          <ul className={styles.journey}>
            {journey.map((item, index) => {
              return <li key={index}>{item.day}</li>
            })}
          </ul>
          <Link to="/tours">back to tours</Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    tour: contentfulTour(slug: { eq: $slug }) {
      name
      price
      country
      days
      start(formatString: "dddd MMMM Do, YYYY")
      journey {
        day
        info
      }
      description {
        description
      }
      images {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`

export default tourTemplate
