const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const postTemplate = path.resolve('src/templates/post.js')

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `).then((res) => {
    if (res.errors) {
      return Promise.reject(res.errors)
    } else {
      res.data.allMarkdownRemark.edges.map(({ node }) => {
        createPage({
          path: node.frontmatter.path,
          component: postTemplate,
        })
      })
    }
  })
}
