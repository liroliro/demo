import React from 'react'

import Layout from 'components/Layout'

import { graphql, Link } from 'gatsby'

export default ({ data }) => {
  const { allMarkdownRemark: pages } = data

  return (
    <Layout pageTitle='Home'>
      <oma-grid-row>
        <section className='section'>
          <h1 className='heading page__heading'>Generated content!</h1>
          <div className='google-docs'>
            {pages.edges.map((edge) => {
              const title = edge.node.frontmatter.name
              const text = edge.node.html

              const createFullMarkup = () => {
                return {
                  __html: `<h2>${title}</h2>${text}`,
                }
              }

              return (
                <div
                  dangerouslySetInnerHTML={createFullMarkup()}
                  className='generated-content'
                />
              )
            })}
          </div>
          <section>
            <h2 className='heading--medium'>Eller allt content uppdelat!</h2>
            <ul className='split-google-docs'>
              {pages.edges.map((page) => {
                return (
                  <Link to={page.node.frontmatter.path}>
                    <li className='list-item'>{page.node.frontmatter.name}</li>
                  </Link>
                )
              })}
            </ul>
          </section>
        </section>
      </oma-grid-row>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            name
            path
          }
        }
      }
    }
  }
`
