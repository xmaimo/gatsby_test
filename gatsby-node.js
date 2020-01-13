const path = require('path');

exports.createPages = async ({graphql, actions}) => {
  const { createPage } = actions
  const toursTemplate = path.resolve(`./src/templates/tourTemplate.js`)
  const blogTemplate = path.resolve(`./src/templates/blogTemplate.js`)
  const blogsTemplate = path.resolve(`./src/templates/blogsTemplate.js`)

  const { data } = await graphql(`
    query {
      tours:allContentfulTour{
        edges{
          node{
            slug
          }
        }
      }
      posts: allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.tours.edges.forEach(({node}) => {
    createPage({
      path: `tours/${node.slug}`,
      component: toursTemplate,
      context: {
        slug: node.slug
      }
    })
  })

  data.posts.edges.forEach(({node}) => {
    createPage({
      path: `blog/${node.slug}`,
      component: blogTemplate,
      context: {
        slug: node.slug
      }
    })
  })

  const posts = data.posts.edges
  const postsPerPage = 4
  const numPages = Math.ceil(posts.length / 4)
  const pages = Array.from({length: numPages})
  pages.forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blogs` : `/blogs/${i + 1}`,
      component: blogsTemplate,
      context: {
        skip: i * postsPerPage,
        limit: postsPerPage,
        numPages,
        currentPage: i + 1
      }
    })
  })
}