import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Seo = ({ title2 }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <title>{title2} | {data.site.siteMetadata.title}</title>
  )
}

export default Seo