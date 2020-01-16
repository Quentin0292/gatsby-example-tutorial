import React from "react"
import { graphql, StaticQuery } from "gatsby"

const getData = graphql`
  query {
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
const HeaderStatic = () => {
  return (
    <StaticQuery
      query={getData}
      render={data => {
        return (
          <div>
            <p>{data.site.siteMetadata.description}</p>
          </div>
        )
      }}
    ></StaticQuery>
  )
}

export default HeaderStatic
