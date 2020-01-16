import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Tours from "../components/Tours/Tours"

const tours = ({ data }) => {
  return (
    <Layout>
      Hello from tour page
      <Tours tours={data.tours.edges} />
    </Layout>
  )
}

export const getTours = graphql`
  query {
    tours: allContentfulTour {
      edges {
        node {
          name
          price
          slug
          country
          id: contentful_id
          days
          images {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default tours
