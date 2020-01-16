import React from "react"
import { useStaticQuery, graphql } from "gatsby"
const getData = graphql`
  query FirstQuery {
    site {
      siteMetadata {
        siteTitle: title
        description
        websiteAuthor: author
        data {
          name
          age
        }
      }
    }
  }
`
const Header = () => {
  const {
    site: { siteMetadata: info },
  } = useStaticQuery(getData)
  const title = info.siteTitle
  return (
    <div>
      <h1>author: {info.websiteAuthor}</h1>
      <h1>title: {title}</h1>
    </div>
  )
}

export default Header
