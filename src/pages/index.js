import React from "react"
import { Link, graphql } from "gatsby"

import DefaultLayout from "../layouts/default"
import Image from "../components/image"
import SEO from "../components/seo"

import { groupBy, getDateYear } from "../utils"

const IndexPage = ({ data }) => {
  // all posts without dates are assumed to be drafts or pages
  // not to be added to postsList
  const posts = data.allMarkdownRemark.edges.filter(
    p => p.node.frontmatter.date !== null
  )
  const postsList = posts =>
    posts.map(post => (
      <div className="posts-container" key={post.node.id}>
        <li>
          <div className="post-date code">
            <small>{post.node.frontmatter.date}</small>
          </div>
          <div className="title index-title">
            <Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link>
          </div>
          <div className="shortText">
            {post.node.frontmatter.shortText}
          </div>
        </li>
      </div>
    ))

  const postsListContainer = groupBy(posts, getDateYear)
    .map(({ year, posts }, i) => (
      <div key={i}>
        {postsList(posts)}
      </div>
    ))
    .reverse()
  return (
    <DefaultLayout>
      <SEO title="Home" />
      <section>
        <ul>{postsListContainer}</ul>
      </section>
    </DefaultLayout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YY")
            title
            shortText
          }
        }
      }
    }
  }
`
