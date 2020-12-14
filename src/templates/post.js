import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

export default ({ data }) => {
  const title = data.markdownRemark.frontmatter.name
  const text = data.markdownRemark.html

  const createFullMarkup = () => {
    return {
      __html: `<h2 class='split-content__heading'>${title}</h2>${text}`,
    }
  }

  return (
    <Layout pageTitle={data.markdownRemark.frontmatter.name}>
      <oma-grid-row>
        <div
          dangerouslySetInnerHTML={createFullMarkup()}
          className='split-content'
        />
        <p>
          Till <Link to='/'>startsida.</Link>
        </p>
      </oma-grid-row>
    </Layout>
  )
}

export const query = graphql`
  query PostByPath($path: String) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        name
      }
    }
  }
`
